(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[461],{

/***/ 68327:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

;// CONCATENATED MODULE: ./node_modules/@angular/localize/fesm2022/localize.mjs
/**
 * @license Angular v18.2.13
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * The character used to mark the start and end of a "block" in a `$localize` tagged string.
 * A block can indicate metadata about the message or specify a name of a placeholder for a
 * substitution expressions.
 *
 * For example:
 *
 * ```ts
 * $localize`Hello, ${title}:title:!`;
 * $localize`:meaning|description@@id:source message text`;
 * ```
 */
const BLOCK_MARKER$1 = ':';
/**
 * The marker used to separate a message's "meaning" from its "description" in a metadata block.
 *
 * For example:
 *
 * ```ts
 * $localize `:correct|Indicates that the user got the answer correct: Right!`;
 * $localize `:movement|Button label for moving to the right: Right!`;
 * ```
 */
const MEANING_SEPARATOR = '|';
/**
 * The marker used to separate a message's custom "id" from its "description" in a metadata block.
 *
 * For example:
 *
 * ```ts
 * $localize `:A welcome message on the home page@@myApp-homepage-welcome: Welcome!`;
 * ```
 */
const ID_SEPARATOR = '@@';
/**
 * The marker used to separate legacy message ids from the rest of a metadata block.
 *
 * For example:
 *
 * ```ts
 * $localize `:@@custom-id␟2df64767cd895a8fabe3e18b94b5b6b6f9e2e3f0: Welcome!`;
 * ```
 *
 * Note that this character is the "symbol for the unit separator" (␟) not the "unit separator
 * character" itself, since that has no visual representation. See https://graphemica.com/%E2%90%9F.
 *
 * Here is some background for the original "unit separator character":
 * https://stackoverflow.com/questions/8695118/whats-the-file-group-record-unit-separator-control-characters-and-its-usage
 */
const LEGACY_ID_INDICATOR = '\u241F';

/**
 * A lazily created TextEncoder instance for converting strings into UTF-8 bytes
 */
let textEncoder;
/**
 * Return the message id or compute it using the XLIFF1 digest.
 */
function digest(message) {
  return message.id || computeDigest(message);
}
/**
 * Compute the message id using the XLIFF1 digest.
 */
function computeDigest(message) {
  return sha1(serializeNodes(message.nodes).join('') + `[${message.meaning}]`);
}
/**
 * Return the message id or compute it using the XLIFF2/XMB/$localize digest.
 */
function decimalDigest(message, preservePlaceholders) {
  return message.id || computeDecimalDigest(message, preservePlaceholders);
}
/**
 * Compute the message id using the XLIFF2/XMB/$localize digest.
 */
function computeDecimalDigest(message, preservePlaceholders) {
  const visitor = new _SerializerIgnoreExpVisitor(preservePlaceholders);
  const parts = message.nodes.map(a => a.visit(visitor, null));
  return computeMsgId(parts.join(''), message.meaning);
}
/**
 * Serialize the i18n ast to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * @internal
 */
class _SerializerVisitor {
  visitText(text, context) {
    return text.value;
  }
  visitContainer(container, context) {
    return `[${container.children.map(child => child.visit(this)).join(', ')}]`;
  }
  visitIcu(icu, context) {
    const strCases = Object.keys(icu.cases).map(k => `${k} {${icu.cases[k].visit(this)}}`);
    return `{${icu.expression}, ${icu.type}, ${strCases.join(', ')}}`;
  }
  visitTagPlaceholder(ph, context) {
    return ph.isVoid ? `<ph tag name="${ph.startName}"/>` : `<ph tag name="${ph.startName}">${ph.children.map(child => child.visit(this)).join(', ')}</ph name="${ph.closeName}">`;
  }
  visitPlaceholder(ph, context) {
    return ph.value ? `<ph name="${ph.name}">${ph.value}</ph>` : `<ph name="${ph.name}"/>`;
  }
  visitIcuPlaceholder(ph, context) {
    return `<ph icu name="${ph.name}">${ph.value.visit(this)}</ph>`;
  }
  visitBlockPlaceholder(ph, context) {
    return `<ph block name="${ph.startName}">${ph.children.map(child => child.visit(this)).join(', ')}</ph name="${ph.closeName}">`;
  }
}
const serializerVisitor = new _SerializerVisitor();
function serializeNodes(nodes) {
  return nodes.map(a => a.visit(serializerVisitor, null));
}
/**
 * Serialize the i18n ast to something xml-like in order to generate an UID.
 *
 * Ignore the expressions so that message IDs stays identical if only the expression changes.
 *
 * @internal
 */
class _SerializerIgnoreExpVisitor extends _SerializerVisitor {
  constructor(preservePlaceholders) {
    super();
    this.preservePlaceholders = preservePlaceholders;
  }
  visitPlaceholder(ph, context) {
    // Do not take the expression into account when `preservePlaceholders` is disabled.
    return this.preservePlaceholders ? super.visitPlaceholder(ph, context) : `<ph name="${ph.name}"/>`;
  }
  visitIcu(icu) {
    let strCases = Object.keys(icu.cases).map(k => `${k} {${icu.cases[k].visit(this)}}`);
    // Do not take the expression into account
    return `{${icu.type}, ${strCases.join(', ')}}`;
  }
}
/**
 * Compute the SHA1 of the given string
 *
 * see https://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 *
 * WARNING: this function has not been designed not tested with security in mind.
 *          DO NOT USE IT IN A SECURITY SENSITIVE CONTEXT.
 */
function sha1(str) {
  textEncoder ??= new TextEncoder();
  const utf8 = [...textEncoder.encode(str)];
  const words32 = bytesToWords32(utf8, Endian.Big);
  const len = utf8.length * 8;
  const w = new Uint32Array(80);
  let a = 0x67452301,
    b = 0xefcdab89,
    c = 0x98badcfe,
    d = 0x10325476,
    e = 0xc3d2e1f0;
  words32[len >> 5] |= 0x80 << 24 - len % 32;
  words32[(len + 64 >> 9 << 4) + 15] = len;
  for (let i = 0; i < words32.length; i += 16) {
    const h0 = a,
      h1 = b,
      h2 = c,
      h3 = d,
      h4 = e;
    for (let j = 0; j < 80; j++) {
      if (j < 16) {
        w[j] = words32[i + j];
      } else {
        w[j] = rol32(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
      }
      const fkVal = fk(j, b, c, d);
      const f = fkVal[0];
      const k = fkVal[1];
      const temp = [rol32(a, 5), f, e, k, w[j]].reduce(add32);
      e = d;
      d = c;
      c = rol32(b, 30);
      b = a;
      a = temp;
    }
    a = add32(a, h0);
    b = add32(b, h1);
    c = add32(c, h2);
    d = add32(d, h3);
    e = add32(e, h4);
  }
  // Convert the output parts to a 160-bit hexadecimal string
  return toHexU32(a) + toHexU32(b) + toHexU32(c) + toHexU32(d) + toHexU32(e);
}
/**
 * Convert and format a number as a string representing a 32-bit unsigned hexadecimal number.
 * @param value The value to format as a string.
 * @returns A hexadecimal string representing the value.
 */
function toHexU32(value) {
  // unsigned right shift of zero ensures an unsigned 32-bit number
  return (value >>> 0).toString(16).padStart(8, '0');
}
function fk(index, b, c, d) {
  if (index < 20) {
    return [b & c | ~b & d, 0x5a827999];
  }
  if (index < 40) {
    return [b ^ c ^ d, 0x6ed9eba1];
  }
  if (index < 60) {
    return [b & c | b & d | c & d, 0x8f1bbcdc];
  }
  return [b ^ c ^ d, 0xca62c1d6];
}
/**
 * Compute the fingerprint of the given string
 *
 * The output is 64 bit number encoded as a decimal string
 *
 * based on:
 * https://github.com/google/closure-compiler/blob/master/src/com/google/javascript/jscomp/GoogleJsMessageIdGenerator.java
 */
function fingerprint(str) {
  textEncoder ??= new TextEncoder();
  const utf8 = textEncoder.encode(str);
  const view = new DataView(utf8.buffer, utf8.byteOffset, utf8.byteLength);
  let hi = hash32(view, utf8.length, 0);
  let lo = hash32(view, utf8.length, 102072);
  if (hi == 0 && (lo == 0 || lo == 1)) {
    hi = hi ^ 0x130f9bef;
    lo = lo ^ -0x6b5f56d8;
  }
  return BigInt.asUintN(32, BigInt(hi)) << BigInt(32) | BigInt.asUintN(32, BigInt(lo));
}
function computeMsgId(msg, meaning = '') {
  let msgFingerprint = fingerprint(msg);
  if (meaning) {
    // Rotate the 64-bit message fingerprint one bit to the left and then add the meaning
    // fingerprint.
    msgFingerprint = BigInt.asUintN(64, msgFingerprint << BigInt(1)) | msgFingerprint >> BigInt(63) & BigInt(1);
    msgFingerprint += fingerprint(meaning);
  }
  return BigInt.asUintN(63, msgFingerprint).toString();
}
function hash32(view, length, c) {
  let a = 0x9e3779b9,
    b = 0x9e3779b9;
  let index = 0;
  const end = length - 12;
  for (; index <= end; index += 12) {
    a += view.getUint32(index, true);
    b += view.getUint32(index + 4, true);
    c += view.getUint32(index + 8, true);
    const res = mix(a, b, c);
    a = res[0], b = res[1], c = res[2];
  }
  const remainder = length - index;
  // the first byte of c is reserved for the length
  c += length;
  if (remainder >= 4) {
    a += view.getUint32(index, true);
    index += 4;
    if (remainder >= 8) {
      b += view.getUint32(index, true);
      index += 4;
      // Partial 32-bit word for c
      if (remainder >= 9) {
        c += view.getUint8(index++) << 8;
      }
      if (remainder >= 10) {
        c += view.getUint8(index++) << 16;
      }
      if (remainder === 11) {
        c += view.getUint8(index++) << 24;
      }
    } else {
      // Partial 32-bit word for b
      if (remainder >= 5) {
        b += view.getUint8(index++);
      }
      if (remainder >= 6) {
        b += view.getUint8(index++) << 8;
      }
      if (remainder === 7) {
        b += view.getUint8(index++) << 16;
      }
    }
  } else {
    // Partial 32-bit word for a
    if (remainder >= 1) {
      a += view.getUint8(index++);
    }
    if (remainder >= 2) {
      a += view.getUint8(index++) << 8;
    }
    if (remainder === 3) {
      a += view.getUint8(index++) << 16;
    }
  }
  return mix(a, b, c)[2];
}
function mix(a, b, c) {
  a -= b;
  a -= c;
  a ^= c >>> 13;
  b -= c;
  b -= a;
  b ^= a << 8;
  c -= a;
  c -= b;
  c ^= b >>> 13;
  a -= b;
  a -= c;
  a ^= c >>> 12;
  b -= c;
  b -= a;
  b ^= a << 16;
  c -= a;
  c -= b;
  c ^= b >>> 5;
  a -= b;
  a -= c;
  a ^= c >>> 3;
  b -= c;
  b -= a;
  b ^= a << 10;
  c -= a;
  c -= b;
  c ^= b >>> 15;
  return [a, b, c];
}
// Utils
var Endian;
(function (Endian) {
  Endian[Endian["Little"] = 0] = "Little";
  Endian[Endian["Big"] = 1] = "Big";
})(Endian || (Endian = {}));
function add32(a, b) {
  return add32to64(a, b)[1];
}
function add32to64(a, b) {
  const low = (a & 0xffff) + (b & 0xffff);
  const high = (a >>> 16) + (b >>> 16) + (low >>> 16);
  return [high >>> 16, high << 16 | low & 0xffff];
}
// Rotate a 32b number left `count` position
function rol32(a, count) {
  return a << count | a >>> 32 - count;
}
function bytesToWords32(bytes, endian) {
  const size = bytes.length + 3 >>> 2;
  const words32 = [];
  for (let i = 0; i < size; i++) {
    words32[i] = wordAt(bytes, i * 4, endian);
  }
  return words32;
}
function byteAt(bytes, index) {
  return index >= bytes.length ? 0 : bytes[index];
}
function wordAt(bytes, index, endian) {
  let word = 0;
  if (endian === Endian.Big) {
    for (let i = 0; i < 4; i++) {
      word += byteAt(bytes, index + i) << 24 - 8 * i;
    }
  } else {
    for (let i = 0; i < 4; i++) {
      word += byteAt(bytes, index + i) << 8 * i;
    }
  }
  return word;
}

// This module specifier is intentionally a relative path to allow bundling the code directly
/**
 * Parse a `$localize` tagged string into a structure that can be used for translation or
 * extraction.
 *
 * See `ParsedMessage` for an example.
 */
function parseMessage(messageParts, expressions, location, messagePartLocations, expressionLocations = []) {
  const substitutions = {};
  const substitutionLocations = {};
  const associatedMessageIds = {};
  const metadata = parseMetadata(messageParts[0], messageParts.raw[0]);
  const cleanedMessageParts = [metadata.text];
  const placeholderNames = [];
  let messageString = metadata.text;
  for (let i = 1; i < messageParts.length; i++) {
    const {
      messagePart,
      placeholderName = computePlaceholderName(i),
      associatedMessageId
    } = parsePlaceholder(messageParts[i], messageParts.raw[i]);
    messageString += `{$${placeholderName}}${messagePart}`;
    if (expressions !== undefined) {
      substitutions[placeholderName] = expressions[i - 1];
      substitutionLocations[placeholderName] = expressionLocations[i - 1];
    }
    placeholderNames.push(placeholderName);
    if (associatedMessageId !== undefined) {
      associatedMessageIds[placeholderName] = associatedMessageId;
    }
    cleanedMessageParts.push(messagePart);
  }
  const messageId = metadata.customId || computeMsgId(messageString, metadata.meaning || '');
  const legacyIds = metadata.legacyIds ? metadata.legacyIds.filter(id => id !== messageId) : [];
  return {
    id: messageId,
    legacyIds,
    substitutions,
    substitutionLocations,
    text: messageString,
    customId: metadata.customId,
    meaning: metadata.meaning || '',
    description: metadata.description || '',
    messageParts: cleanedMessageParts,
    messagePartLocations,
    placeholderNames,
    associatedMessageIds,
    location
  };
}
/**
 * Parse the given message part (`cooked` + `raw`) to extract the message metadata from the text.
 *
 * If the message part has a metadata block this function will extract the `meaning`,
 * `description`, `customId` and `legacyId` (if provided) from the block. These metadata properties
 * are serialized in the string delimited by `|`, `@@` and `␟` respectively.
 *
 * (Note that `␟` is the `LEGACY_ID_INDICATOR` - see `constants.ts`.)
 *
 * For example:
 *
 * ```ts
 * `:meaning|description@@custom-id:`
 * `:meaning|@@custom-id:`
 * `:meaning|description:`
 * `:description@@custom-id:`
 * `:meaning|:`
 * `:description:`
 * `:@@custom-id:`
 * `:meaning|description@@custom-id␟legacy-id-1␟legacy-id-2:`
 * ```
 *
 * @param cooked The cooked version of the message part to parse.
 * @param raw The raw version of the message part to parse.
 * @returns A object containing any metadata that was parsed from the message part.
 */
function parseMetadata(cooked, raw) {
  const {
    text: messageString,
    block
  } = splitBlock(cooked, raw);
  if (block === undefined) {
    return {
      text: messageString
    };
  } else {
    const [meaningDescAndId, ...legacyIds] = block.split(LEGACY_ID_INDICATOR);
    const [meaningAndDesc, customId] = meaningDescAndId.split(ID_SEPARATOR, 2);
    let [meaning, description] = meaningAndDesc.split(MEANING_SEPARATOR, 2);
    if (description === undefined) {
      description = meaning;
      meaning = undefined;
    }
    if (description === '') {
      description = undefined;
    }
    return {
      text: messageString,
      meaning,
      description,
      customId,
      legacyIds
    };
  }
}
/**
 * Parse the given message part (`cooked` + `raw`) to extract any placeholder metadata from the
 * text.
 *
 * If the message part has a metadata block this function will extract the `placeholderName` and
 * `associatedMessageId` (if provided) from the block.
 *
 * These metadata properties are serialized in the string delimited by `@@`.
 *
 * For example:
 *
 * ```ts
 * `:placeholder-name@@associated-id:`
 * ```
 *
 * @param cooked The cooked version of the message part to parse.
 * @param raw The raw version of the message part to parse.
 * @returns A object containing the metadata (`placeholderName` and `associatedMessageId`) of the
 *     preceding placeholder, along with the static text that follows.
 */
function parsePlaceholder(cooked, raw) {
  const {
    text: messagePart,
    block
  } = splitBlock(cooked, raw);
  if (block === undefined) {
    return {
      messagePart
    };
  } else {
    const [placeholderName, associatedMessageId] = block.split(ID_SEPARATOR);
    return {
      messagePart,
      placeholderName,
      associatedMessageId
    };
  }
}
/**
 * Split a message part (`cooked` + `raw`) into an optional delimited "block" off the front and the
 * rest of the text of the message part.
 *
 * Blocks appear at the start of message parts. They are delimited by a colon `:` character at the
 * start and end of the block.
 *
 * If the block is in the first message part then it will be metadata about the whole message:
 * meaning, description, id.  Otherwise it will be metadata about the immediately preceding
 * substitution: placeholder name.
 *
 * Since blocks are optional, it is possible that the content of a message block actually starts
 * with a block marker. In this case the marker must be escaped `\:`.
 *
 * @param cooked The cooked version of the message part to parse.
 * @param raw The raw version of the message part to parse.
 * @returns An object containing the `text` of the message part and the text of the `block`, if it
 * exists.
 * @throws an error if the `block` is unterminated
 */
function splitBlock(cooked, raw) {
  if (raw.charAt(0) !== BLOCK_MARKER$1) {
    return {
      text: cooked
    };
  } else {
    const endOfBlock = findEndOfBlock(cooked, raw);
    return {
      block: cooked.substring(1, endOfBlock),
      text: cooked.substring(endOfBlock + 1)
    };
  }
}
function computePlaceholderName(index) {
  return index === 1 ? 'PH' : `PH_${index - 1}`;
}
/**
 * Find the end of a "marked block" indicated by the first non-escaped colon.
 *
 * @param cooked The cooked string (where escaped chars have been processed)
 * @param raw The raw string (where escape sequences are still in place)
 *
 * @returns the index of the end of block marker
 * @throws an error if the block is unterminated
 */
function findEndOfBlock(cooked, raw) {
  for (let cookedIndex = 1, rawIndex = 1; cookedIndex < cooked.length; cookedIndex++, rawIndex++) {
    if (raw[rawIndex] === '\\') {
      rawIndex++;
    } else if (cooked[cookedIndex] === BLOCK_MARKER$1) {
      return cookedIndex;
    }
  }
  throw new Error(`Unterminated $localize metadata block in "${raw}".`);
}
class MissingTranslationError extends Error {
  constructor(parsedMessage) {
    super(`No translation found for ${describeMessage(parsedMessage)}.`);
    this.parsedMessage = parsedMessage;
    this.type = 'MissingTranslationError';
  }
}
function isMissingTranslationError(e) {
  return e.type === 'MissingTranslationError';
}
/**
 * Translate the text of the `$localize` tagged-string (i.e. `messageParts` and
 * `substitutions`) using the given `translations`.
 *
 * The tagged-string is parsed to extract its `messageId` which is used to find an appropriate
 * `ParsedTranslation`. If this doesn't match and there are legacy ids then try matching a
 * translation using those.
 *
 * If one is found then it is used to translate the message into a new set of `messageParts` and
 * `substitutions`.
 * The translation may reorder (or remove) substitutions as appropriate.
 *
 * If there is no translation with a matching message id then an error is thrown.
 * If a translation contains a placeholder that is not found in the message being translated then an
 * error is thrown.
 */
function translate$1(translations, messageParts, substitutions) {
  const message = parseMessage(messageParts, substitutions);
  // Look up the translation using the messageId, and then the legacyId if available.
  let translation = translations[message.id];
  // If the messageId did not match a translation, try matching the legacy ids instead
  if (message.legacyIds !== undefined) {
    for (let i = 0; i < message.legacyIds.length && translation === undefined; i++) {
      translation = translations[message.legacyIds[i]];
    }
  }
  if (translation === undefined) {
    throw new MissingTranslationError(message);
  }
  return [translation.messageParts, translation.placeholderNames.map(placeholder => {
    if (message.substitutions.hasOwnProperty(placeholder)) {
      return message.substitutions[placeholder];
    } else {
      throw new Error(`There is a placeholder name mismatch with the translation provided for the message ${describeMessage(message)}.\n` + `The translation contains a placeholder with name ${placeholder}, which does not exist in the message.`);
    }
  })];
}
/**
 * Parse the `messageParts` and `placeholderNames` out of a target `message`.
 *
 * Used by `loadTranslations()` to convert target message strings into a structure that is more
 * appropriate for doing translation.
 *
 * @param message the message to be parsed.
 */
function parseTranslation(messageString) {
  const parts = messageString.split(/{\$([^}]*)}/);
  const messageParts = [parts[0]];
  const placeholderNames = [];
  for (let i = 1; i < parts.length - 1; i += 2) {
    placeholderNames.push(parts[i]);
    messageParts.push(`${parts[i + 1]}`);
  }
  const rawMessageParts = messageParts.map(part => part.charAt(0) === BLOCK_MARKER$1 ? '\\' + part : part);
  return {
    text: messageString,
    messageParts: makeTemplateObject(messageParts, rawMessageParts),
    placeholderNames
  };
}
/**
 * Create a `ParsedTranslation` from a set of `messageParts` and `placeholderNames`.
 *
 * @param messageParts The message parts to appear in the ParsedTranslation.
 * @param placeholderNames The names of the placeholders to intersperse between the `messageParts`.
 */
function makeParsedTranslation(messageParts, placeholderNames = []) {
  let messageString = messageParts[0];
  for (let i = 0; i < placeholderNames.length; i++) {
    messageString += `{$${placeholderNames[i]}}${messageParts[i + 1]}`;
  }
  return {
    text: messageString,
    messageParts: makeTemplateObject(messageParts, messageParts),
    placeholderNames
  };
}
/**
 * Create the specialized array that is passed to tagged-string tag functions.
 *
 * @param cooked The message parts with their escape codes processed.
 * @param raw The message parts with their escaped codes as-is.
 */
function makeTemplateObject(cooked, raw) {
  Object.defineProperty(cooked, 'raw', {
    value: raw
  });
  return cooked;
}
function describeMessage(message) {
  const meaningString = message.meaning && ` - "${message.meaning}"`;
  const legacy = message.legacyIds && message.legacyIds.length > 0 ? ` [${message.legacyIds.map(l => `"${l}"`).join(', ')}]` : '';
  return `"${message.id}"${legacy} ("${message.text}"${meaningString})`;
}

/**
 * Load translations for use by `$localize`, if doing runtime translation.
 *
 * If the `$localize` tagged strings are not going to be replaced at compiled time, it is possible
 * to load a set of translations that will be applied to the `$localize` tagged strings at runtime,
 * in the browser.
 *
 * Loading a new translation will overwrite a previous translation if it has the same `MessageId`.
 *
 * Note that `$localize` messages are only processed once, when the tagged string is first
 * encountered, and does not provide dynamic language changing without refreshing the browser.
 * Loading new translations later in the application life-cycle will not change the translated text
 * of messages that have already been translated.
 *
 * The message IDs and translations are in the same format as that rendered to "simple JSON"
 * translation files when extracting messages. In particular, placeholders in messages are rendered
 * using the `{$PLACEHOLDER_NAME}` syntax. For example the message from the following template:
 *
 * ```html
 * <div i18n>pre<span>inner-pre<b>bold</b>inner-post</span>post</div>
 * ```
 *
 * would have the following form in the `translations` map:
 *
 * ```ts
 * {
 *   "2932901491976224757":
 *      "pre{$START_TAG_SPAN}inner-pre{$START_BOLD_TEXT}bold{$CLOSE_BOLD_TEXT}inner-post{$CLOSE_TAG_SPAN}post"
 * }
 * ```
 *
 * @param translations A map from message ID to translated message.
 *
 * These messages are processed and added to a lookup based on their `MessageId`.
 *
 * @see {@link clearTranslations} for removing translations loaded using this function.
 * @see {@link $localize} for tagging messages as needing to be translated.
 * @publicApi
 */
function loadTranslations(translations) {
  // Ensure the translate function exists
  if (!$localize.translate) {
    $localize.translate = translate;
  }
  if (!$localize.TRANSLATIONS) {
    $localize.TRANSLATIONS = {};
  }
  Object.keys(translations).forEach(key => {
    $localize.TRANSLATIONS[key] = parseTranslation(translations[key]);
  });
}
/**
 * Remove all translations for `$localize`, if doing runtime translation.
 *
 * All translations that had been loading into memory using `loadTranslations()` will be removed.
 *
 * @see {@link loadTranslations} for loading translations at runtime.
 * @see {@link $localize} for tagging messages as needing to be translated.
 *
 * @publicApi
 */
function clearTranslations() {
  $localize.translate = undefined;
  $localize.TRANSLATIONS = {};
}
/**
 * Translate the text of the given message, using the loaded translations.
 *
 * This function may reorder (or remove) substitutions as indicated in the matching translation.
 */
function translate(messageParts, substitutions) {
  try {
    return translate$1($localize.TRANSLATIONS, messageParts, substitutions);
  } catch (e) {
    console.warn(e.message);
    return [messageParts, substitutions];
  }
}

/**
 * Tag a template literal string for localization.
 *
 * For example:
 *
 * ```ts
 * $localize `some string to localize`
 * ```
 *
 * **Providing meaning, description and id**
 *
 * You can optionally specify one or more of `meaning`, `description` and `id` for a localized
 * string by pre-pending it with a colon delimited block of the form:
 *
 * ```ts
 * $localize`:meaning|description@@id:source message text`;
 *
 * $localize`:meaning|:source message text`;
 * $localize`:description:source message text`;
 * $localize`:@@id:source message text`;
 * ```
 *
 * This format is the same as that used for `i18n` markers in Angular templates. See the
 * [Angular i18n guide](guide/i18n/prepare#mark-text-in-component-template).
 *
 * **Naming placeholders**
 *
 * If the template literal string contains expressions, then the expressions will be automatically
 * associated with placeholder names for you.
 *
 * For example:
 *
 * ```ts
 * $localize `Hi ${name}! There are ${items.length} items.`;
 * ```
 *
 * will generate a message-source of `Hi {$PH}! There are {$PH_1} items`.
 *
 * The recommended practice is to name the placeholder associated with each expression though.
 *
 * Do this by providing the placeholder name wrapped in `:` characters directly after the
 * expression. These placeholder names are stripped out of the rendered localized string.
 *
 * For example, to name the `items.length` expression placeholder `itemCount` you write:
 *
 * ```ts
 * $localize `There are ${items.length}:itemCount: items`;
 * ```
 *
 * **Escaping colon markers**
 *
 * If you need to use a `:` character directly at the start of a tagged string that has no
 * metadata block, or directly after a substitution expression that has no name you must escape
 * the `:` by preceding it with a backslash:
 *
 * For example:
 *
 * ```ts
 * // message has a metadata block so no need to escape colon
 * $localize `:some description::this message starts with a colon (:)`;
 * // no metadata block so the colon must be escaped
 * $localize `\:this message starts with a colon (:)`;
 * ```
 *
 * ```ts
 * // named substitution so no need to escape colon
 * $localize `${label}:label:: ${}`
 * // anonymous substitution so colon must be escaped
 * $localize `${label}\: ${}`
 * ```
 *
 * **Processing localized strings:**
 *
 * There are three scenarios:
 *
 * * **compile-time inlining**: the `$localize` tag is transformed at compile time by a
 * transpiler, removing the tag and replacing the template literal string with a translated
 * literal string from a collection of translations provided to the transpilation tool.
 *
 * * **run-time evaluation**: the `$localize` tag is a run-time function that replaces and
 * reorders the parts (static strings and expressions) of the template literal string with strings
 * from a collection of translations loaded at run-time.
 *
 * * **pass-through evaluation**: the `$localize` tag is a run-time function that simply evaluates
 * the original template literal string without applying any translations to the parts. This
 * version is used during development or where there is no need to translate the localized
 * template literals.
 *
 * @param messageParts a collection of the static parts of the template string.
 * @param expressions a collection of the values of each placeholder in the template string.
 * @returns the translated string, with the `messageParts` and `expressions` interleaved together.
 *
 * @publicApi
 */
const $localize$1 = function (messageParts, ...expressions) {
  if ($localize$1.translate) {
    // Don't use array expansion here to avoid the compiler adding `__read()` helper unnecessarily.
    const translation = $localize$1.translate(messageParts, expressions);
    messageParts = translation[0];
    expressions = translation[1];
  }
  let message = stripBlock(messageParts[0], messageParts.raw[0]);
  for (let i = 1; i < messageParts.length; i++) {
    message += expressions[i - 1] + stripBlock(messageParts[i], messageParts.raw[i]);
  }
  return message;
};
const BLOCK_MARKER = ':';
/**
 * Strip a delimited "block" from the start of the `messagePart`, if it is found.
 *
 * If a marker character (:) actually appears in the content at the start of a tagged string or
 * after a substitution expression, where a block has not been provided the character must be
 * escaped with a backslash, `\:`. This function checks for this by looking at the `raw`
 * messagePart, which should still contain the backslash.
 *
 * @param messagePart The cooked message part to process.
 * @param rawMessagePart The raw message part to check.
 * @returns the message part with the placeholder name stripped, if found.
 * @throws an error if the block is unterminated
 */
function stripBlock(messagePart, rawMessagePart) {
  return rawMessagePart.charAt(0) === BLOCK_MARKER ? messagePart.substring(findEndOfBlock(messagePart, rawMessagePart) + 1) : messagePart;
}

// This file exports all the `utils` as private exports so that other parts of `@angular/localize`

// This file contains the public API of the `@angular/localize` entry-point

// DO NOT ADD public exports to this file.


//# sourceMappingURL=localize.mjs.map
;// CONCATENATED MODULE: ./node_modules/@angular/localize/fesm2022/init.mjs
/**
 * @license Angular v18.2.13
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */




// Attach $localize to the global context, as a side-effect of this module.
globalThis.$localize = $localize$1;
//# sourceMappingURL=init.mjs.map
// EXTERNAL MODULE: ./node_modules/zone.js/fesm2015/zone.js
var zone = __webpack_require__(96935);
// EXTERNAL MODULE: ./node_modules/intersection-observer/intersection-observer.js
var intersection_observer = __webpack_require__(35468);
// EXTERNAL MODULE: ./node_modules/globalize/dist/globalize.js
var globalize = __webpack_require__(19047);
var globalize_default = /*#__PURE__*/__webpack_require__.n(globalize);
// EXTERNAL MODULE: ./node_modules/cldr-data/supplemental/likelySubtags.json
var likelySubtags = __webpack_require__(84786);
// EXTERNAL MODULE: ./node_modules/cldr-data/supplemental/numberingSystems.json
var numberingSystems = __webpack_require__(41620);
// EXTERNAL MODULE: ./node_modules/cldr-data/supplemental/currencyData.json
var currencyData = __webpack_require__(73520);
// EXTERNAL MODULE: ./node_modules/cldr-data/main/es-EC/numbers.json
var numbers = __webpack_require__(53384);
// EXTERNAL MODULE: ./node_modules/cldr-data/main/es-EC/currencies.json
var currencies = __webpack_require__(53733);
;// CONCATENATED MODULE: ./node_modules/cldr-data/main/es-EC/ca-gregorian.json
const ca_gregorian_namespaceObject = /*#__PURE__*/JSON.parse('{"main":{"es-EC":{"identity":{"version":{"_cldrVersion":"36"},"language":"es","territory":"EC"},"dates":{"calendars":{"gregorian":{"months":{"format":{"abbreviated":{"1":"ene.","2":"feb.","3":"mar.","4":"abr.","5":"may.","6":"jun.","7":"jul.","8":"ago.","9":"sep.","10":"oct.","11":"nov.","12":"dic."},"narrow":{"1":"E","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S","10":"O","11":"N","12":"D"},"wide":{"1":"enero","2":"febrero","3":"marzo","4":"abril","5":"mayo","6":"junio","7":"julio","8":"agosto","9":"septiembre","10":"octubre","11":"noviembre","12":"diciembre"}},"stand-alone":{"abbreviated":{"1":"ene.","2":"feb.","3":"mar.","4":"abr.","5":"may.","6":"jun.","7":"jul.","8":"ago.","9":"sep.","10":"oct.","11":"nov.","12":"dic."},"narrow":{"1":"E","2":"F","3":"M","4":"A","5":"M","6":"J","7":"J","8":"A","9":"S","10":"O","11":"N","12":"D"},"wide":{"1":"enero","2":"febrero","3":"marzo","4":"abril","5":"mayo","6":"junio","7":"julio","8":"agosto","9":"septiembre","10":"octubre","11":"noviembre","12":"diciembre"}}},"days":{"format":{"abbreviated":{"sun":"dom.","mon":"lun.","tue":"mar.","wed":"mié.","thu":"jue.","fri":"vie.","sat":"sáb."},"narrow":{"sun":"d","mon":"l","tue":"m","wed":"m","thu":"j","fri":"v","sat":"s"},"short":{"sun":"DO","mon":"LU","tue":"MA","wed":"MI","thu":"JU","fri":"VI","sat":"SA"},"wide":{"sun":"domingo","mon":"lunes","tue":"martes","wed":"miércoles","thu":"jueves","fri":"viernes","sat":"sábado"}},"stand-alone":{"abbreviated":{"sun":"dom.","mon":"lun.","tue":"mar.","wed":"mié.","thu":"jue.","fri":"vie.","sat":"sáb."},"narrow":{"sun":"D","mon":"L","tue":"M","wed":"M","thu":"J","fri":"V","sat":"S"},"short":{"sun":"DO","mon":"LU","tue":"MA","wed":"MI","thu":"JU","fri":"VI","sat":"SA"},"wide":{"sun":"domingo","mon":"lunes","tue":"martes","wed":"miércoles","thu":"jueves","fri":"viernes","sat":"sábado"}}},"quarters":{"format":{"abbreviated":{"1":"T1","2":"T2","3":"T3","4":"T4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1.º trimestre","2":"2.º trimestre","3":"3.º trimestre","4":"4.º trimestre"}},"stand-alone":{"abbreviated":{"1":"T1","2":"T2","3":"T3","4":"T4"},"narrow":{"1":"1","2":"2","3":"3","4":"4"},"wide":{"1":"1.º trimestre","2":"2.º trimestre","3":"3.º trimestre","4":"4.º trimestre"}}},"dayPeriods":{"format":{"abbreviated":{"am":"a. m.","noon":"del mediodía","pm":"p. m.","morning1":"de la madrugada","morning2":"de la mañana","evening1":"de la tarde","night1":"de la noche"},"narrow":{"am":"a. m.","noon":"del mediodía","pm":"p. m.","morning1":"de la madrugada","morning2":"de la mañana","evening1":"de la tarde","night1":"de la noche"},"wide":{"am":"a. m.","noon":"del mediodía","pm":"p. m.","morning1":"de la madrugada","morning2":"de la mañana","evening1":"de la tarde","night1":"de la noche"}},"stand-alone":{"abbreviated":{"am":"a. m.","noon":"mediodía","pm":"p. m.","morning1":"madrugada","morning2":"mañana","evening1":"tarde","night1":"noche"},"narrow":{"am":"a. m.","noon":"mediodía","pm":"p. m.","morning1":"madrugada","morning2":"mañana","evening1":"tarde","night1":"noche"},"wide":{"am":"a. m.","noon":"mediodía","pm":"p. m.","morning1":"madrugada","morning2":"mañana","evening1":"tarde","night1":"noche"}}},"eras":{"eraNames":{"0":"antes de Cristo","1":"después de Cristo","0-alt-variant":"antes de la era común","1-alt-variant":"era común"},"eraAbbr":{"0":"a. C.","1":"d. C.","0-alt-variant":"a. e. c.","1-alt-variant":"e. c."},"eraNarrow":{"0":"a. C.","1":"d. C.","0-alt-variant":"a. e. c.","1-alt-variant":"e. c."}},"dateFormats":{"full":"EEEE, d \'de\' MMMM \'de\' y","long":"d \'de\' MMMM \'de\' y","medium":"d MMM y","short":"d/M/yy"},"timeFormats":{"full":"HH:mm:ss zzzz","long":"HH:mm:ss z","medium":"HH:mm:ss","short":"HH:mm"},"dateTimeFormats":{"full":"{1} \'a\' \'las\' {0}","long":"{1} \'a\' \'las\' {0}","medium":"{1} {0}","short":"{1} {0}","availableFormats":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"E d","Ehm":"E, h:mm a","EHm":"E, HH:mm","Ehms":"E, h:mm:ss a","EHms":"E, HH:mm:ss","Gy":"y G","GyMMM":"MMM y G","GyMMMd":"d \'de\' MMM \'de\' y G","GyMMMEd":"E, d MMM y G","GyMMMM":"MMMM \'de\' y G","GyMMMMd":"d \'de\' MMMM \'de\' y G","GyMMMMEd":"E, d \'de\' MMMM \'de\' y G","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"H:mm:ss v","hmsvvvv":"h:mm:ss a (vvvv)","Hmsvvvv":"H:mm:ss (vvvv)","hmv":"h:mm a v","Hmv":"H:mm v","M":"L","Md":"d/M","MEd":"E, d/M","MMd":"d/M","MMdd":"d/M","MMM":"LLL","MMMd":"d MMM","MMMdd":"dd-MMM","MMMEd":"E, d MMM","MMMMd":"d \'de\' MMMM","MMMMEd":"E, d \'de\' MMMM","MMMMW-count-one":"\'semana\' W \'de\' MMMM","MMMMW-count-other":"\'semana\' W \'de\' MMMM","ms":"mm:ss","y":"y","yM":"M/y","yMd":"d/M/y","yMEd":"E d/M/y","yMM":"M/y","yMMM":"MMMM \'de\' y","yMMMd":"d \'de\' MMMM \'de\' y","yMMMEd":"E, d \'de\' MMM \'de\' y","yMMMM":"MMMM \'de\' y","yMMMMd":"d \'de\' MMMM \'de\' y","yMMMMEd":"EEE, d \'de\' MMMM \'de\' y","yQQQ":"QQQ \'de\' y","yQQQQ":"QQQQ \'de\' y","yw-count-one":"\'semana\' w \'de\' Y","yw-count-other":"\'semana\' w \'de\' Y"},"appendItems":{"Day":"{0} ({2}: {1})","Day-Of-Week":"{0} {1}","Era":"{1} {0}","Hour":"{0} ({2}: {1})","Minute":"{0} ({2}: {1})","Month":"{0} ({2}: {1})","Quarter":"{0} ({2}: {1})","Second":"{0} ({2}: {1})","Timezone":"{0} {1}","Week":"{0} ({2}: {1})","Year":"{1} {0}"},"intervalFormats":{"intervalFormatFallback":"{0}–{1}","Bh":{"B":"h B – h B","h":"h–h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm–h:mm B","m":"h:mm–h:mm B"},"d":{"d":"d–d"},"Gy":{"G":"y G – y G","y":"y–y G"},"GyM":{"G":"MM/y GGGGG – MM/y GGGGG","M":"MM/y – MM/y GGGGG","y":"MM/y – MM/y GGGGG"},"GyMd":{"d":"dd/MM/y – dd/MM/y GGGGG","G":"dd/MM/y GGGGG – dd/MM/y GGGGG","M":"dd/MM/y – dd/MM/y GGGGG","y":"dd/MM/y – dd/MM/y GGGGG"},"GyMEd":{"d":"E, dd/MM/y – E, dd/MM/y GGGGG","G":"E, dd/MM/y GGGGG – E, dd/MM/y GGGGG","M":"E, dd/MM/y – E, dd/MM/y GGGGG","y":"E, dd/MM/y – E, dd/MM/y GGGGG"},"GyMMM":{"G":"MMM y G – MMM y G","M":"MMM–MMM y G","y":"MMM y – MMM y G"},"GyMMMd":{"d":"d–d MMM \'de\' y G","G":"d MMM \'de\' y G – d MMM \'de\' y G","M":"d MMM – d MMM \'de\' y G","y":"d MMM \'de\' y – d MMM \'de\' y G"},"GyMMMEd":{"d":"E d MMM – E d MMM \'de\' y G","G":"E d MMM \'de\' y G – E d MMM \'de\' y G","M":"E d MMM – E d MMM \'de\' y G","y":"E d MMM \'de\' y – E d MMM \'de\' y G"},"h":{"a":"h a–h a","h":"h–h a"},"H":{"H":"H–H"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm – h:mm a","m":"h:mm – h:mm a"},"Hm":{"H":"H:mm–H:mm","m":"H:mm–H:mm"},"hmv":{"a":"h:mm a–h:mm a v","h":"h:mm–h:mm a v","m":"h:mm–h:mm a v"},"Hmv":{"H":"H:mm–H:mm v","m":"H:mm–H:mm v"},"hv":{"a":"h a–h a v","h":"h–h a v"},"Hv":{"H":"H–H v"},"M":{"M":"M–M"},"Md":{"d":"d/M–d/M","M":"d/M–d/M"},"MEd":{"d":"E, d/M–E, d/M","M":"E, d/M–E, d/M"},"MMM":{"M":"MMM–MMM"},"MMMd":{"d":"d – d \'de\' MMM","M":"d \'de\' MMM – d \'de\' MMM"},"MMMEd":{"d":"E, d \'de\' MMM – E, d \'de\' MMM","M":"E, d \'de\' MMM – E, d \'de\' MMM"},"MMMMd":{"d":"d–d \'de\' MMMM","M":"d \'de\' MMMM–d \'de\' MMMM"},"MMMMEd":{"d":"E, d \'de\' MMMM–E, d \'de\' MMMM","M":"E, d \'de\' MMMM–E, d \'de\' MMMM"},"y":{"y":"y–y"},"yM":{"M":"M/y–M/y","y":"M/y–M/y"},"yMd":{"d":"d/M/y–d/M/y","M":"d/M/y–d/M/y","y":"d/M/y–d/M/y"},"yMEd":{"d":"E, d/M/y–E, d/M/y","M":"E, d/M/y–E, d/M/y","y":"E, d/M/y–E, d/M/y"},"yMMM":{"M":"MMM–MMM y","y":"MMM \'de\' y – MMM \'de\' y"},"yMMMd":{"d":"d – d \'de\' MMM \'de\' y","M":"d \'de\' MMM – d \'de\' MMM \'de\' y","y":"d \'de\' MMM \'de\' y – d \'de\' MMM \'de\' y"},"yMMMEd":{"d":"E, d \'de\' MMM – E, d \'de\' MMM \'de\' y","M":"E, d \'de\' MMM – E, d \'de\' MMM \'de\' y","y":"E, d \'de\' MMM \'de\' y – E, d \'de\' MMM \'de\' y"},"yMMMM":{"M":"MMMM–MMMM \'de\' y","y":"MMMM \'de\' y–MMMM \'de\' y"},"yMMMMd":{"d":"d–d \'de\' MMMM \'de\' y","M":"d \'de\' MMMM–d \'de\' MMMM \'de\' y","y":"d \'de\' MMMM \'de\' y–d \'de\' MMMM \'de\' y"},"yMMMMEd":{"d":"E, d \'de\' MMMM–E, d \'de\' MMMM \'de\' y","M":"E, d \'de\' MMMM–E, d \'de\' MMMM \'de\' y","y":"E, d \'de\' MMMM \'de\' y–E, d \'de\' MMMM \'de\' y"}}}}}}}}}');
// EXTERNAL MODULE: ./node_modules/devextreme/localization/messages/es.json
var es = __webpack_require__(95278);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/localization.js + 1 modules
var localization = __webpack_require__(13750);
;// CONCATENATED MODULE: ./src/polyfills.ts



window.global = window;
// Globalize

window.Globalize = (globalize_default());
// CLDR JSONs






// Mensajes DevExtreme


// Cargar CLDR en Globalize
globalize_default().load(likelySubtags, numberingSystems, currencyData, numbers, currencies, ca_gregorian_namespaceObject);
// Configurar Globalize
globalize_default().locale("es-EC");
// Cargar mensajes DevExtreme
(0,localization/* loadMessages */.fH)(es);
(0,localization/* locale */.Hg)("es-EC");

/***/ }),

/***/ 31318:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * CLDR JavaScript Library v0.5.4
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-10-22T15:56Z
 */
/*!
 * CLDR JavaScript Library v0.5.4 2020-10-22T15:56Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function (root, factory) {
  if (true) {
    // AMD.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  var arrayIsArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var pathNormalize = function (path, attributes) {
    if (arrayIsArray(path)) {
      path = path.join("/");
    }
    if (typeof path !== "string") {
      throw new Error("invalid path \"" + path + "\"");
    }
    // 1: Ignore leading slash `/`
    // 2: Ignore leading `cldr/`
    path = path.replace(/^\//, "") /* 1 */.replace(/^cldr\//, ""); /* 2 */

    // Replace {attribute}'s
    path = path.replace(/{[a-zA-Z]+}/g, function (name) {
      name = name.replace(/^{([^}]*)}$/, "$1");
      return attributes[name];
    });
    return path.split("/");
  };
  var arraySome = function (array, callback) {
    var i, length;
    if (array.some) {
      return array.some(callback);
    }
    for (i = 0, length = array.length; i < length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  };

  /**
   * Return the maximized language id as defined in
   * http://www.unicode.org/reports/tr35/#Likely_Subtags
   * 1. Canonicalize.
   * 1.1 Make sure the input locale is in canonical form: uses the right
   * separator, and has the right casing.
   * TODO Right casing? What df? It seems languages are lowercase, scripts are
   * Capitalized, territory is uppercase. I am leaving this as an exercise to
   * the user.
   *
   * 1.2 Replace any deprecated subtags with their canonical values using the
   * <alias> data in supplemental metadata. Use the first value in the
   * replacement list, if it exists. Language tag replacements may have multiple
   * parts, such as "sh" ➞ "sr_Latn" or mo" ➞ "ro_MD". In such a case, the
   * original script and/or region are retained if there is one. Thus
   * "sh_Arab_AQ" ➞ "sr_Arab_AQ", not "sr_Latn_AQ".
   * TODO What <alias> data?
   *
   * 1.3 If the tag is grandfathered (see <variable id="$grandfathered"
   * type="choice"> in the supplemental data), then return it.
   * TODO grandfathered?
   *
   * 1.4 Remove the script code 'Zzzz' and the region code 'ZZ' if they occur.
   * 1.5 Get the components of the cleaned-up source tag (languages, scripts,
   * and regions), plus any variants and extensions.
   * 2. Lookup. Lookup each of the following in order, and stop on the first
   * match:
   * 2.1 languages_scripts_regions
   * 2.2 languages_regions
   * 2.3 languages_scripts
   * 2.4 languages
   * 2.5 und_scripts
   * 3. Return
   * 3.1 If there is no match, either return an error value, or the match for
   * "und" (in APIs where a valid language tag is required).
   * 3.2 Otherwise there is a match = languagem_scriptm_regionm
   * 3.3 Let xr = xs if xs is not empty, and xm otherwise.
   * 3.4 Return the language tag composed of languager _ scriptr _ regionr +
   * variants + extensions.
   *
   * @subtags [Array] normalized language id subtags tuple (see init.js).
   */
  var coreLikelySubtags = function (Cldr, cldr, subtags, options) {
    var match,
      matchFound,
      language = subtags[0],
      script = subtags[1],
      sep = Cldr.localeSep,
      territory = subtags[2],
      variants = subtags.slice(3, 4);
    options = options || {};

    // Skip if (language, script, territory) is not empty [3.3]
    if (language !== "und" && script !== "Zzzz" && territory !== "ZZ") {
      return [language, script, territory].concat(variants);
    }

    // Skip if no supplemental likelySubtags data is present
    if (typeof cldr.get("supplemental/likelySubtags") === "undefined") {
      return;
    }

    // [2]
    matchFound = arraySome([[language, script, territory], [language, territory], [language, script], [language], ["und", script]], function (test) {
      return match = !/\b(Zzzz|ZZ)\b/.test(test.join(sep)) /* [1.4] */ && cldr.get(["supplemental/likelySubtags", test.join(sep)]);
    });

    // [3]
    if (matchFound) {
      // [3.2 .. 3.4]
      match = match.split(sep);
      return [language !== "und" ? language : match[0], script !== "Zzzz" ? script : match[1], territory !== "ZZ" ? territory : match[2]].concat(variants);
    } else if (options.force) {
      // [3.1.2]
      return cldr.get("supplemental/likelySubtags/und").split(sep);
    } else {
      // [3.1.1]
      return;
    }
  };

  /**
   * Given a locale, remove any fields that Add Likely Subtags would add.
   * http://www.unicode.org/reports/tr35/#Likely_Subtags
   * 1. First get max = AddLikelySubtags(inputLocale). If an error is signaled,
   * return it.
   * 2. Remove the variants from max.
   * 3. Then for trial in {language, language _ region, language _ script}. If
   * AddLikelySubtags(trial) = max, then return trial + variants.
   * 4. If you do not get a match, return max + variants.
   * 
   * @maxLanguageId [Array] maxLanguageId tuple (see init.js).
   */
  var coreRemoveLikelySubtags = function (Cldr, cldr, maxLanguageId) {
    var match,
      matchFound,
      language = maxLanguageId[0],
      script = maxLanguageId[1],
      territory = maxLanguageId[2],
      variants = maxLanguageId[3];

    // [3]
    matchFound = arraySome([[[language, "Zzzz", "ZZ"], [language]], [[language, "Zzzz", territory], [language, territory]], [[language, script, "ZZ"], [language, script]]], function (test) {
      var result = coreLikelySubtags(Cldr, cldr, test[0]);
      match = test[1];
      return result && result[0] === maxLanguageId[0] && result[1] === maxLanguageId[1] && result[2] === maxLanguageId[2];
    });
    if (matchFound) {
      if (variants) {
        match.push(variants);
      }
      return match;
    }

    // [4]
    return maxLanguageId;
  };

  /**
   * subtags( locale )
   *
   * @locale [String]
   */
  var coreSubtags = function (locale) {
    var aux,
      unicodeLanguageId,
      subtags = [];
    locale = locale.replace(/_/, "-");

    // Unicode locale extensions.
    aux = locale.split("-u-");
    if (aux[1]) {
      aux[1] = aux[1].split("-t-");
      locale = aux[0] + (aux[1][1] ? "-t-" + aux[1][1] : "");
      subtags[4 /* unicodeLocaleExtensions */] = aux[1][0];
    }

    // TODO normalize transformed extensions. Currently, skipped.
    // subtags[ x ] = locale.split( "-t-" )[ 1 ];
    unicodeLanguageId = locale.split("-t-")[0];

    // unicode_language_id = "root"
    //   | unicode_language_subtag         
    //     (sep unicode_script_subtag)? 
    //     (sep unicode_region_subtag)?
    //     (sep unicode_variant_subtag)* ;
    //
    // Although unicode_language_subtag = alpha{2,8}, I'm using alpha{2,3}. Because, there's no language on CLDR lengthier than 3.
    aux = unicodeLanguageId.match(/^(([a-z]{2,3})(-([A-Z][a-z]{3}))?(-([A-Z]{2}|[0-9]{3}))?)((-([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*)$|^(root)$/);
    if (aux === null) {
      return ["und", "Zzzz", "ZZ"];
    }
    subtags[0 /* language */] = aux[10] /* root */ || aux[2] || "und";
    subtags[1 /* script */] = aux[4] || "Zzzz";
    subtags[2 /* territory */] = aux[6] || "ZZ";
    if (aux[7] && aux[7].length) {
      subtags[3 /* variant */] = aux[7].slice(1) /* remove leading "-" */;
    }

    // 0: language
    // 1: script
    // 2: territory (aka region)
    // 3: variant
    // 4: unicodeLocaleExtensions
    return subtags;
  };
  var arrayForEach = function (array, callback) {
    var i, length;
    if (array.forEach) {
      return array.forEach(callback);
    }
    for (i = 0, length = array.length; i < length; i++) {
      callback(array[i], i, array);
    }
  };

  /**
   * bundleLookup( minLanguageId )
   *
   * @Cldr [Cldr class]
   *
   * @cldr [Cldr instance]
   *
   * @minLanguageId [String] requested languageId after applied remove likely subtags.
   */
  var bundleLookup = function (Cldr, cldr, minLanguageId) {
    var availableBundleMap = Cldr._availableBundleMap,
      availableBundleMapQueue = Cldr._availableBundleMapQueue;
    if (availableBundleMapQueue.length) {
      arrayForEach(availableBundleMapQueue, function (bundle, i) {
        var existing, maxBundle, minBundle, subtags;
        subtags = coreSubtags(bundle);
        maxBundle = coreLikelySubtags(Cldr, cldr, subtags);
        if (maxBundle === undefined) {
          availableBundleMapQueue.splice(i, 1);
          throw new Error("Could not find likelySubtags for " + bundle);
        }
        minBundle = coreRemoveLikelySubtags(Cldr, cldr, maxBundle);
        minBundle = minBundle.join(Cldr.localeSep);
        existing = availableBundleMap[minBundle];
        if (existing && existing.length < bundle.length) {
          return;
        }
        availableBundleMap[minBundle] = bundle;
      });
      Cldr._availableBundleMapQueue = [];
    }
    return availableBundleMap[minLanguageId] || null;
  };
  var objectKeys = function (object) {
    var i,
      result = [];
    if (Object.keys) {
      return Object.keys(object);
    }
    for (i in object) {
      result.push(i);
    }
    return result;
  };
  var createError = function (code, attributes) {
    var error, message;
    message = code + (attributes && JSON ? ": " + JSON.stringify(attributes) : "");
    error = new Error(message);
    error.code = code;

    // extend( error, attributes );
    arrayForEach(objectKeys(attributes), function (attribute) {
      error[attribute] = attributes[attribute];
    });
    return error;
  };
  var validate = function (code, check, attributes) {
    if (!check) {
      throw createError(code, attributes);
    }
  };
  var validatePresence = function (value, name) {
    validate("E_MISSING_PARAMETER", typeof value !== "undefined", {
      name: name
    });
  };
  var validateType = function (value, name, check, expected) {
    validate("E_INVALID_PAR_TYPE", check, {
      expected: expected,
      name: name,
      value: value
    });
  };
  var validateTypePath = function (value, name) {
    validateType(value, name, typeof value === "string" || arrayIsArray(value), "String or Array");
  };

  /**
   * Function inspired by jQuery Core, but reduced to our use case.
   */
  var isPlainObject = function (obj) {
    return obj !== null && "" + obj === "[object Object]";
  };
  var validateTypePlainObject = function (value, name) {
    validateType(value, name, typeof value === "undefined" || isPlainObject(value), "Plain Object");
  };
  var validateTypeString = function (value, name) {
    validateType(value, name, typeof value === "string", "a string");
  };

  // @path: normalized path
  var resourceGet = function (data, path) {
    var i,
      node = data,
      length = path.length;
    for (i = 0; i < length - 1; i++) {
      node = node[path[i]];
      if (!node) {
        return undefined;
      }
    }
    return node[path[i]];
  };

  /**
   * setAvailableBundles( Cldr, json )
   *
   * @Cldr [Cldr class]
   *
   * @json resolved/unresolved cldr data.
   *
   * Set available bundles queue based on passed json CLDR data. Considers a bundle as any String at /main/{bundle}.
   */
  var coreSetAvailableBundles = function (Cldr, json) {
    var bundle,
      availableBundleMapQueue = Cldr._availableBundleMapQueue,
      main = resourceGet(json, ["main"]);
    if (main) {
      for (bundle in main) {
        if (main.hasOwnProperty(bundle) && bundle !== "root" && availableBundleMapQueue.indexOf(bundle) === -1) {
          availableBundleMapQueue.push(bundle);
        }
      }
    }
  };
  var alwaysArray = function (somethingOrArray) {
    return arrayIsArray(somethingOrArray) ? somethingOrArray : [somethingOrArray];
  };
  var jsonMerge = function () {
    // Returns new deeply merged JSON.
    //
    // Eg.
    // merge( { a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } } )
    // -> { a: { b: 3, c: 2, d: 4 } }
    //
    // @arguments JSON's
    // 
    var merge = function () {
      var destination = {},
        sources = [].slice.call(arguments, 0);
      arrayForEach(sources, function (source) {
        var prop;
        for (prop in source) {
          if (prop in destination && typeof destination[prop] === "object" && !arrayIsArray(destination[prop])) {
            // Merge Objects
            destination[prop] = merge(destination[prop], source[prop]);
          } else {
            // Set new values
            destination[prop] = source[prop];
          }
        }
      });
      return destination;
    };
    return merge;
  }();

  /**
   * load( Cldr, source, jsons )
   *
   * @Cldr [Cldr class]
   *
   * @source [Object]
   *
   * @jsons [arguments]
   */
  var coreLoad = function (Cldr, source, jsons) {
    var i, j, json;
    validatePresence(jsons[0], "json");

    // Support arbitrary parameters, e.g., `Cldr.load({...}, {...})`.
    for (i = 0; i < jsons.length; i++) {
      // Support array parameters, e.g., `Cldr.load([{...}, {...}])`.
      json = alwaysArray(jsons[i]);
      for (j = 0; j < json.length; j++) {
        validateTypePlainObject(json[j], "json");
        source = jsonMerge(source, json[j]);
        coreSetAvailableBundles(Cldr, json[j]);
      }
    }
    return source;
  };
  var itemGetResolved = function (Cldr, path, attributes) {
    // Resolve path
    var normalizedPath = pathNormalize(path, attributes);
    return resourceGet(Cldr._resolved, normalizedPath);
  };

  /**
   * new Cldr()
   */
  var Cldr = function (locale) {
    this.init(locale);
  };

  // Build optimization hack to avoid duplicating functions across modules.
  Cldr._alwaysArray = alwaysArray;
  Cldr._coreLoad = coreLoad;
  Cldr._createError = createError;
  Cldr._itemGetResolved = itemGetResolved;
  Cldr._jsonMerge = jsonMerge;
  Cldr._pathNormalize = pathNormalize;
  Cldr._resourceGet = resourceGet;
  Cldr._validatePresence = validatePresence;
  Cldr._validateType = validateType;
  Cldr._validateTypePath = validateTypePath;
  Cldr._validateTypePlainObject = validateTypePlainObject;
  Cldr._availableBundleMap = {};
  Cldr._availableBundleMapQueue = [];
  Cldr._resolved = {};

  // Allow user to override locale separator "-" (default) | "_". According to http://www.unicode.org/reports/tr35/#Unicode_language_identifier, both "-" and "_" are valid locale separators (eg. "en_GB", "en-GB"). According to http://unicode.org/cldr/trac/ticket/6786 its usage must be consistent throughout the data set.
  Cldr.localeSep = "-";

  /**
   * Cldr.load( json [, json, ...] )
   *
   * @json [JSON] CLDR data or [Array] Array of @json's.
   *
   * Load resolved cldr data.
   */
  Cldr.load = function () {
    Cldr._resolved = coreLoad(Cldr, Cldr._resolved, arguments);
  };

  /**
   * .init() automatically run on instantiation/construction.
   */
  Cldr.prototype.init = function (locale) {
    var attributes,
      language,
      maxLanguageId,
      minLanguageId,
      script,
      subtags,
      territory,
      unicodeLocaleExtensions,
      variant,
      sep = Cldr.localeSep,
      unicodeLocaleExtensionsRaw = "";
    validatePresence(locale, "locale");
    validateTypeString(locale, "locale");
    subtags = coreSubtags(locale);
    if (subtags.length === 5) {
      unicodeLocaleExtensions = subtags.pop();
      unicodeLocaleExtensionsRaw = sep + "u" + sep + unicodeLocaleExtensions;
      // Remove trailing null when there is unicodeLocaleExtensions but no variants.
      if (!subtags[3]) {
        subtags.pop();
      }
    }
    variant = subtags[3];

    // Normalize locale code.
    // Get (or deduce) the "triple subtags": language, territory (also aliased as region), and script subtags.
    // Get the variant subtags (calendar, collation, currency, etc).
    // refs:
    // - http://www.unicode.org/reports/tr35/#Field_Definitions
    // - http://www.unicode.org/reports/tr35/#Language_and_Locale_IDs
    // - http://www.unicode.org/reports/tr35/#Unicode_locale_identifier

    // When a locale id does not specify a language, or territory (region), or script, they are obtained by Likely Subtags.
    maxLanguageId = coreLikelySubtags(Cldr, this, subtags, {
      force: true
    }) || subtags;
    language = maxLanguageId[0];
    script = maxLanguageId[1];
    territory = maxLanguageId[2];
    minLanguageId = coreRemoveLikelySubtags(Cldr, this, maxLanguageId).join(sep);

    // Set attributes
    this.attributes = attributes = {
      bundle: bundleLookup(Cldr, this, minLanguageId),
      // Unicode Language Id
      minLanguageId: minLanguageId + unicodeLocaleExtensionsRaw,
      maxLanguageId: maxLanguageId.join(sep) + unicodeLocaleExtensionsRaw,
      // Unicode Language Id Subtabs
      language: language,
      script: script,
      territory: territory,
      region: territory,
      /* alias */
      variant: variant
    };

    // Unicode locale extensions.
    unicodeLocaleExtensions && ("-" + unicodeLocaleExtensions).replace(/-[a-z]{3,8}|(-[a-z]{2})-([a-z]{3,8})/g, function (attribute, key, type) {
      if (key) {
        // Extension is in the `keyword` form.
        attributes["u" + key] = type;
      } else {
        // Extension is in the `attribute` form.
        attributes["u" + attribute] = true;
      }
    });
    this.locale = locale;
  };

  /**
   * .get()
   */
  Cldr.prototype.get = function (path) {
    validatePresence(path, "path");
    validateTypePath(path, "path");
    return itemGetResolved(Cldr, path, this.attributes);
  };

  /**
   * .main()
   */
  Cldr.prototype.main = function (path) {
    validatePresence(path, "path");
    validateTypePath(path, "path");
    validate("E_MISSING_BUNDLE", this.attributes.bundle !== null, {
      locale: this.locale
    });
    path = alwaysArray(path);
    return this.get(["main/{bundle}"].concat(path));
  };
  return Cldr;
});

/***/ }),

/***/ 35213:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * CLDR JavaScript Library v0.5.4
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-10-22T15:56Z
 */
/*!
 * CLDR JavaScript Library v0.5.4 2020-10-22T15:56Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function (factory) {
  if (true) {
    // AMD.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(31318)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (Cldr) {
  // Build optimization hack to avoid duplicating functions across modules.
  var pathNormalize = Cldr._pathNormalize,
    validatePresence = Cldr._validatePresence,
    validateType = Cldr._validateType;

  /*!
   * EventEmitter v4.2.7 - git.io/ee
   * Oliver Caldwell
   * MIT license
   * @preserve
   */

  var EventEmitter;
  /* jshint ignore:start */
  EventEmitter = function () {
    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = {};

    /**
     * Finds the index of the listener for the event in it's storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
      var i = listeners.length;
      while (i--) {
        if (listeners[i].listener === listener) {
          return i;
        }
      }
      return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
      return function aliasClosure() {
        return this[name].apply(this, arguments);
      };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
      var events = this._getEvents();
      var response;
      var key;

      // Return a concatenated array of all matching events if
      // the selector is a regular expression.
      if (evt instanceof RegExp) {
        response = {};
        for (key in events) {
          if (events.hasOwnProperty(key) && evt.test(key)) {
            response[key] = events[key];
          }
        }
      } else {
        response = events[evt] || (events[evt] = []);
      }
      return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
      var flatListeners = [];
      var i;
      for (i = 0; i < listeners.length; i += 1) {
        flatListeners.push(listeners[i].listener);
      }
      return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
      var listeners = this.getListeners(evt);
      var response;
      if (listeners instanceof Array) {
        response = {};
        response[evt] = listeners;
      }
      return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
      var listeners = this.getListenersAsObject(evt);
      var listenerIsWrapped = typeof listener === 'object';
      var key;
      for (key in listeners) {
        if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
          listeners[key].push(listenerIsWrapped ? listener : {
            listener: listener,
            once: false
          });
        }
      }
      return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after it's first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
      return this.addListener(evt, {
        listener: listener,
        once: true
      });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
      this.getListeners(evt);
      return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
      for (var i = 0; i < evts.length; i += 1) {
        this.defineEvent(evts[i]);
      }
      return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
      var listeners = this.getListenersAsObject(evt);
      var index;
      var key;
      for (key in listeners) {
        if (listeners.hasOwnProperty(key)) {
          index = indexOfListener(listeners[key], listener);
          if (index !== -1) {
            listeners[key].splice(index, 1);
          }
        }
      }
      return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
      // Pass through to manipulateListeners
      return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
      // Pass through to manipulateListeners
      return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
      var i;
      var value;
      var single = remove ? this.removeListener : this.addListener;
      var multiple = remove ? this.removeListeners : this.addListeners;

      // If evt is an object then pass each of it's properties to this method
      if (typeof evt === 'object' && !(evt instanceof RegExp)) {
        for (i in evt) {
          if (evt.hasOwnProperty(i) && (value = evt[i])) {
            // Pass the single listener straight through to the singular method
            if (typeof value === 'function') {
              single.call(this, i, value);
            } else {
              // Otherwise pass back to the multiple function
              multiple.call(this, i, value);
            }
          }
        }
      } else {
        // So evt must be a string
        // And listeners must be an array of listeners
        // Loop over it and pass each one to the multiple method
        i = listeners.length;
        while (i--) {
          single.call(this, evt, listeners[i]);
        }
      }
      return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
      var type = typeof evt;
      var events = this._getEvents();
      var key;

      // Remove different things depending on the state of evt
      if (type === 'string') {
        // Remove all listeners for the specified event
        delete events[evt];
      } else if (evt instanceof RegExp) {
        // Remove all events matching the regex.
        for (key in events) {
          if (events.hasOwnProperty(key) && evt.test(key)) {
            delete events[key];
          }
        }
      } else {
        // Remove all listeners in all events
        delete this._events;
      }
      return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
      var listeners = this.getListenersAsObject(evt);
      var listener;
      var i;
      var key;
      var response;
      for (key in listeners) {
        if (listeners.hasOwnProperty(key)) {
          i = listeners[key].length;
          while (i--) {
            // If the listener returns true then it shall be removed from the event
            // The function is executed either with a basic call or an apply if there is an args array
            listener = listeners[key][i];
            if (listener.once === true) {
              this.removeListener(evt, listener.listener);
            }
            response = listener.listener.apply(this, args || []);
            if (response === this._getOnceReturnValue()) {
              this.removeListener(evt, listener.listener);
            }
          }
        }
      }
      return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
      var args = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
      this._onceReturnValue = value;
      return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
      if (this.hasOwnProperty('_onceReturnValue')) {
        return this._onceReturnValue;
      } else {
        return true;
      }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
      return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
      exports.EventEmitter = originalGlobalValue;
      return EventEmitter;
    };
    return EventEmitter;
  }();
  /* jshint ignore:end */

  var validateTypeFunction = function (value, name) {
    validateType(value, name, typeof value === "undefined" || typeof value === "function", "Function");
  };
  var superGet,
    superInit,
    globalEe = new EventEmitter();
  function validateTypeEvent(value, name) {
    validateType(value, name, typeof value === "string" || value instanceof RegExp, "String or RegExp");
  }
  function validateThenCall(method, self) {
    return function (event, listener) {
      validatePresence(event, "event");
      validateTypeEvent(event, "event");
      validatePresence(listener, "listener");
      validateTypeFunction(listener, "listener");
      return self[method].apply(self, arguments);
    };
  }
  function off(self) {
    return validateThenCall("off", self);
  }
  function on(self) {
    return validateThenCall("on", self);
  }
  function once(self) {
    return validateThenCall("once", self);
  }
  Cldr.off = off(globalEe);
  Cldr.on = on(globalEe);
  Cldr.once = once(globalEe);

  /**
   * Overload Cldr.prototype.init().
   */
  superInit = Cldr.prototype.init;
  Cldr.prototype.init = function () {
    var ee;
    this.ee = ee = new EventEmitter();
    this.off = off(ee);
    this.on = on(ee);
    this.once = once(ee);
    superInit.apply(this, arguments);
  };

  /**
   * getOverload is encapsulated, because of cldr/unresolved. If it's loaded
   * after cldr/event (and note it overwrites .get), it can trigger this
   * overload again.
   */
  function getOverload() {
    /**
     * Overload Cldr.prototype.get().
     */
    superGet = Cldr.prototype.get;
    Cldr.prototype.get = function (path) {
      var value = superGet.apply(this, arguments);
      path = pathNormalize(path, this.attributes).join("/");
      globalEe.trigger("get", [path, value]);
      this.ee.trigger("get", [path, value]);
      return value;
    };
  }
  Cldr._eventInit = getOverload;
  getOverload();
  return Cldr;
});

/***/ }),

/***/ 51436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ Guid)
/* harmony export */ });
/* harmony import */ var _core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82554);
/**
 * DevExtreme (esm/__internal/core/m_guid.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const Guid = _core_class__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.inherit({
  ctor: function (value) {
    if (value) {
      value = String(value);
    }
    this._value = this._normalize(value || this._generate());
  },
  _normalize: function (value) {
    value = value.replace(/[^a-f0-9]/gi, "").toLowerCase();
    while (value.length < 32) {
      value += "0";
    }
    return [value.substr(0, 8), value.substr(8, 4), value.substr(12, 4), value.substr(16, 4), value.substr(20, 12)].join("-");
  },
  _generate: function () {
    let value = "";
    for (let i = 0; i < 32; i++) {
      value += Math.round(15 * Math.random()).toString(16);
    }
    return value;
  },
  toString: function () {
    return this._value;
  },
  valueOf: function () {
    return this._value;
  },
  toJSON: function () {
    return this._value;
  }
});


/***/ }),

/***/ 20767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   n: () => (/* binding */ Callbacks)
/* harmony export */ });
/**
 * DevExtreme (esm/__internal/core/utils/m_callbacks.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
const Callback = function (options) {
  this._options = options || {};
  this._list = [];
  this._queue = [];
  this._firing = false;
  this._fired = false;
  this._firingIndexes = [];
};
Callback.prototype._fireCore = function (context, args) {
  const firingIndexes = this._firingIndexes;
  const list = this._list;
  const {
    stopOnFalse: stopOnFalse
  } = this._options;
  const step = firingIndexes.length;
  for (firingIndexes[step] = 0; firingIndexes[step] < list.length; firingIndexes[step]++) {
    const result = list[firingIndexes[step]].apply(context, args);
    if (false === result && stopOnFalse) {
      break;
    }
  }
  firingIndexes.pop();
};
Callback.prototype.add = function (fn) {
  if ("function" === typeof fn && (!this._options.unique || !this.has(fn))) {
    this._list.push(fn);
  }
  return this;
};
Callback.prototype.remove = function (fn) {
  const list = this._list;
  const firingIndexes = this._firingIndexes;
  const index = list.indexOf(fn);
  if (index > -1) {
    list.splice(index, 1);
    if (this._firing && firingIndexes.length) {
      for (let step = 0; step < firingIndexes.length; step++) {
        if (index <= firingIndexes[step]) {
          firingIndexes[step]--;
        }
      }
    }
  }
  return this;
};
Callback.prototype.has = function (fn) {
  const list = this._list;
  return fn ? list.indexOf(fn) > -1 : !!list.length;
};
Callback.prototype.empty = function (fn) {
  this._list = [];
  return this;
};
Callback.prototype.fireWith = function (context, args) {
  const queue = this._queue;
  args = args || [];
  args = args.slice ? args.slice() : args;
  if (this._options.syncStrategy) {
    this._firing = true;
    this._fireCore(context, args);
  } else {
    queue.push([context, args]);
    if (this._firing) {
      return;
    }
    this._firing = true;
    while (queue.length) {
      const memory = queue.shift();
      this._fireCore(memory[0], memory[1]);
    }
  }
  this._firing = false;
  this._fired = true;
  return this;
};
Callback.prototype.fire = function () {
  this.fireWith(this, arguments);
};
Callback.prototype.fired = function () {
  return this._fired;
};
const Callbacks = function (options) {
  return new Callback(options);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Callbacks);

/***/ }),

/***/ 65930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   EG: () => (/* binding */ applyServerDecimalSeparator),
/* harmony export */   GP: () => (/* binding */ getKeyHash),
/* harmony export */   GT: () => (/* binding */ uiLayerInitialized),
/* harmony export */   Li: () => (/* binding */ pairToObject),
/* harmony export */   Mb: () => (/* binding */ deferRenderer),
/* harmony export */   Nt: () => (/* binding */ escapeRegExp),
/* harmony export */   OX: () => (/* binding */ deferUpdate),
/* harmony export */   RL: () => (/* binding */ equalByValue),
/* harmony export */   T6: () => (/* binding */ splitPair),
/* harmony export */   TA: () => (/* binding */ asyncNoop),
/* harmony export */   VM: () => (/* binding */ grep),
/* harmony export */   YD: () => (/* binding */ ensureDefined),
/* harmony export */   a0: () => (/* binding */ deferUpdater),
/* harmony export */   hm: () => (/* binding */ findBestMatches),
/* harmony export */   lQ: () => (/* binding */ noop),
/* harmony export */   uG: () => (/* binding */ executeAsync),
/* harmony export */   zE: () => (/* binding */ deferRender)
/* harmony export */ });
/* unused harmony exports normalizeKey, denormalizeKey */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58168);
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83771);
/* harmony import */ var _core_guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13992);
/* harmony import */ var _core_utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6791);
/* harmony import */ var _core_utils_deferred__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79765);
/* harmony import */ var _core_utils_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88461);
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72463);
/**
 * DevExtreme (esm/__internal/core/utils/m_common.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */







const uiLayerInitialized = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_3__/* .Deferred */ .cY();
const ensureDefined = function (value, defaultValue) {
  return (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__/* .isDefined */ .O9)(value) ? value : defaultValue;
};
const executeAsync = function (action, context) {
  const deferred = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_3__/* .Deferred */ .cY();
  const normalizedContext = context || this;
  const task = {
    promise: deferred.promise(),
    abort() {
      clearTimeout(timerId);
      deferred.rejectWith(normalizedContext);
    }
  };
  const timerId = (arguments[2] || setTimeout)(function () {
    const result = action.call(normalizedContext);
    if (result && result.done && (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__/* .isFunction */ .Tn)(result.done)) {
      result.done(function () {
        deferred.resolveWith(normalizedContext);
      });
    } else {
      deferred.resolveWith(normalizedContext);
    }
  }, "number" === typeof context ? context : 0);
  return task;
};
const delayedFuncs = [];
const delayedNames = [];
const delayedDeferreds = [];
let executingName;
const deferExecute = function (name, func, deferred) {
  if (executingName && executingName !== name) {
    delayedFuncs.push(func);
    delayedNames.push(name);
    deferred = deferred || new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_3__/* .Deferred */ .cY();
    delayedDeferreds.push(deferred);
    return deferred;
  }
  const oldExecutingName = executingName;
  const currentDelayedCount = delayedDeferreds.length;
  executingName = name;
  let result = func();
  if (!result) {
    if (delayedDeferreds.length > currentDelayedCount) {
      result = _core_utils_deferred__WEBPACK_IMPORTED_MODULE_3__/* .when */ .z7.apply(this, delayedDeferreds.slice(currentDelayedCount));
    } else if (deferred) {
      deferred.resolve();
    }
  }
  executingName = oldExecutingName;
  if (deferred && result && result.done) {
    result.done(deferred.resolve).fail(deferred.reject);
  }
  if (!executingName && delayedFuncs.length) {
    ("render" === delayedNames.shift() ? deferRender : deferUpdate)(delayedFuncs.shift(), delayedDeferreds.shift());
  }
  return result || (0,_core_utils_deferred__WEBPACK_IMPORTED_MODULE_3__/* .when */ .z7)();
};
const deferRender = function (func, deferred) {
  return deferExecute("render", func, deferred);
};
const deferUpdate = function (func, deferred) {
  return deferExecute("update", func, deferred);
};
const deferRenderer = function (func) {
  return function () {
    const that = this;
    return deferExecute("render", function () {
      return func.call(that);
    });
  };
};
const deferUpdater = function (func) {
  return function () {
    const that = this;
    return deferExecute("update", function () {
      return func.call(that);
    });
  };
};
const findBestMatches = (targetFilter, items, mapFn) => {
  const bestMatches = [];
  let maxMatchCount = 0;
  (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_5__/* .each */ .__)(items, (index, itemSrc) => {
    let matchCount = 0;
    const item = mapFn ? mapFn(itemSrc) : itemSrc;
    (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_5__/* .each */ .__)(targetFilter, (paramName, targetValue) => {
      const value = item[paramName];
      if (void 0 === value) {
        return;
      }
      if (match(value, targetValue)) {
        matchCount++;
        return;
      }
      matchCount = -1;
      return false;
    });
    if (matchCount < maxMatchCount) {
      return;
    }
    if (matchCount > maxMatchCount) {
      bestMatches.length = 0;
      maxMatchCount = matchCount;
    }
    bestMatches.push(itemSrc);
  });
  return bestMatches;
};
const match = function (value, targetValue) {
  if (Array.isArray(value) && Array.isArray(targetValue)) {
    let mismatch = false;
    (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_5__/* .each */ .__)(value, (index, valueItem) => {
      if (valueItem !== targetValue[index]) {
        mismatch = true;
        return false;
      }
    });
    if (mismatch) {
      return false;
    }
    return true;
  }
  if (value === targetValue) {
    return true;
  }
  return false;
};
const splitPair = function (raw) {
  switch ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__/* .type */ .NW)(raw)) {
    case "string":
      return raw.split(/\s+/, 2);
    case "object":
      return [raw.x ?? raw.h, raw.y ?? raw.v];
    case "number":
      return [raw];
    case "array":
      return raw;
    default:
      return null;
  }
};
const normalizeKey = function (id) {
  let key = (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__/* .isString */ .Kg)(id) ? id : id.toString();
  const arr = key.match(/[^a-zA-Z0-9_]/g);
  arr && (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_5__/* .each */ .__)(arr, (_, sign) => {
    key = key.replace(sign, `__${sign.charCodeAt()}__`);
  });
  return key;
};
const denormalizeKey = function (key) {
  const arr = key.match(/__\d+__/g);
  arr && arr.forEach(char => {
    const charCode = parseInt(char.replace("__", ""));
    key = key.replace(char, String.fromCharCode(charCode));
  });
  return key;
};
const pairToObject = function (raw, preventRound) {
  const pair = splitPair(raw);
  let h = preventRound ? parseFloat(pair && pair[0]) : parseInt(pair && pair[0], 10);
  let v = preventRound ? parseFloat(pair && pair[1]) : parseInt(pair && pair[1], 10);
  if (!isFinite(h)) {
    h = 0;
  }
  if (!isFinite(v)) {
    v = h;
  }
  return {
    h: h,
    v: v
  };
};
const getKeyHash = function (key) {
  if (key instanceof _core_guid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A) {
    return key.toString();
  }
  if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__/* .isObject */ .Gv)(key) || Array.isArray(key)) {
    try {
      const keyHash = JSON.stringify(key);
      return "{}" === keyHash ? key : keyHash;
    } catch (e) {
      return key;
    }
  }
  return key;
};
const escapeRegExp = function (string) {
  return string.replace(/[[\]{}\-()*+?.\\^$|\s]/g, "\\$&");
};
const applyServerDecimalSeparator = function (value) {
  const separator = (0,_core_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().serverDecimalSeparator;
  if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__/* .isDefined */ .O9)(value)) {
    value = value.toString().replace(".", separator);
  }
  return value;
};
const noop = function () {};
const asyncNoop = function () {
  return new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_3__/* .Deferred */ .cY().resolve().promise();
};
const grep = function (elements, checkFunction, invert) {
  const result = [];
  let check;
  const expectedCheck = !invert;
  for (let i = 0; i < elements.length; i++) {
    check = !!checkFunction(elements[i], i);
    if (check === expectedCheck) {
      result.push(elements[i]);
    }
  }
  return result;
};
const compareArrays = (array1, array2, depth, options) => {
  if (array1.length !== array2.length) {
    return false;
  }
  return !array1.some((item, idx) => !compareByValue(item, array2[idx], depth + 1, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)({}, options, {
    strict: true
  })));
};
const compareObjects = (object1, object2, depth, options) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  const keys2Set = new Set(keys2);
  return !keys1.some(key => !keys2Set.has(key) || !compareByValue(object1[key], object2[key], depth + 1, options));
};
const DEFAULT_EQUAL_BY_VALUE_OPTS = {
  maxDepth: 3,
  strict: true
};
const compareByValue = (value1, value2, depth, options) => {
  const {
    strict: strict,
    maxDepth: maxDepth
  } = options;
  const comparable1 = (0,_core_utils_data__WEBPACK_IMPORTED_MODULE_2__/* .toComparable */ .ao)(value1, true);
  const comparable2 = (0,_core_utils_data__WEBPACK_IMPORTED_MODULE_2__/* .toComparable */ .ao)(value2, true);
  const comparisonResult = strict ? comparable1 === comparable2 : comparable1 == comparable2;
  switch (true) {
    case comparisonResult:
    case depth >= maxDepth:
      return true;
    case (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__/* .isObject */ .Gv)(comparable1) && (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__/* .isObject */ .Gv)(comparable2):
      return compareObjects(comparable1, comparable2, depth, options);
    case Array.isArray(comparable1) && Array.isArray(comparable2):
      return compareArrays(comparable1, comparable2, depth, options);
    default:
      return false;
  }
};
const equalByValue = function (value1, value2) {
  let options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DEFAULT_EQUAL_BY_VALUE_OPTS;
  const compareOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)({}, DEFAULT_EQUAL_BY_VALUE_OPTS, options);
  return compareByValue(value1, value2, 0, compareOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ensureDefined: ensureDefined,
  executeAsync: executeAsync,
  deferRender: deferRender,
  deferUpdate: deferUpdate,
  deferRenderer: deferRenderer,
  deferUpdater: deferUpdater,
  findBestMatches: findBestMatches,
  splitPair: splitPair,
  normalizeKey: normalizeKey,
  denormalizeKey: denormalizeKey,
  pairToObject: pairToObject,
  getKeyHash: getKeyHash,
  escapeRegExp: escapeRegExp,
  applyServerDecimalSeparator: applyServerDecimalSeparator,
  noop: noop,
  asyncNoop: asyncNoop,
  grep: grep,
  equalByValue: equalByValue
});

/***/ }),

/***/ 88306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   vF: () => (/* binding */ logger)
/* harmony export */ });
/* unused harmony export debug */
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72463);
/**
 * DevExtreme (esm/__internal/core/utils/m_console.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const noop = function () {};
const getConsoleMethod = function (method) {
  if ("undefined" === typeof console || !(0,_core_utils_type__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .Tn)(console[method])) {
    return noop;
  }
  return console[method].bind(console);
};
const logger = {
  log: getConsoleMethod("log"),
  info: getConsoleMethod("info"),
  warn: getConsoleMethod("warn"),
  error: getConsoleMethod("error")
};
const debug = function () {
  function assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }
  return {
    assert: assert,
    assertParam: function (parameter, message) {
      assert(null !== parameter && void 0 !== parameter, message);
    }
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  logger: logger,
  debug: debug
});

/***/ }),

/***/ 22999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ extend),
/* harmony export */   a: () => (/* binding */ extendFromObject)
/* harmony export */ });
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72463);
/**
 * DevExtreme (esm/__internal/core/utils/m_extend.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const extendFromObject = function (target, source, overrideExistingValues) {
  target = target || {};
  for (const prop in source) {
    if (Object.prototype.hasOwnProperty.call(source, prop)) {
      const value = source[prop];
      if (!(prop in target) || overrideExistingValues) {
        target[prop] = value;
      }
    }
  }
  return target;
};
const extend = function (target) {
  target = target || {};
  let i = 1;
  let deep = false;
  if ("boolean" === typeof target) {
    deep = target;
    target = arguments[1] || {};
    i++;
  }
  for (; i < arguments.length; i++) {
    const source = arguments[i];
    if (null == source) {
      continue;
    }
    for (const key in source) {
      const targetValue = target[key];
      const sourceValue = source[key];
      let sourceValueIsArray = false;
      let clone;
      if ("__proto__" === key || "constructor" === key || target === sourceValue) {
        continue;
      }
      if (deep && sourceValue && ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .Qd)(sourceValue) || (sourceValueIsArray = Array.isArray(sourceValue)))) {
        if (sourceValueIsArray) {
          clone = targetValue && Array.isArray(targetValue) ? targetValue : [];
        } else {
          clone = targetValue && (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .Qd)(targetValue) ? targetValue : {};
        }
        target[key] = extend(deep, clone, sourceValue);
      } else if (void 0 !== sourceValue) {
        target[key] = sourceValue;
      }
    }
  }
  return target;
};

/***/ }),

/***/ 65121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Bc: () => (/* binding */ captionize),
/* harmony export */   I3: () => (/* binding */ humanize),
/* harmony export */   Ns: () => (/* binding */ titleize),
/* harmony export */   PT: () => (/* binding */ camelize),
/* harmony export */   _k: () => (/* binding */ dasherize)
/* harmony export */ });
/* unused harmony export underscore */
/* harmony import */ var _core_utils_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88461);
/**
 * DevExtreme (esm/__internal/core/utils/m_inflector.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const _normalize = function (text) {
  if (void 0 === text || null === text) {
    return "";
  }
  return String(text);
};
const _upperCaseFirst = function (text) {
  return _normalize(text).charAt(0).toUpperCase() + text.substr(1);
};
const _chop = function (text) {
  return _normalize(text).replace(/([a-z\d])([A-Z])/g, "$1 $2").split(/[\s_-]+/);
};
const dasherize = function (text) {
  return (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_0__/* .map */ .Tj)(_chop(text), function (p) {
    return p.toLowerCase();
  }).join("-");
};
const underscore = function (text) {
  return dasherize(text).replace(/-/g, "_");
};
const camelize = function (text, upperFirst) {
  return (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_0__/* .map */ .Tj)(_chop(text), function (p, i) {
    p = p.toLowerCase();
    if (upperFirst || i > 0) {
      p = _upperCaseFirst(p);
    }
    return p;
  }).join("");
};
const humanize = function (text) {
  return _upperCaseFirst(dasherize(text).replace(/-/g, " "));
};
const titleize = function (text) {
  return (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_0__/* .map */ .Tj)(_chop(text), function (p) {
    return _upperCaseFirst(p.toLowerCase());
  }).join(" ");
};
const DIGIT_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const captionize = function (name) {
  const captionList = [];
  let i;
  let char;
  let isPrevCharNewWord = false;
  let isNewWord = false;
  for (i = 0; i < name.length; i++) {
    char = name.charAt(i);
    isNewWord = char === char.toUpperCase() && "-" !== char && ")" !== char && "/" !== char || char in DIGIT_CHARS;
    if ("_" === char || "." === char) {
      char = " ";
      isNewWord = true;
    } else if (0 === i) {
      char = char.toUpperCase();
      isNewWord = true;
    } else if (!isPrevCharNewWord && isNewWord) {
      if (captionList.length > 0) {
        captionList.push(" ");
      }
    }
    captionList.push(char);
    isPrevCharNewWord = isNewWord;
  }
  return captionList.join("");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  dasherize: dasherize,
  underscore: underscore,
  camelize: camelize,
  humanize: humanize,
  titleize: titleize,
  captionize: captionize
});

/***/ }),

/***/ 88461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tj: () => (/* binding */ map),
/* harmony export */   __: () => (/* binding */ each)
/* harmony export */ });
/* unused harmony export reverseEach */
/**
 * DevExtreme (esm/__internal/core/utils/m_iterator.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
const map = (values, callback) => {
  if (Array.isArray(values)) {
    return values.map(callback);
  }
  const result = [];
  for (const key in values) {
    result.push(callback(values[key], key));
  }
  return result;
};
const each = (values, callback) => {
  if (!values) {
    return;
  }
  if ("length" in values) {
    for (let i = 0; i < values.length; i++) {
      if (false === callback.call(values[i], i, values[i])) {
        break;
      }
    }
  } else {
    for (const key in values) {
      if (false === callback.call(values[key], key, values[key])) {
        break;
      }
    }
  }
  return values;
};
const reverseEach = (array, callback) => {
  if (!array || !("length" in array) || 0 === array.length) {
    return;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (false === callback.call(array[i], i, array[i])) {
      break;
    }
  }
};


/***/ }),

/***/ 68135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: () => (/* binding */ isDate),
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Gv: () => (/* binding */ isObject),
/* harmony export */   Kb: () => (/* binding */ isRenderer),
/* harmony export */   Kg: () => (/* binding */ isString),
/* harmony export */   Lm: () => (/* binding */ isBoolean),
/* harmony export */   NW: () => (/* binding */ type),
/* harmony export */   O4: () => (/* binding */ isExponential),
/* harmony export */   O9: () => (/* binding */ isDefined),
/* harmony export */   Qd: () => (/* binding */ isPlainObject),
/* harmony export */   RI: () => (/* binding */ isEmptyObject),
/* harmony export */   Tn: () => (/* binding */ isFunction),
/* harmony export */   kf: () => (/* binding */ isNumeric),
/* harmony export */   l6: () => (/* binding */ isWindow),
/* harmony export */   sO: () => (/* binding */ isPrimitive),
/* harmony export */   uF: () => (/* binding */ isDeferred),
/* harmony export */   xH: () => (/* binding */ isEvent),
/* harmony export */   yL: () => (/* binding */ isPromise)
/* harmony export */ });
/**
 * DevExtreme (esm/__internal/core/utils/m_type.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
const types = {
  "[object Array]": "array",
  "[object Date]": "date",
  "[object Object]": "object",
  "[object String]": "string"
};
const type = function (object) {
  if (null === object) {
    return "null";
  }
  const typeOfObject = Object.prototype.toString.call(object);
  return "object" === typeof object ? types[typeOfObject] || "object" : typeof object;
};
const isBoolean = function (object) {
  return "boolean" === typeof object;
};
const isExponential = function (value) {
  return isNumeric(value) && -1 !== value.toString().indexOf("e");
};
const isDate = function (object) {
  return "date" === type(object);
};
const isDefined = function (object) {
  return null !== object && void 0 !== object;
};
const isFunction = function (object) {
  return "function" === typeof object;
};
const isString = function (object) {
  return "string" === typeof object;
};
const isNumeric = function (object) {
  return "number" === typeof object && isFinite(object) || !isNaN(object - parseFloat(object));
};
const isObject = function (object) {
  return "object" === type(object);
};
const isEmptyObject = function (object) {
  let property;
  for (property in object) {
    return false;
  }
  return true;
};
const isPlainObject = function (object) {
  if (!object || "object" !== type(object)) {
    return false;
  }
  const proto = Object.getPrototypeOf(object);
  if (!proto) {
    return true;
  }
  const ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return "function" === typeof ctor && Object.toString.call(ctor) === Object.toString.call(Object);
};
const isPrimitive = function (value) {
  return !["object", "array", "function"].includes(type(value));
};
const isWindow = function (object) {
  return null != object && object === object.window;
};
const isRenderer = function (object) {
  return !!object && !!(object.jquery || object.dxRenderer);
};
const isPromise = function (object) {
  return !!object && isFunction(object.then);
};
const isDeferred = function (object) {
  return !!object && isFunction(object.done) && isFunction(object.fail);
};
const isEvent = function (object) {
  return !!(object && object.preventDefault);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBoolean: isBoolean,
  isDate: isDate,
  isDeferred: isDeferred,
  isDefined: isDefined,
  isEmptyObject: isEmptyObject,
  isEvent: isEvent,
  isExponential: isExponential,
  isFunction: isFunction,
  isNumeric: isNumeric,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isPrimitive: isPrimitive,
  isPromise: isPromise,
  isRenderer: isRenderer,
  isString: isString,
  isWindow: isWindow,
  type: type
});

/***/ }),

/***/ 17065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qM: () => (/* reexport */ guid),
  $W: () => (/* reexport */ common_config)
});

// UNUSED EXPORTS: setTemplateEngine

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/errors.js + 1 modules
var errors = __webpack_require__(54393);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/extend.js
var extend = __webpack_require__(87951);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/m_config.js
/**
 * DevExtreme (esm/__internal/core/m_config.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const config = {
  rtlEnabled: false,
  defaultCurrency: "USD",
  defaultUseCurrencyAccountingStyle: true,
  oDataFilterToLower: true,
  serverDecimalSeparator: ".",
  decimalSeparator: ".",
  thousandsSeparator: ",",
  forceIsoDateParsing: true,
  wrapActionsBeforeExecute: true,
  useLegacyStoreResult: false,
  useJQuery: void 0,
  editorStylingMode: void 0,
  useLegacyVisibleIndex: false,
  floatingActionButtonConfig: {
    icon: "add",
    closeIcon: "close",
    label: "",
    position: {
      at: "right bottom",
      my: "right bottom",
      offset: {
        x: -16,
        y: -16
      }
    },
    maxSpeedDialActionCount: 5,
    shading: false,
    direction: "auto"
  },
  optionsParser: optionsString => {
    if ("{" !== optionsString.trim().charAt(0)) {
      optionsString = `{${optionsString}}`;
    }
    try {
      return JSON.parse(optionsString);
    } catch (ex) {
      try {
        return JSON.parse(normalizeToJSONString(optionsString));
      } catch (exNormalize) {
        throw errors/* default */.A.Error("E3018", ex, optionsString);
      }
    }
  }
};
const normalizeToJSONString = optionsString => optionsString.replace(/'/g, '"').replace(/,\s*([\]}])/g, "$1").replace(/([{,])\s*([^":\s]+)\s*:/g, '$1"$2":');
const deprecatedFields = ["decimalSeparator", "thousandsSeparator"];
const configMethod = function () {
  if (!arguments.length) {
    return config;
  }
  const newConfig = arguments.length <= 0 ? void 0 : arguments[0];
  deprecatedFields.forEach(deprecatedField => {
    if (newConfig[deprecatedField]) {
      const message = `Now, the ${deprecatedField} is selected based on the specified locale.`;
      errors/* default */.A.log("W0003", "config", deprecatedField, "19.2", message);
    }
  });
  (0,extend/* extend */.X)(config, newConfig);
};
if ("undefined" !== typeof DevExpress && DevExpress.config) {
  configMethod(DevExpress.config);
}
/* harmony default export */ const m_config = (configMethod);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/config.js
/**
 * DevExtreme (esm/common/config.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const common_config = (m_config);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/__internal/core/m_guid.js
var m_guid = __webpack_require__(51436);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/guid.js
/**
 * DevExtreme (esm/common/guid.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const guid = (m_guid/* Guid */.q);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/templates/template_engine_registry.js + 1 modules
var template_engine_registry = __webpack_require__(9543);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/m_set_template_engine.js
/**
 * DevExtreme (esm/__internal/core/m_set_template_engine.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/set_template_engine.js
/**
 * DevExtreme (esm/common/set_template_engine.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const set_template_engine = ((/* unused pure expression or super */ null && (setTemplateEngine)));
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common.js
/**
 * DevExtreme (esm/common.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */





/***/ }),

/***/ 52826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ core)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/dependency_injector.js + 1 modules
var dependency_injector = __webpack_require__(48613);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/cldr-data/parent_locales.js
/**
 * DevExtreme (esm/common/core/localization/cldr-data/parent_locales.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
// !!! AUTO-GENERATED FILE, DO NOT EDIT
/* harmony default export */ const parent_locales = ({
  "en-150": "en-001",
  "en-AG": "en-001",
  "en-AI": "en-001",
  "en-AU": "en-001",
  "en-BB": "en-001",
  "en-BM": "en-001",
  "en-BS": "en-001",
  "en-BW": "en-001",
  "en-BZ": "en-001",
  "en-CC": "en-001",
  "en-CK": "en-001",
  "en-CM": "en-001",
  "en-CX": "en-001",
  "en-CY": "en-001",
  "en-DG": "en-001",
  "en-DM": "en-001",
  "en-ER": "en-001",
  "en-FJ": "en-001",
  "en-FK": "en-001",
  "en-FM": "en-001",
  "en-GB": "en-001",
  "en-GD": "en-001",
  "en-GG": "en-001",
  "en-GH": "en-001",
  "en-GI": "en-001",
  "en-GM": "en-001",
  "en-GY": "en-001",
  "en-HK": "en-001",
  "en-IE": "en-001",
  "en-IL": "en-001",
  "en-IM": "en-001",
  "en-IN": "en-001",
  "en-IO": "en-001",
  "en-JE": "en-001",
  "en-JM": "en-001",
  "en-KE": "en-001",
  "en-KI": "en-001",
  "en-KN": "en-001",
  "en-KY": "en-001",
  "en-LC": "en-001",
  "en-LR": "en-001",
  "en-LS": "en-001",
  "en-MG": "en-001",
  "en-MO": "en-001",
  "en-MS": "en-001",
  "en-MT": "en-001",
  "en-MU": "en-001",
  "en-MV": "en-001",
  "en-MW": "en-001",
  "en-MY": "en-001",
  "en-NA": "en-001",
  "en-NF": "en-001",
  "en-NG": "en-001",
  "en-NR": "en-001",
  "en-NU": "en-001",
  "en-NZ": "en-001",
  "en-PG": "en-001",
  "en-PK": "en-001",
  "en-PN": "en-001",
  "en-PW": "en-001",
  "en-RW": "en-001",
  "en-SB": "en-001",
  "en-SC": "en-001",
  "en-SD": "en-001",
  "en-SG": "en-001",
  "en-SH": "en-001",
  "en-SL": "en-001",
  "en-SS": "en-001",
  "en-SX": "en-001",
  "en-SZ": "en-001",
  "en-TC": "en-001",
  "en-TK": "en-001",
  "en-TO": "en-001",
  "en-TT": "en-001",
  "en-TV": "en-001",
  "en-TZ": "en-001",
  "en-UG": "en-001",
  "en-VC": "en-001",
  "en-VG": "en-001",
  "en-VU": "en-001",
  "en-WS": "en-001",
  "en-ZA": "en-001",
  "en-ZM": "en-001",
  "en-ZW": "en-001",
  "en-AT": "en-150",
  "en-BE": "en-150",
  "en-CH": "en-150",
  "en-DE": "en-150",
  "en-DK": "en-150",
  "en-FI": "en-150",
  "en-NL": "en-150",
  "en-SE": "en-150",
  "en-SI": "en-150",
  "hi-Latn": "en-IN",
  "es-AR": "es-419",
  "es-BO": "es-419",
  "es-BR": "es-419",
  "es-BZ": "es-419",
  "es-CL": "es-419",
  "es-CO": "es-419",
  "es-CR": "es-419",
  "es-CU": "es-419",
  "es-DO": "es-419",
  "es-EC": "es-419",
  "es-GT": "es-419",
  "es-HN": "es-419",
  "es-MX": "es-419",
  "es-NI": "es-419",
  "es-PA": "es-419",
  "es-PE": "es-419",
  "es-PR": "es-419",
  "es-PY": "es-419",
  "es-SV": "es-419",
  "es-US": "es-419",
  "es-UY": "es-419",
  "es-VE": "es-419",
  nb: "no",
  nn: "no",
  "pt-AO": "pt-PT",
  "pt-CH": "pt-PT",
  "pt-CV": "pt-PT",
  "pt-FR": "pt-PT",
  "pt-GQ": "pt-PT",
  "pt-GW": "pt-PT",
  "pt-LU": "pt-PT",
  "pt-MO": "pt-PT",
  "pt-MZ": "pt-PT",
  "pt-ST": "pt-PT",
  "pt-TL": "pt-PT",
  "az-Arab": "und",
  "az-Cyrl": "und",
  "bal-Latn": "und",
  "blt-Latn": "und",
  "bm-Nkoo": "und",
  "bs-Cyrl": "und",
  "byn-Latn": "und",
  "cu-Glag": "und",
  "dje-Arab": "und",
  "dyo-Arab": "und",
  "en-Dsrt": "und",
  "en-Shaw": "und",
  "ff-Adlm": "und",
  "ff-Arab": "und",
  "ha-Arab": "und",
  "iu-Latn": "und",
  "kk-Arab": "und",
  "ks-Deva": "und",
  "ku-Arab": "und",
  "ky-Arab": "und",
  "ky-Latn": "und",
  "ml-Arab": "und",
  "mn-Mong": "und",
  "mni-Mtei": "und",
  "ms-Arab": "und",
  "pa-Arab": "und",
  "sat-Deva": "und",
  "sd-Deva": "und",
  "sd-Khoj": "und",
  "sd-Sind": "und",
  "shi-Latn": "und",
  "so-Arab": "und",
  "sr-Latn": "und",
  "sw-Arab": "und",
  "tg-Arab": "und",
  "ug-Cyrl": "und",
  "uz-Arab": "und",
  "uz-Cyrl": "und",
  "vai-Latn": "und",
  "wo-Arab": "und",
  "yo-Arab": "und",
  "yue-Hans": "und",
  "zh-Hant": "und",
  "zh-Hant-MO": "zh-Hant-HK"
});
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/parentLocale.js
/**
 * DevExtreme (esm/common/core/localization/parentLocale.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
const PARENT_LOCALE_SEPARATOR = "-";
/* harmony default export */ const parentLocale = ((parentLocales, locale) => {
  const parentLocale = parentLocales[locale];
  if (parentLocale) {
    return "root" !== parentLocale && parentLocale;
  }
  return locale.substr(0, locale.lastIndexOf("-"));
});
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/core.js
/**
 * DevExtreme (esm/common/core/localization/core.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */



const DEFAULT_LOCALE = "en";
/* harmony default export */ const core = ((0,dependency_injector/* default */.A)({
  locale: (() => {
    let currentLocale = "en";
    return locale => {
      if (!locale) {
        return currentLocale;
      }
      currentLocale = locale;
    };
  })(),
  getValueByClosestLocale: function (getter) {
    let locale = this.locale();
    let value = getter(locale);
    let isRootLocale;
    while (!value && !isRootLocale) {
      locale = parentLocale(parent_locales, locale);
      if (locale) {
        value = getter(locale);
      } else {
        isRootLocale = true;
      }
    }
    if (void 0 === value && "en" !== locale) {
      return getter("en");
    }
    return value;
  }
}));

/***/ }),

/***/ 8514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87951);
/**
 * DevExtreme (esm/common/core/localization/currency.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  _formatNumberCore: function (value, format, formatConfig) {
    if ("currency" === format) {
      formatConfig.precision = formatConfig.precision || 0;
      let result = this.format(value, (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .X)({}, formatConfig, {
        type: "fixedpoint"
      }));
      const currencyPart = this.getCurrencySymbol().symbol.replace(/\$/g, "$$$$");
      result = result.replace(/^(\D*)(\d.*)/, "$1" + currencyPart + "$2");
      return result;
    }
    return this.callBase.apply(this, arguments);
  },
  getCurrencySymbol: function () {
    return {
      symbol: "$"
    };
  },
  getOpenXmlCurrencyFormat: function () {
    return "$#,##0{0}_);\\($#,##0{0}\\)";
  }
});

/***/ }),

/***/ 32206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ localization_date)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/dependency_injector.js + 1 modules
var dependency_injector = __webpack_require__(48613);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_iterator.js
var m_iterator = __webpack_require__(88461);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/errors.js + 1 modules
var errors = __webpack_require__(54393);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/ldml/date.formatter.js
var date_formatter = __webpack_require__(34235);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/ldml/date.format.js
var date_format = __webpack_require__(44146);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/ldml/date.parser.js
var date_parser = __webpack_require__(28806);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/default_date_names.js
var default_date_names = __webpack_require__(94016);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/cldr-data/first_day_of_week_data.js
/**
 * DevExtreme (esm/common/core/localization/cldr-data/first_day_of_week_data.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
// !!! AUTO-GENERATED FILE, DO NOT EDIT
/* harmony default export */ const first_day_of_week_data = ({
  "af-NA": 1,
  agq: 1,
  ak: 1,
  ar: 6,
  "ar-EH": 1,
  "ar-ER": 1,
  "ar-KM": 1,
  "ar-LB": 1,
  "ar-MA": 1,
  "ar-MR": 1,
  "ar-PS": 1,
  "ar-SO": 1,
  "ar-SS": 1,
  "ar-TD": 1,
  "ar-TN": 1,
  asa: 1,
  ast: 1,
  az: 1,
  "az-Cyrl": 1,
  bas: 1,
  be: 1,
  bem: 1,
  bez: 1,
  bg: 1,
  bm: 1,
  br: 1,
  bs: 1,
  "bs-Cyrl": 1,
  ca: 1,
  ce: 1,
  cgg: 1,
  ckb: 6,
  cs: 1,
  cy: 1,
  da: 1,
  de: 1,
  dje: 1,
  dsb: 1,
  dua: 1,
  dyo: 1,
  ee: 1,
  el: 1,
  "en-001": 1,
  "en-AE": 6,
  "en-BI": 1,
  "en-MP": 1,
  "en-MV": 5,
  "en-SD": 6,
  eo: 1,
  es: 1,
  et: 1,
  eu: 1,
  ewo: 1,
  fa: 6,
  ff: 1,
  "ff-Adlm": 1,
  fi: 1,
  fo: 1,
  fr: 1,
  "fr-DJ": 6,
  "fr-DZ": 6,
  "fr-SY": 6,
  fur: 1,
  fy: 1,
  ga: 1,
  gd: 1,
  gl: 1,
  gsw: 1,
  gv: 1,
  ha: 1,
  hr: 1,
  hsb: 1,
  hu: 1,
  hy: 1,
  ia: 1,
  ig: 1,
  is: 1,
  it: 1,
  jgo: 1,
  jmc: 1,
  ka: 1,
  kab: 6,
  kde: 1,
  kea: 1,
  khq: 1,
  kk: 1,
  kkj: 1,
  kl: 1,
  "ko-KP": 1,
  ksb: 1,
  ksf: 1,
  ksh: 1,
  ku: 1,
  kw: 1,
  ky: 1,
  lag: 1,
  lb: 1,
  lg: 1,
  ln: 1,
  lrc: 6,
  lt: 1,
  lu: 1,
  lv: 1,
  "mas-TZ": 1,
  mfe: 1,
  mg: 1,
  mgo: 1,
  mi: 1,
  mk: 1,
  mn: 1,
  ms: 1,
  mua: 1,
  mzn: 6,
  naq: 1,
  nds: 1,
  nl: 1,
  nmg: 1,
  nnh: 1,
  no: 1,
  nus: 1,
  nyn: 1,
  os: 1,
  pcm: 1,
  pl: 1,
  ps: 6,
  "pt-AO": 1,
  "pt-CH": 1,
  "pt-CV": 1,
  "pt-GQ": 1,
  "pt-GW": 1,
  "pt-LU": 1,
  "pt-ST": 1,
  "pt-TL": 1,
  "qu-BO": 1,
  "qu-EC": 1,
  rm: 1,
  rn: 1,
  ro: 1,
  rof: 1,
  ru: 1,
  rw: 1,
  rwk: 1,
  sah: 1,
  sbp: 1,
  sc: 1,
  se: 1,
  ses: 1,
  sg: 1,
  shi: 1,
  "shi-Latn": 1,
  si: 1,
  sk: 1,
  sl: 1,
  smn: 1,
  so: 1,
  "so-DJ": 6,
  sq: 1,
  sr: 1,
  "sr-Latn": 1,
  sv: 1,
  sw: 1,
  "ta-LK": 1,
  "ta-MY": 1,
  teo: 1,
  tg: 1,
  "ti-ER": 1,
  tk: 1,
  to: 1,
  tr: 1,
  tt: 1,
  twq: 1,
  tzm: 1,
  uk: 1,
  uz: 1,
  "uz-Arab": 6,
  "uz-Cyrl": 1,
  vai: 1,
  "vai-Latn": 1,
  vi: 1,
  vun: 1,
  wae: 1,
  wo: 1,
  xog: 1,
  yav: 1,
  yi: 1,
  yo: 1,
  zgh: 1
});
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/core.js + 2 modules
var core = __webpack_require__(52826);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/number.js + 2 modules
var number = __webpack_require__(29430);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/extend.js
var extend = __webpack_require__(87951);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/intl/date.js
/**
 * DevExtreme (esm/common/core/localization/intl/date.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const SYMBOLS_TO_REMOVE_REGEX = /[\u200E\u200F]/g;
const NARROW_NO_BREAK_SPACE_REGEX = /[\u202F]/g;
const getIntlFormatter = format => date => {
  if (!format.timeZoneName) {
    const year = date.getFullYear();
    const recognizableAsTwentyCentury = String(year).length < 3;
    const safeYearShift = 400;
    const temporaryYearValue = recognizableAsTwentyCentury ? year + safeYearShift : year;
    const utcDate = new Date(Date.UTC(temporaryYearValue, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    if (recognizableAsTwentyCentury) {
      utcDate.setFullYear(year);
    }
    const utcFormat = (0,extend/* extend */.X)({
      timeZone: "UTC"
    }, format);
    return formatDateTime(utcDate, utcFormat);
  }
  return formatDateTime(date, format);
};
const formattersCache = {};
const getFormatter = format => {
  const key = core/* default */.A.locale() + "/" + JSON.stringify(format);
  if (!formattersCache[key]) {
    formattersCache[key] = new Intl.DateTimeFormat(core/* default */.A.locale(), format).format;
  }
  return formattersCache[key];
};
function formatDateTime(date, format) {
  return getFormatter(format)(date).replace(SYMBOLS_TO_REMOVE_REGEX, "").replace(NARROW_NO_BREAK_SPACE_REGEX, " ");
}
const formatNumber = number => new Intl.NumberFormat(core/* default */.A.locale()).format(number);
const getAlternativeNumeralsMap = (() => {
  const numeralsMapCache = {};
  return locale => {
    if (!(locale in numeralsMapCache)) {
      if ("0" === formatNumber(0)) {
        numeralsMapCache[locale] = false;
        return false;
      }
      numeralsMapCache[locale] = {};
      for (let i = 0; i < 10; ++i) {
        numeralsMapCache[locale][formatNumber(i)] = i;
      }
    }
    return numeralsMapCache[locale];
  };
})();
const normalizeNumerals = dateString => {
  const alternativeNumeralsMap = getAlternativeNumeralsMap(core/* default */.A.locale());
  if (!alternativeNumeralsMap) {
    return dateString;
  }
  return dateString.split("").map(sign => sign in alternativeNumeralsMap ? String(alternativeNumeralsMap[sign]) : sign).join("");
};
const removeLeadingZeroes = str => str.replace(/(\D)0+(\d)/g, "$1$2");
const dateStringEquals = (actual, expected) => removeLeadingZeroes(actual) === removeLeadingZeroes(expected);
const normalizeMonth = text => text.replace("d\u2019", "de ");
const intlFormats = {
  day: {
    day: "numeric"
  },
  date: {
    year: "numeric",
    month: "long",
    day: "numeric"
  },
  dayofweek: {
    weekday: "long"
  },
  longdate: {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  },
  longdatelongtime: {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  },
  longtime: {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  },
  month: {
    month: "long"
  },
  monthandday: {
    month: "long",
    day: "numeric"
  },
  monthandyear: {
    year: "numeric",
    month: "long"
  },
  shortdate: {},
  shorttime: {
    hour: "numeric",
    minute: "numeric"
  },
  shortyear: {
    year: "2-digit"
  },
  year: {
    year: "numeric"
  }
};
Object.defineProperty(intlFormats, "shortdateshorttime", {
  get: function () {
    const defaultOptions = Intl.DateTimeFormat(core/* default */.A.locale()).resolvedOptions();
    return {
      year: defaultOptions.year,
      month: defaultOptions.month,
      day: defaultOptions.day,
      hour: "numeric",
      minute: "numeric"
    };
  }
});
const getIntlFormat = format => "string" === typeof format && intlFormats[format.toLowerCase()];
const monthNameStrategies = {
  standalone: function (monthIndex, monthFormat) {
    const date = new Date(1999, monthIndex, 13, 1);
    const dateString = getIntlFormatter({
      month: monthFormat
    })(date);
    return dateString;
  },
  format: function (monthIndex, monthFormat) {
    const date = new Date(0, monthIndex, 13, 1);
    const dateString = normalizeMonth(getIntlFormatter({
      day: "numeric",
      month: monthFormat
    })(date));
    const parts = dateString.split(" ").filter(part => part.indexOf("13") < 0);
    if (1 === parts.length) {
      return parts[0];
    } else if (2 === parts.length) {
      return parts[0].length > parts[1].length ? parts[0] : parts[1];
    }
    return monthNameStrategies.standalone(monthIndex, monthFormat);
  }
};
/* harmony default export */ const date = ({
  engine: function () {
    return "intl";
  },
  getMonthNames: function (format, type) {
    const monthFormat = {
      wide: "long",
      abbreviated: "short",
      narrow: "narrow"
    }[format || "wide"];
    type = "format" === type ? type : "standalone";
    return Array.apply(null, new Array(12)).map((_, monthIndex) => monthNameStrategies[type](monthIndex, monthFormat));
  },
  getDayNames: function (format) {
    const result = (format => Array.apply(null, new Array(7)).map((_, dayIndex) => getIntlFormatter({
      weekday: format
    })(new Date(0, 0, dayIndex))))({
      wide: "long",
      abbreviated: "short",
      short: "narrow",
      narrow: "narrow"
    }[format || "wide"]);
    return result;
  },
  getPeriodNames: function () {
    const hour12Formatter = getIntlFormatter({
      hour: "numeric",
      hour12: true
    });
    return [1, 13].map(hours => {
      const hourNumberText = formatNumber(1);
      const timeParts = hour12Formatter(new Date(0, 0, 1, hours)).split(hourNumberText);
      if (2 !== timeParts.length) {
        return "";
      }
      const biggerPart = timeParts[0].length > timeParts[1].length ? timeParts[0] : timeParts[1];
      return biggerPart.trim();
    });
  },
  format: function (date, format) {
    if (!date) {
      return;
    }
    if (!format) {
      return date;
    }
    if ("function" !== typeof format && !format.formatter) {
      format = format.type || format;
    }
    const intlFormat = getIntlFormat(format);
    if (intlFormat) {
      return getIntlFormatter(intlFormat)(date);
    }
    const formatType = typeof format;
    if (format.formatter || "function" === formatType || "string" === formatType) {
      return this.callBase.apply(this, arguments);
    }
    return getIntlFormatter(format)(date);
  },
  parse: function (dateString, format) {
    let formatter;
    if (format && !format.parser && "string" === typeof dateString) {
      dateString = normalizeMonth(dateString);
      formatter = date => normalizeMonth(this.format(date, format));
    }
    return this.callBase(dateString, formatter || format);
  },
  _parseDateBySimpleFormat: function (dateString, format) {
    dateString = normalizeNumerals(dateString);
    const formatParts = this.getFormatParts(format);
    const dateParts = dateString.split(/\D+/).filter(part => part.length > 0);
    if (formatParts.length !== dateParts.length) {
      return;
    }
    const dateArgs = this._generateDateArgs(formatParts, dateParts);
    const constructValidDate = ampmShift => {
      const parsedDate = ((dateArgs, ampmShift) => {
        const hoursShift = ampmShift ? 12 : 0;
        return new Date(dateArgs.year, dateArgs.month, dateArgs.day, (dateArgs.hours + hoursShift) % 24, dateArgs.minutes, dateArgs.seconds);
      })(dateArgs, ampmShift);
      if (dateStringEquals(normalizeNumerals(this.format(parsedDate, format)), dateString)) {
        return parsedDate;
      }
    };
    return constructValidDate(false) || constructValidDate(true);
  },
  _generateDateArgs: function (formatParts, dateParts) {
    const currentDate = new Date();
    const dateArgs = {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      day: currentDate.getDate(),
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    formatParts.forEach((formatPart, index) => {
      const datePart = dateParts[index];
      let parsed = parseInt(datePart, 10);
      if ("month" === formatPart) {
        parsed -= 1;
      }
      dateArgs[formatPart] = parsed;
    });
    return dateArgs;
  },
  formatUsesMonthName: function (format) {
    if ("object" === typeof format && !(format.type || format.format)) {
      return "long" === format.month;
    }
    return this.callBase.apply(this, arguments);
  },
  formatUsesDayName: function (format) {
    if ("object" === typeof format && !(format.type || format.format)) {
      return "long" === format.weekday;
    }
    return this.callBase.apply(this, arguments);
  },
  getTimeSeparator: function () {
    return normalizeNumerals(formatDateTime(new Date(2001, 1, 1, 11, 11), {
      hour: "numeric",
      minute: "numeric",
      hour12: false
    })).replace(/\d/g, "");
  },
  getFormatParts: function (format) {
    if ("string" === typeof format) {
      return this.callBase(format);
    }
    const intlFormat = (0,extend/* extend */.X)({}, intlFormats[format.toLowerCase()]);
    const date = new Date(2001, 2, 4, 5, 6, 7);
    let formattedDate = getIntlFormatter(intlFormat)(date);
    formattedDate = normalizeNumerals(formattedDate);
    return [{
      name: "year",
      value: 1
    }, {
      name: "month",
      value: 3
    }, {
      name: "day",
      value: 4
    }, {
      name: "hours",
      value: 5
    }, {
      name: "minutes",
      value: 6
    }, {
      name: "seconds",
      value: 7
    }].map(part => ({
      name: part.name,
      index: formattedDate.indexOf(part.value)
    })).filter(part => part.index > -1).sort((a, b) => a.index - b.index).map(part => part.name);
  }
});
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/date.js
/**
 * DevExtreme (esm/common/core/localization/date.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */












const DEFAULT_DAY_OF_WEEK_INDEX = 0;
const hasIntl = "undefined" !== typeof Intl;
const FORMATS_TO_PATTERN_MAP = {
  shortdate: "M/d/y",
  shorttime: "h:mm a",
  longdate: "EEEE, MMMM d, y",
  longtime: "h:mm:ss a",
  monthandday: "MMMM d",
  monthandyear: "MMMM y",
  quarterandyear: "QQQ y",
  day: "d",
  year: "y",
  shortdateshorttime: "M/d/y, h:mm a",
  longdatelongtime: "EEEE, MMMM d, y, h:mm:ss a",
  month: "LLLL",
  shortyear: "yy",
  dayofweek: "EEEE",
  quarter: "QQQ",
  hour: "HH",
  minute: "mm",
  second: "ss",
  millisecond: "SSS",
  "datetime-local": "yyyy-MM-ddTHH':'mm':'ss"
};
const possiblePartPatterns = {
  year: ["y", "yy", "yyyy"],
  day: ["d", "dd"],
  month: ["M", "MM", "MMM", "MMMM"],
  hours: ["H", "HH", "h", "hh", "ah"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  milliseconds: ["S", "SS", "SSS"]
};
const dateLocalization = (0,dependency_injector/* default */.A)({
  engine: function () {
    return "base";
  },
  _getPatternByFormat: function (format) {
    return FORMATS_TO_PATTERN_MAP[format.toLowerCase()];
  },
  _expandPattern: function (pattern) {
    return this._getPatternByFormat(pattern) || pattern;
  },
  formatUsesMonthName: function (format) {
    return -1 !== this._expandPattern(format).indexOf("MMMM");
  },
  formatUsesDayName: function (format) {
    return -1 !== this._expandPattern(format).indexOf("EEEE");
  },
  getFormatParts: function (format) {
    const pattern = this._getPatternByFormat(format) || format;
    const result = [];
    (0,m_iterator/* each */.__)(pattern.split(/\W+/), (_, formatPart) => {
      (0,m_iterator/* each */.__)(possiblePartPatterns, (partName, possiblePatterns) => {
        if (possiblePatterns.includes(formatPart)) {
          result.push(partName);
        }
      });
    });
    return result;
  },
  getMonthNames: function (format) {
    return default_date_names/* default */.A.getMonthNames(format);
  },
  getDayNames: function (format) {
    return default_date_names/* default */.A.getDayNames(format);
  },
  getQuarterNames: function (format) {
    return default_date_names/* default */.A.getQuarterNames(format);
  },
  getPeriodNames: function (format) {
    return default_date_names/* default */.A.getPeriodNames(format);
  },
  getTimeSeparator: function () {
    return ":";
  },
  is24HourFormat: function (format) {
    const amTime = new Date(2017, 0, 20, 11, 0, 0, 0);
    const pmTime = new Date(2017, 0, 20, 23, 0, 0, 0);
    const amTimeFormatted = this.format(amTime, format);
    const pmTimeFormatted = this.format(pmTime, format);
    for (let i = 0; i < amTimeFormatted.length; i++) {
      if (amTimeFormatted[i] !== pmTimeFormatted[i]) {
        return !isNaN(parseInt(amTimeFormatted[i]));
      }
    }
  },
  format: function (date, format) {
    if (!date) {
      return;
    }
    if (!format) {
      return date;
    }
    let formatter;
    if ("function" === typeof format) {
      formatter = format;
    } else if (format.formatter) {
      formatter = format.formatter;
    } else {
      format = format.type || format;
      if ((0,type/* isString */.Kg)(format)) {
        format = FORMATS_TO_PATTERN_MAP[format.toLowerCase()] || format;
        return number/* default */.A.convertDigits((0,date_formatter/* getFormatter */.f)(format, this)(date));
      }
    }
    if (!formatter) {
      return;
    }
    return formatter(date);
  },
  parse: function (text, format) {
    const that = this;
    let ldmlFormat;
    let formatter;
    if (!text) {
      return;
    }
    if (!format) {
      return this.parse(text, "shortdate");
    }
    if (format.parser) {
      return format.parser(text);
    }
    if ("string" === typeof format && !FORMATS_TO_PATTERN_MAP[format.toLowerCase()]) {
      ldmlFormat = format;
    } else {
      formatter = value => {
        const text = that.format(value, format);
        return number/* default */.A.convertDigits(text, true);
      };
      try {
        ldmlFormat = (0,date_format/* getFormat */.g)(formatter);
      } catch (e) {}
    }
    if (ldmlFormat) {
      text = number/* default */.A.convertDigits(text, true);
      return (0,date_parser/* getParser */.SQ)(ldmlFormat, this)(text);
    }
    errors/* default */.A.log("W0012");
    const result = new Date(text);
    if (!result || isNaN(result.getTime())) {
      return;
    }
    return result;
  },
  firstDayOfWeekIndex: function () {
    const index = core/* default */.A.getValueByClosestLocale(locale => first_day_of_week_data[locale]);
    return void 0 === index ? 0 : index;
  }
});
if (hasIntl) {
  dateLocalization.inject(date);
}
/* harmony default export */ const localization_date = (dateLocalization);

/***/ }),

/***/ 94016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_utils_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88461);
/**
 * DevExtreme (esm/common/core/localization/default_date_names.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const PERIODS = ["AM", "PM"];
const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
const cutCaptions = (captions, format) => {
  const lengthByFormat = {
    abbreviated: 3,
    short: 2,
    narrow: 1
  };
  return (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_0__/* .map */ .Tj)(captions, caption => caption.substr(0, lengthByFormat[format]));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getMonthNames: function (format) {
    return cutCaptions(MONTHS, format);
  },
  getDayNames: function (format) {
    return cutCaptions(DAYS, format);
  },
  getQuarterNames: function (format) {
    return QUARTERS;
  },
  getPeriodNames: function (format) {
    return PERIODS;
  }
});

/***/ }),

/***/ 44146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getFormat)
/* harmony export */ });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29430);
/**
 * DevExtreme (esm/common/core/localization/ldml/date.format.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const ARABIC_COMMA = "\u060c";
const FORMAT_SEPARATORS = " .,:;/\\<>()-[]\u060c";
const AM_PM_PATTERN = ". m.";
const checkDigit = function (char) {
  const code = char && _number__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.convertDigits(char, false).charCodeAt(0);
  const zeroCode = _number__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.convertDigits("0", false).charCodeAt(0);
  return zeroCode <= code && code < zeroCode + 10;
};
const checkPatternContinue = function (text, patterns, index, isDigit) {
  const char = text[index];
  const nextChar = text[index + 1];
  if (!isDigit) {
    if ("." === char || " " === char && ". m." === text.slice(index - 1, index + 3)) {
      return true;
    }
    if ("-" === char && !checkDigit(nextChar)) {
      return true;
    }
  }
  const isDigitChanged = isDigit && patterns.some(pattern => text[index] !== pattern[index]);
  return FORMAT_SEPARATORS.indexOf(char) < 0 && isDigit === checkDigit(char) && (!isDigit || isDigitChanged);
};
const getPatternStartIndex = function (defaultPattern, index) {
  if (!checkDigit(defaultPattern[index])) {
    while (index > 0 && !checkDigit(defaultPattern[index - 1]) && ("." === defaultPattern[index - 1] || FORMAT_SEPARATORS.indexOf(defaultPattern[index - 1]) < 0)) {
      index--;
    }
  }
  return index;
};
const getDifference = function (defaultPattern, patterns, processedIndexes, isDigit) {
  let i = 0;
  const result = [];
  const patternsFilter = function (pattern) {
    return defaultPattern[i] !== pattern[i] && (void 0 === isDigit || checkDigit(defaultPattern[i]) === isDigit);
  };
  if (!Array.isArray(patterns)) {
    patterns = [patterns];
  }
  for (i = 0; i < defaultPattern.length; i++) {
    if (processedIndexes.indexOf(i) < 0 && patterns.filter(patternsFilter).length) {
      i = getPatternStartIndex(defaultPattern, i);
      do {
        isDigit = checkDigit(defaultPattern[i]);
        if (!result.length && !isDigit && checkDigit(patterns[0][i])) {
          break;
        }
        result.push(i);
        processedIndexes.unshift(i);
        i++;
      } while (defaultPattern[i] && checkPatternContinue(defaultPattern, patterns, i, isDigit));
      break;
    }
  }
  if (1 === result.length && ("0" === defaultPattern[processedIndexes[0] - 1] || "\u0660" === defaultPattern[processedIndexes[0] - 1])) {
    processedIndexes.unshift(processedIndexes[0] - 1);
  }
  return result;
};
const replaceCharsCore = function (pattern, indexes, char, patternPositions) {
  const baseCharIndex = indexes[0];
  const patternIndex = baseCharIndex < patternPositions.length ? patternPositions[baseCharIndex] : baseCharIndex;
  indexes.forEach(function (_, index) {
    pattern = pattern.substr(0, patternIndex + index) + (char.length > 1 ? char[index] : char) + pattern.substr(patternIndex + index + 1);
  });
  if (1 === indexes.length) {
    pattern = pattern.replace("0" + char, char + char);
    pattern = pattern.replace("\u0660" + char, char + char);
  }
  return pattern;
};
const replaceChars = function (pattern, indexes, char, patternPositions) {
  let i;
  let index;
  let patternIndex;
  if (!checkDigit(pattern[indexes[0]] || "0")) {
    const letterCount = Math.max(indexes.length <= 3 ? 3 : 4, char.length);
    while (indexes.length > letterCount) {
      index = indexes.pop();
      patternIndex = patternPositions[index];
      patternPositions[index] = -1;
      for (i = index + 1; i < patternPositions.length; i++) {
        patternPositions[i]--;
      }
      pattern = pattern.substr(0, patternIndex) + pattern.substr(patternIndex + 1);
    }
    index = indexes[indexes.length - 1] + 1, patternIndex = index < patternPositions.length ? patternPositions[index] : index;
    while (indexes.length < letterCount) {
      indexes.push(indexes[indexes.length - 1] + 1);
      for (i = index; i < patternPositions.length; i++) {
        patternPositions[i]++;
      }
      pattern = pattern.substr(0, patternIndex) + " " + pattern.substr(patternIndex);
    }
  }
  pattern = replaceCharsCore(pattern, indexes, char, patternPositions);
  return pattern;
};
const formatValue = function (value, formatter) {
  if (Array.isArray(value)) {
    return value.map(function (value) {
      return (formatter(value) || "").toString();
    });
  }
  return (formatter(value) || "").toString();
};
const ESCAPE_CHARS_REGEXP = /[a-zA-Z]/g;
const escapeChars = function (pattern, defaultPattern, processedIndexes, patternPositions) {
  const escapeIndexes = defaultPattern.split("").map(function (char, index) {
    if (processedIndexes.indexOf(index) < 0 && (char.match(ESCAPE_CHARS_REGEXP) || "'" === char)) {
      return patternPositions[index];
    }
    return -1;
  });
  pattern = pattern.split("").map(function (char, index) {
    let result = char;
    const isCurrentCharEscaped = escapeIndexes.indexOf(index) >= 0;
    const isPrevCharEscaped = index > 0 && escapeIndexes.indexOf(index - 1) >= 0;
    const isNextCharEscaped = escapeIndexes.indexOf(index + 1) >= 0;
    if (isCurrentCharEscaped) {
      if (!isPrevCharEscaped) {
        result = "'" + result;
      }
      if (!isNextCharEscaped) {
        result += "'";
      }
    }
    return result;
  }).join("");
  return pattern;
};
const getFormat = function (formatter) {
  const processedIndexes = [];
  const defaultPattern = formatValue(new Date(2009, 8, 8, 6, 5, 4), formatter);
  const patternPositions = defaultPattern.split("").map(function (_, index) {
    return index;
  });
  let result = defaultPattern;
  const replacedPatterns = {};
  const datePatterns = [{
    date: new Date(2009, 8, 8, 6, 5, 4, 111),
    pattern: "S"
  }, {
    date: new Date(2009, 8, 8, 6, 5, 2),
    pattern: "s"
  }, {
    date: new Date(2009, 8, 8, 6, 2, 4),
    pattern: "m"
  }, {
    date: new Date(2009, 8, 8, 18, 5, 4),
    pattern: "H",
    isDigit: true
  }, {
    date: new Date(2009, 8, 8, 2, 5, 4),
    pattern: "h",
    isDigit: true
  }, {
    date: new Date(2009, 8, 8, 18, 5, 4),
    pattern: "a",
    isDigit: false
  }, {
    date: new Date(2009, 8, 1, 6, 5, 4),
    pattern: "d"
  }, {
    date: [new Date(2009, 8, 2, 6, 5, 4), new Date(2009, 8, 3, 6, 5, 4), new Date(2009, 8, 4, 6, 5, 4)],
    pattern: "E"
  }, {
    date: new Date(2009, 9, 6, 6, 5, 4),
    pattern: "M"
  }, {
    date: new Date(1998, 8, 8, 6, 5, 4),
    pattern: "y"
  }];
  if (!result) {
    return;
  }
  datePatterns.forEach(function (test) {
    const diff = getDifference(defaultPattern, formatValue(test.date, formatter), processedIndexes, test.isDigit);
    const pattern = "M" === test.pattern && !replacedPatterns.d ? "L" : test.pattern;
    result = replaceChars(result, diff, pattern, patternPositions);
    replacedPatterns[pattern] = diff.length;
  });
  result = escapeChars(result, defaultPattern, processedIndexes, patternPositions);
  if (processedIndexes.length) {
    return result;
  }
};

/***/ }),

/***/ 34235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ getFormatter)
/* harmony export */ });
/**
 * DevExtreme (esm/common/core/localization/ldml/date.formatter.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
function leftPad(text, length) {
  while (text.length < length) {
    text = "0" + text;
  }
  return text;
}
const FORMAT_TYPES = {
  3: "abbreviated",
  4: "wide",
  5: "narrow"
};
const LDML_FORMATTERS = {
  y: function (date, count, useUtc) {
    let year = date[useUtc ? "getUTCFullYear" : "getFullYear"]();
    if (2 === count) {
      year %= 100;
    }
    return leftPad(year.toString(), count);
  },
  M: function (date, count, useUtc, dateParts) {
    const month = date[useUtc ? "getUTCMonth" : "getMonth"]();
    const formatType = FORMAT_TYPES[count];
    if (formatType) {
      return dateParts.getMonthNames(formatType, "format")[month];
    }
    return leftPad((month + 1).toString(), Math.min(count, 2));
  },
  L: function (date, count, useUtc, dateParts) {
    const month = date[useUtc ? "getUTCMonth" : "getMonth"]();
    const formatType = FORMAT_TYPES[count];
    if (formatType) {
      return dateParts.getMonthNames(formatType, "standalone")[month];
    }
    return leftPad((month + 1).toString(), Math.min(count, 2));
  },
  Q: function (date, count, useUtc, dateParts) {
    const month = date[useUtc ? "getUTCMonth" : "getMonth"]();
    const quarter = Math.floor(month / 3);
    const formatType = FORMAT_TYPES[count];
    if (formatType) {
      return dateParts.getQuarterNames(formatType)[quarter];
    }
    return leftPad((quarter + 1).toString(), Math.min(count, 2));
  },
  E: function (date, count, useUtc, dateParts) {
    const day = date[useUtc ? "getUTCDay" : "getDay"]();
    const formatType = FORMAT_TYPES[count < 3 ? 3 : count];
    return dateParts.getDayNames(formatType)[day];
  },
  a: function (date, count, useUtc, dateParts) {
    const hours = date[useUtc ? "getUTCHours" : "getHours"]();
    const period = hours < 12 ? 0 : 1;
    const formatType = FORMAT_TYPES[count];
    return dateParts.getPeriodNames(formatType)[period];
  },
  d: function (date, count, useUtc) {
    return leftPad(date[useUtc ? "getUTCDate" : "getDate"]().toString(), Math.min(count, 2));
  },
  H: function (date, count, useUtc) {
    return leftPad(date[useUtc ? "getUTCHours" : "getHours"]().toString(), Math.min(count, 2));
  },
  h: function (date, count, useUtc) {
    const hours = date[useUtc ? "getUTCHours" : "getHours"]();
    return leftPad((hours % 12 || 12).toString(), Math.min(count, 2));
  },
  m: function (date, count, useUtc) {
    return leftPad(date[useUtc ? "getUTCMinutes" : "getMinutes"]().toString(), Math.min(count, 2));
  },
  s: function (date, count, useUtc) {
    return leftPad(date[useUtc ? "getUTCSeconds" : "getSeconds"]().toString(), Math.min(count, 2));
  },
  S: function (date, count, useUtc) {
    return leftPad(date[useUtc ? "getUTCMilliseconds" : "getMilliseconds"]().toString(), 3).substr(0, count);
  },
  x: function (date, count, useUtc) {
    const timezoneOffset = useUtc ? 0 : date.getTimezoneOffset();
    const signPart = timezoneOffset > 0 ? "-" : "+";
    const timezoneOffsetAbs = Math.abs(timezoneOffset);
    const hours = Math.floor(timezoneOffsetAbs / 60);
    const minutes = timezoneOffsetAbs % 60;
    const hoursPart = leftPad(hours.toString(), 2);
    const minutesPart = leftPad(minutes.toString(), 2);
    return signPart + hoursPart + (count >= 3 ? ":" : "") + (count > 1 || minutes ? minutesPart : "");
  },
  X: function (date, count, useUtc) {
    if (useUtc || !date.getTimezoneOffset()) {
      return "Z";
    }
    return LDML_FORMATTERS.x(date, count, useUtc);
  },
  Z: function (date, count, useUtc) {
    return LDML_FORMATTERS.X(date, count >= 5 ? 3 : 2, useUtc);
  }
};
const getFormatter = function (format, dateParts) {
  return function (date) {
    let charIndex;
    let formatter;
    let char;
    let charCount = 0;
    let isEscaping = false;
    let isCurrentCharEqualsNext;
    let result = "";
    if (!date) {
      return null;
    }
    if (!format) {
      return date;
    }
    const useUtc = "Z" === format[format.length - 1] || "'Z'" === format.slice(-3);
    for (charIndex = 0; charIndex < format.length; charIndex++) {
      char = format[charIndex];
      formatter = LDML_FORMATTERS[char];
      isCurrentCharEqualsNext = char === format[charIndex + 1];
      charCount++;
      if (!isCurrentCharEqualsNext) {
        if (formatter && !isEscaping) {
          result += formatter(date, charCount, useUtc, dateParts);
        }
        charCount = 0;
      }
      if ("'" === char && !isCurrentCharEqualsNext) {
        isEscaping = !isEscaping;
      } else if (isEscaping || !formatter) {
        result += char;
      }
      if ("'" === char && isCurrentCharEqualsNext) {
        charIndex++;
      }
    }
    return result;
  };
};

/***/ }),

/***/ 28806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQ: () => (/* binding */ getParser),
/* harmony export */   rt: () => (/* binding */ getPatternSetters),
/* harmony export */   wu: () => (/* binding */ getRegExpInfo)
/* harmony export */ });
/* unused harmony export isPossibleForParsingFormat */
/* harmony import */ var _core_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5042);
/* harmony import */ var _core_utils_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85978);
/**
 * DevExtreme (esm/common/core/localization/ldml/date.parser.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const FORMAT_TYPES = {
  3: "abbreviated",
  4: "wide",
  5: "narrow"
};
const monthRegExpGenerator = function (count, dateParts) {
  if (count > 2) {
    return Object.keys(FORMAT_TYPES).map(function (count) {
      return ["format", "standalone"].map(function (type) {
        return dateParts.getMonthNames(FORMAT_TYPES[count], type).join("|");
      }).join("|");
    }).join("|");
  }
  return 2 === count ? "1[012]|0?[1-9]" : "0??[1-9]|1[012]";
};
const PATTERN_REGEXPS = {
  ":": function (count, dateParts) {
    const countSuffix = count > 1 ? `{${count}}` : "";
    let timeSeparator = (0,_core_utils_common__WEBPACK_IMPORTED_MODULE_0__/* .escapeRegExp */ .Nt)(dateParts.getTimeSeparator());
    ":" !== timeSeparator && (timeSeparator = `${timeSeparator}|:`);
    return `${timeSeparator}${countSuffix}`;
  },
  y: function (count) {
    return 2 === count ? `[0-9]{${count}}` : "[0-9]+?";
  },
  M: monthRegExpGenerator,
  L: monthRegExpGenerator,
  Q: function (count, dateParts) {
    if (count > 2) {
      return dateParts.getQuarterNames(FORMAT_TYPES[count], "format").join("|");
    }
    return "0?[1-4]";
  },
  E: function (count, dateParts) {
    return "\\D*";
  },
  a: function (count, dateParts) {
    return dateParts.getPeriodNames(FORMAT_TYPES[count < 3 ? 3 : count], "format").join("|");
  },
  d: function (count) {
    return 2 === count ? "3[01]|[12][0-9]|0?[1-9]" : "0??[1-9]|[12][0-9]|3[01]";
  },
  H: function (count) {
    return 2 === count ? "2[0-3]|1[0-9]|0?[0-9]" : "0??[0-9]|1[0-9]|2[0-3]";
  },
  h: function (count) {
    return 2 === count ? "1[012]|0?[1-9]" : "0??[1-9]|1[012]";
  },
  m: function (count) {
    return 2 === count ? "[1-5][0-9]|0?[0-9]" : "0??[0-9]|[1-5][0-9]";
  },
  s: function (count) {
    return 2 === count ? "[1-5][0-9]|0?[0-9]" : "0??[0-9]|[1-5][0-9]";
  },
  S: function (count) {
    return `[0-9]{1,${count}}`;
  },
  w: function (count) {
    return 2 === count ? "[1-5][0-9]|0?[0-9]" : "0??[0-9]|[1-5][0-9]";
  },
  x: function (count) {
    return 3 === count ? "[+-](?:2[0-3]|[01][0-9]):(?:[0-5][0-9])|Z" : "[+-](?:2[0-3]|[01][0-9])(?:[0-5][0-9])|Z";
  }
};
const parseNumber = Number;
const caseInsensitiveIndexOf = function (array, value) {
  return array.map(item => item.toLowerCase()).indexOf(value.toLowerCase());
};
const monthPatternParser = function (text, count, dateParts) {
  if (count > 2) {
    return ["format", "standalone"].map(function (type) {
      return Object.keys(FORMAT_TYPES).map(function (count) {
        const monthNames = dateParts.getMonthNames(FORMAT_TYPES[count], type);
        return caseInsensitiveIndexOf(monthNames, text);
      });
    }).reduce(function (a, b) {
      return a.concat(b);
    }).filter(function (index) {
      return index >= 0;
    })[0];
  }
  return parseNumber(text) - 1;
};
const PATTERN_PARSERS = {
  y: function (text, count) {
    const year = parseNumber(text);
    if (2 === count) {
      return year < 30 ? 2e3 + year : 1900 + year;
    }
    return year;
  },
  M: monthPatternParser,
  L: monthPatternParser,
  Q: function (text, count, dateParts) {
    if (count > 2) {
      return dateParts.getQuarterNames(FORMAT_TYPES[count], "format").indexOf(text);
    }
    return parseNumber(text) - 1;
  },
  E: function (text, count, dateParts) {
    const dayNames = dateParts.getDayNames(FORMAT_TYPES[count < 3 ? 3 : count], "format");
    return caseInsensitiveIndexOf(dayNames, text);
  },
  a: function (text, count, dateParts) {
    const periodNames = dateParts.getPeriodNames(FORMAT_TYPES[count < 3 ? 3 : count], "format");
    return caseInsensitiveIndexOf(periodNames, text);
  },
  d: parseNumber,
  H: parseNumber,
  h: parseNumber,
  m: parseNumber,
  s: parseNumber,
  S: function (text, count) {
    count = Math.max(count, 3);
    text = text.slice(0, 3);
    while (count < 3) {
      text += "0";
      count++;
    }
    return parseNumber(text);
  }
};
const ORDERED_PATTERNS = ["y", "M", "d", "h", "m", "s", "S"];
const PATTERN_SETTERS = {
  y: "setFullYear",
  M: "setMonth",
  L: "setMonth",
  a: function (date, value, datePartValues) {
    let hours = date.getHours();
    const hourPartValue = datePartValues.h;
    if (void 0 !== hourPartValue && hourPartValue !== hours) {
      hours--;
    }
    if (!value && 12 === hours) {
      hours = 0;
    } else if (value && 12 !== hours) {
      hours += 12;
    }
    date.setHours(hours);
  },
  d: "setDate",
  H: "setHours",
  h: "setHours",
  m: "setMinutes",
  s: "setSeconds",
  S: "setMilliseconds"
};
const getSameCharCount = function (text, index) {
  const char = text[index];
  if (!char) {
    return 0;
  }
  let count = 0;
  do {
    index++;
    count++;
  } while (text[index] === char);
  return count;
};
const createPattern = function (char, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += char;
  }
  return result;
};
const getRegExpInfo = function (format, dateParts) {
  let regexpText = "";
  let stubText = "";
  let isEscaping;
  const patterns = [];
  const addPreviousStub = function () {
    if (stubText) {
      patterns.push(`'${stubText}'`);
      regexpText += `${(0,_core_utils_common__WEBPACK_IMPORTED_MODULE_0__/* .escapeRegExp */ .Nt)(stubText)})`;
      stubText = "";
    }
  };
  for (let i = 0; i < format.length; i++) {
    const char = format[i];
    const isEscapeChar = "'" === char;
    const regexpPart = PATTERN_REGEXPS[char];
    if (isEscapeChar) {
      isEscaping = !isEscaping;
      if ("'" !== format[i - 1]) {
        continue;
      }
    }
    if (regexpPart && !isEscaping) {
      const count = getSameCharCount(format, i);
      const pattern = createPattern(char, count);
      addPreviousStub();
      patterns.push(pattern);
      regexpText += `(${regexpPart(count, dateParts)})`;
      i += count - 1;
    } else {
      if (!stubText) {
        regexpText += "(";
      }
      stubText += char;
    }
  }
  addPreviousStub();
  if (!isPossibleForParsingFormat(patterns)) {
    _core_utils_console__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .v.warn(`The following format may be parsed incorrectly: ${format}.`);
  }
  return {
    patterns: patterns,
    regexp: new RegExp(`^${regexpText}$`, "i")
  };
};
const digitFieldSymbols = ["d", "H", "h", "m", "s", "w", "M", "L", "Q"];
const isPossibleForParsingFormat = function (patterns) {
  const isDigitPattern = pattern => {
    if (!pattern) {
      return false;
    }
    const char = pattern[0];
    return ["y", "S"].includes(char) || digitFieldSymbols.includes(char) && pattern.length < 3;
  };
  let possibleForParsing = true;
  let ambiguousDigitPatternsCount = 0;
  return patterns.every((pattern, index, patterns) => {
    if (isDigitPattern(pattern)) {
      if ((pattern => "S" !== pattern[0] && 2 !== pattern.length)(pattern)) {
        possibleForParsing = ++ambiguousDigitPatternsCount < 2;
      }
      if (!isDigitPattern(patterns[index + 1])) {
        ambiguousDigitPatternsCount = 0;
      }
    }
    return possibleForParsing;
  });
};
const getPatternSetters = function () {
  return PATTERN_SETTERS;
};
const setPatternPart = function (date, pattern, text, dateParts, datePartValues) {
  const patternChar = pattern[0];
  const partSetter = PATTERN_SETTERS[patternChar];
  const partParser = PATTERN_PARSERS[patternChar];
  if (partSetter && partParser) {
    const value = partParser(text, pattern.length, dateParts);
    datePartValues[pattern] = value;
    if (date[partSetter]) {
      date[partSetter](value);
    } else {
      partSetter(date, value, datePartValues);
    }
  }
};
const setPatternPartFromNow = function (date, pattern, now) {
  const setterName = PATTERN_SETTERS[pattern];
  const getterName = "g" + setterName.substr(1);
  const value = now[getterName]();
  date[setterName](value);
};
const getShortPatterns = function (fullPatterns) {
  return fullPatterns.map(function (pattern) {
    if ("'" === pattern[0]) {
      return "";
    } else {
      return "H" === pattern[0] ? "h" : pattern[0];
    }
  });
};
const getMaxOrderedPatternIndex = function (patterns) {
  const indexes = patterns.map(function (pattern) {
    return ORDERED_PATTERNS.indexOf(pattern);
  });
  return Math.max.apply(Math, indexes);
};
const getOrderedFormatPatterns = function (formatPatterns) {
  const otherPatterns = formatPatterns.filter(function (pattern) {
    return ORDERED_PATTERNS.indexOf(pattern) < 0;
  });
  return ORDERED_PATTERNS.concat(otherPatterns);
};
const getParser = function (format, dateParts) {
  const regExpInfo = getRegExpInfo(format, dateParts);
  return function (text) {
    const regExpResult = regExpInfo.regexp.exec(text);
    if (regExpResult) {
      const now = new Date();
      const date = new Date(now.getFullYear(), 0, 1);
      const formatPatterns = getShortPatterns(regExpInfo.patterns);
      const maxPatternIndex = getMaxOrderedPatternIndex(formatPatterns);
      const orderedFormatPatterns = getOrderedFormatPatterns(formatPatterns);
      const datePartValues = {};
      orderedFormatPatterns.forEach(function (pattern, index) {
        if (!pattern || index < ORDERED_PATTERNS.length && index > maxPatternIndex) {
          return;
        }
        const patternIndex = formatPatterns.indexOf(pattern);
        if (patternIndex >= 0) {
          const regExpPattern = regExpInfo.patterns[patternIndex];
          const regExpText = regExpResult[patternIndex + 1];
          setPatternPart(date, regExpPattern, regExpText, dateParts, datePartValues);
        } else {
          setPatternPartFromNow(date, pattern, now);
        }
      });
      return date;
    }
    return null;
  };
};

/***/ }),

/***/ 68734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ getFormatter),
/* harmony export */   g: () => (/* binding */ getFormat)
/* harmony export */ });
/* harmony import */ var _core_utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72868);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18812);
/**
 * DevExtreme (esm/common/core/localization/ldml/number.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const DEFAULT_CONFIG = {
  thousandsSeparator: ",",
  decimalSeparator: "."
};
const ESCAPING_CHAR = "'";
const MAXIMUM_NUMBER_LENGTH = 15;
const PERCENT_EXPONENT_SHIFT = 2;
function getGroupSizes(formatString) {
  return formatString.split(",").slice(1).map(function (str) {
    let singleQuotesLeft = 0;
    return str.split("").filter(function (char, index) {
      singleQuotesLeft += "'" === char;
      const isDigit = "#" === char || "0" === char;
      const isInStub = singleQuotesLeft % 2;
      return isDigit && !isInStub;
    }).length;
  });
}
function splitSignParts(format) {
  let separatorChar = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ";";
  let escapingChar = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "'";
  const parts = [];
  let currentPart = "";
  let state = "searchingSeparator";
  for (let i = 0; i < format.length; i++) {
    const char = format[i];
    if ("searchingSeparator" === state && char === escapingChar) {
      state = "skippingSeparationInsideEscaping";
    } else if ("skippingSeparationInsideEscaping" === state && char === escapingChar) {
      state = "searchingSeparator";
    } else if ("searchingSeparator" === state && char === separatorChar) {
      state = "separating";
      parts.push(currentPart);
      currentPart = "";
    }
    if ("separating" !== state) {
      currentPart += char;
    } else {
      state = "searchingSeparator";
    }
  }
  parts.push(currentPart);
  return parts;
}
function getSignParts(format) {
  const signParts = splitSignParts(format);
  if (1 === signParts.length) {
    signParts.push("-" + signParts[0]);
  }
  return signParts;
}
function reverseString(str) {
  return str.toString().split("").reverse().join("");
}
function isPercentFormat(format) {
  return -1 !== format.indexOf("%") && !format.match(/'[^']*%[^']*'/g);
}
function removeStubs(str) {
  return str.replace(/'[^']*'/g, "");
}
function getNonRequiredDigitCount(floatFormat) {
  if (!floatFormat) {
    return 0;
  }
  const format = removeStubs(floatFormat);
  return format.length - format.replace(/[#]/g, "").length;
}
function getRequiredDigitCount(floatFormat) {
  if (!floatFormat) {
    return 0;
  }
  const format = removeStubs(floatFormat);
  return format.length - format.replace(/[0]/g, "").length;
}
function normalizeValueString(valuePart, minDigitCount, maxDigitCount) {
  if (!valuePart) {
    return "";
  }
  if (valuePart.length > maxDigitCount) {
    valuePart = valuePart.substr(0, maxDigitCount);
  }
  while (valuePart.length > minDigitCount && "0" === valuePart.slice(-1)) {
    valuePart = valuePart.substr(0, valuePart.length - 1);
  }
  while (valuePart.length < minDigitCount) {
    valuePart += "0";
  }
  return valuePart;
}
function applyGroups(valueString, groupSizes, thousandsSeparator) {
  if (!groupSizes.length) {
    return valueString;
  }
  const groups = [];
  let index = 0;
  while (valueString) {
    const groupSize = groupSizes[index];
    if (!groupSize) {
      break;
    }
    groups.push(valueString.slice(0, groupSize));
    valueString = valueString.slice(groupSize);
    if (index < groupSizes.length - 1) {
      index++;
    }
  }
  return groups.join(thousandsSeparator);
}
function formatNumberPart(format, valueString) {
  return format.split("'").map(function (formatPart, escapeIndex) {
    const isEscape = escapeIndex % 2;
    if (!formatPart && isEscape) {
      return "'";
    }
    return isEscape ? formatPart : formatPart.replace(/[,#0]+/, valueString);
  }).join("");
}
function getFloatPointIndex(format) {
  let isEscape = false;
  for (let index = 0; index < format.length; index++) {
    if ("'" === format[index]) {
      isEscape = !isEscape;
    }
    if ("." === format[index] && !isEscape) {
      return index;
    }
  }
  return format.length;
}
function getFormatter(format, config) {
  config = config || DEFAULT_CONFIG;
  return function (value) {
    if ("number" !== typeof value || isNaN(value)) {
      return "";
    }
    const signFormatParts = getSignParts(format);
    const isPositiveZero = 1 / value === 1 / 0;
    const isPositive = value > 0 || isPositiveZero;
    const numberFormat = signFormatParts[isPositive ? 0 : 1];
    const floatPointIndex = getFloatPointIndex(numberFormat);
    const floatFormatParts = [numberFormat.substr(0, floatPointIndex), numberFormat.substr(floatPointIndex + 1)];
    const minFloatPrecision = getRequiredDigitCount(floatFormatParts[1]);
    const maxFloatPrecision = minFloatPrecision + getNonRequiredDigitCount(floatFormatParts[1]);
    if (isPercentFormat(numberFormat)) {
      value = (0,_core_utils_math__WEBPACK_IMPORTED_MODULE_0__/* .multiplyInExponentialForm */ .T0)(value, 2);
    }
    if (!isPositive) {
      value = -value;
    }
    const minIntegerPrecision = getRequiredDigitCount(floatFormatParts[0]);
    const maxIntegerPrecision = getNonRequiredDigitCount(floatFormatParts[0]) || config.unlimitedIntegerDigits ? void 0 : minIntegerPrecision;
    const integerLength = Math.floor(value).toString().length;
    const floatPrecision = (0,_core_utils_math__WEBPACK_IMPORTED_MODULE_0__/* .fitIntoRange */ .df)(maxFloatPrecision, 0, 15 - integerLength);
    const groupSizes = getGroupSizes(floatFormatParts[0]).reverse();
    const valueParts = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toFixed */ .M)(value, floatPrecision < 0 ? 0 : floatPrecision).split(".");
    let valueIntegerPart = normalizeValueString(reverseString(valueParts[0]), minIntegerPrecision, maxIntegerPrecision);
    const valueFloatPart = normalizeValueString(valueParts[1], minFloatPrecision, maxFloatPrecision);
    valueIntegerPart = applyGroups(valueIntegerPart, groupSizes, config.thousandsSeparator);
    const integerString = reverseString(formatNumberPart(reverseString(floatFormatParts[0]), valueIntegerPart));
    const floatString = maxFloatPrecision ? formatNumberPart(floatFormatParts[1], valueFloatPart) : "";
    const result = integerString + (floatString.match(/\d/) ? config.decimalSeparator : "") + floatString;
    return result;
  };
}
function parseValue(text, isPercent, isNegative) {
  const value = (isPercent ? .01 : 1) * parseFloat(text) || 0;
  return isNegative ? -value : value;
}
function prepareValueText(valueText, formatter, isPercent, isIntegerPart) {
  let nextValueText = valueText;
  let char;
  let text;
  let nextText;
  do {
    if (nextText) {
      char = text.length === nextText.length ? "0" : "1";
      valueText = isIntegerPart ? char + valueText : valueText + char;
    }
    text = nextText || formatter(parseValue(nextValueText, isPercent));
    nextValueText = isIntegerPart ? "1" + nextValueText : nextValueText + "1";
    nextText = formatter(parseValue(nextValueText, isPercent));
  } while (text !== nextText && (isIntegerPart ? text.length === nextText.length : text.length <= nextText.length));
  if (isIntegerPart && nextText.length > text.length) {
    const hasGroups = -1 === formatter(12345).indexOf("12345");
    do {
      valueText = "1" + valueText;
    } while (hasGroups && parseValue(valueText, isPercent) < 1e5);
  }
  return valueText;
}
function getFormatByValueText(valueText, formatter, isPercent, isNegative) {
  let format = formatter(parseValue(valueText, isPercent, isNegative));
  const valueTextParts = valueText.split(".");
  const valueTextWithModifiedFloat = valueTextParts[0] + ".3" + valueTextParts[1].slice(1);
  const valueWithModifiedFloat = parseValue(valueTextWithModifiedFloat, isPercent, isNegative);
  const decimalSeparatorIndex = formatter(valueWithModifiedFloat).indexOf("3") - 1;
  format = format.replace(/(\d)\D(\d)/g, "$1,$2");
  if (decimalSeparatorIndex >= 0) {
    format = format.slice(0, decimalSeparatorIndex) + "." + format.slice(decimalSeparatorIndex + 1);
  }
  format = format.replace(/1+/, "1").replace(/1/g, "#");
  if (!isPercent) {
    format = format.replace(/%/g, "'%'");
  }
  return format;
}
function getFormat(formatter) {
  let valueText = ".";
  const isPercent = formatter(1).indexOf("100") >= 0;
  valueText = prepareValueText(valueText, formatter, isPercent, true);
  valueText = prepareValueText(valueText, formatter, isPercent, false);
  const positiveFormat = getFormatByValueText(valueText, formatter, isPercent, false);
  const negativeFormat = getFormatByValueText(valueText, formatter, isPercent, true);
  return negativeFormat === "-" + positiveFormat ? positiveFormat : positiveFormat + ";" + negativeFormat;
}

/***/ }),

/***/ 28708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ message)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/dependency_injector.js + 1 modules
var dependency_injector = __webpack_require__(48613);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/extend.js
var extend = __webpack_require__(87951);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/string.js + 1 modules
var string = __webpack_require__(53306);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/inflector.js
var inflector = __webpack_require__(48745);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/core.js + 2 modules
var core = __webpack_require__(52826);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/default_messages.js
/**
 * DevExtreme (esm/common/core/localization/default_messages.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
// !!! AUTO-GENERATED FILE, DO NOT EDIT
const defaultMessages = {
  en: {
    Yes: "Yes",
    No: "No",
    Cancel: "Cancel",
    CheckState: "Check state",
    Close: "Close",
    Clear: "Clear",
    Done: "Done",
    Loading: "Loading...",
    Select: "Select...",
    Search: "Search",
    Back: "Back",
    OK: "OK",
    Today: "Today",
    Yesterday: "Yesterday",
    "dxCollectionWidget-noDataText": "No data to display",
    "dxDropDownEditor-selectLabel": "Select",
    "validation-required": "Required",
    "validation-required-formatted": "{0} is required",
    "validation-numeric": "Value must be a number",
    "validation-numeric-formatted": "{0} must be a number",
    "validation-range": "Value is out of range",
    "validation-range-formatted": "{0} is out of range",
    "validation-stringLength": "The length of the value is not correct",
    "validation-stringLength-formatted": "The length of {0} is not correct",
    "validation-custom": "Value is invalid",
    "validation-custom-formatted": "{0} is invalid",
    "validation-async": "Value is invalid",
    "validation-async-formatted": "{0} is invalid",
    "validation-compare": "Values do not match",
    "validation-compare-formatted": "{0} does not match",
    "validation-pattern": "Value does not match pattern",
    "validation-pattern-formatted": "{0} does not match pattern",
    "validation-email": "Email is invalid",
    "validation-email-formatted": "{0} is invalid",
    "validation-mask": "Value is invalid",
    "dxLookup-searchPlaceholder": "Minimum character number: {0}",
    "dxList-pullingDownText": "Pull down to refresh...",
    "dxList-pulledDownText": "Release to refresh...",
    "dxList-refreshingText": "Refreshing...",
    "dxList-pageLoadingText": "Loading...",
    "dxList-nextButtonText": "More",
    "dxList-selectAll": "Select All",
    "dxList-listAriaLabel": "Items",
    "dxList-listAriaLabel-deletable": "Deletable items",
    "dxListEditDecorator-delete": "Delete",
    "dxListEditDecorator-more": "More",
    "dxList-selectAll-indeterminate": "Half-checked",
    "dxList-selectAll-checked": "Checked",
    "dxList-selectAll-notChecked": "Not checked",
    "dxList-ariaRoleDescription": "List",
    "dxList-listAriaLabel-itemContent": "List item content",
    "dxScrollView-pullingDownText": "Pull down to refresh...",
    "dxScrollView-pulledDownText": "Release to refresh...",
    "dxScrollView-refreshingText": "Refreshing...",
    "dxScrollView-reachBottomText": "Loading...",
    "dxDateBox-simulatedDataPickerTitleTime": "Select time",
    "dxDateBox-simulatedDataPickerTitleDate": "Select date",
    "dxDateBox-simulatedDataPickerTitleDateTime": "Select date and time",
    "dxDateBox-validation-datetime": "Value must be a date or time",
    "dxDateRangeBox-invalidStartDateMessage": "Start value must be a date",
    "dxDateRangeBox-invalidEndDateMessage": "End value must be a date",
    "dxDateRangeBox-startDateOutOfRangeMessage": "Start date is out of range",
    "dxDateRangeBox-endDateOutOfRangeMessage": "End date is out of range",
    "dxDateRangeBox-startDateLabel": "Start Date",
    "dxDateRangeBox-endDateLabel": "End Date",
    "dxFileUploader-selectFile": "Select a file",
    "dxFileUploader-dropFile": "or Drop a file here",
    "dxFileUploader-bytes": "bytes",
    "dxFileUploader-kb": "KB",
    "dxFileUploader-Mb": "MB",
    "dxFileUploader-Gb": "GB",
    "dxFileUploader-upload": "Upload",
    "dxFileUploader-uploaded": "Uploaded",
    "dxFileUploader-readyToUpload": "Ready to upload",
    "dxFileUploader-uploadAbortedMessage": "Upload cancelled",
    "dxFileUploader-uploadFailedMessage": "Upload failed",
    "dxFileUploader-invalidFileExtension": "File type is not allowed",
    "dxFileUploader-invalidMaxFileSize": "File is too large",
    "dxFileUploader-invalidMinFileSize": "File is too small",
    "dxRangeSlider-ariaFrom": "From",
    "dxRangeSlider-ariaTill": "Till",
    "dxSwitch-switchedOnText": "ON",
    "dxSwitch-switchedOffText": "OFF",
    "dxForm-optionalMark": "optional",
    "dxForm-requiredMessage": "{0} is required",
    "dxNumberBox-invalidValueMessage": "Value must be a number",
    "dxNumberBox-noDataText": "No data",
    "dxDataGrid-emptyHeaderWithColumnChooserText": "Use {0} to display columns",
    "dxDataGrid-emptyHeaderWithGroupPanelText": "Drag a column from the group panel here",
    "dxDataGrid-emptyHeaderWithColumnChooserAndGroupPanelText": "Use {0} or drag a column from the group panel",
    "dxDataGrid-emptyHeaderColumnChooserText": "column chooser",
    "dxDataGrid-columnChooserTitle": "Column Chooser",
    "dxDataGrid-columnChooserEmptyText": "Drag a column here to hide it",
    "dxDataGrid-groupContinuesMessage": "Continues on the next page",
    "dxDataGrid-groupContinuedMessage": "Continued from the previous page",
    "dxDataGrid-groupHeaderText": "Group by This Column",
    "dxDataGrid-ungroupHeaderText": "Ungroup",
    "dxDataGrid-ungroupAllText": "Ungroup All",
    "dxDataGrid-editingEditRow": "Edit",
    "dxDataGrid-editingSaveRowChanges": "Save",
    "dxDataGrid-editingCancelRowChanges": "Cancel",
    "dxDataGrid-editingDeleteRow": "Delete",
    "dxDataGrid-editingUndeleteRow": "Undelete",
    "dxDataGrid-editingConfirmDeleteMessage": "Are you sure you want to delete this record?",
    "dxDataGrid-validationCancelChanges": "Cancel changes",
    "dxDataGrid-groupPanelEmptyText": "Drag a column header here to group by that column",
    "dxDataGrid-noDataText": "No data",
    "dxDataGrid-searchPanelPlaceholder": "Search...",
    "dxDataGrid-filterRowShowAllText": "(All)",
    "dxDataGrid-filterRowResetOperationText": "Reset",
    "dxDataGrid-filterRowOperationEquals": "Equals",
    "dxDataGrid-filterRowOperationNotEquals": "Does not equal",
    "dxDataGrid-filterRowOperationLess": "Less than",
    "dxDataGrid-filterRowOperationLessOrEquals": "Less than or equal to",
    "dxDataGrid-filterRowOperationGreater": "Greater than",
    "dxDataGrid-filterRowOperationGreaterOrEquals": "Greater than or equal to",
    "dxDataGrid-filterRowOperationStartsWith": "Starts with",
    "dxDataGrid-filterRowOperationContains": "Contains",
    "dxDataGrid-filterRowOperationNotContains": "Does not contain",
    "dxDataGrid-filterRowOperationEndsWith": "Ends with",
    "dxDataGrid-filterRowOperationBetween": "Between",
    "dxDataGrid-filterRowOperationBetweenStartText": "Start",
    "dxDataGrid-filterRowOperationBetweenEndText": "End",
    "dxDataGrid-ariaSearchBox": "Search box",
    "dxDataGrid-applyFilterText": "Apply filter",
    "dxDataGrid-trueText": "true",
    "dxDataGrid-falseText": "false",
    "dxDataGrid-sortingAscendingText": "Sort Ascending",
    "dxDataGrid-sortingDescendingText": "Sort Descending",
    "dxDataGrid-sortingClearText": "Clear Sorting",
    "dxDataGrid-ariaNotSortedColumn": "Not sorted column",
    "dxDataGrid-ariaSortedAscendingColumn": "Column sorted in ascending order",
    "dxDataGrid-ariaSortedDescendingColumn": "Column sorted in descending order",
    "dxDataGrid-ariaSortIndex": "Sort index {0}",
    "dxDataGrid-editingSaveAllChanges": "Save changes",
    "dxDataGrid-editingCancelAllChanges": "Discard changes",
    "dxDataGrid-editingAddRow": "Add a row",
    "dxDataGrid-summaryMin": "Min: {0}",
    "dxDataGrid-summaryMinOtherColumn": "Min of {1} is {0}",
    "dxDataGrid-summaryMax": "Max: {0}",
    "dxDataGrid-summaryMaxOtherColumn": "Max of {1} is {0}",
    "dxDataGrid-summaryAvg": "Avg: {0}",
    "dxDataGrid-summaryAvgOtherColumn": "Avg of {1} is {0}",
    "dxDataGrid-summarySum": "Sum: {0}",
    "dxDataGrid-summarySumOtherColumn": "Sum of {1} is {0}",
    "dxDataGrid-summaryCount": "Count: {0}",
    "dxDataGrid-columnFixingFix": "Set Fixed Position",
    "dxDataGrid-columnFixingUnfix": "Unfix",
    "dxDataGrid-columnFixingLeftPosition": "Left",
    "dxDataGrid-columnFixingRightPosition": "Right",
    "dxDataGrid-columnFixingStickyPosition": "Sticky",
    "dxDataGrid-exportTo": "Export",
    "dxDataGrid-exportToExcel": "Export to Excel file",
    "dxDataGrid-exporting": "Exporting...",
    "dxDataGrid-excelFormat": "Excel file",
    "dxDataGrid-selectedRows": "Selected rows",
    "dxDataGrid-exportSelectedRows": "Export selected rows to {0}",
    "dxDataGrid-exportAll": "Export all data to {0}",
    "dxDataGrid-headerFilterLabel": "Filter options",
    "dxDataGrid-headerFilterIndicatorLabel": "Show filter options for column '{0}'",
    "dxDataGrid-headerFilterEmptyValue": "(Blanks)",
    "dxDataGrid-headerFilterOK": "OK",
    "dxDataGrid-headerFilterCancel": "Cancel",
    "dxDataGrid-ariaAdaptiveCollapse": "Hide additional data",
    "dxDataGrid-ariaAdaptiveExpand": "Display additional data",
    "dxDataGrid-ariaColumn": "Column",
    "dxDataGrid-ariaColumnHeader": "Column header",
    "dxDataGrid-ariaValue": "Value",
    "dxDataGrid-ariaError": "Error",
    "dxDataGrid-ariaRevertButton": "Press Escape to discard the changes",
    "dxDataGrid-ariaFilterCell": "Filter cell",
    "dxDataGrid-ariaCollapse": "Collapse",
    "dxDataGrid-ariaModifiedCell": "Modified",
    "dxDataGrid-ariaDeletedCell": "Deleted",
    "dxDataGrid-ariaEditableCell": "Editable",
    "dxDataGrid-ariaExpand": "Expand",
    "dxDataGrid-ariaCollapsedRow": "Collapsed row",
    "dxDataGrid-ariaExpandedRow": "Expanded row",
    "dxDataGrid-ariaDataGrid": "Data grid with {0} rows and {1} columns",
    "dxDataGrid-ariaSearchInGrid": "Search in the data grid",
    "dxDataGrid-ariaSelectAll": "Select all",
    "dxDataGrid-ariaSelectRow": "Select row",
    "dxDataGrid-ariaToolbar": "Data grid toolbar",
    "dxDataGrid-ariaEditForm": "Edit form",
    "dxDataGrid-filterBuilderPopupTitle": "Filter Builder",
    "dxDataGrid-filterPanelCreateFilter": "Create Filter",
    "dxDataGrid-filterPanelClearFilter": "Clear",
    "dxDataGrid-filterPanelFilterEnabledHint": "Enable the filter",
    "dxDataGrid-masterDetail": "Cell with details",
    "dxDataGrid-moveColumnToTheRight": "Move to the right",
    "dxDataGrid-moveColumnToTheLeft": "Move to the left",
    "dxTreeList-ariaTreeList": "Tree list with {0} rows and {1} columns",
    "dxTreeList-ariaExpandableInstruction": "Press Ctrl + right arrow to expand the focused node and Ctrl + left arrow to collapse it",
    "dxTreeList-ariaSearchInGrid": "Search in the tree list",
    "dxTreeList-ariaToolbar": "Tree list toolbar",
    "dxTreeList-editingAddRowToNode": "Add",
    "dxPager-infoText": "Page {0} of {1} ({2} items)",
    "dxPager-pagesCountText": "of",
    "dxPager-pageSize": "Items per page: {0}",
    "dxPager-pageSizesAllText": "All",
    "dxPager-page": "Page {0}",
    "dxPager-prevPage": "Previous page",
    "dxPager-nextPage": "Next page",
    "dxPager-ariaLabel": "Page navigation",
    "dxPager-ariaPageSize": "Page size",
    "dxPager-ariaPageNumber": "Page number",
    "dxPagination-infoText": "Page {0} of {1} ({2} items)",
    "dxPagination-pagesCountText": "of",
    "dxPagination-pageSize": "Items per page: {0}",
    "dxPagination-pageSizesAllText": "All",
    "dxPagination-page": "Page {0}",
    "dxPagination-prevPage": "Previous page",
    "dxPagination-nextPage": "Next page",
    "dxPagination-ariaLabel": "Page navigation",
    "dxPagination-ariaPageSize": "Page size",
    "dxPagination-ariaPageNumber": "Page number",
    "dxPivotGrid-grandTotal": "Grand Total",
    "dxPivotGrid-total": "{0} Total",
    "dxPivotGrid-fieldChooserTitle": "Field Chooser",
    "dxPivotGrid-showFieldChooser": "Show Field Chooser",
    "dxPivotGrid-expandAll": "Expand All",
    "dxPivotGrid-collapseAll": "Collapse All",
    "dxPivotGrid-sortColumnBySummary": 'Sort "{0}" by This Column',
    "dxPivotGrid-sortRowBySummary": 'Sort "{0}" by This Row',
    "dxPivotGrid-removeAllSorting": "Remove All Sorting",
    "dxPivotGrid-dataNotAvailable": "N/A",
    "dxPivotGrid-rowFields": "Row Fields",
    "dxPivotGrid-columnFields": "Column Fields",
    "dxPivotGrid-dataFields": "Data Fields",
    "dxPivotGrid-filterFields": "Filter Fields",
    "dxPivotGrid-allFields": "All Fields",
    "dxPivotGrid-columnFieldArea": "Drop Column Fields Here",
    "dxPivotGrid-dataFieldArea": "Drop Data Fields Here",
    "dxPivotGrid-rowFieldArea": "Drop Row Fields Here",
    "dxPivotGrid-filterFieldArea": "Drop Filter Fields Here",
    "dxScheduler-dateRange": "from {0} to {1}",
    "dxScheduler-ariaLabel": "Scheduler. {0} view: {1} with {2} appointments",
    "dxScheduler-ariaLabel-currentIndicator-present": "The current time indicator is visible in the view",
    "dxScheduler-ariaLabel-currentIndicator-not-present": "The current time indicator is not visible on the screen",
    "dxScheduler-appointmentAriaLabel-group": "Group: {0}",
    "dxScheduler-appointmentAriaLabel-recurring": "Recurring appointment",
    "dxScheduler-appointmentListAriaLabel": "Appointment list",
    "dxScheduler-editorLabelTitle": "Subject",
    "dxScheduler-editorLabelStartDate": "Start Date",
    "dxScheduler-editorLabelEndDate": "End Date",
    "dxScheduler-editorLabelDescription": "Description",
    "dxScheduler-editorLabelRecurrence": "Repeat",
    "dxScheduler-navigationToday": "Today",
    "dxScheduler-navigationPrevious": "Previous page",
    "dxScheduler-navigationNext": "Next page",
    "dxScheduler-openAppointment": "Open appointment",
    "dxScheduler-recurrenceNever": "Never",
    "dxScheduler-recurrenceMinutely": "Every minute",
    "dxScheduler-recurrenceHourly": "Hourly",
    "dxScheduler-recurrenceDaily": "Daily",
    "dxScheduler-recurrenceWeekly": "Weekly",
    "dxScheduler-recurrenceMonthly": "Monthly",
    "dxScheduler-recurrenceYearly": "Yearly",
    "dxScheduler-recurrenceRepeatEvery": "Repeat Every",
    "dxScheduler-recurrenceRepeatOn": "Repeat On",
    "dxScheduler-recurrenceEnd": "End repeat",
    "dxScheduler-recurrenceAfter": "After",
    "dxScheduler-recurrenceOn": "On",
    "dxScheduler-recurrenceUntilDateLabel": "Date when repeat ends",
    "dxScheduler-recurrenceOccurrenceLabel": "Number of occurrences",
    "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
    "dxScheduler-recurrenceRepeatHourly": "hour(s)",
    "dxScheduler-recurrenceRepeatDaily": "day(s)",
    "dxScheduler-recurrenceRepeatWeekly": "week(s)",
    "dxScheduler-recurrenceRepeatMonthly": "month(s)",
    "dxScheduler-recurrenceRepeatYearly": "year(s)",
    "dxScheduler-switcherDay": "Day",
    "dxScheduler-switcherWeek": "Week",
    "dxScheduler-switcherWorkWeek": "Work Week",
    "dxScheduler-switcherMonth": "Month",
    "dxScheduler-switcherAgenda": "Agenda",
    "dxScheduler-switcherTimelineDay": "Timeline Day",
    "dxScheduler-switcherTimelineWeek": "Timeline Week",
    "dxScheduler-switcherTimelineWorkWeek": "Timeline Work Week",
    "dxScheduler-switcherTimelineMonth": "Timeline Month",
    "dxScheduler-recurrenceRepeatOnDate": "on date",
    "dxScheduler-recurrenceRepeatCount": "occurrence(s)",
    "dxScheduler-allDay": "All day",
    "dxScheduler-ariaEditForm": "Edit form",
    "dxScheduler-confirmRecurrenceEditTitle": "Edit Recurring Appointment",
    "dxScheduler-confirmRecurrenceDeleteTitle": "Delete Recurring Appointment",
    "dxScheduler-confirmRecurrenceEditMessage": "Do you want to edit only this appointment or the whole series?",
    "dxScheduler-confirmRecurrenceDeleteMessage": "Do you want to delete only this appointment or the whole series?",
    "dxScheduler-confirmRecurrenceEditSeries": "Edit series",
    "dxScheduler-confirmRecurrenceDeleteSeries": "Delete series",
    "dxScheduler-confirmRecurrenceEditOccurrence": "Edit appointment",
    "dxScheduler-confirmRecurrenceDeleteOccurrence": "Delete appointment",
    "dxScheduler-noTimezoneTitle": "No timezone",
    "dxScheduler-moreAppointments": "{0} more",
    "dxCalendar-currentDay": "Today",
    "dxCalendar-currentMonth": "Current month",
    "dxCalendar-currentYear": "Current year",
    "dxCalendar-currentYearRange": "Current year range",
    "dxCalendar-todayButtonText": "Today",
    "dxCalendar-ariaWidgetName": "Calendar",
    "dxCalendar-previousMonthButtonLabel": "Previous month",
    "dxCalendar-previousYearButtonLabel": "Previous year",
    "dxCalendar-previousDecadeButtonLabel": "Previous decade",
    "dxCalendar-previousCenturyButtonLabel": "Previous century",
    "dxCalendar-nextMonthButtonLabel": "Next month",
    "dxCalendar-nextYearButtonLabel": "Next year",
    "dxCalendar-nextDecadeButtonLabel": "Next decade",
    "dxCalendar-nextCenturyButtonLabel": "Next century",
    "dxCalendar-captionMonthLabel": "Month selection",
    "dxCalendar-captionYearLabel": "Year selection",
    "dxCalendar-captionDecadeLabel": "Decade selection",
    "dxCalendar-captionCenturyLabel": "Century selection",
    "dxCalendar-selectedDate": "The selected date is {0}",
    "dxCalendar-selectedDates": "The selected dates",
    "dxCalendar-selectedDateRange": "The selected date range is from {0} to {1}",
    "dxCalendar-selectedMultipleDateRange": "from {0} to {1}",
    "dxCalendar-selectedDateRangeCount": "There are {0} selected date ranges",
    "dxCalendar-readOnlyLabel": "Read-only calendar",
    "dxCardView-ariaSearchInGrid": "Search in the card view",
    "dxCardView-ariaHeaderItemLabel": "Field name {0}",
    "dxCardView-ariaHeaderItemSortingAscendingLabel": "Sorted in ascending order",
    "dxCardView-ariaHeaderItemSortingDescendingLabel": "Sorted in descending order",
    "dxCardView-ariaHeaderItemSortingIndexLabel": "Sort index {0}",
    "dxCardView-ariaHeaderHasHeaderFilterLabel": "Header filter applied",
    "dxCardView-ariaSelectCard": "Select card",
    "dxCardView-ariaCardView": "Card view with {0} cards. Each card has {1} fields",
    "dxCardView-ariaCard": "Card",
    "dxCardView-ariaEditableCard": "Editable card",
    "dxCardView-ariaCardPosition": "Row {0}, column {1}",
    "dxCardView-ariaSelectedCardState": "Selected",
    "dxCardView-ariaNotSelectedCardState": "Not selected",
    "dxCardView-selectAll": "Select all",
    "dxCardView-clearSelection": "Clear selection",
    "dxCardView-cardNoImageAriaLabel": "No image",
    "dxCardView-headerItemDropZoneText": "Drop the header item here",
    "dxCardView-emptyHeaderPanelText": "Use {0} to display columns",
    "dxCardView-emptyHeaderPanelColumnChooserText": "column chooser",
    "dxAvatar-defaultImageAlt": "Avatar",
    "dxChat-elementAriaLabel": "Chat",
    "dxChat-textareaPlaceholder": "Type a message",
    "dxChat-sendButtonAriaLabel": "Send",
    "dxChat-cancelEditingButtonAriaLabel": "Cancel",
    "dxChat-editingMessageCaption": "Edit Message",
    "dxChat-defaultUserName": "Unknown User",
    "dxChat-messageListAriaLabel": "Message list",
    "dxChat-alertListAriaLabel": "Error list",
    "dxChat-emptyListMessage": "There are no messages in this chat",
    "dxChat-emptyListPrompt": "Write your first message",
    "dxChat-typingMessageSingleUser": "{0} is typing...",
    "dxChat-typingMessageTwoUsers": "{0} and {1} are typing...",
    "dxChat-typingMessageThreeUsers": "{0}, {1} and {2} are typing...",
    "dxChat-typingMessageMultipleUsers": "{0} and others are typing...",
    "dxChat-editedMessageText": "Edited",
    "dxChat-editingEditMessage": "Edit",
    "dxChat-editingDeleteMessage": "Delete",
    "dxChat-editingDeleteConfirmText": "Are you sure you want to delete this message?",
    "dxChat-deletedMessageText": "This message was deleted",
    "dxChat-defaultImageAlt": "Image shared in chat",
    "dxColorView-ariaRed": "Red",
    "dxColorView-ariaGreen": "Green",
    "dxColorView-ariaBlue": "Blue",
    "dxColorView-ariaAlpha": "Transparency",
    "dxColorView-ariaHex": "Color code",
    "dxTagBox-selected": "{0} selected",
    "dxTagBox-allSelected": "All selected ({0})",
    "dxTagBox-moreSelected": "{0} more",
    "dxTagBox-tagRoleDescription": "Tag. Press the delete button to remove this tag",
    "dxTagBox-ariaRoleDescription": "Tag box",
    "vizExport-printingButtonText": "Print",
    "vizExport-titleMenuText": "Exporting/Printing",
    "vizExport-exportButtonText": "{0} file",
    "dxFilterBuilder-and": "And",
    "dxFilterBuilder-or": "Or",
    "dxFilterBuilder-notAnd": "Not And",
    "dxFilterBuilder-notOr": "Not Or",
    "dxFilterBuilder-addCondition": "Add Condition",
    "dxFilterBuilder-addGroup": "Add Group",
    "dxFilterBuilder-enterValueText": "<enter a value>",
    "dxFilterBuilder-filterOperationEquals": "Equals",
    "dxFilterBuilder-filterOperationNotEquals": "Does not equal",
    "dxFilterBuilder-filterOperationLess": "Is less than",
    "dxFilterBuilder-filterOperationLessOrEquals": "Is less than or equal to",
    "dxFilterBuilder-filterOperationGreater": "Is greater than",
    "dxFilterBuilder-filterOperationGreaterOrEquals": "Is greater than or equal to",
    "dxFilterBuilder-filterOperationStartsWith": "Starts with",
    "dxFilterBuilder-filterOperationContains": "Contains",
    "dxFilterBuilder-filterOperationNotContains": "Does not contain",
    "dxFilterBuilder-filterOperationEndsWith": "Ends with",
    "dxFilterBuilder-filterOperationIsBlank": "Is blank",
    "dxFilterBuilder-filterOperationIsNotBlank": "Is not blank",
    "dxFilterBuilder-filterOperationBetween": "Is between",
    "dxFilterBuilder-filterOperationAnyOf": "Is any of",
    "dxFilterBuilder-filterOperationNoneOf": "Is none of",
    "dxFilterBuilder-filterAriaRootElement": "Filter builder",
    "dxFilterBuilder-filterAriaGroupLevel": "Level {0}",
    "dxFilterBuilder-filterAriaGroupItem": "Group item",
    "dxFilterBuilder-filterAriaOperationButton": "Operation",
    "dxFilterBuilder-filterAriaAddButton": "Add",
    "dxFilterBuilder-filterAriaRemoveButton": "Remove {0}",
    "dxFilterBuilder-filterAriaItemField": "Item field",
    "dxFilterBuilder-filterAriaItemOperation": "Item operation",
    "dxFilterBuilder-filterAriaItemValue": "Item value",
    "dxHtmlEditor-dialogColorCaption": "Change Font Color",
    "dxHtmlEditor-dialogBackgroundCaption": "Change Background Color",
    "dxHtmlEditor-dialogLinkCaption": "Add Link",
    "dxHtmlEditor-dialogLinkUrlField": "URL",
    "dxHtmlEditor-dialogLinkTextField": "Text",
    "dxHtmlEditor-dialogLinkTargetField": "Open link in new window",
    "dxHtmlEditor-dialogImageCaption": "Add Image",
    "dxHtmlEditor-dialogImageUrlField": "URL",
    "dxHtmlEditor-dialogImageAltField": "Alternate text",
    "dxHtmlEditor-dialogImageWidthField": "Width (px)",
    "dxHtmlEditor-dialogImageHeightField": "Height (px)",
    "dxHtmlEditor-dialogInsertTableRowsField": "Rows",
    "dxHtmlEditor-dialogInsertTableColumnsField": "Columns",
    "dxHtmlEditor-dialogInsertTableCaption": "Insert Table",
    "dxHtmlEditor-dialogUpdateImageCaption": "Update Image",
    "dxHtmlEditor-dialogImageUpdateButton": "Update",
    "dxHtmlEditor-dialogImageAddButton": "Add",
    "dxHtmlEditor-dialogImageSpecifyUrl": "From the Web",
    "dxHtmlEditor-dialogImageSelectFile": "From This Device",
    "dxHtmlEditor-dialogImageKeepAspectRatio": "Keep Aspect Ratio",
    "dxHtmlEditor-dialogImageEncodeToBase64": "Encode to Base64",
    "dxHtmlEditor-heading": "Heading",
    "dxHtmlEditor-normalText": "Normal text",
    "dxHtmlEditor-background": "Background Color",
    "dxHtmlEditor-bold": "Bold",
    "dxHtmlEditor-color": "Font Color",
    "dxHtmlEditor-font": "Font",
    "dxHtmlEditor-italic": "Italic",
    "dxHtmlEditor-link": "Add Link",
    "dxHtmlEditor-image": "Add Image",
    "dxHtmlEditor-size": "Size",
    "dxHtmlEditor-strike": "Strikethrough",
    "dxHtmlEditor-subscript": "Subscript",
    "dxHtmlEditor-superscript": "Superscript",
    "dxHtmlEditor-underline": "Underline",
    "dxHtmlEditor-blockquote": "Blockquote",
    "dxHtmlEditor-header": "Header",
    "dxHtmlEditor-increaseIndent": "Increase Indent",
    "dxHtmlEditor-decreaseIndent": "Decrease Indent",
    "dxHtmlEditor-orderedList": "Ordered List",
    "dxHtmlEditor-bulletList": "Bullet List",
    "dxHtmlEditor-alignLeft": "Align Left",
    "dxHtmlEditor-alignCenter": "Align Center",
    "dxHtmlEditor-alignRight": "Align Right",
    "dxHtmlEditor-alignJustify": "Align Justify",
    "dxHtmlEditor-codeBlock": "Code Block",
    "dxHtmlEditor-variable": "Add Variable",
    "dxHtmlEditor-undo": "Undo",
    "dxHtmlEditor-redo": "Redo",
    "dxHtmlEditor-clear": "Clear Formatting",
    "dxHtmlEditor-insertTable": "Insert Table",
    "dxHtmlEditor-insertHeaderRow": "Insert Header Row",
    "dxHtmlEditor-insertRowAbove": "Insert Row Above",
    "dxHtmlEditor-insertRowBelow": "Insert Row Below",
    "dxHtmlEditor-insertColumnLeft": "Insert Column Left",
    "dxHtmlEditor-insertColumnRight": "Insert Column Right",
    "dxHtmlEditor-deleteColumn": "Delete Column",
    "dxHtmlEditor-deleteRow": "Delete Row",
    "dxHtmlEditor-deleteTable": "Delete Table",
    "dxHtmlEditor-cellProperties": "Cell Properties",
    "dxHtmlEditor-tableProperties": "Table Properties",
    "dxHtmlEditor-insert": "Insert",
    "dxHtmlEditor-delete": "Delete",
    "dxHtmlEditor-border": "Border",
    "dxHtmlEditor-style": "Style",
    "dxHtmlEditor-width": "Width",
    "dxHtmlEditor-height": "Height",
    "dxHtmlEditor-borderColor": "Color",
    "dxHtmlEditor-borderWidth": "Border Width",
    "dxHtmlEditor-tableBackground": "Background",
    "dxHtmlEditor-dimensions": "Dimensions",
    "dxHtmlEditor-alignment": "Alignment",
    "dxHtmlEditor-horizontal": "Horizontal",
    "dxHtmlEditor-vertical": "Vertical",
    "dxHtmlEditor-paddingVertical": "Vertical Padding",
    "dxHtmlEditor-paddingHorizontal": "Horizontal Padding",
    "dxHtmlEditor-pixels": "Pixels",
    "dxHtmlEditor-list": "List",
    "dxHtmlEditor-ordered": "Ordered",
    "dxHtmlEditor-bullet": "Bullet",
    "dxHtmlEditor-align": "Align",
    "dxHtmlEditor-center": "Center",
    "dxHtmlEditor-left": "Left",
    "dxHtmlEditor-right": "Right",
    "dxHtmlEditor-indent": "Indent",
    "dxHtmlEditor-justify": "Justify",
    "dxHtmlEditor-borderStyleNone": "none",
    "dxHtmlEditor-borderStyleHidden": "hidden",
    "dxHtmlEditor-borderStyleDotted": "dotted",
    "dxHtmlEditor-borderStyleDashed": "dashed",
    "dxHtmlEditor-borderStyleSolid": "solid",
    "dxHtmlEditor-borderStyleDouble": "double",
    "dxHtmlEditor-borderStyleGroove": "groove",
    "dxHtmlEditor-borderStyleRidge": "ridge",
    "dxHtmlEditor-borderStyleInset": "inset",
    "dxHtmlEditor-borderStyleOutset": "outset",
    "dxHtmlEditor-aiDialogTitle": "AI Assistant",
    "dxHtmlEditor-aiDialogError": "Something went wrong. Please try again.",
    "dxHtmlEditor-aiDialogCanceled": "Generation canceled",
    "dxHtmlEditor-aiReplace": "Replace",
    "dxHtmlEditor-aiInsertAbove": "Insert above",
    "dxHtmlEditor-aiInsertBelow": "Insert below",
    "dxHtmlEditor-aiCopy": "Copy",
    "dxHtmlEditor-aiRegenerate": "Regenerate",
    "dxHtmlEditor-aiGenerate": "Generate",
    "dxHtmlEditor-aiCancel": "Cancel",
    "dxHtmlEditor-aiToolbarItemAriaLabel": "AI Assistant toolbar item",
    "dxHtmlEditor-aiResultTextAreaAriaLabel": "AI Assistant result",
    "dxHtmlEditor-aiAskPlaceholder": "Ask AI to modify text",
    "dxFileManager-newDirectoryName": "Untitled directory",
    "dxFileManager-rootDirectoryName": "Files",
    "dxFileManager-errorNoAccess": "Access Denied. Operation could not be completed.",
    "dxFileManager-errorDirectoryExistsFormat": "Directory '{0}' already exists.",
    "dxFileManager-errorFileExistsFormat": "File '{0}' already exists.",
    "dxFileManager-errorFileNotFoundFormat": "File '{0}' not found.",
    "dxFileManager-errorDirectoryNotFoundFormat": "Directory '{0}' not found.",
    "dxFileManager-errorWrongFileExtension": "File extension is not allowed.",
    "dxFileManager-errorMaxFileSizeExceeded": "File size exceeds the maximum allowed size.",
    "dxFileManager-errorInvalidSymbols": "This name contains invalid characters.",
    "dxFileManager-errorDefault": "Unspecified error.",
    "dxFileManager-errorDirectoryOpenFailed": "The directory cannot be opened",
    "dxFileManager-commandCreate": "New directory",
    "dxFileManager-commandRename": "Rename",
    "dxFileManager-commandMove": "Move to",
    "dxFileManager-commandCopy": "Copy to",
    "dxFileManager-commandDelete": "Delete",
    "dxFileManager-commandDownload": "Download",
    "dxFileManager-commandUpload": "Upload files",
    "dxFileManager-commandRefresh": "Refresh",
    "dxFileManager-commandThumbnails": "Thumbnails View",
    "dxFileManager-commandDetails": "Details View",
    "dxFileManager-commandClearSelection": "Clear selection",
    "dxFileManager-commandShowNavPane": "Toggle navigation pane",
    "dxFileManager-dialogDirectoryChooserMoveTitle": "Move to",
    "dxFileManager-dialogDirectoryChooserMoveButtonText": "Move",
    "dxFileManager-dialogDirectoryChooserCopyTitle": "Copy to",
    "dxFileManager-dialogDirectoryChooserCopyButtonText": "Copy",
    "dxFileManager-dialogRenameItemTitle": "Rename",
    "dxFileManager-dialogRenameItemButtonText": "Save",
    "dxFileManager-dialogCreateDirectoryTitle": "New directory",
    "dxFileManager-dialogCreateDirectoryButtonText": "Create",
    "dxFileManager-dialogDeleteItemTitle": "Delete",
    "dxFileManager-dialogDeleteItemButtonText": "Delete",
    "dxFileManager-dialogDeleteItemSingleItemConfirmation": "Are you sure you want to delete {0}?",
    "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Are you sure you want to delete {0} items?",
    "dxFileManager-dialogButtonCancel": "Cancel",
    "dxFileManager-editingCreateSingleItemProcessingMessage": "Creating a directory inside {0}",
    "dxFileManager-editingCreateSingleItemSuccessMessage": "Created a directory inside {0}",
    "dxFileManager-editingCreateSingleItemErrorMessage": "Directory was not created",
    "dxFileManager-editingCreateCommonErrorMessage": "Directory was not created",
    "dxFileManager-editingRenameSingleItemProcessingMessage": "Renaming an item inside {0}",
    "dxFileManager-editingRenameSingleItemSuccessMessage": "Renamed an item inside {0}",
    "dxFileManager-editingRenameSingleItemErrorMessage": "Item was not renamed",
    "dxFileManager-editingRenameCommonErrorMessage": "Item was not renamed",
    "dxFileManager-editingDeleteSingleItemProcessingMessage": "Deleting an item from {0}",
    "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Deleting {0} items from {1}",
    "dxFileManager-editingDeleteSingleItemSuccessMessage": "Deleted an item from {0}",
    "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "Deleted {0} items from {1}",
    "dxFileManager-editingDeleteSingleItemErrorMessage": "Item was not deleted",
    "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} items were not deleted",
    "dxFileManager-editingDeleteCommonErrorMessage": "Some items were not deleted",
    "dxFileManager-editingMoveSingleItemProcessingMessage": "Moving an item to {0}",
    "dxFileManager-editingMoveMultipleItemsProcessingMessage": "Moving {0} items to {1}",
    "dxFileManager-editingMoveSingleItemSuccessMessage": "Moved an item to {0}",
    "dxFileManager-editingMoveMultipleItemsSuccessMessage": "Moved {0} items to {1}",
    "dxFileManager-editingMoveSingleItemErrorMessage": "Item was not moved",
    "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} items were not moved",
    "dxFileManager-editingMoveCommonErrorMessage": "Some items were not moved",
    "dxFileManager-editingCopySingleItemProcessingMessage": "Copying an item to {0}",
    "dxFileManager-editingCopyMultipleItemsProcessingMessage": "Copying {0} items to {1}",
    "dxFileManager-editingCopySingleItemSuccessMessage": "Copied an item to {0}",
    "dxFileManager-editingCopyMultipleItemsSuccessMessage": "Copied {0} items to {1}",
    "dxFileManager-editingCopySingleItemErrorMessage": "Item was not copied",
    "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} items were not copied",
    "dxFileManager-editingCopyCommonErrorMessage": "Some items were not copied",
    "dxFileManager-editingUploadSingleItemProcessingMessage": "Uploading an item to {0}",
    "dxFileManager-editingUploadMultipleItemsProcessingMessage": "Uploading {0} items to {1}",
    "dxFileManager-editingUploadSingleItemSuccessMessage": "Uploaded an item to {0}",
    "dxFileManager-editingUploadMultipleItemsSuccessMessage": "Uploaded {0} items to {1}",
    "dxFileManager-editingUploadSingleItemErrorMessage": "Item was not uploaded",
    "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} items were not uploaded",
    "dxFileManager-editingUploadCanceledMessage": "Canceled",
    "dxFileManager-editingDownloadSingleItemErrorMessage": "Item was not downloaded",
    "dxFileManager-editingDownloadMultipleItemsErrorMessage": "{0} items were not downloaded",
    "dxFileManager-listDetailsColumnCaptionName": "Name",
    "dxFileManager-listDetailsColumnCaptionDateModified": "Date Modified",
    "dxFileManager-listDetailsColumnCaptionFileSize": "File Size",
    "dxFileManager-listThumbnailsTooltipTextSize": "Size",
    "dxFileManager-listThumbnailsTooltipTextDateModified": "Date Modified",
    "dxFileManager-notificationProgressPanelTitle": "Progress",
    "dxFileManager-notificationProgressPanelEmptyListText": "No operations",
    "dxFileManager-notificationProgressPanelOperationCanceled": "Canceled",
    "dxDiagram-categoryGeneral": "General",
    "dxDiagram-categoryFlowchart": "Flowchart",
    "dxDiagram-categoryOrgChart": "Org Chart",
    "dxDiagram-categoryContainers": "Containers",
    "dxDiagram-categoryCustom": "Custom",
    "dxDiagram-commandExportToSvg": "Export to SVG",
    "dxDiagram-commandExportToPng": "Export to PNG",
    "dxDiagram-commandExportToJpg": "Export to JPEG",
    "dxDiagram-commandUndo": "Undo",
    "dxDiagram-commandRedo": "Redo",
    "dxDiagram-commandFontName": "Font Name",
    "dxDiagram-commandFontSize": "Font Size",
    "dxDiagram-commandBold": "Bold",
    "dxDiagram-commandItalic": "Italic",
    "dxDiagram-commandUnderline": "Underline",
    "dxDiagram-commandTextColor": "Font Color",
    "dxDiagram-commandLineColor": "Line Color",
    "dxDiagram-commandLineWidth": "Line Width",
    "dxDiagram-commandLineStyle": "Line Style",
    "dxDiagram-commandLineStyleSolid": "Solid",
    "dxDiagram-commandLineStyleDotted": "Dotted",
    "dxDiagram-commandLineStyleDashed": "Dashed",
    "dxDiagram-commandFillColor": "Fill Color",
    "dxDiagram-commandAlignLeft": "Align Left",
    "dxDiagram-commandAlignCenter": "Align Center",
    "dxDiagram-commandAlignRight": "Align Right",
    "dxDiagram-commandConnectorLineType": "Connector Line Type",
    "dxDiagram-commandConnectorLineStraight": "Straight",
    "dxDiagram-commandConnectorLineOrthogonal": "Orthogonal",
    "dxDiagram-commandConnectorLineStart": "Connector Line Start",
    "dxDiagram-commandConnectorLineEnd": "Connector Line End",
    "dxDiagram-commandConnectorLineNone": "None",
    "dxDiagram-commandConnectorLineArrow": "Arrow",
    "dxDiagram-commandFullscreen": "Full Screen",
    "dxDiagram-commandUnits": "Units",
    "dxDiagram-commandPageSize": "Page Size",
    "dxDiagram-commandPageOrientation": "Page Orientation",
    "dxDiagram-commandPageOrientationLandscape": "Landscape",
    "dxDiagram-commandPageOrientationPortrait": "Portrait",
    "dxDiagram-commandPageColor": "Page Color",
    "dxDiagram-commandShowGrid": "Show Grid",
    "dxDiagram-commandSnapToGrid": "Snap to Grid",
    "dxDiagram-commandGridSize": "Grid Size",
    "dxDiagram-commandZoomLevel": "Zoom Level",
    "dxDiagram-commandAutoZoom": "Auto Zoom",
    "dxDiagram-commandFitToContent": "Fit to Content",
    "dxDiagram-commandFitToWidth": "Fit to Width",
    "dxDiagram-commandAutoZoomByContent": "Auto Zoom by Content",
    "dxDiagram-commandAutoZoomByWidth": "Auto Zoom by Width",
    "dxDiagram-commandSimpleView": "Simple View",
    "dxDiagram-commandCut": "Cut",
    "dxDiagram-commandCopy": "Copy",
    "dxDiagram-commandPaste": "Paste",
    "dxDiagram-commandSelectAll": "Select All",
    "dxDiagram-commandDelete": "Delete",
    "dxDiagram-commandBringToFront": "Bring to Front",
    "dxDiagram-commandSendToBack": "Send to Back",
    "dxDiagram-commandLock": "Lock",
    "dxDiagram-commandUnlock": "Unlock",
    "dxDiagram-commandInsertShapeImage": "Insert Image...",
    "dxDiagram-commandEditShapeImage": "Change Image...",
    "dxDiagram-commandDeleteShapeImage": "Delete Image",
    "dxDiagram-commandLayoutLeftToRight": "Left-to-right",
    "dxDiagram-commandLayoutRightToLeft": "Right-to-left",
    "dxDiagram-commandLayoutTopToBottom": "Top-to-bottom",
    "dxDiagram-commandLayoutBottomToTop": "Bottom-to-top",
    "dxDiagram-unitIn": "in",
    "dxDiagram-unitCm": "cm",
    "dxDiagram-unitPx": "px",
    "dxDiagram-dialogButtonOK": "OK",
    "dxDiagram-dialogButtonCancel": "Cancel",
    "dxDiagram-dialogInsertShapeImageTitle": "Insert Image",
    "dxDiagram-dialogEditShapeImageTitle": "Change Image",
    "dxDiagram-dialogEditShapeImageSelectButton": "Select image",
    "dxDiagram-dialogEditShapeImageLabelText": "or drop a file here",
    "dxDiagram-uiExport": "Export",
    "dxDiagram-uiProperties": "Properties",
    "dxDiagram-uiSettings": "Settings",
    "dxDiagram-uiShowToolbox": "Show Toolbox",
    "dxDiagram-uiSearch": "Search",
    "dxDiagram-uiStyle": "Style",
    "dxDiagram-uiLayout": "Layout",
    "dxDiagram-uiLayoutTree": "Tree",
    "dxDiagram-uiLayoutLayered": "Layered",
    "dxDiagram-uiDiagram": "Diagram",
    "dxDiagram-uiText": "Text",
    "dxDiagram-uiObject": "Object",
    "dxDiagram-uiConnector": "Connector",
    "dxDiagram-uiPage": "Page",
    "dxDiagram-shapeText": "Text",
    "dxDiagram-shapeRectangle": "Rectangle",
    "dxDiagram-shapeEllipse": "Ellipse",
    "dxDiagram-shapeCross": "Cross",
    "dxDiagram-shapeTriangle": "Triangle",
    "dxDiagram-shapeDiamond": "Diamond",
    "dxDiagram-shapeHeart": "Heart",
    "dxDiagram-shapePentagon": "Pentagon",
    "dxDiagram-shapeHexagon": "Hexagon",
    "dxDiagram-shapeOctagon": "Octagon",
    "dxDiagram-shapeStar": "Star",
    "dxDiagram-shapeArrowLeft": "Left Arrow",
    "dxDiagram-shapeArrowUp": "Up Arrow",
    "dxDiagram-shapeArrowRight": "Right Arrow",
    "dxDiagram-shapeArrowDown": "Down Arrow",
    "dxDiagram-shapeArrowUpDown": "Up Down Arrow",
    "dxDiagram-shapeArrowLeftRight": "Left Right Arrow",
    "dxDiagram-shapeProcess": "Process",
    "dxDiagram-shapeDecision": "Decision",
    "dxDiagram-shapeTerminator": "Terminator",
    "dxDiagram-shapePredefinedProcess": "Predefined Process",
    "dxDiagram-shapeDocument": "Document",
    "dxDiagram-shapeMultipleDocuments": "Multiple Documents",
    "dxDiagram-shapeManualInput": "Manual Input",
    "dxDiagram-shapePreparation": "Preparation",
    "dxDiagram-shapeData": "Data",
    "dxDiagram-shapeDatabase": "Database",
    "dxDiagram-shapeHardDisk": "Hard Disk",
    "dxDiagram-shapeInternalStorage": "Internal Storage",
    "dxDiagram-shapePaperTape": "Paper Tape",
    "dxDiagram-shapeManualOperation": "Manual Operation",
    "dxDiagram-shapeDelay": "Delay",
    "dxDiagram-shapeStoredData": "Stored Data",
    "dxDiagram-shapeDisplay": "Display",
    "dxDiagram-shapeMerge": "Merge",
    "dxDiagram-shapeConnector": "Connector",
    "dxDiagram-shapeOr": "Or",
    "dxDiagram-shapeSummingJunction": "Summing Junction",
    "dxDiagram-shapeContainerDefaultText": "Container",
    "dxDiagram-shapeVerticalContainer": "Vertical Container",
    "dxDiagram-shapeHorizontalContainer": "Horizontal Container",
    "dxDiagram-shapeCardDefaultText": "Person's Name",
    "dxDiagram-shapeCardWithImageOnLeft": "Card with Image on the Left",
    "dxDiagram-shapeCardWithImageOnTop": "Card with Image on the Top",
    "dxDiagram-shapeCardWithImageOnRight": "Card with Image on the Right",
    "dxGantt-dialogTitle": "Title",
    "dxGantt-dialogStartTitle": "Start",
    "dxGantt-dialogEndTitle": "End",
    "dxGantt-dialogProgressTitle": "Progress",
    "dxGantt-dialogResourcesTitle": "Resources",
    "dxGantt-dialogResourceManagerTitle": "Resource Manager",
    "dxGantt-dialogTaskDetailsTitle": "Task Details",
    "dxGantt-dialogEditResourceListHint": "Edit Resource List",
    "dxGantt-dialogEditNoResources": "No resources",
    "dxGantt-dialogButtonAdd": "Add",
    "dxGantt-contextMenuNewTask": "New Task",
    "dxGantt-contextMenuNewSubtask": "New Subtask",
    "dxGantt-contextMenuDeleteTask": "Delete Task",
    "dxGantt-contextMenuDeleteDependency": "Delete Dependency",
    "dxGantt-dialogTaskDeleteConfirmation": "Deleting a task also deletes all its dependencies and subtasks. Are you sure you want to delete this task?",
    "dxGantt-dialogDependencyDeleteConfirmation": "Are you sure you want to delete the dependency from the task?",
    "dxGantt-dialogResourcesDeleteConfirmation": "Deleting a resource also deletes it from tasks to which this resource is assigned. Are you sure you want to delete these resources? Resources: {0}",
    "dxGantt-dialogConstraintCriticalViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. This change would conflict with dependency rules. How would you like to proceed?",
    "dxGantt-dialogConstraintViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. How would you like to proceed?",
    "dxGantt-dialogCancelOperationMessage": "Cancel the operation",
    "dxGantt-dialogDeleteDependencyMessage": "Delete the dependency",
    "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Move the task and keep the dependency",
    "dxGantt-dialogConstraintCriticalViolationSeveralTasksMessage": "The task you are attempting to move is linked to another tasks by dependency relations. This change would conflict with dependency rules. How would you like to proceed?",
    "dxGantt-dialogConstraintViolationSeveralTasksMessage": "The task you are attempting to move is linked to another tasks by dependency relations. How would you like to proceed?",
    "dxGantt-dialogDeleteDependenciesMessage": "Delete the dependency relations",
    "dxGantt-dialogMoveTaskAndKeepDependenciesMessage": "Move the task and keep the dependencies",
    "dxGantt-undo": "Undo",
    "dxGantt-redo": "Redo",
    "dxGantt-expandAll": "Expand All",
    "dxGantt-collapseAll": "Collapse All",
    "dxGantt-addNewTask": "Add New Task",
    "dxGantt-deleteSelectedTask": "Delete Selected Task",
    "dxGantt-zoomIn": "Zoom In",
    "dxGantt-zoomOut": "Zoom Out",
    "dxGantt-fullScreen": "Full Screen",
    "dxGantt-quarter": "Q{0}",
    "dxGantt-sortingAscendingText": "Sort Ascending",
    "dxGantt-sortingDescendingText": "Sort Descending",
    "dxGantt-sortingClearText": "Clear Sorting",
    "dxGantt-showResources": "Show Resources",
    "dxGantt-showDependencies": "Show Dependencies",
    "dxGantt-dialogStartDateValidation": "Start date must be after {0}",
    "dxGantt-dialogEndDateValidation": "End date must be after {0}",
    "dxGallery-itemName": "Gallery item",
    "dxMultiView-elementAriaRoleDescription": "MultiView",
    "dxMultiView-elementAriaLabel": "Use the arrow keys or swipe to navigate between views",
    "dxMultiView-itemAriaRoleDescription": "View",
    "dxMultiView-itemAriaLabel": "{0} of {1}",
    "dxSplitter-resizeHandleAriaLabel": "Split bar",
    "dxSplitter-resizeHandleAriaRoleDescription": "Separator",
    "dxStepper-optionalMark": "(Optional)"
  }
};
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/message.js
/**
 * DevExtreme (esm/common/core/localization/message.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */






const baseDictionary = (0,extend/* extend */.X)(true, {}, defaultMessages);
const getDataByLocale = (localeData, locale) => {
  var _Object$entries$find;
  return localeData[locale] || (null === locale || void 0 === locale ? void 0 : locale.toLowerCase) && (null === (_Object$entries$find = Object.entries(localeData).find(_ref => {
    let [key] = _ref;
    return key.toLowerCase() === locale.toLowerCase();
  })) || void 0 === _Object$entries$find ? void 0 : _Object$entries$find[1]) || {};
};
const newMessages = {};
const messageLocalization = (0,dependency_injector/* default */.A)({
  engine: function () {
    return "base";
  },
  _dictionary: baseDictionary,
  load: function (messages) {
    (0,extend/* extend */.X)(true, this._dictionary, messages);
  },
  _localizablePrefix: "@",
  setup: function (localizablePrefix) {
    this._localizablePrefix = localizablePrefix;
  },
  localizeString: function (text) {
    const that = this;
    const regex = new RegExp("(^|[^a-zA-Z_0-9" + that._localizablePrefix + "-]+)(" + that._localizablePrefix + "{1,2})([a-zA-Z_0-9-]+)", "g");
    const escapeString = that._localizablePrefix + that._localizablePrefix;
    return text.replace(regex, (str, prefix, escape, localizationKey) => {
      const defaultResult = that._localizablePrefix + localizationKey;
      let result;
      if (escape !== escapeString) {
        result = that.format(localizationKey);
      }
      if (!result) {
        newMessages[localizationKey] = (0,inflector/* humanize */.I3)(localizationKey);
      }
      return prefix + (result || defaultResult);
    });
  },
  getMessagesByLocales: function () {
    return this._dictionary;
  },
  getDictionary: function (onlyNew) {
    if (onlyNew) {
      return newMessages;
    }
    return (0,extend/* extend */.X)({}, newMessages, this.getMessagesByLocales()[core/* default */.A.locale()]);
  },
  getFormatter: function (key) {
    return this._getFormatterBase(key) || this._getFormatterBase(key, "en");
  },
  _getFormatterBase: function (key, locale) {
    const message = core/* default */.A.getValueByClosestLocale(locale => getDataByLocale(this._dictionary, locale)[key]);
    if (message) {
      return function () {
        const args = 1 === arguments.length && Array.isArray(arguments[0]) ? arguments[0].slice(0) : Array.prototype.slice.call(arguments, 0);
        args.unshift(message);
        return string/* format */.GP.apply(this, args);
      };
    }
  },
  format: function (key) {
    const formatter = this.getFormatter(key);
    const values = Array.prototype.slice.call(arguments, 1);
    return formatter && formatter.apply(this, values) || "";
  }
});
/* harmony default export */ const message = (messageLocalization);

/***/ }),

/***/ 29430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ localization_number)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/dependency_injector.js + 1 modules
var dependency_injector = __webpack_require__(48613);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/common.js
var common = __webpack_require__(5042);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_iterator.js
var m_iterator = __webpack_require__(88461);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/ldml/number.js
var number = __webpack_require__(68734);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/config.js
var config = __webpack_require__(83771);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/errors.js + 1 modules
var errors = __webpack_require__(54393);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/utils.js
var utils = __webpack_require__(18812);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/currency.js
var currency = __webpack_require__(8514);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common.js + 5 modules
var esm_common = __webpack_require__(17065);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/core.js + 2 modules
var core = __webpack_require__(52826);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/open_xml_currency_format.js
var open_xml_currency_format = __webpack_require__(29751);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/cldr-data/accounting_formats.js
/**
 * DevExtreme (esm/common/core/localization/cldr-data/accounting_formats.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
// !!! AUTO-GENERATED FILE, DO NOT EDIT
/* harmony default export */ const accounting_formats = ({
  af: "\xa4#,##0.00;(\xa4#,##0.00)",
  "af-NA": "\xa4#,##0.00;(\xa4#,##0.00)",
  agq: "#,##0.00\xa4",
  ak: "\xa4#,##0.00",
  am: "\xa4#,##0.00;(\xa4#,##0.00)",
  ar: "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-AE": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-BH": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-DJ": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-DZ": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-EG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-EH": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-ER": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-IL": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-IQ": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-JO": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-KM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-KW": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-LB": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-LY": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-MA": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-MR": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-OM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-PS": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-QA": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-SA": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-SD": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-SO": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-SS": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-SY": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-TD": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-TN": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ar-YE": "\xa4#,##0.00;(\xa4#,##0.00)",
  as: "\xa4\xa0#,##,##0.00",
  asa: "#,##0.00\xa0\xa4",
  ast: "#,##0.00\xa0\xa4",
  az: "#,##0.00\xa0\xa4",
  "az-Cyrl": "#,##0.00\xa0\xa4",
  "az-Latn": "#,##0.00\xa0\xa4",
  bas: "#,##0.00\xa0\xa4",
  be: "#,##0.00\xa0\xa4",
  "be-tarask": "#,##0.00\xa0\xa4",
  bem: "\xa4#,##0.00;(\xa4#,##0.00)",
  bez: "#,##0.00\xa4",
  bg: "0.00\xa0\xa4;(0.00\xa0\xa4)",
  bm: "\xa4#,##0.00;(\xa4#,##0.00)",
  bn: "#,##,##0.00\xa4;(#,##,##0.00\xa4)",
  "bn-IN": "#,##,##0.00\xa4;(#,##,##0.00\xa4)",
  bo: "\xa4\xa0#,##0.00",
  "bo-IN": "\xa4\xa0#,##0.00",
  br: "#,##0.00\xa0\xa4",
  brx: "\xa4\xa0#,##,##0.00",
  bs: "#,##0.00\xa0\xa4",
  "bs-Cyrl": "#,##0.00\xa0\xa4",
  "bs-Latn": "#,##0.00\xa0\xa4",
  ca: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "ca-AD": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "ca-ES-valencia": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "ca-FR": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "ca-IT": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  ccp: "#,##,##0.00\xa4;(#,##,##0.00\xa4)",
  "ccp-IN": "#,##,##0.00\xa4;(#,##,##0.00\xa4)",
  ce: "#,##0.00\xa0\xa4",
  ceb: "\xa4#,##0.00;(\xa4#,##0.00)",
  cgg: "\xa4#,##0.00",
  chr: "\xa4#,##0.00;(\xa4#,##0.00)",
  ckb: "\xa4\xa0#,##0.00",
  "ckb-IR": "\xa4\xa0#,##0.00",
  cs: "#,##0.00\xa0\xa4",
  cy: "\xa4#,##0.00;(\xa4#,##0.00)",
  da: "#,##0.00\xa0\xa4",
  "da-GL": "#,##0.00\xa0\xa4",
  dav: "\xa4#,##0.00;(\xa4#,##0.00)",
  de: "#,##0.00\xa0\xa4",
  "de-AT": "#,##0.00\xa0\xa4",
  "de-BE": "#,##0.00\xa0\xa4",
  "de-CH": "#,##0.00\xa0\xa4",
  "de-IT": "#,##0.00\xa0\xa4",
  "de-LI": "#,##0.00\xa0\xa4",
  "de-LU": "#,##0.00\xa0\xa4",
  dje: "#,##0.00\xa4",
  doi: "\xa4#,##0.00",
  dsb: "#,##0.00\xa0\xa4",
  dua: "#,##0.00\xa0\xa4",
  dyo: "#,##0.00\xa0\xa4",
  dz: "\xa4#,##,##0.00",
  ebu: "\xa4#,##0.00;(\xa4#,##0.00)",
  ee: "\xa4#,##0.00;(\xa4#,##0.00)",
  "ee-TG": "\xa4#,##0.00;(\xa4#,##0.00)",
  el: "#,##0.00\xa0\xa4",
  "el-CY": "#,##0.00\xa0\xa4",
  en: "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-001": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-150": "#,##0.00\xa0\xa4",
  "en-AE": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-AG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-AI": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-AS": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-AT": "\xa4\xa0#,##0.00",
  "en-AU": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-BB": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-BE": "#,##0.00\xa0\xa4",
  "en-BI": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-BM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-BS": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-BW": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-BZ": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-CA": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-CC": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-CH": "\xa4\xa0#,##0.00;\xa4-#,##0.00",
  "en-CK": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-CM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-CX": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-CY": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-DE": "#,##0.00\xa0\xa4",
  "en-DG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-DK": "#,##0.00\xa0\xa4",
  "en-DM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-ER": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-FI": "#,##0.00\xa0\xa4",
  "en-FJ": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-FK": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-FM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-GB": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-GD": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-GG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-GH": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-GI": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-GM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-GU": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-GY": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-HK": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-IE": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-IL": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-IM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-IN": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-IO": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-JE": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-JM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-KE": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-KI": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-KN": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-KY": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-LC": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-LR": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-LS": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-MG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-MH": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-MO": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-MP": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-MS": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-MT": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-MU": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-MV": "\xa4\xa0#,##0.00",
  "en-MW": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-MY": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-NA": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-NF": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-NG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-NL": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "en-NR": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-NU": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-NZ": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-PG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-PH": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-PK": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-PN": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-PR": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-PW": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-RW": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-SB": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-SC": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-SD": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-SE": "#,##0.00\xa0\xa4",
  "en-SG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-SH": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-SI": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "en-SL": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-SS": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-SX": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-SZ": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-TC": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-TK": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-TO": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-TT": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-TV": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-TZ": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-UG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-UM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-VC": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-VG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-VI": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-VU": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-WS": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-ZA": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-ZM": "\xa4#,##0.00;(\xa4#,##0.00)",
  "en-ZW": "\xa4#,##0.00;(\xa4#,##0.00)",
  eo: "\xa4\xa0#,##0.00",
  es: "#,##0.00\xa0\xa4",
  "es-419": "\xa4#,##0.00",
  "es-AR": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "es-BO": "\xa4#,##0.00",
  "es-BR": "\xa4#,##0.00",
  "es-BZ": "\xa4#,##0.00",
  "es-CL": "\xa4#,##0.00",
  "es-CO": "\xa4#,##0.00",
  "es-CR": "\xa4#,##0.00",
  "es-CU": "\xa4#,##0.00",
  "es-DO": "\xa4#,##0.00;(\xa4#,##0.00)",
  "es-EA": "#,##0.00\xa0\xa4",
  "es-EC": "\xa4#,##0.00",
  "es-GQ": "#,##0.00\xa0\xa4",
  "es-GT": "\xa4#,##0.00",
  "es-HN": "\xa4#,##0.00",
  "es-IC": "#,##0.00\xa0\xa4",
  "es-MX": "\xa4#,##0.00",
  "es-NI": "\xa4#,##0.00",
  "es-PA": "\xa4#,##0.00",
  "es-PE": "\xa4#,##0.00",
  "es-PH": "#,##0.00\xa0\xa4",
  "es-PR": "\xa4#,##0.00",
  "es-PY": "\xa4#,##0.00",
  "es-SV": "\xa4#,##0.00",
  "es-US": "\xa4#,##0.00",
  "es-UY": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "es-VE": "\xa4#,##0.00",
  et: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  eu: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  ewo: "#,##0.00\xa0\xa4",
  fa: "\u200e\xa4\xa0#,##0.00;\u200e(\xa4\xa0#,##0.00)",
  "fa-AF": "\xa4\xa0#,##0.00;\u200e(\xa4\xa0#,##0.00)",
  ff: "#,##0.00\xa0\xa4",
  "ff-Adlm": "\xa4\xa0#,##0.00",
  "ff-Adlm-BF": "\xa4\xa0#,##0.00",
  "ff-Adlm-CM": "\xa4\xa0#,##0.00",
  "ff-Adlm-GH": "\xa4\xa0#,##0.00",
  "ff-Adlm-GM": "\xa4\xa0#,##0.00",
  "ff-Adlm-GW": "\xa4\xa0#,##0.00",
  "ff-Adlm-LR": "\xa4\xa0#,##0.00",
  "ff-Adlm-MR": "\xa4\xa0#,##0.00",
  "ff-Adlm-NE": "\xa4\xa0#,##0.00",
  "ff-Adlm-NG": "\xa4\xa0#,##0.00",
  "ff-Adlm-SL": "\xa4\xa0#,##0.00",
  "ff-Adlm-SN": "\xa4\xa0#,##0.00",
  "ff-Latn": "#,##0.00\xa0\xa4",
  "ff-Latn-BF": "#,##0.00\xa0\xa4",
  "ff-Latn-CM": "#,##0.00\xa0\xa4",
  "ff-Latn-GH": "#,##0.00\xa0\xa4",
  "ff-Latn-GM": "#,##0.00\xa0\xa4",
  "ff-Latn-GN": "#,##0.00\xa0\xa4",
  "ff-Latn-GW": "#,##0.00\xa0\xa4",
  "ff-Latn-LR": "#,##0.00\xa0\xa4",
  "ff-Latn-MR": "#,##0.00\xa0\xa4",
  "ff-Latn-NE": "#,##0.00\xa0\xa4",
  "ff-Latn-NG": "#,##0.00\xa0\xa4",
  "ff-Latn-SL": "#,##0.00\xa0\xa4",
  fi: "#,##0.00\xa0\xa4",
  fil: "\xa4#,##0.00;(\xa4#,##0.00)",
  fo: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fo-DK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  fr: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-BE": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-BF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-BI": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-BJ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-BL": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-CA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-CD": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-CF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-CG": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-CH": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-CI": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-CM": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-DJ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-DZ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-GA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-GF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-GN": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-GP": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-GQ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-HT": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-KM": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-LU": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-MA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-MC": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-MF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-MG": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-ML": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-MQ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-MR": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-MU": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-NC": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-NE": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-PF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-PM": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-RE": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-RW": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-SC": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-SN": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-SY": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-TD": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-TG": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-TN": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-VU": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-WF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "fr-YT": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  fur: "\xa4\xa0#,##0.00",
  fy: "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  ga: "\xa4#,##0.00;(\xa4#,##0.00)",
  "ga-GB": "\xa4#,##0.00;(\xa4#,##0.00)",
  gd: "\xa4#,##0.00;(\xa4#,##0.00)",
  gl: "#,##0.00\xa0\xa4",
  gsw: "#,##0.00\xa0\xa4",
  "gsw-FR": "#,##0.00\xa0\xa4",
  "gsw-LI": "#,##0.00\xa0\xa4",
  gu: "\xa4#,##,##0.00;(\xa4#,##,##0.00)",
  guz: "\xa4#,##0.00;(\xa4#,##0.00)",
  gv: "\xa4#,##0.00",
  ha: "\xa4\xa0#,##0.00",
  "ha-GH": "\xa4\xa0#,##0.00",
  "ha-NE": "\xa4\xa0#,##0.00",
  haw: "\xa4#,##0.00;(\xa4#,##0.00)",
  he: "#,##0.00\xa0\xa4",
  hi: "\xa4#,##,##0.00",
  "hi-Latn": "\xa4#,##,##0.00",
  hr: "#,##0.00\xa0\xa4",
  "hr-BA": "#,##0.00\xa0\xa4",
  hsb: "#,##0.00\xa0\xa4",
  hu: "#,##0.00\xa0\xa4",
  hy: "#,##0.00\xa0\xa4",
  ia: "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  id: "\xa4#,##0.00",
  ig: "\xa4#,##0.00;(\xa4#,##0.00)",
  ii: "\xa4\xa0#,##0.00",
  is: "#,##0.00\xa0\xa4",
  it: "#,##0.00\xa0\xa4",
  "it-CH": "#,##0.00\xa0\xa4",
  "it-SM": "#,##0.00\xa0\xa4",
  "it-VA": "#,##0.00\xa0\xa4",
  ja: "\xa4#,##0.00;(\xa4#,##0.00)",
  jgo: "\xa4\xa0#,##0.00",
  jmc: "\xa4#,##0.00",
  jv: "\xa4\xa0#,##0.00",
  ka: "#,##0.00\xa0\xa4",
  kab: "#,##0.00\xa4",
  kam: "\xa4#,##0.00;(\xa4#,##0.00)",
  kde: "\xa4#,##0.00;(\xa4#,##0.00)",
  kea: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  kgp: "\xa4\xa0#,##0.00",
  khq: "#,##0.00\xa4",
  ki: "\xa4#,##0.00;(\xa4#,##0.00)",
  kk: "#,##0.00\xa0\xa4",
  kkj: "\xa4\xa0#,##0.00",
  kl: "\xa4#,##0.00;\xa4-#,##0.00",
  kln: "\xa4#,##0.00;(\xa4#,##0.00)",
  km: "#,##0.00\xa4;(#,##0.00\xa4)",
  kn: "\xa4#,##0.00;(\xa4#,##0.00)",
  ko: "\xa4#,##0.00;(\xa4#,##0.00)",
  "ko-KP": "\xa4#,##0.00;(\xa4#,##0.00)",
  kok: "\xa4#,##0.00;(\xa4#,##0.00)",
  ks: "\xa4#,##0.00",
  "ks-Arab": "\xa4#,##0.00",
  "ks-Deva": "\xa4\xa0#,##0.00",
  ksb: "#,##0.00\xa4",
  ksf: "#,##0.00\xa0\xa4",
  ksh: "#,##0.00\xa0\xa4",
  ku: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  kw: "\xa4#,##0.00",
  ky: "#,##0.00\xa0\xa4",
  lag: "\xa4\xa0#,##0.00",
  lb: "#,##0.00\xa0\xa4",
  lg: "#,##0.00\xa4",
  lkt: "\xa4\xa0#,##0.00",
  ln: "#,##0.00\xa0\xa4",
  "ln-AO": "#,##0.00\xa0\xa4",
  "ln-CF": "#,##0.00\xa0\xa4",
  "ln-CG": "#,##0.00\xa0\xa4",
  lo: "\xa4#,##0.00;\xa4-#,##0.00",
  lrc: "\xa4\xa0#,##0.00",
  "lrc-IQ": "\xa4\xa0#,##0.00",
  lt: "#,##0.00\xa0\xa4",
  lu: "#,##0.00\xa4",
  luo: "#,##0.00\xa4",
  luy: "\xa4#,##0.00;\xa4-\xa0#,##0.00",
  lv: "#,##0.00\xa0\xa4",
  mai: "\xa4\xa0#,##0.00",
  mas: "\xa4#,##0.00;(\xa4#,##0.00)",
  "mas-TZ": "\xa4#,##0.00;(\xa4#,##0.00)",
  mer: "\xa4#,##0.00;(\xa4#,##0.00)",
  mfe: "\xa4\xa0#,##0.00",
  mg: "\xa4#,##0.00",
  mgh: "\xa4\xa0#,##0.00",
  mgo: "\xa4\xa0#,##0.00",
  mi: "\xa4\xa0#,##0.00",
  mk: "#,##0.00\xa0\xa4",
  ml: "\xa4#,##0.00;(\xa4#,##0.00)",
  mn: "\xa4\xa0#,##0.00",
  mni: "\xa4\xa0#,##0.00",
  "mni-Beng": "\xa4\xa0#,##0.00",
  mr: "\xa4#,##0.00;(\xa4#,##0.00)",
  ms: "\xa4#,##0.00;(\xa4#,##0.00)",
  "ms-BN": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ms-ID": "\xa4#,##0.00",
  "ms-SG": "\xa4#,##0.00;(\xa4#,##0.00)",
  mt: "\xa4#,##0.00",
  mua: "\xa4#,##0.00;(\xa4#,##0.00)",
  my: "\xa4\xa0#,##0.00",
  mzn: "\xa4\xa0#,##0.00",
  naq: "\xa4#,##0.00",
  nb: "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "nb-SJ": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  nd: "\xa4#,##0.00;(\xa4#,##0.00)",
  nds: "\xa4\xa0#,##0.00",
  "nds-NL": "\xa4\xa0#,##0.00",
  ne: "\xa4\xa0#,##,##0.00",
  "ne-IN": "\xa4\xa0#,##,##0.00",
  nl: "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "nl-AW": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "nl-BE": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "nl-BQ": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "nl-CW": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "nl-SR": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  "nl-SX": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  nmg: "#,##0.00\xa0\xa4",
  nn: "#,##0.00\xa0\xa4",
  nnh: "\xa4\xa0#,##0.00",
  no: "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
  nus: "\xa4#,##0.00;(\xa4#,##0.00)",
  nyn: "\xa4#,##0.00",
  om: "\xa4#,##0.00",
  "om-KE": "\xa4#,##0.00",
  or: "\xa4#,##0.00;(\xa4#,##0.00)",
  os: "\xa4\xa0#,##0.00",
  "os-RU": "\xa4\xa0#,##0.00",
  pa: "\xa4\xa0#,##0.00",
  "pa-Arab": "\xa4\xa0#,##0.00",
  "pa-Guru": "\xa4\xa0#,##0.00",
  pcm: "\xa4#,##0.00",
  pl: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  ps: "\xa4#,##0.00;(\xa4#,##0.00)",
  "ps-PK": "\xa4#,##0.00;(\xa4#,##0.00)",
  pt: "\xa4\xa0#,##0.00",
  "pt-AO": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-CH": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-CV": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-GQ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-GW": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-LU": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-MO": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-MZ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-PT": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-ST": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "pt-TL": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  qu: "\xa4\xa0#,##0.00",
  "qu-BO": "\xa4\xa0#,##0.00",
  "qu-EC": "\xa4\xa0#,##0.00",
  rm: "#,##0.00\xa0\xa4",
  rn: "#,##0.00\xa4",
  ro: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "ro-MD": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  rof: "\xa4#,##0.00",
  ru: "#,##0.00\xa0\xa4",
  "ru-BY": "#,##0.00\xa0\xa4",
  "ru-KG": "#,##0.00\xa0\xa4",
  "ru-KZ": "#,##0.00\xa0\xa4",
  "ru-MD": "#,##0.00\xa0\xa4",
  "ru-UA": "#,##0.00\xa0\xa4",
  rw: "\xa4\xa0#,##0.00",
  rwk: "#,##0.00\xa4",
  sa: "\xa4\xa0#,##0.00",
  sah: "#,##0.00\xa0\xa4",
  saq: "\xa4#,##0.00;(\xa4#,##0.00)",
  sat: "\xa4\xa0#,##0.00",
  "sat-Olck": "\xa4\xa0#,##0.00",
  sbp: "#,##0.00\xa4",
  sc: "#,##0.00\xa0\xa4",
  sd: "\xa4\xa0#,##0.00",
  "sd-Arab": "\xa4\xa0#,##0.00",
  "sd-Deva": "\xa4\xa0#,##0.00",
  se: "#,##0.00\xa0\xa4",
  "se-FI": "#,##0.00\xa0\xa4",
  "se-SE": "#,##0.00\xa0\xa4",
  seh: "#,##0.00\xa4",
  ses: "#,##0.00\xa4",
  sg: "\xa4#,##0.00;\xa4-#,##0.00",
  shi: "#,##0.00\xa4",
  "shi-Latn": "#,##0.00\xa4",
  "shi-Tfng": "#,##0.00\xa4",
  si: "\xa4#,##0.00;(\xa4#,##0.00)",
  sk: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  sl: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  smn: "#,##0.00\xa0\xa4",
  sn: "\xa4#,##0.00;(\xa4#,##0.00)",
  so: "\xa4#,##0.00;(\xa4#,##0.00)",
  "so-DJ": "\xa4#,##0.00;(\xa4#,##0.00)",
  "so-ET": "\xa4#,##0.00;(\xa4#,##0.00)",
  "so-KE": "\xa4#,##0.00;(\xa4#,##0.00)",
  sq: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sq-MK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sq-XK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  sr: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sr-Cyrl": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sr-Cyrl-BA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sr-Cyrl-ME": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sr-Cyrl-XK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sr-Latn": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sr-Latn-BA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sr-Latn-ME": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  "sr-Latn-XK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  su: "\xa4#,##0.00",
  "su-Latn": "\xa4#,##0.00",
  sv: "#,##0.00\xa0\xa4",
  "sv-AX": "#,##0.00\xa0\xa4",
  "sv-FI": "#,##0.00\xa0\xa4",
  sw: "\xa4\xa0#,##0.00",
  "sw-CD": "\xa4\xa0#,##0.00",
  "sw-KE": "\xa4\xa0#,##0.00",
  "sw-UG": "\xa4\xa0#,##0.00",
  ta: "\xa4#,##0.00;(\xa4#,##0.00)",
  "ta-LK": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ta-MY": "\xa4#,##0.00;(\xa4#,##0.00)",
  "ta-SG": "\xa4#,##0.00;(\xa4#,##0.00)",
  te: "\xa4#,##0.00;(\xa4#,##0.00)",
  teo: "\xa4#,##0.00;(\xa4#,##0.00)",
  "teo-KE": "\xa4#,##0.00;(\xa4#,##0.00)",
  tg: "#,##0.00\xa0\xa4",
  th: "\xa4#,##0.00;(\xa4#,##0.00)",
  ti: "\xa4#,##0.00",
  "ti-ER": "\xa4#,##0.00",
  tk: "#,##0.00\xa0\xa4",
  to: "\xa4\xa0#,##0.00",
  tr: "\xa4#,##0.00;(\xa4#,##0.00)",
  "tr-CY": "\xa4#,##0.00;(\xa4#,##0.00)",
  tt: "#,##0.00\xa0\xa4",
  twq: "#,##0.00\xa4",
  tzm: "#,##0.00\xa0\xa4",
  ug: "\xa4#,##0.00;(\xa4#,##0.00)",
  uk: "#,##0.00\xa0\xa4",
  und: "\xa4\xa0#,##0.00",
  ur: "\xa4#,##0.00;(\xa4#,##0.00)",
  "ur-IN": "\xa4#,##0.00;(\xa4#,##0.00)",
  uz: "#,##0.00\xa0\xa4",
  "uz-Arab": "\xa4\xa0#,##0.00",
  "uz-Cyrl": "#,##0.00\xa0\xa4",
  "uz-Latn": "#,##0.00\xa0\xa4",
  vai: "\xa4#,##0.00;(\xa4#,##0.00)",
  "vai-Latn": "\xa4#,##0.00;(\xa4#,##0.00)",
  "vai-Vaii": "\xa4#,##0.00;(\xa4#,##0.00)",
  vi: "#,##0.00\xa0\xa4",
  vun: "\xa4#,##0.00",
  wae: "\xa4\xa0#,##0.00",
  wo: "\xa4\xa0#,##0.00",
  xh: "\xa4#,##0.00",
  xog: "#,##0.00\xa0\xa4",
  yav: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
  yi: "\xa4\xa0#,##0.00",
  yo: "\xa4#,##0.00;(\xa4#,##0.00)",
  "yo-BJ": "\xa4#,##0.00;(\xa4#,##0.00)",
  yrl: "\xa4\xa0#,##0.00",
  "yrl-CO": "\xa4\xa0#,##0.00",
  "yrl-VE": "\xa4\xa0#,##0.00",
  yue: "\xa4#,##0.00;(\xa4#,##0.00)",
  "yue-Hans": "\xa4#,##0.00;(\xa4#,##0.00)",
  "yue-Hant": "\xa4#,##0.00;(\xa4#,##0.00)",
  zgh: "#,##0.00\xa4",
  zh: "\xa4#,##0.00;(\xa4#,##0.00)",
  "zh-Hans": "\xa4#,##0.00;(\xa4#,##0.00)",
  "zh-Hans-HK": "\xa4#,##0.00;(\xa4#,##0.00)",
  "zh-Hans-MO": "\xa4#,##0.00;(\xa4#,##0.00)",
  "zh-Hans-SG": "\xa4#,##0.00;(\xa4#,##0.00)",
  "zh-Hant": "\xa4#,##0.00;(\xa4#,##0.00)",
  "zh-Hant-HK": "\xa4#,##0.00;(\xa4#,##0.00)",
  "zh-Hant-MO": "\xa4#,##0.00;(\xa4#,##0.00)",
  zu: "\xa4#,##0.00;(\xa4#,##0.00)"
});
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/intl/number.js
/**
 * DevExtreme (esm/common/core/localization/intl/number.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */




const CURRENCY_STYLES = ["standard", "accounting"];
const MAX_FRACTION_DIGITS = 20;
const detectCurrencySymbolRegex = /([^\s0]+)?(\s*)0*[.,]*0*(\s*)([^\s0]+)?/;
const formattersCache = {};
const getFormatter = format => {
  const key = core/* default */.A.locale() + "/" + JSON.stringify(format);
  if (!formattersCache[key]) {
    formattersCache[key] = new Intl.NumberFormat(core/* default */.A.locale(), format).format;
  }
  return formattersCache[key];
};
const getCurrencyFormatter = currency => new Intl.NumberFormat(core/* default */.A.locale(), {
  style: "currency",
  currency: currency
});
/* harmony default export */ const intl_number = ({
  engine: function () {
    return "intl";
  },
  _formatNumberCore: function (value, format, formatConfig) {
    if ("exponential" === format) {
      return this.callBase.apply(this, arguments);
    }
    return getFormatter(this._normalizeFormatConfig(format, formatConfig, value))(value);
  },
  _normalizeFormatConfig: function (format, formatConfig, value) {
    let config;
    if ("decimal" === format) {
      const fractionDigits = String(value).split(".")[1];
      config = {
        minimumIntegerDigits: formatConfig.precision || void 0,
        useGrouping: false,
        maximumFractionDigits: fractionDigits && fractionDigits.length,
        round: value < 0 ? "ceil" : "floor"
      };
    } else {
      config = this._getPrecisionConfig(formatConfig.precision);
    }
    if ("percent" === format) {
      config.style = "percent";
    } else if ("currency" === format) {
      const useAccountingStyle = formatConfig.useCurrencyAccountingStyle ?? (0,esm_common/* config */.$W)().defaultUseCurrencyAccountingStyle;
      config.style = "currency";
      config.currency = formatConfig.currency || (0,esm_common/* config */.$W)().defaultCurrency;
      config.currencySign = CURRENCY_STYLES[+useAccountingStyle];
    }
    return config;
  },
  _getPrecisionConfig: function (precision) {
    let config;
    if (null === precision) {
      config = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 20
      };
    } else {
      config = {
        minimumFractionDigits: precision || 0,
        maximumFractionDigits: precision || 0
      };
    }
    return config;
  },
  format: function (value, format) {
    if ("number" !== typeof value) {
      return value;
    }
    format = this._normalizeFormat(format);
    if ("default" === format.currency) {
      format.currency = (0,esm_common/* config */.$W)().defaultCurrency;
    }
    if (!format || "function" !== typeof format && !format.type && !format.formatter) {
      return getFormatter(format)(value);
    }
    const result = this.callBase.apply(this, arguments);
    return result;
  },
  _getCurrencySymbolInfo: function (currency) {
    const formatter = getCurrencyFormatter(currency);
    return this._extractCurrencySymbolInfo(formatter.format(0));
  },
  _extractCurrencySymbolInfo: function (currencyValueString) {
    const match = detectCurrencySymbolRegex.exec(currencyValueString) || [];
    const position = match[1] ? "before" : "after";
    const symbol = match[1] || match[4] || "";
    const delimiter = match[2] || match[3] || "";
    return {
      position: position,
      symbol: symbol,
      delimiter: delimiter
    };
  },
  getCurrencySymbol: function (currency) {
    if (!currency) {
      currency = (0,esm_common/* config */.$W)().defaultCurrency;
    }
    const symbolInfo = this._getCurrencySymbolInfo(currency);
    return {
      symbol: symbolInfo.symbol
    };
  },
  getOpenXmlCurrencyFormat: function (currency) {
    const targetCurrency = currency || (0,esm_common/* config */.$W)().defaultCurrency;
    const currencySymbol = this._getCurrencySymbolInfo(targetCurrency).symbol;
    const closestAccountingFormat = core/* default */.A.getValueByClosestLocale(locale => accounting_formats[locale]);
    return (0,open_xml_currency_format/* default */.A)(currencySymbol, closestAccountingFormat);
  }
});
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization/number.js
/**
 * DevExtreme (esm/common/core/localization/number.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */










const hasIntl = "undefined" !== typeof Intl;
const MAX_LARGE_NUMBER_POWER = 4;
const DECIMAL_BASE = 10;
const NUMERIC_FORMATS = ["currency", "fixedpoint", "exponential", "percent", "decimal"];
const LargeNumberFormatPostfixes = {
  1: "K",
  2: "M",
  3: "B",
  4: "T"
};
const LargeNumberFormatPowers = {
  largenumber: "auto",
  thousands: 1,
  millions: 2,
  billions: 3,
  trillions: 4
};
const numberLocalization = (0,dependency_injector/* default */.A)({
  engine: function () {
    return "base";
  },
  numericFormats: NUMERIC_FORMATS,
  defaultLargeNumberFormatPostfixes: LargeNumberFormatPostfixes,
  _parseNumberFormatString: function (formatType) {
    const formatObject = {};
    if (!formatType || "string" !== typeof formatType) {
      return;
    }
    const formatList = formatType.toLowerCase().split(" ");
    (0,m_iterator/* each */.__)(formatList, (index, value) => {
      if (NUMERIC_FORMATS.includes(value)) {
        formatObject.formatType = value;
      } else if (value in LargeNumberFormatPowers) {
        formatObject.power = LargeNumberFormatPowers[value];
      }
    });
    if (formatObject.power && !formatObject.formatType) {
      formatObject.formatType = "fixedpoint";
    }
    if (formatObject.formatType) {
      return formatObject;
    }
  },
  _calculateNumberPower: function (value, base, minPower, maxPower) {
    let number = Math.abs(value);
    let power = 0;
    if (number > 1) {
      while (number && number >= base && (void 0 === maxPower || power < maxPower)) {
        power++;
        number /= base;
      }
    } else if (number > 0 && number < 1) {
      while (number < 1 && (void 0 === minPower || power > minPower)) {
        power--;
        number *= base;
      }
    }
    return power;
  },
  _getNumberByPower: function (number, power, base) {
    let result = number;
    while (power > 0) {
      result /= base;
      power--;
    }
    while (power < 0) {
      result *= base;
      power++;
    }
    return result;
  },
  _formatNumber: function (value, formatObject, formatConfig) {
    if ("auto" === formatObject.power) {
      formatObject.power = this._calculateNumberPower(value, 1e3, 0, 4);
    }
    if (formatObject.power) {
      value = this._getNumberByPower(value, formatObject.power, 1e3);
    }
    const powerPostfix = this.defaultLargeNumberFormatPostfixes[formatObject.power] || "";
    let result = this._formatNumberCore(value, formatObject.formatType, formatConfig);
    result = result.replace(/(\d|.$)(\D*)$/, "$1" + powerPostfix + "$2");
    return result;
  },
  _formatNumberExponential: function (value, formatConfig) {
    let power = this._calculateNumberPower(value, 10);
    let number = this._getNumberByPower(value, power, 10);
    if (void 0 === formatConfig.precision) {
      formatConfig.precision = 1;
    }
    if (number.toFixed(formatConfig.precision || 0) >= 10) {
      power++;
      number /= 10;
    }
    const powString = (power >= 0 ? "+" : "") + power.toString();
    return this._formatNumberCore(number, "fixedpoint", formatConfig) + "E" + powString;
  },
  _addZeroes: function (value, precision) {
    const multiplier = Math.pow(10, precision);
    const sign = value < 0 ? "-" : "";
    value = (Math.abs(value) * multiplier >>> 0) / multiplier;
    let result = value.toString();
    while (result.length < precision) {
      result = "0" + result;
    }
    return sign + result;
  },
  _addGroupSeparators: function (value) {
    const parts = value.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, (0,config/* default */.A)().thousandsSeparator) + (parts[1] ? (0,config/* default */.A)().decimalSeparator + parts[1] : "");
  },
  _formatNumberCore: function (value, format, formatConfig) {
    if ("exponential" === format) {
      return this._formatNumberExponential(value, formatConfig);
    }
    if ("decimal" !== format && null !== formatConfig.precision) {
      formatConfig.precision = formatConfig.precision || 0;
    }
    if ("percent" === format) {
      value *= 100;
    }
    if (void 0 !== formatConfig.precision) {
      if ("decimal" === format) {
        value = this._addZeroes(value, formatConfig.precision);
      } else {
        value = null === formatConfig.precision ? value.toPrecision() : (0,utils/* toFixed */.M)(value, formatConfig.precision);
      }
    }
    if ("decimal" !== format) {
      value = this._addGroupSeparators(value);
    } else {
      value = value.toString().replace(".", (0,config/* default */.A)().decimalSeparator);
    }
    if ("percent" === format) {
      value += "%";
    }
    return value;
  },
  _normalizeFormat: function (format) {
    if (!format) {
      return {};
    }
    if ("function" === typeof format) {
      return format;
    }
    if (!(0,type/* isPlainObject */.Qd)(format)) {
      format = {
        type: format
      };
    }
    return format;
  },
  _getSeparators: function () {
    return {
      decimalSeparator: this.getDecimalSeparator(),
      thousandsSeparator: this.getThousandsSeparator()
    };
  },
  getThousandsSeparator: function () {
    return this.format(1e4, "fixedPoint")[2];
  },
  getDecimalSeparator: function () {
    return this.format(1.2, {
      type: "fixedPoint",
      precision: 1
    })[1];
  },
  convertDigits: function (value, toStandard) {
    const digits = this.format(90, "decimal");
    if ("string" !== typeof value || "0" === digits[1]) {
      return value;
    }
    const fromFirstDigit = toStandard ? digits[1] : "0";
    const toFirstDigit = toStandard ? "0" : digits[1];
    const fromLastDigit = toStandard ? digits[0] : "9";
    const regExp = new RegExp("[" + fromFirstDigit + "-" + fromLastDigit + "]", "g");
    return value.replace(regExp, char => String.fromCharCode(char.charCodeAt(0) + (toFirstDigit.charCodeAt(0) - fromFirstDigit.charCodeAt(0))));
  },
  getNegativeEtalonRegExp: function (format) {
    const separators = this._getSeparators();
    const digitalRegExp = new RegExp("[0-9" + (0,common/* escapeRegExp */.Nt)(separators.decimalSeparator + separators.thousandsSeparator) + "]+", "g");
    let negativeEtalon = this.format(-1, format).replace(digitalRegExp, "1");
    ["\\", "(", ")", "[", "]", "*", "+", "$", "^", "?", "|", "{", "}"].forEach(char => {
      negativeEtalon = negativeEtalon.replace(new RegExp(`\\${char}`, "g"), `\\${char}`);
    });
    negativeEtalon = negativeEtalon.replace(/ /g, "\\s");
    negativeEtalon = negativeEtalon.replace(/1/g, ".*");
    return new RegExp(negativeEtalon, "g");
  },
  getSign: function (text, format) {
    if (!format) {
      if ("-" === text.replace(/[^0-9-]/g, "").charAt(0)) {
        return -1;
      }
      return 1;
    }
    const negativeEtalon = this.getNegativeEtalonRegExp(format);
    return text.match(negativeEtalon) ? -1 : 1;
  },
  format: function (value, format) {
    if ("number" !== typeof value) {
      return value;
    }
    if ("number" === typeof format) {
      return value;
    }
    format = format && format.formatter || format;
    if ("function" === typeof format) {
      return format(value);
    }
    format = this._normalizeFormat(format);
    if (!format.type) {
      format.type = "decimal";
    }
    const numberConfig = this._parseNumberFormatString(format.type);
    if (!numberConfig) {
      const formatterConfig = this._getSeparators();
      formatterConfig.unlimitedIntegerDigits = format.unlimitedIntegerDigits;
      const formatter = (0,number/* getFormatter */.f)(format.type, formatterConfig)(value);
      const result = this.convertDigits(formatter);
      return result;
    }
    return this._formatNumber(value, numberConfig, format);
  },
  parse: function (text, format) {
    if (!text) {
      return;
    }
    if (format && format.parser) {
      return format.parser(text);
    }
    text = this.convertDigits(text, true);
    if (format && "string" !== typeof format) {
      errors/* default */.A.log("W0011");
    }
    const decimalSeparator = this.getDecimalSeparator();
    const regExp = new RegExp("[^0-9" + (0,common/* escapeRegExp */.Nt)(decimalSeparator) + "]", "g");
    const cleanedText = text.replace(regExp, "").replace(decimalSeparator, ".").replace(/\.$/g, "");
    if ("." === cleanedText || "" === cleanedText) {
      return null;
    }
    if (this._calcSignificantDigits(cleanedText) > 15) {
      return NaN;
    }
    let parsed = +cleanedText * this.getSign(text, format);
    format = this._normalizeFormat(format);
    const formatConfig = this._parseNumberFormatString(format.type);
    let power = null === formatConfig || void 0 === formatConfig ? void 0 : formatConfig.power;
    if (power) {
      if ("auto" === power) {
        const match = text.match(/\d(K|M|B|T)/);
        if (match) {
          power = Object.keys(LargeNumberFormatPostfixes).find(power => LargeNumberFormatPostfixes[power] === match[1]);
        }
      }
      parsed *= Math.pow(10, 3 * power);
    }
    if ("percent" === (null === formatConfig || void 0 === formatConfig ? void 0 : formatConfig.formatType)) {
      parsed /= 100;
    }
    return parsed;
  },
  _calcSignificantDigits: function (text) {
    const [integer, fractional] = text.split(".");
    const calcDigitsAfterLeadingZeros = digits => {
      let index = -1;
      for (let i = 0; i < digits.length; i++) {
        if ("0" !== digits[i]) {
          index = i;
          break;
        }
      }
      return index > -1 ? digits.length - index : 0;
    };
    let result = 0;
    if (integer) {
      result += calcDigitsAfterLeadingZeros(integer.split(""));
    }
    if (fractional) {
      result += calcDigitsAfterLeadingZeros(fractional.split("").reverse());
    }
    return result;
  }
});
numberLocalization.inject(currency/* default */.A);
if (hasIntl) {
  numberLocalization.inject(intl_number);
}
/* harmony default export */ const localization_number = (numberLocalization);

/***/ }),

/***/ 29751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * DevExtreme (esm/common/core/localization/open_xml_currency_format.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((currencySymbol, accountingFormat) => {
  if (!accountingFormat) {
    return;
  }
  let encodedCurrencySymbol = currencySymbol;
  if ("string" === typeof currencySymbol) {
    encodedCurrencySymbol = "";
    for (let i = 0; i < currencySymbol.length; i++) {
      if ("$" !== currencySymbol[i]) {
        encodedCurrencySymbol += "\\";
      }
      encodedCurrencySymbol += currencySymbol[i];
    }
  }
  const encodeSymbols = {
    ".00": "{0}",
    "'": "\\'",
    "\\(": "\\(",
    "\\)": "\\)",
    " ": "\\ ",
    '"': "&quot;",
    "\\\xa4": encodedCurrencySymbol
  };
  const result = accountingFormat.split(";");
  for (let i = 0; i < result.length; i++) {
    for (const symbol in encodeSymbols) {
      if (Object.prototype.hasOwnProperty.call(encodeSymbols, symbol)) {
        result[i] = result[i].replace(new RegExp(symbol, "g"), encodeSymbols[symbol]);
      }
    }
  }
  return 2 === result.length ? result[0] + "_);" + result[1] : result[0];
});

/***/ }),

/***/ 18812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ toFixed)
/* harmony export */ });
/* harmony import */ var _core_utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72868);
/**
 * DevExtreme (esm/common/core/localization/utils.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const DECIMAL_BASE = 10;
function roundByAbs(value) {
  const valueSign = (0,_core_utils_math__WEBPACK_IMPORTED_MODULE_0__/* .sign */ ._S)(value);
  return valueSign * Math.round(Math.abs(value));
}
function adjustValue(value, precision) {
  const precisionMultiplier = Math.pow(10, precision);
  const intermediateValue = (0,_core_utils_math__WEBPACK_IMPORTED_MODULE_0__/* .multiplyInExponentialForm */ .T0)(value, precision);
  return roundByAbs(intermediateValue) / precisionMultiplier;
}
function toFixed(value, precision) {
  const valuePrecision = precision || 0;
  const adjustedValue = valuePrecision > 0 ? adjustValue(...arguments) : value;
  return adjustedValue.toFixed(valuePrecision);
}

/***/ }),

/***/ 82554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ core_class)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/errors.js + 1 modules
var errors = __webpack_require__(54393);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/m_class.js
/**
 * DevExtreme (esm/__internal/core/m_class.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const wrapOverridden = function (baseProto, methodName, method) {
  return function () {
    const prevCallBase = this.callBase;
    this.callBase = baseProto[methodName];
    try {
      return method.apply(this, arguments);
    } finally {
      this.callBase = prevCallBase;
    }
  };
};
const clonePrototype = function (obj) {
  const func = function () {};
  func.prototype = obj.prototype;
  return new func();
};
const redefine = function (members) {
  const that = this;
  let overridden;
  let memberName;
  let member;
  if (!members) {
    return that;
  }
  for (memberName in members) {
    member = members[memberName];
    overridden = "function" === typeof that.prototype[memberName] && "function" === typeof member;
    that.prototype[memberName] = overridden ? wrapOverridden(that.parent.prototype, memberName, member) : member;
  }
  return that;
};
const include = function () {
  const classObj = this;
  let argument;
  let name;
  let i;
  const hasClassObjOwnProperty = Object.prototype.hasOwnProperty.bind(classObj);
  const isES6Class = !hasClassObjOwnProperty("_includedCtors") && !hasClassObjOwnProperty("_includedPostCtors");
  if (isES6Class) {
    classObj._includedCtors = classObj._includedCtors.slice(0);
    classObj._includedPostCtors = classObj._includedPostCtors.slice(0);
  }
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  for (i = 0; i < args.length; i++) {
    argument = args[i];
    if (argument.ctor) {
      classObj._includedCtors.push(argument.ctor);
    }
    if (argument.postCtor) {
      classObj._includedPostCtors.push(argument.postCtor);
    }
    for (name in argument) {
      if ("ctor" === name || "postCtor" === name || "default" === name) {
        continue;
      }
      classObj.prototype[name] = argument[name];
    }
  }
  return classObj;
};
const subclassOf = function (parentClass) {
  const hasParentProperty = Object.prototype.hasOwnProperty.bind(this)("parent");
  const isES6Class = !hasParentProperty && this.parent;
  if (isES6Class) {
    const baseClass = Object.getPrototypeOf(this);
    return baseClass === parentClass || baseClass.subclassOf(parentClass);
  }
  if (this.parent === parentClass) {
    return true;
  }
  if (!this.parent || !this.parent.subclassOf) {
    return false;
  }
  return this.parent.subclassOf(parentClass);
};
const m_class_abstract = function () {
  throw errors/* default */.A.Error("E0001");
};
const classImpl = function () {};
classImpl.inherit = function (members) {
  const inheritor = function () {
    if (!this || (0,type/* isWindow */.l6)(this) || "function" !== typeof this.constructor) {
      throw errors/* default */.A.Error("E0003");
    }
    const instance = this;
    const {
      ctor: ctor
    } = instance;
    const includedCtors = instance.constructor._includedCtors;
    const includedPostCtors = instance.constructor._includedPostCtors;
    let i;
    for (i = 0; i < includedCtors.length; i++) {
      includedCtors[i].call(instance);
    }
    if (ctor) {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      ctor.apply(instance, args);
    }
    for (i = 0; i < includedPostCtors.length; i++) {
      includedPostCtors[i].call(instance);
    }
  };
  inheritor.prototype = clonePrototype(this);
  Object.setPrototypeOf(inheritor, this);
  inheritor.inherit = this.inherit;
  inheritor.abstract = m_class_abstract;
  inheritor.redefine = redefine;
  inheritor.include = include;
  inheritor.subclassOf = subclassOf;
  inheritor.parent = this;
  inheritor._includedCtors = this._includedCtors ? this._includedCtors.slice(0) : [];
  inheritor._includedPostCtors = this._includedPostCtors ? this._includedPostCtors.slice(0) : [];
  inheritor.prototype.constructor = inheritor;
  inheritor.redefine(members);
  return inheritor;
};
classImpl.abstract = m_class_abstract;
/* harmony default export */ const m_class = (classImpl);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/class.js
/**
 * DevExtreme (esm/core/class.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const core_class = (m_class);

/***/ }),

/***/ 83771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17065);
/**
 * DevExtreme (esm/core/config.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_common__WEBPACK_IMPORTED_MODULE_0__/* .config */ .$W);

/***/ }),

/***/ 54393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ errors)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/error.js + 1 modules
var error = __webpack_require__(89469);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/m_errors.js
/**
 * DevExtreme (esm/__internal/core/m_errors.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const m_errors = ((0,error/* default */.A)({
  E0001: "Method is not implemented",
  E0002: "Member name collision: {0}",
  E0003: "A class must be instantiated using the 'new' keyword",
  E0004: "The NAME property of the component is not specified",
  E0005: "Unknown device",
  E0006: "Unknown endpoint key is requested",
  E0007: "'Invalidate' method is called outside the update transaction",
  E0008: "Type of the option name is not appropriate to create an action",
  E0009: "Component '{0}' has not been initialized for an element",
  E0010: "Animation configuration with the '{0}' type requires '{1}' configuration as {2}",
  E0011: "Unknown animation type '{0}'",
  E0012: "jQuery version is too old. Please upgrade jQuery to 1.10.0 or later",
  E0013: "KnockoutJS version is too old. Please upgrade KnockoutJS to 2.3.0 or later",
  E0014: "The 'release' method shouldn't be called for an unlocked Lock object",
  E0015: "Queued task returned an unexpected result",
  E0017: "Event namespace is not defined",
  E0018: "DevExpress.ui.DevExpressPopup widget is required",
  E0020: "Template engine '{0}' is not supported",
  E0021: "Unknown theme is set: {0}",
  E0022: "LINK[rel=DevExpress-theme] tags must go before DevExpress included scripts",
  E0023: "Template name is not specified",
  E0024: "DevExtreme bundle already included",
  E0025: "Unexpected argument type",
  E0100: "Unknown validation type is detected",
  E0101: "Misconfigured range validation rule is detected",
  E0102: "Misconfigured comparison validation rule is detected",
  E0103: "validationCallback of an asynchronous rule should return a jQuery or a native promise",
  E0110: "Unknown validation group is detected",
  E0120: "Adapter for a DevExpressValidator component cannot be configured",
  E0121: "The 'customItem' parameter of the 'onCustomItemCreating' function is empty or contains invalid data. Assign a custom object or a Promise that is resolved after the item is created.",
  E0122: "AIIntegration: The sendRequest method is missing.",
  W0000: "'{0}' is deprecated in {1}. {2}",
  W0001: "{0} - '{1}' option is deprecated in {2}. {3}",
  W0002: "{0} - '{1}' method is deprecated in {2}. {3}",
  W0003: "{0} - '{1}' property is deprecated in {2}. {3}",
  W0004: "Timeout for theme loading is over: {0}",
  W0005: "'{0}' event is deprecated in {1}. {2}",
  W0006: "Invalid recurrence rule: '{0}'",
  W0007: "'{0}' Globalize culture is not defined",
  W0008: "Invalid view type: {0}",
  W0009: "Invalid time zone name: '{0}'",
  W0010: "{0} is deprecated in {1}. {2}",
  W0011: "Number parsing is invoked while the parser is not defined",
  W0012: "Date parsing is invoked while the parser is not defined",
  W0013: "'{0}' file is deprecated in {1}. {2}",
  W0014: "{0} - '{1}' type is deprecated in {2}. {3}",
  W0015: "Instead of returning a value from the '{0}' function, write it into the '{1}' field of the function's parameter.",
  W0016: 'The "{0}" option does not accept the "{1}" value since v{2}. {3}.',
  W0017: 'Setting the "{0}" property with a function is deprecated since v21.2',
  W0018: 'Setting the "position" property with a function is deprecated since v21.2',
  W0019: "DevExtreme: Unable to Locate a Valid License Key.\n\nDetailed license/registration related information and instructions: https://js.devexpress.com/Documentation/Licensing/.\n\nIf you are using a 30-day trial version of DevExtreme, you must uninstall all copies of DevExtreme once your 30-day trial period expires. For terms and conditions that govern use of DevExtreme UI components/libraries, please refer to the DevExtreme End User License Agreement: https://js.devexpress.com/EULAs/DevExtremeComplete.\n\nTo use DevExtreme in a commercial project, you must purchase a license. For pricing/licensing options, please visit: https://js.devexpress.com/Buy.\n\nIf you have licensing-related questions or need help with a purchase, please email clientservices@devexpress.com.\n\n",
  W0020: "DevExtreme: License Key Has Expired.\n\nDetailed license/registration related information and instructions: https://js.devexpress.com/Documentation/Licensing/.\n\nA mismatch exists between the license key used and the DevExtreme version referenced in this project.\n\nTo proceed, you can:\n\u2022 use a version of DevExtreme linked to your license key: https://www.devexpress.com/ClientCenter/DownloadManager\n\u2022 renew your DevExpress Subscription: https://www.devexpress.com/buy/renew (once you renew your subscription, you will be entitled to product updates and support service as defined in the DevExtreme End User License Agreement)\n\nIf you have licensing-related questions or need help with a renewal, please email clientservices@devexpress.com.\n\n",
  W0021: "DevExtreme: License Key Verification Has Failed.\n\nDetailed license/registration related information and instructions: https://js.devexpress.com/Documentation/Licensing/.\n\nTo verify your DevExtreme license, make certain to specify a correct key in the GlobalConfig. If you continue to encounter this error, please visit https://www.devexpress.com/ClientCenter/DownloadManager to obtain a valid license key.\n\nIf you have a valid license and this problem persists, please submit a support ticket via the DevExpress Support Center. We will be happy to follow-up: https://supportcenter.devexpress.com/ticket/create.\n\n",
  W0022: "DevExtreme: Pre-release software. Not suitable for commercial use.\n\nDetailed license/registration related information and instructions: https://js.devexpress.com/Documentation/Licensing/.\n\nPre-release software may contain deficiencies and as such, should not be considered for use or integrated in any mission critical application.\n\n",
  W0023: "DevExtreme: the following 'devextreme' package version does not match versions of other DevExpress products used in this application:\n\n{0}\n\nInteroperability between different versions of the products listed herein cannot be guaranteed.\n\n",
  W0024: "DevExtreme: Use Your DevExtreme License Key - Not Your DevExpress .NET License Key\n\nInvalid/incorrect license key. You used your DevExpress .NET license key instead of your DevExtreme (React, Angular, Vue, JS) license key. Please copy your DevExtreme license key and try again. \n\nGo to https://www.devexpress.com/ClientCenter/DownloadManager (navigate to the DevExtreme Subscription section) to obtain a valid DevExtreme license key. To validate your license, specify the correct key within GlobalConfig.\n\nFor detailed license/registration information, visit https://js.devexpress.com/Documentation/Licensing/.\n\nIf you have a valid license and the issue persists, submit a support ticket via the DevExpress Support Center. We will be happy to follow-up: https://supportcenter.devexpress.com/ticket/create.\n\n"
}));
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/errors.js
/**
 * DevExtreme (esm/core/errors.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const errors = (m_errors);

/***/ }),

/***/ 13992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17065);
/**
 * DevExtreme (esm/core/guid.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_common__WEBPACK_IMPORTED_MODULE_0__/* .Guid */ .qM);

/***/ }),

/***/ 9543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qe: () => (/* reexport */ getCurrentTemplateEngine),
  ym: () => (/* reexport */ registerTemplateEngine),
  jg: () => (/* reexport */ setTemplateEngine)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/errors.js + 1 modules
var errors = __webpack_require__(54393);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/templates/m_template_engine_registry.js
/**
 * DevExtreme (esm/__internal/core/templates/m_template_engine_registry.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const templateEngines = {};
let currentTemplateEngine;
function registerTemplateEngine(name, templateEngine) {
  templateEngines[name] = templateEngine;
}
function setTemplateEngine(templateEngine) {
  if ((0,type/* isString */.Kg)(templateEngine)) {
    currentTemplateEngine = templateEngines[templateEngine];
    if (!currentTemplateEngine) {
      throw errors/* default */.A.Error("E0020", templateEngine);
    }
  } else {
    currentTemplateEngine = templateEngine;
  }
}
function getCurrentTemplateEngine() {
  return currentTemplateEngine;
}
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/templates/template_engine_registry.js
/**
 * DevExtreme (esm/core/templates/template_engine_registry.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 34423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_callbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20767);
/**
 * DevExtreme (esm/core/utils/callbacks.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_internal_core_utils_m_callbacks__WEBPACK_IMPORTED_MODULE_0__/* .Callbacks */ .n);

/***/ }),

/***/ 5042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EG: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.EG),
/* harmony export */   GP: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.GP),
/* harmony export */   Li: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.Li),
/* harmony export */   Mb: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.Mb),
/* harmony export */   Nt: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.Nt),
/* harmony export */   OX: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.OX),
/* harmony export */   RL: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.RL),
/* harmony export */   T6: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.T6),
/* harmony export */   TA: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.TA),
/* harmony export */   VM: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.VM),
/* harmony export */   YD: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.YD),
/* harmony export */   a0: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.a0),
/* harmony export */   hm: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.hm),
/* harmony export */   lQ: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.lQ),
/* harmony export */   uG: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.uG),
/* harmony export */   zE: () => (/* reexport safe */ _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__.zE)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65930);
/**
 * DevExtreme (esm/core/utils/common.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 85978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* reexport safe */ _internal_core_utils_m_console__WEBPACK_IMPORTED_MODULE_0__.vF)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88306);
/**
 * DevExtreme (esm/core/utils/console.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 6791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Hz: () => (/* reexport */ compileGetter),
  vL: () => (/* reexport */ compileSetter),
  u7: () => (/* reexport */ getPathParts),
  ao: () => (/* reexport */ toComparable)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/class.js + 1 modules
var core_class = __webpack_require__(82554);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/errors.js + 1 modules
var errors = __webpack_require__(54393);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_iterator.js
var m_iterator = __webpack_require__(88461);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/object.js + 1 modules
var object = __webpack_require__(96972);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/variable_wrapper.js + 1 modules
var variable_wrapper = __webpack_require__(94530);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_data.js
/**
 * DevExtreme (esm/__internal/core/utils/m_data.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */






const unwrapVariable = variable_wrapper/* default */.A.unwrap;
const {
  isWrapped: isWrapped
} = variable_wrapper/* default */.A;
const {
  assign: m_data_assign
} = variable_wrapper/* default */.A;
const bracketsToDots = function (expr) {
  return expr.replace(/\[/g, ".").replace(/\]/g, "");
};
const getPathParts = function (name) {
  return bracketsToDots(name).split(".");
};
const readPropValue = function (obj, propName, options) {
  options = options || {};
  if ("this" === propName) {
    return unwrap(obj, options);
  }
  return unwrap(obj[propName], options);
};
const assignPropValue = function (obj, propName, value, options) {
  if ("this" === propName) {
    throw new errors/* default */.A.Error("E4016");
  }
  const propValue = obj[propName];
  if (options.unwrapObservables && isWrapped(propValue)) {
    m_data_assign(propValue, value);
  } else {
    obj[propName] = value;
  }
};
const prepareOptions = function (options) {
  options = options || {};
  options.unwrapObservables = void 0 !== options.unwrapObservables ? options.unwrapObservables : true;
  return options;
};
function unwrap(value, options) {
  return options.unwrapObservables ? unwrapVariable(value) : value;
}
const compileGetter = function (expr) {
  if (arguments.length > 1) {
    expr = [].slice.call(arguments);
  }
  if (!expr || "this" === expr) {
    return function (obj) {
      return obj;
    };
  }
  if ("string" === typeof expr) {
    const path = getPathParts(expr);
    return function (obj, options) {
      options = prepareOptions(options);
      const functionAsIs = options.functionsAsIs;
      const hasDefaultValue = "defaultValue" in options;
      let current = unwrap(obj, options);
      for (let i = 0; i < path.length; i++) {
        if (!current) {
          if (null == current && hasDefaultValue) {
            return options.defaultValue;
          }
          break;
        }
        const pathPart = path[i];
        if (hasDefaultValue && (0,type/* isObject */.Gv)(current) && !(pathPart in current)) {
          return options.defaultValue;
        }
        let next = unwrap(current[pathPart], options);
        if (!functionAsIs && (0,type/* isFunction */.Tn)(next)) {
          next = next.call(current);
        }
        current = next;
      }
      return current;
    };
  }
  if (Array.isArray(expr)) {
    return combineGetters(expr);
  }
  if ((0,type/* isFunction */.Tn)(expr)) {
    return expr;
  }
};
function combineGetters(getters) {
  const compiledGetters = {};
  for (let i = 0, l = getters.length; i < l; i++) {
    const getter = getters[i];
    compiledGetters[getter] = compileGetter(getter);
  }
  return function (obj, options) {
    let result;
    (0,m_iterator/* each */.__)(compiledGetters, function (name) {
      const value = this(obj, options);
      if (void 0 === value) {
        return;
      }
      let current = result || (result = {});
      const path = name.split(".");
      const last = path.length - 1;
      for (let i = 0; i < last; i++) {
        const pathItem = path[i];
        if (!(pathItem in current)) {
          current[pathItem] = {};
        }
        current = current[pathItem];
      }
      current[path[last]] = value;
    });
    return result;
  };
}
function toLowerCase(value, options) {
  return null !== options && void 0 !== options && options.locale ? value.toLocaleLowerCase(options.locale) : value.toLowerCase();
}
function toUpperCase(value, options) {
  return null !== options && void 0 !== options && options.locale ? value.toLocaleUpperCase(options.locale) : value.toUpperCase();
}
const ensurePropValueDefined = function (obj, propName, value, options) {
  if ((0,type/* isDefined */.O9)(value)) {
    return value;
  }
  const newValue = {};
  assignPropValue(obj, propName, newValue, options);
  return newValue;
};
const compileSetter = function (expr) {
  expr = getPathParts(expr || "this");
  const lastLevelIndex = expr.length - 1;
  return function (obj, value, options) {
    options = prepareOptions(options);
    let currentValue = unwrap(obj, options);
    expr.forEach(function (propertyName, levelIndex) {
      let propertyValue = readPropValue(currentValue, propertyName, options);
      const isPropertyFunc = !options.functionsAsIs && (0,type/* isFunction */.Tn)(propertyValue) && !isWrapped(propertyValue);
      if (levelIndex === lastLevelIndex) {
        if (options.merge && (0,type/* isPlainObject */.Qd)(value) && (!(0,type/* isDefined */.O9)(propertyValue) || (0,type/* isPlainObject */.Qd)(propertyValue))) {
          propertyValue = ensurePropValueDefined(currentValue, propertyName, propertyValue, options);
          (0,object/* deepExtendArraySafe */.tm)(propertyValue, value, false, true);
        } else if (isPropertyFunc) {
          currentValue[propertyName](value);
        } else {
          assignPropValue(currentValue, propertyName, value, options);
        }
      } else {
        propertyValue = ensurePropValueDefined(currentValue, propertyName, propertyValue, options);
        if (isPropertyFunc) {
          propertyValue = propertyValue.call(currentValue);
        }
        currentValue = propertyValue;
      }
    });
  };
};
const toComparable = function (value, caseSensitive) {
  var _options$collatorOpti;
  let options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if (value instanceof Date) {
    return value.getTime();
  }
  const collatorSensitivity = null === options || void 0 === options || null === (_options$collatorOpti = options.collatorOptions) || void 0 === _options$collatorOpti ? void 0 : _options$collatorOpti.sensitivity;
  if (value && value instanceof core_class/* default */.A && value.valueOf) {
    value = value.valueOf();
  } else if ("string" === typeof value && ("base" === collatorSensitivity || "case" === collatorSensitivity)) {
    const REMOVE_DIACRITICAL_MARKS_REGEXP = /[\u0300-\u036f]/g;
    if ("base" === collatorSensitivity) {
      value = toLowerCase(value, options);
    }
    value = value.normalize("NFD").replace(REMOVE_DIACRITICAL_MARKS_REGEXP, "");
  }
  const isCaseSensitive = caseSensitive || "case" === collatorSensitivity || "variant" === collatorSensitivity;
  if ("string" === typeof value && !isCaseSensitive) {
    var _options$locale;
    const locale = null === options || void 0 === options || null === (_options$locale = options.locale) || void 0 === _options$locale ? void 0 : _options$locale.toLowerCase();
    const useUpperCase = locale && !!["hy", "el"].find(code => locale === code || locale.startsWith(`${code}-`));
    return (useUpperCase ? toUpperCase : toLowerCase)(value, options);
  }
  return value;
};
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/utils/data.js
/**
 * DevExtreme (esm/core/utils/data.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 79765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cY: () => (/* reexport */ Deferred),
  Sx: () => (/* reexport */ fromPromise),
  z7: () => (/* reexport */ when)
});

// UNUSED EXPORTS: setStrategy

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/callbacks.js
var callbacks = __webpack_require__(34423);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/extend.js
var extend = __webpack_require__(87951);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_deferred.js
/**
 * DevExtreme (esm/__internal/core/utils/m_deferred.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */



const deferredConfig = [{
  method: "resolve",
  handler: "done",
  state: "resolved"
}, {
  method: "reject",
  handler: "fail",
  state: "rejected"
}, {
  method: "notify",
  handler: "progress"
}];
let DeferredObj = function () {
  const that = this;
  this._state = "pending";
  this._promise = {};
  deferredConfig.forEach(function (config) {
    const methodName = config.method;
    this[`${methodName}Callbacks`] = (0,callbacks/* default */.A)();
    this[methodName] = function () {
      return this[`${methodName}With`](this._promise, arguments);
    }.bind(this);
    this._promise[config.handler] = function (handler) {
      if (!handler) {
        return this;
      }
      const callbacks = that[`${methodName}Callbacks`];
      if (callbacks.fired()) {
        handler.apply(that[`${methodName}Context`], that[`${methodName}Args`]);
      } else {
        callbacks.add(function (context, args) {
          handler.apply(context, args);
        });
      }
      return this;
    };
  }.bind(this));
  this._promise.always = function (handler) {
    return this.done(handler).fail(handler);
  };
  this._promise.catch = function (handler) {
    return this.then(null, handler);
  };
  this._promise.then = function (resolve, reject) {
    const result = new DeferredObj();
    ["done", "fail"].forEach(function (method) {
      const callback = "done" === method ? resolve : reject;
      this[method](function () {
        if (!callback) {
          result["done" === method ? "resolve" : "reject"].apply(this, arguments);
          return;
        }
        const callbackResult = callback && callback.apply(this, arguments);
        if ((0,type/* isDeferred */.uF)(callbackResult)) {
          callbackResult.done(result.resolve).fail(result.reject);
        } else if ((0,type/* isPromise */.yL)(callbackResult)) {
          callbackResult.then(result.resolve, result.reject);
        } else {
          result.resolve.apply(this, (0,type/* isDefined */.O9)(callbackResult) ? [callbackResult] : arguments);
        }
      });
    }.bind(this));
    return result.promise();
  };
  this._promise.state = function () {
    return that._state;
  };
  this._promise.promise = function (args) {
    return args ? (0,extend/* extend */.X)(args, that._promise) : that._promise;
  };
  this._promise.promise(this);
};
deferredConfig.forEach(function (config) {
  const methodName = config.method;
  const {
    state: state
  } = config;
  DeferredObj.prototype[`${methodName}With`] = function (context, args) {
    const callbacks = this[`${methodName}Callbacks`];
    if ("pending" === this.state()) {
      this[`${methodName}Args`] = args;
      this[`${methodName}Context`] = context;
      if (state) {
        this._state = state;
      }
      callbacks.fire(context, args);
      if ("pending" !== state) {
        this.resolveCallbacks.empty();
        this.rejectCallbacks.empty();
      }
    }
    return this;
  };
});
function fromPromise(promise, context) {
  if ((0,type/* isDeferred */.uF)(promise)) {
    return promise;
  }
  if ((0,type/* isPromise */.yL)(promise)) {
    const d = new DeferredObj();
    promise.then(function () {
      d.resolveWith.apply(d, [context].concat([[].slice.call(arguments)]));
    }, function () {
      d.rejectWith.apply(d, [context].concat([[].slice.call(arguments)]));
    });
    return d;
  }
  return new DeferredObj().resolveWith(context, [promise]);
}
let whenFunc = function () {
  if (1 === arguments.length) {
    return fromPromise(arguments[0]);
  }
  const values = [].slice.call(arguments);
  const contexts = [];
  let resolvedCount = 0;
  const deferred = new DeferredObj();
  const updateState = function (i) {
    return function (value) {
      contexts[i] = this;
      values[i] = arguments.length > 1 ? [].slice.call(arguments) : value;
      resolvedCount++;
      if (resolvedCount === values.length) {
        deferred.resolveWith(contexts, values);
      }
    };
  };
  for (let i = 0; i < values.length; i++) {
    if ((0,type/* isDeferred */.uF)(values[i])) {
      values[i].promise().done(updateState(i)).fail(deferred.reject);
    } else {
      resolvedCount++;
    }
  }
  if (resolvedCount === values.length) {
    deferred.resolveWith(contexts, values);
  }
  return deferred.promise();
};
function setStrategy(value) {
  DeferredObj = value.Deferred;
  whenFunc = value.when;
}
function Deferred() {
  return new DeferredObj();
}
function when() {
  return whenFunc.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/utils/deferred.js
/**
 * DevExtreme (esm/core/utils/deferred.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 48613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ dependency_injector)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/class.js + 1 modules
var core_class = __webpack_require__(82554);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/extend.js
var extend = __webpack_require__(87951);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_iterator.js
var m_iterator = __webpack_require__(88461);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_dependency_injector.js
/**
 * DevExtreme (esm/__internal/core/utils/m_dependency_injector.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */




function injector(object) {
  const BaseClass = core_class/* default */.A.inherit(object);
  let InjectedClass = BaseClass;
  let instance = new InjectedClass(object);
  const initialFields = {};
  const injectFields = function (injectionObject, initial) {
    (0,m_iterator/* each */.__)(injectionObject, function (key) {
      if ((0,type/* isFunction */.Tn)(instance[key])) {
        if (initial || !object[key]) {
          object[key] = function () {
            return instance[key].apply(object, arguments);
          };
        }
      } else {
        if (initial) {
          initialFields[key] = object[key];
        }
        object[key] = instance[key];
      }
    });
  };
  injectFields(object, true);
  object.inject = function (injectionObject) {
    InjectedClass = InjectedClass.inherit(injectionObject);
    instance = new InjectedClass();
    injectFields(injectionObject);
  };
  object.resetInjection = function () {
    (0,extend/* extend */.X)(object, initialFields);
    InjectedClass = BaseClass;
    instance = new BaseClass();
  };
  return object;
}

;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/utils/dependency_injector.js
/**
 * DevExtreme (esm/core/utils/dependency_injector.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const dependency_injector = (injector);

/***/ }),

/***/ 89469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ utils_error)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/extend.js
var extend = __webpack_require__(87951);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/string.js + 1 modules
var string = __webpack_require__(53306);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/version.js
var version = __webpack_require__(21721);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_console.js
var m_console = __webpack_require__(88306);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_error.js
/**
 * DevExtreme (esm/__internal/core/utils/m_error.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */




const ERROR_URL = `https://js.devexpress.com/error/${version/* version */.r.split(".").slice(0, 2).join("_")}/`;
function error(baseErrors, errors) {
  const exports = {
    ERROR_MESSAGES: (0,extend/* extend */.X)(errors, baseErrors),
    Error: function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return function (args) {
        const id = args[0];
        args = args.slice(1);
        const details = formatDetails(id, args);
        const url = getErrorUrl(id);
        const message = formatMessage(id, details);
        return (0,extend/* extend */.X)(new Error(message), {
          __id: id,
          __details: details,
          url: url
        });
      }(args);
    },
    log() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      const id = args[0];
      let method = "log";
      if (/^E\d+$/.test(id)) {
        method = "error";
      } else if (/^W\d+$/.test(id)) {
        method = "warn";
      }
      m_console/* default.logger */.Ay.logger[method]("log" === method ? id : function (args) {
        const id = args[0];
        args = args.slice(1);
        return formatMessage(id, formatDetails(id, args));
      }(args));
    }
  };
  function formatDetails(id, args) {
    args = [exports.ERROR_MESSAGES[id]].concat(args);
    return string/* format */.GP.apply(this, args).replace(/\.*\s*?$/, "");
  }
  function formatMessage(id, details) {
    const kind = null !== id && void 0 !== id && id.startsWith("W") ? "warning" : "error";
    return string/* format */.GP.apply(this, ["{0} - {1}.\n\nFor additional information on this {2} message, see: {3}", id, details, kind, getErrorUrl(id)]);
  }
  function getErrorUrl(id) {
    return ERROR_URL + id;
  }
  return exports;
}

/* harmony default export */ const m_error = ((/* unused pure expression or super */ null && (error)));
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/utils/error.js
/**
 * DevExtreme (esm/core/utils/error.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const utils_error = (error);

/***/ }),

/***/ 87951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* reexport safe */ _internal_core_utils_m_extend__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   a: () => (/* reexport safe */ _internal_core_utils_m_extend__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22999);
/**
 * DevExtreme (esm/core/utils/extend.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 48745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bc: () => (/* reexport safe */ _internal_core_utils_m_inflector__WEBPACK_IMPORTED_MODULE_0__.Bc),
/* harmony export */   I3: () => (/* reexport safe */ _internal_core_utils_m_inflector__WEBPACK_IMPORTED_MODULE_0__.I3),
/* harmony export */   Ns: () => (/* reexport safe */ _internal_core_utils_m_inflector__WEBPACK_IMPORTED_MODULE_0__.Ns),
/* harmony export */   PT: () => (/* reexport safe */ _internal_core_utils_m_inflector__WEBPACK_IMPORTED_MODULE_0__.PT),
/* harmony export */   _k: () => (/* reexport safe */ _internal_core_utils_m_inflector__WEBPACK_IMPORTED_MODULE_0__._k)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_inflector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65121);
/**
 * DevExtreme (esm/core/utils/inflector.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 72868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ai: () => (/* reexport */ adjust),
  df: () => (/* reexport */ fitIntoRange),
  r4: () => (/* reexport */ inRange),
  T0: () => (/* reexport */ multiplyInExponentialForm),
  _S: () => (/* reexport */ sign)
});

// UNUSED EXPORTS: getExponent, getExponentLength, getPrecision, getRemainderByDivision, getRoot, roundFloatPart, solveCubicEquation, trunc

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_math.js
/**
 * DevExtreme (esm/__internal/core/utils/m_math.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const sign = function (value) {
  if (0 === value) {
    return 0;
  }
  return value / Math.abs(value);
};
const fitIntoRange = function (value, minValue, maxValue) {
  const isMinValueUndefined = !minValue && 0 !== minValue;
  const isMaxValueUndefined = !maxValue && 0 !== maxValue;
  isMinValueUndefined && (minValue = !isMaxValueUndefined ? Math.min(value, maxValue) : value);
  isMaxValueUndefined && (maxValue = !isMinValueUndefined ? Math.max(value, minValue) : value);
  return Math.min(Math.max(value, minValue), maxValue);
};
const inRange = function (value, minValue, maxValue) {
  return value >= minValue && value <= maxValue;
};
function getExponent(value) {
  return Math.abs(parseInt(value.toExponential().split("e")[1], 10));
}
function getExponentialNotation(value) {
  const parts = value.toExponential().split("e");
  const mantissa = parseFloat(parts[0]);
  const exponent = parseInt(parts[1], 10);
  return {
    exponent: exponent,
    mantissa: mantissa
  };
}
function multiplyInExponentialForm(value, exponentShift) {
  const exponentialNotation = getExponentialNotation(value);
  return parseFloat(`${exponentialNotation.mantissa}e${exponentialNotation.exponent + exponentShift}`);
}
function isEdgeBug() {
  return "0.000300" !== 3e-4.toPrecision(3);
}
function adjust(value, interval) {
  let precision = getPrecision(interval || 0) + 2;
  const separatedValue = value.toString().split(".");
  const sourceValue = value;
  const absValue = Math.abs(value);
  let separatedAdjustedValue;
  const isExponentValue = (0,type/* isExponential */.O4)(value);
  const integerPart = absValue > 1 ? 10 : 0;
  if (1 === separatedValue.length) {
    return value;
  }
  if (!isExponentValue) {
    if ((0,type/* isExponential */.O4)(interval)) {
      precision = separatedValue[0].length + getExponent(interval);
    }
    value = absValue;
    value = value - Math.floor(value) + integerPart;
  }
  precision = isEdgeBug() && getExponent(value) > 6 || precision > 7 ? 15 : 7;
  if (!isExponentValue) {
    separatedAdjustedValue = parseFloat(value.toPrecision(precision)).toString().split(".");
    if (separatedAdjustedValue[0] === integerPart.toString()) {
      return parseFloat(`${separatedValue[0]}.${separatedAdjustedValue[1]}`);
    }
  }
  return parseFloat(sourceValue.toPrecision(precision));
}
function getPrecision(value) {
  const str = value.toString();
  if (str.indexOf(".") < 0) {
    return 0;
  }
  const mantissa = str.split(".");
  const positionOfDelimiter = mantissa[1].indexOf("e");
  return positionOfDelimiter >= 0 ? positionOfDelimiter : mantissa[1].length;
}
function getRoot(x, n) {
  if (x < 0 && n % 2 !== 1) {
    return NaN;
  }
  const y = Math.abs(x) ** (1 / n);
  return n % 2 === 1 && x < 0 ? -y : y;
}
function solveCubicEquation(a, b, c, d) {
  if (Math.abs(a) < 1e-8) {
    a = b;
    b = c;
    c = d;
    if (Math.abs(a) < 1e-8) {
      a = b;
      b = c;
      if (Math.abs(a) < 1e-8) {
        return [];
      }
      return [-b / a];
    }
    const D2 = b * b - 4 * a * c;
    if (Math.abs(D2) < 1e-8) {
      return [-b / (2 * a)];
    }
    if (D2 > 0) {
      return [(-b + Math.sqrt(D2)) / (2 * a), (-b - Math.sqrt(D2)) / (2 * a)];
    }
    return [];
  }
  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
  let roots;
  let u;
  if (Math.abs(p) < 1e-8) {
    roots = [getRoot(-q, 3)];
  } else if (Math.abs(q) < 1e-8) {
    roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
  } else {
    const D3 = q * q / 4 + p * p * p / 27;
    if (Math.abs(D3) < 1e-8) {
      roots = [-1.5 * q / p, 3 * q / p];
    } else if (D3 > 0) {
      u = getRoot(-q / 2 - Math.sqrt(D3), 3);
      roots = [u - p / (3 * u)];
    } else {
      u = 2 * Math.sqrt(-p / 3);
      const t = Math.acos(3 * q / p / u) / 3;
      const k = 2 * Math.PI / 3;
      roots = [u * Math.cos(t), u * Math.cos(t - k), u * Math.cos(t - 2 * k)];
    }
  }
  for (let i = 0; i < roots.length; i++) {
    roots[i] -= b / (3 * a);
  }
  return roots;
}
function trunc(value) {
  return Math.trunc ? Math.trunc(value) : value > 0 ? Math.floor(value) : Math.ceil(value);
}
function getRemainderByDivision(dividend, divider, digitsCount) {
  if (divider === parseInt(divider, 10)) {
    return dividend % divider;
  }
  const quotient = roundFloatPart(dividend / divider, digitsCount);
  return (quotient - parseInt(quotient, 10)) * divider;
}
function getExponentLength(value) {
  var _valueString$split$;
  const valueString = value.toString();
  return (null === (_valueString$split$ = valueString.split(".")[1]) || void 0 === _valueString$split$ ? void 0 : _valueString$split$.length) || parseInt(valueString.split("e-")[1], 10) || 0;
}
function roundFloatPart(value) {
  let digitsCount = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return parseFloat(value.toFixed(digitsCount));
}

;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/utils/math.js
/**
 * DevExtreme (esm/core/utils/math.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 96972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o8: () => (/* reexport */ clone),
  tm: () => (/* reexport */ deepExtendArraySafe),
  ap: () => (/* reexport */ orderEach)
});

// UNUSED EXPORTS: legacyAssign, newAssign

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/variable_wrapper.js + 1 modules
var variable_wrapper = __webpack_require__(94530);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_object.js
/**
 * DevExtreme (esm/__internal/core/utils/m_object.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const clone = function () {
  function Clone() {}
  return function (obj) {
    Clone.prototype = obj;
    return new Clone();
  };
}();
const orderEach = function (map, func) {
  const keys = [];
  let key;
  let i;
  for (key in map) {
    if (Object.prototype.hasOwnProperty.call(map, key)) {
      keys.push(key);
    }
  }
  keys.sort(function (x, y) {
    const isNumberX = (0,type/* isNumeric */.kf)(x);
    const isNumberY = (0,type/* isNumeric */.kf)(y);
    if (isNumberX && isNumberY) {
      return x - y;
    }
    if (isNumberX && !isNumberY) {
      return -1;
    }
    if (!isNumberX && isNumberY) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  for (i = 0; i < keys.length; i++) {
    key = keys[i];
    func(key, map[key]);
  }
};
const getDeepCopyTarget = item => {
  if ((0,type/* isObject */.Gv)(item)) {
    return Array.isArray(item) ? [] : {};
  }
  return item;
};
const legacyAssign = function (target, property, value, extendComplexObject, assignByReference, shouldCopyUndefined) {
  if (!assignByReference && variable_wrapper/* default */.A.isWrapped(target[property])) {
    variable_wrapper/* default */.A.assign(target[property], value);
  } else {
    target[property] = value;
  }
};
const newAssign = function (target, property, value, extendComplexObject, assignByReference, shouldCopyUndefined) {
  const goDeeper = extendComplexObject ? (0,type/* isObject */.Gv)(target) : (0,type/* isPlainObject */.Qd)(target);
  if (!assignByReference && variable_wrapper/* default */.A.isWrapped(target[property])) {
    variable_wrapper/* default */.A.assign(target[property], value);
  } else if (!assignByReference && Array.isArray(value)) {
    target[property] = value.map(item => deepExtendArraySafe(getDeepCopyTarget(item), item, extendComplexObject, assignByReference, shouldCopyUndefined));
  } else if (!assignByReference && goDeeper) {
    target[property] = deepExtendArraySafe(getDeepCopyTarget(value), value, extendComplexObject, assignByReference, shouldCopyUndefined, newAssign);
  } else {
    target[property] = value;
  }
};
const deepExtendArraySafe = function (target, changes, extendComplexObject, assignByReference, shouldCopyUndefined, useNewAssign) {
  let prevValue;
  let newValue;
  const assignFunc = useNewAssign ? newAssign : legacyAssign;
  for (const name in changes) {
    prevValue = target[name];
    newValue = changes[name];
    if ("__proto__" === name || "constructor" === name || target === newValue) {
      continue;
    }
    if ((0,type/* isPlainObject */.Qd)(newValue)) {
      const goDeeper = extendComplexObject ? (0,type/* isObject */.Gv)(prevValue) : (0,type/* isPlainObject */.Qd)(prevValue);
      newValue = deepExtendArraySafe(goDeeper ? prevValue : {}, newValue, extendComplexObject, assignByReference, shouldCopyUndefined);
    }
    const isDeepCopyArray = Array.isArray(newValue) && !assignByReference;
    const hasDifferentNewValue = (shouldCopyUndefined || void 0 !== newValue) && prevValue !== newValue || shouldCopyUndefined && void 0 === prevValue;
    if (isDeepCopyArray || hasDifferentNewValue) {
      assignFunc(target, name, newValue, extendComplexObject, assignByReference, shouldCopyUndefined);
    }
  }
  return target;
};

;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/utils/object.js
/**
 * DevExtreme (esm/core/utils/object.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 53306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o4: () => (/* reexport */ encodeHtml),
  GP: () => (/* reexport */ format),
  Im: () => (/* reexport */ isEmpty),
  oN: () => (/* reexport */ quadToObject)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/type.js
var type = __webpack_require__(72463);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_string.js
/**
 * DevExtreme (esm/__internal/core/utils/m_string.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

const encodeHtml = function () {
  const encodeRegExp = [new RegExp("&", "g"), new RegExp('"', "g"), new RegExp("'", "g"), new RegExp("<", "g"), new RegExp(">", "g")];
  return function (str) {
    return String(str).replace(encodeRegExp[0], "&amp;").replace(encodeRegExp[1], "&quot;").replace(encodeRegExp[2], "&#39;").replace(encodeRegExp[3], "&lt;").replace(encodeRegExp[4], "&gt;");
  };
}();
const splitQuad = function (raw) {
  switch (typeof raw) {
    case "string":
      return raw.split(/\s+/, 4);
    case "object":
      return [raw.x || raw.h || raw.left, raw.y || raw.v || raw.top, raw.x || raw.h || raw.right, raw.y || raw.v || raw.bottom];
    case "number":
      return [raw];
    default:
      return raw;
  }
};
const quadToObject = function (raw) {
  const quad = splitQuad(raw);
  let left = parseInt(quad && quad[0], 10);
  let top = parseInt(quad && quad[1], 10);
  let right = parseInt(quad && quad[2], 10);
  let bottom = parseInt(quad && quad[3], 10);
  if (!isFinite(left)) {
    left = 0;
  }
  if (!isFinite(top)) {
    top = left;
  }
  if (!isFinite(right)) {
    right = left;
  }
  if (!isFinite(bottom)) {
    bottom = top;
  }
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
};
function format(template) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  if ((0,type/* isFunction */.Tn)(template)) {
    return template(...values);
  }
  values.forEach((value, index) => {
    if ((0,type/* isString */.Kg)(value)) {
      value = value.replace(/\$/g, "$$$$");
    }
    const placeholderReg = new RegExp(`\\{${index}\\}`, "gm");
    template = template.replace(placeholderReg, value);
  });
  return template;
}
const isEmpty = function () {
  const SPACE_REGEXP = /\s/g;
  return function (text) {
    return !text || !text.replace(SPACE_REGEXP, "");
  };
}();
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/utils/string.js
/**
 * DevExtreme (esm/core/utils/string.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 72463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.$P),
/* harmony export */   Gv: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.Gv),
/* harmony export */   Kb: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.Kb),
/* harmony export */   Kg: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.Kg),
/* harmony export */   Lm: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.Lm),
/* harmony export */   NW: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.NW),
/* harmony export */   O4: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.O4),
/* harmony export */   O9: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.O9),
/* harmony export */   Qd: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.Qd),
/* harmony export */   RI: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.RI),
/* harmony export */   Tn: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.Tn),
/* harmony export */   kf: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.kf),
/* harmony export */   l6: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.l6),
/* harmony export */   sO: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.sO),
/* harmony export */   uF: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.uF),
/* harmony export */   xH: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.xH),
/* harmony export */   yL: () => (/* reexport safe */ _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__.yL)
/* harmony export */ });
/* harmony import */ var _internal_core_utils_m_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68135);
/**
 * DevExtreme (esm/core/utils/type.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 94530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ variable_wrapper)
});

// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/console.js
var console = __webpack_require__(85978);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/core/utils/dependency_injector.js + 1 modules
var dependency_injector = __webpack_require__(48613);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/__internal/core/utils/m_variable_wrapper.js
/**
 * DevExtreme (esm/__internal/core/utils/m_variable_wrapper.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


const variableWrapper = (0,dependency_injector/* default */.A)({
  isWrapped: function () {
    return false;
  },
  isWritableWrapped: function () {
    return false;
  },
  wrap: function (value) {
    return value;
  },
  unwrap: function (value) {
    return value;
  },
  assign: function () {
    console/* logger */.v.error("Method 'assign' should not be used for not wrapped variables. Use 'isWrapped' method for ensuring.");
  }
});

;// CONCATENATED MODULE: ./node_modules/devextreme/esm/core/utils/variable_wrapper.js
/**
 * DevExtreme (esm/core/utils/variable_wrapper.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const variable_wrapper = (variableWrapper);

/***/ }),

/***/ 21721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ fullVersion),
/* harmony export */   r: () => (/* binding */ version)
/* harmony export */ });
/**
 * DevExtreme (esm/core/version.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
const version = "25.1.4";
const fullVersion = "25.1.4";

/***/ }),

/***/ 13750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fH: () => (/* reexport */ loadMessages),
  Hg: () => (/* reexport */ locale)
});

// UNUSED EXPORTS: formatDate, formatMessage, formatNumber, parseDate, parseNumber

// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/core.js + 2 modules
var core = __webpack_require__(52826);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/message.js + 1 modules
var message = __webpack_require__(28708);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/number.js + 2 modules
var localization_number = __webpack_require__(29430);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/date.js + 2 modules
var localization_date = __webpack_require__(32206);
// EXTERNAL MODULE: ./node_modules/devextreme/esm/common/core/localization/currency.js
var currency = __webpack_require__(8514);
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/common/core/localization.js
/**
 * DevExtreme (esm/common/core/localization.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */





const locale = core/* default */.A.locale.bind(core/* default */.A);
const loadMessages = message/* default */.A.load.bind(message/* default */.A);
const formatMessage = message/* default */.A.format.bind(message/* default */.A);
const formatNumber = localization_number/* default */.A.format.bind(localization_number/* default */.A);
const parseNumber = localization_number/* default */.A.parse.bind(localization_number/* default */.A);
const formatDate = localization_date/* default */.A.format.bind(localization_date/* default */.A);
const parseDate = localization_date/* default */.A.parse.bind(localization_date/* default */.A);

function disableIntl() {
  if ("intl" === number.engine()) {
    number.resetInjection();
  }
  if ("intl" === date.engine()) {
    date.resetInjection();
  }
}
;// CONCATENATED MODULE: ./node_modules/devextreme/esm/localization.js
/**
 * DevExtreme (esm/localization.js)
 * Version: 25.1.4
 * Build date: Tue Aug 05 2025
 *
 * Copyright (c) 2012 - 2025 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


/***/ }),

/***/ 19047:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Globalize v1.7.0
 *
 * https://github.com/globalizejs/globalize
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-08-02T11:53Z
 */
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function (root, factory) {
  // UMD returnExports
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(31318), __webpack_require__(35213)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Cldr) {
  /**
   * A toString method that outputs meaningful values for objects or arrays and
   * still performs as fast as a plain string in case variable is string, or as
   * fast as `"" + number` in case variable is a number.
   * Ref: http://jsperf.com/my-stringify
   */
  var toString = function (variable) {
    return typeof variable === "string" ? variable : typeof variable === "number" ? "" + variable : JSON.stringify(variable);
  };

  /**
   * formatMessage( message, data )
   *
   * @message [String] A message with optional {vars} to be replaced.
   *
   * @data [Array or JSON] Object with replacing-variables content.
   *
   * Return the formatted message. For example:
   *
   * - formatMessage( "{0} second", [ 1 ] ); // 1 second
   *
   * - formatMessage( "{0}/{1}", ["m", "s"] ); // m/s
   *
   * - formatMessage( "{name} <{email}>", {
   *     name: "Foo",
   *     email: "bar@baz.qux"
   *   }); // Foo <bar@baz.qux>
   */
  var formatMessage = function (message, data) {
    // Replace {attribute}'s
    message = message.replace(/{[0-9a-zA-Z-_. ]+}/g, function (name) {
      name = name.replace(/^{([^}]*)}$/, "$1");
      return toString(data[name]);
    });
    return message;
  };
  var objectExtend = function () {
    var destination = arguments[0],
      sources = [].slice.call(arguments, 1);
    sources.forEach(function (source) {
      var prop;
      for (prop in source) {
        destination[prop] = source[prop];
      }
    });
    return destination;
  };
  var createError = function (code, message, attributes) {
    var error;
    message = code + (message ? ": " + formatMessage(message, attributes) : "");
    error = new Error(message);
    error.code = code;
    objectExtend(error, attributes);
    return error;
  };

  /**
   * Pushes part to parts array, concat two consecutive parts of the same type.
   */
  var partsPush = function (parts, type, value) {
    // Concat two consecutive parts of same type
    if (parts.length && parts[parts.length - 1].type === type) {
      parts[parts.length - 1].value += value;
      return;
    }
    parts.push({
      type: type,
      value: value
    });
  };

  /**
   * formatMessage( message, data )
   *
   * @message [String] A message with optional {vars} to be replaced.
   *
   * @data [Array or JSON] Object with replacing-variables content.
   *
   * Return the formatted message. For example:
   *
   * - formatMessage( "{0} second", [ 1 ] );
   * > [{type: "variable", value: "1", name: "0"}, {type: "literal", value: " second"}]
   *
   * - formatMessage( "{0}/{1}", ["m", "s"] );
   * > [
   *     { type: "variable", value: "m", name: "0" },
   *     { type: "literal", value: " /" },
   *     { type: "variable", value: "s", name: "1" }
   *   ]
   */
  var formatMessageToParts = function (message, data) {
    var lastOffset = 0,
      parts = [];

    // Create parts.
    message.replace(/{[0-9a-zA-Z-_. ]+}/g, function (nameIncludingBrackets, offset) {
      var name = nameIncludingBrackets.slice(1, -1);
      partsPush(parts, "literal", message.slice(lastOffset, offset));
      partsPush(parts, "variable", data[name]);
      parts[parts.length - 1].name = name;
      lastOffset += offset + nameIncludingBrackets.length;
    });

    // Skip empty ones such as `{ type: 'literal', value: '' }`.
    return parts.filter(function (part) {
      return part.value !== "";
    });
  };

  /**
   * Returns joined parts values.
   */
  var partsJoin = function (parts) {
    return parts.map(function (part) {
      return part.value;
    }).join("");
  };
  var runtimeStringify = function (args) {
    return JSON.stringify(args, function (_key, value) {
      if (value && value.runtimeKey) {
        return value.runtimeKey;
      }
      return value;
    });
  };

  // Based on http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
  var stringHash = function (str) {
    return [].reduce.call(str, function (hash, i) {
      var chr = i.charCodeAt(0);
      hash = (hash << 5) - hash + chr;
      return hash | 0;
    }, 0);
  };
  var runtimeKey = function (fnName, locale, args, argsStr) {
    var hash;
    argsStr = argsStr || runtimeStringify(args);
    hash = stringHash(fnName + locale + argsStr);
    return hash > 0 ? "a" + hash : "b" + Math.abs(hash);
  };
  var functionName = function (fn) {
    if (fn.name !== undefined) {
      return fn.name;
    }

    // fn.name is not supported by IE.
    var matches = /^function\s+([\w\$]+)\s*\(/.exec(fn.toString());
    if (matches && matches.length > 0) {
      return matches[1];
    }
  };
  var runtimeBind = function (args, cldr, fn, runtimeArgs) {
    var argsStr = runtimeStringify(args),
      fnName = functionName(fn),
      locale = cldr.locale;

    // If name of the function is not available, this is most likely due to uglification,
    // which most likely means we are in production, and runtimeBind here is not necessary.
    if (!fnName) {
      return fn;
    }
    fn.runtimeKey = runtimeKey(fnName, locale, null, argsStr);
    fn.generatorString = function () {
      return "Globalize(\"" + locale + "\")." + fnName + "(" + argsStr.slice(1, -1) + ")";
    };
    fn.runtimeArgs = runtimeArgs;
    return fn;
  };
  var validate = function (code, message, check, attributes) {
    if (!check) {
      throw createError(code, message, attributes);
    }
  };
  var alwaysArray = function (stringOrArray) {
    return Array.isArray(stringOrArray) ? stringOrArray : stringOrArray ? [stringOrArray] : [];
  };
  var validateCldr = function (path, value, options) {
    var skipBoolean;
    options = options || {};
    skipBoolean = alwaysArray(options.skip).some(function (pathRe) {
      return pathRe.test(path);
    });
    validate("E_MISSING_CLDR", "Missing required CLDR content `{path}`.", value || skipBoolean, {
      path: path
    });
  };
  var validateDefaultLocale = function (value) {
    validate("E_DEFAULT_LOCALE_NOT_DEFINED", "Default locale has not been defined.", value !== undefined, {});
  };
  var validateParameterPresence = function (value, name) {
    validate("E_MISSING_PARAMETER", "Missing required parameter `{name}`.", value !== undefined, {
      name: name
    });
  };

  /**
   * range( value, name, minimum, maximum )
   *
   * @value [Number].
   *
   * @name [String] name of variable.
   *
   * @minimum [Number]. The lowest valid value, inclusive.
   *
   * @maximum [Number]. The greatest valid value, inclusive.
   */
  var validateParameterRange = function (value, name, minimum, maximum) {
    validate("E_PAR_OUT_OF_RANGE", "Parameter `{name}` has value `{value}` out of range [{minimum}, {maximum}].", value === undefined || value >= minimum && value <= maximum, {
      maximum: maximum,
      minimum: minimum,
      name: name,
      value: value
    });
  };
  var validateParameterType = function (value, name, check, expected) {
    validate("E_INVALID_PAR_TYPE", "Invalid `{name}` parameter ({value}). {expected} expected.", check, {
      expected: expected,
      name: name,
      value: value
    });
  };
  var validateParameterTypeLocale = function (value, name) {
    validateParameterType(value, name, value === undefined || typeof value === "string" || value instanceof Cldr, "String or Cldr instance");
  };

  /**
   * Function inspired by jQuery Core, but reduced to our use case.
   */
  var isPlainObject = function (obj) {
    return obj !== null && "" + obj === "[object Object]";
  };
  var validateParameterTypePlainObject = function (value, name) {
    validateParameterType(value, name, value === undefined || isPlainObject(value), "Plain Object");
  };
  var alwaysCldr = function (localeOrCldr) {
    return localeOrCldr instanceof Cldr ? localeOrCldr : new Cldr(localeOrCldr);
  };

  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FRegular_Expressions
  var regexpEscape = function (string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };
  var stringPad = function (str, count, right) {
    var length;
    if (typeof str !== "string") {
      str = String(str);
    }
    for (length = str.length; length < count; length += 1) {
      str = right ? str + "0" : "0" + str;
    }
    return str;
  };
  function validateLikelySubtags(cldr) {
    cldr.once("get", validateCldr);
    cldr.get("supplemental/likelySubtags");
  }

  /**
   * [new] Globalize( locale|cldr )
   *
   * @locale [String]
   *
   * @cldr [Cldr instance]
   *
   * Create a Globalize instance.
   */
  function Globalize(locale) {
    if (!(this instanceof Globalize)) {
      return new Globalize(locale);
    }
    validateParameterPresence(locale, "locale");
    validateParameterTypeLocale(locale, "locale");
    this.cldr = alwaysCldr(locale);
    validateLikelySubtags(this.cldr);
  }

  /**
   * Globalize.load( json, ... )
   *
   * @json [JSON]
   *
   * Load resolved or unresolved cldr data.
   * Somewhat equivalent to previous Globalize.addCultureInfo(...).
   */
  Globalize.load = function () {
    // validations are delegated to Cldr.load().
    Cldr.load.apply(Cldr, arguments);
  };

  /**
   * Globalize.locale( [locale|cldr] )
   *
   * @locale [String]
   *
   * @cldr [Cldr instance]
   *
   * Set default Cldr instance if locale or cldr argument is passed.
   *
   * Return the default Cldr instance.
   */
  Globalize.locale = function (locale) {
    validateParameterTypeLocale(locale, "locale");
    if (arguments.length) {
      this.cldr = alwaysCldr(locale);
      validateLikelySubtags(this.cldr);
    }
    return this.cldr;
  };

  /**
   * Optimization to avoid duplicating some internal functions across modules.
   */
  Globalize._alwaysArray = alwaysArray;
  Globalize._createError = createError;
  Globalize._formatMessage = formatMessage;
  Globalize._formatMessageToParts = formatMessageToParts;
  Globalize._isPlainObject = isPlainObject;
  Globalize._objectExtend = objectExtend;
  Globalize._partsJoin = partsJoin;
  Globalize._partsPush = partsPush;
  Globalize._regexpEscape = regexpEscape;
  Globalize._runtimeBind = runtimeBind;
  Globalize._stringPad = stringPad;
  Globalize._validate = validate;
  Globalize._validateCldr = validateCldr;
  Globalize._validateDefaultLocale = validateDefaultLocale;
  Globalize._validateParameterPresence = validateParameterPresence;
  Globalize._validateParameterRange = validateParameterRange;
  Globalize._validateParameterTypePlainObject = validateParameterTypePlainObject;
  Globalize._validateParameterType = validateParameterType;
  return Globalize;
});

/***/ }),

/***/ 35468:
/***/ (() => {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function () {
  'use strict';

  // Exit early if we're not running in a browser.
  if (typeof window !== 'object') {
    return;
  }

  // Exit early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.
  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function () {
          return this.intersectionRatio > 0;
        }
      });
    }
    return;
  }

  /**
   * Returns the embedding frame element, if any.
   * @param {!Document} doc
   * @return {!Element}
   */
  function getFrameElement(doc) {
    try {
      return doc.defaultView && doc.defaultView.frameElement || null;
    } catch (e) {
      // Ignore the error.
      return null;
    }
  }

  /**
   * A local reference to the root document.
   */
  var document = function (startDoc) {
    var doc = startDoc;
    var frame = getFrameElement(doc);
    while (frame) {
      doc = frame.ownerDocument;
      frame = getFrameElement(doc);
    }
    return doc;
  }(window.document);

  /**
   * An IntersectionObserver registry. This registry exists to hold a strong
   * reference to IntersectionObserver instances currently observing a target
   * element. Without this registry, instances without another reference may be
   * garbage collected.
   */
  var registry = [];

  /**
   * The signal updater for cross-origin intersection. When not null, it means
   * that the polyfill is configured to work in a cross-origin mode.
   * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
   */
  var crossOriginUpdater = null;

  /**
   * The current cross-origin intersection. Only used in the cross-origin mode.
   * @type {DOMRect|ClientRect}
   */
  var crossOriginRect = null;

  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = ensureDOMRect(entry.rootBounds);
    this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
    this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
    this.isIntersecting = !!entry.intersectionRect;

    // Calculates the intersection ratio.
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;

    // Sets intersection ratio.
    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }

  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */
  function IntersectionObserver(callback, opt_options) {
    var options = opt_options || {};
    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }
    if (options.root && options.root.nodeType != 1 && options.root.nodeType != 9) {
      throw new Error('root must be a Document or Element');
    }

    // Binds and throttles `this._checkForIntersections`.
    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

    // Private properties.
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);

    // Public properties.
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');

    /** @private @const {!Array<!Document>} */
    this._monitoringDocuments = [];
    /** @private @const {!Array<function()>} */
    this._monitoringUnsubscribes = [];
  }

  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */
  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;

  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */
  IntersectionObserver.prototype.POLL_INTERVAL = null;

  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */
  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;

  /**
   * Sets up the polyfill in the cross-origin mode. The result is the
   * updater function that accepts two arguments: `boundingClientRect` and
   * `intersectionRect` - just as these fields would be available to the
   * parent via `IntersectionObserverEntry`. This function should be called
   * each time the iframe receives intersection information from the parent
   * window, e.g. via messaging.
   * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
   */
  IntersectionObserver._setupCrossOriginUpdater = function () {
    if (!crossOriginUpdater) {
      /**
       * @param {DOMRect|ClientRect} boundingClientRect
       * @param {DOMRect|ClientRect} intersectionRect
       */
      crossOriginUpdater = function (boundingClientRect, intersectionRect) {
        if (!boundingClientRect || !intersectionRect) {
          crossOriginRect = getEmptyRect();
        } else {
          crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
        }
        registry.forEach(function (observer) {
          observer._checkForIntersections();
        });
      };
    }
    return crossOriginUpdater;
  };

  /**
   * Resets the cross-origin mode.
   */
  IntersectionObserver._resetCrossOriginUpdater = function () {
    crossOriginUpdater = null;
    crossOriginRect = null;
  };

  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });
    if (isTargetAlreadyObserved) {
      return;
    }
    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }
    this._registerInstance();
    this._observationTargets.push({
      element: target,
      entry: null
    });
    this._monitorIntersections(target.ownerDocument);
    this._checkForIntersections();
  };

  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {
      return item.element != target;
    });
    this._unmonitorIntersections(target.ownerDocument);
    if (this._observationTargets.length == 0) {
      this._unregisterInstance();
    }
  };

  /**
   * Stops observing all target elements for intersection changes.
   */
  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];
    this._unmonitorAllIntersections();
    this._unregisterInstance();
  };

  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */
  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };

  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */
  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];
    return threshold.sort().filter(function (t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }
      return t !== a[i - 1];
    });
  };

  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */
  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }
      return {
        value: parseFloat(parts[1]),
        unit: parts[2]
      };
    });

    // Handles shorthand.
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };

  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @param {!Document} doc
   * @private
   */
  IntersectionObserver.prototype._monitorIntersections = function (doc) {
    var win = doc.defaultView;
    if (!win) {
      // Already destroyed.
      return;
    }
    if (this._monitoringDocuments.indexOf(doc) != -1) {
      // Already monitoring.
      return;
    }

    // Private state for monitoring.
    var callback = this._checkForIntersections;
    var monitoringInterval = null;
    var domObserver = null;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
    } else {
      addEvent(win, 'resize', callback, true);
      addEvent(doc, 'scroll', callback, true);
      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
        domObserver = new win.MutationObserver(callback);
        domObserver.observe(doc, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
    this._monitoringDocuments.push(doc);
    this._monitoringUnsubscribes.push(function () {
      // Get the window object again. When a friendly iframe is destroyed, it
      // will be null.
      var win = doc.defaultView;
      if (win) {
        if (monitoringInterval) {
          win.clearInterval(monitoringInterval);
        }
        removeEvent(win, 'resize', callback, true);
      }
      removeEvent(doc, 'scroll', callback, true);
      if (domObserver) {
        domObserver.disconnect();
      }
    });

    // Also monitor the parent.
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
    if (doc != rootDoc) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._monitorIntersections(frame.ownerDocument);
      }
    }
  };

  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */
  IntersectionObserver.prototype._unmonitorIntersections = function (doc) {
    var index = this._monitoringDocuments.indexOf(doc);
    if (index == -1) {
      return;
    }
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;

    // Check if any dependent targets are still remaining.
    var hasDependentTargets = this._observationTargets.some(function (item) {
      var itemDoc = item.element.ownerDocument;
      // Target is in this context.
      if (itemDoc == doc) {
        return true;
      }
      // Target is nested in this context.
      while (itemDoc && itemDoc != rootDoc) {
        var frame = getFrameElement(itemDoc);
        itemDoc = frame && frame.ownerDocument;
        if (itemDoc == doc) {
          return true;
        }
      }
      return false;
    });
    if (hasDependentTargets) {
      return;
    }

    // Unsubscribe.
    var unsubscribe = this._monitoringUnsubscribes[index];
    this._monitoringDocuments.splice(index, 1);
    this._monitoringUnsubscribes.splice(index, 1);
    unsubscribe();

    // Also unmonitor the parent.
    if (doc != rootDoc) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._unmonitorIntersections(frame.ownerDocument);
      }
    }
  };

  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */
  IntersectionObserver.prototype._unmonitorAllIntersections = function () {
    var unsubscribes = this._monitoringUnsubscribes.slice(0);
    this._monitoringDocuments.length = 0;
    this._monitoringUnsubscribes.length = 0;
    for (var i = 0; i < unsubscribes.length; i++) {
      unsubscribes[i]();
    }
  };

  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */
  IntersectionObserver.prototype._checkForIntersections = function () {
    if (!this.root && crossOriginUpdater && !crossOriginRect) {
      // Cross origin monitoring, but no initial data available yet.
      return;
    }
    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);
      var rootBounds = null;
      if (!this._rootContainsTarget(target)) {
        rootBounds = getEmptyRect();
      } else if (!crossOriginUpdater || this.root) {
        rootBounds = rootRect;
      }
      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootBounds,
        intersectionRect: intersectionRect
      });
      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);
    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };

  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} targetRect The bounding rect of the target.
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */
  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, targetRect, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;
    while (!atRoot && parent) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};

      // If the parent isn't displayed, an intersection can't happen.
      if (parentComputedStyle.display == 'none') return null;
      if (parent == this.root || parent.nodeType == /* DOCUMENT */9) {
        atRoot = true;
        if (parent == this.root || parent == document) {
          if (crossOriginUpdater && !this.root) {
            if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
              // A 0-size cross-origin intersection means no-intersection.
              parent = null;
              parentRect = null;
              intersectionRect = null;
            } else {
              parentRect = crossOriginRect;
            }
          } else {
            parentRect = rootRect;
          }
        } else {
          // Check if there's a frame that can be navigated to.
          var frame = getParentNode(parent);
          var frameRect = frame && getBoundingClientRect(frame);
          var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
          if (frameRect && frameIntersect) {
            parent = frame;
            parentRect = convertFromParentRect(frameRect, frameIntersect);
          } else {
            parent = null;
            intersectionRect = null;
          }
        }
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        var doc = parent.ownerDocument;
        if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      }

      // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
      }
      if (!intersectionRect) break;
      parent = parent && getParentNode(parent);
    }
    return intersectionRect;
  };

  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {ClientRect} The expanded root rect.
   * @private
   */
  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;
    if (this.root && !isDoc(this.root)) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var doc = isDoc(this.root) ? this.root : document;
      var html = doc.documentElement;
      var body = doc.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };

  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {DOMRect|ClientRect} rect The rect object to expand.
   * @return {ClientRect} The expanded rect.
   * @private
   */
  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };

  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */
  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;

    // Ignore unchanged ratios
    if (oldRatio === newRatio) return;
    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];

      // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.
      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };

  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */
  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };

  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */
  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
    return containsDeep(rootDoc, target) && (!this.root || rootDoc == target.ownerDocument);
  };

  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */
  IntersectionObserver.prototype._registerInstance = function () {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };

  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */
  IntersectionObserver.prototype._unregisterInstance = function () {
    var index = registry.indexOf(this);
    if (index != -1) registry.splice(index, 1);
  };

  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */
  function now() {
    return window.performance && performance.now && performance.now();
  }

  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */
  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }

  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }

  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detachEvent == 'function') {
      node.detachEvent('on' + event, fn);
    }
  }

  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object|?ClientRect} The intersection rect or undefined if no
   *     intersection is found.
   */
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    } || null;
  }

  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
   */
  function getBoundingClientRect(el) {
    var rect;
    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
      // Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }
    if (!rect) return getEmptyRect();

    // Older IE
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }

  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {ClientRect} The empty rect.
   */
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }

  /**
   * Ensure that the result has all of the necessary fields of the DOMRect.
   * Specifically this ensures that `x` and `y` fields are set.
   *
   * @param {?DOMRect|?ClientRect} rect
   * @return {?DOMRect}
   */
  function ensureDOMRect(rect) {
    // A `DOMRect` object has `x` and `y` fields.
    if (!rect || 'x' in rect) {
      return rect;
    }
    // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
    // for internally calculated Rect objects. For the purposes of
    // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
    // for these fields.
    return {
      top: rect.top,
      y: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height
    };
  }

  /**
   * Inverts the intersection and bounding rect from the parent (frame) BCR to
   * the local BCR space.
   * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
   * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
   * @return {ClientRect} The local root bounding rect for the parent's children.
   */
  function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
    var top = parentIntersectionRect.top - parentBoundingRect.top;
    var left = parentIntersectionRect.left - parentBoundingRect.left;
    return {
      top: top,
      left: left,
      height: parentIntersectionRect.height,
      width: parentIntersectionRect.width,
      bottom: top + parentIntersectionRect.height,
      right: left + parentIntersectionRect.width
    };
  }

  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent) return true;
      node = getParentNode(node);
    }
    return false;
  }

  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */
  function getParentNode(node) {
    var parent = node.parentNode;
    if (node.nodeType == /* DOCUMENT */9 && node != document) {
      // If this node is a document node, look for the embedding frame.
      return getFrameElement(node);
    }

    // If the parent has element that is assigned through shadow root slot
    if (parent && parent.assignedSlot) {
      parent = parent.assignedSlot.parentNode;
    }
    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }
    return parent;
  }

  /**
   * Returns true if `node` is a Document.
   * @param {!Node} node
   * @returns {boolean}
   */
  function isDoc(node) {
    return node && node.nodeType === 9;
  }

  // Exposes the constructors globally.
  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})();

/***/ }),

/***/ 96935:
/***/ (() => {

"use strict";


/**
 * @license Angular v<unknown>
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */
const global = globalThis;
// __Zone_symbol_prefix global can be used to override the default zone
// symbol prefix with a custom one if needed.
function __symbol__(name) {
  const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
  return symbolPrefix + name;
}
function initZone() {
  const performance = global['performance'];
  function mark(name) {
    performance && performance['mark'] && performance['mark'](name);
  }
  function performanceMeasure(name, label) {
    performance && performance['measure'] && performance['measure'](name, label);
  }
  mark('Zone');
  class ZoneImpl {
    // tslint:disable-next-line:require-internal-with-underscore
    static {
      this.__symbol__ = __symbol__;
    }
    static assertZonePatched() {
      if (global['Promise'] !== patches['ZoneAwarePromise']) {
        throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
      }
    }
    static get root() {
      let zone = ZoneImpl.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    // tslint:disable-next-line:require-internal-with-underscore
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        // `checkDuplicate` option is defined from global variable
        // so it works for all modules.
        // `ignoreDuplicate` can work for the specified module
        const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error('Already loaded patch: ' + name);
        }
      } else if (!global['__Zone_disable_' + name]) {
        const perfName = 'Zone:' + name;
        mark(perfName);
        patches[name] = fn(global, ZoneImpl, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone) return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec) throw new Error('ZoneSpec required!');
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== 'function') {
        throw new Error('Expecting function got: ' + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function () {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      }
      const zoneTask = task;
      // https://github.com/angular/zone.js/issues/778, sometimes eventTask
      // will run in notScheduled(canceled) state, we should not try to
      // run such kind of task but just return
      const {
        type,
        data: {
          isPeriodic = false,
          isRefreshable = false
        } = {}
      } = task;
      if (task.state === notScheduled && (type === eventTask || type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && zoneTask._transitionTo(running, scheduled);
      const previousTask = _currentTask;
      _currentTask = zoneTask;
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        if (type == macroTask && task.data && !isPeriodic && !isRefreshable) {
          task.cancelFn = undefined;
        }
        try {
          return this._zoneDelegate.invokeTask(this, zoneTask, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        // if the task's state is notScheduled or unknown, then it has already been cancelled
        // we should not reset the state to scheduled
        const state = task.state;
        if (state !== notScheduled && state !== unknown) {
          if (type == eventTask || isPeriodic || isRefreshable && state === scheduling) {
            reEntryGuard && zoneTask._transitionTo(scheduled, running, scheduling);
          } else {
            const zoneDelegates = zoneTask._zoneDelegates;
            this._updateTaskCount(zoneTask, -1);
            reEntryGuard && zoneTask._transitionTo(notScheduled, running, notScheduled);
            if (isRefreshable) {
              zoneTask._zoneDelegates = zoneDelegates;
            }
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        // check if the task was rescheduled, the newZone
        // should not be the children of the original zone
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        // should set task's state to unknown when scheduleTask throw error
        // because the err may from reschedule, so the fromState maybe notScheduled
        task._transitionTo(unknown, scheduling, notScheduled);
        // TODO: @JiaLiPassion, should we check the result from handleError?
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        // we have to check because internally the delegate can reschedule the task.
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        // if error occurs when cancelTask, transit the state to unknown
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = -1;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  }
  const DELEGATE_ZS = {
    name: '',
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    get zone() {
      return this._zone;
    }
    constructor(zone, parentDelegate, zoneSpec) {
      this._taskCounts = {
        'microTask': 0,
        'macroTask': 0,
        'eventTask': 0
      };
      this._zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this._zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this._zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this._zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this._zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this._zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this._zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this._zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
        // a case all task related interceptors must go through this ZD. We can't short circuit it.
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = this._zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this._zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new ZoneImpl(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        if (!returnTask) returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error('Task is missing scheduleFn.');
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error('Task is not cancelable');
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      // hasTask should not throw error so other ZoneDelegate
      // can still trigger hasTask callback
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error('More tasks executed then were scheduled.');
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts['microTask'] > 0,
          macroTask: counts['macroTask'] > 0,
          eventTask: counts['eventTask'] > 0,
          change: type
        };
        this.hasTask(this._zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      // tslint:disable-next-line:require-internal-with-underscore
      this._zone = null;
      this.runCount = 0;
      // tslint:disable-next-line:require-internal-with-underscore
      this._zoneDelegates = null;
      // tslint:disable-next-line:require-internal-with-underscore
      this._state = 'notScheduled';
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error('callback is not defined');
      }
      this.callback = callback;
      const self = this;
      // TODO: @JiaLiPassion options should have interface
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function () {
          return ZoneTask.invokeTask.call(global, self, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ''}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== 'undefined') {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  MICROTASK QUEUE
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const symbolSetTimeout = __symbol__('setTimeout');
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        // native Promise is not patchable, we need to use `then` directly
        // issue 1078
        nativeThen = nativeMicroTaskQueuePromise['then'];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    // if we are not running in any task, and there has not been anything scheduled
    // we must bootstrap the initial task creation by manually scheduling the drain
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      // We are not running in Task, so we need to kickstart the microtask queue.
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  BOOTSTRAP
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const NO_ZONE = {
    name: 'NO ZONE'
  };
  const notScheduled = 'notScheduled',
    scheduling = 'scheduling',
    scheduled = 'scheduled',
    running = 'running',
    canceling = 'canceling',
    unknown = 'unknown';
  const microTask = 'microTask',
    macroTask = 'macroTask',
    eventTask = 'eventTask';
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask: scheduleMicroTask,
    showUncaughtError: () => !ZoneImpl[__symbol__('ignoreConsoleErrorUncaughtError')],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => undefined,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => undefined,
    ObjectCreate: () => undefined,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask: nativeScheduleMicroTask
  };
  let _currentZoneFrame = {
    parent: null,
    zone: new ZoneImpl(null, null)
  };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {}
  performanceMeasure('Zone', 'Zone');
  return ZoneImpl;
}
function loadZone() {
  // if global['Zone'] already exists (maybe zone.js was already loaded or
  // some other lib also registered a global object named Zone), we may need
  // to throw an error, but sometimes user may not want this error.
  // For example,
  // we have two web pages, page1 includes zone.js, page2 doesn't.
  // and the 1st time user load page1 and page2, everything work fine,
  // but when user load page2 again, error occurs because global['Zone'] already exists.
  // so we add a flag to let user choose whether to throw this error or not.
  // By default, if existing Zone is from zone.js, we will not throw the error.
  const global = globalThis;
  const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
  if (global['Zone'] && (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function')) {
    throw new Error('Zone already loaded.');
  }
  // Initialize global `Zone` constant.
  global['Zone'] ??= initZone();
  return global['Zone'];
}

/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = __symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = __symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** Zone symbol prefix string const. */
const ZONE_SYMBOL_PREFIX = __symbol__('');
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = __symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || globalThis;
const REMOVE_ATTRIBUTE = 'removeAttribute';
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor['name'];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = (delegate => {
        const patched = function () {
          return delegate.apply(this, bindArguments(arguments, source + '.' + name));
        };
        attachOriginToPatched(patched, delegate);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && _global.process.toString() === '[object process]';
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' && _global.process.toString() === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames$1 = {};
const enableBeforeunloadSymbol = zoneSymbol('enable_beforeunload');
const wrapFn = function (event) {
  // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  // event will be undefined, so we need to use window.event
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === 'error') {
    // window.onerror have different signature
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
    // and onerror callback will prevent default when callback return true
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (
    // https://github.com/angular/angular/issues/47579
    // https://www.w3.org/TR/2011/WD-html5-20110525/history.html#beforeunloadevent
    // This is the only specific case we should check for. The spec defines that the
    // `returnValue` attribute represents the message to show the user. When the event
    // is created, this attribute must be set to the empty string.
    event.type === 'beforeunload' &&
    // To prevent any breaking changes resulting from this change, given that
    // it was already causing a significant number of failures in G3, we have hidden
    // that behavior behind a global configuration flag. Consumers can enable this
    // flag explicitly if they want the `beforeunload` event to be handled as defined
    // in the specification.
    _global[enableBeforeunloadSymbol] &&
    // The IDL event definition is `attribute DOMString returnValue`, so we check whether
    // `typeof result` is a string.
    typeof result === 'string') {
      event.returnValue = result;
    } else if (result != undefined && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    // when patch window object, use prototype to check prop exist or not
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  }
  // if the descriptor not exists or is not configurable
  // just return
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  // slice(2) cuz 'onclick' -> 'click', etc
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
  }
  desc.set = function (newValue) {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === 'function') {
      target.removeEventListener(eventName, wrapFn);
    }
    // issue #978, when onload handler was added before loading zone.js
    // we should remove it with originalDescSet
    originalDescSet && originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === 'function') {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  // The getter would return undefined for unassigned properties but the default value of an
  // unassigned property is null
  desc.get = function () {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      // result will be null when use inline event attribute,
      // such as <button onclick="func();">OK</button>
      // because the onclick function is internal raw uncompiled handler
      // the onclick will be evaluated when first time event was triggered or
      // the property is accessed, https://github.com/angular/zone.js/issues/525
      // so we should use original native get to retrieve the handler
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, 'on' + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass) return;
  // keep original class in global
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function () {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error('Arg list too long.');
    }
  };
  // attach original delegate to patched function
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function () {});
  let prop;
  for (prop in instance) {
    // https://bugs.webkit.org/show_bug.cgi?id=44721
    if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
    (function (prop) {
      if (typeof instance[prop] === 'function') {
        _global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop, {
          set: function (fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
              // keep callback in wrapped function so we can
              // use it in Function.prototype.toString to return
              // the native one.
              attachOriginToPatched(this[originalInstanceKey][prop], fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function () {
            return this[originalInstanceKey][prop];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function () {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function () {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, delegate => function (self, args) {
    const meta = metaCreator(self, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      // cause an error by calling it directly.
      return delegate.apply(self, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
      return true;
    }
  } catch (error) {}
  return false;
}
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {}
  return ieOrEdge;
}
function isFunction(value) {
  return typeof value === 'function';
}
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// Note that passive event listeners are now supported by most modern browsers,
// including Chrome, Firefox, Safari, and Edge. There's a pending change that
// would remove support for legacy browsers by zone.js. Removing `passiveSupported`
// from the codebase will reduce the final code size for existing apps that still use zone.js.
let passiveSupported = false;
if (typeof window !== 'undefined') {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true;
      }
    });
    // Note: We pass the `options` object as the event handler too. This is not compatible with the
    // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
    // without an actual handler.
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
const zoneSymbolEventNames = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
  const PREPEND_EVENT_LISTENER = 'prependListener';
  const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
  const invokeTask = function (task, target, event) {
    // for better performance, check isRemoved which is set
    // by removeEventListener
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === 'object' && delegate.handleEvent) {
      // create the bind version of handleEvent when invoke
      task.callback = event => delegate.handleEvent(event);
      task.originalDelegate = delegate;
    }
    // invoke static task.invoke
    // need to try/catch error here, otherwise, the error in one event listener
    // will break the executions of the other event listeners. Also error will
    // not remove the event listener when `once` options is true.
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === 'object' && options.once) {
      // if options.once is true, after invoke once remove listener here
      // only browser need to do this, nodejs eventEmitter will cal removeListener
      // inside EventEmitter.once
      const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
      return;
    }
    // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190
    const target = context || event.target || _global;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      // Since there is only one error, we don't need to schedule microTask
      // to throw the error.
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  // global shared zoneAwareCallback to handle all event callback with capture = false
  const globalZoneAwareCallback = function (event) {
    return globalCallback(this, event, false);
  };
  // global shared zoneAwareCallback to handle all event callback with capture = true
  const globalZoneAwareCaptureCallback = function (event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions && patchOptions.useG !== undefined) {
      useGlobalCallback = patchOptions.useG;
    }
    const validateHandler = patchOptions && patchOptions.vh;
    let checkDuplicate = true;
    if (patchOptions && patchOptions.chkDup !== undefined) {
      checkDuplicate = patchOptions.chkDup;
    }
    let returnTarget = false;
    if (patchOptions && patchOptions.rt !== undefined) {
      returnTarget = patchOptions.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions && patchOptions.eventNameToString;
    // We use a shared global `taskData` to pass data for `scheduleEventTask`,
    // eliminating the need to create a new object solely for passing data.
    // WARNING: This object has a static lifetime, meaning it is not created
    // each time `addEventListener` is called. It is instantiated only once
    // and captured by reference inside the `addEventListener` and
    // `removeEventListener` functions. Do not add any new properties to this
    // object, as doing so would necessitate maintaining the information
    // between `addEventListener` calls.
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions && patchOptions.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
    }
    /**
     * This util function will build an option object with passive option
     * to handle all possible input from the user.
     */
    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === 'object' && options) {
        // doesn't support passive but user want to pass an object as options.
        // this will not work on some old browser, so we just pass a boolean
        // as useCapture parameter
        return !!options.capture;
      }
      if (!passiveSupported || !passive) {
        return options;
      }
      if (typeof options === 'boolean') {
        return {
          capture: options,
          passive: true
        };
      }
      if (!options) {
        return {
          passive: true
        };
      }
      if (typeof options === 'object' && options.passive !== false) {
        return {
          ...options,
          passive: true
        };
      }
      return options;
    }
    const customScheduleGlobal = function (task) {
      // if there is already a task for the eventName + capture,
      // just return, because we use the shared globalZoneAwareCallback here.
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    /**
     * In the context of events and listeners, this function will be
     * called at the end by `cancelTask`, which, in turn, calls `task.cancelFn`.
     * Cancelling a task is primarily used to remove event listeners from
     * the task target.
     */
    const customCancelGlobal = function (task) {
      // if task is not marked as isRemoved, this call is directly
      // from Zone.prototype.cancelTask, we should remove the task
      // from tasksList of target first
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              // set isRemoved to data for faster invokeTask check
              task.isRemoved = true;
              if (task.removeAbortListener) {
                task.removeAbortListener();
                task.removeAbortListener = null;
              }
              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      // if all tasks for the eventName + capture have gone,
      // we will really remove the global event callback,
      // if not, return
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function (task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function (task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function (task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function (task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
    };
    const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
    const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
    function copyEventListenerOptions(options) {
      if (typeof options === 'object' && options !== null) {
        // We need to destructure the target `options` object since it may
        // be frozen or sealed (possibly provided implicitly by a third-party
        // library), or its properties may be readonly.
        const newOptions = {
          ...options
        };
        // The `signal` option was recently introduced, which caused regressions in
        // third-party scenarios where `AbortController` was directly provided to
        // `addEventListener` as options. For instance, in cases like
        // `document.addEventListener('keydown', callback, abortControllerInstance)`,
        // which is valid because `AbortController` includes a `signal` getter, spreading
        // `{...options}` wouldn't copy the `signal`. Additionally, using `Object.create`
        // isn't feasible since `AbortController` is a built-in object type, and attempting
        // to create a new object directly with it as the prototype might result in
        // unexpected behavior.
        if (options.signal) {
          newOptions.signal = options.signal;
        }
        return newOptions;
      }
      return options;
    }
    const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
      return function () {
        const target = this || _global;
        let eventName = arguments[0];
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === 'uncaughtException') {
          // don't patch uncaughtException of nodejs to prevent endless loop
          return nativeListener.apply(this, arguments);
        }
        // don't create the bind delegate function for handleEvent
        // case here to improve addEventListener performance
        // we will create the bind delegate when invoke
        let isHandleEvent = false;
        if (typeof delegate !== 'function') {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isHandleEvent = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = copyEventListenerOptions(buildEventListenerOptions(arguments[2], passive));
        const signal = options?.signal;
        if (signal?.aborted) {
          // the signal is an aborted one, just return without attaching the event listener.
          return;
        }
        if (unpatchedEvents) {
          // check unpatched list
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        const once = options && typeof options === 'object' ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          // already have task registered
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                // same callback, same capture, same event name, just return
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor['name'];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        // In the code below, `options` should no longer be reassigned; instead, it
        // should only be mutated. This is because we pass that object to the native
        // `addEventListener`.
        // It's generally recommended to use the same object reference for options.
        // This ensures consistency and avoids potential issues.
        taskData.options = options;
        if (once) {
          // When using `addEventListener` with the `once` option, we don't pass
          // the `once` option directly to the native `addEventListener` method.
          // Instead, we keep the `once` setting and handle it ourselves.
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
        // keep taskData into data to allow onScheduleEventTask to access the task information
        if (data) {
          data.taskData = taskData;
        }
        if (signal) {
          // When using `addEventListener` with the `signal` option, we don't pass
          // the `signal` option directly to the native `addEventListener` method.
          // Instead, we keep the `signal` setting and handle it ourselves.
          taskData.options.signal = undefined;
        }
        // The `scheduleEventTask` function will ultimately call `customScheduleGlobal`,
        // which in turn calls the native `addEventListener`. This is why `taskData.options`
        // is updated before scheduling the task, as `customScheduleGlobal` uses
        // `taskData.options` to pass it to the native `addEventListener`.
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        if (signal) {
          // after task is scheduled, we need to store the signal back to task.options
          taskData.options.signal = signal;
          // Wrapping `task` in a weak reference would not prevent memory leaks. Weak references are
          // primarily used for preventing strong references cycles. `onAbort` is always reachable
          // as it's an event listener, so its closure retains a strong reference to the `task`.
          const onAbort = () => task.zone.cancelTask(task);
          nativeListener.call(signal, 'abort', onAbort, {
            once: true
          });
          // We need to remove the `abort` listener when the event listener is going to be removed,
          // as it creates a closure that captures `task`. This closure retains a reference to the
          // `task` object even after it goes out of scope, preventing `task` from being garbage
          // collected.
          task.removeAbortListener = () => signal.removeEventListener('abort', onAbort);
        }
        // should clear taskData.target to avoid memory leak
        // issue, https://github.com/angular/angular/issues/20442
        taskData.target = null;
        // need to clear up taskData because it is a global object
        if (data) {
          data.taskData = null;
        }
        // have to save those information to task in case
        // application may call task.zone.cancelTask() directly
        if (once) {
          taskData.options.once = true;
        }
        if (!(!passiveSupported && typeof task.options === 'boolean')) {
          // if not support passive, and we pass an option object
          // to addEventListener, we should save the options to task
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isHandleEvent) {
          // save original delegate for compare to check duplicate
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      // `existingTasks` may not exist if the `addEventListener` was called before
      // it was patched by zone.js. Please refer to the attached issue for
      // clarification, particularly after the `if` condition, before calling
      // the native `removeEventListener`.
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            // set isRemoved to data for faster invokeTask check
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              // all tasks for the eventName + capture have gone,
              // remove globalZoneAwareCallback and remove the task cache from target
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              // in the target, we have an event listener which is added by on_property
              // such as target.onclick = function() {}, so we need to clear this internal
              // property too if all delegates with capture=false were removed
              // https:// github.com/angular/angular/issues/31643
              // https://github.com/angular/angular/issues/54581
              if (!capture && typeof eventName === 'string') {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                target[onPropertySymbol] = null;
              }
            }
            // In all other conditions, when `addEventListener` is called after being
            // patched by zone.js, we would always find an event task on the `EventTarget`.
            // This will trigger `cancelFn` on the `existingTask`, leading to `customCancelGlobal`,
            // which ultimately removes an event listener and cleans up the abort listener
            // (if an `AbortSignal` was provided when scheduling a task).
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      // https://github.com/angular/zone.js/issues/930
      // We may encounter a situation where the `addEventListener` was
      // called on the event target before zone.js is loaded, resulting
      // in no task being stored on the event target due to its invocation
      // of the native implementation. In this scenario, we simply need to
      // invoke the native `removeEventListener`.
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          // in nodejs EventEmitter, removeListener event is
          // used for monitoring the removeListener call,
          // so just keep removeListener eventListener until
          // all other eventListeners are removed
          if (evtName && evtName !== 'removeListener') {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        // remove removeListener listener finally
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
      } else {
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    // for native toString patch
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global, api) {
  const Event = global['Event'];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, 'stopImmediatePropagation', delegate => function (self, args) {
      self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      // we need to call the native stopImmediatePropagation
      // in case in some hybrid application, some part of
      // application will be controlled by zone, some are not
      delegate && delegate.apply(self, args);
    });
  }
}

/**
 * @fileoverview
 * @suppress {missingRequire}
 */
function patchQueueMicrotask(global, api) {
  api.patchMethod(global, 'queueMicrotask', delegate => {
    return function (self, args) {
      Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
    };
  });
}

/**
 * @fileoverview
 * @suppress {missingRequire}
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function () {
      return task.invoke.apply(this, arguments);
    };
    const handleOrId = setNative.apply(window, data.args);
    // Whlist on Node.js when get can the ID by using `[Symbol.toPrimitive]()` we do
    // to this so that we do not cause potentally leaks when using `setTimeout`
    // since this can be periodic when using `.refresh`.
    if (isNumber(handleOrId)) {
      data.handleId = handleOrId;
    } else {
      data.handle = handleOrId;
      // On Node.js a timeout and interval can be restarted over and over again by using the `.refresh` method.
      data.isRefreshable = isFunction(handleOrId.refresh);
    }
    return task;
  }
  function clearTask(task) {
    const {
      handle,
      handleId
    } = task.data;
    return clearNative.call(window, handle ?? handleId);
  }
  setNative = patchMethod(window, setName, delegate => function (self, args) {
    if (isFunction(args[0])) {
      const options = {
        isRefreshable: false,
        isPeriodic: nameSuffix === 'Interval',
        delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
        args: args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          // issue-934, task will be cancelled
          // even it is a periodic task such as
          // setInterval
          // https://github.com/angular/angular/issues/40387
          // Cleanup tasksByHandleId should be handled before scheduleTask
          // Since some zoneSpec may intercept and doesn't trigger
          // scheduleFn(scheduleTask) provided here.
          const {
            handle,
            handleId,
            isPeriodic,
            isRefreshable
          } = options;
          if (!isPeriodic && !isRefreshable) {
            if (handleId) {
              // in non-nodejs env, we remove timerId
              // from local cache
              delete tasksByHandleId[handleId];
            } else if (handle) {
              // Node returns complex objects as handleIds
              // we remove task reference from timer object
              handle[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      // Node.js must additionally support the ref and unref functions.
      const {
        handleId,
        handle,
        isRefreshable,
        isPeriodic
      } = task.data;
      if (handleId) {
        // for non nodejs env, we save handleId: task
        // mapping in local cache for clearTimeout
        tasksByHandleId[handleId] = task;
      } else if (handle) {
        // for nodejs env, we save task
        // reference in timerId Object for clearTimeout
        handle[taskSymbol] = task;
        if (isRefreshable && !isPeriodic) {
          const originalRefresh = handle.refresh;
          handle.refresh = function () {
            const {
              zone,
              state
            } = task;
            if (state === 'notScheduled') {
              task._state = 'scheduled';
              zone._updateTaskCount(task, 1);
            } else if (state === 'running') {
              task._state = 'scheduling';
            }
            return originalRefresh.call(this);
          };
        }
      }
      return handle ?? handleId ?? task;
    } else {
      // cause an error by calling it directly.
      return delegate.apply(window, args);
    }
  });
  clearNative = patchMethod(window, cancelName, delegate => function (self, args) {
    const id = args[0];
    let task;
    if (isNumber(id)) {
      // non nodejs env.
      task = tasksByHandleId[id];
      delete tasksByHandleId[id];
    } else {
      // nodejs env ?? other environments.
      task = id?.[taskSymbol];
      if (task) {
        id[taskSymbol] = null;
      } else {
        task = id;
      }
    }
    if (task?.type) {
      if (task.cancelFn) {
        // Do not cancel already canceled functions
        task.zone.cancelTask(task);
      }
    } else {
      // cause an error by calling it directly.
      delegate.apply(window, args);
    }
  });
}
function patchCustomElements(_global, api) {
  const {
    isBrowser,
    isMix
  } = api.getGlobalObjects();
  if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
    return;
  }
  // https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-lifecycle-callbacks
  const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback', 'formAssociatedCallback', 'formDisabledCallback', 'formResetCallback', 'formStateRestoreCallback'];
  api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}
function eventTargetPatch(_global, api) {
  if (Zone[api.symbol('patchEventTarget')]) {
    // EventTarget is already patched.
    return;
  }
  const {
    eventNames,
    zoneSymbolEventNames,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX
  } = api.getGlobalObjects();
  //  predefine all __zone_symbol__ + eventName + true/false string
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR;
    const trueEventName = eventName + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }
  const EVENT_TARGET = _global['EventTarget'];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global, api) {
  api.patchEventPrototype(global, api);
}

/**
 * @fileoverview
 * @suppress {globalThis}
 */
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter(ip => ip.target === target);
  if (!tip || tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  // check whether target is available, sometimes target will be undefined
  // because different browser or some 3rd party plugin.
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
/**
 * Get all event name properties which the event name startsWith `on`
 * from the target object itself, inherited properties are not considered.
 */
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter(name => name.startsWith('on') && name.length > 2).map(name => name.substring(2));
}
function propertyDescriptorPatch(api, _global) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol('patchEvents')]) {
    // events are already been patched by legacy patch.
    return;
  }
  const ignoreProperties = _global['__Zone_ignore_on_properties'];
  // for browsers that we can patch the descriptor:  Chrome & Firefox
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow = window;
    patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
    const ignoreErrorProperties = isIE() ? [{
      target: internalWindow,
      ignoreProperties: ['error']
    }] : [];
    // in IE/Edge, onProp not exist in window object, but in WindowPrototype
    // so we need to pass WindowPrototype to check onProp exist or not
    patchFilteredProperties(internalWindow, getOnEventNames(internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
  }
  patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global[patchTargets[i]];
    target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}

/**
 * @fileoverview
 * @suppress {missingRequire}
 */
function patchBrowser(Zone) {
  Zone.__load_patch('legacy', global => {
    const legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
      legacyPatch();
    }
  });
  Zone.__load_patch('timers', global => {
    const set = 'set';
    const clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
  });
  Zone.__load_patch('requestAnimationFrame', global => {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
  });
  Zone.__load_patch('blocking', (global, Zone) => {
    const blockingMethods = ['alert', 'prompt', 'confirm'];
    for (let i = 0; i < blockingMethods.length; i++) {
      const name = blockingMethods[i];
      patchMethod(global, name, (delegate, symbol, name) => {
        return function (s, args) {
          return Zone.current.run(delegate, global, args, name);
        };
      });
    }
  });
  Zone.__load_patch('EventTarget', (global, Zone, api) => {
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });
  Zone.__load_patch('MutationObserver', (global, Zone, api) => {
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
  });
  Zone.__load_patch('IntersectionObserver', (global, Zone, api) => {
    patchClass('IntersectionObserver');
  });
  Zone.__load_patch('FileReader', (global, Zone, api) => {
    patchClass('FileReader');
  });
  Zone.__load_patch('on_property', (global, Zone, api) => {
    propertyDescriptorPatch(api, global);
  });
  Zone.__load_patch('customElements', (global, Zone, api) => {
    patchCustomElements(global, api);
  });
  Zone.__load_patch('XHR', (global, Zone) => {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    const XHR_TASK = zoneSymbol('xhrTask');
    const XHR_SYNC = zoneSymbol('xhrSync');
    const XHR_LISTENER = zoneSymbol('xhrListener');
    const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    const XHR_URL = zoneSymbol('xhrURL');
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
      const XMLHttpRequest = window['XMLHttpRequest'];
      if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return;
      }
      const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
      function findPendingTask(target) {
        return target[XHR_TASK];
      }
      let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      if (!oriAddListener) {
        const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
          const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }
      const READY_STATE_CHANGE = 'readystatechange';
      const SCHEDULED = 'scheduled';
      function scheduleTask(task) {
        const data = task.data;
        const target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false;
        // remove existing event listener
        const listener = target[XHR_LISTENER];
        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }
        const newListener = target[XHR_LISTENER] = () => {
          if (target.readyState === target.DONE) {
            // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
            // readyState=4 multiple times, so we need to check task state here
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              // check whether the xhr has registered onload listener
              // if that is the case, the task should invoke after all
              // onload listeners finish.
              // Also if the request failed without response (status = 0), the load event handler
              // will not be triggered, in that case, we should also invoke the placeholder callback
              // to close the XMLHttpRequest::send macroTask.
              // https://github.com/angular/angular/issues/38795
              const loadTasks = target[Zone.__symbol__('loadfalse')];
              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                const oriInvoke = task.invoke;
                task.invoke = function () {
                  // need to load the tasks again, because in other
                  // load listener, they may remove themselves
                  const loadTasks = target[Zone.__symbol__('loadfalse')];
                  for (let i = 0; i < loadTasks.length; i++) {
                    if (loadTasks[i] === task) {
                      loadTasks.splice(i, 1);
                    }
                  }
                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke.call(task);
                  }
                };
                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              // error occurs when xhr.send()
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };
        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        const storedTask = target[XHR_TASK];
        if (!storedTask) {
          target[XHR_TASK] = task;
        }
        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }
      function placeholderCallback() {}
      function clearTask(task) {
        const data = task.data;
        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
        // to prevent it from firing. So instead, we store info for the event listener.
        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }
      const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
        self[XHR_SYNC] = args[2] == false;
        self[XHR_URL] = args[1];
        return openNative.apply(self, args);
      });
      const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
      const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
      const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
      const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
        if (Zone.current[fetchTaskScheduling] === true) {
          // a fetch is scheduling, so we are using xhr to polyfill fetch
          // and because we already schedule macroTask for fetch, we should
          // not schedule a macroTask for xhr again
          return sendNative.apply(self, args);
        }
        if (self[XHR_SYNC]) {
          // if the XHR is sync there is no task to schedule, just execute the code.
          return sendNative.apply(self, args);
        } else {
          const options = {
            target: self,
            url: self[XHR_URL],
            isPeriodic: false,
            args: args,
            aborted: false
          };
          const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
          if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
            // xhr request throw error when send
            // we should invoke task instead of leaving a scheduled
            // pending macroTask
            task.invoke();
          }
        }
      });
      const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
        const task = findPendingTask(self);
        if (task && typeof task.type == 'string') {
          // If the XHR has already completed, do nothing.
          // If the XHR has already been aborted, do nothing.
          // Fix #569, call abort multiple times before done will cause
          // macroTask task count be negative number
          if (task.cancelFn == null || task.data && task.data.aborted) {
            return;
          }
          task.zone.cancelTask(task);
        } else if (Zone.current[fetchTaskAborting] === true) {
          // the abort is called from fetch polyfill, we need to call native abort of XHR.
          return abortNative.apply(self, args);
        }
        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
        // task
        // to cancel. Do nothing.
      });
    }
  });
  Zone.__load_patch('geolocation', global => {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
      patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
  });
  Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
      return function (e) {
        const eventTasks = findEventTasks(global, evtName);
        eventTasks.forEach(eventTask => {
          // windows has added unhandledrejection event listener
          // trigger the event listener
          const PromiseRejectionEvent = global['PromiseRejectionEvent'];
          if (PromiseRejectionEvent) {
            const evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }
    if (global['PromiseRejectionEvent']) {
      Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
      Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
    }
  });
  Zone.__load_patch('queueMicrotask', (global, Zone, api) => {
    patchQueueMicrotask(global, api);
  });
}
function patchPromise(Zone) {
  Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
    const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        const className = obj.constructor && obj.constructor.name;
        return (className ? className : '') + ': ' + JSON.stringify(obj);
      }
      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__ = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] !== false;
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    const creationTrace = '__creationTrace__';
    api.onUnhandledError = e => {
      if (api.showUncaughtError()) {
        const rejection = e && e.rejection;
        if (rejection) {
          console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
        } else {
          console.error(e);
        }
      }
    };
    api.microtaskDrainDone = () => {
      while (_uncaughtPromiseErrors.length) {
        const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
        try {
          uncaughtPromiseError.zone.runGuarded(() => {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }
            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);
      try {
        const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
        if (typeof handler === 'function') {
          handler.call(this, e);
        }
      } catch (err) {}
    }
    function isThenable(value) {
      return value && value.then;
    }
    function forwardResolution(value) {
      return value;
    }
    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__('state');
    const symbolValue = __symbol__('value');
    const symbolFinally = __symbol__('finally');
    const symbolParentPromiseValue = __symbol__('parentPromiseValue');
    const symbolParentPromiseState = __symbol__('parentPromiseState');
    const source = 'Promise.then';
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
      return v => {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        }
        // Do not return value or you will break the Promise spec.
      };
    }
    const once = function () {
      let wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function () {
          if (wasCalled) {
            return;
          }
          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };
    const TYPE_ERROR = 'Promise resolved with itself';
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
      const onceWrapper = once();
      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }
      if (promise[symbolState] === UNRESOLVED) {
        // should only get value.then once based on promise spec.
        let then = null;
        try {
          if (typeof value === 'object' || typeof value === 'function') {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
          return promise;
        }
        // if (value instanceof ZoneAwarePromise) {
        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === 'function') {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(() => {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          const queue = promise[symbolValue];
          promise[symbolValue] = value;
          if (promise[symbolFinally] === symbolFinally) {
            // the promise is generated by Promise.prototype.finally
            if (state === RESOLVED) {
              // the state is resolved, should ignore the value
              // and use parent promise value
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          }
          // record task information in value when error occurs, so we can
          // do some additional work such as render longStackTrace
          if (state === REJECTED && value instanceof Error) {
            // check if longStackTraceZone is here
            const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
            if (trace) {
              // only keep the long stack trace into error when in longStackTraceZone
              ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }
          for (let i = 0; i < queue.length;) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }
          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            let uncaughtPromiseError = value;
            try {
              // Here we throws a new Error to print more readable error log
              // and if the value is not an error, zone.js builds an `Error`
              // Object here to attach the stack information.
              throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
            } catch (err) {
              uncaughtPromiseError = err;
            }
            if (isDisableWrappingUncaughtPromiseRejection) {
              // If disable wrapping uncaught promise reject
              // use the value instead of wrapping it.
              uncaughtPromiseError.throwOriginal = true;
            }
            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone.current;
            uncaughtPromiseError.task = Zone.currentTask;
            _uncaughtPromiseErrors.push(uncaughtPromiseError);
            api.scheduleMicroTask(); // to make sure that it is running
          }
        }
      }
      // Resolving an already resolved promise is a noop.
      return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        // if the promise is rejected no catch status
        // and queue.length > 0, means there is a error handler
        // here to handle the rejected promise, we should trigger
        // windows.rejectionhandled eventHandler or nodejs rejectionHandled
        // eventHandler
        try {
          const handler = Zone[REJECTION_HANDLED_HANDLER];
          if (handler && typeof handler === 'function') {
            handler.call(this, {
              rejection: promise[symbolValue],
              promise: promise
            });
          }
        } catch (err) {}
        promise[symbolState] = REJECTED;
        for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      const promiseState = promise[symbolState];
      const delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, () => {
        try {
          const parentPromiseValue = promise[symbolValue];
          const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
          if (isFinallyPromise) {
            // if the promise is generated from finally call, keep parent promise's state and value
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          }
          // should not pass value to finally callback
          const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          // if error occurs, should always return this error
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    const noop = function () {};
    const AggregateError = global.AggregateError;
    class ZoneAwarePromise {
      static toString() {
        return ZONE_AWARE_PROMISE_TO_STRING;
      }
      static resolve(value) {
        if (value instanceof ZoneAwarePromise) {
          return value;
        }
        return resolvePromise(new this(null), RESOLVED, value);
      }
      static reject(error) {
        return resolvePromise(new this(null), REJECTED, error);
      }
      static withResolvers() {
        const result = {};
        result.promise = new ZoneAwarePromise((res, rej) => {
          result.resolve = res;
          result.reject = rej;
        });
        return result;
      }
      static any(values) {
        if (!values || typeof values[Symbol.iterator] !== 'function') {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }
        const promises = [];
        let count = 0;
        try {
          for (let v of values) {
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }
        if (count === 0) {
          return Promise.reject(new AggregateError([], 'All promises were rejected'));
        }
        let finished = false;
        const errors = [];
        return new ZoneAwarePromise((resolve, reject) => {
          for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
              if (finished) {
                return;
              }
              finished = true;
              resolve(v);
            }, err => {
              errors.push(err);
              count--;
              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, 'All promises were rejected'));
              }
            });
          }
        });
      }
      static race(values) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        function onResolve(value) {
          resolve(value);
        }
        function onReject(error) {
          reject(error);
        }
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          value.then(onResolve, onReject);
        }
        return promise;
      }
      static all(values) {
        return ZoneAwarePromise.allWithCallback(values);
      }
      static allSettled(values) {
        const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: value => ({
            status: 'fulfilled',
            value
          }),
          errorCallback: err => ({
            status: 'rejected',
            reason: err
          })
        });
      }
      static allWithCallback(values, callback) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        // Start at 2 to prevent prematurely resolving if .then is called immediately.
        let unresolvedCount = 2;
        let valueIndex = 0;
        const resolvedValues = [];
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          const curValueIndex = valueIndex;
          try {
            value.then(value => {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, err => {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;
                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }
          unresolvedCount++;
          valueIndex++;
        }
        // Make the unresolvedCount zero-based again.
        unresolvedCount -= 2;
        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }
        return promise;
      }
      constructor(executor) {
        const promise = this;
        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error('Must be an instanceof Promise.');
        }
        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = []; // queue;
        try {
          const onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }
      get [Symbol.toStringTag]() {
        return 'Promise';
      }
      get [Symbol.species]() {
        return ZoneAwarePromise;
      }
      then(onFulfilled, onRejected) {
        // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
        // may be an object without a prototype (created through `Object.create(null)`); thus
        // `this.constructor` will be undefined. One of the use cases is SystemJS creating
        // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
        // object and copies promise properties into that object (within the `getOrCreateLoad`
        // function). The zone.js then checks if the resolved value has the `then` method and
        // invokes it with the `value` context. Otherwise, this will throw an error: `TypeError:
        // Cannot read properties of undefined (reading 'Symbol(Symbol.species)')`.
        let C = this.constructor?.[Symbol.species];
        if (!C || typeof C !== 'function') {
          C = this.constructor || ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        const zone = Zone.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }
        return chainPromise;
      }
      catch(onRejected) {
        return this.then(null, onRejected);
      }
      finally(onFinally) {
        // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.
        let C = this.constructor?.[Symbol.species];
        if (!C || typeof C !== 'function') {
          C = ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        const zone = Zone.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }
        return chainPromise;
      }
    }
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    const NativePromise = global[symbolPromise] = global['Promise'];
    global['Promise'] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
      const proto = Ctor.prototype;
      const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
      if (prop && (prop.writable === false || !prop.configurable)) {
        // check Ctor.prototype.then propertyDescriptor is writable or not
        // in meteor env, writable is false, we should ignore such case
        return;
      }
      const originalThen = proto.then;
      // Keep a reference to the original method.
      proto[symbolThen] = originalThen;
      Ctor.prototype.then = function (onResolve, onReject) {
        const wrapped = new ZoneAwarePromise((resolve, reject) => {
          originalThen.call(this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };
      Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
      return function (self, args) {
        let resultPromise = fn.apply(self, args);
        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }
        let ctor = resultPromise.constructor;
        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }
        return resultPromise;
      };
    }
    if (NativePromise) {
      patchThen(NativePromise);
      patchMethod(global, 'fetch', delegate => zoneify(delegate));
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
}
function patchToString(Zone) {
  // override Function.prototype.toString to make zone.js patched function
  // look like native function
  Zone.__load_patch('toString', global => {
    // patch Func.prototype.toString to let them look like native
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    const PROMISE_SYMBOL = zoneSymbol('Promise');
    const ERROR_SYMBOL = zoneSymbol('Error');
    const newFunctionToString = function toString() {
      if (typeof this === 'function') {
        const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
        if (originalDelegate) {
          if (typeof originalDelegate === 'function') {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }
        if (this === Promise) {
          const nativePromise = global[PROMISE_SYMBOL];
          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }
        if (this === Error) {
          const nativeError = global[ERROR_SYMBOL];
          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }
      return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
      if (typeof Promise === 'function' && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }
      return originalObjectToString.call(this);
    };
  });
}
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function (name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
        // `customElements.define`. We explicitly wrap the patching code into try-catch since
        // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
        // make those properties non-writable. This means that patching callback will throw an error
        // `cannot assign to read-only property`. See this code as an example:
        // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
        // We don't want to stop the application rendering if we couldn't patch some
        // callback, e.g. `attributeChangedCallback`.
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch {
          // Note: we leave the catch block empty since there's no way to handle the error related
          // to non-writable property.
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}
function patchUtil(Zone) {
  Zone.__load_patch('util', (global, Zone, api) => {
    // Collect native event names by looking at properties
    // on the global namespace, e.g. 'onclick'.
    const eventNames = getOnEventNames(global);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS`
    // to define which events will not be patched by `Zone.js`. In newer version (>=0.9.0), we
    // change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep the name consistent with
    // angular repo. The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be
    // supported for backwards compatibility.
    const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
      global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
      globalSources,
      zoneSymbolEventNames,
      eventNames,
      isBrowser,
      isMix,
      isNode,
      TRUE_STR,
      FALSE_STR,
      ZONE_SYMBOL_PREFIX,
      ADD_EVENT_LISTENER_STR,
      REMOVE_EVENT_LISTENER_STR
    });
  });
}
function patchCommon(Zone) {
  patchPromise(Zone);
  patchToString(Zone);
  patchUtil(Zone);
}
const Zone$1 = loadZone();
patchCommon(Zone$1);
patchBrowser(Zone$1);

/***/ }),

/***/ 58168:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ 53733:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"main":{"es-EC":{"identity":{"version":{"_cldrVersion":"36"},"language":"es","territory":"EC"},"numbers":{"currencies":{"ADP":{"displayName":"peseta andorrana","displayName-count-one":"peseta andorrana","displayName-count-other":"pesetas andorranas","symbol":"ADP"},"AED":{"displayName":"dírham de los Emiratos Árabes Unidos","displayName-count-one":"dírham de los Emiratos Árabes Unidos","displayName-count-other":"dírhams de los Emiratos Árabes Unidos","symbol":"AED"},"AFA":{"displayName":"afgani (1927–2002)","symbol":"AFA"},"AFN":{"displayName":"afgani","displayName-count-one":"afgani","displayName-count-other":"afganis","symbol":"AFN"},"ALK":{"displayName":"ALK","symbol":"ALK"},"ALL":{"displayName":"lek","displayName-count-one":"lek","displayName-count-other":"lekes","symbol":"ALL"},"AMD":{"displayName":"dram","displayName-count-one":"dram","displayName-count-other":"drams","symbol":"AMD"},"ANG":{"displayName":"florín de las Antillas Neerlandesas","displayName-count-one":"florín de las Antillas Neerlandesas","displayName-count-other":"florines de las Antillas Neerlandesas","symbol":"ANG"},"AOA":{"displayName":"kuanza","displayName-count-one":"kuanza","displayName-count-other":"kuanzas","symbol":"AOA","symbol-alt-narrow":"Kz"},"AOK":{"displayName":"kwanza angoleño (1977–1990)","symbol":"AOK"},"AON":{"displayName":"nuevo kwanza angoleño (1990–2000)","symbol":"AON"},"AOR":{"displayName":"kwanza reajustado angoleño (1995–1999)","symbol":"AOR"},"ARA":{"displayName":"austral argentino","displayName-count-one":"austral argentino","displayName-count-other":"australes argentinos","symbol":"ARA"},"ARL":{"displayName":"ARL","symbol":"ARL"},"ARM":{"displayName":"ARM","symbol":"ARM"},"ARP":{"displayName":"peso argentino (1983–1985)","displayName-count-one":"peso argentino (ARP)","displayName-count-other":"pesos argentinos (ARP)","symbol":"ARP"},"ARS":{"displayName":"peso argentino","displayName-count-one":"peso argentino","displayName-count-other":"pesos argentinos","symbol":"ARS","symbol-alt-narrow":"$"},"ATS":{"displayName":"chelín austriaco","displayName-count-one":"chelín austriaco","displayName-count-other":"chelines austriacos","symbol":"ATS"},"AUD":{"displayName":"dólar australiano","displayName-count-one":"dólar australiano","displayName-count-other":"dólares australianos","symbol":"AUD","symbol-alt-narrow":"$"},"AWG":{"displayName":"florín arubeño","displayName-count-one":"florín arubeño","displayName-count-other":"florines arubeños","symbol":"AWG"},"AZM":{"displayName":"manat azerí (1993–2006)","symbol":"AZM"},"AZN":{"displayName":"manat azerbaiyano","displayName-count-one":"manat azerbaiyano","displayName-count-other":"manat azerbaiyanos","symbol":"AZN"},"BAD":{"displayName":"dinar bosnio","displayName-count-one":"dinar bosnio","displayName-count-other":"dinares bosnios","symbol":"BAD"},"BAM":{"displayName":"marco convertible de Bosnia y Herzegovina","displayName-count-one":"marco convertible de Bosnia y Herzegovina","displayName-count-other":"marcos convertibles de Bosnia y Herzegovina","symbol":"BAM","symbol-alt-narrow":"KM"},"BAN":{"displayName":"BAN","symbol":"BAN"},"BBD":{"displayName":"dólar barbadense","displayName-count-one":"dólar barbadense","displayName-count-other":"dólares barbadenses","symbol":"BBD","symbol-alt-narrow":"$"},"BDT":{"displayName":"taka","displayName-count-one":"taka","displayName-count-other":"takas","symbol":"BDT","symbol-alt-narrow":"৳"},"BEC":{"displayName":"franco belga (convertible)","displayName-count-one":"franco belga (convertible)","displayName-count-other":"francos belgas (convertibles)","symbol":"BEC"},"BEF":{"displayName":"franco belga","displayName-count-one":"franco belga","displayName-count-other":"francos belgas","symbol":"BEF"},"BEL":{"displayName":"franco belga (financiero)","displayName-count-one":"franco belga (financiero)","displayName-count-other":"francos belgas (financieros)","symbol":"BEL"},"BGL":{"displayName":"lev fuerte búlgaro","displayName-count-one":"lev fuerte búlgaro","displayName-count-other":"leva fuertes búlgaros","symbol":"BGL"},"BGM":{"displayName":"BGM","symbol":"BGM"},"BGN":{"displayName":"lev búlgaro","displayName-count-one":"lev búlgaro","displayName-count-other":"leva búlgaros","symbol":"BGN"},"BGO":{"displayName":"BGO","symbol":"BGO"},"BHD":{"displayName":"dinar bahreiní","displayName-count-one":"dinar bahreiní","displayName-count-other":"dinares bahreiníes","symbol":"BHD"},"BIF":{"displayName":"franco burundés","displayName-count-one":"franco burundés","displayName-count-other":"francos burundeses","symbol":"BIF"},"BMD":{"displayName":"dólar de Bermudas","displayName-count-one":"dólar de Bermudas","displayName-count-other":"dólares de Bermudas","symbol":"BMD","symbol-alt-narrow":"$"},"BND":{"displayName":"dólar bruneano","displayName-count-one":"dólar bruneano","displayName-count-other":"dólares bruneanos","symbol":"BND","symbol-alt-narrow":"$"},"BOB":{"displayName":"boliviano","displayName-count-one":"boliviano","displayName-count-other":"bolivianos","symbol":"BOB","symbol-alt-narrow":"Bs"},"BOL":{"displayName":"BOL","symbol":"BOL"},"BOP":{"displayName":"peso boliviano","displayName-count-one":"peso boliviano","displayName-count-other":"pesos bolivianos","symbol":"BOP"},"BOV":{"displayName":"MVDOL boliviano","displayName-count-one":"MVDOL boliviano","displayName-count-other":"MVDOL bolivianos","symbol":"BOV"},"BRB":{"displayName":"nuevo cruceiro brasileño (1967–1986)","displayName-count-one":"nuevo cruzado brasileño (BRB)","displayName-count-other":"nuevos cruzados brasileños (BRB)","symbol":"BRB"},"BRC":{"displayName":"cruzado brasileño","displayName-count-one":"cruzado brasileño","displayName-count-other":"cruzados brasileños","symbol":"BRC"},"BRE":{"displayName":"cruceiro brasileño (1990–1993)","displayName-count-one":"cruceiro brasileño (BRE)","displayName-count-other":"cruceiros brasileños (BRE)","symbol":"BRE"},"BRL":{"displayName":"real brasileño","displayName-count-one":"real brasileño","displayName-count-other":"reales brasileños","symbol":"BRL","symbol-alt-narrow":"R$"},"BRN":{"displayName":"nuevo cruzado brasileño","displayName-count-one":"nuevo cruzado brasileño","displayName-count-other":"nuevos cruzados brasileños","symbol":"BRN"},"BRR":{"displayName":"cruceiro brasileño","displayName-count-one":"cruceiro brasileño","displayName-count-other":"cruceiros brasileños","symbol":"BRR"},"BRZ":{"displayName":"BRZ","symbol":"BRZ"},"BSD":{"displayName":"dólar bahameño","displayName-count-one":"dólar bahameño","displayName-count-other":"dólares bahameños","symbol":"BSD","symbol-alt-narrow":"$"},"BTN":{"displayName":"gultrum","displayName-count-one":"gultrum","displayName-count-other":"gultrums","symbol":"BTN"},"BUK":{"displayName":"kyat birmano","displayName-count-one":"kyat birmano","displayName-count-other":"kyat birmanos","symbol":"BUK"},"BWP":{"displayName":"pula","displayName-count-one":"pula","displayName-count-other":"pulas","symbol":"BWP","symbol-alt-narrow":"P"},"BYB":{"displayName":"nuevo rublo bielorruso (1994–1999)","displayName-count-one":"nuevo rublo bielorruso","displayName-count-other":"nuevos rublos bielorrusos","symbol":"BYB"},"BYN":{"displayName":"rublo bielorruso","displayName-count-one":"rublo bielorruso","displayName-count-other":"rublos bielorrusos","symbol":"BYN","symbol-alt-narrow":"р."},"BYR":{"displayName":"rublo bielorruso (2000–2016)","displayName-count-one":"rublo bielorruso (2000–2016)","displayName-count-other":"rublos bielorrusos (2000–2016)","symbol":"BYR"},"BZD":{"displayName":"dólar beliceño","displayName-count-one":"dólar beliceño","displayName-count-other":"dólares beliceños","symbol":"BZD","symbol-alt-narrow":"$"},"CAD":{"displayName":"dólar canadiense","displayName-count-one":"dólar canadiense","displayName-count-other":"dólares canadienses","symbol":"CAD","symbol-alt-narrow":"$"},"CDF":{"displayName":"franco congoleño","displayName-count-one":"franco congoleño","displayName-count-other":"francos congoleños","symbol":"CDF"},"CHE":{"displayName":"euro WIR","displayName-count-one":"euro WIR","displayName-count-other":"euros WIR","symbol":"CHE"},"CHF":{"displayName":"franco suizo","displayName-count-one":"franco suizo","displayName-count-other":"francos suizos","symbol":"CHF"},"CHW":{"displayName":"franco WIR","displayName-count-one":"franco WIR","displayName-count-other":"francos WIR","symbol":"CHW"},"CLE":{"displayName":"CLE","symbol":"CLE"},"CLF":{"displayName":"unidad de fomento chilena","displayName-count-one":"unidad de fomento chilena","displayName-count-other":"unidades de fomento chilenas","symbol":"CLF"},"CLP":{"displayName":"peso chileno","displayName-count-one":"peso chileno","displayName-count-other":"pesos chilenos","symbol":"CLP","symbol-alt-narrow":"$"},"CNH":{"displayName":"yuan chino (extracontinental)","displayName-count-one":"yuan chino (extracontinental)","displayName-count-other":"yuan chino (extracontinental)","symbol":"CNH"},"CNX":{"displayName":"CNX","symbol":"CNX"},"CNY":{"displayName":"yuan","displayName-count-one":"yuan","displayName-count-other":"yuanes","symbol":"CNY","symbol-alt-narrow":"¥"},"COP":{"displayName":"peso colombiano","displayName-count-one":"peso colombiano","displayName-count-other":"pesos colombianos","symbol":"COP","symbol-alt-narrow":"$"},"COU":{"displayName":"unidad de valor real colombiana","displayName-count-one":"unidad de valor real","displayName-count-other":"unidades de valor reales","symbol":"COU"},"CRC":{"displayName":"colón costarricense","displayName-count-one":"colón costarricense","displayName-count-other":"colones costarricenses","symbol":"CRC","symbol-alt-narrow":"₡"},"CSD":{"displayName":"antiguo dinar serbio","displayName-count-one":"antiguo dinar serbio","displayName-count-other":"antiguos dinares serbios","symbol":"CSD"},"CSK":{"displayName":"corona fuerte checoslovaca","displayName-count-one":"corona fuerte checoslovaca","displayName-count-other":"coronas fuertes checoslovacas","symbol":"CSK"},"CUC":{"displayName":"peso cubano convertible","displayName-count-one":"peso cubano convertible","displayName-count-other":"pesos cubanos convertibles","symbol":"CUC","symbol-alt-narrow":"$"},"CUP":{"displayName":"peso cubano","displayName-count-one":"peso cubano","displayName-count-other":"pesos cubanos","symbol":"CUP","symbol-alt-narrow":"$"},"CVE":{"displayName":"escudo de Cabo Verde","displayName-count-one":"escudo de Cabo Verde","displayName-count-other":"escudos de Cabo Verde","symbol":"CVE"},"CYP":{"displayName":"libra chipriota","displayName-count-one":"libra chipriota","displayName-count-other":"libras chipriotas","symbol":"CYP"},"CZK":{"displayName":"corona checa","displayName-count-one":"corona checa","displayName-count-other":"coronas checas","symbol":"CZK","symbol-alt-narrow":"Kč"},"DDM":{"displayName":"ostmark de Alemania del Este","displayName-count-one":"marco de la República Democrática Alemana","displayName-count-other":"marcos de la República Democrática Alemana","symbol":"DDM"},"DEM":{"displayName":"marco alemán","displayName-count-one":"marco alemán","displayName-count-other":"marcos alemanes","symbol":"DEM"},"DJF":{"displayName":"franco yibutiano","displayName-count-one":"franco yibutiano","displayName-count-other":"francos yibutianos","symbol":"DJF"},"DKK":{"displayName":"corona danesa","displayName-count-one":"corona danesa","displayName-count-other":"coronas danesas","symbol":"DKK","symbol-alt-narrow":"kr"},"DOP":{"displayName":"peso dominicano","displayName-count-one":"peso dominicano","displayName-count-other":"pesos dominicanos","symbol":"DOP","symbol-alt-narrow":"$"},"DZD":{"displayName":"dinar argelino","displayName-count-one":"dinar argelino","displayName-count-other":"dinares argelinos","symbol":"DZD"},"ECS":{"displayName":"sucre ecuatoriano","displayName-count-one":"sucre ecuatoriano","displayName-count-other":"sucres ecuatorianos","symbol":"ECS"},"ECV":{"displayName":"unidad de valor constante (UVC) ecuatoriana","displayName-count-one":"unidad de valor constante (UVC) ecuatoriana","displayName-count-other":"unidades de valor constante (UVC) ecuatorianas","symbol":"ECV"},"EEK":{"displayName":"corona estonia","displayName-count-one":"corona estonia","displayName-count-other":"coronas estonias","symbol":"EEK"},"EGP":{"displayName":"libra egipcia","displayName-count-one":"libra egipcia","displayName-count-other":"libras egipcias","symbol":"EGP","symbol-alt-narrow":"E£"},"ERN":{"displayName":"nakfa","displayName-count-one":"nakfa","displayName-count-other":"nakfas","symbol":"ERN"},"ESA":{"displayName":"peseta española (cuenta A)","displayName-count-one":"peseta española (cuenta A)","displayName-count-other":"pesetas españolas (cuenta A)","symbol":"ESA"},"ESB":{"displayName":"peseta española (cuenta convertible)","displayName-count-one":"peseta española (cuenta convertible)","displayName-count-other":"pesetas españolas (cuenta convertible)","symbol":"ESB"},"ESP":{"displayName":"peseta española","displayName-count-one":"peseta española","displayName-count-other":"pesetas españolas","symbol":"₧","symbol-alt-narrow":"₧"},"ETB":{"displayName":"bir","displayName-count-one":"bir","displayName-count-other":"bires","symbol":"ETB"},"EUR":{"displayName":"euro","displayName-count-one":"euro","displayName-count-other":"euros","symbol":"EUR","symbol-alt-narrow":"€"},"FIM":{"displayName":"marco finlandés","displayName-count-one":"marco finlandés","displayName-count-other":"marcos finlandeses","symbol":"FIM"},"FJD":{"displayName":"dólar fiyiano","displayName-count-one":"dólar fiyiano","displayName-count-other":"dólares fiyianos","symbol":"FJD","symbol-alt-narrow":"$"},"FKP":{"displayName":"libra malvinense","displayName-count-one":"libra malvinense","displayName-count-other":"libras malvinenses","symbol":"FKP","symbol-alt-narrow":"FK£"},"FRF":{"displayName":"franco francés","displayName-count-one":"franco francés","displayName-count-other":"francos franceses","symbol":"FRF"},"GBP":{"displayName":"libra esterlina","displayName-count-one":"libra esterlina","displayName-count-other":"libras esterlinas","symbol":"GBP","symbol-alt-narrow":"£"},"GEK":{"displayName":"kupon larit georgiano","symbol":"GEK"},"GEL":{"displayName":"lari","displayName-count-one":"lari","displayName-count-other":"laris","symbol":"GEL","symbol-alt-narrow":"₾","symbol-alt-variant":"₾"},"GHC":{"displayName":"cedi ghanés (1979–2007)","symbol":"GHC"},"GHS":{"displayName":"cedi","displayName-count-one":"cedi","displayName-count-other":"cedis","symbol":"GHS"},"GIP":{"displayName":"libra gibraltareña","displayName-count-one":"libra gibraltareña","displayName-count-other":"libras gibraltareñas","symbol":"GIP","symbol-alt-narrow":"£"},"GMD":{"displayName":"dalasi","displayName-count-one":"dalasi","displayName-count-other":"dalasis","symbol":"GMD"},"GNF":{"displayName":"franco guineano","displayName-count-one":"franco guineano","displayName-count-other":"francos guineanos","symbol":"GNF","symbol-alt-narrow":"FG"},"GNS":{"displayName":"syli guineano","symbol":"GNS"},"GQE":{"displayName":"ekuele de Guinea Ecuatorial","displayName-count-one":"ekuele de Guinea Ecuatorial","displayName-count-other":"ekueles de Guinea Ecuatorial","symbol":"GQE"},"GRD":{"displayName":"dracma griego","displayName-count-one":"dracma griego","displayName-count-other":"dracmas griegos","symbol":"GRD"},"GTQ":{"displayName":"quetzal guatemalteco","displayName-count-one":"quetzal guatemalteco","displayName-count-other":"quetzales guatemaltecos","symbol":"GTQ","symbol-alt-narrow":"Q"},"GWE":{"displayName":"escudo de Guinea Portuguesa","symbol":"GWE"},"GWP":{"displayName":"peso de Guinea-Bissáu","symbol":"GWP"},"GYD":{"displayName":"dólar guyanés","displayName-count-one":"dólar guyanés","displayName-count-other":"dólares guyaneses","symbol":"GYD","symbol-alt-narrow":"$"},"HKD":{"displayName":"dólar hongkonés","displayName-count-one":"dólar hongkonés","displayName-count-other":"dólares hongkoneses","symbol":"HKD","symbol-alt-narrow":"$"},"HNL":{"displayName":"lempira hondureño","displayName-count-one":"lempira hondureño","displayName-count-other":"lempiras hondureños","symbol":"HNL","symbol-alt-narrow":"L"},"HRD":{"displayName":"dinar croata","displayName-count-one":"dinar croata","displayName-count-other":"dinares croatas","symbol":"HRD"},"HRK":{"displayName":"kuna","displayName-count-one":"kuna","displayName-count-other":"kunas","symbol":"HRK","symbol-alt-narrow":"kn"},"HTG":{"displayName":"gourde haitiano","displayName-count-one":"gourde haitiano","displayName-count-other":"gourdes haitianos","symbol":"HTG"},"HUF":{"displayName":"forinto húngaro","displayName-count-one":"forinto húngaro","displayName-count-other":"forintos húngaros","symbol":"HUF","symbol-alt-narrow":"Ft"},"IDR":{"displayName":"rupia indonesia","displayName-count-one":"rupia indonesia","displayName-count-other":"rupias indonesias","symbol":"IDR","symbol-alt-narrow":"Rp"},"IEP":{"displayName":"libra irlandesa","displayName-count-one":"libra irlandesa","displayName-count-other":"libras irlandesas","symbol":"IEP"},"ILP":{"displayName":"libra israelí","displayName-count-one":"libra israelí","displayName-count-other":"libras israelíes","symbol":"ILP"},"ILR":{"displayName":"ILR","symbol":"ILR"},"ILS":{"displayName":"nuevo séquel israelí","displayName-count-one":"nuevo séquel israelí","displayName-count-other":"nuevos séqueles israelíes","symbol":"ILS","symbol-alt-narrow":"₪"},"INR":{"displayName":"rupia india","displayName-count-one":"rupia india","displayName-count-other":"rupias indias","symbol":"INR","symbol-alt-narrow":"₹"},"IQD":{"displayName":"dinar iraquí","displayName-count-one":"dinar iraquí","displayName-count-other":"dinares iraquíes","symbol":"IQD"},"IRR":{"displayName":"rial iraní","displayName-count-one":"rial iraní","displayName-count-other":"riales iraníes","symbol":"IRR"},"ISJ":{"displayName":"ISJ","symbol":"ISJ"},"ISK":{"displayName":"corona islandesa","displayName-count-one":"corona islandesa","displayName-count-other":"coronas islandesas","symbol":"ISK","symbol-alt-narrow":"kr"},"ITL":{"displayName":"lira italiana","displayName-count-one":"lira italiana","displayName-count-other":"liras italianas","symbol":"ITL"},"JMD":{"displayName":"dólar jamaicano","displayName-count-one":"dólar jamaicano","displayName-count-other":"dólares jamaicanos","symbol":"JMD","symbol-alt-narrow":"$"},"JOD":{"displayName":"dinar jordano","displayName-count-one":"dinar jordano","displayName-count-other":"dinares jordanos","symbol":"JOD"},"JPY":{"displayName":"yen","displayName-count-one":"yen","displayName-count-other":"yenes","symbol":"JPY","symbol-alt-narrow":"¥"},"KES":{"displayName":"chelín keniano","displayName-count-one":"chelín keniano","displayName-count-other":"chelines kenianos","symbol":"KES"},"KGS":{"displayName":"som","displayName-count-one":"som","displayName-count-other":"soms","symbol":"KGS"},"KHR":{"displayName":"riel","displayName-count-one":"riel","displayName-count-other":"rieles","symbol":"KHR","symbol-alt-narrow":"៛"},"KMF":{"displayName":"franco comorense","displayName-count-one":"franco comorense","displayName-count-other":"francos comorenses","symbol":"KMF","symbol-alt-narrow":"CF"},"KPW":{"displayName":"won norcoreano","displayName-count-one":"won norcoreano","displayName-count-other":"wons norcoreanos","symbol":"KPW","symbol-alt-narrow":"₩"},"KRH":{"displayName":"KRH","symbol":"KRH"},"KRO":{"displayName":"KRO","symbol":"KRO"},"KRW":{"displayName":"won surcoreano","displayName-count-one":"won surcoreano","displayName-count-other":"wons surcoreanos","symbol":"KRW","symbol-alt-narrow":"₩"},"KWD":{"displayName":"dinar kuwaití","displayName-count-one":"dinar kuwaití","displayName-count-other":"dinares kuwaitíes","symbol":"KWD"},"KYD":{"displayName":"dólar de las Islas Caimán","displayName-count-one":"dólar de las Islas Caimán","displayName-count-other":"dólares de las Islas Caimán","symbol":"KYD","symbol-alt-narrow":"$"},"KZT":{"displayName":"tenge kazako","displayName-count-one":"tenge kazako","displayName-count-other":"tenges kazakos","symbol":"KZT","symbol-alt-narrow":"₸"},"LAK":{"displayName":"kip","displayName-count-one":"kip","displayName-count-other":"kips","symbol":"LAK","symbol-alt-narrow":"₭"},"LBP":{"displayName":"libra libanesa","displayName-count-one":"libra libanesa","displayName-count-other":"libras libanesas","symbol":"LBP","symbol-alt-narrow":"L£"},"LKR":{"displayName":"rupia esrilanquesa","displayName-count-one":"rupia esrilanquesa","displayName-count-other":"rupias esrilanquesas","symbol":"LKR","symbol-alt-narrow":"Rs"},"LRD":{"displayName":"dólar liberiano","displayName-count-one":"dólar liberiano","displayName-count-other":"dólares liberianos","symbol":"LRD","symbol-alt-narrow":"$"},"LSL":{"displayName":"loti lesothense","symbol":"LSL"},"LTL":{"displayName":"litas lituano","displayName-count-one":"litas lituana","displayName-count-other":"litas lituanas","symbol":"LTL","symbol-alt-narrow":"Lt"},"LTT":{"displayName":"talonas lituano","displayName-count-one":"talonas lituana","displayName-count-other":"talonas lituanas","symbol":"LTT"},"LUC":{"displayName":"franco convertible luxemburgués","displayName-count-one":"franco convertible luxemburgués","displayName-count-other":"francos convertibles luxemburgueses","symbol":"LUC"},"LUF":{"displayName":"franco luxemburgués","displayName-count-one":"franco luxemburgués","displayName-count-other":"francos luxemburgueses","symbol":"LUF"},"LUL":{"displayName":"franco financiero luxemburgués","displayName-count-one":"franco financiero luxemburgués","displayName-count-other":"francos financieros luxemburgueses","symbol":"LUL"},"LVL":{"displayName":"lats letón","displayName-count-one":"lats letón","displayName-count-other":"lats letónes","symbol":"LVL","symbol-alt-narrow":"Ls"},"LVR":{"displayName":"rublo letón","displayName-count-one":"rublo letón","displayName-count-other":"rublos letones","symbol":"LVR"},"LYD":{"displayName":"dinar libio","displayName-count-one":"dinar libio","displayName-count-other":"dinares libios","symbol":"LYD"},"MAD":{"displayName":"dírham marroquí","displayName-count-one":"dírham marroquí","displayName-count-other":"dírhams marroquíes","symbol":"MAD"},"MAF":{"displayName":"franco marroquí","displayName-count-one":"franco marroquí","displayName-count-other":"francos marroquíes","symbol":"MAF"},"MCF":{"displayName":"MCF","symbol":"MCF"},"MDC":{"displayName":"MDC","symbol":"MDC"},"MDL":{"displayName":"leu moldavo","displayName-count-one":"leu moldavo","displayName-count-other":"lei moldavos","symbol":"MDL"},"MGA":{"displayName":"ariari","displayName-count-one":"ariari","displayName-count-other":"ariaris","symbol":"MGA","symbol-alt-narrow":"Ar"},"MGF":{"displayName":"franco malgache","symbol":"MGF"},"MKD":{"displayName":"dinar macedonio","displayName-count-one":"dinar macedonio","displayName-count-other":"dinares macedonios","symbol":"MKD"},"MKN":{"displayName":"MKN","symbol":"MKN"},"MLF":{"displayName":"franco malí","symbol":"MLF"},"MMK":{"displayName":"kiat","displayName-count-one":"kiat","displayName-count-other":"kiats","symbol":"MMK","symbol-alt-narrow":"K"},"MNT":{"displayName":"tugrik","displayName-count-one":"tugrik","displayName-count-other":"tugriks","symbol":"MNT","symbol-alt-narrow":"₮"},"MOP":{"displayName":"pataca de Macao","displayName-count-one":"pataca de Macao","displayName-count-other":"patacas de Macao","symbol":"MOP"},"MRO":{"displayName":"uguiya (1973–2017)","displayName-count-one":"uguiya (1973–2017)","displayName-count-other":"uguiyas (1973–2017)","symbol":"MRO"},"MRU":{"displayName":"uguiya","displayName-count-one":"uguiya","displayName-count-other":"uguiyas","symbol":"MRU"},"MTL":{"displayName":"lira maltesa","displayName-count-one":"lira maltesa","displayName-count-other":"liras maltesas","symbol":"MTL"},"MTP":{"displayName":"libra maltesa","displayName-count-one":"libra maltesa","displayName-count-other":"libras maltesas","symbol":"MTP"},"MUR":{"displayName":"rupia mauriciana","displayName-count-one":"rupia mauriciana","displayName-count-other":"rupias mauricianas","symbol":"MUR","symbol-alt-narrow":"Rs"},"MVP":{"displayName":"MVP","symbol":"MVP"},"MVR":{"displayName":"rufiya","displayName-count-one":"rufiya","displayName-count-other":"rufiyas","symbol":"MVR"},"MWK":{"displayName":"kwacha malauí","displayName-count-one":"kwacha malauí","displayName-count-other":"kwachas malauís","symbol":"MWK"},"MXN":{"displayName":"peso mexicano","displayName-count-one":"peso mexicano","displayName-count-other":"pesos mexicanos","symbol":"MXN","symbol-alt-narrow":"$"},"MXP":{"displayName":"peso de plata mexicano (1861–1992)","displayName-count-one":"peso de plata mexicano (MXP)","displayName-count-other":"pesos de plata mexicanos (MXP)","symbol":"MXP"},"MXV":{"displayName":"unidad de inversión (UDI) mexicana","displayName-count-one":"unidad de inversión (UDI) mexicana","displayName-count-other":"unidades de inversión (UDI) mexicanas","symbol":"MXV"},"MYR":{"displayName":"ringit","displayName-count-one":"ringit","displayName-count-other":"ringits","symbol":"MYR","symbol-alt-narrow":"RM"},"MZE":{"displayName":"escudo mozambiqueño","displayName-count-one":"escudo mozambiqueño","displayName-count-other":"escudos mozambiqueños","symbol":"MZE"},"MZM":{"displayName":"antiguo metical mozambiqueño","symbol":"MZM"},"MZN":{"displayName":"metical","displayName-count-one":"metical","displayName-count-other":"meticales","symbol":"MZN"},"NAD":{"displayName":"dólar namibio","displayName-count-one":"dólar namibio","displayName-count-other":"dólares namibios","symbol":"NAD","symbol-alt-narrow":"$"},"NGN":{"displayName":"naira","displayName-count-one":"naira","displayName-count-other":"nairas","symbol":"NGN","symbol-alt-narrow":"₦"},"NIC":{"displayName":"córdoba nicaragüense (1988–1991)","displayName-count-one":"córdoba nicaragüense (1988–1991)","displayName-count-other":"córdobas nicaragüenses (1988–1991)","symbol":"NIC"},"NIO":{"displayName":"córdoba nicaragüense","displayName-count-one":"córdoba nicaragüense","displayName-count-other":"córdobas nicaragüenses","symbol":"NIO","symbol-alt-narrow":"C$"},"NLG":{"displayName":"florín neerlandés","displayName-count-one":"florín neerlandés","displayName-count-other":"florines neerlandeses","symbol":"NLG"},"NOK":{"displayName":"corona noruega","displayName-count-one":"corona noruega","displayName-count-other":"coronas noruegas","symbol":"NOK","symbol-alt-narrow":"kr"},"NPR":{"displayName":"rupia nepalí","displayName-count-one":"rupia nepalí","displayName-count-other":"rupias nepalíes","symbol":"NPR","symbol-alt-narrow":"Rs"},"NZD":{"displayName":"dólar neozelandés","displayName-count-one":"dólar neozelandés","displayName-count-other":"dólares neozelandeses","symbol":"NZD","symbol-alt-narrow":"$"},"OMR":{"displayName":"rial omaní","displayName-count-one":"rial omaní","displayName-count-other":"riales omaníes","symbol":"OMR"},"PAB":{"displayName":"balboa panameño","displayName-count-one":"balboa panameño","displayName-count-other":"balboas panameños","symbol":"PAB"},"PEI":{"displayName":"inti peruano","displayName-count-one":"inti peruano","displayName-count-other":"intis peruanos","symbol":"PEI"},"PEN":{"displayName":"sol peruano","displayName-count-one":"sol peruano","displayName-count-other":"soles peruanos","symbol":"PEN"},"PES":{"displayName":"sol peruano (1863–1965)","displayName-count-one":"sol peruano (1863–1965)","displayName-count-other":"soles peruanos (1863–1965)","symbol":"PES"},"PGK":{"displayName":"kina","displayName-count-one":"kina","displayName-count-other":"kinas","symbol":"PGK"},"PHP":{"displayName":"peso filipino","displayName-count-one":"peso filipino","displayName-count-other":"pesos filipinos","symbol":"PHP","symbol-alt-narrow":"₱"},"PKR":{"displayName":"rupia pakistaní","displayName-count-one":"rupia pakistaní","displayName-count-other":"rupias pakistaníes","symbol":"PKR","symbol-alt-narrow":"Rs"},"PLN":{"displayName":"esloti","displayName-count-one":"esloti","displayName-count-other":"eslotis","symbol":"PLN","symbol-alt-narrow":"zł"},"PLZ":{"displayName":"zloty polaco (1950–1995)","displayName-count-one":"zloty polaco (PLZ)","displayName-count-other":"zlotys polacos (PLZ)","symbol":"PLZ"},"PTE":{"displayName":"escudo portugués","displayName-count-one":"escudo portugués","displayName-count-other":"escudos portugueses","symbol":"PTE"},"PYG":{"displayName":"guaraní paraguayo","displayName-count-one":"guaraní paraguayo","displayName-count-other":"guaraníes paraguayos","symbol":"PYG","symbol-alt-narrow":"₲"},"QAR":{"displayName":"rial catarí","displayName-count-one":"rial catarí","displayName-count-other":"riales cataríes","symbol":"QAR"},"RHD":{"displayName":"dólar rodesiano","symbol":"RHD"},"ROL":{"displayName":"antiguo leu rumano","displayName-count-one":"antiguo leu rumano","displayName-count-other":"antiguos lei rumanos","symbol":"ROL"},"RON":{"displayName":"leu rumano","displayName-count-one":"leu rumano","displayName-count-other":"lei rumanos","symbol":"RON","symbol-alt-narrow":"L"},"RSD":{"displayName":"dinar serbio","displayName-count-one":"dinar serbio","displayName-count-other":"dinares serbios","symbol":"RSD"},"RUB":{"displayName":"rublo ruso","displayName-count-one":"rublo ruso","displayName-count-other":"rublos rusos","symbol":"RUB","symbol-alt-narrow":"₽"},"RUR":{"displayName":"rublo ruso (1991–1998)","displayName-count-one":"rublo ruso (RUR)","displayName-count-other":"rublos rusos (RUR)","symbol":"RUR","symbol-alt-narrow":"р."},"RWF":{"displayName":"franco ruandés","displayName-count-one":"franco ruandés","displayName-count-other":"francos ruandeses","symbol":"RWF","symbol-alt-narrow":"RF"},"SAR":{"displayName":"rial saudí","displayName-count-one":"rial saudí","displayName-count-other":"riales saudíes","symbol":"SAR"},"SBD":{"displayName":"dólar salomonense","displayName-count-one":"dólar salomonense","displayName-count-other":"dólares salomonenses","symbol":"SBD","symbol-alt-narrow":"$"},"SCR":{"displayName":"rupia seychellense","displayName-count-one":"rupia seychellense","displayName-count-other":"rupias seychellenses","symbol":"SCR"},"SDD":{"displayName":"dinar sudanés","displayName-count-one":"dinar sudanés","displayName-count-other":"dinares sudaneses","symbol":"SDD"},"SDG":{"displayName":"libra sudanesa","displayName-count-one":"libra sudanesa","displayName-count-other":"libras sudanesas","symbol":"SDG"},"SDP":{"displayName":"libra sudanesa antigua","displayName-count-one":"libra sudanesa antigua","displayName-count-other":"libras sudanesas antiguas","symbol":"SDP"},"SEK":{"displayName":"corona sueca","displayName-count-one":"corona sueca","displayName-count-other":"coronas suecas","symbol":"SEK","symbol-alt-narrow":"kr"},"SGD":{"displayName":"dólar singapurense","displayName-count-one":"dólar singapurense","displayName-count-other":"dólares singapurenses","symbol":"SGD","symbol-alt-narrow":"$"},"SHP":{"displayName":"libra de Santa Elena","displayName-count-one":"libra de Santa Elena","displayName-count-other":"libras de Santa Elena","symbol":"SHP","symbol-alt-narrow":"£"},"SIT":{"displayName":"tólar esloveno","displayName-count-one":"tólar esloveno","displayName-count-other":"tólares eslovenos","symbol":"SIT"},"SKK":{"displayName":"corona eslovaca","displayName-count-one":"corona eslovaca","displayName-count-other":"coronas eslovacas","symbol":"SKK"},"SLL":{"displayName":"leona","displayName-count-one":"leona","displayName-count-other":"leonas","symbol":"SLL"},"SOS":{"displayName":"chelín somalí","displayName-count-one":"chelín somalí","displayName-count-other":"chelines somalíes","symbol":"SOS"},"SRD":{"displayName":"dólar surinamés","displayName-count-one":"dólar surinamés","displayName-count-other":"dólares surinameses","symbol":"SRD","symbol-alt-narrow":"$"},"SRG":{"displayName":"florín surinamés","symbol":"SRG"},"SSP":{"displayName":"libra sursudanesa","displayName-count-one":"libra sursudanesa","displayName-count-other":"libras sursudanesas","symbol":"SSP","symbol-alt-narrow":"SD£"},"STD":{"displayName":"dobra (1977–2017)","displayName-count-one":"dobra (1977–2017)","displayName-count-other":"dobras (1977–2017)","symbol":"STD"},"STN":{"displayName":"dobra","displayName-count-one":"dobra","displayName-count-other":"dobras","symbol":"STN","symbol-alt-narrow":"Db"},"SUR":{"displayName":"rublo soviético","displayName-count-one":"rublo soviético","displayName-count-other":"rublos soviéticos","symbol":"SUR"},"SVC":{"displayName":"colón salvadoreño","displayName-count-one":"colón salvadoreño","displayName-count-other":"colones salvadoreños","symbol":"SVC"},"SYP":{"displayName":"libra siria","displayName-count-one":"libra siria","displayName-count-other":"libras sirias","symbol":"SYP","symbol-alt-narrow":"S£"},"SZL":{"displayName":"lilangeni","displayName-count-one":"lilangeni","displayName-count-other":"lilangenis","symbol":"SZL"},"THB":{"displayName":"baht tailandes","displayName-count-one":"baht tailandes","displayName-count-other":"bahts tailandeses","symbol":"THB","symbol-alt-narrow":"฿"},"TJR":{"displayName":"rublo tayiko","symbol":"TJR"},"TJS":{"displayName":"somoni tayiko","displayName-count-one":"somoni tayiko","displayName-count-other":"somonis tayikos","symbol":"TJS"},"TMM":{"displayName":"manat turcomano (1993–2009)","displayName-count-one":"manat turcomano (1993–2009)","displayName-count-other":"manats turcomanos (1993–2009)","symbol":"TMM"},"TMT":{"displayName":"manat turcomano","displayName-count-one":"manat turcomano","displayName-count-other":"manat turcomanos","symbol":"TMT"},"TND":{"displayName":"dinar tunecino","displayName-count-one":"dinar tunecino","displayName-count-other":"dinares tunecinos","symbol":"TND"},"TOP":{"displayName":"paanga","displayName-count-one":"paanga","displayName-count-other":"paangas","symbol":"TOP","symbol-alt-narrow":"T$"},"TPE":{"displayName":"escudo timorense","symbol":"TPE"},"TRL":{"displayName":"lira turca (1922–2005)","displayName-count-one":"lira turca (1922–2005)","displayName-count-other":"liras turcas (1922–2005)","symbol":"TRL"},"TRY":{"displayName":"lira turca","displayName-count-one":"lira turca","displayName-count-other":"liras turcas","symbol":"TRY","symbol-alt-narrow":"₺","symbol-alt-variant":"TL"},"TTD":{"displayName":"dólar de Trinidad y Tobago","displayName-count-one":"dólar de Trinidad y Tobago","displayName-count-other":"dólares de Trinidad y Tobago","symbol":"TTD","symbol-alt-narrow":"$"},"TWD":{"displayName":"nuevo dólar taiwanés","displayName-count-one":"nuevo dólar taiwanés","displayName-count-other":"nuevos dólares taiwaneses","symbol":"TWD","symbol-alt-narrow":"NT$"},"TZS":{"displayName":"chelín tanzano","displayName-count-one":"chelín tanzano","displayName-count-other":"chelines tanzanos","symbol":"TZS"},"UAH":{"displayName":"grivna","displayName-count-one":"grivna","displayName-count-other":"grivnas","symbol":"UAH","symbol-alt-narrow":"₴"},"UAK":{"displayName":"karbovanet ucraniano","displayName-count-one":"karbovanet ucraniano","displayName-count-other":"karbovanets ucranianos","symbol":"UAK"},"UGS":{"displayName":"chelín ugandés (1966–1987)","symbol":"UGS"},"UGX":{"displayName":"chelín ugandés","displayName-count-one":"chelín ugandés","displayName-count-other":"chelines ugandeses","symbol":"UGX"},"USD":{"displayName":"dólar estadounidense","displayName-count-one":"dólar estadounidense","displayName-count-other":"dólares estadounidenses","symbol":"$","symbol-alt-narrow":"$"},"USN":{"displayName":"dólar estadounidense (día siguiente)","displayName-count-one":"dólar estadounidense (día siguiente)","displayName-count-other":"dólares estadounidenses (día siguiente)","symbol":"USN"},"USS":{"displayName":"dólar estadounidense (mismo día)","displayName-count-one":"dólar estadounidense (mismo día)","displayName-count-other":"dólares estadounidenses (mismo día)","symbol":"USS"},"UYI":{"displayName":"peso uruguayo en unidades indexadas","displayName-count-one":"peso uruguayo en unidades indexadas","displayName-count-other":"pesos uruguayos en unidades indexadas","symbol":"UYI"},"UYP":{"displayName":"peso uruguayo (1975–1993)","displayName-count-one":"peso uruguayo (UYP)","displayName-count-other":"pesos uruguayos (UYP)","symbol":"UYP"},"UYU":{"displayName":"peso uruguayo","displayName-count-one":"peso uruguayo","displayName-count-other":"pesos uruguayos","symbol":"UYU","symbol-alt-narrow":"$"},"UYW":{"displayName":"unidad previsional uruguayo","displayName-count-one":"unidad previsional uruguayo","displayName-count-other":"unidades previsionales uruguayos","symbol":"UYW"},"UZS":{"displayName":"som uzbeko","displayName-count-one":"som uzbeko","displayName-count-other":"soms uzbekos","symbol":"UZS"},"VEB":{"displayName":"bolívar venezolano (1871–2008)","displayName-count-one":"bolívar venezolano (1871–2008)","displayName-count-other":"bolívares venezolanos (1871–2008)","symbol":"VEB"},"VEF":{"displayName":"bolívar venezolano (2008–2018)","displayName-count-one":"bolívar venezolano (2008–2018)","displayName-count-other":"bolívares venezolanos (2008–2018)","symbol":"VEF","symbol-alt-narrow":"BsF"},"VES":{"displayName":"bolívar venezolano","displayName-count-one":"bolívar venezolano","displayName-count-other":"bolívares venezolanos","symbol":"VES"},"VND":{"displayName":"dong","displayName-count-one":"dong","displayName-count-other":"dongs","symbol":"VND","symbol-alt-narrow":"₫"},"VNN":{"displayName":"VNN","symbol":"VNN"},"VUV":{"displayName":"vatu","displayName-count-one":"vatu","displayName-count-other":"vatus","symbol":"VUV"},"WST":{"displayName":"tala","displayName-count-one":"tala","displayName-count-other":"talas","symbol":"WST"},"XAF":{"displayName":"franco CFA de África Central","displayName-count-one":"franco CFA de África Central","displayName-count-other":"francos CFA de África Central","symbol":"XAF"},"XAG":{"displayName":"plata","displayName-count-one":"plata","displayName-count-other":"plata","symbol":"XAG"},"XAU":{"displayName":"oro","displayName-count-one":"oro","displayName-count-other":"oro","symbol":"XAU"},"XBA":{"displayName":"unidad compuesta europea","displayName-count-one":"unidad compuesta europea","displayName-count-other":"unidades compuestas europeas","symbol":"XBA"},"XBB":{"displayName":"unidad monetaria europea","displayName-count-one":"unidad monetaria europea","displayName-count-other":"unidades monetarias europeas","symbol":"XBB"},"XBC":{"displayName":"unidad de cuenta europea (XBC)","displayName-count-one":"unidad de cuenta europea (XBC)","displayName-count-other":"unidades de cuenta europeas (XBC)","symbol":"XBC"},"XBD":{"displayName":"unidad de cuenta europea (XBD)","displayName-count-one":"unidad de cuenta europea (XBD)","displayName-count-other":"unidades de cuenta europeas (XBD)","symbol":"XBD"},"XCD":{"displayName":"dólar del Caribe Oriental","displayName-count-one":"dólar del Caribe Oriental","displayName-count-other":"dólares del Caribe Oriental","symbol":"XCD","symbol-alt-narrow":"$"},"XDR":{"displayName":"derechos especiales de giro","symbol":"XDR"},"XEU":{"displayName":"unidad de moneda europea","displayName-count-one":"unidad de moneda europea","displayName-count-other":"unidades de moneda europeas","symbol":"XEU"},"XFO":{"displayName":"franco oro francés","displayName-count-one":"franco oro francés","displayName-count-other":"francos oro franceses","symbol":"XFO"},"XFU":{"displayName":"franco UIC francés","displayName-count-one":"franco UIC francés","displayName-count-other":"francos UIC franceses","symbol":"XFU"},"XOF":{"displayName":"franco CFA de África Occidental","displayName-count-one":"franco CFA de África Occidental","displayName-count-other":"francos CFA de África Occidental","symbol":"XOF"},"XPD":{"displayName":"paladio","displayName-count-one":"paladio","displayName-count-other":"paladio","symbol":"XPD"},"XPF":{"displayName":"franco CFP","displayName-count-one":"franco CFP","displayName-count-other":"francos CFP","symbol":"CFPF"},"XPT":{"displayName":"platino","displayName-count-one":"platino","displayName-count-other":"platino","symbol":"XPT"},"XRE":{"displayName":"fondos RINET","symbol":"XRE"},"XSU":{"displayName":"XSU","symbol":"XSU"},"XTS":{"displayName":"código reservado para pruebas","symbol":"XTS"},"XUA":{"displayName":"XUA","symbol":"XUA"},"XXX":{"displayName":"moneda desconocida","displayName-count-one":"(unidad de moneda desconocida)","displayName-count-other":"(moneda desconocida)","symbol":"¤"},"YDD":{"displayName":"dinar yemení","symbol":"YDD"},"YER":{"displayName":"rial yemení","displayName-count-one":"rial yemení","displayName-count-other":"riales yemeníes","symbol":"YER"},"YUD":{"displayName":"dinar fuerte yugoslavo","symbol":"YUD"},"YUM":{"displayName":"super dinar yugoslavo","symbol":"YUM"},"YUN":{"displayName":"dinar convertible yugoslavo","displayName-count-one":"dinar convertible yugoslavo","displayName-count-other":"dinares convertibles yugoslavos","symbol":"YUN"},"YUR":{"displayName":"YUR","symbol":"YUR"},"ZAL":{"displayName":"rand sudafricano (financiero)","symbol":"ZAL"},"ZAR":{"displayName":"rand","displayName-count-one":"rand","displayName-count-other":"rands","symbol":"ZAR","symbol-alt-narrow":"R"},"ZMK":{"displayName":"kwacha zambiano (1968–2012)","displayName-count-one":"kwacha zambiano (1968–2012)","displayName-count-other":"kwachas zambianos (1968–2012)","symbol":"ZMK"},"ZMW":{"displayName":"kuacha zambiano","displayName-count-one":"kuacha zambiano","displayName-count-other":"kuachas zambianos","symbol":"ZMW","symbol-alt-narrow":"ZK"},"ZRN":{"displayName":"nuevo zaire zaireño","symbol":"ZRN"},"ZRZ":{"displayName":"zaire zaireño","symbol":"ZRZ"},"ZWD":{"displayName":"dólar de Zimbabue","symbol":"ZWD"},"ZWL":{"displayName":"dólar zimbabuense","symbol":"ZWL"},"ZWR":{"displayName":"ZWR","symbol":"ZWR"}}}}}}');

/***/ }),

/***/ 53384:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"main":{"es-EC":{"identity":{"version":{"_cldrVersion":"36"},"language":"es","territory":"EC"},"numbers":{"defaultNumberingSystem":"latn","otherNumberingSystems":{"native":"latn"},"minimumGroupingDigits":"2","symbols-numberSystem-latn":{"decimal":",","group":".","list":";","percentSign":"%","plusSign":"+","minusSign":"-","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"},"decimalFormats-numberSystem-latn":{"standard":"#,##0.###","long":{"decimalFormat":{"1000-count-one":"0 mil","1000-count-other":"0 mil","10000-count-one":"00 mil","10000-count-other":"00 mil","100000-count-one":"000 mil","100000-count-other":"000 mil","1000000-count-one":"0 millón","1000000-count-other":"0 millones","10000000-count-one":"00 millones","10000000-count-other":"00 millones","100000000-count-one":"000 millones","100000000-count-other":"000 millones","1000000000-count-one":"0 mil millones","1000000000-count-other":"0 mil millones","10000000000-count-one":"00 mil millones","10000000000-count-other":"00 mil millones","100000000000-count-one":"000 mil millones","100000000000-count-other":"000 mil millones","1000000000000-count-one":"0 billón","1000000000000-count-other":"0 billón","10000000000000-count-one":"00 billones","10000000000000-count-other":"00 billones","100000000000000-count-one":"000 billones","100000000000000-count-other":"000 billones"}},"short":{"decimalFormat":{"1000-count-one":"0 K","1000-count-other":"0 K","10000-count-one":"00 k","10000-count-other":"00 k","100000-count-one":"000 k","100000-count-other":"000 k","1000000-count-one":"0 M","1000000-count-other":"0 M","10000000-count-one":"00 M","10000000-count-other":"00 M","100000000-count-one":"000 M","100000000-count-other":"000 M","1000000000-count-one":"0000 M","1000000000-count-other":"0000 M","10000000000-count-one":"00 mil M","10000000000-count-other":"00 mil M","100000000000-count-one":"000 mil M","100000000000-count-other":"000 mil M","1000000000000-count-one":"0 B","1000000000000-count-other":"0 B","10000000000000-count-one":"00 B","10000000000000-count-other":"00 B","100000000000000-count-one":"000 B","100000000000000-count-other":"000 B"}}},"scientificFormats-numberSystem-latn":{"standard":"#E0"},"percentFormats-numberSystem-latn":{"standard":"#,##0 %"},"currencyFormats-numberSystem-latn":{"currencySpacing":{"beforeCurrency":{"currencyMatch":"[:^S:]","surroundingMatch":"[:digit:]","insertBetween":" "},"afterCurrency":{"currencyMatch":"[:^S:]","surroundingMatch":"[:digit:]","insertBetween":" "}},"standard":"¤#,##0.00;¤-#,##0.00","accounting":"¤#,##0.00","short":{"standard":{"1000-count-one":"¤0 K","1000-count-other":"¤0 K","10000-count-one":"¤00 K","10000-count-other":"¤00 K","100000-count-one":"¤000 K","100000-count-other":"¤000 K","1000000-count-one":"¤0 M","1000000-count-other":"¤0 M","10000000-count-one":"¤00 M","10000000-count-other":"¤00 M","100000000-count-one":"¤000 M","100000000-count-other":"¤000 M","1000000000-count-one":"¤0000 M","1000000000-count-other":"¤0000 M","10000000000-count-one":"¤00 MRD","10000000000-count-other":"¤00 MRD","100000000000-count-one":"¤000 MRD","100000000000-count-other":"¤000 MRD","1000000000000-count-one":"¤0 B","1000000000000-count-other":"¤0 B","10000000000000-count-one":"¤00 B","10000000000000-count-other":"¤00 B","100000000000000-count-one":"¤000 B","100000000000000-count-other":"¤000 B"}},"unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"},"miscPatterns-numberSystem-latn":{"approximately":"~{0}","atLeast":"Más de {0}","atMost":"≤{0}","range":"{0}-{1}"},"minimalPairs":{"pluralMinimalPairs-count-one":"{0} día","pluralMinimalPairs-count-other":"{0} días","other":"Toma la {0}.ª a la derecha."}}}}}');

/***/ }),

/***/ 73520:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"supplemental":{"version":{"_unicodeVersion":"12.1.0","_cldrVersion":"36"},"currencyData":{"fractions":{"ADP":{"_rounding":"0","_digits":"0"},"AFN":{"_rounding":"0","_digits":"0"},"ALL":{"_rounding":"0","_digits":"0"},"AMD":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"BHD":{"_rounding":"0","_digits":"3"},"BIF":{"_rounding":"0","_digits":"0"},"BYN":{"_rounding":"0","_digits":"2"},"BYR":{"_rounding":"0","_digits":"0"},"CAD":{"_rounding":"0","_digits":"2","_cashRounding":"5"},"CHF":{"_rounding":"0","_digits":"2","_cashRounding":"5"},"CLF":{"_rounding":"0","_digits":"4"},"CLP":{"_rounding":"0","_digits":"0"},"COP":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"CRC":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"CZK":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"DEFAULT":{"_rounding":"0","_digits":"2"},"DJF":{"_rounding":"0","_digits":"0"},"DKK":{"_rounding":"0","_digits":"2","_cashRounding":"50"},"ESP":{"_rounding":"0","_digits":"0"},"GNF":{"_rounding":"0","_digits":"0"},"GYD":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"HUF":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"IDR":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"IQD":{"_rounding":"0","_digits":"0"},"IRR":{"_rounding":"0","_digits":"0"},"ISK":{"_rounding":"0","_digits":"0"},"ITL":{"_rounding":"0","_digits":"0"},"JOD":{"_rounding":"0","_digits":"3"},"JPY":{"_rounding":"0","_digits":"0"},"KMF":{"_rounding":"0","_digits":"0"},"KPW":{"_rounding":"0","_digits":"0"},"KRW":{"_rounding":"0","_digits":"0"},"KWD":{"_rounding":"0","_digits":"3"},"LAK":{"_rounding":"0","_digits":"0"},"LBP":{"_rounding":"0","_digits":"0"},"LUF":{"_rounding":"0","_digits":"0"},"LYD":{"_rounding":"0","_digits":"3"},"MGA":{"_rounding":"0","_digits":"0"},"MGF":{"_rounding":"0","_digits":"0"},"MMK":{"_rounding":"0","_digits":"0"},"MNT":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"MRO":{"_rounding":"0","_digits":"0"},"MUR":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"NOK":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"OMR":{"_rounding":"0","_digits":"3"},"PKR":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"PYG":{"_rounding":"0","_digits":"0"},"RSD":{"_rounding":"0","_digits":"0"},"RWF":{"_rounding":"0","_digits":"0"},"SEK":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"SLL":{"_rounding":"0","_digits":"0"},"SOS":{"_rounding":"0","_digits":"0"},"STD":{"_rounding":"0","_digits":"0"},"SYP":{"_rounding":"0","_digits":"0"},"TMM":{"_rounding":"0","_digits":"0"},"TND":{"_rounding":"0","_digits":"3"},"TRL":{"_rounding":"0","_digits":"0"},"TWD":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"TZS":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"UGX":{"_rounding":"0","_digits":"0"},"UYI":{"_rounding":"0","_digits":"0"},"UYW":{"_rounding":"0","_digits":"4"},"UZS":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"VEF":{"_rounding":"0","_digits":"2","_cashRounding":"0","_cashDigits":"0"},"VND":{"_rounding":"0","_digits":"0"},"VUV":{"_rounding":"0","_digits":"0"},"XAF":{"_rounding":"0","_digits":"0"},"XOF":{"_rounding":"0","_digits":"0"},"XPF":{"_rounding":"0","_digits":"0"},"YER":{"_rounding":"0","_digits":"0"},"ZMK":{"_rounding":"0","_digits":"0"},"ZWD":{"_rounding":"0","_digits":"0"}},"region":{"AC":[{"SHP":{"_from":"1976-01-01"}}],"AD":[{"ESP":{"_from":"1873-01-01","_to":"2002-02-28"}},{"ADP":{"_from":"1936-01-01","_to":"2001-12-31"}},{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"AE":[{"AED":{"_from":"1973-05-19"}}],"AF":[{"AFA":{"_from":"1927-03-14","_to":"2002-12-31"}},{"AFN":{"_from":"2002-10-07"}}],"AG":[{"XCD":{"_from":"1965-10-06"}}],"AI":[{"XCD":{"_from":"1965-10-06"}}],"AL":[{"ALK":{"_from":"1946-11-01","_to":"1965-08-16"}},{"ALL":{"_from":"1965-08-16"}}],"AM":[{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}},{"RUR":{"_from":"1991-12-25","_to":"1993-11-22"}},{"AMD":{"_from":"1993-11-22"}}],"AO":[{"AOK":{"_from":"1977-01-08","_to":"1991-03-01"}},{"AON":{"_from":"1990-09-25","_to":"2000-02-01"}},{"AOR":{"_from":"1995-07-01","_to":"2000-02-01"}},{"AOA":{"_from":"1999-12-13"}}],"AQ":[{"XXX":{"_tender":"false"}}],"AR":[{"ARM":{"_from":"1881-11-05","_to":"1970-01-01"}},{"ARL":{"_from":"1970-01-01","_to":"1983-06-01"}},{"ARP":{"_from":"1983-06-01","_to":"1985-06-14"}},{"ARA":{"_from":"1985-06-14","_to":"1992-01-01"}},{"ARS":{"_from":"1992-01-01"}}],"AS":[{"USD":{"_from":"1904-07-16"}}],"AT":[{"ATS":{"_from":"1947-12-04","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"AU":[{"AUD":{"_from":"1966-02-14"}}],"AW":[{"ANG":{"_from":"1940-05-10","_to":"1986-01-01"}},{"AWG":{"_from":"1986-01-01"}}],"AX":[{"EUR":{"_from":"1999-01-01"}}],"AZ":[{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}},{"RUR":{"_from":"1991-12-25","_to":"1994-01-01"}},{"AZM":{"_from":"1993-11-22","_to":"2006-12-31"}},{"AZN":{"_from":"2006-01-01"}}],"BA":[{"YUD":{"_from":"1966-01-01","_to":"1990-01-01"}},{"YUN":{"_from":"1990-01-01","_to":"1992-07-01"}},{"YUR":{"_from":"1992-07-01","_to":"1993-10-01"}},{"BAD":{"_from":"1992-07-01","_to":"1994-08-15"}},{"BAN":{"_from":"1994-08-15","_to":"1997-07-01"}},{"BAM":{"_from":"1995-01-01"}}],"BB":[{"XCD":{"_from":"1965-10-06","_to":"1973-12-03"}},{"BBD":{"_from":"1973-12-03"}}],"BD":[{"INR":{"_from":"1835-08-17","_to":"1948-04-01"}},{"PKR":{"_from":"1948-04-01","_to":"1972-01-01"}},{"BDT":{"_from":"1972-01-01"}}],"BE":[{"NLG":{"_from":"1816-12-15","_to":"1831-02-07"}},{"BEF":{"_from":"1831-02-07","_to":"2002-02-28"}},{"BEC":{"_tender":"false","_from":"1970-01-01","_to":"1990-03-05"}},{"BEL":{"_tender":"false","_from":"1970-01-01","_to":"1990-03-05"}},{"EUR":{"_from":"1999-01-01"}}],"BF":[{"XOF":{"_from":"1984-08-04"}}],"BG":[{"BGO":{"_from":"1879-07-08","_to":"1952-05-12"}},{"BGM":{"_from":"1952-05-12","_to":"1962-01-01"}},{"BGL":{"_from":"1962-01-01","_to":"1999-07-05"}},{"BGN":{"_from":"1999-07-05"}}],"BH":[{"BHD":{"_from":"1965-10-16"}}],"BI":[{"BIF":{"_from":"1964-05-19"}}],"BJ":[{"XOF":{"_from":"1975-11-30"}}],"BL":[{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"BM":[{"BMD":{"_from":"1970-02-06"}}],"BN":[{"MYR":{"_from":"1963-09-16","_to":"1967-06-12"}},{"BND":{"_from":"1967-06-12"}}],"BO":[{"BOV":{"_tender":"false"}},{"BOL":{"_from":"1863-06-23","_to":"1963-01-01"}},{"BOP":{"_from":"1963-01-01","_to":"1986-12-31"}},{"BOB":{"_from":"1987-01-01"}}],"BQ":[{"ANG":{"_from":"2010-10-10","_to":"2011-01-01"}},{"USD":{"_from":"2011-01-01"}}],"BR":[{"BRZ":{"_from":"1942-11-01","_to":"1967-02-13"}},{"BRB":{"_from":"1967-02-13","_to":"1986-02-28"}},{"BRC":{"_from":"1986-02-28","_to":"1989-01-15"}},{"BRN":{"_from":"1989-01-15","_to":"1990-03-16"}},{"BRE":{"_from":"1990-03-16","_to":"1993-08-01"}},{"BRR":{"_from":"1993-08-01","_to":"1994-07-01"}},{"BRL":{"_from":"1994-07-01"}}],"BS":[{"BSD":{"_from":"1966-05-25"}}],"BT":[{"INR":{"_from":"1907-01-01"}},{"BTN":{"_from":"1974-04-16"}}],"BU":[{"BUK":{"_from":"1952-07-01","_to":"1989-06-18"}}],"BV":[{"NOK":{"_from":"1905-06-07"}}],"BW":[{"ZAR":{"_from":"1961-02-14","_to":"1976-08-23"}},{"BWP":{"_from":"1976-08-23"}}],"BY":[{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}},{"RUR":{"_from":"1991-12-25","_to":"1994-11-08"}},{"BYB":{"_from":"1994-08-01","_to":"2000-12-31"}},{"BYR":{"_from":"2000-01-01","_to":"2017-01-01"}},{"BYN":{"_from":"2016-07-01"}}],"BZ":[{"BZD":{"_from":"1974-01-01"}}],"CA":[{"CAD":{"_from":"1858-01-01"}}],"CC":[{"AUD":{"_from":"1966-02-14"}}],"CD":[{"ZRZ":{"_from":"1971-10-27","_to":"1993-11-01"}},{"ZRN":{"_from":"1993-11-01","_to":"1998-07-01"}},{"CDF":{"_from":"1998-07-01"}}],"CF":[{"XAF":{"_from":"1993-01-01"}}],"CG":[{"XAF":{"_from":"1993-01-01"}}],"CH":[{"CHE":{"_tender":"false"}},{"CHW":{"_tender":"false"}},{"CHF":{"_from":"1799-03-17"}}],"CI":[{"XOF":{"_from":"1958-12-04"}}],"CK":[{"NZD":{"_from":"1967-07-10"}}],"CL":[{"CLF":{"_tender":"false"}},{"CLE":{"_from":"1960-01-01","_to":"1975-09-29"}},{"CLP":{"_from":"1975-09-29"}}],"CM":[{"XAF":{"_from":"1973-04-01"}}],"CN":[{"CNY":{"_from":"1953-03-01"}},{"CNX":{"_tender":"false","_from":"1979-01-01","_to":"1998-12-31"}},{"CNH":{"_tender":"false","_from":"2010-07-19"}}],"CO":[{"COU":{"_tender":"false"}},{"COP":{"_from":"1905-01-01"}}],"CP":[{"XXX":{"_tender":"false"}}],"CR":[{"CRC":{"_from":"1896-10-26"}}],"CS":[{"YUM":{"_from":"1994-01-24","_to":"2002-05-15"}},{"CSD":{"_from":"2002-05-15","_to":"2006-06-03"}},{"EUR":{"_from":"2003-02-04","_to":"2006-06-03"}}],"CU":[{"CUP":{"_from":"1859-01-01"}},{"USD":{"_from":"1899-01-01","_to":"1959-01-01"}},{"CUC":{"_from":"1994-01-01"}}],"CV":[{"PTE":{"_from":"1911-05-22","_to":"1975-07-05"}},{"CVE":{"_from":"1914-01-01"}}],"CW":[{"ANG":{"_from":"2010-10-10"}}],"CX":[{"AUD":{"_from":"1966-02-14"}}],"CY":[{"CYP":{"_from":"1914-09-10","_to":"2008-01-31"}},{"EUR":{"_from":"2008-01-01"}}],"CZ":[{"CSK":{"_from":"1953-06-01","_to":"1993-03-01"}},{"CZK":{"_from":"1993-01-01"}}],"DD":[{"DDM":{"_from":"1948-07-20","_to":"1990-10-02"}}],"DE":[{"DEM":{"_from":"1948-06-20","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"DG":[{"USD":{"_from":"1965-11-08"}}],"DJ":[{"DJF":{"_from":"1977-06-27"}}],"DK":[{"DKK":{"_from":"1873-05-27"}}],"DM":[{"XCD":{"_from":"1965-10-06"}}],"DO":[{"USD":{"_from":"1905-06-21","_to":"1947-10-01"}},{"DOP":{"_from":"1947-10-01"}}],"DZ":[{"DZD":{"_from":"1964-04-01"}}],"EA":[{"EUR":{"_from":"1999-01-01"}}],"EC":[{"ECS":{"_from":"1884-04-01","_to":"2000-10-02"}},{"ECV":{"_tender":"false","_from":"1993-05-23","_to":"2000-01-09"}},{"USD":{"_from":"2000-10-02"}}],"EE":[{"SUR":{"_from":"1961-01-01","_to":"1992-06-20"}},{"EEK":{"_from":"1992-06-21","_to":"2010-12-31"}},{"EUR":{"_from":"2011-01-01"}}],"EG":[{"EGP":{"_from":"1885-11-14"}}],"EH":[{"MAD":{"_from":"1976-02-26"}}],"ER":[{"ETB":{"_from":"1993-05-24","_to":"1997-11-08"}},{"ERN":{"_from":"1997-11-08"}}],"ES":[{"ESP":{"_from":"1868-10-19","_to":"2002-02-28"}},{"ESB":{"_tender":"false","_from":"1975-01-01","_to":"1994-12-31"}},{"ESA":{"_tender":"false","_from":"1978-01-01","_to":"1981-12-31"}},{"EUR":{"_from":"1999-01-01"}}],"ET":[{"ETB":{"_from":"1976-09-15"}}],"EU":[{"XEU":{"_tender":"false","_from":"1979-01-01","_to":"1998-12-31"}},{"EUR":{"_from":"1999-01-01"}}],"FI":[{"FIM":{"_from":"1963-01-01","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"FJ":[{"FJD":{"_from":"1969-01-13"}}],"FK":[{"FKP":{"_from":"1901-01-01"}}],"FM":[{"JPY":{"_from":"1914-10-03","_to":"1944-01-01"}},{"USD":{"_from":"1944-01-01"}}],"FO":[{"DKK":{"_from":"1948-01-01"}}],"FR":[{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"GA":[{"XAF":{"_from":"1993-01-01"}}],"GB":[{"GBP":{"_from":"1694-07-27"}}],"GD":[{"XCD":{"_from":"1967-02-27"}}],"GE":[{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}},{"RUR":{"_from":"1991-12-25","_to":"1993-06-11"}},{"GEK":{"_from":"1993-04-05","_to":"1995-09-25"}},{"GEL":{"_from":"1995-09-23"}}],"GF":[{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"GG":[{"GBP":{"_from":"1830-01-01"}}],"GH":[{"GHC":{"_from":"1979-03-09","_to":"2007-12-31"}},{"GHS":{"_from":"2007-07-03"}}],"GI":[{"GIP":{"_from":"1713-01-01"}}],"GL":[{"DKK":{"_from":"1873-05-27"}}],"GM":[{"GMD":{"_from":"1971-07-01"}}],"GN":[{"GNS":{"_from":"1972-10-02","_to":"1986-01-06"}},{"GNF":{"_from":"1986-01-06"}}],"GP":[{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"GQ":[{"GQE":{"_from":"1975-07-07","_to":"1986-06-01"}},{"XAF":{"_from":"1993-01-01"}}],"GR":[{"GRD":{"_from":"1954-05-01","_to":"2002-02-28"}},{"EUR":{"_from":"2001-01-01"}}],"GS":[{"GBP":{"_from":"1908-01-01"}}],"GT":[{"GTQ":{"_from":"1925-05-27"}}],"GU":[{"USD":{"_from":"1944-08-21"}}],"GW":[{"GWE":{"_from":"1914-01-01","_to":"1976-02-28"}},{"GWP":{"_from":"1976-02-28","_to":"1997-03-31"}},{"XOF":{"_from":"1997-03-31"}}],"GY":[{"GYD":{"_from":"1966-05-26"}}],"HK":[{"HKD":{"_from":"1895-02-02"}}],"HM":[{"AUD":{"_from":"1967-02-16"}}],"HN":[{"HNL":{"_from":"1926-04-03"}}],"HR":[{"YUD":{"_from":"1966-01-01","_to":"1990-01-01"}},{"YUN":{"_from":"1990-01-01","_to":"1991-12-23"}},{"HRD":{"_from":"1991-12-23","_to":"1995-01-01"}},{"HRK":{"_from":"1994-05-30"}}],"HT":[{"HTG":{"_from":"1872-08-26"}},{"USD":{"_from":"1915-01-01"}}],"HU":[{"HUF":{"_from":"1946-07-23"}}],"IC":[{"EUR":{"_from":"1999-01-01"}}],"ID":[{"IDR":{"_from":"1965-12-13"}}],"IE":[{"GBP":{"_from":"1800-01-01","_to":"1922-01-01"}},{"IEP":{"_from":"1922-01-01","_to":"2002-02-09"}},{"EUR":{"_from":"1999-01-01"}}],"IL":[{"ILP":{"_from":"1948-08-16","_to":"1980-02-22"}},{"ILR":{"_from":"1980-02-22","_to":"1985-09-04"}},{"ILS":{"_from":"1985-09-04"}}],"IM":[{"GBP":{"_from":"1840-01-03"}}],"IN":[{"INR":{"_from":"1835-08-17"}}],"IO":[{"USD":{"_from":"1965-11-08"}}],"IQ":[{"EGP":{"_from":"1920-11-11","_to":"1931-04-19"}},{"INR":{"_from":"1920-11-11","_to":"1931-04-19"}},{"IQD":{"_from":"1931-04-19"}}],"IR":[{"IRR":{"_from":"1932-05-13"}}],"IS":[{"DKK":{"_from":"1873-05-27","_to":"1918-12-01"}},{"ISJ":{"_from":"1918-12-01","_to":"1981-01-01"}},{"ISK":{"_from":"1981-01-01"}}],"IT":[{"ITL":{"_from":"1862-08-24","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"JE":[{"GBP":{"_from":"1837-01-01"}}],"JM":[{"JMD":{"_from":"1969-09-08"}}],"JO":[{"JOD":{"_from":"1950-07-01"}}],"JP":[{"JPY":{"_from":"1871-06-01"}}],"KE":[{"KES":{"_from":"1966-09-14"}}],"KG":[{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}},{"RUR":{"_from":"1991-12-25","_to":"1993-05-10"}},{"KGS":{"_from":"1993-05-10"}}],"KH":[{"KHR":{"_from":"1980-03-20"}}],"KI":[{"AUD":{"_from":"1966-02-14"}}],"KM":[{"KMF":{"_from":"1975-07-06"}}],"KN":[{"XCD":{"_from":"1965-10-06"}}],"KP":[{"KPW":{"_from":"1959-04-17"}}],"KR":[{"KRO":{"_from":"1945-08-15","_to":"1953-02-15"}},{"KRH":{"_from":"1953-02-15","_to":"1962-06-10"}},{"KRW":{"_from":"1962-06-10"}}],"KW":[{"KWD":{"_from":"1961-04-01"}}],"KY":[{"JMD":{"_from":"1969-09-08","_to":"1971-01-01"}},{"KYD":{"_from":"1971-01-01"}}],"KZ":[{"KZT":{"_from":"1993-11-05"}}],"LA":[{"LAK":{"_from":"1979-12-10"}}],"LB":[{"LBP":{"_from":"1948-02-02"}}],"LC":[{"XCD":{"_from":"1965-10-06"}}],"LI":[{"CHF":{"_from":"1921-02-01"}}],"LK":[{"LKR":{"_from":"1978-05-22"}}],"LR":[{"LRD":{"_from":"1944-01-01"}}],"LS":[{"ZAR":{"_from":"1961-02-14"}},{"LSL":{"_from":"1980-01-22"}}],"LT":[{"SUR":{"_from":"1961-01-01","_to":"1992-10-01"}},{"LTT":{"_from":"1992-10-01","_to":"1993-06-25"}},{"LTL":{"_from":"1993-06-25","_to":"2014-12-31"}},{"EUR":{"_from":"2015-01-01"}}],"LU":[{"LUF":{"_from":"1944-09-04","_to":"2002-02-28"}},{"LUC":{"_tender":"false","_from":"1970-01-01","_to":"1990-03-05"}},{"LUL":{"_tender":"false","_from":"1970-01-01","_to":"1990-03-05"}},{"EUR":{"_from":"1999-01-01"}}],"LV":[{"SUR":{"_from":"1961-01-01","_to":"1992-07-20"}},{"LVR":{"_from":"1992-05-07","_to":"1993-10-17"}},{"LVL":{"_from":"1993-06-28","_to":"2013-12-31"}},{"EUR":{"_from":"2014-01-01"}}],"LY":[{"LYD":{"_from":"1971-09-01"}}],"MA":[{"MAF":{"_from":"1881-01-01","_to":"1959-10-17"}},{"MAD":{"_from":"1959-10-17"}}],"MC":[{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"MCF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"MD":[{"MDC":{"_from":"1992-06-01","_to":"1993-11-29"}},{"MDL":{"_from":"1993-11-29"}}],"ME":[{"YUM":{"_from":"1994-01-24","_to":"2002-05-15"}},{"DEM":{"_from":"1999-10-02","_to":"2002-05-15"}},{"EUR":{"_from":"2002-01-01"}}],"MF":[{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"MG":[{"MGF":{"_from":"1963-07-01","_to":"2004-12-31"}},{"MGA":{"_from":"1983-11-01"}}],"MH":[{"USD":{"_from":"1944-01-01"}}],"MK":[{"MKN":{"_from":"1992-04-26","_to":"1993-05-20"}},{"MKD":{"_from":"1993-05-20"}}],"ML":[{"XOF":{"_from":"1958-11-24","_to":"1962-07-02"}},{"MLF":{"_from":"1962-07-02","_to":"1984-08-31"}},{"XOF":{"_from":"1984-06-01"}}],"MM":[{"BUK":{"_from":"1952-07-01","_to":"1989-06-18"}},{"MMK":{"_from":"1989-06-18"}}],"MN":[{"MNT":{"_from":"1915-03-01"}}],"MO":[{"MOP":{"_from":"1901-01-01"}}],"MP":[{"USD":{"_from":"1944-01-01"}}],"MQ":[{"FRF":{"_from":"1960-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"MR":[{"XOF":{"_from":"1958-11-28","_to":"1973-06-29"}},{"MRO":{"_from":"1973-06-29","_to":"2018-06-30"}},{"MRU":{"_from":"2018-01-01"}}],"MS":[{"XCD":{"_from":"1967-02-27"}}],"MT":[{"MTP":{"_from":"1914-08-13","_to":"1968-06-07"}},{"MTL":{"_from":"1968-06-07","_to":"2008-01-31"}},{"EUR":{"_from":"2008-01-01"}}],"MU":[{"MUR":{"_from":"1934-04-01"}}],"MV":[{"MVP":{"_from":"1947-01-01","_to":"1981-07-01"}},{"MVR":{"_from":"1981-07-01"}}],"MW":[{"MWK":{"_from":"1971-02-15"}}],"MX":[{"MXV":{"_tender":"false"}},{"MXP":{"_from":"1822-01-01","_to":"1992-12-31"}},{"MXN":{"_from":"1993-01-01"}}],"MY":[{"MYR":{"_from":"1963-09-16"}}],"MZ":[{"MZE":{"_from":"1975-06-25","_to":"1980-06-16"}},{"MZM":{"_from":"1980-06-16","_to":"2006-12-31"}},{"MZN":{"_from":"2006-07-01"}}],"NA":[{"ZAR":{"_from":"1961-02-14"}},{"NAD":{"_from":"1993-01-01"}}],"NC":[{"XPF":{"_from":"1985-01-01"}}],"NE":[{"XOF":{"_from":"1958-12-19"}}],"NF":[{"AUD":{"_from":"1966-02-14"}}],"NG":[{"NGN":{"_from":"1973-01-01"}}],"NI":[{"NIC":{"_from":"1988-02-15","_to":"1991-04-30"}},{"NIO":{"_from":"1991-04-30"}}],"NL":[{"NLG":{"_from":"1813-01-01","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"NO":[{"SEK":{"_from":"1873-05-27","_to":"1905-06-07"}},{"NOK":{"_from":"1905-06-07"}}],"NP":[{"INR":{"_from":"1870-01-01","_to":"1966-10-17"}},{"NPR":{"_from":"1933-01-01"}}],"NR":[{"AUD":{"_from":"1966-02-14"}}],"NU":[{"NZD":{"_from":"1967-07-10"}}],"NZ":[{"NZD":{"_from":"1967-07-10"}}],"OM":[{"OMR":{"_from":"1972-11-11"}}],"PA":[{"PAB":{"_from":"1903-11-04"}},{"USD":{"_from":"1903-11-18"}}],"PE":[{"PES":{"_from":"1863-02-14","_to":"1985-02-01"}},{"PEI":{"_from":"1985-02-01","_to":"1991-07-01"}},{"PEN":{"_from":"1991-07-01"}}],"PF":[{"XPF":{"_from":"1945-12-26"}}],"PG":[{"AUD":{"_from":"1966-02-14","_to":"1975-09-16"}},{"PGK":{"_from":"1975-09-16"}}],"PH":[{"PHP":{"_from":"1946-07-04"}}],"PK":[{"INR":{"_from":"1835-08-17","_to":"1947-08-15"}},{"PKR":{"_from":"1948-04-01"}}],"PL":[{"PLZ":{"_from":"1950-10-28","_to":"1994-12-31"}},{"PLN":{"_from":"1995-01-01"}}],"PM":[{"FRF":{"_from":"1972-12-21","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"PN":[{"NZD":{"_from":"1969-01-13"}}],"PR":[{"ESP":{"_from":"1800-01-01","_to":"1898-12-10"}},{"USD":{"_from":"1898-12-10"}}],"PS":[{"JOD":{"_from":"1950-07-01","_to":"1967-06-01"}},{"ILP":{"_from":"1967-06-01","_to":"1980-02-22"}},{"ILS":{"_from":"1985-09-04"}},{"JOD":{"_from":"1996-02-12"}}],"PT":[{"PTE":{"_from":"1911-05-22","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"PW":[{"USD":{"_from":"1944-01-01"}}],"PY":[{"PYG":{"_from":"1943-11-01"}}],"QA":[{"QAR":{"_from":"1973-05-19"}}],"RE":[{"FRF":{"_from":"1975-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"RO":[{"ROL":{"_from":"1952-01-28","_to":"2006-12-31"}},{"RON":{"_from":"2005-07-01"}}],"RS":[{"YUM":{"_from":"1994-01-24","_to":"2002-05-15"}},{"CSD":{"_from":"2002-05-15","_to":"2006-10-25"}},{"RSD":{"_from":"2006-10-25"}}],"RU":[{"RUR":{"_from":"1991-12-25","_to":"1998-12-31"}},{"RUB":{"_from":"1999-01-01"}}],"RW":[{"RWF":{"_from":"1964-05-19"}}],"SA":[{"SAR":{"_from":"1952-10-22"}}],"SB":[{"AUD":{"_from":"1966-02-14","_to":"1978-06-30"}},{"SBD":{"_from":"1977-10-24"}}],"SC":[{"SCR":{"_from":"1903-11-01"}}],"SD":[{"EGP":{"_from":"1889-01-19","_to":"1958-01-01"}},{"GBP":{"_from":"1889-01-19","_to":"1958-01-01"}},{"SDP":{"_from":"1957-04-08","_to":"1998-06-01"}},{"SDD":{"_from":"1992-06-08","_to":"2007-06-30"}},{"SDG":{"_from":"2007-01-10"}}],"SE":[{"SEK":{"_from":"1873-05-27"}}],"SG":[{"MYR":{"_from":"1963-09-16","_to":"1967-06-12"}},{"SGD":{"_from":"1967-06-12"}}],"SH":[{"SHP":{"_from":"1917-02-15"}}],"SI":[{"SIT":{"_from":"1992-10-07","_to":"2007-01-14"}},{"EUR":{"_from":"2007-01-01"}}],"SJ":[{"NOK":{"_from":"1905-06-07"}}],"SK":[{"CSK":{"_from":"1953-06-01","_to":"1992-12-31"}},{"SKK":{"_from":"1992-12-31","_to":"2009-01-01"}},{"EUR":{"_from":"2009-01-01"}}],"SL":[{"GBP":{"_from":"1808-11-30","_to":"1966-02-04"}},{"SLL":{"_from":"1964-08-04"}}],"SM":[{"ITL":{"_from":"1865-12-23","_to":"2001-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"SN":[{"XOF":{"_from":"1959-04-04"}}],"SO":[{"SOS":{"_from":"1960-07-01"}}],"SR":[{"NLG":{"_from":"1815-11-20","_to":"1940-05-10"}},{"SRG":{"_from":"1940-05-10","_to":"2003-12-31"}},{"SRD":{"_from":"2004-01-01"}}],"SS":[{"SDG":{"_from":"2007-01-10","_to":"2011-09-01"}},{"SSP":{"_from":"2011-07-18"}}],"ST":[{"STD":{"_from":"1977-09-08","_to":"2017-12-31"}},{"STN":{"_from":"2018-01-01"}}],"SU":[{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}}],"SV":[{"SVC":{"_from":"1919-11-11","_to":"2001-01-01"}},{"USD":{"_from":"2001-01-01"}}],"SX":[{"ANG":{"_from":"2010-10-10"}}],"SY":[{"SYP":{"_from":"1948-01-01"}}],"SZ":[{"SZL":{"_from":"1974-09-06"}}],"TA":[{"GBP":{"_from":"1938-01-12"}}],"TC":[{"USD":{"_from":"1969-09-08"}}],"TD":[{"XAF":{"_from":"1993-01-01"}}],"TF":[{"FRF":{"_from":"1959-01-01","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"TG":[{"XOF":{"_from":"1958-11-28"}}],"TH":[{"THB":{"_from":"1928-04-15"}}],"TJ":[{"RUR":{"_from":"1991-12-25","_to":"1995-05-10"}},{"TJR":{"_from":"1995-05-10","_to":"2000-10-25"}},{"TJS":{"_from":"2000-10-26"}}],"TK":[{"NZD":{"_from":"1967-07-10"}}],"TL":[{"TPE":{"_from":"1959-01-02","_to":"2002-05-20"}},{"IDR":{"_from":"1975-12-07","_to":"2002-05-20"}},{"USD":{"_from":"1999-10-20"}}],"TM":[{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}},{"RUR":{"_from":"1991-12-25","_to":"1993-11-01"}},{"TMM":{"_from":"1993-11-01","_to":"2009-01-01"}},{"TMT":{"_from":"2009-01-01"}}],"TN":[{"TND":{"_from":"1958-11-01"}}],"TO":[{"TOP":{"_from":"1966-02-14"}}],"TP":[{"TPE":{"_from":"1959-01-02","_to":"2002-05-20"}},{"IDR":{"_from":"1975-12-07","_to":"2002-05-20"}}],"TR":[{"TRL":{"_from":"1922-11-01","_to":"2005-12-31"}},{"TRY":{"_from":"2005-01-01"}}],"TT":[{"TTD":{"_from":"1964-01-01"}}],"TV":[{"AUD":{"_from":"1966-02-14"}}],"TW":[{"TWD":{"_from":"1949-06-15"}}],"TZ":[{"TZS":{"_from":"1966-06-14"}}],"UA":[{"SUR":{"_from":"1961-01-01","_to":"1991-12-25"}},{"RUR":{"_from":"1991-12-25","_to":"1992-11-13"}},{"UAK":{"_from":"1992-11-13","_to":"1993-10-17"}},{"UAH":{"_from":"1996-09-02"}}],"UG":[{"UGS":{"_from":"1966-08-15","_to":"1987-05-15"}},{"UGX":{"_from":"1987-05-15"}}],"UM":[{"USD":{"_from":"1944-01-01"}}],"US":[{"USN":{"_tender":"false"}},{"USS":{"_tender":"false","_to":"2014-03-01"}},{"USD":{"_from":"1792-01-01"}}],"UY":[{"UYI":{"_tender":"false"}},{"UYW":{"_tender":"false"}},{"UYP":{"_from":"1975-07-01","_to":"1993-03-01"}},{"UYU":{"_from":"1993-03-01"}}],"UZ":[{"UZS":{"_from":"1994-07-01"}}],"VA":[{"ITL":{"_from":"1870-10-19","_to":"2002-02-28"}},{"EUR":{"_from":"1999-01-01"}}],"VC":[{"XCD":{"_from":"1965-10-06"}}],"VE":[{"VEB":{"_from":"1871-05-11","_to":"2008-06-30"}},{"VEF":{"_from":"2008-01-01","_to":"2018-08-20"}},{"VES":{"_from":"2018-08-20"}}],"VG":[{"USD":{"_from":"1833-01-01"}},{"GBP":{"_from":"1833-01-01","_to":"1959-01-01"}}],"VI":[{"USD":{"_from":"1837-01-01"}}],"VN":[{"VNN":{"_from":"1978-05-03","_to":"1985-09-14"}},{"VND":{"_from":"1985-09-14"}}],"VU":[{"VUV":{"_from":"1981-01-01"}}],"WF":[{"XPF":{"_from":"1961-07-30"}}],"WS":[{"WST":{"_from":"1967-07-10"}}],"XK":[{"YUM":{"_from":"1994-01-24","_to":"1999-09-30"}},{"DEM":{"_from":"1999-09-01","_to":"2002-03-09"}},{"EUR":{"_from":"2002-01-01"}}],"YD":[{"YDD":{"_from":"1965-04-01","_to":"1996-01-01"}}],"YE":[{"YER":{"_from":"1990-05-22"}}],"YT":[{"KMF":{"_from":"1975-01-01","_to":"1976-02-23"}},{"FRF":{"_from":"1976-02-23","_to":"2002-02-17"}},{"EUR":{"_from":"1999-01-01"}}],"YU":[{"YUD":{"_from":"1966-01-01","_to":"1990-01-01"}},{"YUN":{"_from":"1990-01-01","_to":"1992-07-24"}},{"YUM":{"_from":"1994-01-24","_to":"2002-05-15"}}],"ZA":[{"ZAR":{"_from":"1961-02-14"}},{"ZAL":{"_tender":"false","_from":"1985-09-01","_to":"1995-03-13"}}],"ZM":[{"ZMK":{"_from":"1968-01-16","_to":"2013-01-01"}},{"ZMW":{"_from":"2013-01-01"}}],"ZR":[{"ZRZ":{"_from":"1971-10-27","_to":"1993-11-01"}},{"ZRN":{"_from":"1993-11-01","_to":"1998-07-31"}}],"ZW":[{"RHD":{"_from":"1970-02-17","_to":"1980-04-18"}},{"ZWD":{"_from":"1980-04-18","_to":"2008-08-01"}},{"ZWR":{"_from":"2008-08-01","_to":"2009-02-02"}},{"ZWL":{"_from":"2009-02-02","_to":"2009-04-12"}},{"USD":{"_from":"2009-04-12"}}],"ZZ":[{"XAG":{"_tender":"false"}},{"XAU":{"_tender":"false"}},{"XBA":{"_tender":"false"}},{"XBB":{"_tender":"false"}},{"XBC":{"_tender":"false"}},{"XBD":{"_tender":"false"}},{"XDR":{"_tender":"false"}},{"XPD":{"_tender":"false"}},{"XPT":{"_tender":"false"}},{"XSU":{"_tender":"false"}},{"XTS":{"_tender":"false"}},{"XUA":{"_tender":"false"}},{"XXX":{"_tender":"false"}},{"XRE":{"_tender":"false","_to":"1999-11-30"}},{"XFU":{"_tender":"false","_to":"2013-11-30"}},{"XFO":{"_tender":"false","_from":"1930-01-01","_to":"2003-04-01"}}]}}}}');

/***/ }),

/***/ 84786:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"supplemental":{"version":{"_unicodeVersion":"12.1.0","_cldrVersion":"36"},"likelySubtags":{"aa":"aa-Latn-ET","aai":"aai-Latn-ZZ","aak":"aak-Latn-ZZ","aau":"aau-Latn-ZZ","ab":"ab-Cyrl-GE","abi":"abi-Latn-ZZ","abq":"abq-Cyrl-ZZ","abr":"abr-Latn-GH","abt":"abt-Latn-ZZ","aby":"aby-Latn-ZZ","acd":"acd-Latn-ZZ","ace":"ace-Latn-ID","ach":"ach-Latn-UG","ada":"ada-Latn-GH","ade":"ade-Latn-ZZ","adj":"adj-Latn-ZZ","adp":"adp-Tibt-BT","ady":"ady-Cyrl-RU","adz":"adz-Latn-ZZ","ae":"ae-Avst-IR","aeb":"aeb-Arab-TN","aey":"aey-Latn-ZZ","af":"af-Latn-ZA","agc":"agc-Latn-ZZ","agd":"agd-Latn-ZZ","agg":"agg-Latn-ZZ","agm":"agm-Latn-ZZ","ago":"ago-Latn-ZZ","agq":"agq-Latn-CM","aha":"aha-Latn-ZZ","ahl":"ahl-Latn-ZZ","aho":"aho-Ahom-IN","ajg":"ajg-Latn-ZZ","ak":"ak-Latn-GH","akk":"akk-Xsux-IQ","ala":"ala-Latn-ZZ","ali":"ali-Latn-ZZ","aln":"aln-Latn-XK","alt":"alt-Cyrl-RU","am":"am-Ethi-ET","amm":"amm-Latn-ZZ","amn":"amn-Latn-ZZ","amo":"amo-Latn-NG","amp":"amp-Latn-ZZ","an":"an-Latn-ES","anc":"anc-Latn-ZZ","ank":"ank-Latn-ZZ","ann":"ann-Latn-ZZ","any":"any-Latn-ZZ","aoj":"aoj-Latn-ZZ","aom":"aom-Latn-ZZ","aoz":"aoz-Latn-ID","apc":"apc-Arab-ZZ","apd":"apd-Arab-TG","ape":"ape-Latn-ZZ","apr":"apr-Latn-ZZ","aps":"aps-Latn-ZZ","apz":"apz-Latn-ZZ","ar":"ar-Arab-EG","arc":"arc-Armi-IR","arc-Nbat":"arc-Nbat-JO","arc-Palm":"arc-Palm-SY","arh":"arh-Latn-ZZ","arn":"arn-Latn-CL","aro":"aro-Latn-BO","arq":"arq-Arab-DZ","ars":"ars-Arab-SA","ary":"ary-Arab-MA","arz":"arz-Arab-EG","as":"as-Beng-IN","asa":"asa-Latn-TZ","ase":"ase-Sgnw-US","asg":"asg-Latn-ZZ","aso":"aso-Latn-ZZ","ast":"ast-Latn-ES","ata":"ata-Latn-ZZ","atg":"atg-Latn-ZZ","atj":"atj-Latn-CA","auy":"auy-Latn-ZZ","av":"av-Cyrl-RU","avl":"avl-Arab-ZZ","avn":"avn-Latn-ZZ","avt":"avt-Latn-ZZ","avu":"avu-Latn-ZZ","awa":"awa-Deva-IN","awb":"awb-Latn-ZZ","awo":"awo-Latn-ZZ","awx":"awx-Latn-ZZ","ay":"ay-Latn-BO","ayb":"ayb-Latn-ZZ","az":"az-Latn-AZ","az-Arab":"az-Arab-IR","az-IQ":"az-Arab-IQ","az-IR":"az-Arab-IR","az-RU":"az-Cyrl-RU","ba":"ba-Cyrl-RU","bal":"bal-Arab-PK","ban":"ban-Latn-ID","bap":"bap-Deva-NP","bar":"bar-Latn-AT","bas":"bas-Latn-CM","bav":"bav-Latn-ZZ","bax":"bax-Bamu-CM","bba":"bba-Latn-ZZ","bbb":"bbb-Latn-ZZ","bbc":"bbc-Latn-ID","bbd":"bbd-Latn-ZZ","bbj":"bbj-Latn-CM","bbp":"bbp-Latn-ZZ","bbr":"bbr-Latn-ZZ","bcf":"bcf-Latn-ZZ","bch":"bch-Latn-ZZ","bci":"bci-Latn-CI","bcm":"bcm-Latn-ZZ","bcn":"bcn-Latn-ZZ","bco":"bco-Latn-ZZ","bcq":"bcq-Ethi-ZZ","bcu":"bcu-Latn-ZZ","bdd":"bdd-Latn-ZZ","be":"be-Cyrl-BY","bef":"bef-Latn-ZZ","beh":"beh-Latn-ZZ","bej":"bej-Arab-SD","bem":"bem-Latn-ZM","bet":"bet-Latn-ZZ","bew":"bew-Latn-ID","bex":"bex-Latn-ZZ","bez":"bez-Latn-TZ","bfd":"bfd-Latn-CM","bfq":"bfq-Taml-IN","bft":"bft-Arab-PK","bfy":"bfy-Deva-IN","bg":"bg-Cyrl-BG","bgc":"bgc-Deva-IN","bgn":"bgn-Arab-PK","bgx":"bgx-Grek-TR","bhb":"bhb-Deva-IN","bhg":"bhg-Latn-ZZ","bhi":"bhi-Deva-IN","bhl":"bhl-Latn-ZZ","bho":"bho-Deva-IN","bhy":"bhy-Latn-ZZ","bi":"bi-Latn-VU","bib":"bib-Latn-ZZ","big":"big-Latn-ZZ","bik":"bik-Latn-PH","bim":"bim-Latn-ZZ","bin":"bin-Latn-NG","bio":"bio-Latn-ZZ","biq":"biq-Latn-ZZ","bjh":"bjh-Latn-ZZ","bji":"bji-Ethi-ZZ","bjj":"bjj-Deva-IN","bjn":"bjn-Latn-ID","bjo":"bjo-Latn-ZZ","bjr":"bjr-Latn-ZZ","bjt":"bjt-Latn-SN","bjz":"bjz-Latn-ZZ","bkc":"bkc-Latn-ZZ","bkm":"bkm-Latn-CM","bkq":"bkq-Latn-ZZ","bku":"bku-Latn-PH","bkv":"bkv-Latn-ZZ","blt":"blt-Tavt-VN","bm":"bm-Latn-ML","bmh":"bmh-Latn-ZZ","bmk":"bmk-Latn-ZZ","bmq":"bmq-Latn-ML","bmu":"bmu-Latn-ZZ","bn":"bn-Beng-BD","bng":"bng-Latn-ZZ","bnm":"bnm-Latn-ZZ","bnp":"bnp-Latn-ZZ","bo":"bo-Tibt-CN","boj":"boj-Latn-ZZ","bom":"bom-Latn-ZZ","bon":"bon-Latn-ZZ","bpy":"bpy-Beng-IN","bqc":"bqc-Latn-ZZ","bqi":"bqi-Arab-IR","bqp":"bqp-Latn-ZZ","bqv":"bqv-Latn-CI","br":"br-Latn-FR","bra":"bra-Deva-IN","brh":"brh-Arab-PK","brx":"brx-Deva-IN","brz":"brz-Latn-ZZ","bs":"bs-Latn-BA","bsj":"bsj-Latn-ZZ","bsq":"bsq-Bass-LR","bss":"bss-Latn-CM","bst":"bst-Ethi-ZZ","bto":"bto-Latn-PH","btt":"btt-Latn-ZZ","btv":"btv-Deva-PK","bua":"bua-Cyrl-RU","buc":"buc-Latn-YT","bud":"bud-Latn-ZZ","bug":"bug-Latn-ID","buk":"buk-Latn-ZZ","bum":"bum-Latn-CM","buo":"buo-Latn-ZZ","bus":"bus-Latn-ZZ","buu":"buu-Latn-ZZ","bvb":"bvb-Latn-GQ","bwd":"bwd-Latn-ZZ","bwr":"bwr-Latn-ZZ","bxh":"bxh-Latn-ZZ","bye":"bye-Latn-ZZ","byn":"byn-Ethi-ER","byr":"byr-Latn-ZZ","bys":"bys-Latn-ZZ","byv":"byv-Latn-CM","byx":"byx-Latn-ZZ","bza":"bza-Latn-ZZ","bze":"bze-Latn-ML","bzf":"bzf-Latn-ZZ","bzh":"bzh-Latn-ZZ","bzw":"bzw-Latn-ZZ","ca":"ca-Latn-ES","can":"can-Latn-ZZ","cbj":"cbj-Latn-ZZ","cch":"cch-Latn-NG","ccp":"ccp-Cakm-BD","ce":"ce-Cyrl-RU","ceb":"ceb-Latn-PH","cfa":"cfa-Latn-ZZ","cgg":"cgg-Latn-UG","ch":"ch-Latn-GU","chk":"chk-Latn-FM","chm":"chm-Cyrl-RU","cho":"cho-Latn-US","chp":"chp-Latn-CA","chr":"chr-Cher-US","cic":"cic-Latn-US","cja":"cja-Arab-KH","cjm":"cjm-Cham-VN","cjv":"cjv-Latn-ZZ","ckb":"ckb-Arab-IQ","ckl":"ckl-Latn-ZZ","cko":"cko-Latn-ZZ","cky":"cky-Latn-ZZ","cla":"cla-Latn-ZZ","cme":"cme-Latn-ZZ","cmg":"cmg-Soyo-MN","co":"co-Latn-FR","cop":"cop-Copt-EG","cps":"cps-Latn-PH","cr":"cr-Cans-CA","crh":"crh-Cyrl-UA","crj":"crj-Cans-CA","crk":"crk-Cans-CA","crl":"crl-Cans-CA","crm":"crm-Cans-CA","crs":"crs-Latn-SC","cs":"cs-Latn-CZ","csb":"csb-Latn-PL","csw":"csw-Cans-CA","ctd":"ctd-Pauc-MM","cu":"cu-Cyrl-RU","cu-Glag":"cu-Glag-BG","cv":"cv-Cyrl-RU","cy":"cy-Latn-GB","da":"da-Latn-DK","dad":"dad-Latn-ZZ","daf":"daf-Latn-ZZ","dag":"dag-Latn-ZZ","dah":"dah-Latn-ZZ","dak":"dak-Latn-US","dar":"dar-Cyrl-RU","dav":"dav-Latn-KE","dbd":"dbd-Latn-ZZ","dbq":"dbq-Latn-ZZ","dcc":"dcc-Arab-IN","ddn":"ddn-Latn-ZZ","de":"de-Latn-DE","ded":"ded-Latn-ZZ","den":"den-Latn-CA","dga":"dga-Latn-ZZ","dgh":"dgh-Latn-ZZ","dgi":"dgi-Latn-ZZ","dgl":"dgl-Arab-ZZ","dgr":"dgr-Latn-CA","dgz":"dgz-Latn-ZZ","dia":"dia-Latn-ZZ","dje":"dje-Latn-NE","dnj":"dnj-Latn-CI","dob":"dob-Latn-ZZ","doi":"doi-Arab-IN","dop":"dop-Latn-ZZ","dow":"dow-Latn-ZZ","drh":"drh-Mong-CN","dri":"dri-Latn-ZZ","drs":"drs-Ethi-ZZ","dsb":"dsb-Latn-DE","dtm":"dtm-Latn-ML","dtp":"dtp-Latn-MY","dts":"dts-Latn-ZZ","dty":"dty-Deva-NP","dua":"dua-Latn-CM","duc":"duc-Latn-ZZ","dud":"dud-Latn-ZZ","dug":"dug-Latn-ZZ","dv":"dv-Thaa-MV","dva":"dva-Latn-ZZ","dww":"dww-Latn-ZZ","dyo":"dyo-Latn-SN","dyu":"dyu-Latn-BF","dz":"dz-Tibt-BT","dzg":"dzg-Latn-ZZ","ebu":"ebu-Latn-KE","ee":"ee-Latn-GH","efi":"efi-Latn-NG","egl":"egl-Latn-IT","egy":"egy-Egyp-EG","eka":"eka-Latn-ZZ","eky":"eky-Kali-MM","el":"el-Grek-GR","ema":"ema-Latn-ZZ","emi":"emi-Latn-ZZ","en":"en-Latn-US","en-Shaw":"en-Shaw-GB","enn":"enn-Latn-ZZ","enq":"enq-Latn-ZZ","eo":"eo-Latn-001","eri":"eri-Latn-ZZ","es":"es-Latn-ES","esg":"esg-Gonm-IN","esu":"esu-Latn-US","et":"et-Latn-EE","etr":"etr-Latn-ZZ","ett":"ett-Ital-IT","etu":"etu-Latn-ZZ","etx":"etx-Latn-ZZ","eu":"eu-Latn-ES","ewo":"ewo-Latn-CM","ext":"ext-Latn-ES","fa":"fa-Arab-IR","faa":"faa-Latn-ZZ","fab":"fab-Latn-ZZ","fag":"fag-Latn-ZZ","fai":"fai-Latn-ZZ","fan":"fan-Latn-GQ","ff":"ff-Latn-SN","ff-Adlm":"ff-Adlm-GN","ffi":"ffi-Latn-ZZ","ffm":"ffm-Latn-ML","fi":"fi-Latn-FI","fia":"fia-Arab-SD","fil":"fil-Latn-PH","fit":"fit-Latn-SE","fj":"fj-Latn-FJ","flr":"flr-Latn-ZZ","fmp":"fmp-Latn-ZZ","fo":"fo-Latn-FO","fod":"fod-Latn-ZZ","fon":"fon-Latn-BJ","for":"for-Latn-ZZ","fpe":"fpe-Latn-ZZ","fqs":"fqs-Latn-ZZ","fr":"fr-Latn-FR","frc":"frc-Latn-US","frp":"frp-Latn-FR","frr":"frr-Latn-DE","frs":"frs-Latn-DE","fub":"fub-Arab-CM","fud":"fud-Latn-WF","fue":"fue-Latn-ZZ","fuf":"fuf-Latn-GN","fuh":"fuh-Latn-ZZ","fuq":"fuq-Latn-NE","fur":"fur-Latn-IT","fuv":"fuv-Latn-NG","fuy":"fuy-Latn-ZZ","fvr":"fvr-Latn-SD","fy":"fy-Latn-NL","ga":"ga-Latn-IE","gaa":"gaa-Latn-GH","gaf":"gaf-Latn-ZZ","gag":"gag-Latn-MD","gah":"gah-Latn-ZZ","gaj":"gaj-Latn-ZZ","gam":"gam-Latn-ZZ","gan":"gan-Hans-CN","gaw":"gaw-Latn-ZZ","gay":"gay-Latn-ID","gba":"gba-Latn-ZZ","gbf":"gbf-Latn-ZZ","gbm":"gbm-Deva-IN","gby":"gby-Latn-ZZ","gbz":"gbz-Arab-IR","gcr":"gcr-Latn-GF","gd":"gd-Latn-GB","gde":"gde-Latn-ZZ","gdn":"gdn-Latn-ZZ","gdr":"gdr-Latn-ZZ","geb":"geb-Latn-ZZ","gej":"gej-Latn-ZZ","gel":"gel-Latn-ZZ","gez":"gez-Ethi-ET","gfk":"gfk-Latn-ZZ","ggn":"ggn-Deva-NP","ghs":"ghs-Latn-ZZ","gil":"gil-Latn-KI","gim":"gim-Latn-ZZ","gjk":"gjk-Arab-PK","gjn":"gjn-Latn-ZZ","gju":"gju-Arab-PK","gkn":"gkn-Latn-ZZ","gkp":"gkp-Latn-ZZ","gl":"gl-Latn-ES","glk":"glk-Arab-IR","gmm":"gmm-Latn-ZZ","gmv":"gmv-Ethi-ZZ","gn":"gn-Latn-PY","gnd":"gnd-Latn-ZZ","gng":"gng-Latn-ZZ","god":"god-Latn-ZZ","gof":"gof-Ethi-ZZ","goi":"goi-Latn-ZZ","gom":"gom-Deva-IN","gon":"gon-Telu-IN","gor":"gor-Latn-ID","gos":"gos-Latn-NL","got":"got-Goth-UA","grb":"grb-Latn-ZZ","grc":"grc-Cprt-CY","grc-Linb":"grc-Linb-GR","grt":"grt-Beng-IN","grw":"grw-Latn-ZZ","gsw":"gsw-Latn-CH","gu":"gu-Gujr-IN","gub":"gub-Latn-BR","guc":"guc-Latn-CO","gud":"gud-Latn-ZZ","gur":"gur-Latn-GH","guw":"guw-Latn-ZZ","gux":"gux-Latn-ZZ","guz":"guz-Latn-KE","gv":"gv-Latn-IM","gvf":"gvf-Latn-ZZ","gvr":"gvr-Deva-NP","gvs":"gvs-Latn-ZZ","gwc":"gwc-Arab-ZZ","gwi":"gwi-Latn-CA","gwt":"gwt-Arab-ZZ","gyi":"gyi-Latn-ZZ","ha":"ha-Latn-NG","ha-CM":"ha-Arab-CM","ha-SD":"ha-Arab-SD","hag":"hag-Latn-ZZ","hak":"hak-Hans-CN","ham":"ham-Latn-ZZ","haw":"haw-Latn-US","haz":"haz-Arab-AF","hbb":"hbb-Latn-ZZ","hdy":"hdy-Ethi-ZZ","he":"he-Hebr-IL","hhy":"hhy-Latn-ZZ","hi":"hi-Deva-IN","hia":"hia-Latn-ZZ","hif":"hif-Latn-FJ","hig":"hig-Latn-ZZ","hih":"hih-Latn-ZZ","hil":"hil-Latn-PH","hla":"hla-Latn-ZZ","hlu":"hlu-Hluw-TR","hmd":"hmd-Plrd-CN","hmt":"hmt-Latn-ZZ","hnd":"hnd-Arab-PK","hne":"hne-Deva-IN","hnj":"hnj-Hmng-LA","hnn":"hnn-Latn-PH","hno":"hno-Arab-PK","ho":"ho-Latn-PG","hoc":"hoc-Deva-IN","hoj":"hoj-Deva-IN","hot":"hot-Latn-ZZ","hr":"hr-Latn-HR","hsb":"hsb-Latn-DE","hsn":"hsn-Hans-CN","ht":"ht-Latn-HT","hu":"hu-Latn-HU","hui":"hui-Latn-ZZ","hy":"hy-Armn-AM","hz":"hz-Latn-NA","ia":"ia-Latn-001","ian":"ian-Latn-ZZ","iar":"iar-Latn-ZZ","iba":"iba-Latn-MY","ibb":"ibb-Latn-NG","iby":"iby-Latn-ZZ","ica":"ica-Latn-ZZ","ich":"ich-Latn-ZZ","id":"id-Latn-ID","idd":"idd-Latn-ZZ","idi":"idi-Latn-ZZ","idu":"idu-Latn-ZZ","ife":"ife-Latn-TG","ig":"ig-Latn-NG","igb":"igb-Latn-ZZ","ige":"ige-Latn-ZZ","ii":"ii-Yiii-CN","ijj":"ijj-Latn-ZZ","ik":"ik-Latn-US","ikk":"ikk-Latn-ZZ","ikt":"ikt-Latn-CA","ikw":"ikw-Latn-ZZ","ikx":"ikx-Latn-ZZ","ilo":"ilo-Latn-PH","imo":"imo-Latn-ZZ","in":"in-Latn-ID","inh":"inh-Cyrl-RU","io":"io-Latn-001","iou":"iou-Latn-ZZ","iri":"iri-Latn-ZZ","is":"is-Latn-IS","it":"it-Latn-IT","iu":"iu-Cans-CA","iw":"iw-Hebr-IL","iwm":"iwm-Latn-ZZ","iws":"iws-Latn-ZZ","izh":"izh-Latn-RU","izi":"izi-Latn-ZZ","ja":"ja-Jpan-JP","jab":"jab-Latn-ZZ","jam":"jam-Latn-JM","jbo":"jbo-Latn-001","jbu":"jbu-Latn-ZZ","jen":"jen-Latn-ZZ","jgk":"jgk-Latn-ZZ","jgo":"jgo-Latn-CM","ji":"ji-Hebr-UA","jib":"jib-Latn-ZZ","jmc":"jmc-Latn-TZ","jml":"jml-Deva-NP","jra":"jra-Latn-ZZ","jut":"jut-Latn-DK","jv":"jv-Latn-ID","jw":"jw-Latn-ID","ka":"ka-Geor-GE","kaa":"kaa-Cyrl-UZ","kab":"kab-Latn-DZ","kac":"kac-Latn-MM","kad":"kad-Latn-ZZ","kai":"kai-Latn-ZZ","kaj":"kaj-Latn-NG","kam":"kam-Latn-KE","kao":"kao-Latn-ML","kbd":"kbd-Cyrl-RU","kbm":"kbm-Latn-ZZ","kbp":"kbp-Latn-ZZ","kbq":"kbq-Latn-ZZ","kbx":"kbx-Latn-ZZ","kby":"kby-Arab-NE","kcg":"kcg-Latn-NG","kck":"kck-Latn-ZW","kcl":"kcl-Latn-ZZ","kct":"kct-Latn-ZZ","kde":"kde-Latn-TZ","kdh":"kdh-Arab-TG","kdl":"kdl-Latn-ZZ","kdt":"kdt-Thai-TH","kea":"kea-Latn-CV","ken":"ken-Latn-CM","kez":"kez-Latn-ZZ","kfo":"kfo-Latn-CI","kfr":"kfr-Deva-IN","kfy":"kfy-Deva-IN","kg":"kg-Latn-CD","kge":"kge-Latn-ID","kgf":"kgf-Latn-ZZ","kgp":"kgp-Latn-BR","kha":"kha-Latn-IN","khb":"khb-Talu-CN","khn":"khn-Deva-IN","khq":"khq-Latn-ML","khs":"khs-Latn-ZZ","kht":"kht-Mymr-IN","khw":"khw-Arab-PK","khz":"khz-Latn-ZZ","ki":"ki-Latn-KE","kij":"kij-Latn-ZZ","kiu":"kiu-Latn-TR","kiw":"kiw-Latn-ZZ","kj":"kj-Latn-NA","kjd":"kjd-Latn-ZZ","kjg":"kjg-Laoo-LA","kjs":"kjs-Latn-ZZ","kjy":"kjy-Latn-ZZ","kk":"kk-Cyrl-KZ","kk-AF":"kk-Arab-AF","kk-Arab":"kk-Arab-CN","kk-CN":"kk-Arab-CN","kk-IR":"kk-Arab-IR","kk-MN":"kk-Arab-MN","kkc":"kkc-Latn-ZZ","kkj":"kkj-Latn-CM","kl":"kl-Latn-GL","kln":"kln-Latn-KE","klq":"klq-Latn-ZZ","klt":"klt-Latn-ZZ","klx":"klx-Latn-ZZ","km":"km-Khmr-KH","kmb":"kmb-Latn-AO","kmh":"kmh-Latn-ZZ","kmo":"kmo-Latn-ZZ","kms":"kms-Latn-ZZ","kmu":"kmu-Latn-ZZ","kmw":"kmw-Latn-ZZ","kn":"kn-Knda-IN","knf":"knf-Latn-GW","knp":"knp-Latn-ZZ","ko":"ko-Kore-KR","koi":"koi-Cyrl-RU","kok":"kok-Deva-IN","kol":"kol-Latn-ZZ","kos":"kos-Latn-FM","koz":"koz-Latn-ZZ","kpe":"kpe-Latn-LR","kpf":"kpf-Latn-ZZ","kpo":"kpo-Latn-ZZ","kpr":"kpr-Latn-ZZ","kpx":"kpx-Latn-ZZ","kqb":"kqb-Latn-ZZ","kqf":"kqf-Latn-ZZ","kqs":"kqs-Latn-ZZ","kqy":"kqy-Ethi-ZZ","kr":"kr-Latn-ZZ","krc":"krc-Cyrl-RU","kri":"kri-Latn-SL","krj":"krj-Latn-PH","krl":"krl-Latn-RU","krs":"krs-Latn-ZZ","kru":"kru-Deva-IN","ks":"ks-Arab-IN","ksb":"ksb-Latn-TZ","ksd":"ksd-Latn-ZZ","ksf":"ksf-Latn-CM","ksh":"ksh-Latn-DE","ksj":"ksj-Latn-ZZ","ksr":"ksr-Latn-ZZ","ktb":"ktb-Ethi-ZZ","ktm":"ktm-Latn-ZZ","kto":"kto-Latn-ZZ","ktr":"ktr-Latn-MY","ku":"ku-Latn-TR","ku-Arab":"ku-Arab-IQ","ku-LB":"ku-Arab-LB","kub":"kub-Latn-ZZ","kud":"kud-Latn-ZZ","kue":"kue-Latn-ZZ","kuj":"kuj-Latn-ZZ","kum":"kum-Cyrl-RU","kun":"kun-Latn-ZZ","kup":"kup-Latn-ZZ","kus":"kus-Latn-ZZ","kv":"kv-Cyrl-RU","kvg":"kvg-Latn-ZZ","kvr":"kvr-Latn-ID","kvx":"kvx-Arab-PK","kw":"kw-Latn-GB","kwj":"kwj-Latn-ZZ","kwo":"kwo-Latn-ZZ","kwq":"kwq-Latn-ZZ","kxa":"kxa-Latn-ZZ","kxc":"kxc-Ethi-ZZ","kxe":"kxe-Latn-ZZ","kxm":"kxm-Thai-TH","kxp":"kxp-Arab-PK","kxw":"kxw-Latn-ZZ","kxz":"kxz-Latn-ZZ","ky":"ky-Cyrl-KG","ky-Arab":"ky-Arab-CN","ky-CN":"ky-Arab-CN","ky-Latn":"ky-Latn-TR","ky-TR":"ky-Latn-TR","kye":"kye-Latn-ZZ","kyx":"kyx-Latn-ZZ","kzj":"kzj-Latn-MY","kzr":"kzr-Latn-ZZ","kzt":"kzt-Latn-MY","la":"la-Latn-VA","lab":"lab-Lina-GR","lad":"lad-Hebr-IL","lag":"lag-Latn-TZ","lah":"lah-Arab-PK","laj":"laj-Latn-UG","las":"las-Latn-ZZ","lb":"lb-Latn-LU","lbe":"lbe-Cyrl-RU","lbu":"lbu-Latn-ZZ","lbw":"lbw-Latn-ID","lcm":"lcm-Latn-ZZ","lcp":"lcp-Thai-CN","ldb":"ldb-Latn-ZZ","led":"led-Latn-ZZ","lee":"lee-Latn-ZZ","lem":"lem-Latn-ZZ","lep":"lep-Lepc-IN","leq":"leq-Latn-ZZ","leu":"leu-Latn-ZZ","lez":"lez-Cyrl-RU","lg":"lg-Latn-UG","lgg":"lgg-Latn-ZZ","li":"li-Latn-NL","lia":"lia-Latn-ZZ","lid":"lid-Latn-ZZ","lif":"lif-Deva-NP","lif-Limb":"lif-Limb-IN","lig":"lig-Latn-ZZ","lih":"lih-Latn-ZZ","lij":"lij-Latn-IT","lis":"lis-Lisu-CN","ljp":"ljp-Latn-ID","lki":"lki-Arab-IR","lkt":"lkt-Latn-US","lle":"lle-Latn-ZZ","lln":"lln-Latn-ZZ","lmn":"lmn-Telu-IN","lmo":"lmo-Latn-IT","lmp":"lmp-Latn-ZZ","ln":"ln-Latn-CD","lns":"lns-Latn-ZZ","lnu":"lnu-Latn-ZZ","lo":"lo-Laoo-LA","loj":"loj-Latn-ZZ","lok":"lok-Latn-ZZ","lol":"lol-Latn-CD","lor":"lor-Latn-ZZ","los":"los-Latn-ZZ","loz":"loz-Latn-ZM","lrc":"lrc-Arab-IR","lt":"lt-Latn-LT","ltg":"ltg-Latn-LV","lu":"lu-Latn-CD","lua":"lua-Latn-CD","luo":"luo-Latn-KE","luy":"luy-Latn-KE","luz":"luz-Arab-IR","lv":"lv-Latn-LV","lwl":"lwl-Thai-TH","lzh":"lzh-Hans-CN","lzz":"lzz-Latn-TR","mad":"mad-Latn-ID","maf":"maf-Latn-CM","mag":"mag-Deva-IN","mai":"mai-Deva-IN","mak":"mak-Latn-ID","man":"man-Latn-GM","man-GN":"man-Nkoo-GN","man-Nkoo":"man-Nkoo-GN","mas":"mas-Latn-KE","maw":"maw-Latn-ZZ","maz":"maz-Latn-MX","mbh":"mbh-Latn-ZZ","mbo":"mbo-Latn-ZZ","mbq":"mbq-Latn-ZZ","mbu":"mbu-Latn-ZZ","mbw":"mbw-Latn-ZZ","mci":"mci-Latn-ZZ","mcp":"mcp-Latn-ZZ","mcq":"mcq-Latn-ZZ","mcr":"mcr-Latn-ZZ","mcu":"mcu-Latn-ZZ","mda":"mda-Latn-ZZ","mde":"mde-Arab-ZZ","mdf":"mdf-Cyrl-RU","mdh":"mdh-Latn-PH","mdj":"mdj-Latn-ZZ","mdr":"mdr-Latn-ID","mdx":"mdx-Ethi-ZZ","med":"med-Latn-ZZ","mee":"mee-Latn-ZZ","mek":"mek-Latn-ZZ","men":"men-Latn-SL","mer":"mer-Latn-KE","met":"met-Latn-ZZ","meu":"meu-Latn-ZZ","mfa":"mfa-Arab-TH","mfe":"mfe-Latn-MU","mfn":"mfn-Latn-ZZ","mfo":"mfo-Latn-ZZ","mfq":"mfq-Latn-ZZ","mg":"mg-Latn-MG","mgh":"mgh-Latn-MZ","mgl":"mgl-Latn-ZZ","mgo":"mgo-Latn-CM","mgp":"mgp-Deva-NP","mgy":"mgy-Latn-TZ","mh":"mh-Latn-MH","mhi":"mhi-Latn-ZZ","mhl":"mhl-Latn-ZZ","mi":"mi-Latn-NZ","mif":"mif-Latn-ZZ","min":"min-Latn-ID","mis":"mis-Hatr-IQ","mis-Medf":"mis-Medf-NG","miw":"miw-Latn-ZZ","mk":"mk-Cyrl-MK","mki":"mki-Arab-ZZ","mkl":"mkl-Latn-ZZ","mkp":"mkp-Latn-ZZ","mkw":"mkw-Latn-ZZ","ml":"ml-Mlym-IN","mle":"mle-Latn-ZZ","mlp":"mlp-Latn-ZZ","mls":"mls-Latn-SD","mmo":"mmo-Latn-ZZ","mmu":"mmu-Latn-ZZ","mmx":"mmx-Latn-ZZ","mn":"mn-Cyrl-MN","mn-CN":"mn-Mong-CN","mn-Mong":"mn-Mong-CN","mna":"mna-Latn-ZZ","mnf":"mnf-Latn-ZZ","mni":"mni-Beng-IN","mnw":"mnw-Mymr-MM","mo":"mo-Latn-RO","moa":"moa-Latn-ZZ","moe":"moe-Latn-CA","moh":"moh-Latn-CA","mos":"mos-Latn-BF","mox":"mox-Latn-ZZ","mpp":"mpp-Latn-ZZ","mps":"mps-Latn-ZZ","mpt":"mpt-Latn-ZZ","mpx":"mpx-Latn-ZZ","mql":"mql-Latn-ZZ","mr":"mr-Deva-IN","mrd":"mrd-Deva-NP","mrj":"mrj-Cyrl-RU","mro":"mro-Mroo-BD","ms":"ms-Latn-MY","ms-CC":"ms-Arab-CC","ms-ID":"ms-Arab-ID","mt":"mt-Latn-MT","mtc":"mtc-Latn-ZZ","mtf":"mtf-Latn-ZZ","mti":"mti-Latn-ZZ","mtr":"mtr-Deva-IN","mua":"mua-Latn-CM","mur":"mur-Latn-ZZ","mus":"mus-Latn-US","mva":"mva-Latn-ZZ","mvn":"mvn-Latn-ZZ","mvy":"mvy-Arab-PK","mwk":"mwk-Latn-ML","mwr":"mwr-Deva-IN","mwv":"mwv-Latn-ID","mww":"mww-Hmnp-US","mxc":"mxc-Latn-ZW","mxm":"mxm-Latn-ZZ","my":"my-Mymr-MM","myk":"myk-Latn-ZZ","mym":"mym-Ethi-ZZ","myv":"myv-Cyrl-RU","myw":"myw-Latn-ZZ","myx":"myx-Latn-UG","myz":"myz-Mand-IR","mzk":"mzk-Latn-ZZ","mzm":"mzm-Latn-ZZ","mzn":"mzn-Arab-IR","mzp":"mzp-Latn-ZZ","mzw":"mzw-Latn-ZZ","mzz":"mzz-Latn-ZZ","na":"na-Latn-NR","nac":"nac-Latn-ZZ","naf":"naf-Latn-ZZ","nak":"nak-Latn-ZZ","nan":"nan-Hans-CN","nap":"nap-Latn-IT","naq":"naq-Latn-NA","nas":"nas-Latn-ZZ","nb":"nb-Latn-NO","nca":"nca-Latn-ZZ","nce":"nce-Latn-ZZ","ncf":"ncf-Latn-ZZ","nch":"nch-Latn-MX","nco":"nco-Latn-ZZ","ncu":"ncu-Latn-ZZ","nd":"nd-Latn-ZW","ndc":"ndc-Latn-MZ","nds":"nds-Latn-DE","ne":"ne-Deva-NP","neb":"neb-Latn-ZZ","new":"new-Deva-NP","nex":"nex-Latn-ZZ","nfr":"nfr-Latn-ZZ","ng":"ng-Latn-NA","nga":"nga-Latn-ZZ","ngb":"ngb-Latn-ZZ","ngl":"ngl-Latn-MZ","nhb":"nhb-Latn-ZZ","nhe":"nhe-Latn-MX","nhw":"nhw-Latn-MX","nif":"nif-Latn-ZZ","nii":"nii-Latn-ZZ","nij":"nij-Latn-ID","nin":"nin-Latn-ZZ","niu":"niu-Latn-NU","niy":"niy-Latn-ZZ","niz":"niz-Latn-ZZ","njo":"njo-Latn-IN","nkg":"nkg-Latn-ZZ","nko":"nko-Latn-ZZ","nl":"nl-Latn-NL","nmg":"nmg-Latn-CM","nmz":"nmz-Latn-ZZ","nn":"nn-Latn-NO","nnf":"nnf-Latn-ZZ","nnh":"nnh-Latn-CM","nnk":"nnk-Latn-ZZ","nnm":"nnm-Latn-ZZ","nnp":"nnp-Wcho-IN","no":"no-Latn-NO","nod":"nod-Lana-TH","noe":"noe-Deva-IN","non":"non-Runr-SE","nop":"nop-Latn-ZZ","nou":"nou-Latn-ZZ","nqo":"nqo-Nkoo-GN","nr":"nr-Latn-ZA","nrb":"nrb-Latn-ZZ","nsk":"nsk-Cans-CA","nsn":"nsn-Latn-ZZ","nso":"nso-Latn-ZA","nss":"nss-Latn-ZZ","ntm":"ntm-Latn-ZZ","ntr":"ntr-Latn-ZZ","nui":"nui-Latn-ZZ","nup":"nup-Latn-ZZ","nus":"nus-Latn-SS","nuv":"nuv-Latn-ZZ","nux":"nux-Latn-ZZ","nv":"nv-Latn-US","nwb":"nwb-Latn-ZZ","nxq":"nxq-Latn-CN","nxr":"nxr-Latn-ZZ","ny":"ny-Latn-MW","nym":"nym-Latn-TZ","nyn":"nyn-Latn-UG","nzi":"nzi-Latn-GH","oc":"oc-Latn-FR","ogc":"ogc-Latn-ZZ","okr":"okr-Latn-ZZ","okv":"okv-Latn-ZZ","om":"om-Latn-ET","ong":"ong-Latn-ZZ","onn":"onn-Latn-ZZ","ons":"ons-Latn-ZZ","opm":"opm-Latn-ZZ","or":"or-Orya-IN","oro":"oro-Latn-ZZ","oru":"oru-Arab-ZZ","os":"os-Cyrl-GE","osa":"osa-Osge-US","ota":"ota-Arab-ZZ","otk":"otk-Orkh-MN","ozm":"ozm-Latn-ZZ","pa":"pa-Guru-IN","pa-Arab":"pa-Arab-PK","pa-PK":"pa-Arab-PK","pag":"pag-Latn-PH","pal":"pal-Phli-IR","pal-Phlp":"pal-Phlp-CN","pam":"pam-Latn-PH","pap":"pap-Latn-AW","pau":"pau-Latn-PW","pbi":"pbi-Latn-ZZ","pcd":"pcd-Latn-FR","pcm":"pcm-Latn-NG","pdc":"pdc-Latn-US","pdt":"pdt-Latn-CA","ped":"ped-Latn-ZZ","peo":"peo-Xpeo-IR","pex":"pex-Latn-ZZ","pfl":"pfl-Latn-DE","phl":"phl-Arab-ZZ","phn":"phn-Phnx-LB","pil":"pil-Latn-ZZ","pip":"pip-Latn-ZZ","pka":"pka-Brah-IN","pko":"pko-Latn-KE","pl":"pl-Latn-PL","pla":"pla-Latn-ZZ","pms":"pms-Latn-IT","png":"png-Latn-ZZ","pnn":"pnn-Latn-ZZ","pnt":"pnt-Grek-GR","pon":"pon-Latn-FM","ppa":"ppa-Deva-IN","ppo":"ppo-Latn-ZZ","pra":"pra-Khar-PK","prd":"prd-Arab-IR","prg":"prg-Latn-001","ps":"ps-Arab-AF","pss":"pss-Latn-ZZ","pt":"pt-Latn-BR","ptp":"ptp-Latn-ZZ","puu":"puu-Latn-GA","pwa":"pwa-Latn-ZZ","qu":"qu-Latn-PE","quc":"quc-Latn-GT","qug":"qug-Latn-EC","rai":"rai-Latn-ZZ","raj":"raj-Deva-IN","rao":"rao-Latn-ZZ","rcf":"rcf-Latn-RE","rej":"rej-Latn-ID","rel":"rel-Latn-ZZ","res":"res-Latn-ZZ","rgn":"rgn-Latn-IT","rhg":"rhg-Arab-MM","ria":"ria-Latn-IN","rif":"rif-Tfng-MA","rif-NL":"rif-Latn-NL","rjs":"rjs-Deva-NP","rkt":"rkt-Beng-BD","rm":"rm-Latn-CH","rmf":"rmf-Latn-FI","rmo":"rmo-Latn-CH","rmt":"rmt-Arab-IR","rmu":"rmu-Latn-SE","rn":"rn-Latn-BI","rna":"rna-Latn-ZZ","rng":"rng-Latn-MZ","ro":"ro-Latn-RO","rob":"rob-Latn-ID","rof":"rof-Latn-TZ","roo":"roo-Latn-ZZ","rro":"rro-Latn-ZZ","rtm":"rtm-Latn-FJ","ru":"ru-Cyrl-RU","rue":"rue-Cyrl-UA","rug":"rug-Latn-SB","rw":"rw-Latn-RW","rwk":"rwk-Latn-TZ","rwo":"rwo-Latn-ZZ","ryu":"ryu-Kana-JP","sa":"sa-Deva-IN","saf":"saf-Latn-GH","sah":"sah-Cyrl-RU","saq":"saq-Latn-KE","sas":"sas-Latn-ID","sat":"sat-Latn-IN","sav":"sav-Latn-SN","saz":"saz-Saur-IN","sba":"sba-Latn-ZZ","sbe":"sbe-Latn-ZZ","sbp":"sbp-Latn-TZ","sc":"sc-Latn-IT","sck":"sck-Deva-IN","scl":"scl-Arab-ZZ","scn":"scn-Latn-IT","sco":"sco-Latn-GB","scs":"scs-Latn-CA","sd":"sd-Arab-PK","sd-Deva":"sd-Deva-IN","sd-Khoj":"sd-Khoj-IN","sd-Sind":"sd-Sind-IN","sdc":"sdc-Latn-IT","sdh":"sdh-Arab-IR","se":"se-Latn-NO","sef":"sef-Latn-CI","seh":"seh-Latn-MZ","sei":"sei-Latn-MX","ses":"ses-Latn-ML","sg":"sg-Latn-CF","sga":"sga-Ogam-IE","sgs":"sgs-Latn-LT","sgw":"sgw-Ethi-ZZ","sgz":"sgz-Latn-ZZ","shi":"shi-Tfng-MA","shk":"shk-Latn-ZZ","shn":"shn-Mymr-MM","shu":"shu-Arab-ZZ","si":"si-Sinh-LK","sid":"sid-Latn-ET","sig":"sig-Latn-ZZ","sil":"sil-Latn-ZZ","sim":"sim-Latn-ZZ","sjr":"sjr-Latn-ZZ","sk":"sk-Latn-SK","skc":"skc-Latn-ZZ","skr":"skr-Arab-PK","sks":"sks-Latn-ZZ","sl":"sl-Latn-SI","sld":"sld-Latn-ZZ","sli":"sli-Latn-PL","sll":"sll-Latn-ZZ","sly":"sly-Latn-ID","sm":"sm-Latn-WS","sma":"sma-Latn-SE","smj":"smj-Latn-SE","smn":"smn-Latn-FI","smp":"smp-Samr-IL","smq":"smq-Latn-ZZ","sms":"sms-Latn-FI","sn":"sn-Latn-ZW","snc":"snc-Latn-ZZ","snk":"snk-Latn-ML","snp":"snp-Latn-ZZ","snx":"snx-Latn-ZZ","sny":"sny-Latn-ZZ","so":"so-Latn-SO","sog":"sog-Sogd-UZ","sok":"sok-Latn-ZZ","soq":"soq-Latn-ZZ","sou":"sou-Thai-TH","soy":"soy-Latn-ZZ","spd":"spd-Latn-ZZ","spl":"spl-Latn-ZZ","sps":"sps-Latn-ZZ","sq":"sq-Latn-AL","sr":"sr-Cyrl-RS","sr-ME":"sr-Latn-ME","sr-RO":"sr-Latn-RO","sr-RU":"sr-Latn-RU","sr-TR":"sr-Latn-TR","srb":"srb-Sora-IN","srn":"srn-Latn-SR","srr":"srr-Latn-SN","srx":"srx-Deva-IN","ss":"ss-Latn-ZA","ssd":"ssd-Latn-ZZ","ssg":"ssg-Latn-ZZ","ssy":"ssy-Latn-ER","st":"st-Latn-ZA","stk":"stk-Latn-ZZ","stq":"stq-Latn-DE","su":"su-Latn-ID","sua":"sua-Latn-ZZ","sue":"sue-Latn-ZZ","suk":"suk-Latn-TZ","sur":"sur-Latn-ZZ","sus":"sus-Latn-GN","sv":"sv-Latn-SE","sw":"sw-Latn-TZ","swb":"swb-Arab-YT","swc":"swc-Latn-CD","swg":"swg-Latn-DE","swp":"swp-Latn-ZZ","swv":"swv-Deva-IN","sxn":"sxn-Latn-ID","sxw":"sxw-Latn-ZZ","syl":"syl-Beng-BD","syr":"syr-Syrc-IQ","szl":"szl-Latn-PL","ta":"ta-Taml-IN","taj":"taj-Deva-NP","tal":"tal-Latn-ZZ","tan":"tan-Latn-ZZ","taq":"taq-Latn-ZZ","tbc":"tbc-Latn-ZZ","tbd":"tbd-Latn-ZZ","tbf":"tbf-Latn-ZZ","tbg":"tbg-Latn-ZZ","tbo":"tbo-Latn-ZZ","tbw":"tbw-Latn-PH","tbz":"tbz-Latn-ZZ","tci":"tci-Latn-ZZ","tcy":"tcy-Knda-IN","tdd":"tdd-Tale-CN","tdg":"tdg-Deva-NP","tdh":"tdh-Deva-NP","tdu":"tdu-Latn-MY","te":"te-Telu-IN","ted":"ted-Latn-ZZ","tem":"tem-Latn-SL","teo":"teo-Latn-UG","tet":"tet-Latn-TL","tfi":"tfi-Latn-ZZ","tg":"tg-Cyrl-TJ","tg-Arab":"tg-Arab-PK","tg-PK":"tg-Arab-PK","tgc":"tgc-Latn-ZZ","tgo":"tgo-Latn-ZZ","tgu":"tgu-Latn-ZZ","th":"th-Thai-TH","thl":"thl-Deva-NP","thq":"thq-Deva-NP","thr":"thr-Deva-NP","ti":"ti-Ethi-ET","tif":"tif-Latn-ZZ","tig":"tig-Ethi-ER","tik":"tik-Latn-ZZ","tim":"tim-Latn-ZZ","tio":"tio-Latn-ZZ","tiv":"tiv-Latn-NG","tk":"tk-Latn-TM","tkl":"tkl-Latn-TK","tkr":"tkr-Latn-AZ","tkt":"tkt-Deva-NP","tl":"tl-Latn-PH","tlf":"tlf-Latn-ZZ","tlx":"tlx-Latn-ZZ","tly":"tly-Latn-AZ","tmh":"tmh-Latn-NE","tmy":"tmy-Latn-ZZ","tn":"tn-Latn-ZA","tnh":"tnh-Latn-ZZ","to":"to-Latn-TO","tof":"tof-Latn-ZZ","tog":"tog-Latn-MW","toq":"toq-Latn-ZZ","tpi":"tpi-Latn-PG","tpm":"tpm-Latn-ZZ","tpz":"tpz-Latn-ZZ","tqo":"tqo-Latn-ZZ","tr":"tr-Latn-TR","tru":"tru-Latn-TR","trv":"trv-Latn-TW","trw":"trw-Arab-ZZ","ts":"ts-Latn-ZA","tsd":"tsd-Grek-GR","tsf":"tsf-Deva-NP","tsg":"tsg-Latn-PH","tsj":"tsj-Tibt-BT","tsw":"tsw-Latn-ZZ","tt":"tt-Cyrl-RU","ttd":"ttd-Latn-ZZ","tte":"tte-Latn-ZZ","ttj":"ttj-Latn-UG","ttr":"ttr-Latn-ZZ","tts":"tts-Thai-TH","ttt":"ttt-Latn-AZ","tuh":"tuh-Latn-ZZ","tul":"tul-Latn-ZZ","tum":"tum-Latn-MW","tuq":"tuq-Latn-ZZ","tvd":"tvd-Latn-ZZ","tvl":"tvl-Latn-TV","tvu":"tvu-Latn-ZZ","twh":"twh-Latn-ZZ","twq":"twq-Latn-NE","txg":"txg-Tang-CN","ty":"ty-Latn-PF","tya":"tya-Latn-ZZ","tyv":"tyv-Cyrl-RU","tzm":"tzm-Latn-MA","ubu":"ubu-Latn-ZZ","udm":"udm-Cyrl-RU","ug":"ug-Arab-CN","ug-Cyrl":"ug-Cyrl-KZ","ug-KZ":"ug-Cyrl-KZ","ug-MN":"ug-Cyrl-MN","uga":"uga-Ugar-SY","uk":"uk-Cyrl-UA","uli":"uli-Latn-FM","umb":"umb-Latn-AO","und":"en-Latn-US","und-002":"en-Latn-NG","und-003":"en-Latn-US","und-005":"pt-Latn-BR","und-009":"en-Latn-AU","und-011":"en-Latn-NG","und-013":"es-Latn-MX","und-014":"sw-Latn-TZ","und-015":"ar-Arab-EG","und-017":"sw-Latn-CD","und-018":"en-Latn-ZA","und-019":"en-Latn-US","und-021":"en-Latn-US","und-029":"es-Latn-CU","und-030":"zh-Hans-CN","und-034":"hi-Deva-IN","und-035":"id-Latn-ID","und-039":"it-Latn-IT","und-053":"en-Latn-AU","und-054":"en-Latn-PG","und-057":"en-Latn-GU","und-061":"sm-Latn-WS","und-142":"zh-Hans-CN","und-143":"uz-Latn-UZ","und-145":"ar-Arab-SA","und-150":"ru-Cyrl-RU","und-151":"ru-Cyrl-RU","und-154":"en-Latn-GB","und-155":"de-Latn-DE","und-202":"en-Latn-NG","und-419":"es-Latn-419","und-AD":"ca-Latn-AD","und-Adlm":"ff-Adlm-GN","und-AE":"ar-Arab-AE","und-AF":"fa-Arab-AF","und-Aghb":"lez-Aghb-RU","und-Ahom":"aho-Ahom-IN","und-AL":"sq-Latn-AL","und-AM":"hy-Armn-AM","und-AO":"pt-Latn-AO","und-AQ":"und-Latn-AQ","und-AR":"es-Latn-AR","und-Arab":"ar-Arab-EG","und-Arab-CC":"ms-Arab-CC","und-Arab-CN":"ug-Arab-CN","und-Arab-GB":"ks-Arab-GB","und-Arab-ID":"ms-Arab-ID","und-Arab-IN":"ur-Arab-IN","und-Arab-KH":"cja-Arab-KH","und-Arab-MM":"rhg-Arab-MM","und-Arab-MN":"kk-Arab-MN","und-Arab-MU":"ur-Arab-MU","und-Arab-NG":"ha-Arab-NG","und-Arab-PK":"ur-Arab-PK","und-Arab-TG":"apd-Arab-TG","und-Arab-TH":"mfa-Arab-TH","und-Arab-TJ":"fa-Arab-TJ","und-Arab-TR":"az-Arab-TR","und-Arab-YT":"swb-Arab-YT","und-Armi":"arc-Armi-IR","und-Armn":"hy-Armn-AM","und-AS":"sm-Latn-AS","und-AT":"de-Latn-AT","und-Avst":"ae-Avst-IR","und-AW":"nl-Latn-AW","und-AX":"sv-Latn-AX","und-AZ":"az-Latn-AZ","und-BA":"bs-Latn-BA","und-Bali":"ban-Bali-ID","und-Bamu":"bax-Bamu-CM","und-Bass":"bsq-Bass-LR","und-Batk":"bbc-Batk-ID","und-BD":"bn-Beng-BD","und-BE":"nl-Latn-BE","und-Beng":"bn-Beng-BD","und-BF":"fr-Latn-BF","und-BG":"bg-Cyrl-BG","und-BH":"ar-Arab-BH","und-Bhks":"sa-Bhks-IN","und-BI":"rn-Latn-BI","und-BJ":"fr-Latn-BJ","und-BL":"fr-Latn-BL","und-BN":"ms-Latn-BN","und-BO":"es-Latn-BO","und-Bopo":"zh-Bopo-TW","und-BQ":"pap-Latn-BQ","und-BR":"pt-Latn-BR","und-Brah":"pka-Brah-IN","und-Brai":"fr-Brai-FR","und-BT":"dz-Tibt-BT","und-Bugi":"bug-Bugi-ID","und-Buhd":"bku-Buhd-PH","und-BV":"und-Latn-BV","und-BY":"be-Cyrl-BY","und-Cakm":"ccp-Cakm-BD","und-Cans":"cr-Cans-CA","und-Cari":"xcr-Cari-TR","und-CD":"sw-Latn-CD","und-CF":"fr-Latn-CF","und-CG":"fr-Latn-CG","und-CH":"de-Latn-CH","und-Cham":"cjm-Cham-VN","und-Cher":"chr-Cher-US","und-CI":"fr-Latn-CI","und-CL":"es-Latn-CL","und-CM":"fr-Latn-CM","und-CN":"zh-Hans-CN","und-CO":"es-Latn-CO","und-Copt":"cop-Copt-EG","und-CP":"und-Latn-CP","und-Cprt":"grc-Cprt-CY","und-CR":"es-Latn-CR","und-CU":"es-Latn-CU","und-CV":"pt-Latn-CV","und-CW":"pap-Latn-CW","und-CY":"el-Grek-CY","und-Cyrl":"ru-Cyrl-RU","und-Cyrl-AL":"mk-Cyrl-AL","und-Cyrl-BA":"sr-Cyrl-BA","und-Cyrl-GE":"ab-Cyrl-GE","und-Cyrl-GR":"mk-Cyrl-GR","und-Cyrl-MD":"uk-Cyrl-MD","und-Cyrl-RO":"bg-Cyrl-RO","und-Cyrl-SK":"uk-Cyrl-SK","und-Cyrl-TR":"kbd-Cyrl-TR","und-Cyrl-XK":"sr-Cyrl-XK","und-CZ":"cs-Latn-CZ","und-DE":"de-Latn-DE","und-Deva":"hi-Deva-IN","und-Deva-BT":"ne-Deva-BT","und-Deva-FJ":"hif-Deva-FJ","und-Deva-MU":"bho-Deva-MU","und-Deva-PK":"btv-Deva-PK","und-DJ":"aa-Latn-DJ","und-DK":"da-Latn-DK","und-DO":"es-Latn-DO","und-Dogr":"doi-Dogr-IN","und-Dupl":"fr-Dupl-FR","und-DZ":"ar-Arab-DZ","und-EA":"es-Latn-EA","und-EC":"es-Latn-EC","und-EE":"et-Latn-EE","und-EG":"ar-Arab-EG","und-Egyp":"egy-Egyp-EG","und-EH":"ar-Arab-EH","und-Elba":"sq-Elba-AL","und-Elym":"arc-Elym-IR","und-ER":"ti-Ethi-ER","und-ES":"es-Latn-ES","und-ET":"am-Ethi-ET","und-Ethi":"am-Ethi-ET","und-EU":"en-Latn-GB","und-EZ":"de-Latn-EZ","und-FI":"fi-Latn-FI","und-FO":"fo-Latn-FO","und-FR":"fr-Latn-FR","und-GA":"fr-Latn-GA","und-GE":"ka-Geor-GE","und-Geor":"ka-Geor-GE","und-GF":"fr-Latn-GF","und-GH":"ak-Latn-GH","und-GL":"kl-Latn-GL","und-Glag":"cu-Glag-BG","und-GN":"fr-Latn-GN","und-Gong":"wsg-Gong-IN","und-Gonm":"esg-Gonm-IN","und-Goth":"got-Goth-UA","und-GP":"fr-Latn-GP","und-GQ":"es-Latn-GQ","und-GR":"el-Grek-GR","und-Gran":"sa-Gran-IN","und-Grek":"el-Grek-GR","und-Grek-TR":"bgx-Grek-TR","und-GS":"und-Latn-GS","und-GT":"es-Latn-GT","und-Gujr":"gu-Gujr-IN","und-Guru":"pa-Guru-IN","und-GW":"pt-Latn-GW","und-Hanb":"zh-Hanb-TW","und-Hang":"ko-Hang-KR","und-Hani":"zh-Hani-CN","und-Hano":"hnn-Hano-PH","und-Hans":"zh-Hans-CN","und-Hant":"zh-Hant-TW","und-Hatr":"mis-Hatr-IQ","und-Hebr":"he-Hebr-IL","und-Hebr-CA":"yi-Hebr-CA","und-Hebr-GB":"yi-Hebr-GB","und-Hebr-SE":"yi-Hebr-SE","und-Hebr-UA":"yi-Hebr-UA","und-Hebr-US":"yi-Hebr-US","und-Hira":"ja-Hira-JP","und-HK":"zh-Hant-HK","und-Hluw":"hlu-Hluw-TR","und-HM":"und-Latn-HM","und-Hmng":"hnj-Hmng-LA","und-Hmnp":"mww-Hmnp-US","und-HN":"es-Latn-HN","und-HR":"hr-Latn-HR","und-HT":"ht-Latn-HT","und-HU":"hu-Latn-HU","und-Hung":"hu-Hung-HU","und-IC":"es-Latn-IC","und-ID":"id-Latn-ID","und-IL":"he-Hebr-IL","und-IN":"hi-Deva-IN","und-IQ":"ar-Arab-IQ","und-IR":"fa-Arab-IR","und-IS":"is-Latn-IS","und-IT":"it-Latn-IT","und-Ital":"ett-Ital-IT","und-Jamo":"ko-Jamo-KR","und-Java":"jv-Java-ID","und-JO":"ar-Arab-JO","und-JP":"ja-Jpan-JP","und-Jpan":"ja-Jpan-JP","und-Kali":"eky-Kali-MM","und-Kana":"ja-Kana-JP","und-KE":"sw-Latn-KE","und-KG":"ky-Cyrl-KG","und-KH":"km-Khmr-KH","und-Khar":"pra-Khar-PK","und-Khmr":"km-Khmr-KH","und-Khoj":"sd-Khoj-IN","und-KM":"ar-Arab-KM","und-Knda":"kn-Knda-IN","und-Kore":"ko-Kore-KR","und-KP":"ko-Kore-KP","und-KR":"ko-Kore-KR","und-Kthi":"bho-Kthi-IN","und-KW":"ar-Arab-KW","und-KZ":"ru-Cyrl-KZ","und-LA":"lo-Laoo-LA","und-Lana":"nod-Lana-TH","und-Laoo":"lo-Laoo-LA","und-Latn-AF":"tk-Latn-AF","und-Latn-AM":"ku-Latn-AM","und-Latn-CN":"za-Latn-CN","und-Latn-CY":"tr-Latn-CY","und-Latn-DZ":"fr-Latn-DZ","und-Latn-ET":"en-Latn-ET","und-Latn-GE":"ku-Latn-GE","und-Latn-IR":"tk-Latn-IR","und-Latn-KM":"fr-Latn-KM","und-Latn-MA":"fr-Latn-MA","und-Latn-MK":"sq-Latn-MK","und-Latn-MM":"kac-Latn-MM","und-Latn-MO":"pt-Latn-MO","und-Latn-MR":"fr-Latn-MR","und-Latn-RU":"krl-Latn-RU","und-Latn-SY":"fr-Latn-SY","und-Latn-TN":"fr-Latn-TN","und-Latn-TW":"trv-Latn-TW","und-Latn-UA":"pl-Latn-UA","und-LB":"ar-Arab-LB","und-Lepc":"lep-Lepc-IN","und-LI":"de-Latn-LI","und-Limb":"lif-Limb-IN","und-Lina":"lab-Lina-GR","und-Linb":"grc-Linb-GR","und-Lisu":"lis-Lisu-CN","und-LK":"si-Sinh-LK","und-LS":"st-Latn-LS","und-LT":"lt-Latn-LT","und-LU":"fr-Latn-LU","und-LV":"lv-Latn-LV","und-LY":"ar-Arab-LY","und-Lyci":"xlc-Lyci-TR","und-Lydi":"xld-Lydi-TR","und-MA":"ar-Arab-MA","und-Mahj":"hi-Mahj-IN","und-Maka":"mak-Maka-ID","und-Mand":"myz-Mand-IR","und-Mani":"xmn-Mani-CN","und-Marc":"bo-Marc-CN","und-MC":"fr-Latn-MC","und-MD":"ro-Latn-MD","und-ME":"sr-Latn-ME","und-Medf":"mis-Medf-NG","und-Mend":"men-Mend-SL","und-Merc":"xmr-Merc-SD","und-Mero":"xmr-Mero-SD","und-MF":"fr-Latn-MF","und-MG":"mg-Latn-MG","und-MK":"mk-Cyrl-MK","und-ML":"bm-Latn-ML","und-Mlym":"ml-Mlym-IN","und-MM":"my-Mymr-MM","und-MN":"mn-Cyrl-MN","und-MO":"zh-Hant-MO","und-Modi":"mr-Modi-IN","und-Mong":"mn-Mong-CN","und-MQ":"fr-Latn-MQ","und-MR":"ar-Arab-MR","und-Mroo":"mro-Mroo-BD","und-MT":"mt-Latn-MT","und-Mtei":"mni-Mtei-IN","und-MU":"mfe-Latn-MU","und-Mult":"skr-Mult-PK","und-MV":"dv-Thaa-MV","und-MX":"es-Latn-MX","und-MY":"ms-Latn-MY","und-Mymr":"my-Mymr-MM","und-Mymr-IN":"kht-Mymr-IN","und-Mymr-TH":"mnw-Mymr-TH","und-MZ":"pt-Latn-MZ","und-NA":"af-Latn-NA","und-Nand":"sa-Nand-IN","und-Narb":"xna-Narb-SA","und-Nbat":"arc-Nbat-JO","und-NC":"fr-Latn-NC","und-NE":"ha-Latn-NE","und-Newa":"new-Newa-NP","und-NI":"es-Latn-NI","und-Nkoo":"man-Nkoo-GN","und-NL":"nl-Latn-NL","und-NO":"nb-Latn-NO","und-NP":"ne-Deva-NP","und-Nshu":"zhx-Nshu-CN","und-Ogam":"sga-Ogam-IE","und-Olck":"sat-Olck-IN","und-OM":"ar-Arab-OM","und-Orkh":"otk-Orkh-MN","und-Orya":"or-Orya-IN","und-Osge":"osa-Osge-US","und-Osma":"so-Osma-SO","und-PA":"es-Latn-PA","und-Palm":"arc-Palm-SY","und-Pauc":"ctd-Pauc-MM","und-PE":"es-Latn-PE","und-Perm":"kv-Perm-RU","und-PF":"fr-Latn-PF","und-PG":"tpi-Latn-PG","und-PH":"fil-Latn-PH","und-Phag":"lzh-Phag-CN","und-Phli":"pal-Phli-IR","und-Phlp":"pal-Phlp-CN","und-Phnx":"phn-Phnx-LB","und-PK":"ur-Arab-PK","und-PL":"pl-Latn-PL","und-Plrd":"hmd-Plrd-CN","und-PM":"fr-Latn-PM","und-PR":"es-Latn-PR","und-Prti":"xpr-Prti-IR","und-PS":"ar-Arab-PS","und-PT":"pt-Latn-PT","und-PW":"pau-Latn-PW","und-PY":"gn-Latn-PY","und-QA":"ar-Arab-QA","und-QO":"en-Latn-DG","und-RE":"fr-Latn-RE","und-Rjng":"rej-Rjng-ID","und-RO":"ro-Latn-RO","und-Rohg":"rhg-Rohg-MM","und-RS":"sr-Cyrl-RS","und-RU":"ru-Cyrl-RU","und-Runr":"non-Runr-SE","und-RW":"rw-Latn-RW","und-SA":"ar-Arab-SA","und-Samr":"smp-Samr-IL","und-Sarb":"xsa-Sarb-YE","und-Saur":"saz-Saur-IN","und-SC":"fr-Latn-SC","und-SD":"ar-Arab-SD","und-SE":"sv-Latn-SE","und-Sgnw":"ase-Sgnw-US","und-Shaw":"en-Shaw-GB","und-Shrd":"sa-Shrd-IN","und-SI":"sl-Latn-SI","und-Sidd":"sa-Sidd-IN","und-Sind":"sd-Sind-IN","und-Sinh":"si-Sinh-LK","und-SJ":"nb-Latn-SJ","und-SK":"sk-Latn-SK","und-SM":"it-Latn-SM","und-SN":"fr-Latn-SN","und-SO":"so-Latn-SO","und-Sogd":"sog-Sogd-UZ","und-Sogo":"sog-Sogo-UZ","und-Sora":"srb-Sora-IN","und-Soyo":"cmg-Soyo-MN","und-SR":"nl-Latn-SR","und-ST":"pt-Latn-ST","und-Sund":"su-Sund-ID","und-SV":"es-Latn-SV","und-SY":"ar-Arab-SY","und-Sylo":"syl-Sylo-BD","und-Syrc":"syr-Syrc-IQ","und-Tagb":"tbw-Tagb-PH","und-Takr":"doi-Takr-IN","und-Tale":"tdd-Tale-CN","und-Talu":"khb-Talu-CN","und-Taml":"ta-Taml-IN","und-Tang":"txg-Tang-CN","und-Tavt":"blt-Tavt-VN","und-TD":"fr-Latn-TD","und-Telu":"te-Telu-IN","und-TF":"fr-Latn-TF","und-Tfng":"zgh-Tfng-MA","und-TG":"fr-Latn-TG","und-Tglg":"fil-Tglg-PH","und-TH":"th-Thai-TH","und-Thaa":"dv-Thaa-MV","und-Thai":"th-Thai-TH","und-Thai-CN":"lcp-Thai-CN","und-Thai-KH":"kdt-Thai-KH","und-Thai-LA":"kdt-Thai-LA","und-Tibt":"bo-Tibt-CN","und-Tirh":"mai-Tirh-IN","und-TJ":"tg-Cyrl-TJ","und-TK":"tkl-Latn-TK","und-TL":"pt-Latn-TL","und-TM":"tk-Latn-TM","und-TN":"ar-Arab-TN","und-TO":"to-Latn-TO","und-TR":"tr-Latn-TR","und-TV":"tvl-Latn-TV","und-TW":"zh-Hant-TW","und-TZ":"sw-Latn-TZ","und-UA":"uk-Cyrl-UA","und-UG":"sw-Latn-UG","und-Ugar":"uga-Ugar-SY","und-UY":"es-Latn-UY","und-UZ":"uz-Latn-UZ","und-VA":"it-Latn-VA","und-Vaii":"vai-Vaii-LR","und-VE":"es-Latn-VE","und-VN":"vi-Latn-VN","und-VU":"bi-Latn-VU","und-Wara":"hoc-Wara-IN","und-Wcho":"nnp-Wcho-IN","und-WF":"fr-Latn-WF","und-WS":"sm-Latn-WS","und-XK":"sq-Latn-XK","und-Xpeo":"peo-Xpeo-IR","und-Xsux":"akk-Xsux-IQ","und-YE":"ar-Arab-YE","und-Yiii":"ii-Yiii-CN","und-YT":"fr-Latn-YT","und-Zanb":"cmg-Zanb-MN","und-ZW":"sn-Latn-ZW","unr":"unr-Beng-IN","unr-Deva":"unr-Deva-NP","unr-NP":"unr-Deva-NP","unx":"unx-Beng-IN","uok":"uok-Latn-ZZ","ur":"ur-Arab-PK","uri":"uri-Latn-ZZ","urt":"urt-Latn-ZZ","urw":"urw-Latn-ZZ","usa":"usa-Latn-ZZ","utr":"utr-Latn-ZZ","uvh":"uvh-Latn-ZZ","uvl":"uvl-Latn-ZZ","uz":"uz-Latn-UZ","uz-AF":"uz-Arab-AF","uz-Arab":"uz-Arab-AF","uz-CN":"uz-Cyrl-CN","vag":"vag-Latn-ZZ","vai":"vai-Vaii-LR","van":"van-Latn-ZZ","ve":"ve-Latn-ZA","vec":"vec-Latn-IT","vep":"vep-Latn-RU","vi":"vi-Latn-VN","vic":"vic-Latn-SX","viv":"viv-Latn-ZZ","vls":"vls-Latn-BE","vmf":"vmf-Latn-DE","vmw":"vmw-Latn-MZ","vo":"vo-Latn-001","vot":"vot-Latn-RU","vro":"vro-Latn-EE","vun":"vun-Latn-TZ","vut":"vut-Latn-ZZ","wa":"wa-Latn-BE","wae":"wae-Latn-CH","waj":"waj-Latn-ZZ","wal":"wal-Ethi-ET","wan":"wan-Latn-ZZ","war":"war-Latn-PH","wbp":"wbp-Latn-AU","wbq":"wbq-Telu-IN","wbr":"wbr-Deva-IN","wci":"wci-Latn-ZZ","wer":"wer-Latn-ZZ","wgi":"wgi-Latn-ZZ","whg":"whg-Latn-ZZ","wib":"wib-Latn-ZZ","wiu":"wiu-Latn-ZZ","wiv":"wiv-Latn-ZZ","wja":"wja-Latn-ZZ","wji":"wji-Latn-ZZ","wls":"wls-Latn-WF","wmo":"wmo-Latn-ZZ","wnc":"wnc-Latn-ZZ","wni":"wni-Arab-KM","wnu":"wnu-Latn-ZZ","wo":"wo-Latn-SN","wob":"wob-Latn-ZZ","wos":"wos-Latn-ZZ","wrs":"wrs-Latn-ZZ","wsg":"wsg-Gong-IN","wsk":"wsk-Latn-ZZ","wtm":"wtm-Deva-IN","wuu":"wuu-Hans-CN","wuv":"wuv-Latn-ZZ","wwa":"wwa-Latn-ZZ","xav":"xav-Latn-BR","xbi":"xbi-Latn-ZZ","xcr":"xcr-Cari-TR","xes":"xes-Latn-ZZ","xh":"xh-Latn-ZA","xla":"xla-Latn-ZZ","xlc":"xlc-Lyci-TR","xld":"xld-Lydi-TR","xmf":"xmf-Geor-GE","xmn":"xmn-Mani-CN","xmr":"xmr-Merc-SD","xna":"xna-Narb-SA","xnr":"xnr-Deva-IN","xog":"xog-Latn-UG","xon":"xon-Latn-ZZ","xpr":"xpr-Prti-IR","xrb":"xrb-Latn-ZZ","xsa":"xsa-Sarb-YE","xsi":"xsi-Latn-ZZ","xsm":"xsm-Latn-ZZ","xsr":"xsr-Deva-NP","xwe":"xwe-Latn-ZZ","yam":"yam-Latn-ZZ","yao":"yao-Latn-MZ","yap":"yap-Latn-FM","yas":"yas-Latn-ZZ","yat":"yat-Latn-ZZ","yav":"yav-Latn-CM","yay":"yay-Latn-ZZ","yaz":"yaz-Latn-ZZ","yba":"yba-Latn-ZZ","ybb":"ybb-Latn-CM","yby":"yby-Latn-ZZ","yer":"yer-Latn-ZZ","ygr":"ygr-Latn-ZZ","ygw":"ygw-Latn-ZZ","yi":"yi-Hebr-001","yko":"yko-Latn-ZZ","yle":"yle-Latn-ZZ","ylg":"ylg-Latn-ZZ","yll":"yll-Latn-ZZ","yml":"yml-Latn-ZZ","yo":"yo-Latn-NG","yon":"yon-Latn-ZZ","yrb":"yrb-Latn-ZZ","yre":"yre-Latn-ZZ","yrl":"yrl-Latn-BR","yss":"yss-Latn-ZZ","yua":"yua-Latn-MX","yue":"yue-Hant-HK","yue-CN":"yue-Hans-CN","yue-Hans":"yue-Hans-CN","yuj":"yuj-Latn-ZZ","yut":"yut-Latn-ZZ","yuw":"yuw-Latn-ZZ","za":"za-Latn-CN","zag":"zag-Latn-SD","zdj":"zdj-Arab-KM","zea":"zea-Latn-NL","zgh":"zgh-Tfng-MA","zh":"zh-Hans-CN","zh-AU":"zh-Hant-AU","zh-BN":"zh-Hant-BN","zh-Bopo":"zh-Bopo-TW","zh-GB":"zh-Hant-GB","zh-GF":"zh-Hant-GF","zh-Hanb":"zh-Hanb-TW","zh-Hant":"zh-Hant-TW","zh-HK":"zh-Hant-HK","zh-ID":"zh-Hant-ID","zh-MO":"zh-Hant-MO","zh-MY":"zh-Hant-MY","zh-PA":"zh-Hant-PA","zh-PF":"zh-Hant-PF","zh-PH":"zh-Hant-PH","zh-SR":"zh-Hant-SR","zh-TH":"zh-Hant-TH","zh-TW":"zh-Hant-TW","zh-US":"zh-Hant-US","zh-VN":"zh-Hant-VN","zhx":"zhx-Nshu-CN","zia":"zia-Latn-ZZ","zlm":"zlm-Latn-TG","zmi":"zmi-Latn-MY","zne":"zne-Latn-ZZ","zu":"zu-Latn-ZA","zza":"zza-Latn-TR"}}}');

/***/ }),

/***/ 41620:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"supplemental":{"version":{"_unicodeVersion":"12.1.0","_cldrVersion":"36"},"numberingSystems":{"adlm":{"_digits":"𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙","_type":"numeric"},"ahom":{"_digits":"𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹","_type":"numeric"},"arab":{"_digits":"٠١٢٣٤٥٦٧٨٩","_type":"numeric"},"arabext":{"_digits":"۰۱۲۳۴۵۶۷۸۹","_type":"numeric"},"armn":{"_rules":"armenian-upper","_type":"algorithmic"},"armnlow":{"_rules":"armenian-lower","_type":"algorithmic"},"bali":{"_digits":"᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙","_type":"numeric"},"beng":{"_digits":"০১২৩৪৫৬৭৮৯","_type":"numeric"},"bhks":{"_digits":"𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙","_type":"numeric"},"brah":{"_digits":"𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯","_type":"numeric"},"cakm":{"_digits":"𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿","_type":"numeric"},"cham":{"_digits":"꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙","_type":"numeric"},"cyrl":{"_rules":"cyrillic-lower","_type":"algorithmic"},"deva":{"_digits":"०१२३४५६७८९","_type":"numeric"},"ethi":{"_rules":"ethiopic","_type":"algorithmic"},"fullwide":{"_digits":"０１２３４５６７８９","_type":"numeric"},"geor":{"_rules":"georgian","_type":"algorithmic"},"gong":{"_digits":"𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩","_type":"numeric"},"gonm":{"_digits":"𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙","_type":"numeric"},"grek":{"_rules":"greek-upper","_type":"algorithmic"},"greklow":{"_rules":"greek-lower","_type":"algorithmic"},"gujr":{"_digits":"૦૧૨૩૪૫૬૭૮૯","_type":"numeric"},"guru":{"_digits":"੦੧੨੩੪੫੬੭੮੯","_type":"numeric"},"hanidays":{"_rules":"zh/SpelloutRules/spellout-numbering-days","_type":"algorithmic"},"hanidec":{"_digits":"〇一二三四五六七八九","_type":"numeric"},"hans":{"_rules":"zh/SpelloutRules/spellout-cardinal","_type":"algorithmic"},"hansfin":{"_rules":"zh/SpelloutRules/spellout-cardinal-financial","_type":"algorithmic"},"hant":{"_rules":"zh_Hant/SpelloutRules/spellout-cardinal","_type":"algorithmic"},"hantfin":{"_rules":"zh_Hant/SpelloutRules/spellout-cardinal-financial","_type":"algorithmic"},"hebr":{"_rules":"hebrew","_type":"algorithmic"},"hmng":{"_digits":"𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙","_type":"numeric"},"hmnp":{"_digits":"𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉","_type":"numeric"},"java":{"_digits":"꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙","_type":"numeric"},"jpan":{"_rules":"ja/SpelloutRules/spellout-cardinal","_type":"algorithmic"},"jpanfin":{"_rules":"ja/SpelloutRules/spellout-cardinal-financial","_type":"algorithmic"},"jpanyear":{"_rules":"ja/SpelloutRules/spellout-numbering-year-latn","_type":"algorithmic"},"kali":{"_digits":"꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉","_type":"numeric"},"khmr":{"_digits":"០១២៣៤៥៦៧៨៩","_type":"numeric"},"knda":{"_digits":"೦೧೨೩೪೫೬೭೮೯","_type":"numeric"},"lana":{"_digits":"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉","_type":"numeric"},"lanatham":{"_digits":"᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙","_type":"numeric"},"laoo":{"_digits":"໐໑໒໓໔໕໖໗໘໙","_type":"numeric"},"latn":{"_digits":"0123456789","_type":"numeric"},"lepc":{"_digits":"᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉","_type":"numeric"},"limb":{"_digits":"᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏","_type":"numeric"},"mathbold":{"_digits":"𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗","_type":"numeric"},"mathdbl":{"_digits":"𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡","_type":"numeric"},"mathmono":{"_digits":"𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿","_type":"numeric"},"mathsanb":{"_digits":"𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵","_type":"numeric"},"mathsans":{"_digits":"𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫","_type":"numeric"},"mlym":{"_digits":"൦൧൨൩൪൫൬൭൮൯","_type":"numeric"},"modi":{"_digits":"𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙","_type":"numeric"},"mong":{"_digits":"᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙","_type":"numeric"},"mroo":{"_digits":"𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩","_type":"numeric"},"mtei":{"_digits":"꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹","_type":"numeric"},"mymr":{"_digits":"၀၁၂၃၄၅၆၇၈၉","_type":"numeric"},"mymrshan":{"_digits":"႐႑႒႓႔႕႖႗႘႙","_type":"numeric"},"mymrtlng":{"_digits":"꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹","_type":"numeric"},"newa":{"_digits":"𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙","_type":"numeric"},"nkoo":{"_digits":"߀߁߂߃߄߅߆߇߈߉","_type":"numeric"},"olck":{"_digits":"᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙","_type":"numeric"},"orya":{"_digits":"୦୧୨୩୪୫୬୭୮୯","_type":"numeric"},"osma":{"_digits":"𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩","_type":"numeric"},"rohg":{"_digits":"𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹","_type":"numeric"},"roman":{"_rules":"roman-upper","_type":"algorithmic"},"romanlow":{"_rules":"roman-lower","_type":"algorithmic"},"saur":{"_digits":"꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙","_type":"numeric"},"shrd":{"_digits":"𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙","_type":"numeric"},"sind":{"_digits":"𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹","_type":"numeric"},"sinh":{"_digits":"෦෧෨෩෪෫෬෭෮෯","_type":"numeric"},"sora":{"_digits":"𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹","_type":"numeric"},"sund":{"_digits":"᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹","_type":"numeric"},"takr":{"_digits":"𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉","_type":"numeric"},"talu":{"_digits":"᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙","_type":"numeric"},"taml":{"_rules":"tamil","_type":"algorithmic"},"tamldec":{"_digits":"௦௧௨௩௪௫௬௭௮௯","_type":"numeric"},"telu":{"_digits":"౦౧౨౩౪౫౬౭౮౯","_type":"numeric"},"thai":{"_digits":"๐๑๒๓๔๕๖๗๘๙","_type":"numeric"},"tibt":{"_digits":"༠༡༢༣༤༥༦༧༨༩","_type":"numeric"},"tirh":{"_digits":"𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙","_type":"numeric"},"vaii":{"_digits":"꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩","_type":"numeric"},"wara":{"_digits":"𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩","_type":"numeric"},"wcho":{"_digits":"𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹","_type":"numeric"}}}}');

/***/ }),

/***/ 95278:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"es":{"Yes":"Sí","No":"No","Cancel":"Cancelar","CheckState":"Check state","Close":"Cerca","Clear":"Limpiar","Done":"Hecho","Loading":"Cargando...","Select":"Seleccionar...","Search":"Buscar","Back":"Volver","OK":"Aceptar","Today":"Hoy","Yesterday":"Yesterday","dxCollectionWidget-noDataText":"Sin datos para mostrar","dxDropDownEditor-selectLabel":"Seleccionar","validation-required":"Obligatorio","validation-required-formatted":"{0} es obligatorio","validation-numeric":"Valor debe ser un número","validation-numeric-formatted":"{0} debe ser un número","validation-range":"Valor fuera de rango","validation-range-formatted":"{0} fuera de rango","validation-stringLength":"El tamaño del valor es incorrecto","validation-stringLength-formatted":"El tamaño de {0} es incorrecto","validation-custom":"Valor inválido","validation-custom-formatted":"{0} inválido","validation-async":"Valor inválido","validation-async-formatted":"{0} inválido","validation-compare":"Valores no coinciden","validation-compare-formatted":"{0} no coinciden","validation-pattern":"Valor no coincide con el patrón","validation-pattern-formatted":"{0} no coincide con el patrón","validation-email":"Email inválido","validation-email-formatted":"{0} inválido","validation-mask":"Valor inválido","dxLookup-searchPlaceholder":"Cantidad mínima de caracteres: {0}","dxList-pullingDownText":"Desliza hacia abajo para actualizar...","dxList-pulledDownText":"Suelta para actualizar...","dxList-refreshingText":"Actualizando...","dxList-pageLoadingText":"Cargando...","dxList-nextButtonText":"Más","dxList-selectAll":"Seleccionar Todo","dxList-listAriaLabel":"Items","dxList-listAriaLabel-deletable":"Deletable items","dxListEditDecorator-delete":"Eliminar","dxListEditDecorator-more":"Más","dxList-selectAll-indeterminate":"Half-checked","dxList-selectAll-checked":"Checked","dxList-selectAll-notChecked":"Not checked","dxList-ariaRoleDescription":"List","dxList-listAriaLabel-itemContent":"List item content","dxScrollView-pullingDownText":"Desliza hacia abajo para actualizar...","dxScrollView-pulledDownText":"Suelta para actualizar...","dxScrollView-refreshingText":"Actualizando...","dxScrollView-reachBottomText":"Cargando...","dxDateBox-simulatedDataPickerTitleTime":"Seleccione hora","dxDateBox-simulatedDataPickerTitleDate":"Seleccione fecha","dxDateBox-simulatedDataPickerTitleDateTime":"Seleccione fecha y hora","dxDateBox-validation-datetime":"Valor debe ser una fecha u hora","dxDateRangeBox-invalidStartDateMessage":"Start value must be a date","dxDateRangeBox-invalidEndDateMessage":"End value must be a date","dxDateRangeBox-startDateOutOfRangeMessage":"Start date is out of range","dxDateRangeBox-endDateOutOfRangeMessage":"End date is out of range","dxDateRangeBox-startDateLabel":"Fecha inicial","dxDateRangeBox-endDateLabel":"Fecha final","dxFileUploader-selectFile":"Seleccionar archivo","dxFileUploader-dropFile":"o arrastre un archivo aquí","dxFileUploader-bytes":"bytes","dxFileUploader-kb":"KB","dxFileUploader-Mb":"MB","dxFileUploader-Gb":"GB","dxFileUploader-upload":"Subir","dxFileUploader-uploaded":"Subido","dxFileUploader-readyToUpload":"Listo para subir","dxFileUploader-uploadAbortedMessage":"Upload cancelled","dxFileUploader-uploadFailedMessage":"Falla ao subir","dxFileUploader-invalidFileExtension":"Tipo de archivo no está permitido","dxFileUploader-invalidMaxFileSize":"Archivo es muy grande","dxFileUploader-invalidMinFileSize":"Archivo es muy pequeño","dxRangeSlider-ariaFrom":"Desde","dxRangeSlider-ariaTill":"Hasta","dxSwitch-switchedOnText":"ENCENDIDO","dxSwitch-switchedOffText":"APAGADO","dxForm-optionalMark":"opcional","dxForm-requiredMessage":"{0} es obligatorio","dxNumberBox-invalidValueMessage":"Valor debe ser un número","dxNumberBox-noDataText":"Sin datos","dxDataGrid-emptyHeaderWithColumnChooserText":"Use {0} to display columns","dxDataGrid-emptyHeaderWithGroupPanelText":"Drag a column from the group panel here","dxDataGrid-emptyHeaderWithColumnChooserAndGroupPanelText":"Use {0} or drag a column from the group panel","dxDataGrid-emptyHeaderColumnChooserText":"column chooser","dxDataGrid-columnChooserTitle":"Selector de Columnas","dxDataGrid-columnChooserEmptyText":"Arrastra una columna aquí para ocultarla","dxDataGrid-groupContinuesMessage":"Continúa en la página siguiente","dxDataGrid-groupContinuedMessage":"Continuación de la página anterior","dxDataGrid-groupHeaderText":"Agrupar por esta columna","dxDataGrid-ungroupHeaderText":"Desagrupar","dxDataGrid-ungroupAllText":"Desagrupar Todo","dxDataGrid-editingEditRow":"Modificar","dxDataGrid-editingSaveRowChanges":"Guardar","dxDataGrid-editingCancelRowChanges":"Cancelar","dxDataGrid-editingDeleteRow":"Eliminar","dxDataGrid-editingUndeleteRow":"Recuperar","dxDataGrid-editingConfirmDeleteMessage":"¿Está seguro que desea eliminar este registro?","dxDataGrid-validationCancelChanges":"Cancelar cambios","dxDataGrid-groupPanelEmptyText":"Arrastra una columna aquí para agrupar por ella","dxDataGrid-noDataText":"Sin datos","dxDataGrid-searchPanelPlaceholder":"Buscar...","dxDataGrid-filterRowShowAllText":"(Todos)","dxDataGrid-filterRowResetOperationText":"Reestablecer","dxDataGrid-filterRowOperationEquals":"Igual","dxDataGrid-filterRowOperationNotEquals":"No es igual","dxDataGrid-filterRowOperationLess":"Menor que","dxDataGrid-filterRowOperationLessOrEquals":"Menor o igual a","dxDataGrid-filterRowOperationGreater":"Mayor que","dxDataGrid-filterRowOperationGreaterOrEquals":"Mayor o igual a","dxDataGrid-filterRowOperationStartsWith":"Empieza con","dxDataGrid-filterRowOperationContains":"Contiene","dxDataGrid-filterRowOperationNotContains":"No contiene","dxDataGrid-filterRowOperationEndsWith":"Termina con","dxDataGrid-filterRowOperationBetween":"Entre","dxDataGrid-filterRowOperationBetweenStartText":"Inicio","dxDataGrid-filterRowOperationBetweenEndText":"Fin","dxDataGrid-ariaSearchBox":"Search box","dxDataGrid-applyFilterText":"Filtrar","dxDataGrid-trueText":"verdadero","dxDataGrid-falseText":"falso","dxDataGrid-sortingAscendingText":"Orden Ascendente","dxDataGrid-sortingDescendingText":"Orden Descendente","dxDataGrid-sortingClearText":"Limpiar Ordenamiento","dxDataGrid-ariaNotSortedColumn":"Not sorted column","dxDataGrid-ariaSortedAscendingColumn":"Column sorted in ascending order","dxDataGrid-ariaSortedDescendingColumn":"Column sorted in descending order","dxDataGrid-ariaSortIndex":"Sort index {0}","dxDataGrid-editingSaveAllChanges":"Guardar cambios","dxDataGrid-editingCancelAllChanges":"Descartar cambios","dxDataGrid-editingAddRow":"Agregar una fila","dxDataGrid-summaryMin":"Mín: {0}","dxDataGrid-summaryMinOtherColumn":"Mín de {1} es {0}","dxDataGrid-summaryMax":"Máx: {0}","dxDataGrid-summaryMaxOtherColumn":"Máx de {1} es {0}","dxDataGrid-summaryAvg":"Prom: {0}","dxDataGrid-summaryAvgOtherColumn":"Prom de {1} es {0}","dxDataGrid-summarySum":"Suma: {0}","dxDataGrid-summarySumOtherColumn":"Suma de {1} es {0}","dxDataGrid-summaryCount":"Cantidad: {0}","dxDataGrid-columnFixingFix":"Set Fixed Position","dxDataGrid-columnFixingUnfix":"Unfix","dxDataGrid-columnFixingLeftPosition":"Left","dxDataGrid-columnFixingRightPosition":"Right","dxDataGrid-columnFixingStickyPosition":"Sticky","dxDataGrid-exportTo":"Exportar","dxDataGrid-exportToExcel":"Exportar a archivo Excel","dxDataGrid-exporting":"Exportar...","dxDataGrid-excelFormat":"Archivo Excel","dxDataGrid-selectedRows":"Filas seleccionadas","dxDataGrid-exportSelectedRows":"Exportar filas seleccionadas a {0}","dxDataGrid-exportAll":"Exportar todo a {0}","dxDataGrid-headerFilterLabel":"Filter options","dxDataGrid-headerFilterIndicatorLabel":"Show filter options for column \'{0}\'","dxDataGrid-headerFilterEmptyValue":"(Vacio)","dxDataGrid-headerFilterOK":"Aceptar","dxDataGrid-headerFilterCancel":"Cancelar","dxDataGrid-ariaAdaptiveCollapse":"Hide additional data","dxDataGrid-ariaAdaptiveExpand":"Display additional data","dxDataGrid-ariaColumn":"Columna","dxDataGrid-ariaColumnHeader":"Column header","dxDataGrid-ariaValue":"Valor","dxDataGrid-ariaError":"Error","dxDataGrid-ariaRevertButton":"Press Escape to discard the changes","dxDataGrid-ariaFilterCell":"Celda de filtro","dxDataGrid-ariaCollapse":"Colapsar","dxDataGrid-ariaModifiedCell":"Modified","dxDataGrid-ariaDeletedCell":"Deleted","dxDataGrid-ariaEditableCell":"Editable","dxDataGrid-ariaExpand":"Expandir","dxDataGrid-ariaCollapsedRow":"Collapsed row","dxDataGrid-ariaExpandedRow":"Expanded row","dxDataGrid-ariaDataGrid":"Tabla de datos","dxDataGrid-ariaSearchInGrid":"Buscar en la tabla de datos","dxDataGrid-ariaSelectAll":"Seleccionar todo","dxDataGrid-ariaSelectRow":"Seleccionar fila","dxDataGrid-ariaToolbar":"Data grid toolbar","dxDataGrid-ariaEditForm":"Edit form","dxDataGrid-filterBuilderPopupTitle":"Constructor de filtro","dxDataGrid-filterPanelCreateFilter":"Crear filtro","dxDataGrid-filterPanelClearFilter":"Limpiar filtro","dxDataGrid-filterPanelFilterEnabledHint":"Habilitar filtro","dxDataGrid-masterDetail":"Cell with details","dxDataGrid-moveColumnToTheRight":"Move to the right","dxDataGrid-moveColumnToTheLeft":"Move to the left","dxTreeList-ariaTreeList":"Tree list with {0} rows and {1} columns","dxTreeList-ariaExpandableInstruction":"Press Ctrl + right arrow to expand the focused node and Ctrl + left arrow to collapse it","dxTreeList-ariaSearchInGrid":"Search in the tree list","dxTreeList-ariaToolbar":"Tree list toolbar","dxTreeList-editingAddRowToNode":"Añadir","dxPager-infoText":"Página {0} de {1} ({2} ítems)","dxPager-pagesCountText":"de","dxPager-pageSize":"Items per page: {0}","dxPager-pageSizesAllText":"Todos","dxPager-page":"Page {0}","dxPager-prevPage":"Previous page","dxPager-nextPage":"Next page","dxPager-ariaLabel":"Page navigation","dxPager-ariaPageSize":"Page size","dxPager-ariaPageNumber":"Page number","dxPagination-infoText":"Página {0} de {1} ({2} ítems)","dxPagination-pagesCountText":"de","dxPagination-pageSize":"Items per page: {0}","dxPagination-pageSizesAllText":"Todos","dxPagination-page":"Page {0}","dxPagination-prevPage":"Previous page","dxPagination-nextPage":"Next page","dxPagination-ariaLabel":"Page navigation","dxPagination-ariaPageSize":"Page size","dxPagination-ariaPageNumber":"Page number","dxPivotGrid-grandTotal":"Gran Total","dxPivotGrid-total":"{0} Total","dxPivotGrid-fieldChooserTitle":"Selector de Campos","dxPivotGrid-showFieldChooser":"Mostrar Selector de Campos","dxPivotGrid-expandAll":"Expandir Todo","dxPivotGrid-collapseAll":"Colapsar Todo","dxPivotGrid-sortColumnBySummary":"Ordenar \\"{0}\\" por esta columna","dxPivotGrid-sortRowBySummary":"Ordenar \\"{0}\\" por esta fila","dxPivotGrid-removeAllSorting":"Remover ordenamiento","dxPivotGrid-dataNotAvailable":"N/A","dxPivotGrid-rowFields":"Campos de fila","dxPivotGrid-columnFields":"Campos de columna","dxPivotGrid-dataFields":"Campos de dato","dxPivotGrid-filterFields":"Campos de filtro","dxPivotGrid-allFields":"Todos los campos","dxPivotGrid-columnFieldArea":"Arrastra campos de columna aquí","dxPivotGrid-dataFieldArea":"Arrastra campos de dato aquí","dxPivotGrid-rowFieldArea":"Arrastra campos de fila aquí","dxPivotGrid-filterFieldArea":"Arrastra campos de filtro aquí","dxScheduler-dateRange":"from {0} to {1}","dxScheduler-ariaLabel":"Scheduler. {0} view: {1} with {2} appointments","dxScheduler-ariaLabel-currentIndicator-present":"The current time indicator is visible in the view","dxScheduler-ariaLabel-currentIndicator-not-present":"The current time indicator is not visible on the screen","dxScheduler-appointmentAriaLabel-group":"Group: {0}","dxScheduler-appointmentAriaLabel-recurring":"Recurring appointment","dxScheduler-appointmentListAriaLabel":"Appointment list","dxScheduler-editorLabelTitle":"Asunto","dxScheduler-editorLabelStartDate":"Fecha inicial","dxScheduler-editorLabelEndDate":"Fecha final","dxScheduler-editorLabelDescription":"Descripción","dxScheduler-editorLabelRecurrence":"Repetir","dxScheduler-navigationToday":"Today","dxScheduler-navigationPrevious":"Previous page","dxScheduler-navigationNext":"Next page","dxScheduler-openAppointment":"Abrir cita","dxScheduler-recurrenceNever":"Nunca","dxScheduler-recurrenceMinutely":"Minutely","dxScheduler-recurrenceHourly":"Hourly","dxScheduler-recurrenceDaily":"Diario","dxScheduler-recurrenceWeekly":"Semanal","dxScheduler-recurrenceMonthly":"Mensual","dxScheduler-recurrenceYearly":"Anual","dxScheduler-recurrenceRepeatEvery":"Cada","dxScheduler-recurrenceRepeatOn":"Repeat On","dxScheduler-recurrenceEnd":"Terminar repetición","dxScheduler-recurrenceAfter":"Después","dxScheduler-recurrenceOn":"En","dxScheduler-recurrenceUntilDateLabel":"Date when repeat ends","dxScheduler-recurrenceOccurrenceLabel":"Number of occurrences","dxScheduler-recurrenceRepeatMinutely":"minute(s)","dxScheduler-recurrenceRepeatHourly":"hour(s)","dxScheduler-recurrenceRepeatDaily":"día(s)","dxScheduler-recurrenceRepeatWeekly":"semana(s)","dxScheduler-recurrenceRepeatMonthly":"mes(es)","dxScheduler-recurrenceRepeatYearly":"año(s)","dxScheduler-switcherDay":"Día","dxScheduler-switcherWeek":"Semana","dxScheduler-switcherWorkWeek":"Semana Laboral","dxScheduler-switcherMonth":"Mes","dxScheduler-switcherAgenda":"Agenda","dxScheduler-switcherTimelineDay":"Línea de tiempo Día","dxScheduler-switcherTimelineWeek":"Línea de tiempo Semana","dxScheduler-switcherTimelineWorkWeek":"Línea de tiempo Semana Laboral","dxScheduler-switcherTimelineMonth":"Línea de tiempo Mes","dxScheduler-recurrenceRepeatOnDate":"en la fecha","dxScheduler-recurrenceRepeatCount":"ocurrencia(s)","dxScheduler-allDay":"Todo el día","dxScheduler-ariaEditForm":"Edit form","dxScheduler-confirmRecurrenceEditTitle":"Edit Recurring Appointment","dxScheduler-confirmRecurrenceDeleteTitle":"Delete Recurring Appointment","dxScheduler-confirmRecurrenceEditMessage":"¿Quiere modificar solo esta cita o toda la serie?","dxScheduler-confirmRecurrenceDeleteMessage":"¿Quiere eliminar solo esta cita o toda la serie?","dxScheduler-confirmRecurrenceEditSeries":"Modificar serie","dxScheduler-confirmRecurrenceDeleteSeries":"Eliminar serie","dxScheduler-confirmRecurrenceEditOccurrence":"Modificar cita","dxScheduler-confirmRecurrenceDeleteOccurrence":"Eliminar cita","dxScheduler-noTimezoneTitle":"Sin zona horaria","dxScheduler-moreAppointments":"{0} más","dxCalendar-currentDay":"Today","dxCalendar-currentMonth":"Current month","dxCalendar-currentYear":"Current year","dxCalendar-currentYearRange":"Current year range","dxCalendar-todayButtonText":"Hoy","dxCalendar-ariaWidgetName":"Calendario","dxCalendar-previousMonthButtonLabel":"Previous month","dxCalendar-previousYearButtonLabel":"Previous year","dxCalendar-previousDecadeButtonLabel":"Previous decade","dxCalendar-previousCenturyButtonLabel":"Previous century","dxCalendar-nextMonthButtonLabel":"Next month","dxCalendar-nextYearButtonLabel":"Next year","dxCalendar-nextDecadeButtonLabel":"Next decade","dxCalendar-nextCenturyButtonLabel":"Next century","dxCalendar-captionMonthLabel":"Month selection","dxCalendar-captionYearLabel":"Year selection","dxCalendar-captionDecadeLabel":"Decade selection","dxCalendar-captionCenturyLabel":"Century selection","dxCalendar-selectedDate":"The selected date is {0}","dxCalendar-selectedDates":"The selected dates","dxCalendar-selectedDateRange":"The selected date range is from {0} to {1}","dxCalendar-selectedMultipleDateRange":"from {0} to {1}","dxCalendar-selectedDateRangeCount":"There are {0} selected date ranges","dxCalendar-readOnlyLabel":"Read-only calendar","dxCardView-ariaSearchInGrid":"Search in the card view","dxCardView-ariaHeaderItemLabel":"Field name {0}","dxCardView-ariaHeaderItemSortingAscendingLabel":"Sorted in ascending order","dxCardView-ariaHeaderItemSortingDescendingLabel":"Sorted in descending order","dxCardView-ariaHeaderItemSortingIndexLabel":"Sort index {0}","dxCardView-ariaHeaderHasHeaderFilterLabel":"Header filter applied","dxCardView-ariaSelectCard":"Select card","dxCardView-ariaCardView":"Card view with {0} cards. Each card has {1} fields","dxCardView-ariaCard":"Card","dxCardView-ariaEditableCard":"Editable card","dxCardView-ariaCardPosition":"Row {0}, column {1}","dxCardView-ariaSelectedCardState":"Selected","dxCardView-ariaNotSelectedCardState":"Not selected","dxCardView-selectAll":"Select all","dxCardView-clearSelection":"Clear selection","dxCardView-cardNoImageAriaLabel":"No image","dxCardView-headerItemDropZoneText":"Drop the header item here","dxCardView-emptyHeaderPanelText":"Use {0} to display columns","dxCardView-emptyHeaderPanelColumnChooserText":"column chooser","dxAvatar-defaultImageAlt":"Avatar","dxChat-elementAriaLabel":"Chat","dxChat-textareaPlaceholder":"Type a message","dxChat-sendButtonAriaLabel":"Send","dxChat-cancelEditingButtonAriaLabel":"Cancelar","dxChat-editingMessageCaption":"Edit Message","dxChat-defaultUserName":"Unknown User","dxChat-messageListAriaLabel":"Message list","dxChat-alertListAriaLabel":"Error list","dxChat-emptyListMessage":"There are no messages in this chat","dxChat-emptyListPrompt":"Write your first message","dxChat-typingMessageSingleUser":"{0} is typing...","dxChat-typingMessageTwoUsers":"{0} and {1} are typing...","dxChat-typingMessageThreeUsers":"{0}, {1} and {2} are typing...","dxChat-typingMessageMultipleUsers":"{0} and others are typing...","dxChat-editedMessageText":"Edited","dxChat-editingEditMessage":"Modificar","dxChat-editingDeleteMessage":"Eliminar","dxChat-editingDeleteConfirmText":"Are you sure you want to delete this message?","dxChat-deletedMessageText":"This message was deleted","dxChat-defaultImageAlt":"Image shared in chat","dxColorView-ariaRed":"Rojo","dxColorView-ariaGreen":"Verde","dxColorView-ariaBlue":"Azul","dxColorView-ariaAlpha":"Transparencia","dxColorView-ariaHex":"Código del color","dxTagBox-selected":"{0} seleccionado","dxTagBox-allSelected":"Todos seleccionados ({0})","dxTagBox-moreSelected":"{0} más","dxTagBox-tagRoleDescription":"Tag. Press the delete button to remove this tag","dxTagBox-ariaRoleDescription":"Tag box","vizExport-printingButtonText":"Imprimir","vizExport-titleMenuText":"Exportar/Imprimir","vizExport-exportButtonText":"Archivo {0}","dxFilterBuilder-and":"Y","dxFilterBuilder-or":"O","dxFilterBuilder-notAnd":"NO Y","dxFilterBuilder-notOr":"NO O","dxFilterBuilder-addCondition":"Añadir condición","dxFilterBuilder-addGroup":"Añadir Grupo","dxFilterBuilder-enterValueText":"<rellene con un valor>","dxFilterBuilder-filterOperationEquals":"Igual","dxFilterBuilder-filterOperationNotEquals":"Diferente","dxFilterBuilder-filterOperationLess":"Menos que","dxFilterBuilder-filterOperationLessOrEquals":"Menor o igual que","dxFilterBuilder-filterOperationGreater":"Más grande que","dxFilterBuilder-filterOperationGreaterOrEquals":"Mayor o igual que","dxFilterBuilder-filterOperationStartsWith":"Comienza con","dxFilterBuilder-filterOperationContains":"Contiene","dxFilterBuilder-filterOperationNotContains":"No contiene","dxFilterBuilder-filterOperationEndsWith":"Termina con","dxFilterBuilder-filterOperationIsBlank":"Vacío","dxFilterBuilder-filterOperationIsNotBlank":"No vacío","dxFilterBuilder-filterOperationBetween":"Entre","dxFilterBuilder-filterOperationAnyOf":"Alguno de","dxFilterBuilder-filterOperationNoneOf":"Ningún de","dxFilterBuilder-filterAriaRootElement":"Filter builder","dxFilterBuilder-filterAriaGroupLevel":"Level {0}","dxFilterBuilder-filterAriaGroupItem":"Group item","dxFilterBuilder-filterAriaOperationButton":"Operation","dxFilterBuilder-filterAriaAddButton":"Add","dxFilterBuilder-filterAriaRemoveButton":"Remove {0}","dxFilterBuilder-filterAriaItemField":"Item field","dxFilterBuilder-filterAriaItemOperation":"Item operation","dxFilterBuilder-filterAriaItemValue":"Item value","dxHtmlEditor-dialogColorCaption":"Cambiar el color de la fuente","dxHtmlEditor-dialogBackgroundCaption":"Cambiar el color de fondo","dxHtmlEditor-dialogLinkCaption":"Añadir enlace","dxHtmlEditor-dialogLinkUrlField":"URL","dxHtmlEditor-dialogLinkTextField":"Texto","dxHtmlEditor-dialogLinkTargetField":"Abrir enlace en nueva ventana","dxHtmlEditor-dialogImageCaption":"Añadir imagen","dxHtmlEditor-dialogImageUrlField":"URL","dxHtmlEditor-dialogImageAltField":"Texto alternativo","dxHtmlEditor-dialogImageWidthField":"Anchura (px)","dxHtmlEditor-dialogImageHeightField":"Altura (px)","dxHtmlEditor-dialogInsertTableRowsField":"Rows","dxHtmlEditor-dialogInsertTableColumnsField":"Columns","dxHtmlEditor-dialogInsertTableCaption":"Insert Table","dxHtmlEditor-dialogUpdateImageCaption":"Update Image","dxHtmlEditor-dialogImageUpdateButton":"Update","dxHtmlEditor-dialogImageAddButton":"Add","dxHtmlEditor-dialogImageSpecifyUrl":"From the Web","dxHtmlEditor-dialogImageSelectFile":"From This Device","dxHtmlEditor-dialogImageKeepAspectRatio":"Keep Aspect Ratio","dxHtmlEditor-dialogImageEncodeToBase64":"Encode to Base64","dxHtmlEditor-heading":"Encabezamiento","dxHtmlEditor-normalText":"Texto normal","dxHtmlEditor-background":"Background Color","dxHtmlEditor-bold":"Bold","dxHtmlEditor-color":"Font Color","dxHtmlEditor-font":"Font","dxHtmlEditor-italic":"Italic","dxHtmlEditor-link":"Add Link","dxHtmlEditor-image":"Add Image","dxHtmlEditor-size":"Size","dxHtmlEditor-strike":"Strikethrough","dxHtmlEditor-subscript":"Subscript","dxHtmlEditor-superscript":"Superscript","dxHtmlEditor-underline":"Underline","dxHtmlEditor-blockquote":"Blockquote","dxHtmlEditor-header":"Header","dxHtmlEditor-increaseIndent":"Increase Indent","dxHtmlEditor-decreaseIndent":"Decrease Indent","dxHtmlEditor-orderedList":"Ordered List","dxHtmlEditor-bulletList":"Bullet List","dxHtmlEditor-alignLeft":"Align Left","dxHtmlEditor-alignCenter":"Align Center","dxHtmlEditor-alignRight":"Align Right","dxHtmlEditor-alignJustify":"Align Justify","dxHtmlEditor-codeBlock":"Code Block","dxHtmlEditor-variable":"Add Variable","dxHtmlEditor-undo":"Undo","dxHtmlEditor-redo":"Redo","dxHtmlEditor-clear":"Clear Formatting","dxHtmlEditor-insertTable":"Insert Table","dxHtmlEditor-insertHeaderRow":"Insert Header Row","dxHtmlEditor-insertRowAbove":"Insert Row Above","dxHtmlEditor-insertRowBelow":"Insert Row Below","dxHtmlEditor-insertColumnLeft":"Insert Column Left","dxHtmlEditor-insertColumnRight":"Insert Column Right","dxHtmlEditor-deleteColumn":"Delete Column","dxHtmlEditor-deleteRow":"Delete Row","dxHtmlEditor-deleteTable":"Delete Table","dxHtmlEditor-cellProperties":"Cell Properties","dxHtmlEditor-tableProperties":"Table Properties","dxHtmlEditor-insert":"Insert","dxHtmlEditor-delete":"Delete","dxHtmlEditor-border":"Border","dxHtmlEditor-style":"Style","dxHtmlEditor-width":"Width","dxHtmlEditor-height":"Height","dxHtmlEditor-borderColor":"Color","dxHtmlEditor-borderWidth":"Border Width","dxHtmlEditor-tableBackground":"Background","dxHtmlEditor-dimensions":"Dimensions","dxHtmlEditor-alignment":"Alignment","dxHtmlEditor-horizontal":"Horizontal","dxHtmlEditor-vertical":"Vertical","dxHtmlEditor-paddingVertical":"Vertical Padding","dxHtmlEditor-paddingHorizontal":"Horizontal Padding","dxHtmlEditor-pixels":"Pixels","dxHtmlEditor-list":"List","dxHtmlEditor-ordered":"Ordered","dxHtmlEditor-bullet":"Bullet","dxHtmlEditor-align":"Align","dxHtmlEditor-center":"Center","dxHtmlEditor-left":"Left","dxHtmlEditor-right":"Right","dxHtmlEditor-indent":"Indent","dxHtmlEditor-justify":"Justify","dxHtmlEditor-borderStyleNone":"none","dxHtmlEditor-borderStyleHidden":"hidden","dxHtmlEditor-borderStyleDotted":"dotted","dxHtmlEditor-borderStyleDashed":"dashed","dxHtmlEditor-borderStyleSolid":"solid","dxHtmlEditor-borderStyleDouble":"double","dxHtmlEditor-borderStyleGroove":"groove","dxHtmlEditor-borderStyleRidge":"ridge","dxHtmlEditor-borderStyleInset":"inset","dxHtmlEditor-borderStyleOutset":"outset","dxHtmlEditor-aiDialogTitle":"AI Assistant","dxHtmlEditor-aiDialogError":"Something went wrong. Please try again.","dxHtmlEditor-aiDialogCanceled":"Generation canceled","dxHtmlEditor-aiReplace":"Replace","dxHtmlEditor-aiInsertAbove":"Insert above","dxHtmlEditor-aiInsertBelow":"Insert below","dxHtmlEditor-aiCopy":"Copy","dxHtmlEditor-aiRegenerate":"Regenerate","dxHtmlEditor-aiGenerate":"Generate","dxHtmlEditor-aiCancel":"Cancel","dxHtmlEditor-aiToolbarItemAriaLabel":"AI Assistant toolbar item","dxHtmlEditor-aiResultTextAreaAriaLabel":"AI Assistant result","dxHtmlEditor-aiAskPlaceholder":"Ask AI to modify text","dxFileManager-newDirectoryName":"Sin título","dxFileManager-rootDirectoryName":"Archivos","dxFileManager-errorNoAccess":"Acceso denegado. La operación no se puede completar.","dxFileManager-errorDirectoryExistsFormat":"Carpeta {0} ya existe.","dxFileManager-errorFileExistsFormat":"Archivo {0} ya existe.","dxFileManager-errorFileNotFoundFormat":"Archivo {0} no encontrado.","dxFileManager-errorDirectoryNotFoundFormat":"Directory \'{0}\' not found.","dxFileManager-errorWrongFileExtension":"File extension is not allowed.","dxFileManager-errorMaxFileSizeExceeded":"File size exceeds the maximum allowed size.","dxFileManager-errorInvalidSymbols":"This name contains invalid characters.","dxFileManager-errorDefault":"Error no especificado","dxFileManager-errorDirectoryOpenFailed":"The directory cannot be opened","dxFileManager-commandCreate":"New directory","dxFileManager-commandRename":"Rename","dxFileManager-commandMove":"Move to","dxFileManager-commandCopy":"Copy to","dxFileManager-commandDelete":"Delete","dxFileManager-commandDownload":"Download","dxFileManager-commandUpload":"Upload files","dxFileManager-commandRefresh":"Refresh","dxFileManager-commandThumbnails":"Thumbnails View","dxFileManager-commandDetails":"Details View","dxFileManager-commandClearSelection":"Clear selection","dxFileManager-commandShowNavPane":"Toggle navigation pane","dxFileManager-dialogDirectoryChooserMoveTitle":"Move to","dxFileManager-dialogDirectoryChooserMoveButtonText":"Move","dxFileManager-dialogDirectoryChooserCopyTitle":"Copy to","dxFileManager-dialogDirectoryChooserCopyButtonText":"Copy","dxFileManager-dialogRenameItemTitle":"Rename","dxFileManager-dialogRenameItemButtonText":"Save","dxFileManager-dialogCreateDirectoryTitle":"New directory","dxFileManager-dialogCreateDirectoryButtonText":"Create","dxFileManager-dialogDeleteItemTitle":"Delete","dxFileManager-dialogDeleteItemButtonText":"Delete","dxFileManager-dialogDeleteItemSingleItemConfirmation":"Are you sure you want to delete {0}?","dxFileManager-dialogDeleteItemMultipleItemsConfirmation":"Are you sure you want to delete {0} items?","dxFileManager-dialogButtonCancel":"Cancel","dxFileManager-editingCreateSingleItemProcessingMessage":"Creating a directory inside {0}","dxFileManager-editingCreateSingleItemSuccessMessage":"Created a directory inside {0}","dxFileManager-editingCreateSingleItemErrorMessage":"Directory was not created","dxFileManager-editingCreateCommonErrorMessage":"Directory was not created","dxFileManager-editingRenameSingleItemProcessingMessage":"Renaming an item inside {0}","dxFileManager-editingRenameSingleItemSuccessMessage":"Renamed an item inside {0}","dxFileManager-editingRenameSingleItemErrorMessage":"Item was not renamed","dxFileManager-editingRenameCommonErrorMessage":"Item was not renamed","dxFileManager-editingDeleteSingleItemProcessingMessage":"Deleting an item from {0}","dxFileManager-editingDeleteMultipleItemsProcessingMessage":"Deleting {0} items from {1}","dxFileManager-editingDeleteSingleItemSuccessMessage":"Deleted an item from {0}","dxFileManager-editingDeleteMultipleItemsSuccessMessage":"Deleted {0} items from {1}","dxFileManager-editingDeleteSingleItemErrorMessage":"Item was not deleted","dxFileManager-editingDeleteMultipleItemsErrorMessage":"{0} items were not deleted","dxFileManager-editingDeleteCommonErrorMessage":"Some items were not deleted","dxFileManager-editingMoveSingleItemProcessingMessage":"Moving an item to {0}","dxFileManager-editingMoveMultipleItemsProcessingMessage":"Moving {0} items to {1}","dxFileManager-editingMoveSingleItemSuccessMessage":"Moved an item to {0}","dxFileManager-editingMoveMultipleItemsSuccessMessage":"Moved {0} items to {1}","dxFileManager-editingMoveSingleItemErrorMessage":"Item was not moved","dxFileManager-editingMoveMultipleItemsErrorMessage":"{0} items were not moved","dxFileManager-editingMoveCommonErrorMessage":"Some items were not moved","dxFileManager-editingCopySingleItemProcessingMessage":"Copying an item to {0}","dxFileManager-editingCopyMultipleItemsProcessingMessage":"Copying {0} items to {1}","dxFileManager-editingCopySingleItemSuccessMessage":"Copied an item to {0}","dxFileManager-editingCopyMultipleItemsSuccessMessage":"Copied {0} items to {1}","dxFileManager-editingCopySingleItemErrorMessage":"Item was not copied","dxFileManager-editingCopyMultipleItemsErrorMessage":"{0} items were not copied","dxFileManager-editingCopyCommonErrorMessage":"Some items were not copied","dxFileManager-editingUploadSingleItemProcessingMessage":"Uploading an item to {0}","dxFileManager-editingUploadMultipleItemsProcessingMessage":"Uploading {0} items to {1}","dxFileManager-editingUploadSingleItemSuccessMessage":"Uploaded an item to {0}","dxFileManager-editingUploadMultipleItemsSuccessMessage":"Uploaded {0} items to {1}","dxFileManager-editingUploadSingleItemErrorMessage":"Item was not uploaded","dxFileManager-editingUploadMultipleItemsErrorMessage":"{0} items were not uploaded","dxFileManager-editingUploadCanceledMessage":"Canceled","dxFileManager-editingDownloadSingleItemErrorMessage":"Item was not downloaded","dxFileManager-editingDownloadMultipleItemsErrorMessage":"{0} items were not downloaded","dxFileManager-listDetailsColumnCaptionName":"Name","dxFileManager-listDetailsColumnCaptionDateModified":"Date Modified","dxFileManager-listDetailsColumnCaptionFileSize":"File Size","dxFileManager-listThumbnailsTooltipTextSize":"Size","dxFileManager-listThumbnailsTooltipTextDateModified":"Date Modified","dxFileManager-notificationProgressPanelTitle":"Progress","dxFileManager-notificationProgressPanelEmptyListText":"No operations","dxFileManager-notificationProgressPanelOperationCanceled":"Canceled","dxDiagram-categoryGeneral":"General","dxDiagram-categoryFlowchart":"Diagrama de flujo","dxDiagram-categoryOrgChart":"Organigrama","dxDiagram-categoryContainers":"Contenedores","dxDiagram-categoryCustom":"Personalizado","dxDiagram-commandExportToSvg":"Exportar a SVG","dxDiagram-commandExportToPng":"Exportar a PNG","dxDiagram-commandExportToJpg":"Exportar a JPG","dxDiagram-commandUndo":"Deshacer","dxDiagram-commandRedo":"Rehacer","dxDiagram-commandFontName":"Nombre de fuente","dxDiagram-commandFontSize":"Tamaño de fuente","dxDiagram-commandBold":"Negrita","dxDiagram-commandItalic":"Cursiva","dxDiagram-commandUnderline":"Subrayado","dxDiagram-commandTextColor":"Color de fuente","dxDiagram-commandLineColor":"Color de línea","dxDiagram-commandLineWidth":"Ancho de línea","dxDiagram-commandLineStyle":"Estilo de línea","dxDiagram-commandLineStyleSolid":"Sólido","dxDiagram-commandLineStyleDotted":"De puntos","dxDiagram-commandLineStyleDashed":"De guiones","dxDiagram-commandFillColor":"Color de relleno","dxDiagram-commandAlignLeft":"Alinear a la izquierda","dxDiagram-commandAlignCenter":"Alinear al centro","dxDiagram-commandAlignRight":"Alinear a la derecha","dxDiagram-commandConnectorLineType":"Tipo de línea de conector","dxDiagram-commandConnectorLineStraight":"Recto","dxDiagram-commandConnectorLineOrthogonal":"Ortogonal","dxDiagram-commandConnectorLineStart":"Conector de inicio de línea","dxDiagram-commandConnectorLineEnd":"Conector de final de línea","dxDiagram-commandConnectorLineNone":"Ninguno","dxDiagram-commandConnectorLineArrow":"Flecha","dxDiagram-commandFullscreen":"Pantalla completa","dxDiagram-commandUnits":"Unidades","dxDiagram-commandPageSize":"Tamaño de página","dxDiagram-commandPageOrientation":"Orientación de página","dxDiagram-commandPageOrientationLandscape":"Horizontal","dxDiagram-commandPageOrientationPortrait":"Vertical","dxDiagram-commandPageColor":"Color de página","dxDiagram-commandShowGrid":"Mostrar cuadrícula","dxDiagram-commandSnapToGrid":"Ajustar a la cuadrícula","dxDiagram-commandGridSize":"Tamaño de cuadrícula","dxDiagram-commandZoomLevel":"Nivel de zoom","dxDiagram-commandAutoZoom":"Zoom automático","dxDiagram-commandFitToContent":"Ajustar al contenido","dxDiagram-commandFitToWidth":"Ajustar al ancho","dxDiagram-commandAutoZoomByContent":"Zoom automático por contenido","dxDiagram-commandAutoZoomByWidth":"Zoom automático por ancho","dxDiagram-commandSimpleView":"Vista Simple","dxDiagram-commandCut":"Cortar","dxDiagram-commandCopy":"Copiar","dxDiagram-commandPaste":"Pegar","dxDiagram-commandSelectAll":"Seleccionar todo","dxDiagram-commandDelete":"Eliminar","dxDiagram-commandBringToFront":"Traer al frente","dxDiagram-commandSendToBack":"Enviar al fondo","dxDiagram-commandLock":"Bloquear","dxDiagram-commandUnlock":"Desbloquear","dxDiagram-commandInsertShapeImage":"Insertar imagen...","dxDiagram-commandEditShapeImage":"Cambiar imagen...","dxDiagram-commandDeleteShapeImage":"Eliminar imagen","dxDiagram-commandLayoutLeftToRight":"De izquierda a derecha","dxDiagram-commandLayoutRightToLeft":"De derecha a izquierda","dxDiagram-commandLayoutTopToBottom":"De arriba a abajo","dxDiagram-commandLayoutBottomToTop":"De abajo a arriba","dxDiagram-unitIn":"pulg.","dxDiagram-unitCm":"cm","dxDiagram-unitPx":"px","dxDiagram-dialogButtonOK":"Aceptar","dxDiagram-dialogButtonCancel":"Cancelar","dxDiagram-dialogInsertShapeImageTitle":"Insertar Imagen","dxDiagram-dialogEditShapeImageTitle":"Cambiar Imagen","dxDiagram-dialogEditShapeImageSelectButton":"Seleccionar imagen","dxDiagram-dialogEditShapeImageLabelText":"o colocar el archivo aquí","dxDiagram-uiExport":"Exportar","dxDiagram-uiProperties":"Propiedades","dxDiagram-uiSettings":"Configuración","dxDiagram-uiShowToolbox":"Cuadro de herramientas","dxDiagram-uiSearch":"Buscar","dxDiagram-uiStyle":"Estilo","dxDiagram-uiLayout":"Diseño","dxDiagram-uiLayoutTree":"Árbol","dxDiagram-uiLayoutLayered":"Capas","dxDiagram-uiDiagram":"Diagrama","dxDiagram-uiText":"Texto","dxDiagram-uiObject":"Objeto","dxDiagram-uiConnector":"Conector","dxDiagram-uiPage":"Página","dxDiagram-shapeText":"Texto","dxDiagram-shapeRectangle":"Rectángulo","dxDiagram-shapeEllipse":"Elipse","dxDiagram-shapeCross":"Cruz","dxDiagram-shapeTriangle":"Triángulo","dxDiagram-shapeDiamond":"Rombo","dxDiagram-shapeHeart":"Corazón","dxDiagram-shapePentagon":"Pentágono","dxDiagram-shapeHexagon":"Hexágono","dxDiagram-shapeOctagon":"Octágono","dxDiagram-shapeStar":"Estrella","dxDiagram-shapeArrowLeft":"Flecha izquierda","dxDiagram-shapeArrowUp":"Flecha arriba","dxDiagram-shapeArrowRight":"Flecha derecha","dxDiagram-shapeArrowDown":"Flecha abajo","dxDiagram-shapeArrowUpDown":"Flecha arriba/abajo","dxDiagram-shapeArrowLeftRight":"Flecha izquierda/derecha","dxDiagram-shapeProcess":"Proceso","dxDiagram-shapeDecision":"Decisión","dxDiagram-shapeTerminator":"Terminador","dxDiagram-shapePredefinedProcess":"Proceso predefinido","dxDiagram-shapeDocument":"Documento","dxDiagram-shapeMultipleDocuments":"Varios documentos","dxDiagram-shapeManualInput":"Entrada manual","dxDiagram-shapePreparation":"Preparación","dxDiagram-shapeData":"Datos","dxDiagram-shapeDatabase":"Base de datos","dxDiagram-shapeHardDisk":"Disco duro","dxDiagram-shapeInternalStorage":"Almacenamiento interno","dxDiagram-shapePaperTape":"Cinta de papel","dxDiagram-shapeManualOperation":"Operación manual","dxDiagram-shapeDelay":"Retraso","dxDiagram-shapeStoredData":"Datos almacenados","dxDiagram-shapeDisplay":"Pantalla","dxDiagram-shapeMerge":"Combinar","dxDiagram-shapeConnector":"Conector","dxDiagram-shapeOr":"O","dxDiagram-shapeSummingJunction":"Unión en Y","dxDiagram-shapeContainerDefaultText":"Contenedor","dxDiagram-shapeVerticalContainer":"Contenedor vertical","dxDiagram-shapeHorizontalContainer":"Contenedor horizontal","dxDiagram-shapeCardDefaultText":"Nombre de persona","dxDiagram-shapeCardWithImageOnLeft":"Tarjeta con imagen a la izquierda","dxDiagram-shapeCardWithImageOnTop":"Tarjeta con imagen en la parte superior","dxDiagram-shapeCardWithImageOnRight":"Tarjeta con imagen a la derecha","dxGantt-dialogTitle":"Title","dxGantt-dialogStartTitle":"Start","dxGantt-dialogEndTitle":"End","dxGantt-dialogProgressTitle":"Progress","dxGantt-dialogResourcesTitle":"Resources","dxGantt-dialogResourceManagerTitle":"Resource Manager","dxGantt-dialogTaskDetailsTitle":"Task Details","dxGantt-dialogEditResourceListHint":"Edit Resource List","dxGantt-dialogEditNoResources":"No resources","dxGantt-dialogButtonAdd":"Add","dxGantt-contextMenuNewTask":"New Task","dxGantt-contextMenuNewSubtask":"New Subtask","dxGantt-contextMenuDeleteTask":"Delete Task","dxGantt-contextMenuDeleteDependency":"Delete Dependency","dxGantt-dialogTaskDeleteConfirmation":"Deleting a task also deletes all its dependencies and subtasks. Are you sure you want to delete this task?","dxGantt-dialogDependencyDeleteConfirmation":"Are you sure you want to delete the dependency from the task?","dxGantt-dialogResourcesDeleteConfirmation":"Deleting a resource also deletes it from tasks to which this resource is assigned. Are you sure you want to delete these resources? Resources: {0}","dxGantt-dialogConstraintCriticalViolationMessage":"The task you are attempting to move is linked to a second task by a dependency relation. This change would conflict with dependency rules. How would you like to proceed?","dxGantt-dialogConstraintViolationMessage":"The task you are attempting to move is linked to a second task by a dependency relation. How would you like to proceed?","dxGantt-dialogCancelOperationMessage":"Cancel the operation","dxGantt-dialogDeleteDependencyMessage":"Delete the dependency","dxGantt-dialogMoveTaskAndKeepDependencyMessage":"Move the task and keep the dependency","dxGantt-dialogConstraintCriticalViolationSeveralTasksMessage":"The task you are attempting to move is linked to another tasks by dependency relations. This change would conflict with dependency rules. How would you like to proceed?","dxGantt-dialogConstraintViolationSeveralTasksMessage":"The task you are attempting to move is linked to another tasks by dependency relations. How would you like to proceed?","dxGantt-dialogDeleteDependenciesMessage":"Delete the dependency relations","dxGantt-dialogMoveTaskAndKeepDependenciesMessage":"Move the task and keep the dependencies","dxGantt-undo":"Undo","dxGantt-redo":"Redo","dxGantt-expandAll":"Expand All","dxGantt-collapseAll":"Collapse All","dxGantt-addNewTask":"Add New Task","dxGantt-deleteSelectedTask":"Delete Selected Task","dxGantt-zoomIn":"Zoom In","dxGantt-zoomOut":"Zoom Out","dxGantt-fullScreen":"Full Screen","dxGantt-quarter":"Q{0}","dxGantt-sortingAscendingText":"Orden Ascendente","dxGantt-sortingDescendingText":"Orden Descendente","dxGantt-sortingClearText":"Limpiar Ordenamiento","dxGantt-showResources":"Mostrar Recursos","dxGantt-showDependencies":"Mostrar Dependencias","dxGantt-dialogStartDateValidation":"La fecha de inicio debe ser anterior {0}","dxGantt-dialogEndDateValidation":"La fecha de finalización debe ser posterior {0}","dxGallery-itemName":"Gallery item","dxMultiView-elementAriaRoleDescription":"MultiView","dxMultiView-elementAriaLabel":"Use the arrow keys or swipe to navigate between views","dxMultiView-itemAriaRoleDescription":"View","dxMultiView-itemAriaLabel":"{0} of {1}","dxSplitter-resizeHandleAriaLabel":"Split bar","dxSplitter-resizeHandleAriaRoleDescription":"Separator","dxStepper-optionalMark":"(Optional)"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(68327));
/******/ }
]);