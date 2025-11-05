"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[560],{

/***/ 36560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LogoutModule: () => (/* binding */ LogoutModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/common.mjs
var common = __webpack_require__(60177);
// EXTERNAL MODULE: ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs + 60 modules
var ng_bootstrap = __webpack_require__(1109);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2022/forms.mjs
var fesm2022_forms = __webpack_require__(89417);
// EXTERNAL MODULE: ./node_modules/lord-icon-element/index.js + 12 modules
var lord_icon_element = __webpack_require__(88136);
// EXTERNAL MODULE: ./node_modules/lottie-web/build/player/lottie.js
var lottie = __webpack_require__(98982);
var lottie_default = /*#__PURE__*/__webpack_require__.n(lottie);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2022/router.mjs + 4 modules
var router = __webpack_require__(74710);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2022/core.mjs + 1 modules
var core = __webpack_require__(54438);
;// CONCATENATED MODULE: ./src/app/account/auth/logout/basic/basic.component.ts


/**
 * Logout Basic Component
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
      decls: 41,
      vars: 1,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "mb-4", "text-white-50"], ["routerLink", "", 1, "d-inline-block", "auth-logo"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "mt-3", "fs-15", "fw-medium"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "mt-4"], [1, "card-body", "p-4", "text-center"], ["src", "https://cdn.lordicon.com/hzomhqxz.json", "trigger", "loop", "colors", "primary:#405189,secondary:#08a88a", 2, "width", "180px", "height", "180px"], [1, "mt-4", "pt-2"], [1, "text-muted"], [1, "fw-semibold"], [1, "mt-4"], ["routerLink", "/auth/signin/basic", 1, "btn", "btn-success", "w-100"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"]],
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
          core/* ɵɵelementStart */.j41(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div")(12, "a", 11);
          core/* ɵɵelement */.nrm(13, "img", 12);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(14, "p", 13);
          core/* ɵɵtext */.EFF(15, "Premium Admin & Dashboard Template");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "div", 17);
          core/* ɵɵelement */.nrm(20, "lord-icon", 18);
          core/* ɵɵelementStart */.j41(21, "div", 19)(22, "h5");
          core/* ɵɵtext */.EFF(23, "You are Logged Out");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(24, "p", 20);
          core/* ɵɵtext */.EFF(25, "Thank you for using ");
          core/* ɵɵelementStart */.j41(26, "span", 21);
          core/* ɵɵtext */.EFF(27, "velzon");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(28, " admin template");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(29, "div", 22)(30, "a", 23);
          core/* ɵɵtext */.EFF(31, "Sign In");
          core/* ɵɵelementEnd */.k0s()()()()()()()()();
          core/* ɵɵelementStart */.j41(32, "footer", 24)(33, "div", 7)(34, "div", 8)(35, "div", 9)(36, "div", 25)(37, "p", 26);
          core/* ɵɵtext */.EFF(38);
          core/* ɵɵelement */.nrm(39, "i", 27);
          core/* ɵɵtext */.EFF(40, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(38);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/logout/cover/cover.component.ts



function CoverComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 30)(1, "div", 31)(2, "p", 32);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 30)(1, "div", 31)(2, "p", 32);
    core/* ɵɵtext */.EFF(3, "\" The theme is really great with an amazing customer support.\"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 30)(1, "div", 31)(2, "p", 32);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
/**
 * Logout Cover Component
 */
class CoverComponent {
  constructor() {
    // set the current year
    this.year = new Date().getFullYear();
  }
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
      decls: 45,
      vars: 2,
      consts: [[1, "auth-page-wrapper", "auth-bg-cover", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "bg-overlay"], [1, "auth-page-content", "overflow-hidden", "pt-lg-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "overflow-hidden"], [1, "row", "justify-content-center", "g-0"], [1, "col-lg-6"], [1, "p-lg-5", "p-4", "auth-one-bg", "h-100"], [1, "position-relative", "h-100", "d-flex", "flex-column"], [1, "mb-4"], ["routerLink", "", 1, "d-block"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18"], [1, "mt-auto"], [1, "mb-3"], [1, "ri-double-quotes-l", "display-4", "text-success"], [3, "showNavigationArrows"], ["ngbSlide", ""], [1, "p-lg-5", "p-4", "text-center"], ["src", "https://cdn.lordicon.com/hzomhqxz.json", "trigger", "loop", "colors", "primary:#405189,secondary:#08a88a", 2, "width", "180px", "height", "180px"], [1, "mt-4", "pt-2"], [1, "text-muted"], [1, "fw-semibold"], [1, "mt-4"], ["routerLink", "/auth/signin/basic", 1, "btn", "btn-success", "w-100"], [1, "footer"], [1, "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [1, "carousel-inner", "text-center", "text-white-50", "pb-5"], [1, "carousel-item", "active"], [1, "fs-15", "fst-italic"]],
      template: function CoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 0);
          core/* ɵɵelement */.nrm(1, "div", 1);
          core/* ɵɵelementStart */.j41(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
          core/* ɵɵelement */.nrm(10, "div", 1);
          core/* ɵɵelementStart */.j41(11, "div", 10)(12, "div", 11)(13, "a", 12);
          core/* ɵɵelement */.nrm(14, "img", 13);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(15, "div", 14)(16, "div", 15);
          core/* ɵɵelement */.nrm(17, "i", 16);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(18, "ngb-carousel", 17);
          core/* ɵɵtemplate */.DNE(19, CoverComponent_ng_template_19_Template, 4, 0, "ng-template", 18)(20, CoverComponent_ng_template_20_Template, 4, 0, "ng-template", 18)(21, CoverComponent_ng_template_21_Template, 4, 0, "ng-template", 18);
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(22, "div", 8)(23, "div", 19);
          core/* ɵɵelement */.nrm(24, "lord-icon", 20);
          core/* ɵɵelementStart */.j41(25, "div", 21)(26, "h5");
          core/* ɵɵtext */.EFF(27, "You are Logged Out");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(28, "p", 22);
          core/* ɵɵtext */.EFF(29, "Thank you for using ");
          core/* ɵɵelementStart */.j41(30, "span", 23);
          core/* ɵɵtext */.EFF(31, "velzon");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(32, " admin template");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(33, "div", 24)(34, "a", 25);
          core/* ɵɵtext */.EFF(35, "Sign In");
          core/* ɵɵelementEnd */.k0s()()()()()()()()()()();
          core/* ɵɵelementStart */.j41(36, "footer", 26)(37, "div", 3)(38, "div", 4)(39, "div", 5)(40, "div", 27)(41, "p", 28);
          core/* ɵɵtext */.EFF(42);
          core/* ɵɵelement */.nrm(43, "i", 29);
          core/* ɵɵtext */.EFF(44, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(18);
          core/* ɵɵproperty */.Y8G("showNavigationArrows", ctx.showNavigationArrows);
          core/* ɵɵadvance */.R7$(24);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [ng_bootstrap/* NgbCarousel */.Oj, ng_bootstrap/* NgbSlide */.bD, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/logout/logout-routing.module.ts

// Components




const routes = [{
  path: "basic",
  component: BasicComponent
}, {
  path: "cover",
  component: CoverComponent
}];
class LogoutRoutingModule {
  static {
    this.ɵfac = function LogoutRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogoutRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: LogoutRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(LogoutRoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
;// CONCATENATED MODULE: ./src/app/account/auth/logout/logout.module.ts



// Load Icons


// Component




class LogoutModule {
  constructor() {
    (0,lord_icon_element/* defineElement */.e)((lottie_default()).loadAnimation);
  }
  static {
    this.ɵfac = function LogoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogoutModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: LogoutModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, LogoutRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(LogoutModule, {
    declarations: [BasicComponent, CoverComponent],
    imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, LogoutRoutingModule]
  });
})();

/***/ })

}]);