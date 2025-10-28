const { existsSync } = require('fs');
const path = require('path');

const hasNativeRollup = checkForNativeBinding();

if (!hasNativeRollup) {
  disableChunkOptimizer();
}

function checkForNativeBinding() {
  try {
    const packageBase = getPackageBase();
    if (!packageBase) {
      return false;
    }

    const resolved = require.resolve(`@rollup/rollup-${packageBase}`);
    return existsSync(resolved);
  } catch (error) {
    return false;
  }
}

function getPackageBase() {
  const bindings = {
    android: {
      arm: { base: 'android-arm-eabi' },
      arm64: { base: 'android-arm64' },
    },
    darwin: {
      arm64: { base: 'darwin-arm64' },
      x64: { base: 'darwin-x64' },
    },
    linux: {
      arm: { base: 'linux-arm-gnueabihf', musl: 'linux-arm-musleabihf' },
      arm64: { base: 'linux-arm64-gnu', musl: 'linux-arm64-musl' },
      ppc64: { base: 'linux-powerpc64le-gnu' },
      riscv64: { base: 'linux-riscv64-gnu' },
      s390x: { base: 'linux-s390x-gnu' },
      x64: { base: 'linux-x64-gnu', musl: 'linux-x64-musl' },
    },
    win32: {
      arm64: { base: 'win32-arm64-msvc' },
      ia32: { base: 'win32-ia32-msvc' },
      x64: { base: 'win32-x64-msvc' },
    },
  };

  const platform = process.platform;
  const architecture = process.arch;
  const platformEntry = bindings[platform];
  if (!platformEntry) {
    return null;
  }

  const archEntry = platformEntry[architecture];
  if (!archEntry) {
    return null;
  }

  if ('musl' in archEntry) {
    const isMusl = Boolean(process.report && process.report.getReport && !process.report.getReport().header.glibcVersionRuntime);
    if (isMusl) {
      return archEntry.musl || archEntry.base;
    }
  }

  return archEntry.base;
}

function disableChunkOptimizer() {
  const chunkOptimizerPath = resolveChunkOptimizerPath();
  if (!chunkOptimizerPath) {
    return;
  }

  const exportsStub = {
    optimizeChunks: async function optimizeChunks(original) {
      return original;
    },
  };

  require.cache[chunkOptimizerPath] = {
    id: chunkOptimizerPath,
    filename: chunkOptimizerPath,
    loaded: true,
    exports: exportsStub,
  };

  process.stdout.write('[rollup-native-fallback] Chunk optimizer disabled because native Rollup bindings are unavailable.\n');
}

function resolveChunkOptimizerPath() {
  try {
    const packageDir = path.dirname(require.resolve('@angular/build/package.json'));
    const candidate = path.join(packageDir, 'src/builders/application/chunk-optimizer.js');
    if (existsSync(candidate)) {
      return candidate;
    }
  } catch (error) {
    return null;
  }

  return null;
}
