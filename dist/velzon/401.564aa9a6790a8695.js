"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[401],{

/***/ 69401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SignupModule: () => (/* binding */ SignupModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/common.mjs
var common = __webpack_require__(60177);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2022/forms.mjs
var fesm2022_forms = __webpack_require__(89417);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2022/core.mjs + 1 modules
var core = __webpack_require__(54438);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2022/router.mjs + 4 modules
var router = __webpack_require__(74710);
;// CONCATENATED MODULE: ./src/app/account/auth/signup/basic/basic.component.ts





const _c0 = a0 => ({
  "is-invalid": a0
});
const _c1 = (a0, a1) => ({
  "mdi-eye-off-outline": a0,
  "mdi-eye-outline": a1
});
/**
 * Signup Basic Component
 */
class BasicComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.submitted = false;
    // set the current year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    /**
     * Form Validatyion
     */
    this.SignupForm = this.formBuilder.group({
      email: ['', [fesm2022_forms/* Validators */.k0.required]],
      name: ['', [fesm2022_forms/* Validators */.k0.required]],
      password: ['', fesm2022_forms/* Validators */.k0.required]
    });
    // Password Validation set
    var myInput = document.getElementById("password-input");
    var letter = document.getElementById("pass-lower");
    var capital = document.getElementById("pass-upper");
    var number = document.getElementById("pass-number");
    var length = document.getElementById("pass-length");
    // When the user clicks on the password field, show the message box
    myInput.onfocus = function () {
      let input = document.getElementById("password-contain");
      input.style.display = "block";
    };
    // When the user clicks outside of the password field, hide the password-contain box
    myInput.onblur = function () {
      let input = document.getElementById("password-contain");
      input.style.display = "none";
    };
    // When the user starts to type something inside the password field
    myInput.onkeyup = function () {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
        letter?.classList.remove("invalid");
        letter?.classList.add("valid");
      } else {
        letter?.classList.remove("valid");
        letter?.classList.add("invalid");
      }
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
        capital?.classList.remove("invalid");
        capital?.classList.add("valid");
      } else {
        capital?.classList.remove("valid");
        capital?.classList.add("invalid");
      }
      // Validate numbers
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
        number?.classList.remove("invalid");
        number?.classList.add("valid");
      } else {
        number?.classList.remove("valid");
        number?.classList.add("invalid");
      }
      // Validate length
      if (myInput.value.length >= 8) {
        length?.classList.remove("invalid");
        length?.classList.add("valid");
      } else {
        length?.classList.remove("valid");
        length?.classList.add("invalid");
      }
    };
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.SignupForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.SignupForm.invalid) {
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
      decls: 112,
      vars: 15,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "mb-4", "text-white-50"], ["routerLink", "", 1, "d-inline-block", "auth-logo"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "mt-3", "fs-15", "fw-medium"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "mt-4"], [1, "card-body", "p-4"], [1, "text-center", "mt-2"], [1, "text-primary"], [1, "text-muted"], [1, "p-2", "mt-4"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "useremail", 1, "form-label"], [1, "text-danger"], ["type", "email", "id", "useremail", "placeholder", "Enter email address", "required", "", "formControlName", "email", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "placeholder", "Enter username", "required", "", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["for", "userpassword", 1, "form-label"], [1, "position-relative", "auth-pass-inputgroup"], ["placeholder", "Enter password", "id", "password-input", "aria-describedby", "passwordInput", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", "", "formControlName", "password", 1, "form-control", "pe-5", "password-input", 3, "type", "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted", "password-addon"], [1, "ri-eye-fill", "align-middle", 3, "click", "ngClass"], [1, "mb-4"], [1, "mb-0", "fs-12", "text-muted", "fst-italic"], ["href", "javascript:void(0);", 1, "text-primary", "text-decoration-underline", "fst-normal", "fw-medium"], ["id", "password-contain", 1, "p-3", "bg-light", "mb-2", "rounded"], [1, "fs-13"], ["id", "pass-length", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-lower", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-upper", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-number", 1, "invalid", "fs-12", "mb-0"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-success", "w-100"], [1, "mt-4", "text-center"], [1, "signin-other-title"], [1, "fs-13", "mb-4", "title", "text-muted"], [1, "d-flex", "gap-2", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "btn-icon", "waves-effect", "waves-light"], [1, "ri-facebook-fill", "fs-16"], ["type", "button", 1, "btn", "btn-danger", "btn-icon", "waves-effect", "waves-light"], [1, "ri-google-fill", "fs-16"], ["type", "button", 1, "btn", "btn-dark", "btn-icon", "waves-effect", "waves-light"], [1, "ri-github-fill", "fs-16"], ["type", "button", 1, "btn", "btn-info", "btn-icon", "waves-effect", "waves-light"], [1, "ri-twitter-fill", "fs-16"], [1, "mb-0"], ["routerLink", "/auth/signin/basic", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"]],
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
          core/* ɵɵtext */.EFF(22, "Create New Account");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(23, "p", 20);
          core/* ɵɵtext */.EFF(24, "Get your free velzon account now");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(25, "div", 21)(26, "form", 22);
          core/* ɵɵlistener */.bIt("ngSubmit", function BasicComponent_Template_form_ngSubmit_26_listener() {
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
          core/* ɵɵelementStart */.j41(43, "div", 23)(44, "label", 30);
          core/* ɵɵtext */.EFF(45, "Password ");
          core/* ɵɵelementStart */.j41(46, "span", 25);
          core/* ɵɵtext */.EFF(47, "*");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(48, "div", 31);
          core/* ɵɵelement */.nrm(49, "input", 32);
          core/* ɵɵelementStart */.j41(50, "button", 33)(51, "i", 34);
          core/* ɵɵlistener */.bIt("click", function BasicComponent_Template_i_click_51_listener() {
            return ctx.toggleFieldTextType();
          });
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(52, "div", 27);
          core/* ɵɵtext */.EFF(53, " Please enter password ");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(54, "div", 35)(55, "p", 36);
          core/* ɵɵtext */.EFF(56, "By registering you agree to the Velzon ");
          core/* ɵɵelementStart */.j41(57, "a", 37);
          core/* ɵɵtext */.EFF(58, "Terms of Use");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(59, "div", 38)(60, "h5", 39);
          core/* ɵɵtext */.EFF(61, "Password must contain:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(62, "p", 40);
          core/* ɵɵtext */.EFF(63, "Minimum ");
          core/* ɵɵelementStart */.j41(64, "b");
          core/* ɵɵtext */.EFF(65, "8 characters");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(66, "p", 41);
          core/* ɵɵtext */.EFF(67, "At ");
          core/* ɵɵelementStart */.j41(68, "b");
          core/* ɵɵtext */.EFF(69, "lowercase");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(70, " letter (a-z)");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(71, "p", 42);
          core/* ɵɵtext */.EFF(72, "At least ");
          core/* ɵɵelementStart */.j41(73, "b");
          core/* ɵɵtext */.EFF(74, "uppercase");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(75, " letter (A-Z)");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(76, "p", 43);
          core/* ɵɵtext */.EFF(77, "A least ");
          core/* ɵɵelementStart */.j41(78, "b");
          core/* ɵɵtext */.EFF(79, "number");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(80, " (0-9)");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(81, "div", 44)(82, "button", 45);
          core/* ɵɵtext */.EFF(83, "Sign Up");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(84, "div", 46)(85, "div", 47)(86, "h5", 48);
          core/* ɵɵtext */.EFF(87, "Create account with");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(88, "div", 49)(89, "button", 50);
          core/* ɵɵelement */.nrm(90, "i", 51);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(91, "button", 52);
          core/* ɵɵelement */.nrm(92, "i", 53);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(93, "button", 54);
          core/* ɵɵelement */.nrm(94, "i", 55);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(95, "button", 56);
          core/* ɵɵelement */.nrm(96, "i", 57);
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(97, "div", 46)(98, "p", 58);
          core/* ɵɵtext */.EFF(99, "Already have an account ? ");
          core/* ɵɵelementStart */.j41(100, "a", 59);
          core/* ɵɵtext */.EFF(101, " Signin ");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(102, "footer", 60)(103, "div", 7)(104, "div", 8)(105, "div", 9)(106, "div", 61)(107, "p", 62);
          core/* ɵɵtext */.EFF(108, "\u00A9 ");
          core/* ɵɵtext */.EFF(109, " Velzon. Crafted with ");
          core/* ɵɵelement */.nrm(110, "i", 63);
          core/* ɵɵtext */.EFF(111, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(26);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.SignupForm);
          core/* ɵɵadvance */.R7$(6);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(6, _c0, ctx.submitted && ctx.f["email"].errors));
          core/* ɵɵadvance */.R7$(8);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(8, _c0, ctx.submitted && ctx.f["name"].errors));
          core/* ɵɵadvance */.R7$(9);
          core/* ɵɵproperty */.Y8G("type", ctx.fieldTextType ? "text" : "password")("ngClass", core/* ɵɵpureFunction1 */.eq3(10, _c0, ctx.submitted && ctx.f["password"].errors));
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction2 */.l_i(12, _c1, !ctx.fieldTextType, ctx.fieldTextType));
        }
      },
      dependencies: [common/* NgClass */.YU, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* RequiredValidator */.YS, fesm2022_forms/* PatternValidator */.R_, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, router/* RouterLink */.Wk]
    });
  }
}
// EXTERNAL MODULE: ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs + 60 modules
var ng_bootstrap = __webpack_require__(1109);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(84412);
// EXTERNAL MODULE: ./src/app/core/services/auth.service.ts
var auth_service = __webpack_require__(68010);
// EXTERNAL MODULE: ./src/app/account/login/toast-service.ts
var toast_service = __webpack_require__(79157);
;// CONCATENATED MODULE: ./src/app/account/auth/signup/cover/cover.component.ts









const cover_component_c0 = a0 => ({
  "is-invalid": a0
});
function CoverComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 45)(1, "div", 46)(2, "p", 47);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 45)(1, "div", 46)(2, "p", 47);
    core/* ɵɵtext */.EFF(3, "\" The theme is really great with an amazing customer support.\"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 45)(1, "div", 46)(2, "p", 47);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
/**
 * Signup Cover Component
 */
class CoverComponent {
  constructor(formBuilder, route, router, authenticationService, toastService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.toastService = toastService;
    this.submitted = false;
    // set the current year
    this.year = new Date().getFullYear();
    this.id = this.route.snapshot.queryParams['id'];
    if (this.id == undefined) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
  }
  ngOnInit() {
    /**
     * Form Validatyion
     */
    this.SignupForm = this.formBuilder.group({
      email: ['', [fesm2022_forms/* Validators */.k0.required]],
      name: ['', [fesm2022_forms/* Validators */.k0.required]],
      ruc: ['', fesm2022_forms/* Validators */.k0.required]
    });
    // Password Validation set
    var myInput = document.getElementById("password-input");
    var letter = document.getElementById("pass-lower");
    var capital = document.getElementById("pass-upper");
    var number = document.getElementById("pass-number");
    var length = document.getElementById("pass-length");
    // When the user clicks on the password field, show the message box
    myInput.onfocus = function () {
      let input = document.getElementById("password-contain");
      input.style.display = "block";
    };
    // When the user clicks outside of the password field, hide the password-contain box
    myInput.onblur = function () {
      let input = document.getElementById("password-contain");
      input.style.display = "none";
    };
    // When the user starts to type something inside the password field
    myInput.onkeyup = function () {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
        letter?.classList.remove("invalid");
        letter?.classList.add("valid");
      } else {
        letter?.classList.remove("valid");
        letter?.classList.add("invalid");
      }
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
        capital?.classList.remove("invalid");
        capital?.classList.add("valid");
      } else {
        capital?.classList.remove("valid");
        capital?.classList.add("invalid");
      }
      // Validate numbers
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
        number?.classList.remove("invalid");
        number?.classList.add("valid");
      } else {
        number?.classList.remove("valid");
        number?.classList.add("invalid");
      }
      // Validate length
      if (myInput.value.length >= 8) {
        length?.classList.remove("invalid");
        length?.classList.add("valid");
      } else {
        length?.classList.remove("valid");
        length?.classList.add("invalid");
      }
    };
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.SignupForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.SignupForm.invalid) {
      return;
    }
    this.authenticationService.suscribirse(this.f['name'].value, this.f['email'].value, this.f['ruc'].value, this.id).subscribe({
      next: user => {
        if (user == "1") {
          this.toastService.show("Usted tiene cuenta con FenixCode", {
            classname: 'bg-danger text-white',
            delay: 15000
          });
        }
        this.currentUserSubject = new BehaviorSubject/* BehaviorSubject */.t(JSON.parse(localStorage.getItem('currentUser')));
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        // this.currentUserSubject.next(null!);
        this.router.navigate(['/auth/login']);
      },
      error: error => {
        this.toastService.show("Usuario o contraseña incorrectos", {
          classname: 'bg-danger text-white',
          delay: 15000
        });
      }
    });
  }
  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  static {
    this.ɵfac = function CoverComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CoverComponent)(core/* ɵɵdirectiveInject */.rXU(fesm2022_forms/* UntypedFormBuilder */.ze), core/* ɵɵdirectiveInject */.rXU(router/* ActivatedRoute */.nX), core/* ɵɵdirectiveInject */.rXU(router/* Router */.Ix), core/* ɵɵdirectiveInject */.rXU(auth_service/* AuthenticationService */.k), core/* ɵɵdirectiveInject */.rXU(toast_service/* ToastService */.f));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: CoverComponent,
      selectors: [["app-cover"]],
      decls: 94,
      vars: 12,
      consts: [[1, "auth-page-wrapper", "auth-bg-cover", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "bg-overlay"], [1, "auth-page-content", "overflow-hidden", "pt-lg-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "overflow-hidden", "m-0"], [1, "row", "justify-content-center", "g-0"], [1, "col-lg-6"], [1, "p-lg-5", "p-4", "auth-one-bg", "h-100"], [1, "position-relative", "h-100", "d-flex", "flex-column"], [1, "mb-4"], ["routerLink", "", 1, "d-block"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18"], [1, "mt-auto"], [1, "mb-3"], [1, "ri-double-quotes-l", "display-4", "text-success"], [3, "showNavigationArrows"], ["ngbSlide", ""], [1, "p-lg-5", "p-4"], [1, "text-primary"], [1, "text-muted"], [1, "mt-4"], [3, "ngSubmit", "formGroup"], ["for", "email", 1, "form-label"], [1, "text-danger"], ["type", "email", "id", "email", "placeholder", "Ingrese Correo Electr\u00F3nico", "required", "", "formControlName", "email", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "placeholder", "Ingrese Razon Social", "required", "", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["for", "ruc", 1, "form-label"], ["type", "text", "placeholder", " Ingrese  RUC", "id", "ruc", "required", "", "formControlName", "ruc", 1, "form-control", 3, "ngClass"], [1, "mb-0", "fs-12", "text-muted", "fst-italic"], ["href", "javascript:void(0);", 1, "text-primary", "text-decoration-underline", "fst-normal", "fw-medium"], ["id", "password-contain", 1, "p-3", "bg-light", "mb-2", "rounded"], [1, "fs-13"], ["id", "pass-length", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-lower", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-upper", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-number", 1, "invalid", "fs-12", "mb-0"], ["type", "submit", 1, "btn", "btn-success", "w-100"], [1, "footer"], [1, "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [1, "carousel-inner", "text-center", "text-white-50", "pb-5"], [1, "carousel-item", "active"], [1, "fs-15", "fst-italic"]],
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
          core/* ɵɵtext */.EFF(26, "Registrar Cuenta ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(27, "p", 21);
          core/* ɵɵtext */.EFF(28, "Obt\u00E9n tu cuenta de FenixFactura ahora..");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(29, "div", 22)(30, "form", 23);
          core/* ɵɵlistener */.bIt("ngSubmit", function CoverComponent_Template_form_ngSubmit_30_listener() {
            return ctx.onSubmit();
          });
          core/* ɵɵelementStart */.j41(31, "div", 15)(32, "label", 24);
          core/* ɵɵtext */.EFF(33, "Email ");
          core/* ɵɵelementStart */.j41(34, "span", 25);
          core/* ɵɵtext */.EFF(35, "*");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(36, "input", 26);
          core/* ɵɵelementStart */.j41(37, "div", 27);
          core/* ɵɵtext */.EFF(38, " Ingrese Correo Electr\u00F3nico ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(39, "div", 15)(40, "label", 28);
          core/* ɵɵtext */.EFF(41, "Razon Social ");
          core/* ɵɵelementStart */.j41(42, "span", 25);
          core/* ɵɵtext */.EFF(43, "*");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(44, "input", 29);
          core/* ɵɵelementStart */.j41(45, "div", 27);
          core/* ɵɵtext */.EFF(46, " Ingrese Razon Social ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(47, "div", 15)(48, "label", 30);
          core/* ɵɵtext */.EFF(49, "RUC ");
          core/* ɵɵelementStart */.j41(50, "span", 25);
          core/* ɵɵtext */.EFF(51, "*");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(52, "input", 31);
          core/* ɵɵelementStart */.j41(53, "div", 27);
          core/* ɵɵtext */.EFF(54, " Ingrese Razon RUC ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(55, "div", 11)(56, "p", 32);
          core/* ɵɵtext */.EFF(57, "Al registrarse, usted acepta el FenixFactura ");
          core/* ɵɵelementStart */.j41(58, "a", 33);
          core/* ɵɵtext */.EFF(59, "Terminos de uso");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(60, "div", 34)(61, "h5", 35);
          core/* ɵɵtext */.EFF(62, "Password must contain:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(63, "p", 36);
          core/* ɵɵtext */.EFF(64, "Minimum ");
          core/* ɵɵelementStart */.j41(65, "b");
          core/* ɵɵtext */.EFF(66, "8 characters");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(67, "p", 37);
          core/* ɵɵtext */.EFF(68, "At ");
          core/* ɵɵelementStart */.j41(69, "b");
          core/* ɵɵtext */.EFF(70, "lowercase");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(71, " letter (a-z)");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(72, "p", 38);
          core/* ɵɵtext */.EFF(73, "At least ");
          core/* ɵɵelementStart */.j41(74, "b");
          core/* ɵɵtext */.EFF(75, "uppercase");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(76, " letter (A-Z)");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(77, "p", 39);
          core/* ɵɵtext */.EFF(78, "A least ");
          core/* ɵɵelementStart */.j41(79, "b");
          core/* ɵɵtext */.EFF(80, "number");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(81, " (0-9)");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(82, "div", 22)(83, "button", 40);
          core/* ɵɵtext */.EFF(84, "Registrar");
          core/* ɵɵelementEnd */.k0s()()()()()()()()()()()();
          core/* ɵɵelementStart */.j41(85, "footer", 41)(86, "div", 3)(87, "div", 4)(88, "div", 5)(89, "div", 42)(90, "p", 43);
          core/* ɵɵtext */.EFF(91);
          core/* ɵɵelement */.nrm(92, "i", 44);
          core/* ɵɵtext */.EFF(93, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(18);
          core/* ɵɵproperty */.Y8G("showNavigationArrows", ctx.showNavigationArrows);
          core/* ɵɵadvance */.R7$(12);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.SignupForm);
          core/* ɵɵadvance */.R7$(6);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(6, cover_component_c0, ctx.submitted && ctx.f["email"].errors));
          core/* ɵɵadvance */.R7$(8);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(8, cover_component_c0, ctx.submitted && ctx.f["name"].errors));
          core/* ɵɵadvance */.R7$(8);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(10, cover_component_c0, ctx.submitted && ctx.f["ruc"].errors));
          core/* ɵɵadvance */.R7$(39);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [common/* NgClass */.YU, ng_bootstrap/* NgbCarousel */.Oj, ng_bootstrap/* NgbSlide */.bD, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* RequiredValidator */.YS, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/signup/signup-routing.module.ts

// Components




const routes = [{
  path: "basic",
  component: BasicComponent
}, {
  path: "cover/:id",
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
;// CONCATENATED MODULE: ./src/app/account/auth/signup/signup.module.ts




// Component



class SignupModule {
  static {
    this.ɵfac = function SignupModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignupModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: SignupModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, SigninRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(SignupModule, {
    declarations: [BasicComponent, CoverComponent],
    imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, SigninRoutingModule]
  });
})();

/***/ })

}]);