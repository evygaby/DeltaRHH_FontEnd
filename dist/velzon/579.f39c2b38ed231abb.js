"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[579],{

/***/ 94579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PassCreateModule: () => (/* binding */ PassCreateModule)
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
;// CONCATENATED MODULE: ./src/app/account/auth/pass-create/basic/basic.component.ts





const _c0 = a0 => ({
  "is-invalid": a0
});
const _c1 = (a0, a1) => ({
  "mdi-eye-off-outline": a0,
  "mdi-eye-outline": a1
});
function BasicComponent_div_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "span");
    core/* ɵɵtext */.EFF(1, "Password is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function BasicComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 53);
    core/* ɵɵtemplate */.DNE(1, BasicComponent_div_34_span_1_Template, 2, 0, "span", 54);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["password"].errors["required"]);
  }
}
function BasicComponent_div_44_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "span");
    core/* ɵɵtext */.EFF(1, "Confirm Password is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function BasicComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 53);
    core/* ɵɵtemplate */.DNE(1, BasicComponent_div_44_span_1_Template, 2, 0, "span", 54);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["cpassword"].errors["required"]);
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
    this.passresetForm = this.formBuilder.group({
      password: ['', [fesm2022_forms/* Validators */.k0.required]],
      cpassword: ['', [fesm2022_forms/* Validators */.k0.required]]
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
  /**
  * Password Hide/Show
  */
  togglepasswordField() {
    this.passwordField = !this.passwordField;
  }
  /**
  * Password Hide/Show
  */
  toggleconfirmField() {
    this.confirmField = !this.confirmField;
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
      decls: 89,
      vars: 19,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "mb-4", "text-white-50"], ["routerLink", "/", 1, "d-inline-block", "auth-logo"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "mt-3", "fs-15", "fw-medium"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "mt-4"], [1, "card-body", "p-4"], [1, "text-center", "mt-2"], [1, "text-primary"], [1, "text-muted"], [1, "p-2"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "password-input", 1, "form-label"], [1, "position-relative", "auth-pass-inputgroup"], ["placeholder", "Enter password", "id", "password-input", "aria-describedby", "passwordInput", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", "", "formControlName", "password", 1, "form-control", "pe-5", "password-input", 3, "type", "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted", "password-addon"], [1, "ri-eye-fill", "align-middle", 3, "click", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "passwordInput", 1, "form-text"], ["for", "confirm-password-input", 1, "form-label"], [1, "position-relative", "auth-pass-inputgroup", "mb-3"], ["placeholder", "Confirm password", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "id", "confirm-password-input", "required", "", "formControlName", "cpassword", 1, "form-control", "pe-5", "password-input", 3, "type", "ngClass"], ["type", "button", "id", "confirm-password-input", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted", "password-addon"], ["id", "password-contain", 1, "p-3", "bg-light", "mb-2", "rounded"], [1, "fs-13"], ["id", "pass-length", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-lower", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-upper", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-number", 1, "invalid", "fs-12", "mb-0"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "auth-remember-check", 1, "form-check-input"], ["for", "auth-remember-check", 1, "form-check-label"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-success", "w-100"], [1, "mt-4", "text-center"], [1, "mb-0"], ["routerLink", "/auth/signin/basic", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"], [1, "invalid-feedback"], [4, "ngIf"]],
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
          core/* ɵɵtext */.EFF(22, "Create new password");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(23, "p", 20);
          core/* ɵɵtext */.EFF(24, "Your new password must be different from previous used password.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(25, "div", 21)(26, "form", 22);
          core/* ɵɵlistener */.bIt("ngSubmit", function BasicComponent_Template_form_ngSubmit_26_listener() {
            return ctx.onSubmit();
          });
          core/* ɵɵelementStart */.j41(27, "div", 23)(28, "label", 24);
          core/* ɵɵtext */.EFF(29, "Password");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(30, "div", 25);
          core/* ɵɵelement */.nrm(31, "input", 26);
          core/* ɵɵelementStart */.j41(32, "button", 27)(33, "i", 28);
          core/* ɵɵlistener */.bIt("click", function BasicComponent_Template_i_click_33_listener() {
            return ctx.togglepasswordField();
          });
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(34, BasicComponent_div_34_Template, 2, 1, "div", 29);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(35, "div", 30);
          core/* ɵɵtext */.EFF(36, "Must be at least 8 characters.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(37, "div", 23)(38, "label", 31);
          core/* ɵɵtext */.EFF(39, "Confirm Password");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(40, "div", 32);
          core/* ɵɵelement */.nrm(41, "input", 33);
          core/* ɵɵelementStart */.j41(42, "button", 34)(43, "i", 28);
          core/* ɵɵlistener */.bIt("click", function BasicComponent_Template_i_click_43_listener() {
            return ctx.toggleconfirmField();
          });
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(44, BasicComponent_div_44_Template, 2, 1, "div", 29);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(45, "div", 35)(46, "h5", 36);
          core/* ɵɵtext */.EFF(47, "Password must contain:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(48, "p", 37);
          core/* ɵɵtext */.EFF(49, "Minimum ");
          core/* ɵɵelementStart */.j41(50, "b");
          core/* ɵɵtext */.EFF(51, "8 characters");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(52, "p", 38);
          core/* ɵɵtext */.EFF(53, "At ");
          core/* ɵɵelementStart */.j41(54, "b");
          core/* ɵɵtext */.EFF(55, "lowercase");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(56, " letter (a-z)");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(57, "p", 39);
          core/* ɵɵtext */.EFF(58, "At least ");
          core/* ɵɵelementStart */.j41(59, "b");
          core/* ɵɵtext */.EFF(60, "uppercase");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(61, " letter (A-Z)");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(62, "p", 40);
          core/* ɵɵtext */.EFF(63, "A least ");
          core/* ɵɵelementStart */.j41(64, "b");
          core/* ɵɵtext */.EFF(65, "number");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(66, " (0-9)");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(67, "div", 41);
          core/* ɵɵelement */.nrm(68, "input", 42);
          core/* ɵɵelementStart */.j41(69, "label", 43);
          core/* ɵɵtext */.EFF(70, "Remember me");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(71, "div", 44)(72, "button", 45);
          core/* ɵɵtext */.EFF(73, "Reset Password");
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(74, "div", 46)(75, "p", 47);
          core/* ɵɵtext */.EFF(76, "Wait, I remember my password... ");
          core/* ɵɵelementStart */.j41(77, "a", 48);
          core/* ɵɵtext */.EFF(78, " Click here ");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(79, "footer", 49)(80, "div", 7)(81, "div", 8)(82, "div", 9)(83, "div", 50)(84, "p", 51);
          core/* ɵɵtext */.EFF(85, "\u00A9 ");
          core/* ɵɵtext */.EFF(86, " Velzon. Crafted with ");
          core/* ɵɵelement */.nrm(87, "i", 52);
          core/* ɵɵtext */.EFF(88, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(26);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.passresetForm);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵproperty */.Y8G("type", ctx.passwordField ? "text" : "password")("ngClass", core/* ɵɵpureFunction1 */.eq3(9, _c0, ctx.submitted && ctx.f["password"].errors));
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction2 */.l_i(11, _c1, !ctx.passwordField, ctx.passwordField));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["password"].errors);
          core/* ɵɵadvance */.R7$(7);
          core/* ɵɵproperty */.Y8G("type", ctx.confirmField ? "text" : "password")("ngClass", core/* ɵɵpureFunction1 */.eq3(14, _c0, ctx.submitted && ctx.f["cpassword"].errors));
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction2 */.l_i(16, _c1, !ctx.passwordField, ctx.passwordField));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["cpassword"].errors);
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgIf */.bT, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* RequiredValidator */.YS, fesm2022_forms/* PatternValidator */.R_, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/pass-create/cover/cover.component.ts






const cover_component_c0 = a0 => ({
  "is-invalid": a0
});
const cover_component_c1 = (a0, a1) => ({
  "mdi-eye-off-outline": a0,
  "mdi-eye-outline": a1
});
function CoverComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 52)(1, "div", 53)(2, "p", 54);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 52)(1, "div", 53)(2, "p", 54);
    core/* ɵɵtext */.EFF(3, "\" The theme is really great with an amazing customer support.\"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 52)(1, "div", 53)(2, "p", 54);
    core/* ɵɵtext */.EFF(3, "\" Great! Clean code, clean design, easy for customization. Thanks very much! \"");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function CoverComponent_div_37_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "span");
    core/* ɵɵtext */.EFF(1, "Password is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function CoverComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 55);
    core/* ɵɵtemplate */.DNE(1, CoverComponent_div_37_span_1_Template, 2, 0, "span", 56);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["password"].errors["required"]);
  }
}
function CoverComponent_div_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "span");
    core/* ɵɵtext */.EFF(1, "Confirm Password is required");
    core/* ɵɵelementEnd */.k0s();
  }
}
function CoverComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 55);
    core/* ɵɵtemplate */.DNE(1, CoverComponent_div_47_span_1_Template, 2, 0, "span", 56);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", ctx_r0.f["cpassword"].errors["required"]);
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
      password: ['', [fesm2022_forms/* Validators */.k0.required]],
      cpassword: ['', fesm2022_forms/* Validators */.k0.required]
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
  togglepasswordField() {
    this.passwordField = !this.passwordField;
  }
  /**
  * Password Hide/Show
  */
  toggleconfirmField() {
    this.confirmField = !this.confirmField;
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
      decls: 91,
      vars: 21,
      consts: [[1, "auth-page-wrapper", "auth-bg-cover", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "bg-overlay"], [1, "auth-page-content", "overflow-hidden", "pt-lg-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "overflow-hidden"], [1, "row", "g-0"], [1, "col-lg-6"], [1, "p-lg-5", "p-4", "auth-one-bg", "h-100"], [1, "position-relative", "h-100", "d-flex", "flex-column"], [1, "mb-4"], ["routerLink", "", 1, "d-block"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18"], [1, "mt-auto"], [1, "mb-3"], [1, "ri-double-quotes-l", "display-4", "text-success"], [3, "showNavigationArrows"], ["ngbSlide", ""], [1, "p-lg-5", "p-4"], [1, "text-primary"], [1, "text-muted"], [1, "p-2"], [3, "ngSubmit", "formGroup"], ["for", "password-input", 1, "form-label"], [1, "position-relative", "auth-pass-inputgroup"], ["placeholder", "Enter password", "id", "password-input", "aria-describedby", "passwordInput", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", "", "formControlName", "password", 1, "form-control", "pe-5", "password-input", 3, "type", "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted", "password-addon"], [1, "ri-eye-fill", "align-middle", 3, "click", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "passwordInput", 1, "form-text"], ["for", "confirm-password-input", 1, "form-label"], [1, "position-relative", "auth-pass-inputgroup", "mb-3"], ["placeholder", "Confirm password", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "id", "confirm-password-input", "required", "", "formControlName", "cpassword", 1, "form-control", "pe-5", "password-input", 3, "type", "ngClass"], ["type", "button", "id", "confirm-password-input", 1, "btn", "btn-link", "position-absolute", "end-0", "top-0", "text-decoration-none", "text-muted", "password-addon"], ["id", "password-contain", 1, "p-3", "bg-light", "mb-2", "rounded"], [1, "fs-13"], ["id", "pass-length", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-lower", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-upper", 1, "invalid", "fs-12", "mb-2"], ["id", "pass-number", 1, "invalid", "fs-12", "mb-0"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "auth-remember-check", 1, "form-check-input"], ["for", "auth-remember-check", 1, "form-check-label"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-success", "w-100"], [1, "mt-5", "text-center"], [1, "mb-0"], ["routerLink", "/auth/signin/cover", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mdi", "mdi-heart", "text-danger"], [1, "carousel-inner", "text-center", "text-white-50", "pb-5"], [1, "carousel-item", "active"], [1, "fs-15", "fst-italic"], [1, "invalid-feedback"], [4, "ngIf"]],
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
          core/* ɵɵtext */.EFF(25, "Create new password");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(26, "p", 21);
          core/* ɵɵtext */.EFF(27, "Your new password must be different from previous used password.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(28, "div", 22)(29, "form", 23);
          core/* ɵɵlistener */.bIt("ngSubmit", function CoverComponent_Template_form_ngSubmit_29_listener() {
            return ctx.onSubmit();
          });
          core/* ɵɵelementStart */.j41(30, "div", 15)(31, "label", 24);
          core/* ɵɵtext */.EFF(32, "Password");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(33, "div", 25);
          core/* ɵɵelement */.nrm(34, "input", 26);
          core/* ɵɵelementStart */.j41(35, "button", 27)(36, "i", 28);
          core/* ɵɵlistener */.bIt("click", function CoverComponent_Template_i_click_36_listener() {
            return ctx.togglepasswordField();
          });
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(37, CoverComponent_div_37_Template, 2, 1, "div", 29);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(38, "div", 30);
          core/* ɵɵtext */.EFF(39, "Must be at least 8 characters.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(40, "div", 15)(41, "label", 31);
          core/* ɵɵtext */.EFF(42, "Confirm Password");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(43, "div", 32);
          core/* ɵɵelement */.nrm(44, "input", 33);
          core/* ɵɵelementStart */.j41(45, "button", 34)(46, "i", 28);
          core/* ɵɵlistener */.bIt("click", function CoverComponent_Template_i_click_46_listener() {
            return ctx.toggleconfirmField();
          });
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(47, CoverComponent_div_47_Template, 2, 1, "div", 29);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(48, "div", 35)(49, "h5", 36);
          core/* ɵɵtext */.EFF(50, "Password must contain:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(51, "p", 37);
          core/* ɵɵtext */.EFF(52, "Minimum ");
          core/* ɵɵelementStart */.j41(53, "b");
          core/* ɵɵtext */.EFF(54, "8 characters");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(55, "p", 38);
          core/* ɵɵtext */.EFF(56, "At ");
          core/* ɵɵelementStart */.j41(57, "b");
          core/* ɵɵtext */.EFF(58, "lowercase");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(59, " letter (a-z)");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(60, "p", 39);
          core/* ɵɵtext */.EFF(61, "At least ");
          core/* ɵɵelementStart */.j41(62, "b");
          core/* ɵɵtext */.EFF(63, "uppercase");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(64, " letter (A-Z)");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(65, "p", 40);
          core/* ɵɵtext */.EFF(66, "A least ");
          core/* ɵɵelementStart */.j41(67, "b");
          core/* ɵɵtext */.EFF(68, "number");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(69, " (0-9)");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(70, "div", 41);
          core/* ɵɵelement */.nrm(71, "input", 42);
          core/* ɵɵelementStart */.j41(72, "label", 43);
          core/* ɵɵtext */.EFF(73, "Remember me");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(74, "div", 44)(75, "button", 45);
          core/* ɵɵtext */.EFF(76, "Reset Password");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(77, "div", 46)(78, "p", 47);
          core/* ɵɵtext */.EFF(79, "Wait, I remember my password... ");
          core/* ɵɵelementStart */.j41(80, "a", 48);
          core/* ɵɵtext */.EFF(81, " Click here ");
          core/* ɵɵelementEnd */.k0s()()()()()()()()()()();
          core/* ɵɵelementStart */.j41(82, "footer", 49)(83, "div", 3)(84, "div", 4)(85, "div", 5)(86, "div", 50)(87, "p", 47);
          core/* ɵɵtext */.EFF(88);
          core/* ɵɵelement */.nrm(89, "i", 51);
          core/* ɵɵtext */.EFF(90, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(18);
          core/* ɵɵproperty */.Y8G("showNavigationArrows", ctx.showNavigationArrows);
          core/* ɵɵadvance */.R7$(11);
          core/* ɵɵproperty */.Y8G("formGroup", ctx.loginForm);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵproperty */.Y8G("type", ctx.passwordField ? "text" : "password")("ngClass", core/* ɵɵpureFunction1 */.eq3(11, cover_component_c0, ctx.submitted && ctx.f["password"].errors));
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction2 */.l_i(13, cover_component_c1, !ctx.passwordField, ctx.passwordField));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["password"].errors);
          core/* ɵɵadvance */.R7$(7);
          core/* ɵɵproperty */.Y8G("type", ctx.confirmField ? "text" : "password")("ngClass", core/* ɵɵpureFunction1 */.eq3(16, cover_component_c0, ctx.submitted && ctx.f["cpassword"].errors));
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction2 */.l_i(18, cover_component_c1, !ctx.passwordField, ctx.passwordField));
          core/* ɵɵadvance */.R7$();
          core/* ɵɵproperty */.Y8G("ngIf", ctx.submitted && ctx.f["cpassword"].errors);
          core/* ɵɵadvance */.R7$(41);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgIf */.bT, ng_bootstrap/* NgbCarousel */.Oj, ng_bootstrap/* NgbSlide */.bD, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* RequiredValidator */.YS, fesm2022_forms/* PatternValidator */.R_, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/pass-create/pass-create-routing.module.ts

// Components




const routes = [{
  path: "basic",
  component: BasicComponent
}, {
  path: "cover",
  component: CoverComponent
}];
class PassCreateRoutingModule {
  static {
    this.ɵfac = function PassCreateRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassCreateRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: PassCreateRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(PassCreateRoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
;// CONCATENATED MODULE: ./src/app/account/auth/pass-create/pass-create.module.ts



// Component




class PassCreateModule {
  static {
    this.ɵfac = function PassCreateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassCreateModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: PassCreateModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, PassCreateRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(PassCreateModule, {
    declarations: [BasicComponent, CoverComponent],
    imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, PassCreateRoutingModule]
  });
})();

/***/ })

}]);