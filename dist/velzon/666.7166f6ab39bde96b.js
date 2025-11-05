"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[666],{

/***/ 14666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PassResetModule: () => (/* binding */ PassResetModule)
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
;// CONCATENATED MODULE: ./src/app/account/auth/pass-reset/basic/basic.component.ts





const _c0 = a0 => ({
  "is-invalid": a0
});
function BasicComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div");
    core/* ɵɵtext */.EFF(1, "Email is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function BasicComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 38);
    core/* ɵɵtemplate */.DNE(1, BasicComponent_div_34_div_1_Template, 2, 0, "div", 39);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["email"].errors["required"]);
  }
}
/**
 * Pass-Reset Basic Component
 */
class BasicComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.submitted = false;
    this.error = '';
    // set the current year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    /**
     * Form Validatyion
     */
    this.passresetForm = this.formBuilder.group({
      email: ['', [fesm2022_forms/* Validators */.k0.required]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.passresetForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.passresetForm.invalid) {
      return;
    }
  }
  static {
    this.ɵfac = function BasicComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BasicComponent)(core/* ɵɵdirectiveInject */.rXU(fesm2022_forms/* UntypedFormBuilder */.ze));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: BasicComponent,
      selectors: [["app-basic"]],
      decls: 53,
      vars: 5,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "mb-4", "text-white-50"], ["routerLink", "", 1, "d-inline-block", "auth-logo"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "mt-3", "fs-15", "fw-medium"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "mt-4"], [1, "card-body", "p-4"], [1, "text-center", "mt-2"], [1, "text-primary"], [1, "text-muted"], ["src", "https://cdn.lordicon.com/rhvddzym.json", "trigger", "loop", "colors", "primary:#0ab39c", 1, "avatar-xl"], ["role", "alert", 1, "alert", "alert-borderless", "alert-warning", "text-center", "mb-2", "mx-2"], [1, "p-2"], [3, "ngSubmit", "formGroup"], [1, "mb-4"], [1, "form-label"], ["type", "email", "id", "email", "placeholder", "Enter Email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", "align", "left", 4, "ngIf"], [1, "text-center", "mt-4"], ["type", "submit", 1, "btn", "btn-success", "w-100"], [1, "mt-4", "text-center"], [1, "mb-0"], ["routerLink", "/auth/signin/basic", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"], ["align", "left", 1, "invalid-feedback"], [4, "ngIf"]],
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
          core/* ɵɵelementStart */.j41(16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "div", 18)(21, "h5", 19);
          core/* ɵɵtext */.EFF(22, "Forgot Password?");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(23, "p", 20);
          core/* ɵɵtext */.EFF(24, "Reset password with velzon");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelement */.nrm(25, "lord-icon", 21);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(26, "div", 22);
          core/* ɵɵtext */.EFF(27, " Enter your email and instructions will be sent to you! ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(28, "div", 23)(29, "form", 24);
          core/* ɵɵlistener */.bIt("ngSubmit", function BasicComponent_Template_form_ngSubmit_29_listener() {
            return ctx.onSubmit();
          });
          core/* ɵɵelementStart */.j41(30, "div", 25)(31, "label", 26);
          core/* ɵɵtext */.EFF(32, "Email");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelement */.nrm(33, "input", 27);
          core/* ɵɵtemplate */.DNE(34, BasicComponent_div_34_Template, 2, 1, "div", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(35, "div", 29)(36, "button", 30);
          core/* ɵɵtext */.EFF(37, "Send Reset Link");
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(38, "div", 31)(39, "p", 32);
          core/* ɵɵtext */.EFF(40, "Wait, I remember my password... ");
          core/* ɵɵelementStart */.j41(41, "a", 33);
          core/* ɵɵtext */.EFF(42, " Click here ");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(43, "footer", 34)(44, "div", 7)(45, "div", 8)(46, "div", 9)(47, "div", 35)(48, "p", 36);
          core/* ɵɵtext */.EFF(49, "\u00A9 ");
          core/* ɵɵtext */.EFF(50, " Velzon. Crafted with ");
          core/* ɵɵelement */.nrm(51, "i", 37);
          core/* ɵɵtext */.EFF(52, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(29);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.passresetForm);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(3, _c0, ctx.submitted && ctx.f["email"].errors));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["email"].errors);
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgIf */.bT, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/pass-reset/cover/cover.component.ts






const cover_component_c0 = a0 => ({
  "is-invalid": a0
});
function CoverComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 38)(1, "div", 39)(2, "p", 40);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 38)(1, "div", 39)(2, "p", 40);
    core/* ɵɵtext */.EFF(3, "\" The theme is really great with an amazing customer support.\"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 38)(1, "div", 39)(2, "p", 40);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div");
    core/* ɵɵtext */.EFF(1, "Email is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function CoverComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 41);
    core/* ɵɵtemplate */.DNE(1, CoverComponent_div_38_div_1_Template, 2, 0, "div", 42);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["email"].errors["required"]);
  }
}
/**
 * Cover Component
 */
class CoverComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.submitted = false;
    this.error = '';
    // set the current year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    /**
     * Form Validatyion
     */
    this.passresetForm = this.formBuilder.group({
      email: ['', [fesm2022_forms/* Validators */.k0.required]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.passresetForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.passresetForm.invalid) {
      return;
    }
  }
  static {
    this.ɵfac = function CoverComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CoverComponent)(core/* ɵɵdirectiveInject */.rXU(fesm2022_forms/* UntypedFormBuilder */.ze));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: CoverComponent,
      selectors: [["app-cover"]],
      decls: 57,
      vars: 6,
      consts: [[1, "auth-page-wrapper", "auth-bg-cover", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "bg-overlay"], [1, "auth-page-content", "overflow-hidden", "pt-lg-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "overflow-hidden"], [1, "row", "justify-content-center", "g-0"], [1, "col-lg-6"], [1, "p-lg-5", "p-4", "auth-one-bg", "h-100"], [1, "position-relative", "h-100", "d-flex", "flex-column"], [1, "mb-4"], ["routerLink", "", 1, "d-block"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18"], [1, "mt-auto"], [1, "mb-3"], [1, "ri-double-quotes-l", "display-4", "text-success"], [3, "showNavigationArrows"], ["ngbSlide", ""], [1, "p-lg-5", "p-4"], [1, "text-primary"], [1, "text-muted"], [1, "mt-2", "text-center"], ["src", "https://cdn.lordicon.com/rhvddzym.json", "trigger", "loop", "colors", "primary:#0ab39c", 1, "avatar-xl"], ["role", "alert", 1, "alert", "alert-borderless", "alert-warning", "text-center", "mb-2", "mx-2"], [1, "p-2"], [3, "ngSubmit", "formGroup"], [1, "form-label"], ["type", "email", "id", "email", "placeholder", "Enter email address", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", "align", "left", 4, "ngIf"], [1, "text-center", "mt-4"], ["type", "submit", 1, "btn", "btn-success", "w-100"], [1, "mt-5", "text-center"], [1, "mb-0"], ["routerLink", "/auth/signin/cover", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mdi", "mdi-heart", "text-danger"], [1, "carousel-inner", "text-center", "text-white-50", "pb-5"], [1, "carousel-item", "active"], [1, "fs-15", "fst-italic"], ["align", "left", 1, "invalid-feedback"], [4, "ngIf"]],
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
          core/* ɵɵelementStart */.j41(22, "div", 8)(23, "div", 19)(24, "h5", 20);
          core/* ɵɵtext */.EFF(25, "Forgot Password?");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(26, "p", 21);
          core/* ɵɵtext */.EFF(27, "Reset password with velzon");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(28, "div", 22);
          core/* ɵɵelement */.nrm(29, "lord-icon", 23);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(30, "div", 24);
          core/* ɵɵtext */.EFF(31, " Enter your email and instructions will be sent to you! ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(32, "div", 25)(33, "form", 26);
          core/* ɵɵlistener */.bIt("ngSubmit", function CoverComponent_Template_form_ngSubmit_33_listener() {
            return ctx.onSubmit();
          });
          core/* ɵɵelementStart */.j41(34, "div", 11)(35, "label", 27);
          core/* ɵɵtext */.EFF(36, "Email");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelement */.nrm(37, "input", 28);
          core/* ɵɵtemplate */.DNE(38, CoverComponent_div_38_Template, 2, 1, "div", 29);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(39, "div", 30)(40, "button", 31);
          core/* ɵɵtext */.EFF(41, "Send Reset Link");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(42, "div", 32)(43, "p", 33);
          core/* ɵɵtext */.EFF(44, "Wait, I remember my password... ");
          core/* ɵɵelementStart */.j41(45, "a", 34);
          core/* ɵɵtext */.EFF(46, " Click here ");
          core/* ɵɵelementEnd */.k0s()()()()()()()()()()();
          core/* ɵɵelementStart */.j41(47, "footer", 35)(48, "div", 3)(49, "div", 4)(50, "div", 5)(51, "div", 36)(52, "p", 33);
          core/* ɵɵtext */.EFF(53, "\u00A9 ");
          core/* ɵɵtext */.EFF(54, " Velzon. Crafted with ");
          core/* ɵɵelement */.nrm(55, "i", 37);
          core/* ɵɵtext */.EFF(56, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(18);
          core/* ɵɵproperty */.Y8G("showNavigationArrows", ctx.showNavigationArrows);
          core/* ɵɵadvance */.R7$(15);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.passresetForm);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(4, cover_component_c0, ctx.submitted && ctx.f["email"].errors));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["email"].errors);
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgIf */.bT, ng_bootstrap/* NgbCarousel */.Oj, ng_bootstrap/* NgbSlide */.bD, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/pass-reset/pass-reset-routing.module.ts

// Components




const routes = [{
  path: "basic",
  component: BasicComponent
}, {
  path: "cover",
  component: CoverComponent
}];
class PassResetRoutingModule {
  static {
    this.ɵfac = function PassResetRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassResetRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: PassResetRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(PassResetRoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
;// CONCATENATED MODULE: ./src/app/account/auth/pass-reset/pass-reset.module.ts



// Load Icons


// Component




class PassResetModule {
  constructor() {
    (0,lord_icon_element/* defineElement */.e)((lottie_default()).loadAnimation);
  }
  static {
    this.ɵfac = function PassResetModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassResetModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: PassResetModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, PassResetRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(PassResetModule, {
    declarations: [BasicComponent, CoverComponent],
    imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, PassResetRoutingModule]
  });
})();

/***/ })

}]);