"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[58],{

/***/ 61058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ErrorsModule: () => (/* binding */ ErrorsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/common.mjs
var common = __webpack_require__(60177);
// EXTERNAL MODULE: ./node_modules/lord-icon-element/index.js + 12 modules
var lord_icon_element = __webpack_require__(88136);
// EXTERNAL MODULE: ./node_modules/lottie-web/build/player/lottie.js
var lottie = __webpack_require__(98982);
var lottie_default = /*#__PURE__*/__webpack_require__.n(lottie);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2022/router.mjs + 4 modules
var router = __webpack_require__(74710);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2022/core.mjs + 1 modules
var core = __webpack_require__(54438);
;// CONCATENATED MODULE: ./src/app/account/auth/errors/basic/basic.component.ts


/**
 * 404 Basic Component
 */
class BasicComponent {
  constructor() {
    // set the current year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
  static {
    this.ɵfac = function BasicComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BasicComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: BasicComponent,
      selectors: [["app-basic"]],
      decls: 32,
      vars: 1,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "pt-4"], [1, ""], ["src", "assets/images/error.svg", "alt", "", 1, "error-basic-img", "move-animation"], [1, "mt-n4"], [1, "display-1", "fw-medium"], [1, "text-uppercase"], [1, "text-muted", "mb-4"], ["routerLink", "", 1, "btn", "btn-success"], [1, "mdi", "mdi-home", "me-1"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function BasicComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 0)(1, "div", 1);
          core/* ɵɵelement */.nrm(2, "div", 2);
          core/* ɵɵelementStart */.j41(3, "div", 3);
          core/* ɵɵnamespaceSVG */.qSk();
          core/* ɵɵelementStart */.j41(4, "svg", 4);
          core/* ɵɵelement */.nrm(5, "path", 5);
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵnamespaceHTML */.joV();
          core/* ɵɵelementStart */.j41(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11);
          core/* ɵɵelement */.nrm(12, "img", 12);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(13, "div", 13)(14, "h1", 14);
          core/* ɵɵtext */.EFF(15, "404");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(16, "h3", 15);
          core/* ɵɵtext */.EFF(17, "Sorry, Page not Found \uD83D\uDE2D");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(18, "p", 16);
          core/* ɵɵtext */.EFF(19, "The page you are looking for not available!");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(20, "a", 17);
          core/* ɵɵelement */.nrm(21, "i", 18);
          core/* ɵɵtext */.EFF(22, "Back to home");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(23, "footer", 19)(24, "div", 7)(25, "div", 8)(26, "div", 9)(27, "div", 20)(28, "p", 21);
          core/* ɵɵtext */.EFF(29);
          core/* ɵɵelement */.nrm(30, "i", 22);
          core/* ɵɵtext */.EFF(31, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(29);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/errors/cover/cover.component.ts


/**
 * 404 Cover Component
 */
class CoverComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function CoverComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CoverComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: CoverComponent,
      selectors: [["app-cover"]],
      decls: 15,
      vars: 0,
      consts: [[1, "auth-page-wrapper", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "auth-page-content", "overflow-hidden", "p-0"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-7", "col-lg-8"], [1, "text-center"], ["src", "assets/images/error400-cover.png", "alt", "error img", 1, "img-fluid"], [1, "mt-3"], [1, "text-uppercase"], [1, "text-muted", "mb-4"], ["routerLink", "", 1, "btn", "btn-success"], [1, "mdi", "mdi-home", "me-1"]],
      template: function CoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          core/* ɵɵelement */.nrm(6, "img", 6);
          core/* ɵɵelementStart */.j41(7, "div", 7)(8, "h3", 8);
          core/* ɵɵtext */.EFF(9, "Sorry, Page not Found \uD83D\uDE2D");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(10, "p", 9);
          core/* ɵɵtext */.EFF(11, "The page you are looking for not available!");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(12, "a", 10);
          core/* ɵɵelement */.nrm(13, "i", 11);
          core/* ɵɵtext */.EFF(14, "Back to home");
          core/* ɵɵelementEnd */.k0s()()()()()()()();
        }
      },
      dependencies: [router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/errors/alt/alt.component.ts


/**
 * 404 Alt Component
 */
class AltComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function AltComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AltComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: AltComponent,
      selectors: [["app-alt"]],
      decls: 19,
      vars: 0,
      consts: [[1, "auth-page-wrapper", "auth-bg-cover", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "bg-overlay"], [1, "auth-page-content", "overflow-hidden", "pt-lg-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-5"], [1, "card", "overflow-hidden"], [1, "card-body", "p-4"], [1, "text-center"], ["src", "https://cdn.lordicon.com/spxnqpau.json", "trigger", "loop", "colors", "primary:#405189,secondary:#0ab39c", 1, "avatar-xl"], [1, "text-primary", "mb-4"], [1, "text-uppercase"], [1, "text-muted", "mb-4"], ["routerLink", "", 1, "btn", "btn-success"], [1, "mdi", "mdi-home", "me-1"]],
      template: function AltComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 0);
          core/* ɵɵelement */.nrm(1, "div", 1);
          core/* ɵɵelementStart */.j41(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          core/* ɵɵelement */.nrm(9, "lord-icon", 9);
          core/* ɵɵelementStart */.j41(10, "h1", 10);
          core/* ɵɵtext */.EFF(11, "Oops !");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(12, "h4", 11);
          core/* ɵɵtext */.EFF(13, "Sorry, Page not Found \uD83D\uDE2D");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(14, "p", 12);
          core/* ɵɵtext */.EFF(15, "The page you are looking for not available!");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(16, "a", 13);
          core/* ɵɵelement */.nrm(17, "i", 14);
          core/* ɵɵtext */.EFF(18, "Back to home");
          core/* ɵɵelementEnd */.k0s()()()()()()()()();
        }
      },
      dependencies: [router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/errors/page500/page500.component.ts


/**
 * Page500 Component
 */
class Page500Component {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function Page500Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Page500Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: Page500Component,
      selectors: [["app-page500"]],
      decls: 17,
      vars: 0,
      consts: [[1, "auth-page-wrapper", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "auth-page-content", "overflow-hidden", "p-0"], [1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-xl-4", "text-center"], [1, "error-500", "position-relative"], ["src", "assets/images/error500.png", "alt", "", 1, "img-fluid", "error-500-img", "error-img"], [1, "title", "text-muted"], [1, "text-muted", "w-75", "mx-auto"], ["routerLink", "", 1, "btn", "btn-success"], [1, "mdi", "mdi-home", "me-1"]],
      template: function Page500Component_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          core/* ɵɵelement */.nrm(6, "img", 6);
          core/* ɵɵelementStart */.j41(7, "h1", 7);
          core/* ɵɵtext */.EFF(8, "500");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(9, "div")(10, "h4");
          core/* ɵɵtext */.EFF(11, "Internal Server Error!");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(12, "p", 8);
          core/* ɵɵtext */.EFF(13, "Server Error 500. We're not exactly sure what happened, but our servers say something is wrong.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(14, "a", 9);
          core/* ɵɵelement */.nrm(15, "i", 10);
          core/* ɵɵtext */.EFF(16, "Back to home");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
      },
      dependencies: [router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/errors/offline/offline.component.ts

/**
 * Offline Component
 */
class OfflineComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function OfflineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OfflineComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: OfflineComponent,
      selectors: [["app-offline"]],
      decls: 17,
      vars: 0,
      consts: [[1, "auth-page-wrapper", "auth-bg-cover", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "bg-overlay"], [1, "auth-page-content", "overflow-hidden", "pt-lg-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-5"], [1, "card", "overflow-hidden"], [1, "card-body", "p-4"], [1, "text-center"], ["src", "https://img.themesbrand.com/velzon/images/auth-offline.gif", "alt", "", "height", "210"], [1, "mt-4", "fw-semibold"], [1, "text-muted", "mb-4", "fs-14"], ["onClick", "window.location.href=window.location.href", 1, "btn", "btn-success", "btn-border"], [1, "ri-refresh-line", "align-bottom"]],
      template: function OfflineComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 0);
          core/* ɵɵelement */.nrm(1, "div", 1);
          core/* ɵɵelementStart */.j41(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          core/* ɵɵelement */.nrm(9, "img", 9);
          core/* ɵɵelementStart */.j41(10, "h3", 10);
          core/* ɵɵtext */.EFF(11, "We're currently offline");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(12, "p", 11);
          core/* ɵɵtext */.EFF(13, "We can't show you this images because you aren't connected to the internet. When you\u2019re back online refresh the page or hit the button below");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(14, "button", 12);
          core/* ɵɵelement */.nrm(15, "i", 13);
          core/* ɵɵtext */.EFF(16, " Refresh");
          core/* ɵɵelementEnd */.k0s()()()()()()()()();
        }
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/errors/errors-routing.module.ts

// Components







const routes = [{
  path: "404-basic",
  component: BasicComponent
}, {
  path: "404-cover",
  component: CoverComponent
}, {
  path: "404-alt",
  component: AltComponent
}, {
  path: "page-500",
  component: Page500Component
}, {
  path: "offline",
  component: OfflineComponent
}];
class Error404RoutingModule {
  static {
    this.ɵfac = function Error404RoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Error404RoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: Error404RoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(Error404RoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
;// CONCATENATED MODULE: ./src/app/account/auth/errors/errors.module.ts

// Load Icons


// Component







class ErrorsModule {
  constructor() {
    (0,lord_icon_element/* defineElement */.e)((lottie_default()).loadAnimation);
  }
  static {
    this.ɵfac = function ErrorsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ErrorsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: ErrorsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, Error404RoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(ErrorsModule, {
    declarations: [BasicComponent, CoverComponent, AltComponent, Page500Component, OfflineComponent],
    imports: [common/* CommonModule */.MD, Error404RoutingModule]
  });
})();

/***/ })

}]);