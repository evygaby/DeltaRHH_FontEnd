"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[309],{

/***/ 62309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AccountModule: () => (/* binding */ AccountModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/common.mjs
var common = __webpack_require__(60177);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2022/forms.mjs
var fesm2022_forms = __webpack_require__(89417);
// EXTERNAL MODULE: ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs + 60 modules
var ng_bootstrap = __webpack_require__(1109);
// EXTERNAL MODULE: ./node_modules/lord-icon-element/index.js + 12 modules
var lord_icon_element = __webpack_require__(88136);
// EXTERNAL MODULE: ./node_modules/lottie-web/build/player/lottie.js
var lottie = __webpack_require__(98982);
var lottie_default = /*#__PURE__*/__webpack_require__.n(lottie);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2022/core.mjs + 1 modules
var core = __webpack_require__(54438);
// EXTERNAL MODULE: ./src/app/account/login/toast-service.ts
var toast_service = __webpack_require__(79157);
;// CONCATENATED MODULE: ./src/app/account/login/toasts-container.component.ts





function ToastsContainer_ngb_toast_0_ng_template_1_ng_template_0_Template(rf, ctx) {}
function ToastsContainer_ngb_toast_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtemplate */.DNE(0, ToastsContainer_ngb_toast_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const toast_r2 = core/* ɵɵnextContext */.XpG().$implicit;
    core/* ɵɵproperty */.Y8G("ngTemplateOutlet", toast_r2.textOrTpl);
  }
}
function ToastsContainer_ngb_toast_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0);
  }
  if (rf & 2) {
    const toast_r2 = core/* ɵɵnextContext */.XpG().$implicit;
    core/* ɵɵtextInterpolate */.JRh(toast_r2.textOrTpl);
  }
}
function ToastsContainer_ngb_toast_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "ngb-toast", 2);
    core/* ɵɵlistener */.bIt("hidden", function ToastsContainer_ngb_toast_0_Template_ngb_toast_hidden_0_listener() {
      const toast_r2 = core/* ɵɵrestoreView */.eBV(_r1).$implicit;
      const ctx_r2 = core/* ɵɵnextContext */.XpG();
      return core/* ɵɵresetView */.Njj(ctx_r2.toastService.remove(toast_r2));
    });
    core/* ɵɵtemplate */.DNE(1, ToastsContainer_ngb_toast_0_ng_template_1_Template, 1, 1, "ng-template", 3)(2, ToastsContainer_ngb_toast_0_ng_template_2_Template, 1, 1, "ng-template", null, 0, core/* ɵɵtemplateRefExtractor */.C5r);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const text_r4 = core/* ɵɵreference */.sdS(3);
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵclassMap */.HbH(toast_r2.classname);
    core/* ɵɵproperty */.Y8G("autohide", true)("delay", toast_r2.delay || 5000);
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r2.isTemplate(toast_r2))("ngIfElse", text_r4);
  }
}
class ToastsContainer {
  constructor(toastService) {
    this.toastService = toastService;
  }
  isTemplate(toast) {
    return toast.textOrTpl instanceof core/* TemplateRef */.C4Q;
  }
  static {
    this.ɵfac = function ToastsContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToastsContainer)(core/* ɵɵdirectiveInject */.rXU(toast_service/* ToastService */.f));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: ToastsContainer,
      selectors: [["app-toasts"]],
      hostAttrs: [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1200"],
      decls: 1,
      vars: 1,
      consts: [["text", ""], [3, "class", "autohide", "delay", "hidden", 4, "ngFor", "ngForOf"], [3, "hidden", "autohide", "delay"], [3, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"]],
      template: function ToastsContainer_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵtemplate */.DNE(0, ToastsContainer_ngb_toast_0_Template, 4, 6, "ngb-toast", 1);
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("ngForOf", ctx.toastService.toasts);
        }
      },
      dependencies: [common/* NgForOf */.Sq, common/* NgIf */.bT, common/* NgTemplateOutlet */.T3, ng_bootstrap/* NgbToast */.Nb],
      encapsulation: 2
    });
  }
}
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2022/router.mjs + 4 modules
var router = __webpack_require__(74710);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/first.js
var first = __webpack_require__(61594);
// EXTERNAL MODULE: ./src/app/core/services/auth.service.ts
var auth_service = __webpack_require__(68010);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/http.mjs
var http = __webpack_require__(21626);
;// CONCATENATED MODULE: ./src/app/core/services/user.service.ts


class UserProfileService {
  constructor(http) {
    this.http = http;
  }
  /***
   * Get All User
   */
  getAll() {
    return this.http.get(`api/users`);
  }
  /***
   * Facked User Register
   */
  register(user) {
    return this.http.post(`/users/register`, user);
  }
  static {
    this.ɵfac = function UserProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserProfileService)(core/* ɵɵinject */.KVO(http/* HttpClient */.Qq));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/core/* ɵɵdefineInjectable */.jDH({
      token: UserProfileService,
      factory: UserProfileService.ɵfac,
      providedIn: 'root'
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/register/register.component.ts








const _c0 = a0 => ({
  "is-invalid": a0
});
/**
 * Register Component
 */
class RegisterComponent {
  constructor(formBuilder, router, authenticationService, userService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.authenticationService = authenticationService;
    this.userService = userService;
    this.submitted = false;
    this.successmsg = false;
    this.error = '';
    // set the current year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    /**
     * Form Validatyion
     */
    this.signupForm = this.formBuilder.group({
      email: ['', [fesm2022_forms/* Validators */.k0.required, fesm2022_forms/* Validators */.k0.email]],
      name: ['', [fesm2022_forms/* Validators */.k0.required]],
      password: ['', fesm2022_forms/* Validators */.k0.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }
  /**
   * Register submit form
   */
  onSubmit() {
    this.submitted = true;
    //Register Api
    this.authenticationService.register(this.f['email'].value, this.f['name'].value, this.f['password'].value).pipe((0,first/* first */.$)()).subscribe(data => {
      this.successmsg = true;
      if (this.successmsg) {
        this.router.navigate(['/auth/login']);
      }
    }, error => {
      this.error = error ? error : '';
    });
    // stop here if form is invalid
    // if (this.signupForm.invalid) {
    //   return;
    // } else {
    //   if (environment.defaultauth === 'firebase') {
    //     this.authenticationService.register(this.f['email'].value, this.f['password'].value).then((res: any) => {
    //       this.successmsg = true;
    //       if (this.successmsg) {
    //         this.router.navigate(['']);
    //       }
    //     })
    //       .catch((error: string) => {
    //         this.error = error ? error : '';
    //       });
    //   } else {
    //     this.userService.register(this.signupForm.value)
    //       .pipe(first())
    //       .subscribe(
    //         (data: any) => {
    //           this.successmsg = true;
    //           if (this.successmsg) {
    //             this.router.navigate(['/auth/login']);
    //           }
    //         },
    //         (error: any) => {
    //           this.error = error ? error : '';
    //         });
    //   }
    // }
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegisterComponent)(core/* ɵɵdirectiveInject */.rXU(fesm2022_forms/* UntypedFormBuilder */.ze), core/* ɵɵdirectiveInject */.rXU(router/* Router */.Ix), core/* ɵɵdirectiveInject */.rXU(auth_service/* AuthenticationService */.k), core/* ɵɵdirectiveInject */.rXU(UserProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 87,
      vars: 10,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "mb-4", "text-white-50"], ["href", "", 1, "d-inline-block", "auth-logo"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "mt-3", "fs-15", "fw-medium"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "mt-4"], [1, "card-body", "p-4"], [1, "text-center", "mt-2"], [1, "text-primary"], [1, "text-muted"], [1, "p-2", "mt-4"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "useremail", 1, "form-label"], [1, "text-danger"], ["type", "email", "id", "useremail", "placeholder", "Enter email address", "required", "", "formControlName", "email", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "placeholder", "Enter username", "required", "", "formControlName", "name", 1, "form-control", 3, "ngClass"], [1, "mb-2"], ["for", "userpassword", 1, "form-label"], ["type", "password", "id", "userpassword", "placeholder", "Enter password", "required", "", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "mb-4"], [1, "mb-0", "fs-12", "text-muted", "fst-italic"], ["href", "javascript:void(0);", 1, "text-primary", "text-decoration-underline", "fst-normal", "fw-medium"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-success", "w-100"], [1, "mt-4", "text-center"], [1, "signin-other-title"], [1, "fs-13", "mb-4", "title", "text-muted"], [1, "d-flex", "gap-2", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "btn-icon", "waves-effect", "waves-light"], [1, "ri-facebook-fill", "fs-16"], ["type", "button", 1, "btn", "btn-danger", "btn-icon", "waves-effect", "waves-light"], [1, "ri-google-fill", "fs-16"], ["type", "button", 1, "btn", "btn-dark", "btn-icon", "waves-effect", "waves-light"], [1, "ri-github-fill", "fs-16"], ["type", "button", 1, "btn", "btn-info", "btn-icon", "waves-effect", "waves-light"], [1, "ri-twitter-fill", "fs-16"], [1, "mb-0"], ["routerLink", "/auth/login", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"]],
      template: function RegisterComponent_Template(rf, ctx) {
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
          core/* ɵɵtext */.EFF(22, "Create New Account");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(23, "p", 20);
          core/* ɵɵtext */.EFF(24, "Get your free velzon account now");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(25, "div", 21)(26, "form", 22);
          core/* ɵɵlistener */.bIt("ngSubmit", function RegisterComponent_Template_form_ngSubmit_26_listener() {
            return ctx.onSubmit();
          });
          core/* ɵɵelementStart */.j41(27, "div", 23)(28, "label", 24);
          core/* ɵɵtext */.EFF(29, "Email ");
          core/* ɵɵelementStart */.j41(30, "span", 25);
          core/* ɵɵtext */.EFF(31, "*");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(32, "input", 26);
          core/* ɵɵelementStart */.j41(33, "div", 27);
          core/* ɵɵtext */.EFF(34, " Please enter email ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(35, "div", 23)(36, "label", 28);
          core/* ɵɵtext */.EFF(37, "Username ");
          core/* ɵɵelementStart */.j41(38, "span", 25);
          core/* ɵɵtext */.EFF(39, "*");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(40, "input", 29);
          core/* ɵɵelementStart */.j41(41, "div", 27);
          core/* ɵɵtext */.EFF(42, " Please enter username ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(43, "div", 30)(44, "label", 31);
          core/* ɵɵtext */.EFF(45, "Password ");
          core/* ɵɵelementStart */.j41(46, "span", 25);
          core/* ɵɵtext */.EFF(47, "*");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(48, "input", 32);
          core/* ɵɵelementStart */.j41(49, "div", 27);
          core/* ɵɵtext */.EFF(50, " Please enter password ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(51, "div", 33)(52, "p", 34);
          core/* ɵɵtext */.EFF(53, "By registering you agree to the Velzon ");
          core/* ɵɵelementStart */.j41(54, "a", 35);
          core/* ɵɵtext */.EFF(55, "Terms of Use");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(56, "div", 36)(57, "button", 37);
          core/* ɵɵtext */.EFF(58, "Sign Up");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(59, "div", 38)(60, "div", 39)(61, "h5", 40);
          core/* ɵɵtext */.EFF(62, "Create account with");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(63, "div", 41)(64, "button", 42);
          core/* ɵɵelement */.nrm(65, "i", 43);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(66, "button", 44);
          core/* ɵɵelement */.nrm(67, "i", 45);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(68, "button", 46);
          core/* ɵɵelement */.nrm(69, "i", 47);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(70, "button", 48);
          core/* ɵɵelement */.nrm(71, "i", 49);
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(72, "div", 38)(73, "p", 50);
          core/* ɵɵtext */.EFF(74, "Already have an account ? ");
          core/* ɵɵelementStart */.j41(75, "a", 51);
          core/* ɵɵtext */.EFF(76, " Signin ");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(77, "footer", 52)(78, "div", 7)(79, "div", 8)(80, "div", 9)(81, "div", 53)(82, "p", 54);
          core/* ɵɵtext */.EFF(83, "\u00A9 ");
          core/* ɵɵtext */.EFF(84, " Velzon. Crafted with ");
          core/* ɵɵelement */.nrm(85, "i", 55);
          core/* ɵɵtext */.EFF(86, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(26);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.signupForm);
          core/* ɵɵadvance */.R7$(6);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(4, _c0, ctx.submitted && ctx.f["email"].errors));
          core/* ɵɵadvance */.R7$(8);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(6, _c0, ctx.submitted && ctx.f["name"].errors));
          core/* ɵɵadvance */.R7$(8);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(8, _c0, ctx.submitted && ctx.f["password"].errors));
        }
      },
      dependencies: [common/* NgClass */.YU, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* RequiredValidator */.YS, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, router/* RouterLink */.Wk]
    });
  }
}
// EXTERNAL MODULE: ./src/app/global-component.ts
var global_component = __webpack_require__(35461);
;// CONCATENATED MODULE: ./src/app/core/models/auth.models.ts
class User {}
;// CONCATENATED MODULE: ./src/app/layouts/sidebar/menu.model.ts
class MenuItem {}
// EXTERNAL MODULE: ./src/app/core/services/loading.service.ts + 2 modules
var loading_service = __webpack_require__(85597);
// EXTERNAL MODULE: ./src/app/core/services/event.service.ts
var event_service = __webpack_require__(30944);
// EXTERNAL MODULE: ./src/app/core/services/authfake.service.ts
var authfake_service = __webpack_require__(26687);
;// CONCATENATED MODULE: ./src/app/account/login/login.component.ts














const login_component_c0 = a0 => ({
  "is-invalid": a0
});
const _c1 = (a0, a1) => ({
  "mdi-eye-off-outline": a0,
  "mdi-eye-outline": a1
});
function LoginComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div");
    core/* ɵɵtext */.EFF(1, "Usuario es requerido");
    core/* ɵɵelementEnd */.k0s();
  }
}
function LoginComponent_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div");
    core/* ɵɵtext */.EFF(1, "usuario no es v\u00E1lido ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 25);
    core/* ɵɵtemplate */.DNE(1, LoginComponent_div_18_div_1_Template, 2, 0, "div", 26)(2, LoginComponent_div_18_div_2_Template, 2, 0, "div", 26);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["usuario"].errors["required"]);
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["usuario"].errors["usuario"]);
  }
}
function LoginComponent_div_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "span");
    core/* ɵɵtext */.EFF(1, "Contrase\u00F1a es Requerida");
    core/* ɵɵelementEnd */.k0s();
  }
}
function LoginComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 25);
    core/* ɵɵtemplate */.DNE(1, LoginComponent_div_26_span_1_Template, 2, 0, "span", 26);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["password"].errors["required"]);
  }
}
/**
 * Login Component
 */
class LoginComponent {
  constructor(formBuilder, authenticationService, router, loading, eventService, authFackservice, route, toastService) {
    this.formBuilder = formBuilder;
    this.authenticationService = authenticationService;
    this.router = router;
    this.loading = loading;
    this.eventService = eventService;
    this.authFackservice = authFackservice;
    this.route = route;
    this.toastService = toastService;
    this.submitted = false;
    this.error = '';
    // set the current year
    this.year = new Date().getFullYear();
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      ruc: ['', [fesm2022_forms/* Validators */.k0.required]],
      password: ['', [fesm2022_forms/* Validators */.k0.required]],
      usuario: ['', [fesm2022_forms/* Validators */.k0.required]]
    });
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    this.loading.showSpinner2("Solicitando accesos");
    // Login Api
    this.authenticationService.login(this.f['usuario'].value.toUpperCase(), this.f['password'].value).subscribe({
      next: user2 => {
        if (user2.usuarioLogueado?.CODEMP > 0) {
          this.user = new User();
          this.user.Codigo = user2.usuarioLogueado.CODEMP;
          this.user.ID_EMPRESA = user2.usuarioLogueado.ID_EMPRESA;
          this.user.RAZONSOCIAL = user2.usuarioLogueado.RAZONSOCIAL;
          this.user.MAIL = user2.usuarioLogueado.MAIL;
          this.user.usu_adm = user2.usuarioLogueado.USU_RRHH;
          this.user.fecha_proceso = user2.usuarioLogueado.FECHA_PROCESO;
          this.loading.closeSpinner();
          this.user.password = this.f['password'].value;
          this.user.Nombre = this.f['usuario'].value;
          this.menu = new MenuItem();
          this.menu = user2.Menu;
          const sortRecursive = items => {
            items.sort((a, b) => {
              // prioridad para "MENUITEMS.MENU.TEXT"
              if (a.label === "MENUITEMS.MENU.TEXT") return -1;
              if (b.label === "MENUITEMS.MENU.TEXT") return 1;
              // orden normal alfabético
              return a.label.localeCompare(b.label, "es", {
                sensitivity: "base"
              });
            });
            items.forEach(item => {
              if (item.subItems && item.subItems.length > 0) {
                sortRecursive(item.subItems); // recursión para hijos
              }
            });
          };
          sortRecursive(this.menu);
          //this.menu.label=user2.Menu.name
          //this.menu.link=user2.Menu.url
          //this.menu.subItems=user2.Menu.children
          localStorage.setItem('toast', 'true');
          localStorage.setItem(global_component/* GlobalComponent */.z.CURRENT_USER, JSON.stringify(this.user));
          localStorage.setItem(global_component/* GlobalComponent */.z.Menu, JSON.stringify(this.menu));
          //  // localStorage.setItem('token', data.token);
          this.router.navigate(['/Home']);
        } else {
          this.loading.closeSpinner();
          this.toastService.show("Usuario o contraseña incorrectos", {
            classname: 'bg-danger text-white',
            delay: 15000
          });
        }
      },
      error: error => {
        this.loading.closeSpinner();
        this.toastService.show(error.toString(), {
          classname: 'bg-danger text-white',
          delay: 15000
        });
      }
    });
    // if(data != null){
    //   localStorage.setItem('toast', 'true');
    //   localStorage.setItem('currentUser', JSON.stringify(data));
    //  // localStorage.setItem('token', data.token);
    //   this.router.navigate(['/']);
    // } else {
    //   this.toastService.show("Usuario o contraseña incorrectos", { classname: 'bg-danger text-white', delay: 15000 });
    // }
    //  });
    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // } else {
    //   if (environment.defaultauth === 'firebase') {
    //     this.authenticationService.login(this.f['email'].value, this.f['password'].value).then((res: any) => {
    //       this.router.navigate(['/']);
    //     })
    //       .catch(error => {
    //         this.error = error ? error : '';
    //       });
    //   } else {
    //     this.authFackservice.login(this.f['email'].value, this.f['password'].value).pipe(first()).subscribe(data => {
    //           this.router.navigate(['/']);
    //         },
    //         error => {
    //           this.error = error ? error : '';
    //         });
    //   }
    // }
  }
  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(core/* ɵɵdirectiveInject */.rXU(fesm2022_forms/* UntypedFormBuilder */.ze), core/* ɵɵdirectiveInject */.rXU(auth_service/* AuthenticationService */.k), core/* ɵɵdirectiveInject */.rXU(router/* Router */.Ix), core/* ɵɵdirectiveInject */.rXU(loading_service/* LoadingService */.U), core/* ɵɵdirectiveInject */.rXU(event_service/* EventService */.U), core/* ɵɵdirectiveInject */.rXU(authfake_service/* AuthfakeauthenticationService */.N), core/* ɵɵdirectiveInject */.rXU(router/* ActivatedRoute */.nX), core/* ɵɵdirectiveInject */.rXU(toast_service/* ToastService */.f));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 31,
      vars: 14,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "auth-page-content"], [1, "container"], [1, "row", 2, "justify-content", "flex-end"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "mt-4"], [1, "card-body", "p-4"], ["src", "assets/images/logo-light.png", "alt", "", "width", "100%"], [1, "text-center", "mt-2"], [1, "text-primary"], [1, "p-2", "mt-4"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "usuario", 1, "form-label"], ["type", "text", "id", "usuario", "formControlName", "usuario", "placeholder", "Ingrese usuario", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password-input", 1, "form-label"], [1, "position-relative", "auth-pass-inputgroup", "mb-3"], ["placeholder", "Ingresar contrase\u00F1a", "id", "password-input", "formControlName", "password", 1, "form-control", "pe-5", 3, "type", "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted"], [1, "mdi", "align-middle", 3, "click", "ngClass"], [1, "mt-4"], ["type", "submit", 1, "btn", "w-100", 2, "background-color", "#001F33", "color", "#fff"], ["aria-live", "polite", "aria-atomic", "true"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 0);
          core/* ɵɵelement */.nrm(1, "div", 1);
          core/* ɵɵelementStart */.j41(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
          core/* ɵɵelement */.nrm(8, "img", 8);
          core/* ɵɵelementStart */.j41(9, "div", 9)(10, "h5", 10);
          core/* ɵɵtext */.EFF(11, "Sistema de Recursos Humanos");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(12, "div", 11)(13, "form", 12);
          core/* ɵɵlistener */.bIt("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() {
            return ctx.onSubmit();
          });
          core/* ɵɵelementStart */.j41(14, "div", 13)(15, "label", 14);
          core/* ɵɵtext */.EFF(16, "Usuario");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelement */.nrm(17, "input", 15);
          core/* ɵɵtemplate */.DNE(18, LoginComponent_div_18_Template, 3, 2, "div", 16);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(19, "div", 13)(20, "label", 17);
          core/* ɵɵtext */.EFF(21, "Contrase\u00F1a");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(22, "div", 18);
          core/* ɵɵelement */.nrm(23, "input", 19);
          core/* ɵɵelementStart */.j41(24, "button", 20)(25, "i", 21);
          core/* ɵɵlistener */.bIt("click", function LoginComponent_Template_i_click_25_listener() {
            return ctx.toggleFieldTextType();
          });
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(26, LoginComponent_div_26_Template, 2, 1, "div", 16);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(27, "div", 22)(28, "button", 23);
          core/* ɵɵtext */.EFF(29, "Ingresar");
          core/* ɵɵelementEnd */.k0s()()()()()()()()()()();
          core/* ɵɵelement */.nrm(30, "app-toasts", 24);
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(13);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.loginForm);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(7, login_component_c0, ctx.submitted && ctx.f["usuario"].errors));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["usuario"].errors);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵproperty */.Y8G("type", ctx.fieldTextType ? "text" : "password")("ngClass", core/* ɵɵpureFunction1 */.eq3(9, login_component_c0, ctx.submitted && ctx.f["password"].errors));
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction2 */.l_i(11, _c1, !ctx.fieldTextType, ctx.fieldTextType));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["password"].errors);
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgIf */.bT, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, ToastsContainer]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/account-routing.module.ts

// Component Pages




const routes = [{
  path: 'signin',
  loadChildren: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 65521)).then(m => m.SigninModule)
}, {
  path: 'signup',
  loadChildren: () => __webpack_require__.e(/* import() */ 401).then(__webpack_require__.bind(__webpack_require__, 69401)).then(m => m.SignupModule)
}, {
  path: 'pass-reset',
  loadChildren: () => __webpack_require__.e(/* import() */ 666).then(__webpack_require__.bind(__webpack_require__, 14666)).then(m => m.PassResetModule)
}, {
  path: 'pass-create',
  loadChildren: () => __webpack_require__.e(/* import() */ 579).then(__webpack_require__.bind(__webpack_require__, 94579)).then(m => m.PassCreateModule)
}, {
  path: 'lockscreen',
  loadChildren: () => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(__webpack_require__, 14024)).then(m => m.LockscreenModule)
}, {
  path: 'logout',
  loadChildren: () => __webpack_require__.e(/* import() */ 560).then(__webpack_require__.bind(__webpack_require__, 36560)).then(m => m.LogoutModule)
}, {
  path: 'success-msg',
  loadChildren: () => __webpack_require__.e(/* import() */ 974).then(__webpack_require__.bind(__webpack_require__, 48974)).then(m => m.SuccessMsgModule)
}, {
  path: 'twostep',
  loadChildren: () => __webpack_require__.e(/* import() */ 566).then(__webpack_require__.bind(__webpack_require__, 2566)).then(m => m.TwostepModule)
}, {
  path: 'errors',
  loadChildren: () => __webpack_require__.e(/* import() */ 58).then(__webpack_require__.bind(__webpack_require__, 61058)).then(m => m.ErrorsModule)
}, {
  path: "register",
  component: RegisterComponent
}, {
  path: "login",
  component: LoginComponent
}];
class AccountRoutingModule {
  static {
    this.ɵfac = function AccountRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: AccountRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(AccountRoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
// EXTERNAL MODULE: ./src/app/account/auth/signin/signin.module.ts + 3 modules
var signin_module = __webpack_require__(65521);
;// CONCATENATED MODULE: ./src/app/account/account.module.ts



// Load Icons








class AccountModule {
  constructor() {
    (0,lord_icon_element/* defineElement */.e)((lottie_default()).loadAnimation);
  }
  static {
    this.ɵfac = function AccountModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: AccountModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, ng_bootstrap/* NgbToastModule */.VR, AccountRoutingModule, signin_module.SigninModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(AccountModule, {
    declarations: [RegisterComponent, LoginComponent, ToastsContainer],
    imports: [common/* CommonModule */.MD, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, ng_bootstrap/* NgbToastModule */.VR, AccountRoutingModule, signin_module.SigninModule]
  });
})();

/***/ }),

/***/ 65521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SigninModule: () => (/* binding */ SigninModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/common.mjs
var common = __webpack_require__(60177);
// EXTERNAL MODULE: ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs + 60 modules
var ng_bootstrap = __webpack_require__(1109);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2022/forms.mjs
var fesm2022_forms = __webpack_require__(89417);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2022/router.mjs + 4 modules
var router = __webpack_require__(74710);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2022/core.mjs + 1 modules
var core = __webpack_require__(54438);
;// CONCATENATED MODULE: ./src/app/account/auth/signin/basic/basic.component.ts





const _c0 = a0 => ({
  "is-invalid": a0
});
const _c1 = (a0, a1) => ({
  "mdi-eye-off-outline": a0,
  "mdi-eye-outline": a1
});
function BasicComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div");
    core/* ɵɵtext */.EFF(1, "Username is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function BasicComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 58);
    core/* ɵɵtemplate */.DNE(1, BasicComponent_div_31_div_1_Template, 2, 0, "div", 59);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["name"].errors["required"]);
  }
}
function BasicComponent_div_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "span");
    core/* ɵɵtext */.EFF(1, "Password is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function BasicComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 60);
    core/* ɵɵtemplate */.DNE(1, BasicComponent_div_42_span_1_Template, 2, 0, "span", 59);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["password"].errors["required"]);
  }
}
/**
 * Basic Component
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
    this.loginForm = this.formBuilder.group({
      name: ['', [fesm2022_forms/* Validators */.k0.required]],
      password: ['', fesm2022_forms/* Validators */.k0.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }
  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
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
      decls: 77,
      vars: 15,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "mb-4", "text-white-50"], ["routerLink", "", 1, "d-inline-block", "auth-logo"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "mt-3", "fs-15", "fw-medium"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "mt-4"], [1, "card-body", "p-4"], [1, "text-center", "mt-2"], [1, "text-primary"], [1, "text-muted"], [1, "p-2", "mt-4"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "placeholder", "Enter username", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", "align", "left", 4, "ngIf"], [1, "float-end"], ["routerLink", "/auth/pass-reset/basic", 1, "text-muted"], ["for", "password-input", 1, "form-label"], [1, "position-relative", "auth-pass-inputgroup", "mb-3"], ["placeholder", "Enter password", "id", "password-input", "formControlName", "password", 1, "form-control", "pe-5", "password-input", 3, "type", "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted", "password-addon"], [1, "mdi", "align-middle", 3, "click", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "auth-remember-check", 1, "form-check-input"], ["for", "auth-remember-check", 1, "form-check-label"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-success", "w-100"], [1, "mt-4", "text-center"], [1, "signin-other-title"], [1, "fs-13", "mb-4", "title"], [1, "d-flex", "gap-2", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "btn-icon", "waves-effect", "waves-light"], [1, "ri-facebook-fill", "fs-16"], ["type", "button", 1, "btn", "btn-danger", "btn-icon", "waves-effect", "waves-light"], [1, "ri-google-fill", "fs-16"], ["type", "button", 1, "btn", "btn-dark", "btn-icon", "waves-effect", "waves-light"], [1, "ri-github-fill", "fs-16"], ["type", "button", 1, "btn", "btn-info", "btn-icon", "waves-effect", "waves-light"], [1, "ri-twitter-fill", "fs-16"], [1, "mb-0"], ["routerLink", "/auth/signup/basic", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"], ["align", "left", 1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback"]],
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
          core/* ɵɵtext */.EFF(22, "Welcome Back !");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(23, "p", 20);
          core/* ɵɵtext */.EFF(24, "Sign in to continue to Velzon.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(25, "div", 21)(26, "form", 22);
          core/* ɵɵlistener */.bIt("ngSubmit", function BasicComponent_Template_form_ngSubmit_26_listener() {
            return ctx.onSubmit();
          });
          core/* ɵɵelementStart */.j41(27, "div", 23)(28, "label", 24);
          core/* ɵɵtext */.EFF(29, "Username");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelement */.nrm(30, "input", 25);
          core/* ɵɵtemplate */.DNE(31, BasicComponent_div_31_Template, 2, 1, "div", 26);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(32, "div", 23)(33, "div", 27)(34, "a", 28);
          core/* ɵɵtext */.EFF(35, "Forgot password?");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(36, "label", 29);
          core/* ɵɵtext */.EFF(37, "Password");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(38, "div", 30);
          core/* ɵɵelement */.nrm(39, "input", 31);
          core/* ɵɵelementStart */.j41(40, "button", 32)(41, "i", 33);
          core/* ɵɵlistener */.bIt("click", function BasicComponent_Template_i_click_41_listener() {
            return ctx.toggleFieldTextType();
          });
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(42, BasicComponent_div_42_Template, 2, 1, "div", 34);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(43, "div", 35);
          core/* ɵɵelement */.nrm(44, "input", 36);
          core/* ɵɵelementStart */.j41(45, "label", 37);
          core/* ɵɵtext */.EFF(46, "Remember me");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(47, "div", 38)(48, "button", 39);
          core/* ɵɵtext */.EFF(49, "Sign In");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(50, "div", 40)(51, "div", 41)(52, "h5", 42);
          core/* ɵɵtext */.EFF(53, "Sign In with");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(54, "div", 43)(55, "button", 44);
          core/* ɵɵelement */.nrm(56, "i", 45);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(57, "button", 46);
          core/* ɵɵelement */.nrm(58, "i", 47);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(59, "button", 48);
          core/* ɵɵelement */.nrm(60, "i", 49);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(61, "button", 50);
          core/* ɵɵelement */.nrm(62, "i", 51);
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(63, "div", 40)(64, "p", 52);
          core/* ɵɵtext */.EFF(65, "Don't have an account ? ");
          core/* ɵɵelementStart */.j41(66, "a", 53);
          core/* ɵɵtext */.EFF(67, " Signup ");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(68, "footer", 54)(69, "div", 7)(70, "div", 8)(71, "div", 9)(72, "div", 55)(73, "p", 56);
          core/* ɵɵtext */.EFF(74);
          core/* ɵɵelement */.nrm(75, "i", 57);
          core/* ɵɵtext */.EFF(76, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(26);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.loginForm);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(8, _c0, ctx.submitted && ctx.f["name"].errors));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["name"].errors);
          core/* ɵɵadvance */.R7$(8);
          core/* ɵɵproperty */.Y8G("type", ctx.fieldTextType ? "text" : "password")("ngClass", core/* ɵɵpureFunction1 */.eq3(10, _c0, ctx.submitted && ctx.f["password"].errors));
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction2 */.l_i(12, _c1, !ctx.fieldTextType, ctx.fieldTextType));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["password"].errors);
          core/* ɵɵadvance */.R7$(32);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgIf */.bT, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/signin/cover/cover.component.ts






const cover_component_c0 = a0 => ({
  "is-invalid": a0
});
const cover_component_c1 = (a0, a1) => ({
  "mdi-eye-off-outline": a0,
  "mdi-eye-outline": a1
});
function CoverComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 57)(1, "div", 58)(2, "p", 59);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 57)(1, "div", 58)(2, "p", 59);
    core/* ɵɵtext */.EFF(3, "\" The theme is really great with an amazing customer support.\"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 57)(1, "div", 58)(2, "p", 59);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div");
    core/* ɵɵtext */.EFF(1, "Username is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function CoverComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 60);
    core/* ɵɵtemplate */.DNE(1, CoverComponent_div_35_div_1_Template, 2, 0, "div", 61);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["name"].errors["required"]);
  }
}
function CoverComponent_div_46_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "span");
    core/* ɵɵtext */.EFF(1, "Password is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function CoverComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 62);
    core/* ɵɵtemplate */.DNE(1, CoverComponent_div_46_span_1_Template, 2, 0, "span", 61);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["password"].errors["required"]);
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
    this.loginForm = this.formBuilder.group({
      name: ['', [fesm2022_forms/* Validators */.k0.required]],
      password: ['', fesm2022_forms/* Validators */.k0.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }
  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
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
      decls: 81,
      vars: 16,
      consts: [[1, "auth-page-wrapper", "auth-bg-cover", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "bg-overlay"], [1, "auth-page-content", "overflow-hidden", "pt-lg-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "overflow-hidden"], [1, "row", "g-0"], [1, "col-lg-6"], [1, "p-lg-5", "p-4", "auth-one-bg", "h-100"], [1, "position-relative", "h-100", "d-flex", "flex-column"], [1, "mb-4"], ["routerLink", "", 1, "d-block"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18"], [1, "mt-auto"], [1, "mb-3"], [1, "ri-double-quotes-l", "display-4", "text-success"], [3, "showNavigationArrows"], ["ngbSlide", ""], [1, "p-lg-5", "p-4"], [1, "text-primary"], [1, "text-muted"], [1, "mt-4"], [3, "ngSubmit", "formGroup"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "placeholder", "Enter username", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", "align", "left", 4, "ngIf"], [1, "float-end"], ["routerLink", "/auth/pass-reset/cover", 1, "text-muted"], ["for", "password-input", 1, "form-label"], [1, "position-relative", "auth-pass-inputgroup", "mb-3"], ["placeholder", "Enter password", "id", "password-input", "formControlName", "password", 1, "form-control", "pe-5", "password-input", 3, "type", "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted", "password-addon"], [1, "mdi", "align-middle", 3, "click", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "auth-remember-check", 1, "form-check-input"], ["for", "auth-remember-check", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-success", "w-100"], [1, "mt-4", "text-center"], [1, "signin-other-title"], [1, "fs-13", "mb-4", "title"], [1, "d-flex", "gap-2", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "btn-icon", "waves-effect", "waves-light"], [1, "ri-facebook-fill", "fs-16"], ["type", "button", 1, "btn", "btn-danger", "btn-icon", "waves-effect", "waves-light"], [1, "ri-google-fill", "fs-16"], ["type", "button", 1, "btn", "btn-dark", "btn-icon", "waves-effect", "waves-light"], [1, "ri-github-fill", "fs-16"], ["type", "button", 1, "btn", "btn-info", "btn-icon", "waves-effect", "waves-light"], [1, "ri-twitter-fill", "fs-16"], [1, "mt-5", "text-center"], [1, "mb-0"], ["routerLink", "/auth/signup/cover", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mdi", "mdi-heart", "text-danger"], [1, "carousel-inner", "text-center", "text-white-50", "pb-5"], [1, "carousel-item", "active"], [1, "fs-15", "fst-italic"], ["align", "left", 1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback"]],
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
          core/* ɵɵelementStart */.j41(22, "div", 8)(23, "div", 19)(24, "div")(25, "h5", 20);
          core/* ɵɵtext */.EFF(26, "Welcome Back !");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(27, "p", 21);
          core/* ɵɵtext */.EFF(28, "Sign in to continue to Velzon.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(29, "div", 22)(30, "form", 23);
          core/* ɵɵlistener */.bIt("ngSubmit", function CoverComponent_Template_form_ngSubmit_30_listener() {
            return ctx.onSubmit();
          });
          core/* ɵɵelementStart */.j41(31, "div", 15)(32, "label", 24);
          core/* ɵɵtext */.EFF(33, "Username");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelement */.nrm(34, "input", 25);
          core/* ɵɵtemplate */.DNE(35, CoverComponent_div_35_Template, 2, 1, "div", 26);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(36, "div", 15)(37, "div", 27)(38, "a", 28);
          core/* ɵɵtext */.EFF(39, "Forgot password?");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(40, "label", 29);
          core/* ɵɵtext */.EFF(41, "Password");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(42, "div", 30);
          core/* ɵɵelement */.nrm(43, "input", 31);
          core/* ɵɵelementStart */.j41(44, "button", 32)(45, "i", 33);
          core/* ɵɵlistener */.bIt("click", function CoverComponent_Template_i_click_45_listener() {
            return ctx.toggleFieldTextType();
          });
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(46, CoverComponent_div_46_Template, 2, 1, "div", 34);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(47, "div", 35);
          core/* ɵɵelement */.nrm(48, "input", 36);
          core/* ɵɵelementStart */.j41(49, "label", 37);
          core/* ɵɵtext */.EFF(50, "Remember me");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(51, "div", 22)(52, "button", 38);
          core/* ɵɵtext */.EFF(53, "Sign In");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(54, "div", 39)(55, "div", 40)(56, "h5", 41);
          core/* ɵɵtext */.EFF(57, "Sign In with");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(58, "div", 42)(59, "button", 43);
          core/* ɵɵelement */.nrm(60, "i", 44);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(61, "button", 45);
          core/* ɵɵelement */.nrm(62, "i", 46);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(63, "button", 47);
          core/* ɵɵelement */.nrm(64, "i", 48);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(65, "button", 49);
          core/* ɵɵelement */.nrm(66, "i", 50);
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(67, "div", 51)(68, "p", 52);
          core/* ɵɵtext */.EFF(69, "Don't have an account ? ");
          core/* ɵɵelementStart */.j41(70, "a", 53);
          core/* ɵɵtext */.EFF(71, " Signup");
          core/* ɵɵelementEnd */.k0s()()()()()()()()()()();
          core/* ɵɵelementStart */.j41(72, "footer", 54)(73, "div", 3)(74, "div", 4)(75, "div", 5)(76, "div", 55)(77, "p", 52);
          core/* ɵɵtext */.EFF(78);
          core/* ɵɵelement */.nrm(79, "i", 56);
          core/* ɵɵtext */.EFF(80, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(18);
          core/* ɵɵproperty */.Y8G("showNavigationArrows", ctx.showNavigationArrows);
          core/* ɵɵadvance */.R7$(12);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.loginForm);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(9, cover_component_c0, ctx.submitted && ctx.f["name"].errors));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["name"].errors);
          core/* ɵɵadvance */.R7$(8);
          core/* ɵɵproperty */.Y8G("type", ctx.fieldTextType ? "text" : "password")("ngClass", core/* ɵɵpureFunction1 */.eq3(11, cover_component_c0, ctx.submitted && ctx.f["password"].errors));
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction2 */.l_i(13, cover_component_c1, !ctx.fieldTextType, ctx.fieldTextType));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["password"].errors);
          core/* ɵɵadvance */.R7$(32);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgIf */.bT, ng_bootstrap/* NgbCarousel */.Oj, ng_bootstrap/* NgbSlide */.bD, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/signin/signin-routing.module.ts

// Components




const routes = [{
  path: 'basic',
  component: BasicComponent
}, {
  path: 'cover',
  component: CoverComponent
}];
class SigninRoutingModule {
  static {
    this.ɵfac = function SigninRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SigninRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: SigninRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(SigninRoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
;// CONCATENATED MODULE: ./src/app/account/auth/signin/signin.module.ts



// Component




class SigninModule {
  static {
    this.ɵfac = function SigninModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SigninModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: SigninModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, SigninRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(SigninModule, {
    declarations: [BasicComponent, CoverComponent],
    imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, SigninRoutingModule]
  });
})();

/***/ })

}]);