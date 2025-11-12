"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[566],{

/***/ 2566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TwostepModule: () => (/* binding */ TwostepModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/common.mjs
var common = __webpack_require__(60177);
// EXTERNAL MODULE: ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs + 60 modules
var ng_bootstrap = __webpack_require__(1109);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2022/forms.mjs
var fesm2022_forms = __webpack_require__(89417);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2022/core.mjs + 1 modules
var core = __webpack_require__(54438);
;// CONCATENATED MODULE: ./node_modules/ng-otp-input/fesm2015/ng-otp-input.js






function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "input", 4, 0);
    core/* ɵɵlistener */.bIt("paste", function NgOtpInputComponent_div_0_input_1_Template_input_paste_0_listener($event) {
      core/* ɵɵrestoreView */.eBV(_r1);
      const ctx_r1 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r1.handlePaste($event));
    })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
      const i_r3 = core/* ɵɵrestoreView */.eBV(_r1).index;
      const ctx_r1 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r1.onKeyUp($event, i_r3));
    })("input", function NgOtpInputComponent_div_0_input_1_Template_input_input_0_listener($event) {
      core/* ɵɵrestoreView */.eBV(_r1);
      const ctx_r1 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r1.onInput($event));
    })("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
      const i_r3 = core/* ɵɵrestoreView */.eBV(_r1).index;
      const ctx_r1 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r1.onKeyDown($event, i_r3));
    });
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = core/* ɵɵnextContext */.XpG(2);
    core/* ɵɵclassMapInterpolate1 */.ZvI("otp-input ", ctx_r1.config.inputClass, "");
    core/* ɵɵpropertyInterpolate2 */.FCK("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    core/* ɵɵproperty */.Y8G("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r4]);
  }
}
function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 2);
    core/* ɵɵtemplate */.DNE(1, NgOtpInputComponent_div_0_input_1_Template, 2, 11, "input", 3);
    core/* ɵɵpipe */.nI1(2, "keys");
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ng-otp-input-wrapper wrapper ", ctx_r1.config.containerClass, "");
    core/* ɵɵpropertyInterpolate1 */.Mz_("id", "c_", ctx_r1.componentKey, "");
    core/* ɵɵproperty */.Y8G("ngStyle", ctx_r1.config.containerStyles);
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngForOf", core/* ɵɵpipeBind1 */.bMT(2, 7, ctx_r1.otpForm == null ? null : ctx_r1.otpForm.controls));
  }
}
class KeyboardUtil {
  static ifBackspaceOrDelete(event) {
    return this.ifKey(event, 'Backspace;Delete;Del');
  }
  static ifRightArrow(event) {
    return this.ifKey(event, 'ArrowRight;Right');
  }
  static ifLeftArrow(event) {
    return this.ifKey(event, 'ArrowLeft;Left');
  }
  static ifSpacebar(event) {
    return this.ifKey(event, 'Spacebar; '); //don't remove the space after ; as this will check for space key
  }
  static ifKey(event, keys) {
    let keysToCheck = keys.split(';');
    return keysToCheck.some(k => k === event.key);
  }
}
class KeysPipe {
  transform(value) {
    return Object.keys(value);
  }
}
/** @nocollapse */
KeysPipe.ɵfac = function KeysPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || KeysPipe)();
};
/** @nocollapse */
KeysPipe.ɵpipe = /* @__PURE__ */core/* ɵɵdefinePipe */.EJ8({
  name: "keys",
  type: KeysPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && core/* ɵsetClassMetadata */.rrr(KeysPipe, [{
    type: core/* Pipe */.nT_,
    args: [{
      name: 'keys'
    }]
  }], null, null);
})();
class NgOtpInputComponent {
  constructor(keysPipe) {
    this.keysPipe = keysPipe;
    this.config = {
      length: 4
    };
    // tslint:disable-next-line: no-output-on-prefix
    this.onInputChange = new core/* EventEmitter */.bkB();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
  }
  get inputType() {
    var _a, _b;
    return ((_a = this.config) === null || _a === void 0 ? void 0 : _a.isPasswordInput) ? 'password' : ((_b = this.config) === null || _b === void 0 ? void 0 : _b.allowNumbersOnly) ? 'tel' : 'text';
  }
  ngOnInit() {
    this.otpForm = new fesm2022_forms/* FormGroup */.gE({});
    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new fesm2022_forms/* FormControl */.MJ());
    }
    this.otpForm.valueChanges.subscribe(v => {
      this.keysPipe.transform(this.otpForm.controls).forEach(k => {
        var val = this.otpForm.controls[k].value;
        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }
  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);
      if (containerItem) {
        const ele = containerItem.getElementsByClassName('otp-input')[0];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }
  getControlName(idx) {
    return `ctrl_${idx}`;
  }
  onKeyDown($event, inputIdx) {
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
  }
  onInput($event) {
    let newVal = this.currentVal ? `${this.currentVal}${$event.target.value}` : $event.target.value;
    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = '';
      $event.stopPropagation();
      $event.preventDefault();
      return;
    }
  }
  onKeyUp($event, inputIdx) {
    const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
    const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }
    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }
    if (KeyboardUtil.ifBackspaceOrDelete($event) && !$event.target.value) {
      this.setSelected(prevInputId);
      this.rebuildValue();
      return;
    }
    if (!$event.target.value) {
      return;
    }
    if (this.ifValidKeyCode($event)) {
      this.setSelected(nextInputId);
    }
    this.rebuildValue();
  }
  validateNumber(val) {
    return val && /^\d*\.?\d*$/.test(val);
  }
  appendKey(id) {
    return `${id}_${this.componentKey}`;
  }
  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }
  ifValidKeyCode(event) {
    const inp = event.key;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode);
  }
  focusTo(eleId) {
    const ele = document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }
  // method to set component value
  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }
    this.otpForm.reset();
    if (!value) {
      this.rebuildValue();
      return;
    }
    value = value.toString().replace(/\s/g, ''); // remove whitespace
    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });
    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);
      var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
      let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
      if (ele && ele.focus) {
        ele.focus();
      }
    }
    this.rebuildValue();
  }
  rebuildValue() {
    var _a;
    let val = '';
    this.keysPipe.transform(this.otpForm.controls).forEach(k => {
      if (this.otpForm.controls[k].value) {
        let ctrlVal = this.otpForm.controls[k].value;
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }
        val += ctrlVal;
        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });
    if ((_a = this.formCtrl) === null || _a === void 0 ? void 0 : _a.setValue) {
      this.formCtrl.setValue(val);
    }
    this.onInputChange.emit(val);
    this.currentVal = val;
  }
  handlePaste(e) {
    // Get pasted data via clipboard API
    let clipboardData = e.clipboardData || window['clipboardData'];
    if (clipboardData) {
      var pastedData = clipboardData.getData('Text');
    }
    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();
    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }
    this.setValue(pastedData);
  }
}
/** @nocollapse */
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgOtpInputComponent)(core/* ɵɵdirectiveInject */.rXU(KeysPipe));
};
/** @nocollapse */
NgOtpInputComponent.ɵcmp = /* @__PURE__ */core/* ɵɵdefineComponent */.VBU({
  type: NgOtpInputComponent,
  selectors: [["ng-otp-input"]],
  inputs: {
    config: "config",
    formCtrl: "formCtrl"
  },
  outputs: {
    onInputChange: "onInputChange"
  },
  decls: 1,
  vars: 1,
  consts: [["inp", ""], [3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "class", "formControl", "id", "paste", "keyup", "input", "keydown", 4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "paste", "keyup", "input", "keydown", "pattern", "type", "placeholder", "ngStyle", "formControl", "id"]],
  template: function NgOtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      core/* ɵɵtemplate */.DNE(0, NgOtpInputComponent_div_0_Template, 3, 9, "div", 1);
    }
    if (rf & 2) {
      core/* ɵɵproperty */.Y8G("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    }
  },
  dependencies: [common/* NgIf */.bT, common/* NgStyle */.B3, common/* NgForOf */.Sq, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* PatternValidator */.R_, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* FormControlDirective */.l_, KeysPipe],
  styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && core/* ɵsetClassMetadata */.rrr(NgOtpInputComponent, [{
    type: core/* Component */.uAl,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: 'ng-otp-input',
      templateUrl: './ng-otp-input.component.html',
      styleUrls: ['./ng-otp-input.component.scss']
    }]
  }], function () {
    return [{
      type: KeysPipe
    }];
  }, {
    config: [{
      type: core/* Input */.pde
    }],
    onInputChange: [{
      type: core/* Output */.k7i
    }],
    formCtrl: [{
      type: core/* Input */.pde
    }]
  });
})();
class NgOtpInputModule {}
/** @nocollapse */
NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgOtpInputModule)();
};
/** @nocollapse */
NgOtpInputModule.ɵmod = /* @__PURE__ */core/* ɵɵdefineNgModule */.$C({
  type: NgOtpInputModule
});
/** @nocollapse */
NgOtpInputModule.ɵinj = /* @__PURE__ */core/* ɵɵdefineInjector */.G2t({
  providers: [KeysPipe],
  imports: [[common/* CommonModule */.MD, fesm2022_forms/* FormsModule */.YN, fesm2022_forms/* ReactiveFormsModule */.X1]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && core/* ɵsetClassMetadata */.rrr(NgOtpInputModule, [{
    type: core/* NgModule */.UQu,
    args: [{
      imports: [common/* CommonModule */.MD, fesm2022_forms/* FormsModule */.YN, fesm2022_forms/* ReactiveFormsModule */.X1],
      declarations: [NgOtpInputComponent, KeysPipe],
      exports: [NgOtpInputComponent],
      providers: [KeysPipe]
    }]
  }], null, null);
})();
class Config {}

/*
 * Public API Surface of ng-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-otp-input.js.map
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2022/router.mjs + 4 modules
var router = __webpack_require__(74710);
;// CONCATENATED MODULE: ./src/app/account/auth/twostep/basic/basic.component.ts




/**
 * Two Step Basic Component
 */
class BasicComponent {
  constructor() {
    // set the current year
    this.year = new Date().getFullYear();
    /**
    * Confirm Otp Verification
    */
    this.config = {
      allowNumbersOnly: true,
      length: 4,
      isPasswordInput: false,
      disableAutoFocus: false,
      placeholder: '',
      inputStyles: {
        'width': '80px',
        'height': '50px'
      }
    };
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
      decls: 52,
      vars: 2,
      consts: [[1, "auth-page-wrapper", "pt-5"], ["id", "auth-particles", 1, "auth-one-bg-position", "auth-one-bg"], [1, "bg-overlay"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["d", "M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"], [1, "auth-page-content"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mt-sm-5", "mb-4", "text-white-50"], ["routerLink", "", 1, "d-inline-block", "auth-logo"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "mt-3", "fs-15", "fw-medium"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "mt-4"], [1, "card-body", "p-4"], [1, "mb-4"], [1, "avatar-lg", "mx-auto"], [1, "avatar-title", "bg-light", "text-primary", "display-5", "rounded-circle"], [1, "ri-mail-line"], [1, "p-2", "mt-4"], [1, "text-muted", "text-center", "mb-4", "mx-lg-3"], [1, ""], [1, "fw-semibold"], ["autocomplete", "off"], [1, "row", "twostep-input"], [3, "config"], [1, "mt-3"], ["type", "button", 1, "btn", "btn-success", "w-100"], [1, "mt-4", "text-center"], [1, "mb-0"], ["routerLink", "/auth/pass-reset/basic", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "mdi", "mdi-heart", "text-danger"]],
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
          core/* ɵɵelementStart */.j41(16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "div", 18)(21, "div", 19)(22, "div", 20);
          core/* ɵɵelement */.nrm(23, "i", 21);
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(24, "div", 22)(25, "div", 23)(26, "h4", 24);
          core/* ɵɵtext */.EFF(27, "Verify Your Email");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(28, "p");
          core/* ɵɵtext */.EFF(29, "Please enter the 4 digit code sent to ");
          core/* ɵɵelementStart */.j41(30, "span", 25);
          core/* ɵɵtext */.EFF(31, "example.com");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(32, "form", 26)(33, "div", 27);
          core/* ɵɵelement */.nrm(34, "ng-otp-input", 28);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(35, "div", 29)(36, "button", 30);
          core/* ɵɵtext */.EFF(37, "Confirm");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(38, "div", 31)(39, "p", 32);
          core/* ɵɵtext */.EFF(40, "Didn't receive a code ? ");
          core/* ɵɵelementStart */.j41(41, "a", 33);
          core/* ɵɵtext */.EFF(42, "Resend");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(43, "footer", 34)(44, "div", 7)(45, "div", 8)(46, "div", 9)(47, "div", 35)(48, "p", 36);
          core/* ɵɵtext */.EFF(49);
          core/* ɵɵelement */.nrm(50, "i", 37);
          core/* ɵɵtext */.EFF(51, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(34);
          core/* ɵɵproperty */.Y8G("config", ctx.config);
          core/* ɵɵadvance */.R7$(15);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* NgForm */.cV, NgOtpInputComponent, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/twostep/cover/cover.component.ts





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
/**
 * TwoStep Cover Component
 */
class CoverComponent {
  constructor() {
    // set the current year
    this.year = new Date().getFullYear();
    /**
     * Confirm Otp Verification
     */
    this.config = {
      allowNumbersOnly: true,
      length: 4,
      isPasswordInput: false,
      disableAutoFocus: false,
      placeholder: '',
      inputStyles: {
        'width': '80px',
        'height': '50px'
      }
    };
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
      decls: 56,
      vars: 3,
      consts: [[1, "auth-page-wrapper", "auth-bg-cover", "py-5", "d-flex", "justify-content-center", "align-items-center", "min-vh-100"], [1, "bg-overlay"], [1, "auth-page-content", "overflow-hidden", "pt-lg-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "overflow-hidden"], [1, "row", "justify-content-center", "g-0"], [1, "col-lg-6"], [1, "p-lg-5", "p-4", "auth-one-bg", "h-100"], [1, "position-relative", "h-100", "d-flex", "flex-column"], [1, "mb-4"], ["routerLink", "", 1, "d-block"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18"], [1, "mt-auto"], [1, "mb-3"], [1, "ri-double-quotes-l", "display-4", "text-success"], [3, "showNavigationArrows"], ["ngbSlide", ""], [1, "p-lg-5", "p-4"], [1, "avatar-lg", "mx-auto"], [1, "avatar-title", "bg-light", "text-primary", "display-5", "rounded-circle"], [1, "ri-mail-line"], [1, "text-muted", "text-center", "mx-lg-3"], [1, ""], [1, "fw-semibold"], [1, "mt-4"], ["autocomplete", "off"], [1, "row", "twostep-input"], [3, "config"], [1, "mt-3"], ["type", "button", 1, "btn", "btn-success", "w-100"], [1, "mt-5", "text-center"], [1, "mb-0"], ["routerLink", "/auth/pass-reset/cover", 1, "fw-semibold", "text-primary", "text-decoration-underline"], [1, "footer"], [1, "text-center"], [1, "mdi", "mdi-heart", "text-danger"], [1, "carousel-inner", "text-center", "text-white-50", "pb-5"], [1, "carousel-item", "active"], [1, "fs-15", "fst-italic"]],
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
          core/* ɵɵelementStart */.j41(22, "div", 8)(23, "div", 19)(24, "div", 11)(25, "div", 20)(26, "div", 21);
          core/* ɵɵelement */.nrm(27, "i", 22);
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(28, "div", 23)(29, "h4", 24);
          core/* ɵɵtext */.EFF(30, "Verify Your Email");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(31, "p");
          core/* ɵɵtext */.EFF(32, "Please enter the 4 digit code sent to ");
          core/* ɵɵelementStart */.j41(33, "span", 25);
          core/* ɵɵtext */.EFF(34, "exampleabc.com");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(35, "div", 26)(36, "form", 27)(37, "div", 28);
          core/* ɵɵelement */.nrm(38, "ng-otp-input", 29);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(39, "div", 30)(40, "button", 31);
          core/* ɵɵtext */.EFF(41, "Confirm");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(42, "div", 32)(43, "p", 33);
          core/* ɵɵtext */.EFF(44, "Didn't receive a code ? ");
          core/* ɵɵelementStart */.j41(45, "a", 34);
          core/* ɵɵtext */.EFF(46, "Resend");
          core/* ɵɵelementEnd */.k0s()()()()()()()()()()();
          core/* ɵɵelementStart */.j41(47, "footer", 35)(48, "div", 3)(49, "div", 4)(50, "div", 5)(51, "div", 36)(52, "p", 33);
          core/* ɵɵtext */.EFF(53);
          core/* ɵɵelement */.nrm(54, "i", 37);
          core/* ɵɵtext */.EFF(55, " by Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(18);
          core/* ɵɵproperty */.Y8G("showNavigationArrows", ctx.showNavigationArrows);
          core/* ɵɵadvance */.R7$(20);
          core/* ɵɵproperty */.Y8G("config", ctx.config);
          core/* ɵɵadvance */.R7$(15);
          core/* ɵɵtextInterpolate1 */.SpI("\u00A9 ", ctx.year, " Velzon. Crafted with ");
        }
      },
      dependencies: [ng_bootstrap/* NgbCarousel */.Oj, ng_bootstrap/* NgbSlide */.bD, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* NgForm */.cV, NgOtpInputComponent, router/* RouterLink */.Wk]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/account/auth/twostep/twostep-routing.module.ts

// Components




const routes = [{
  path: "basic",
  component: BasicComponent
}, {
  path: "cover",
  component: CoverComponent
}];
class TwoStepRoutingModule {
  static {
    this.ɵfac = function TwoStepRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TwoStepRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: TwoStepRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(TwoStepRoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
;// CONCATENATED MODULE: ./src/app/account/auth/twostep/twostep.module.ts



// otp module

// Component




class TwostepModule {
  static {
    this.ɵfac = function TwostepModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TwostepModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: TwostepModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, NgOtpInputModule, TwoStepRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(TwostepModule, {
    declarations: [BasicComponent, CoverComponent],
    imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, fesm2022_forms/* ReactiveFormsModule */.X1, fesm2022_forms/* FormsModule */.YN, NgOtpInputModule, TwoStepRoutingModule]
  });
})();

/***/ })

}]);