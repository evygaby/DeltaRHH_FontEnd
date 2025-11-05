"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[445],{

/***/ 20445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ExtraspagesModule: () => (/* binding */ ExtraspagesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/common.mjs
var common = __webpack_require__(60177);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2022/router.mjs + 4 modules
var router = __webpack_require__(74710);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2022/core.mjs + 1 modules
var core = __webpack_require__(54438);
;// CONCATENATED MODULE: ./src/app/extraspages/maintenance/maintenance.component.ts


/**
 * Maintenance Component
 */
class MaintenanceComponent {
  constructor() {
    // set the current year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
  static {
    this.ɵfac = function MaintenanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaintenanceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: MaintenanceComponent,
      selectors: [["app-maintenance"]],
      decls: 33,
      vars: 1,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "pt-4"], [1, "mb-5", "text-white-50"], [1, "display-5", "coming-soon-text"], [1, "fs-14"], [1, "mt-4", "pt-2"], ["routerLink", "/", 1, "btn", "btn-success"], [1, "mdi", "mdi-home", "me-1"], [1, "row", "justify-content-center", "mb-5"], [1, "col-xl-4", "col-lg-8"], ["src", "assets/images/maintenance.png", "alt", "", 1, "img-fluid"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function MaintenanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 0)(1, "div", 1);
          core/* ɵɵelement */.nrm(2, "div", 2);
          core/* ɵɵelementStart */.j41(3, "div", 3);
          core/* ɵɵnamespaceSVG */.qSk();
          core/* ɵɵelementStart */.j41(4, "svg", 4);
          core/* ɵɵelement */.nrm(5, "path", 5);
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵnamespaceHTML */.joV();
          core/* ɵɵelementStart */.j41(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h1", 12);
          core/* ɵɵtext */.EFF(13, "Site is Under Maintenance");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(14, "p", 13);
          core/* ɵɵtext */.EFF(15, "Please check back in sometime");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(16, "div", 14)(17, "a", 15);
          core/* ɵɵelement */.nrm(18, "i", 16);
          core/* ɵɵtext */.EFF(19, " Back to Home");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(20, "div", 17)(21, "div", 18)(22, "div");
          core/* ɵɵelement */.nrm(23, "img", 19);
          core/* ɵɵelementEnd */.k0s()()()()()()()();
          core/* ɵɵelementStart */.j41(24, "footer", 20)(25, "div", 7)(26, "div", 8)(27, "div", 9)(28, "div", 21)(29, "p", 22);
          core/* ɵɵtext */.EFF(30);
          core/* ɵɵelement */.nrm(31, "i", 23);
          core/* ɵɵtext */.EFF(32, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(30);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [router/* RouterLink */.Wk]
    });
  }
}
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/interval.js
var interval = __webpack_require__(40605);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/map.js
var map = __webpack_require__(96354);
;// CONCATENATED MODULE: ./src/app/extraspages/coming-soon/coming-soon.component.ts



/**
 * ComingSoon Component
 */
class ComingSoonComponent {
  constructor() {
    // set the current year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    // Date Set
    this._trialEndsAt = "2022-12-31";
    /**
     * Count date set
     */
    (0,interval/* interval */.Y)(1000).pipe((0,map/* map */.T)(x => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    })).subscribe(x => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });
  }
  /**
    * Day Set
    */
  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }
  /**
   * Hours Set
   */
  getHours(t) {
    return Math.floor(t / (1000 * 60 * 60) % 24);
  }
  /**
   * Minutes set
   */
  getMinutes(t) {
    return Math.floor(t / 1000 / 60 % 60);
  }
  /**
   * Secound set
   */
  getSeconds(t) {
    return Math.floor(t / 1000 % 60);
  }
  static {
    this.ɵfac = function ComingSoonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ComingSoonComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: ComingSoonComponent,
      selectors: [["app-coming-soon"]],
      decls: 59,
      vars: 5,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "pt-4", "mb-4"], [1, "mb-sm-5", "pb-sm-4", "pb-5"], ["src", "assets/images/comingsoon.png", "alt", "", "height", "120", 1, "move-animation"], [1, "mb-5"], [1, "display-2", "coming-soon-text"], [1, "row", "justify-content-center", "mt-5"], [1, "col-lg-8"], ["id", "countdown", 1, "countdownlist"], [1, "countdownlist-item"], [1, "count-title"], [1, "count-num"], [1, "mt-5"], [1, "text-muted"], [1, "input-group", "countdown-input-group", "mx-auto", "my-4"], ["type", "email", "placeholder", "Enter your email address", "aria-label", "search result", "aria-describedby", "button-email", 1, "form-control", "border-light", "shadow"], ["type", "button", "id", "button-email", 1, "btn", "btn-success"], [1, "ri-send-plane-2-fill", "align-bottom", "ms-2"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function ComingSoonComponent_Template(rf, ctx) {
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
          core/* ɵɵtext */.EFF(15, "Coming Soon");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(16, "div")(17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "div", 18)(21, "div", 19);
          core/* ɵɵtext */.EFF(22, "Days");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(23, "div", 20);
          core/* ɵɵtext */.EFF(24);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(25, "div", 18)(26, "div", 19);
          core/* ɵɵtext */.EFF(27, "Hours");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(28, "div", 20);
          core/* ɵɵtext */.EFF(29);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(30, "div", 18)(31, "div", 19);
          core/* ɵɵtext */.EFF(32, "Minutes");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(33, "div", 20);
          core/* ɵɵtext */.EFF(34);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(35, "div", 18)(36, "div", 19);
          core/* ɵɵtext */.EFF(37, "Seconds");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(38, "div", 20);
          core/* ɵɵtext */.EFF(39);
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(40, "div", 21)(41, "h4");
          core/* ɵɵtext */.EFF(42, "Get notified when we launch");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(43, "p", 22);
          core/* ɵɵtext */.EFF(44, "Don't worry we will not spam you \uD83D\uDE0A");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(45, "div", 23);
          core/* ɵɵelement */.nrm(46, "input", 24);
          core/* ɵɵelementStart */.j41(47, "button", 25);
          core/* ɵɵtext */.EFF(48, "Send");
          core/* ɵɵelement */.nrm(49, "i", 26);
          core/* ɵɵelementEnd */.k0s()()()()()()()();
          core/* ɵɵelementStart */.j41(50, "footer", 27)(51, "div", 7)(52, "div", 8)(53, "div", 9)(54, "div", 28)(55, "p", 29);
          core/* ɵɵtext */.EFF(56);
          core/* ɵɵelement */.nrm(57, "i", 30);
          core/* ɵɵtext */.EFF(58, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(24);
          core/* ɵɵtextInterpolate */.JRh(ctx._days);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵtextInterpolate */.JRh(ctx._hours);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵtextInterpolate */.JRh(ctx._minutes);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵtextInterpolate */.JRh(ctx._seconds);
          core/* ɵɵadvance */.R7$(17);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      }
    });
  }
}
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2022/forms.mjs
var fesm2022_forms = __webpack_require__(89417);
// EXTERNAL MODULE: ./src/app/pages/extrapages/pricing/data.ts
var data = __webpack_require__(5117);
;// CONCATENATED MODULE: ./src/app/extraspages/registrarse/registro.model.ts
class registro {}
// EXTERNAL MODULE: ./src/app/core/services/auth.service.ts
var auth_service = __webpack_require__(68010);
// EXTERNAL MODULE: ./src/app/account/login/toast-service.ts
var toast_service = __webpack_require__(79157);
// EXTERNAL MODULE: ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs + 60 modules
var ng_bootstrap = __webpack_require__(1109);
;// CONCATENATED MODULE: ./src/app/extraspages/registrarse/registrarse.component.ts










const _c0 = a0 => ({
  "ribbon-box right": a0
});
const _c1 = a0 => ({
  "d-none": a0
});
const _c2 = a0 => ({
  "disabled": a0
});
function RegistrarseComponent_ng_template_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "span");
    core/* ɵɵtext */.EFF(5, "Popular");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(6, "div", 19)(7, "div", 20)(8, "h5", 21);
    core/* ɵɵtext */.EFF(9);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(10, "div", 22)(11, "h2", 23);
    core/* ɵɵtext */.EFF(12);
    core/* ɵɵelementStart */.j41(13, "small", 24);
    core/* ɵɵtext */.EFF(14, "/Mensuales");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(15, "p", 25);
    core/* ɵɵtext */.EFF(16);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(17, "ul", 26)(18, "li")(19, "div", 27)(20, "div", 28);
    core/* ɵɵelement */.nrm(21, "i", 29);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(22, "div", 20)(23, "b");
    core/* ɵɵtext */.EFF(24);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(25, " documentos ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(26, "li")(27, "div", 27)(28, "div", 28);
    core/* ɵɵelement */.nrm(29, "i", 29);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(30, "div", 20)(31, "b");
    core/* ɵɵtext */.EFF(32);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(33, " Usuarios ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(34, "li")(35, "div", 27)(36, "div", 28);
    core/* ɵɵelement */.nrm(37, "i", 29);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(38, "div", 20);
    core/* ɵɵtext */.EFF(39, " M\u00F3vil ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(40, "li")(41, "div", 27)(42, "div", 28);
    core/* ɵɵelement */.nrm(43, "i", 29);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(44, "div", 20);
    core/* ɵɵtext */.EFF(45, " Reportes Ventas ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(46, "li")(47, "div", 27)(48, "div");
    core/* ɵɵelement */.nrm(49, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(50, "div", 20)(51, "b");
    core/* ɵɵtext */.EFF(52, "24/7");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(53, " Support ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(54, "li")(55, "div", 27)(56, "div");
    core/* ɵɵelement */.nrm(57, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(58, "div", 20);
    core/* ɵɵtext */.EFF(59, " Portal web ");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(60, "div", 30)(61, "a", 31);
    core/* ɵɵlistener */.bIt("click", function RegistrarseComponent_ng_template_13_div_1_Template_a_click_61_listener() {
      const data_r2 = core/* ɵɵrestoreView */.eBV(_r1).$implicit;
      const ctx_r2 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r2.enviar(data_r2.id));
    });
    core/* ɵɵtext */.EFF(62, "Registrarme");
    core/* ɵɵelementEnd */.k0s()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(23, _c0, data_r2.ribbon === true));
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(25, _c1, data_r2.ribbon !== true));
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate */.JRh(data_r2.type);
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate1 */.SpI("$", data_r2.rate, " ");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r2.description);
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵtextInterpolate */.JRh(data_r2.documentos);
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵtextInterpolate */.JRh(data_r2.Customers);
    core/* ɵɵadvance */.R7$(16);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r2.supportClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r2.supportClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r2.storageClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r2.storageClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate1 */.ZvI("btn btn-", data_r2.planButtonClassname, " w-100");
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(27, _c2, data_r2.planButtonClassname === "danger"));
  }
}
function RegistrarseComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 12);
    core/* ɵɵtemplate */.DNE(1, RegistrarseComponent_ng_template_13_div_1_Template, 63, 29, "div", 14);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r2.MonthlyPlan);
  }
}
function RegistrarseComponent_ng_template_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "span");
    core/* ɵɵtext */.EFF(5, "Popular");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(6, "div", 19)(7, "div", 20)(8, "h5", 21);
    core/* ɵɵtext */.EFF(9);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(10, "div", 22)(11, "h2", 32)(12, "small", 33)(13, "del");
    core/* ɵɵtext */.EFF(14);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵtext */.EFF(15);
    core/* ɵɵelementStart */.j41(16, "small", 24);
    core/* ɵɵtext */.EFF(17, "/Year");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(18, "p", 25);
    core/* ɵɵtext */.EFF(19);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(20, "ul", 26)(21, "li")(22, "div", 27)(23, "div", 28);
    core/* ɵɵelement */.nrm(24, "i", 29);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(25, "div", 20)(26, "b");
    core/* ɵɵtext */.EFF(27);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(28, " documentos ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(29, "li")(30, "div", 27)(31, "div", 28);
    core/* ɵɵelement */.nrm(32, "i", 29);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(33, "div", 20)(34, "b");
    core/* ɵɵtext */.EFF(35);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(36, " Usuarios ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(37, "li")(38, "div", 27)(39, "div", 28);
    core/* ɵɵelement */.nrm(40, "i", 29);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(41, "div", 20);
    core/* ɵɵtext */.EFF(42, " M\u00F3vil ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(43, "li")(44, "div", 27)(45, "div", 28);
    core/* ɵɵelement */.nrm(46, "i", 29);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(47, "div", 20);
    core/* ɵɵtext */.EFF(48, " Reportes Ventas ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(49, "li")(50, "div", 27)(51, "div");
    core/* ɵɵelement */.nrm(52, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(53, "div", 20)(54, "b");
    core/* ɵɵtext */.EFF(55, "24/7");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(56, " Support ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(57, "li")(58, "div", 27)(59, "div");
    core/* ɵɵelement */.nrm(60, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(61, "div", 20);
    core/* ɵɵtext */.EFF(62, " Portal web ");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(63, "div", 30)(64, "a", 31);
    core/* ɵɵlistener */.bIt("click", function RegistrarseComponent_ng_template_19_div_1_Template_a_click_64_listener() {
      const data_r5 = core/* ɵɵrestoreView */.eBV(_r4).$implicit;
      const ctx_r2 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r2.enviar(data_r5.id));
    });
    core/* ɵɵtext */.EFF(65, "Registrarme");
    core/* ɵɵelementEnd */.k0s()()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(24, _c0, data_r5.ribbon === true));
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(26, _c1, data_r5.ribbon !== true));
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate */.JRh(data_r5.type);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate1 */.SpI("$", data_r5.price, "");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵtextInterpolate1 */.SpI(" $", data_r5.rate, " ");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r5.description);
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵtextInterpolate */.JRh(data_r5.documentos);
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵtextInterpolate */.JRh(data_r5.Customers);
    core/* ɵɵadvance */.R7$(16);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r5.supportClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r5.supportClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r5.storageClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r5.storageClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate1 */.ZvI("btn btn-", data_r5.planButtonClassname, " w-100");
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(28, _c2, data_r5.planButtonClassname === "danger"));
  }
}
function RegistrarseComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 12);
    core/* ɵɵtemplate */.DNE(1, RegistrarseComponent_ng_template_19_div_1_Template, 66, 30, "div", 14);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r2.YearlyPlan);
  }
}
class RegistrarseComponent {
  constructor(formBuilder, authenticationService, router, toastService) {
    this.formBuilder = formBuilder;
    this.authenticationService = authenticationService;
    this.router = router;
    this.toastService = toastService;
    this.submitted = false;
    this.successmsg = false;
    this.loaded = false;
    this.error = '';
    // set the current year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [{
      label: 'Pages'
    }, {
      label: 'Pricing',
      active: true
    }];
    this.signupForm = this.formBuilder.group({
      email: ['', [fesm2022_forms/* Validators */.k0.required, fesm2022_forms/* Validators */.k0.email]],
      name: ['', [fesm2022_forms/* Validators */.k0.required]],
      ruc: ['', fesm2022_forms/* Validators */.k0.required]
    });
    // Chat Data Get Function
    this._fetchData();
  }
  enviar(number) {
    registro;
    this.loaded = true;
    this.idplan = number;
    this.router.navigate(['/auth/signup/cover/' + number]);
  }
  onSubmit() {
    this.submitted = true;
  }
  get f() {
    return this.signupForm.controls;
  }
  // Chat Data Fetch
  _fetchData() {
    this.authenticationService.Planes().subscribe({
      next: data => {
        this.MonthlyPlan = data;
      },
      error: error => {
        this.toastService.show("Usuario o contraseña incorrectos", {
          classname: 'bg-danger text-white',
          delay: 15000
        });
      }
    });
    this.YearlyPlan = data/* YearlyPlan */.yw;
    this.pricingPlan = data/* pricingPlan */.Wv;
    this.SimplePlan = data/* SimplePlan */.cH;
  }
  static {
    this.ɵfac = function RegistrarseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegistrarseComponent)(core/* ɵɵdirectiveInject */.rXU(fesm2022_forms/* UntypedFormBuilder */.ze), core/* ɵɵdirectiveInject */.rXU(auth_service/* AuthenticationService */.k), core/* ɵɵdirectiveInject */.rXU(router/* Router */.Ix), core/* ɵɵdirectiveInject */.rXU(toast_service/* ToastService */.f));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: RegistrarseComponent,
      selectors: [["app-registrarse"]],
      decls: 22,
      vars: 4,
      consts: [["customNav", "ngbNav"], [1, "row", "justify-content-center", "mt-4"], [1, "col-lg-5"], [1, "text-center", "mb-4"], [1, "fw-semibold", "fs-22"], [1, "text-muted", "mb-4", "fs-15"], [1, "d-inline-flex"], ["ngbNav", "", "id", "pills-tab", "role", "tablist", "role", "tablist", 1, "nav", "nav-pills", "arrow-navtabs", "plan-nav", "rounded", "mb-3", "p-1", 3, "activeId"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", 1, "nav-link"], ["ngbNavContent", ""], [1, "badge", "bg-success"], [1, "row"], [3, "ngbNavOutlet"], ["class", "col-xxl-3 col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-3", "col-lg-6"], [1, "card", "pricing-box", 3, "ngClass"], [1, "card-body", "bg-light", "m-2", "p-4"], [1, "ribbon-two", "ribbon-two-danger", 3, "ngClass"], [1, "d-flex", "align-items-center", "mb-3"], [1, "flex-grow-1"], [1, "mb-0", "fw-semibold"], [1, "ms-auto"], [1, "month", "mb-0"], [1, "fs-13", "text-muted"], [1, "text-muted"], [1, "list-unstyled", "vstack", "gap-3"], [1, "d-flex"], [1, "flex-shrink-0", "text-success", "me-1"], [1, "ri-checkbox-circle-fill", "fs-15", "align-middle"], [1, "mt-3", "pt-2"], [3, "click", "ngClass"], [1, "annual", "mb-0"], [1, "fs-16"]],
      template: function RegistrarseComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
          core/* ɵɵtext */.EFF(4, "Planes & Precios");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(5, "p", 5);
          core/* ɵɵtext */.EFF(6, "Precios sencillos. Sin tarifas ocultas. Funciones avanzadas para tu negocio.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(7, "div", 6)(8, "ul", 7, 0)(10, "li", 8)(11, "a", 9);
          core/* ɵɵtext */.EFF(12, " Mensual ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(13, RegistrarseComponent_ng_template_13_Template, 2, 1, "ng-template", 10);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(14, "li", 8)(15, "a", 9);
          core/* ɵɵtext */.EFF(16, " Anual ");
          core/* ɵɵelementStart */.j41(17, "span", 11);
          core/* ɵɵtext */.EFF(18, "25% Descuento");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(19, RegistrarseComponent_ng_template_19_Template, 2, 1, "ng-template", 10);
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(20, "div", 12);
          core/* ɵɵelement */.nrm(21, "div", 13);
          core/* ɵɵelementEnd */.k0s();
        }
        if (rf & 2) {
          const customNav_r6 = core/* ɵɵreference */.sdS(9);
          core/* ɵɵadvance */.R7$(8);
          core/* ɵɵproperty */.Y8G("activeId", 1);
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 1);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 2);
          core/* ɵɵadvance */.R7$(7);
          core/* ɵɵproperty */.Y8G("ngbNavOutlet", customNav_r6);
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgForOf */.Sq, ng_bootstrap/* NgbNavContent */.Um, ng_bootstrap/* NgbNav */.X9, ng_bootstrap/* NgbNavItem */.sy, ng_bootstrap/* NgbNavItemRole */.Gx, ng_bootstrap/* NgbNavLink */.Ri, ng_bootstrap/* NgbNavLinkBase */.WA, ng_bootstrap/* NgbNavOutlet */.m_]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/extraspages/extraspages-routing.module.ts

// Component Pages





const routes = [{
  path: "maintenance",
  component: MaintenanceComponent
}, {
  path: "coming-soon",
  component: ComingSoonComponent
}, {
  path: "registrarse",
  component: RegistrarseComponent
}];
class ExtrapagesRoutingModule {
  static {
    this.ɵfac = function ExtrapagesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExtrapagesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: ExtrapagesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(ExtrapagesRoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
;// CONCATENATED MODULE: ./src/app/extraspages/extraspages.module.ts

// Component pages







class ExtraspagesModule {
  static {
    this.ɵfac = function ExtraspagesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExtraspagesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: ExtraspagesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbNavModule */.Pv, fesm2022_forms/* ReactiveFormsModule */.X1, ExtrapagesRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(ExtraspagesModule, {
    declarations: [MaintenanceComponent, ComingSoonComponent, RegistrarseComponent],
    imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbNavModule */.Pv, fesm2022_forms/* ReactiveFormsModule */.X1, ExtrapagesRoutingModule]
  });
})();

/***/ })

}]);