"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[755],{

/***/ 44755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LandingModule: () => (/* binding */ LandingModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/common.mjs
var common = __webpack_require__(60177);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2022/core.mjs + 1 modules
var core = __webpack_require__(54438);
// EXTERNAL MODULE: ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs + 60 modules
var ng_bootstrap = __webpack_require__(1109);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2022/router.mjs + 4 modules
var router = __webpack_require__(74710);
// EXTERNAL MODULE: ./src/app/shared/landing/index/client-logo/client-logo.component.ts + 1 modules
var client_logo_component = __webpack_require__(43622);
// EXTERNAL MODULE: ./src/app/shared/landing/index/services/services.component.ts + 1 modules
var services_component = __webpack_require__(94857);
// EXTERNAL MODULE: ./src/app/shared/landing/index/collection/collection.component.ts
var collection_component = __webpack_require__(70977);
// EXTERNAL MODULE: ./src/app/shared/landing/index/cta/cta.component.ts
var cta_component = __webpack_require__(32303);
// EXTERNAL MODULE: ./src/app/shared/landing/index/designed/designed.component.ts
var designed_component = __webpack_require__(84115);
// EXTERNAL MODULE: ./src/app/shared/landing/index/plan/plan.component.ts + 1 modules
var plan_component = __webpack_require__(50720);
// EXTERNAL MODULE: ./src/app/shared/landing/index/faqs/faqs.component.ts
var faqs_component = __webpack_require__(58863);
// EXTERNAL MODULE: ./src/app/shared/landing/index/review/review.component.ts + 1 modules
var review_component = __webpack_require__(85756);
// EXTERNAL MODULE: ./src/app/shared/landing/index/counter/counter.component.ts
var counter_component = __webpack_require__(70707);
// EXTERNAL MODULE: ./src/app/shared/landing/index/work-process/work-process.component.ts + 1 modules
var work_process_component = __webpack_require__(36083);
// EXTERNAL MODULE: ./src/app/shared/landing/index/team/team.component.ts + 1 modules
var team_component = __webpack_require__(62460);
// EXTERNAL MODULE: ./src/app/shared/landing/index/contact/contact.component.ts
var contact_component = __webpack_require__(47219);
// EXTERNAL MODULE: ./src/app/shared/landing/index/footer/footer.component.ts
var footer_component = __webpack_require__(3651);
// EXTERNAL MODULE: ./src/app/shared/scrollspy.directive.ts
var scrollspy_directive = __webpack_require__(53756);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js
var ReplaySubject = __webpack_require__(92771);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/throwError.js
var throwError = __webpack_require__(18810);
;// CONCATENATED MODULE: ./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2020/nicky-lenaers-ngx-scroll-to.mjs





/** Default values for Component Input */
const DEFAULTS = {
  target: null,
  action: 'click',
  duration: 650,
  easing: 'easeInOutQuad',
  offset: 0,
  offsetMap: new Map()
};
/** Easing Colleciton */
const EASING = {
  easeInQuad: time => {
    return time * time;
  },
  easeOutQuad: time => {
    return time * (2 - time);
  },
  easeInOutQuad: time => {
    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
  },
  easeInCubic: time => {
    return time * time * time;
  },
  easeOutCubic: time => {
    return --time * time * time + 1;
  },
  easeInOutCubic: time => {
    return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
  },
  easeInQuart: time => {
    return time * time * time * time;
  },
  easeOutQuart: time => {
    return 1 - --time * time * time * time;
  },
  easeInOutQuart: time => {
    return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time;
  },
  easeInQuint: time => {
    return time * time * time * time * time;
  },
  easeOutQuint: time => {
    return 1 + --time * time * time * time * time;
  },
  easeInOutQuint: time => {
    return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time;
  },
  easeOutElastic: time => {
    return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
  }
};
/**
 * Set of allowed events as triggers
 * for the Animation to start.
 */
const EVENTS = ['click', 'mouseenter', 'mouseover', 'mousedown', 'mouseup', 'dblclick', 'contextmenu', 'wheel', 'mouseleave', 'mouseout'];
/**
 * Strip hash (#) from value.
 *
 * @param value 				The given string value
 * @returns 					The stripped string value
 */
function stripHash(value) {
  return value.substring(0, 1) === '#' ? value.substring(1) : value;
}
/**
 * Test if a given value is a string.
 *
 * @param value 					The given value
 * @returns 						Whether the given value is a string
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
/**
 * Test if a given Element is the Window.
 *
 * @param container 				The given Element
 * @returns 						Whether the given Element is Window
 */
function isWindow(container) {
  return container === window;
}
/**
 * Test if a given value is of type ElementRef.
 *
 * @param value 					The given value
 * @returns               Whether the given value is a number
 */
function isElementRef(value) {
  return value instanceof core/* ElementRef */.aKT;
}
/**
 * Whether or not the given value is a Native Element.
 *
 * @param value           The given value
 * @returns               Whether or not the value is a Native Element
 */
function isNativeElement(value) {
  return value instanceof HTMLElement;
}
/**
 * Test if a given value is type number.
 *
 * @param value 					The given value
 * @returns 						Whether the given value is a number
 */
function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

/** Scroll To Animation */
class ScrollToAnimation {
  /**
   * Class Constructor.
   *
   * @param container            The Container
   * @param listenerTarget       The Element that listens for DOM Events
   * @param isWindow             Whether or not the listener is the Window
   * @param to                   Position to scroll to
   * @param options              Additional options for scrolling
   * @param isBrowser            Whether or not execution runs in the browser
   *                              (as opposed to the server)
   */
  constructor(container, listenerTarget, isWindow, to, options, isBrowser) {
    this.container = container;
    this.listenerTarget = listenerTarget;
    this.isWindow = isWindow;
    this.to = to;
    this.options = options;
    this.isBrowser = isBrowser;
    /** Recursively loop over the Scroll Animation */
    this.loop = () => {
      this.timeLapsed += this.tick;
      this.percentage = this.timeLapsed / this.options.duration;
      this.percentage = this.percentage > 1 ? 1 : this.percentage;
      // Position Update
      this.position = this.startPosition + (this.startPosition - this.to <= 0 ? 1 : -1) * this.distance * EASING[this.options.easing](this.percentage);
      if (this.lastPosition !== null && this.position === this.lastPosition) {
        this.stop();
      } else {
        this.source$.next(this.position);
        this.isWindow ? this.listenerTarget.scrollTo(0, Math.floor(this.position)) : this.container.scrollTop = Math.floor(this.position);
        this.lastPosition = this.position;
      }
    };
    this.tick = 16;
    this.interval = null;
    this.lastPosition = null;
    this.timeLapsed = 0;
    this.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (!this.container) {
      this.startPosition = this.windowScrollTop;
    } else {
      this.startPosition = this.isWindow ? this.windowScrollTop : this.container.scrollTop;
    }
    // Correction for Starting Position of nested HTML Elements
    if (this.container && !this.isWindow) {
      this.to = this.to - this.container.getBoundingClientRect().top + this.startPosition;
    }
    // Set Distance
    const directionalDistance = this.startPosition - this.to;
    this.distance = this.container ? Math.abs(this.startPosition - this.to) : this.to;
    this.mappedOffset = this.options.offset;
    // Set offset from Offset Map
    if (this.isBrowser) {
      this.options.offsetMap.forEach((value, key) => this.mappedOffset = window.innerWidth > key ? value : this.mappedOffset);
    }
    this.distance += this.mappedOffset * (directionalDistance <= 0 ? 1 : -1);
    this.source$ = new ReplaySubject/* ReplaySubject */.m();
  }
  /**
   * Start the new Scroll Animation.
   *
   * @returns         Observable containing a number
   */
  start() {
    clearInterval(this.interval);
    this.interval = setInterval(this.loop, this.tick);
    return this.source$.asObservable();
  }
  /**
   * Stop the current Scroll Animation Loop.
   *
   * @param force          Force to stop the Animation Loop
   * @returns               Void
   */
  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.source$.complete();
  }
}

/**
 * The Scroll To Service handles starting, interrupting
 * and ending the actual Scroll Animation. It provides
 * some utilities to find the proper HTML Element on a
 * given page to setup Event Listeners and calculate
 * distances for the Animation.
 */
class ScrollToService {
  /**
   * Construct and setup required paratemeters.
   *
   * @param document         A Reference to the Document
   * @param platformId       Angular Platform ID
   */
  constructor(document, platformId) {
    this.document = document;
    this.platformId = platformId;
    this.interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
  }
  /**
   * Target an Element to scroll to. Notice that the `TimeOut` decorator
   * ensures the executing to take place in the next Angular lifecycle.
   * This allows for scrolling to elements that are e.g. initially hidden
   * by means of `*ngIf`, but ought to be scrolled to eventually.
   *
   * @todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
   *  - https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
   *
   * @param options         Configuration Object
   * @returns               Observable
   */
  scrollTo(options) {
    if (!(0,common/* isPlatformBrowser */.UE)(this.platformId)) {
      return new ReplaySubject/* ReplaySubject */.m().asObservable();
    }
    return this.start(options);
  }
  /**
   * Start a new Animation.
   *
   * @todo Emit proper events from subscription
   *
   * @param options         Configuration Object
   * @returns               Observable
   */
  start(options) {
    // Merge config with default values
    const mergedConfigOptions = {
      ...DEFAULTS,
      ...options
    };
    if (this.animation) {
      this.animation.stop();
    }
    const targetNode = this.getNode(mergedConfigOptions.target);
    if (mergedConfigOptions.target && !targetNode) {
      return (0,throwError/* throwError */.$)(() => new Error('Unable to find Target Element'));
    }
    const container = this.getContainer(mergedConfigOptions, targetNode);
    if (mergedConfigOptions.container && !container) {
      return (0,throwError/* throwError */.$)(() => new Error('Unable to find Container Element'));
    }
    const listenerTarget = this.getListenerTarget(container) || window;
    let to = container ? container.getBoundingClientRect().top : 0;
    if (targetNode) {
      to = isWindow(listenerTarget) ? window.scrollY + targetNode.getBoundingClientRect().top : targetNode.getBoundingClientRect().top;
    }
    // Create Animation
    this.animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, (0,common/* isPlatformBrowser */.UE)(this.platformId));
    const onInterrupt = () => this.animation.stop();
    this.addInterruptiveEventListeners(listenerTarget, onInterrupt);
    // Start Animation
    const animation$ = this.animation.start();
    this.subscribeToAnimation(animation$, listenerTarget, onInterrupt);
    return animation$;
  }
  /**
   * Subscribe to the events emitted from the Scrolling
   * Animation. Events might be used for e.g. unsubscribing
   * once finished.
   *
   * @param animation$              The Animation Observable
   * @param listenerTarget          The Listener Target for events
   * @param onInterrupt             The handler for Interruptive Events
   * @returns                       Void
   */
  subscribeToAnimation(animation$, listenerTarget, onInterrupt) {
    const subscription = animation$.subscribe({
      complete: () => {
        this.removeInterruptiveEventListeners(this.interruptiveEvents, listenerTarget, onInterrupt);
        subscription.unsubscribe();
      }
    });
  }
  /**
   * Get the container HTML Element in which
   * the scrolling should happen.
   *
   * @param options         The Merged Configuration Object
   * @param targetNode    the targeted HTMLElement
   */
  getContainer(options, targetNode) {
    let container = null;
    if (options.container) {
      container = this.getNode(options.container, true);
    } else if (targetNode) {
      container = this.getFirstScrollableParent(targetNode);
    }
    return container;
  }
  /**
   * Add listeners for the Animation Interruptive Events
   * to the Listener Target.
   *
   * @param events            List of events to listen to
   * @param listenerTarget    Target to attach the listener on
   * @param handler           Handler for when the listener fires
   * @returns                 Void
   */
  addInterruptiveEventListeners(listenerTarget, handler) {
    if (!listenerTarget) {
      listenerTarget = window;
    }
    this.interruptiveEvents.forEach(event => listenerTarget.addEventListener(event, handler, this.supportPassive() ? {
      passive: true
    } : false));
  }
  /**
   * Feature-detect support for passive event listeners.
   *
   * @returns       Whether or not passive event listeners are supported
   */
  supportPassive() {
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: () => {
          supportsPassive = true;
        }
      });
      window.addEventListener('testPassive', null, opts);
      window.removeEventListener('testPassive', null, opts);
    } catch (e) {}
    return supportsPassive;
  }
  /**
   * Remove listeners for the Animation Interrupt Event from
   * the Listener Target. Specifying the correct handler prevents
   * memory leaks and makes the allocated memory available for
   * Garbage Collection.
   *
   * @param events            List of Interruptive Events to remove
   * @param listenerTarget    Target to attach the listener on
   * @param handler           Handler for when the listener fires
   * @returns                 Void
   */
  removeInterruptiveEventListeners(events, listenerTarget, handler) {
    if (!listenerTarget) {
      listenerTarget = window;
    }
    events.forEach(event => listenerTarget.removeEventListener(event, handler));
  }
  /**
   * Find the first scrollable parent Node of a given
   * Element. The DOM Tree gets searched upwards
   * to find this first scrollable parent. Parents might
   * be ignored by CSS styles applied to the HTML Element.
   *
   * @param nativeElement     The Element to search the DOM Tree upwards from
   * @returns                 The first scrollable parent HTML Element
   */
  getFirstScrollableParent(nativeElement) {
    let style = window.getComputedStyle(nativeElement);
    const overflowRegex = /(auto|scroll|overlay)/;
    if (style.position === 'fixed') {
      return null;
    }
    let parent = nativeElement;
    while (parent.parentElement) {
      parent = parent.parentElement;
      style = window.getComputedStyle(parent);
      if (style.position === 'absolute' || style.overflow === 'hidden' || style.overflowY === 'hidden') {
        continue;
      }
      if (overflowRegex.test(style.overflow + style.overflowY) || parent.tagName === 'BODY') {
        return parent;
      }
    }
    return null;
  }
  /**
   * Get the Target Node to scroll to.
   *
   * @param id              The given ID of the node, either a string or
   *                        an element reference
   * @param allowBodyTag    Indicate whether or not the Document Body is
   *                        considered a valid Target Node
   * @returns               The Target Node to scroll to
   */
  getNode(id, allowBodyTag = false) {
    let targetNode;
    if (isString(id)) {
      if (allowBodyTag && (id === 'body' || id === 'BODY')) {
        targetNode = this.document.body;
      } else {
        targetNode = this.document.getElementById(stripHash(id));
      }
    } else if (isNumber(id)) {
      targetNode = this.document.getElementById(String(id));
    } else if (isElementRef(id)) {
      targetNode = id.nativeElement;
    } else if (isNativeElement(id)) {
      targetNode = id;
    }
    return targetNode;
  }
  /**
   * Retrieve the Listener target. This Listener Target is used
   * to attach Event Listeners on. In case of the target being
   * the Document Body, we need the actual `window` to listen
   * for events.
   *
   * @param container           The HTML Container element
   * @returns                   The Listener Target to attach events on
   */
  getListenerTarget(container) {
    if (!container) {
      return null;
    }
    return this.isDocumentBody(container) ? window : container;
  }
  /**
   * Test if a given HTML Element is the Document Body.
   *
   * @param element             The given HTML Element
   * @returns                   Whether or not the Element is the
   *                            Document Body Element
   */
  isDocumentBody(element) {
    return element.tagName.toUpperCase() === 'BODY';
  }
}
ScrollToService.ɵfac = function ScrollToService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ScrollToService)(core/* ɵɵinject */.KVO(common/* DOCUMENT */.qQ), core/* ɵɵinject */.KVO(core/* PLATFORM_ID */.Agw));
};
ScrollToService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.jDH({
  token: ScrollToService,
  factory: ScrollToService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && core/* ɵsetClassMetadata */.rrr(ScrollToService, [{
    type: core/* Injectable */._qm
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: core/* Inject */.y_5,
        args: [common/* DOCUMENT */.qQ]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: core/* Inject */.y_5,
        args: [core/* PLATFORM_ID */.Agw]
      }]
    }];
  }, null);
})();
class ScrollToDirective {
  constructor(elementRef, scrollToService, renderer2) {
    this.elementRef = elementRef;
    this.scrollToService = scrollToService;
    this.renderer2 = renderer2;
    this.ngxScrollTo = DEFAULTS.target;
    this.ngxScrollToEvent = DEFAULTS.action;
    this.ngxScrollToDuration = DEFAULTS.duration;
    this.ngxScrollToEasing = DEFAULTS.easing;
    this.ngxScrollToOffset = DEFAULTS.offset;
    this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
  }
  /**
   * Angular Lifecycle Hook - After View Init
   *
   * @todo Implement Subscription for Events
   *
   * @returns void
   */
  ngAfterViewInit() {
    // Test Event Support
    if (EVENTS.indexOf(this.ngxScrollToEvent) === -1) {
      throw new Error(`Unsupported Event '${this.ngxScrollToEvent}'`);
    }
    // Listen for the trigger...
    this.renderer2.listen(this.elementRef.nativeElement, this.ngxScrollToEvent, event => {
      this.options = {
        target: this.ngxScrollTo,
        duration: this.ngxScrollToDuration,
        easing: this.ngxScrollToEasing,
        offset: this.ngxScrollToOffset,
        offsetMap: this.ngxScrollToOffsetMap
      };
      this.scrollToService.scrollTo(this.options);
    });
  }
}
ScrollToDirective.ɵfac = function ScrollToDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ScrollToDirective)(core/* ɵɵdirectiveInject */.rXU(core/* ElementRef */.aKT), core/* ɵɵdirectiveInject */.rXU(ScrollToService), core/* ɵɵdirectiveInject */.rXU(core/* Renderer2 */.sFG));
};
ScrollToDirective.ɵdir = /* @__PURE__ */core/* ɵɵdefineDirective */.FsC({
  type: ScrollToDirective,
  selectors: [["", "ngxScrollTo", ""]],
  inputs: {
    ngxScrollTo: "ngxScrollTo",
    ngxScrollToEvent: "ngxScrollToEvent",
    ngxScrollToDuration: "ngxScrollToDuration",
    ngxScrollToEasing: "ngxScrollToEasing",
    ngxScrollToOffset: "ngxScrollToOffset",
    ngxScrollToOffsetMap: "ngxScrollToOffsetMap"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && core/* ɵsetClassMetadata */.rrr(ScrollToDirective, [{
    type: core/* Directive */.WLR,
    args: [{
      selector: '[ngxScrollTo]'
    }]
  }], function () {
    return [{
      type: core/* ElementRef */.aKT
    }, {
      type: ScrollToService
    }, {
      type: core/* Renderer2 */.sFG
    }];
  }, {
    ngxScrollTo: [{
      type: core/* Input */.pde
    }],
    ngxScrollToEvent: [{
      type: core/* Input */.pde
    }],
    ngxScrollToDuration: [{
      type: core/* Input */.pde
    }],
    ngxScrollToEasing: [{
      type: core/* Input */.pde
    }],
    ngxScrollToOffset: [{
      type: core/* Input */.pde
    }],
    ngxScrollToOffsetMap: [{
      type: core/* Input */.pde
    }]
  });
})();

/** Scroll To Module */
class ScrollToModule {
  /**
   * Guaranteed singletons for provided Services across App.
   *
   * @return          An Angular Module with Providers
   */
  static forRoot() {
    return {
      ngModule: ScrollToModule,
      providers: [ScrollToService]
    };
  }
}
ScrollToModule.ɵfac = function ScrollToModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ScrollToModule)();
};
ScrollToModule.ɵmod = /* @__PURE__ */core/* ɵɵdefineNgModule */.$C({
  type: ScrollToModule
});
ScrollToModule.ɵinj = /* @__PURE__ */core/* ɵɵdefineInjector */.G2t({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && core/* ɵsetClassMetadata */.rrr(ScrollToModule, [{
    type: core/* NgModule */.UQu,
    args: [{
      declarations: [ScrollToDirective],
      exports: [ScrollToDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-scroll-to
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=nicky-lenaers-ngx-scroll-to.mjs.map
;// CONCATENATED MODULE: ./src/app/landing/index/index.component.ts



















const _c0 = () => ["SECTION"];
const _c1 = a0 => ({
  "active": a0
});
function IndexComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "img", 41);
  }
}
function IndexComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "img", 42);
  }
}
function IndexComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "img", 43);
  }
}
function IndexComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "img", 44);
  }
}
function IndexComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "img", 45);
  }
}
function IndexComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "img", 46);
  }
}
function IndexComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "img", 47);
  }
}
/**
 * Index Component
 */
class IndexComponent {
  constructor() {
    this.currentSection = 'home';
  }
  ngOnInit() {}
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
    } else {
      navbar?.classList.remove('is-sticky');
    }
    // Top Btn Set
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }
  /**
  * Section changed method
  * @param sectionId specify the current sectionID
  */
  onSectionChange(sectionId) {
    this.currentSection = sectionId;
  }
  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarSupportedContent')?.classList.toggle('show');
  }
  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  static {
    this.ɵfac = function IndexComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IndexComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: IndexComponent,
      selectors: [["app-index"]],
      decls: 90,
      vars: 32,
      consts: [["appScrollspy", "", 3, "sectionChange", "spiedTags"], [1, "layout-wrapper", "landing"], ["id", "navbar", 1, "navbar", "navbar-expand-lg", "navbar-landing", "fixed-top", 3, "scroll"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/images/logo-dark.png", "alt", "logo dark", "width", "100%", 1, "card-logo", "card-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "logo light", "width", "100%", 1, "card-logo", "card-logo-light"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "py-0", "fs-20", "text-body", 3, "click"], [1, "mdi", "mdi-menu"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], ["id", "navbar-example", 1, "navbar-nav", "mx-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", "active", 3, "ngClass", "ngxScrollTo"], ["href", "javascript:void(0);", 1, "nav-link", 3, "ngClass", "ngxScrollTo"], [1, ""], ["routerLink", "/signin/basic", 1, "btn", "btn-link", "fw-medium", "text-decoration-none", "text-dark"], ["routerLink", "/signup/basic", 1, "btn", "btn-primary"], ["id", "hero", 1, "section", "pb-0", "hero-section"], [1, "bg-overlay", "bg-overlay-pattern"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-sm-10"], [1, "text-center", "mt-lg-5", "pt-5"], [1, "display-6", "fw-semibold", "mb-3", "lh-base"], [1, "text-success"], [1, "lead", "text-muted", "lh-base"], [1, "d-flex", "gap-2", "justify-content-center", "mt-4"], [1, "ri-arrow-right-line", "align-middle", "ms-1"], ["routerLink", "/pages/pricing", 1, "btn", "btn-danger"], [1, "ri-eye-line", "align-middle", "ms-1"], [1, "mt-4", "mt-sm-5", "pt-sm-5", "mb-sm-n5", "demo-carousel"], [1, "demo-img-patten-top", "d-none", "d-sm-block"], ["src", "assets/images/landing/img-pattern.png", "alt", "...", 1, "d-block", "img-fluid"], [1, "demo-img-patten-bottom", "d-none", "d-sm-block"], [1, "carousel-inner", "shadow-lg", "p-2", "bg-white", "rounded", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [1, "position-absolute", "start-0", "end-0", "bottom-0", "hero-shape-svg"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1440 120"], ["mask", "url(\"#SvgjsMask1003\")", "fill", "none"], ["d", "M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z"], ["id", "back-to-top", 1, "btn", "btn-danger", "btn-icon", "landing-back-top", 3, "click"], [1, "ri-arrow-up-line"], ["src", "assets/images/demos/default.png", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/images/demos/saas.png", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/images/demos/material.png", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/images/demos/minimal.png", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/images/demos/creative.png", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/images/demos/modern.png", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/images/demos/interactive.png", "alt", "...", 1, "d-block", "w-100"]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 0);
          core/* ɵɵlistener */.bIt("sectionChange", function IndexComponent_Template_div_sectionChange_0_listener($event) {
            return ctx.onSectionChange($event);
          });
          core/* ɵɵelementStart */.j41(1, "div", 1)(2, "nav", 2);
          core/* ɵɵlistener */.bIt("scroll", function IndexComponent_Template_nav_scroll_2_listener() {
            return ctx.windowScroll();
          }, false, core/* ɵɵresolveWindow */.tSv);
          core/* ɵɵelementStart */.j41(3, "div", 3)(4, "a", 4);
          core/* ɵɵelement */.nrm(5, "img", 5)(6, "img", 6);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(7, "button", 7);
          core/* ɵɵlistener */.bIt("click", function IndexComponent_Template_button_click_7_listener() {
            return ctx.toggleMenu();
          });
          core/* ɵɵelement */.nrm(8, "i", 8);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(9, "div", 9)(10, "ul", 10)(11, "li", 11)(12, "a", 12);
          core/* ɵɵtext */.EFF(13, "Home");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(14, "li", 11)(15, "a", 13);
          core/* ɵɵtext */.EFF(16, "Services");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(17, "li", 11)(18, "a", 13);
          core/* ɵɵtext */.EFF(19, "Features");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(20, "li", 11)(21, "a", 13);
          core/* ɵɵtext */.EFF(22, "Plans");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(23, "li", 11)(24, "a", 13);
          core/* ɵɵtext */.EFF(25, "Reviews");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(26, "li", 11)(27, "a", 13);
          core/* ɵɵtext */.EFF(28, "Team");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(29, "li", 11)(30, "a", 13);
          core/* ɵɵtext */.EFF(31, "Contact");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(32, "div", 14)(33, "a", 15);
          core/* ɵɵtext */.EFF(34, "Sign in");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(35, "a", 16);
          core/* ɵɵtext */.EFF(36, "Sign Up");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(37, "section", 17);
          core/* ɵɵelement */.nrm(38, "div", 18);
          core/* ɵɵelementStart */.j41(39, "div", 3)(40, "div", 19)(41, "div", 20)(42, "div", 21)(43, "h1", 22);
          core/* ɵɵtext */.EFF(44, "The better way to manage your website with ");
          core/* ɵɵelementStart */.j41(45, "span", 23);
          core/* ɵɵtext */.EFF(46, "Velzon ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(47, "p", 24);
          core/* ɵɵtext */.EFF(48, "Velzon is a fully responsive, multipurpose and premium Bootstrap 5 Admin & Dashboard Template built in multiple frameworks.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(49, "div", 25)(50, "a", 16);
          core/* ɵɵtext */.EFF(51, "Get Started ");
          core/* ɵɵelement */.nrm(52, "i", 26);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(53, "a", 27);
          core/* ɵɵtext */.EFF(54, "View Plans ");
          core/* ɵɵelement */.nrm(55, "i", 28);
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(56, "div", 29)(57, "div", 30);
          core/* ɵɵelement */.nrm(58, "img", 31);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(59, "div", 32);
          core/* ɵɵelement */.nrm(60, "img", 31);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(61, "div", 14)(62, "ngb-carousel", 33);
          core/* ɵɵtemplate */.DNE(63, IndexComponent_ng_template_63_Template, 1, 0, "ng-template", 34)(64, IndexComponent_ng_template_64_Template, 1, 0, "ng-template", 34)(65, IndexComponent_ng_template_65_Template, 1, 0, "ng-template", 34)(66, IndexComponent_ng_template_66_Template, 1, 0, "ng-template", 34)(67, IndexComponent_ng_template_67_Template, 1, 0, "ng-template", 34)(68, IndexComponent_ng_template_68_Template, 1, 0, "ng-template", 34)(69, IndexComponent_ng_template_69_Template, 1, 0, "ng-template", 34);
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(70, "div", 35);
          core/* ɵɵnamespaceSVG */.qSk();
          core/* ɵɵelementStart */.j41(71, "svg", 36)(72, "g", 37);
          core/* ɵɵelement */.nrm(73, "path", 38);
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵnamespaceHTML */.joV();
          core/* ɵɵelement */.nrm(74, "app-client-logo")(75, "app-services")(76, "app-collection")(77, "app-cta")(78, "app-designed")(79, "app-plan")(80, "app-faqs")(81, "app-review")(82, "app-counter")(83, "app-work-process")(84, "app-team")(85, "app-contact")(86, "app-cta")(87, "app-footer");
          core/* ɵɵelementStart */.j41(88, "button", 39);
          core/* ɵɵlistener */.bIt("click", function IndexComponent_Template_button_click_88_listener() {
            return ctx.topFunction();
          });
          core/* ɵɵelement */.nrm(89, "i", 40);
          core/* ɵɵelementEnd */.k0s()()();
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("spiedTags", core/* ɵɵpureFunction0 */.lJ4(17, _c0));
          core/* ɵɵadvance */.R7$(12);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(18, _c1, ctx.currentSection === "hero"))("ngxScrollTo", "#hero");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(20, _c1, ctx.currentSection === "services"))("ngxScrollTo", "#services");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(22, _c1, ctx.currentSection === "features"))("ngxScrollTo", "#features");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(24, _c1, ctx.currentSection === "plans"))("ngxScrollTo", "#plans");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(26, _c1, ctx.currentSection === "reviews"))("ngxScrollTo", "#reviews");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(28, _c1, ctx.currentSection === "team"))("ngxScrollTo", "#team");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(30, _c1, ctx.currentSection === "contact"))("ngxScrollTo", "#contact");
          core/* ɵɵadvance */.R7$(32);
          core/* ɵɵproperty */.Y8G("showNavigationArrows", ctx.showNavigationArrows)("showNavigationIndicators", ctx.showNavigationIndicators);
        }
      },
      dependencies: [common/* NgClass */.YU, ng_bootstrap/* NgbCarousel */.Oj, ng_bootstrap/* NgbSlide */.bD, router/* RouterLink */.Wk, client_logo_component/* ClientLogoComponent */.i, services_component/* ServicesComponent */.K, collection_component/* CollectionComponent */.Q, cta_component/* CtaComponent */.c, designed_component/* DesignedComponent */.D, plan_component/* PlanComponent */.d, faqs_component/* FaqsComponent */.F, review_component/* ReviewComponent */.Y, counter_component/* CounterComponent */.s, work_process_component/* WorkProcessComponent */.i, team_component/* TeamComponent */.X, contact_component/* ContactComponent */.y, footer_component/* FooterComponent */.n, scrollspy_directive/* ScrollspyDirective */.H, ScrollToDirective]
    });
  }
}
// EXTERNAL MODULE: ./src/app/shared/landing/nft/wallet/wallet.component.ts + 1 modules
var wallet_component = __webpack_require__(76931);
// EXTERNAL MODULE: ./src/app/shared/landing/nft/market-place/market-place.component.ts
var market_place_component = __webpack_require__(51069);
// EXTERNAL MODULE: ./src/app/shared/landing/nft/features/features.component.ts + 1 modules
var features_component = __webpack_require__(77345);
// EXTERNAL MODULE: ./src/app/shared/landing/nft/categories/categories.component.ts + 1 modules
var categories_component = __webpack_require__(58944);
// EXTERNAL MODULE: ./src/app/shared/landing/nft/discover/discover.component.ts + 1 modules
var discover_component = __webpack_require__(50159);
// EXTERNAL MODULE: ./src/app/shared/landing/nft/top-creator/top-creator.component.ts + 1 modules
var top_creator_component = __webpack_require__(21982);
;// CONCATENATED MODULE: ./src/app/landing/nft/nft.component.ts














const nft_component_c0 = () => ["SECTION"];
const nft_component_c1 = a0 => ({
  "active": a0
});
/**
 * Nft Component
 */
class NftComponent {
  constructor() {
    this.currentSection = 'home';
    this.isCollapsed = true;
  }
  ngOnInit() {}
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
    } else {
      navbar?.classList.remove('is-sticky');
    }
    // Top Btn Set
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }
  /**
  * Section changed method
  * @param sectionId specify the current sectionID
  */
  onSectionChange(sectionId) {
    this.currentSection = sectionId;
  }
  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarSupportedContent')?.classList.toggle('show');
  }
  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  static {
    this.ɵfac = function NftComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NftComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: NftComponent,
      selectors: [["app-nft"]],
      decls: 60,
      vars: 23,
      consts: [["collapse", "ngbCollapse"], ["appScrollspy", "", 3, "sectionChange", "spiedTags"], [1, "layout-wrapper", "landing"], ["id", "navbar", 1, "navbar", "navbar-expand-lg", "navbar-landing", "navbar-light", "fixed-top", 3, "scroll"], [1, "container"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/images/logo-dark.png", "alt", "logo dark", "height", "17", 1, "card-logo", "card-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "logo light", "height", "17", 1, "card-logo", "card-logo-light"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "py-0", "fs-20", "text-body", 3, "click"], [1, "mdi", "mdi-menu"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], ["id", "navbar-example", 1, "navbar-nav", "mx-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", "active", 3, "ngClass", "ngxScrollTo"], ["href", "javascript:void(0);", 1, "nav-link", 3, "ngClass", "ngxScrollTo"], [1, ""], ["routerLink", "/marletplace/wallet", 1, "btn", "btn-success"], [1, "bg-overlay", "bg-overlay-pattern"], ["id", "hero", 1, "section", "nft-hero"], [1, "bg-overlay"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-sm-10"], [1, "text-center"], [1, "display-4", "fw-medium", "mb-4", "lh-base", "text-white"], [1, "text-success"], [1, "lead", "text-white-50", "lh-base", "mb-4", "pb-2"], [1, "hstack", "gap-2", "justify-content-center"], ["routerLink", "/marletplace/create", 1, "btn", "btn-primary"], [1, "ri-arrow-right-line", "align-middle", "ms-1"], ["routerLink", "/marletplace/explore", 1, "btn", "btn-danger"], ["id", "back-to-top", 1, "btn", "btn-danger", "btn-icon", "landing-back-top", 3, "click"], [1, "ri-arrow-up-line"]],
      template: function NftComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = core/* ɵɵgetCurrentView */.RV6();
          core/* ɵɵelementStart */.j41(0, "div", 1);
          core/* ɵɵlistener */.bIt("sectionChange", function NftComponent_Template_div_sectionChange_0_listener($event) {
            core/* ɵɵrestoreView */.eBV(_r1);
            return core/* ɵɵresetView */.Njj(ctx.onSectionChange($event));
          });
          core/* ɵɵelementStart */.j41(1, "div", 2)(2, "nav", 3);
          core/* ɵɵlistener */.bIt("scroll", function NftComponent_Template_nav_scroll_2_listener() {
            core/* ɵɵrestoreView */.eBV(_r1);
            return core/* ɵɵresetView */.Njj(ctx.windowScroll());
          }, false, core/* ɵɵresolveWindow */.tSv);
          core/* ɵɵelementStart */.j41(3, "div", 4)(4, "a", 5);
          core/* ɵɵelement */.nrm(5, "img", 6)(6, "img", 7);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(7, "button", 8);
          core/* ɵɵlistener */.bIt("click", function NftComponent_Template_button_click_7_listener() {
            core/* ɵɵrestoreView */.eBV(_r1);
            const collapse_r2 = core/* ɵɵreference */.sdS(10);
            return core/* ɵɵresetView */.Njj(collapse_r2.toggle());
          });
          core/* ɵɵelement */.nrm(8, "i", 9);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(9, "div", 10, 0);
          core/* ɵɵtwoWayListener */.mxI("ngbCollapseChange", function NftComponent_Template_div_ngbCollapseChange_9_listener($event) {
            core/* ɵɵrestoreView */.eBV(_r1);
            core/* ɵɵtwoWayBindingSet */.DH7(ctx.isCollapsed, $event) || (ctx.isCollapsed = $event);
            return core/* ɵɵresetView */.Njj($event);
          });
          core/* ɵɵelementStart */.j41(11, "ul", 11)(12, "li", 12)(13, "a", 13);
          core/* ɵɵtext */.EFF(14, "Home");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(15, "li", 12)(16, "a", 14);
          core/* ɵɵtext */.EFF(17, "Wallet");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(18, "li", 12)(19, "a", 14);
          core/* ɵɵtext */.EFF(20, "Marketplace");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(21, "li", 12)(22, "a", 14);
          core/* ɵɵtext */.EFF(23, "Categories");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(24, "li", 12)(25, "a", 14);
          core/* ɵɵtext */.EFF(26, "Creators");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(27, "div", 15)(28, "a", 16);
          core/* ɵɵtext */.EFF(29, "Wallet Connect");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelement */.nrm(30, "div", 17);
          core/* ɵɵelementStart */.j41(31, "section", 18);
          core/* ɵɵelement */.nrm(32, "div", 19);
          core/* ɵɵelementStart */.j41(33, "div", 4)(34, "div", 20)(35, "div", 21)(36, "div", 22)(37, "h1", 23);
          core/* ɵɵtext */.EFF(38, "Discover Digital Art & Collect ");
          core/* ɵɵelementStart */.j41(39, "span", 24);
          core/* ɵɵtext */.EFF(40, "NFT Marketplace");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(41, "p", 25);
          core/* ɵɵtext */.EFF(42, "Can artwork be NFT? NFTs (non-fungible tokens) are one-of-a-kind digital assets. Given they're digital in nature, can physical works of art be turned into NFTs?.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(43, "div", 26)(44, "a", 27);
          core/* ɵɵtext */.EFF(45, "Create Own ");
          core/* ɵɵelement */.nrm(46, "i", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(47, "a", 29);
          core/* ɵɵtext */.EFF(48, "Explore Now ");
          core/* ɵɵelement */.nrm(49, "i", 28);
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelement */.nrm(50, "app-wallet")(51, "app-market-place")(52, "app-features")(53, "app-categories")(54, "app-discover")(55, "app-top-creator")(56, "app-cta")(57, "app-footer");
          core/* ɵɵelementStart */.j41(58, "button", 30);
          core/* ɵɵlistener */.bIt("click", function NftComponent_Template_button_click_58_listener() {
            core/* ɵɵrestoreView */.eBV(_r1);
            return core/* ɵɵresetView */.Njj(ctx.topFunction());
          });
          core/* ɵɵelement */.nrm(59, "i", 31);
          core/* ɵɵelementEnd */.k0s()()();
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("spiedTags", core/* ɵɵpureFunction0 */.lJ4(12, nft_component_c0));
          core/* ɵɵadvance */.R7$(9);
          core/* ɵɵtwoWayProperty */.R50("ngbCollapse", ctx.isCollapsed);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(13, nft_component_c1, ctx.currentSection === "hero"))("ngxScrollTo", "#hero");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(15, nft_component_c1, ctx.currentSection === "wallet"))("ngxScrollTo", "#wallet");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(17, nft_component_c1, ctx.currentSection === "marketplace"))("ngxScrollTo", "#marketplace");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(19, nft_component_c1, ctx.currentSection === "categories"))("ngxScrollTo", "#categories");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(21, nft_component_c1, ctx.currentSection === "creators"))("ngxScrollTo", "#creators");
        }
      },
      dependencies: [common/* NgClass */.YU, router/* RouterLink */.Wk, cta_component/* CtaComponent */.c, footer_component/* FooterComponent */.n, scrollspy_directive/* ScrollspyDirective */.H, wallet_component/* WalletComponent */.B, market_place_component/* MarketPlaceComponent */.d, features_component/* FeaturesComponent */.j, categories_component/* CategoriesComponent */._, discover_component/* DiscoverComponent */.x, top_creator_component/* TopCreatorComponent */.X, ng_bootstrap/* NgbCollapse */.$G, ScrollToDirective]
    });
  }
}
// EXTERNAL MODULE: ./src/app/shared/landing/job/process/process.component.ts
var process_component = __webpack_require__(35168);
// EXTERNAL MODULE: ./src/app/shared/landing/job/findjobs/findjobs.component.ts + 1 modules
var findjobs_component = __webpack_require__(17312);
// EXTERNAL MODULE: ./src/app/shared/landing/job/candidates/candidates.component.ts + 1 modules
var candidates_component = __webpack_require__(60392);
// EXTERNAL MODULE: ./src/app/shared/landing/job/blog/blog.component.ts
var blog_component = __webpack_require__(47270);
// EXTERNAL MODULE: ./src/app/shared/landing/job/jobcategories/jobcategories.component.ts
var jobcategories_component = __webpack_require__(39116);
// EXTERNAL MODULE: ./src/app/shared/landing/job/job-footer/job-footer.component.ts
var job_footer_component = __webpack_require__(88332);
;// CONCATENATED MODULE: ./src/app/landing/job/job.component.ts












const job_component_c0 = () => ["SECTION"];
const job_component_c1 = a0 => ({
  "active": a0
});
class JobComponent {
  constructor() {
    this.currentSection = 'home';
    this.isCollapsed = true;
  }
  ngOnInit() {}
  /**
  * Section changed method
  * @param sectionId specify the current sectionID
  */
  onSectionChange(sectionId) {
    this.currentSection = sectionId;
  }
  /**
    * Window scroll method
    */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
    } else {
      navbar?.classList.remove('is-sticky');
    }
    // Top Btn Set
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  static {
    this.ɵfac = function JobComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JobComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: JobComponent,
      selectors: [["app-job"]],
      decls: 130,
      vars: 27,
      consts: [["collapse", "ngbCollapse"], ["appScrollspy", "", 3, "sectionChange", "spiedTags"], [1, "layout-wrapper", "landing"], ["id", "navbar", 1, "navbar", "navbar-expand-lg", "navbar-landing", "fixed-top", "job-navbar", 3, "scroll"], [1, "container-fluid", "custom-container"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/images/logo-dark.png", "alt", "logo dark", "width", "100%", 1, "card-logo", "card-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "logo light", "width", "100%", 1, "card-logo", "card-logo-light"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "py-0", "fs-20", "text-body", 3, "click"], [1, "mdi", "mdi-menu"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapseChange", "ngbCollapse"], ["id", "navbar-example", 1, "navbar-nav", "mx-auto", "mt-2", "mt-lg-0"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", "active", 3, "ngClass", "ngxScrollTo"], ["href", "javascript:void(0);", 1, "nav-link", 3, "ngClass", "ngxScrollTo"], [1, ""], ["routerLink", "/auth/signin/basic", 1, "btn", "btn-soft-primary"], [1, "ri-user-3-line", "align-bottom", "me-1"], ["id", "hero", 1, "section", "job-hero-section", "bg-light", "pb-0"], [1, "container"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-lg-6"], [1, "display-6", "fw-semibold", "text-capitalize", "mb-3", "lh-base"], [1, "lead", "text-muted", "lh-base", "mb-4"], ["action", "#", 1, "job-panel-filter"], [1, "row", "g-md-0", "g-2"], [1, "col-md-4"], ["type", "search", "id", "job-title", "placeholder", "Job, Company name...", 1, "form-control", "filter-input-box"], ["data-choices", "", 1, "form-control"], ["value", ""], ["value", "Full Time"], ["value", "Part Time"], ["value", "Freelance"], ["value", "Intership"], [1, "h-100"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "w-100", "h-100"], [1, "ri-search-2-line", "align-bottom", "me-1"], [1, "treding-keywords", "list-inline", "mb-0", "mt-3", "fs-13"], [1, "list-inline-item", "text-danger", "fw-semibold"], [1, "mdi", "mdi-tag-multiple-outline", "align-middle"], [1, "list-inline-item"], ["href", "javascript:void(0)"], [1, "col-lg-4"], [1, "position-relative", "home-img", "text-center", "mt-5", "mt-lg-0"], [1, "card", "p-3", "rounded", "shadow-lg", "inquiry-box"], [1, "d-flex", "align-items-center"], [1, "avatar-sm", "flex-shrink-0", "me-3"], [1, "avatar-title", "bg-soft-warning", "text-warning", "rounded", "fs-18"], [1, "ri-mail-send-line"], [1, "fs-15", "lh-base", "mb-0"], [1, "card", "p-3", "rounded", "shadow-lg", "application-box"], [1, "fs-15", "lh-base", "mb-3"], [1, "avatar-group"], ["href", "javascript: void(0);", "data-bs-toggle", "tooltip", "data-bs-trigger", "hover", "data-bs-placement", "top", "ngbTooltip", "Brent Gonzalez", 1, "avatar-group-item"], [1, "avatar-xs"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["href", "javascript: void(0);", "data-bs-toggle", "tooltip", "data-bs-trigger", "hover", "data-bs-placement", "top", "ngbTooltip", "Ellen Smith", 1, "avatar-group-item"], [1, "avatar-title", "rounded-circle", "bg-danger"], ["src", "assets/images/users/avatar-10.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["href", "javascript: void(0);", "data-bs-toggle", "tooltip", "data-bs-trigger", "hover", "data-bs-placement", "top", 1, "avatar-group-item"], [1, "avatar-title", "rounded-circle", "bg-success"], ["href", "javascript: void(0);", "data-bs-toggle", "tooltip", "data-bs-trigger", "hover", "data-bs-placement", "top", "title", "Brent Gonzalez", 1, "avatar-group-item"], ["src", "assets/images/users/avatar-9.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["href", "javascript: void(0);", "data-bs-toggle", "tooltip", "data-bs-trigger", "hover", "data-bs-placement", "top", "title", "More Appliances", 1, "avatar-group-item"], [1, "avatar-title", "fs-13", "rounded-circle", "bg-light", "border-dashed", "border", "text-primary"], ["src", "assets/images/job-profile2.png", "alt", "", 1, "user-img"], [1, "circle-effect"], [1, "circle"], [1, "circle2"], [1, "circle3"], [1, "circle4"], ["id", "back-to-top", 1, "btn", "btn-info", "btn-icon", "landing-back-top", 3, "click"], [1, "ri-arrow-up-line"]],
      template: function JobComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = core/* ɵɵgetCurrentView */.RV6();
          core/* ɵɵelementStart */.j41(0, "div", 1);
          core/* ɵɵlistener */.bIt("sectionChange", function JobComponent_Template_div_sectionChange_0_listener($event) {
            core/* ɵɵrestoreView */.eBV(_r1);
            return core/* ɵɵresetView */.Njj(ctx.onSectionChange($event));
          });
          core/* ɵɵelementStart */.j41(1, "div", 2)(2, "nav", 3);
          core/* ɵɵlistener */.bIt("scroll", function JobComponent_Template_nav_scroll_2_listener() {
            core/* ɵɵrestoreView */.eBV(_r1);
            return core/* ɵɵresetView */.Njj(ctx.windowScroll());
          }, false, core/* ɵɵresolveWindow */.tSv);
          core/* ɵɵelementStart */.j41(3, "div", 4)(4, "a", 5);
          core/* ɵɵelement */.nrm(5, "img", 6)(6, "img", 7);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(7, "button", 8);
          core/* ɵɵlistener */.bIt("click", function JobComponent_Template_button_click_7_listener() {
            core/* ɵɵrestoreView */.eBV(_r1);
            const collapse_r2 = core/* ɵɵreference */.sdS(10);
            return core/* ɵɵresetView */.Njj(collapse_r2.toggle());
          });
          core/* ɵɵelement */.nrm(8, "i", 9);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(9, "div", 10, 0);
          core/* ɵɵtwoWayListener */.mxI("ngbCollapseChange", function JobComponent_Template_div_ngbCollapseChange_9_listener($event) {
            core/* ɵɵrestoreView */.eBV(_r1);
            core/* ɵɵtwoWayBindingSet */.DH7(ctx.isCollapsed, $event) || (ctx.isCollapsed = $event);
            return core/* ɵɵresetView */.Njj($event);
          });
          core/* ɵɵelementStart */.j41(11, "ul", 11)(12, "li", 12)(13, "a", 13);
          core/* ɵɵtext */.EFF(14, "Home");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(15, "li", 12)(16, "a", 14);
          core/* ɵɵtext */.EFF(17, "Process");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(18, "li", 12)(19, "a", 14);
          core/* ɵɵtext */.EFF(20, "Categories");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(21, "li", 12)(22, "a", 14);
          core/* ɵɵtext */.EFF(23, "Find Jobs");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(24, "li", 12)(25, "a", 14);
          core/* ɵɵtext */.EFF(26, "Candidates");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(27, "li", 12)(28, "a", 14);
          core/* ɵɵtext */.EFF(29, "Blog");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(30, "div", 15)(31, "a", 16);
          core/* ɵɵelement */.nrm(32, "i", 17);
          core/* ɵɵtext */.EFF(33, " Login & Register");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(34, "section", 18)(35, "div", 19)(36, "div", 20)(37, "div", 21)(38, "div")(39, "h1", 22);
          core/* ɵɵtext */.EFF(40, "Find your next job and build your dream here");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(41, "p", 23);
          core/* ɵɵtext */.EFF(42, "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of different industries.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(43, "form", 24)(44, "div", 25)(45, "div", 26)(46, "div");
          core/* ɵɵelement */.nrm(47, "input", 27);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(48, "div", 26)(49, "div")(50, "select", 28)(51, "option", 29);
          core/* ɵɵtext */.EFF(52, "Select job type");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(53, "option", 30);
          core/* ɵɵtext */.EFF(54, "Full Time");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(55, "option", 31);
          core/* ɵɵtext */.EFF(56, "Part Time");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(57, "option", 32);
          core/* ɵɵtext */.EFF(58, "Freelance");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(59, "option", 33);
          core/* ɵɵtext */.EFF(60, "Intership");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(61, "div", 26)(62, "div", 34)(63, "button", 35);
          core/* ɵɵelement */.nrm(64, "i", 36);
          core/* ɵɵtext */.EFF(65, " Find Job");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(66, "ul", 37)(67, "li", 38);
          core/* ɵɵelement */.nrm(68, "i", 39);
          core/* ɵɵtext */.EFF(69, " Trending Keywords:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(70, "li", 40)(71, "a", 41);
          core/* ɵɵtext */.EFF(72, "Design,");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(73, "li", 40)(74, "a", 41);
          core/* ɵɵtext */.EFF(75, "Development,");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(76, "li", 40)(77, "a", 41);
          core/* ɵɵtext */.EFF(78, "Manager,");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(79, "li", 40)(80, "a", 41);
          core/* ɵɵtext */.EFF(81, "Senior");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(82, "div", 42)(83, "div", 43)(84, "div", 44)(85, "div", 45)(86, "div", 46)(87, "div", 47);
          core/* ɵɵelement */.nrm(88, "i", 48);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(89, "h5", 49);
          core/* ɵɵtext */.EFF(90, "Work Inquiry from velzon");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(91, "div", 50)(92, "h5", 51);
          core/* ɵɵtext */.EFF(93, "Applications");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(94, "div", 52)(95, "a", 53)(96, "div", 54);
          core/* ɵɵelement */.nrm(97, "img", 55);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(98, "a", 56)(99, "div", 54)(100, "div", 57);
          core/* ɵɵtext */.EFF(101, " S ");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(102, "a", 56)(103, "div", 54);
          core/* ɵɵelement */.nrm(104, "img", 58);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(105, "a", 59)(106, "div", 54)(107, "div", 60);
          core/* ɵɵtext */.EFF(108, " Z ");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(109, "a", 61)(110, "div", 54);
          core/* ɵɵelement */.nrm(111, "img", 62);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(112, "a", 63)(113, "div", 54)(114, "div", 64);
          core/* ɵɵtext */.EFF(115, " 2k+ ");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelement */.nrm(116, "img", 65);
          core/* ɵɵelementStart */.j41(117, "div", 66);
          core/* ɵɵelement */.nrm(118, "div", 67)(119, "div", 68)(120, "div", 69)(121, "div", 70);
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelement */.nrm(122, "app-process")(123, "app-jobcategories")(124, "app-findjobs")(125, "app-candidates")(126, "app-blog")(127, "app-job-footer");
          core/* ɵɵelementStart */.j41(128, "button", 71);
          core/* ɵɵlistener */.bIt("click", function JobComponent_Template_button_click_128_listener() {
            core/* ɵɵrestoreView */.eBV(_r1);
            return core/* ɵɵresetView */.Njj(ctx.topFunction());
          });
          core/* ɵɵelement */.nrm(129, "i", 72);
          core/* ɵɵelementEnd */.k0s()()();
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("spiedTags", core/* ɵɵpureFunction0 */.lJ4(14, job_component_c0));
          core/* ɵɵadvance */.R7$(9);
          core/* ɵɵtwoWayProperty */.R50("ngbCollapse", ctx.isCollapsed);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(15, job_component_c1, ctx.currentSection === "hero"))("ngxScrollTo", "#hero");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(17, job_component_c1, ctx.currentSection === "process"))("ngxScrollTo", "#process");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(19, job_component_c1, ctx.currentSection === "categories"))("ngxScrollTo", "#categories");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(21, job_component_c1, ctx.currentSection === "findJob"))("ngxScrollTo", "#findJob");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(23, job_component_c1, ctx.currentSection === "candidates"))("ngxScrollTo", "#candidates");
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(25, job_component_c1, ctx.currentSection === "blog"))("ngxScrollTo", "#blog");
        }
      },
      dependencies: [common/* NgClass */.YU, router/* RouterLink */.Wk, scrollspy_directive/* ScrollspyDirective */.H, process_component/* ProcessComponent */.N, findjobs_component/* FindjobsComponent */.$, candidates_component/* CandidatesComponent */.w, blog_component/* BlogComponent */.Y, jobcategories_component/* JobcategoriesComponent */.R, job_footer_component/* JobFooterComponent */._, ng_bootstrap/* NgbTooltip */.md, ng_bootstrap/* NgbCollapse */.$G, ScrollToDirective]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/landing/landing-routing.module.ts

// Component Pages





const routes = [{
  path: "",
  component: IndexComponent
}, {
  path: "nft",
  component: NftComponent
}, {
  path: "job",
  component: JobComponent
}];
class LandingRoutingModule {
  static {
    this.ɵfac = function LandingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LandingRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: LandingRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(LandingRoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 1 modules
var shared_module = __webpack_require__(49801);
;// CONCATENATED MODULE: ./src/app/landing/landing.module.ts










class LandingModule {
  static {
    this.ɵfac = function LandingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LandingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: LandingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, LandingRoutingModule, shared_module/* SharedModule */.G, ng_bootstrap/* NgbTooltipModule */.n8, ng_bootstrap/* NgbCollapseModule */.HC, ScrollToModule.forRoot()]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(LandingModule, {
    declarations: [IndexComponent, NftComponent, JobComponent],
    imports: [common/* CommonModule */.MD, ng_bootstrap/* NgbCarouselModule */.wA, LandingRoutingModule, shared_module/* SharedModule */.G, ng_bootstrap/* NgbTooltipModule */.n8, ng_bootstrap/* NgbCollapseModule */.HC, ScrollToModule]
  });
})();

/***/ })

}]);