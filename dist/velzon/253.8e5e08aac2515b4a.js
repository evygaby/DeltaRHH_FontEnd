"use strict";
(self["webpackChunkvelzon"] = self["webpackChunkvelzon"] || []).push([[253],{

/***/ 85253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ExtraspagesModule: () => (/* binding */ ExtraspagesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2022/common.mjs
var common = __webpack_require__(60177);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2022/forms.mjs
var fesm2022_forms = __webpack_require__(89417);
// EXTERNAL MODULE: ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs + 60 modules
var ng_bootstrap = __webpack_require__(1109);
// EXTERNAL MODULE: ./node_modules/@ng-select/ng-select/fesm2020/ng-select-ng-select.mjs
var ng_select_ng_select = __webpack_require__(78708);
// EXTERNAL MODULE: ./node_modules/angularx-flatpickr/fesm2020/angularx-flatpickr.mjs
var angularx_flatpickr = __webpack_require__(70792);
// EXTERNAL MODULE: ./node_modules/angular-feather/fesm2020/angular-feather.mjs
var angular_feather = __webpack_require__(34126);
// EXTERNAL MODULE: ./node_modules/angular-feather/fesm2020/angular-feather-icons.mjs
var angular_feather_icons = __webpack_require__(77243);
// EXTERNAL MODULE: ./node_modules/lord-icon-element/index.js + 12 modules
var lord_icon_element = __webpack_require__(88136);
// EXTERNAL MODULE: ./node_modules/lottie-web/build/player/lottie.js
var lottie = __webpack_require__(98982);
var lottie_default = /*#__PURE__*/__webpack_require__.n(lottie);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2022/router.mjs + 4 modules
var router = __webpack_require__(74710);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2022/core.mjs + 1 modules
var core = __webpack_require__(54438);
// EXTERNAL MODULE: ./src/app/shared/breadcrumbs/breadcrumbs.component.ts
var breadcrumbs_component = __webpack_require__(26364);
;// CONCATENATED MODULE: ./src/app/pages/extrapages/starter/starter.component.ts


/**
 * Starter Component
 */
class StarterComponent {
  constructor() {}
  ngOnInit() {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [{
      label: 'Pages'
    }, {
      label: 'Starter',
      active: true
    }];
  }
  static {
    this.ɵfac = function StarterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StarterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: StarterComponent,
      selectors: [["app-starter"]],
      decls: 1,
      vars: 1,
      consts: [["title", "Starter", 3, "breadcrumbItems"]],
      template: function StarterComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelement */.nrm(0, "app-breadcrumbs", 0);
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("breadcrumbItems", ctx.breadCrumbItems);
        }
      },
      dependencies: [breadcrumbs_component/* BreadcrumbsComponent */.m]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/profile/profile/data.ts
/**
 * Project List Data
 */
const projectList = [{
  title: "Chat App Update",
  updatedTime: '2 year Ago',
  badgeText: 'Inprogress',
  badgeClass: 'warning',
  member: [{
    img: 'assets/images/users/avatar-1.jpg'
  }, {
    img: 'assets/images/users/avatar-3.jpg'
  }, {
    text: 'J',
    variant: 'bg-light text-primary'
  }],
  cardBorderColor: 'warning'
}, {
  title: "ABC Project Customization",
  updatedTime: "2 month Ago",
  badgeText: "Progress",
  badgeClass: "primary",
  member: [{
    img: 'assets/images/users/avatar-8.jpg'
  }, {
    img: 'assets/images/users/avatar-7.jpg'
  }, {
    img: 'assets/images/users/avatar-6.jpg'
  }, {
    text: '2+',
    variant: 'bg-primary'
  }],
  cardBorderColor: "success"
}, {
  title: "Client - Frank Hook",
  updatedTime: "1 hr Ago",
  badgeText: "New",
  badgeClass: "info",
  member: [{
    img: 'assets/images/users/avatar-4.jpg'
  }, {
    text: 'M',
    variant: 'bg-light text-primary'
  }, {
    img: 'assets/images/users/avatar-3.jpg'
  }],
  cardBorderColor: "info"
}, {
  title: "Velzon Project",
  updatedTime: "11 hr Ago",
  badgeText: "Completed",
  badgeClass: "warning",
  member: [{
    img: 'assets/images/users/avatar-7.jpg'
  }, {
    img: 'assets/images/users/avatar-5.jpg'
  }],
  cardBorderColor: "info"
}, {
  title: "Brand Logo Design",
  updatedTime: "10 min Ago",
  badgeText: "New",
  badgeClass: "info",
  member: [{
    img: 'assets/images/users/avatar-7.jpg'
  }, {
    img: 'assets/images/users/avatar-6.jpg'
  }, {
    text: 'E',
    variant: 'bg-light text-primary'
  }],
  cardBorderColor: "danger"
}, {
  title: "Brand Logo Design",
  updatedTime: "10 min Ago",
  badgeText: "New",
  badgeClass: "info",
  member: [{
    img: 'assets/images/users/avatar-7.jpg'
  }, {
    img: 'assets/images/users/avatar-6.jpg'
  }, {
    text: 'R',
    variant: 'bg-light text-primary'
  }],
  cardBorderColor: "danger"
}, {
  title: "Project Update",
  updatedTime: "48 min Ago",
  badgeText: "Inprogress",
  badgeClass: "warning",
  member: [{
    img: 'assets/images/users/avatar-4.jpg'
  }, {
    img: 'assets/images/users/avatar-5.jpg'
  }, {
    img: 'assets/images/users/avatar-6.jpg'
  }],
  cardBorderColor: "warning"
}, {
  title: "Client - Jennifer",
  updatedTime: "30 min Ago",
  badgeText: "Process",
  badgeClass: "primary",
  member: [{
    img: 'assets/images/users/avatar-1.jpg'
  }],
  cardBorderColor: "success"
}, {
  title: "Business Template -UI/UX design",
  updatedTime: "7 month Ago",
  badgeText: "Completed",
  badgeClass: "success",
  member: [{
    img: 'assets/images/users/avatar-1.jpg'
  }, {
    img: 'assets/images/users/avatar-3.jpg'
  }, {
    text: '2+',
    variant: 'bg-primary'
  }],
  cardBorderColor: "info"
}, {
  title: "Update Project",
  updatedTime: "1 month Ago",
  badgeText: "New",
  badgeClass: "info",
  member: [{
    img: 'assets/images/users/avatar-7.jpg'
  }],
  cardBorderColor: "success"
}, {
  title: "Bank Management System",
  updatedTime: "10 month Ago",
  badgeText: "Completed",
  badgeClass: "success",
  member: [{
    img: 'assets/images/users/avatar-7.jpg'
  }, {
    img: 'assets/images/users/avatar-6.jpg'
  }, {
    text: '2+',
    variant: 'bg-primary'
  }],
  cardBorderColor: "danger"
}, {
  title: "PSD to HTML Convert",
  updatedTime: "29 min Ago",
  badgeText: "New",
  badgeClass: "info",
  member: [{
    img: 'assets/images/users/avatar-7.jpg'
  }],
  cardBorderColor: "primary"
}];
/**
 * Document Data
 */
const data_document = [{
  id: 1,
  icon: "ri-file-zip-fill",
  iconBackgroundClass: "primary",
  fileName: "Artboard-documents.zip",
  fileType: "Zip File",
  fileSize: "4.57 MB",
  updatedDate: "12 Dec 2021"
}, {
  id: 2,
  icon: "ri-file-pdf-fill",
  iconBackgroundClass: "danger",
  fileName: "Bank Management System",
  fileType: "PDF File",
  fileSize: "8.89 MB",
  updatedDate: "24 Nov 2021"
}, {
  id: 3,
  icon: "ri-video-line",
  iconBackgroundClass: "secondary",
  fileName: "Tour-video.mp4",
  fileType: "MP4 File",
  fileSize: "14.62 MB",
  updatedDate: "19 Nov 2021"
}, {
  id: 4,
  icon: "ri-file-excel-fill",
  iconBackgroundClass: "secondary",
  fileName: "Tour-video.mp4",
  fileType: "XSL File",
  fileSize: "2.38 KB",
  updatedDate: "14 Nov 2021"
}, {
  id: 5,
  icon: "ri-folder-line",
  iconBackgroundClass: "info",
  fileName: "Project Screenshots Collection",
  fileType: "Folder File",
  fileSize: "87.24 MB",
  updatedDate: "08 Nov 2021"
}, {
  id: 6,
  icon: "ri-image-2-fill",
  iconBackgroundClass: "danger",
  fileName: "Velzon-logo.png",
  fileType: "PNG File",
  fileSize: "879 KB",
  updatedDate: "02 Nov 2021"
}];

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(84412);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(21413);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/of.js
var of = __webpack_require__(7673);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/tap.js
var tap = __webpack_require__(88141);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js
var debounceTime = __webpack_require__(70152);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/switchMap.js
var switchMap = __webpack_require__(25558);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/delay.js + 2 modules
var delay = __webpack_require__(91986);
;// CONCATENATED MODULE: ./src/app/pages/extrapages/profile/profile/profile.service.ts





const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(countries, column, direction) {
  if (direction === '' || column === '') {
    return countries;
  } else {
    return [...countries].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}
function matches(country, term, pipe) {
  return country.title.toLowerCase().includes(term.toLowerCase());
}
class ProfileService {
  constructor(pipe) {
    this.pipe = pipe;
    this._loading$ = new BehaviorSubject/* BehaviorSubject */.t(true);
    this._search$ = new Subject/* Subject */.B();
    this._countries$ = new BehaviorSubject/* BehaviorSubject */.t([]);
    this._total$ = new BehaviorSubject/* BehaviorSubject */.t(0);
    this._state = {
      page: 1,
      pageSize: 8,
      searchTerm: '',
      sortColumn: '',
      sortDirection: '',
      startIndex: 0,
      endIndex: 9,
      totalRecords: 0
    };
    this._search$.pipe((0,tap/* tap */.M)(() => this._loading$.next(true)), (0,debounceTime/* debounceTime */.B)(200), (0,switchMap/* switchMap */.n)(() => this._search()), (0,delay/* delay */.c)(200), (0,tap/* tap */.M)(() => this._loading$.next(false))).subscribe(result => {
      this._countries$.next(result.countries);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  get countries$() {
    return this._countries$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  get startIndex() {
    return this._state.startIndex;
  }
  get endIndex() {
    return this._state.endIndex;
  }
  get totalRecords() {
    return this._state.totalRecords;
  }
  set page(page) {
    this._set({
      page
    });
  }
  set pageSize(pageSize) {
    this._set({
      pageSize
    });
  }
  set searchTerm(searchTerm) {
    this._set({
      searchTerm
    });
  }
  set sortColumn(sortColumn) {
    this._set({
      sortColumn
    });
  }
  set sortDirection(sortDirection) {
    this._set({
      sortDirection
    });
  }
  set startIndex(startIndex) {
    this._set({
      startIndex
    });
  }
  set endIndex(endIndex) {
    this._set({
      endIndex
    });
  }
  set totalRecords(totalRecords) {
    this._set({
      totalRecords
    });
  }
  _set(patch) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  _search() {
    const {
      sortColumn,
      sortDirection,
      pageSize,
      page,
      searchTerm
    } = this._state;
    // 1. sort
    let countries = sort(projectList, sortColumn, sortDirection);
    // 2. filter
    countries = countries.filter(country => matches(country, searchTerm, this.pipe));
    const total = countries.length;
    // 3. paginate
    this.totalRecords = countries.length;
    this._state.startIndex = (page - 1) * this.pageSize + 1;
    this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    countries = countries.slice(this._state.startIndex - 1, this._state.endIndex);
    return (0,of.of)({
      countries,
      total
    });
  }
  static {
    this.ɵfac = function ProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileService)(core/* ɵɵinject */.KVO(common/* DecimalPipe */.QX));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/core/* ɵɵdefineInjectable */.jDH({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/profile/profile/profile-sortable.directive.ts


const rotate = {
  'asc': 'desc',
  'desc': '',
  '': 'asc'
};
class NgbdProfileSortableHeader {
  constructor() {
    this.sortable = '';
    this.direction = '';
    this.sort = new core/* EventEmitter */.bkB();
  }
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({
      column: this.sortable,
      direction: this.direction
    });
  }
  static {
    this.ɵfac = function NgbdProfileSortableHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgbdProfileSortableHeader)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/core/* ɵɵdefineDirective */.FsC({
      type: NgbdProfileSortableHeader,
      selectors: [["th", "sortable", ""]],
      hostVars: 4,
      hostBindings: function NgbdProfileSortableHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵlistener */.bIt("click", function NgbdProfileSortableHeader_click_HostBindingHandler() {
            return ctx.rotate();
          });
        }
        if (rf & 2) {
          core/* ɵɵclassProp */.AVh("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
        }
      },
      inputs: {
        sortable: "sortable",
        direction: "direction"
      },
      outputs: {
        sort: "sort"
      }
    });
  }
}
// EXTERNAL MODULE: ./src/app/core/services/token-storage.service.ts
var token_storage_service = __webpack_require__(87413);
;// CONCATENATED MODULE: ./src/app/pages/extrapages/profile/profile/profile.component.ts











function ProfileComponent_ng_template_46_a_68_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "a", 135);
    core/* ɵɵtext */.EFF(1);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵtextInterpolate */.JRh(skill_r1);
  }
}
function ProfileComponent_ng_template_46_ng_template_213_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "div", 136);
  }
}
function ProfileComponent_ng_template_46_ng_template_217_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "div", 136);
  }
}
function ProfileComponent_ng_template_46_ng_template_221_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */.nrm(0, "div", 136);
  }
}
function ProfileComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 22)(1, "div", 39)(2, "div", 40)(3, "div", 41)(4, "h5", 42);
    core/* ɵɵtext */.EFF(5, "Complete Your Profile");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(6, "div", 43)(7, "div", 44)(8, "div", 45);
    core/* ɵɵtext */.EFF(9, "30%");
    core/* ɵɵelementEnd */.k0s()()()()();
    core/* ɵɵelementStart */.j41(10, "div", 40)(11, "div", 41)(12, "h5", 46);
    core/* ɵɵtext */.EFF(13, "Info");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(14, "div", 47)(15, "table", 48)(16, "tbody")(17, "tr")(18, "th", 49);
    core/* ɵɵtext */.EFF(19, "Full Name :");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(20, "td", 50);
    core/* ɵɵtext */.EFF(21);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(22, "tr")(23, "th", 49);
    core/* ɵɵtext */.EFF(24, "Mobile :");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(25, "td", 50);
    core/* ɵɵtext */.EFF(26);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(27, "tr")(28, "th", 49);
    core/* ɵɵtext */.EFF(29, "E-mail :");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(30, "td", 50);
    core/* ɵɵtext */.EFF(31);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(32, "tr")(33, "th", 49);
    core/* ɵɵtext */.EFF(34, "Location :");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(35, "td", 50);
    core/* ɵɵtext */.EFF(36);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(37, "tr")(38, "th", 49);
    core/* ɵɵtext */.EFF(39, "Joining Date");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(40, "td", 50);
    core/* ɵɵtext */.EFF(41);
    core/* ɵɵelementEnd */.k0s()()()()()()();
    core/* ɵɵelementStart */.j41(42, "div", 40)(43, "div", 41)(44, "h5", 51);
    core/* ɵɵtext */.EFF(45, "Portfolio");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(46, "div", 52)(47, "div")(48, "a", 53)(49, "span", 54);
    core/* ɵɵelement */.nrm(50, "i", 55);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(51, "div")(52, "a", 53)(53, "span", 56);
    core/* ɵɵelement */.nrm(54, "i", 57);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(55, "div")(56, "a", 53)(57, "span", 58);
    core/* ɵɵelement */.nrm(58, "i", 59);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(59, "div")(60, "a", 53)(61, "span", 60);
    core/* ɵɵelement */.nrm(62, "i", 61);
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(63, "div", 40)(64, "div", 41)(65, "h5", 51);
    core/* ɵɵtext */.EFF(66, "Skills");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(67, "div", 62);
    core/* ɵɵtemplate */.DNE(68, ProfileComponent_ng_template_46_a_68_Template, 2, 1, "a", 63);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(69, "div", 40)(70, "div", 41)(71, "div", 64)(72, "div", 65)(73, "h5", 66);
    core/* ɵɵtext */.EFF(74, "Suggestions");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(75, "div", 34)(76, "div", 67)(77, "a", 68);
    core/* ɵɵelement */.nrm(78, "i", 69);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(79, "ul", 70)(80, "li")(81, "a", 71);
    core/* ɵɵtext */.EFF(82, "View");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(83, "li")(84, "a", 71);
    core/* ɵɵtext */.EFF(85, "Edit");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(86, "li")(87, "a", 71);
    core/* ɵɵtext */.EFF(88, "Delete");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(89, "div")(90, "div", 72)(91, "div", 73);
    core/* ɵɵelement */.nrm(92, "img", 74);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(93, "div", 65)(94, "div")(95, "h5", 75);
    core/* ɵɵtext */.EFF(96, "Esther James");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(97, "p", 76);
    core/* ɵɵtext */.EFF(98, "Frontend Developer");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(99, "div", 77)(100, "button", 78);
    core/* ɵɵelement */.nrm(101, "i", 79);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(102, "div", 72)(103, "div", 73);
    core/* ɵɵelement */.nrm(104, "img", 80);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(105, "div", 65)(106, "div")(107, "h5", 75);
    core/* ɵɵtext */.EFF(108, "Jacqueline Steve");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(109, "p", 76);
    core/* ɵɵtext */.EFF(110, "UI/UX Designer");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(111, "div", 77)(112, "button", 78);
    core/* ɵɵelement */.nrm(113, "i", 79);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(114, "div", 72)(115, "div", 73);
    core/* ɵɵelement */.nrm(116, "img", 81);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(117, "div", 65)(118, "div")(119, "h5", 75);
    core/* ɵɵtext */.EFF(120, "George Whalen");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(121, "p", 76);
    core/* ɵɵtext */.EFF(122, "Backend Developer");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(123, "div", 77)(124, "button", 78);
    core/* ɵɵelement */.nrm(125, "i", 79);
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(126, "div", 40)(127, "div", 41)(128, "div", 64)(129, "div", 65)(130, "h5", 66);
    core/* ɵɵtext */.EFF(131, "Popular Posts");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(132, "div", 34)(133, "div", 67)(134, "a", 82);
    core/* ɵɵelement */.nrm(135, "i", 69);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(136, "ul", 83)(137, "li")(138, "a", 71);
    core/* ɵɵtext */.EFF(139, "View");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(140, "li")(141, "a", 71);
    core/* ɵɵtext */.EFF(142, "Edit");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(143, "li")(144, "a", 71);
    core/* ɵɵtext */.EFF(145, "Delete");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(146, "div", 84)(147, "div", 34);
    core/* ɵɵelement */.nrm(148, "img", 85);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(149, "div", 86)(150, "a", 87)(151, "h6", 88);
    core/* ɵɵtext */.EFF(152, "Design your apps in your own way ");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(153, "p", 89);
    core/* ɵɵtext */.EFF(154, "15 Dec 2021");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(155, "div", 84)(156, "div", 34);
    core/* ɵɵelement */.nrm(157, "img", 90);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(158, "div", 86)(159, "a", 87)(160, "h6", 88);
    core/* ɵɵtext */.EFF(161, "Smartest Applications for Business");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(162, "p", 89);
    core/* ɵɵtext */.EFF(163, "28 Nov 2021");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(164, "div", 24)(165, "div", 34);
    core/* ɵɵelement */.nrm(166, "img", 91);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(167, "div", 86)(168, "a", 87)(169, "h6", 88);
    core/* ɵɵtext */.EFF(170, "How to get creative in your work ");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(171, "p", 89);
    core/* ɵɵtext */.EFF(172, "21 Nov 2021");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(173, "div", 92)(174, "div", 40)(175, "div", 41)(176, "h5", 46);
    core/* ɵɵtext */.EFF(177, "About");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(178, "p");
    core/* ɵɵtext */.EFF(179);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(180, "div", 22)(181, "div", 93)(182, "div", 94)(183, "div", 95)(184, "div", 96);
    core/* ɵɵelement */.nrm(185, "i", 97);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(186, "div", 98)(187, "p", 99);
    core/* ɵɵtext */.EFF(188, "Designation :");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(189, "h6", 100);
    core/* ɵɵtext */.EFF(190);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(191, "div", 93)(192, "div", 94)(193, "div", 95)(194, "div", 96);
    core/* ɵɵelement */.nrm(195, "i", 101);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(196, "div", 98)(197, "p", 99);
    core/* ɵɵtext */.EFF(198, "Website :");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(199, "a", 102);
    core/* ɵɵtext */.EFF(200);
    core/* ɵɵelementEnd */.k0s()()()()()()();
    core/* ɵɵelementStart */.j41(201, "div", 22)(202, "div", 23)(203, "div", 40)(204, "div", 103)(205, "h4", 104);
    core/* ɵɵtext */.EFF(206, "Recent Activity");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(207, "div", 105)(208, "ul", 106, 0)(210, "li", 26)(211, "a", 27);
    core/* ɵɵtext */.EFF(212, " Today ");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtemplate */.DNE(213, ProfileComponent_ng_template_46_ng_template_213_Template, 1, 0, "ng-template", 30);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(214, "li", 26)(215, "a", 27);
    core/* ɵɵtext */.EFF(216, " Weekly ");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtemplate */.DNE(217, ProfileComponent_ng_template_46_ng_template_217_Template, 1, 0, "ng-template", 30);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(218, "li", 26)(219, "a", 27);
    core/* ɵɵtext */.EFF(220, " Monthly ");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtemplate */.DNE(221, ProfileComponent_ng_template_46_ng_template_221_Template, 1, 0, "ng-template", 30);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(222, "div", 41)(223, "div", 107);
    core/* ɵɵelement */.nrm(224, "div", 38);
    core/* ɵɵelementEnd */.k0s()()()()();
    core/* ɵɵelementStart */.j41(225, "div", 40)(226, "div", 41)(227, "h5", 108);
    core/* ɵɵtext */.EFF(228, "Projects");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(229, "div", 109)(230, "div", 110)(231, "div", 111)(232, "div", 112)(233, "div", 113)(234, "div", 24)(235, "div", 114)(236, "h5", 115)(237, "a", 116);
    core/* ɵɵtext */.EFF(238, "ABC Project Customization");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(239, "p", 117);
    core/* ɵɵtext */.EFF(240, " Last Update : ");
    core/* ɵɵelementStart */.j41(241, "span", 118);
    core/* ɵɵtext */.EFF(242, "4 hr Ago");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(243, "div", 77)(244, "div", 119);
    core/* ɵɵtext */.EFF(245, " Inprogress");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(246, "div", 94)(247, "div", 65)(248, "div", 120)(249, "div")(250, "h5", 121);
    core/* ɵɵtext */.EFF(251, " Members :");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(252, "div", 122)(253, "div", 123)(254, "div", 124);
    core/* ɵɵelement */.nrm(255, "img", 125);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(256, "div", 123)(257, "div", 124);
    core/* ɵɵelement */.nrm(258, "img", 126);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(259, "div", 123)(260, "div", 124)(261, "div", 127);
    core/* ɵɵtext */.EFF(262, " A ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(263, "div", 123)(264, "div", 124);
    core/* ɵɵelement */.nrm(265, "img", 128);
    core/* ɵɵelementEnd */.k0s()()()()()()()()();
    core/* ɵɵelementStart */.j41(266, "div", 111)(267, "div", 129)(268, "div", 113)(269, "div", 24)(270, "div", 114)(271, "h5", 115)(272, "a", 116);
    core/* ɵɵtext */.EFF(273, "Client - John");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(274, "p", 117);
    core/* ɵɵtext */.EFF(275, " Last Update : ");
    core/* ɵɵelementStart */.j41(276, "span", 118);
    core/* ɵɵtext */.EFF(277, "1 hr Ago");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(278, "div", 77)(279, "div", 130);
    core/* ɵɵtext */.EFF(280, " Completed");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(281, "div", 94)(282, "div", 65)(283, "div", 120)(284, "div")(285, "h5", 121);
    core/* ɵɵtext */.EFF(286, " Members :");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(287, "div", 122)(288, "div", 123)(289, "div", 124);
    core/* ɵɵelement */.nrm(290, "img", 128);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(291, "div", 123)(292, "div", 124)(293, "div", 127);
    core/* ɵɵtext */.EFF(294, " C ");
    core/* ɵɵelementEnd */.k0s()()()()()()()()()();
    core/* ɵɵelementStart */.j41(295, "div", 111)(296, "div", 131)(297, "div", 113)(298, "div", 24)(299, "div", 114)(300, "h5", 115)(301, "a", 116);
    core/* ɵɵtext */.EFF(302, "Brand logo Design");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(303, "p", 117);
    core/* ɵɵtext */.EFF(304, " Last Update : ");
    core/* ɵɵelementStart */.j41(305, "span", 118);
    core/* ɵɵtext */.EFF(306, "2 hr Ago");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(307, "div", 77)(308, "div", 119);
    core/* ɵɵtext */.EFF(309, " Inprogress");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(310, "div", 94)(311, "div", 65)(312, "div", 120)(313, "div")(314, "h5", 121);
    core/* ɵɵtext */.EFF(315, " Members :");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(316, "div", 122)(317, "div", 123)(318, "div", 124);
    core/* ɵɵelement */.nrm(319, "img", 126);
    core/* ɵɵelementEnd */.k0s()()()()()()()()();
    core/* ɵɵelementStart */.j41(320, "div", 111)(321, "div", 129)(322, "div", 113)(323, "div", 24)(324, "div", 114)(325, "h5", 115)(326, "a", 116);
    core/* ɵɵtext */.EFF(327, "Project update");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(328, "p", 117);
    core/* ɵɵtext */.EFF(329, " Last Update : ");
    core/* ɵɵelementStart */.j41(330, "span", 118);
    core/* ɵɵtext */.EFF(331, "4 hr Ago");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(332, "div", 77)(333, "div", 130);
    core/* ɵɵtext */.EFF(334, " Completed");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(335, "div", 94)(336, "div", 65)(337, "div", 120)(338, "div")(339, "h5", 121);
    core/* ɵɵtext */.EFF(340, " Members :");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(341, "div", 122)(342, "div", 123)(343, "div", 124);
    core/* ɵɵelement */.nrm(344, "img", 125);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(345, "div", 123)(346, "div", 124);
    core/* ɵɵelement */.nrm(347, "img", 126);
    core/* ɵɵelementEnd */.k0s()()()()()()()()();
    core/* ɵɵelementStart */.j41(348, "div", 111)(349, "div", 132)(350, "div", 113)(351, "div", 24)(352, "div", 114)(353, "h5", 115)(354, "a", 116);
    core/* ɵɵtext */.EFF(355, "Chat App");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(356, "p", 117);
    core/* ɵɵtext */.EFF(357, " Last Update : ");
    core/* ɵɵelementStart */.j41(358, "span", 118);
    core/* ɵɵtext */.EFF(359, "1 hr Ago");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(360, "div", 77)(361, "div", 119);
    core/* ɵɵtext */.EFF(362, " Inprogress");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(363, "div", 94)(364, "div", 65)(365, "div", 120)(366, "div")(367, "h5", 121);
    core/* ɵɵtext */.EFF(368, " Members :");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(369, "div", 122)(370, "div", 123)(371, "div", 124);
    core/* ɵɵelement */.nrm(372, "img", 125);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(373, "div", 123)(374, "div", 124);
    core/* ɵɵelement */.nrm(375, "img", 126);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(376, "div", 123)(377, "div", 124)(378, "div", 127);
    core/* ɵɵtext */.EFF(379, " A ");
    core/* ɵɵelementEnd */.k0s()()()()()()()()()()();
    core/* ɵɵelement */.nrm(380, "div", 133)(381, "div", 134);
    core/* ɵɵelementEnd */.k0s()()()()();
  }
  if (rf & 2) {
    const customNav_r2 = core/* ɵɵreference */.sdS(209);
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$(21);
    core/* ɵɵtextInterpolate2 */.Lme("", ctx_r2.userData.first_name, " ", ctx_r2.userData.last_name, "");
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate */.JRh(ctx_r2.userData.phone);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate */.JRh(ctx_r2.userData.email);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate2 */.Lme("", ctx_r2.userData.city, ", ", ctx_r2.userData.country, "");
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate */.JRh(ctx_r2.userData.joining_date);
    core/* ɵɵadvance */.R7$(27);
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r2.userData.skills);
    core/* ɵɵadvance */.R7$(111);
    core/* ɵɵtextInterpolate */.JRh(ctx_r2.userData.Description);
    core/* ɵɵadvance */.R7$(11);
    core/* ɵɵtextInterpolate */.JRh(ctx_r2.userData.designation);
    core/* ɵɵadvance */.R7$(10);
    core/* ɵɵtextInterpolate */.JRh(ctx_r2.userData.website);
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵproperty */.Y8G("activeId", 1);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵproperty */.Y8G("ngbNavItem", 1);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵproperty */.Y8G("ngbNavItem", 2);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵproperty */.Y8G("ngbNavItem", 3);
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵproperty */.Y8G("ngbNavOutlet", customNav_r2);
  }
}
function ProfileComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 40)(1, "div", 41)(2, "h5", 46);
    core/* ɵɵtext */.EFF(3, "Activities");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(4, "div", 137)(5, "div", 138)(6, "div", 34);
    core/* ɵɵelement */.nrm(7, "img", 139);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(8, "div", 140)(9, "h6", 99);
    core/* ɵɵtext */.EFF(10, "Oliver Phillips ");
    core/* ɵɵelementStart */.j41(11, "span", 141);
    core/* ɵɵtext */.EFF(12, "New");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(13, "p", 142);
    core/* ɵɵtext */.EFF(14, "We talked about a project on linkedin.");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(15, "small", 143);
    core/* ɵɵtext */.EFF(16, "Today");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(17, "div", 144)(18, "div", 145)(19, "div", 146);
    core/* ɵɵtext */.EFF(20, " N ");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(21, "div", 140)(22, "h6", 99);
    core/* ɵɵtext */.EFF(23, "Nancy Martino ");
    core/* ɵɵelementStart */.j41(24, "span", 147);
    core/* ɵɵtext */.EFF(25, "In Progress");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(26, "p", 142);
    core/* ɵɵelement */.nrm(27, "i", 148);
    core/* ɵɵtext */.EFF(28, " Create new project Buildng product");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(29, "div", 149)(30, "a", 150);
    core/* ɵɵelement */.nrm(31, "img", 151);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(32, "a", 152);
    core/* ɵɵelement */.nrm(33, "img", 153);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(34, "a", 154)(35, "div", 124)(36, "div", 127);
    core/* ɵɵtext */.EFF(37, " R ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(38, "a", 155)(39, "div", 124)(40, "div", 156);
    core/* ɵɵtext */.EFF(41, " 2+ ");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(42, "small", 143);
    core/* ɵɵtext */.EFF(43, "Yesterday");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(44, "div", 144)(45, "div", 34);
    core/* ɵɵelement */.nrm(46, "img", 157);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(47, "div", 140)(48, "h6", 99);
    core/* ɵɵtext */.EFF(49, "Natasha Carey ");
    core/* ɵɵelementStart */.j41(50, "span", 158);
    core/* ɵɵtext */.EFF(51, "Completed");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(52, "p", 142);
    core/* ɵɵtext */.EFF(53, "Adding a new event with attachments");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(54, "div", 22)(55, "div", 159)(56, "div", 160)(57, "div", 161);
    core/* ɵɵelement */.nrm(58, "img", 162);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(59, "div", 161);
    core/* ɵɵelement */.nrm(60, "img", 163);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(61, "div", 161);
    core/* ɵɵelement */.nrm(62, "img", 164);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(63, "small", 143);
    core/* ɵɵtext */.EFF(64, "25 Nov");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(65, "div", 144)(66, "div", 34);
    core/* ɵɵelement */.nrm(67, "img", 165);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(68, "div", 140)(69, "h6", 99);
    core/* ɵɵtext */.EFF(70, "Bethany Johnson");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(71, "p", 142);
    core/* ɵɵtext */.EFF(72, "added a new member to velzon dashboard");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(73, "small", 143);
    core/* ɵɵtext */.EFF(74, "19 Nov");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(75, "div", 144)(76, "div", 34)(77, "div", 166)(78, "div", 167);
    core/* ɵɵelement */.nrm(79, "i", 168);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(80, "div", 140)(81, "h6", 99);
    core/* ɵɵtext */.EFF(82, "Your order is placed ");
    core/* ɵɵelementStart */.j41(83, "span", 169);
    core/* ɵɵtext */.EFF(84, "Out of Delivery");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(85, "p", 142);
    core/* ɵɵtext */.EFF(86, "These customers can rest assured their order has been placed.");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(87, "small", 143);
    core/* ɵɵtext */.EFF(88, "16 Nov");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(89, "div", 144)(90, "div", 34);
    core/* ɵɵelement */.nrm(91, "img", 170);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(92, "div", 140)(93, "h6", 99);
    core/* ɵɵtext */.EFF(94, "Lewis Pratt");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(95, "p", 142);
    core/* ɵɵtext */.EFF(96, "They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. ");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(97, "small", 143);
    core/* ɵɵtext */.EFF(98, "22 Oct");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(99, "div", 144)(100, "div", 34)(101, "div", 166)(102, "div", 171);
    core/* ɵɵelement */.nrm(103, "i", 172);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(104, "div", 140)(105, "h6", 99);
    core/* ɵɵtext */.EFF(106, "Monthly sales report");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(107, "p", 142)(108, "span", 173);
    core/* ɵɵtext */.EFF(109, "2 days left");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(110, " notification to submit the monthly sales report. ");
    core/* ɵɵelementStart */.j41(111, "a", 174);
    core/* ɵɵtext */.EFF(112, "Reports Builder");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(113, "small", 143);
    core/* ɵɵtext */.EFF(114, "15 Oct");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(115, "div", 138)(116, "div", 34);
    core/* ɵɵelement */.nrm(117, "img", 175);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(118, "div", 140)(119, "h6", 99);
    core/* ɵɵtext */.EFF(120, "New ticket received ");
    core/* ɵɵelementStart */.j41(121, "span", 158);
    core/* ɵɵtext */.EFF(122, "Completed");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(123, "p", 142);
    core/* ɵɵtext */.EFF(124, "User ");
    core/* ɵɵelementStart */.j41(125, "span", 176);
    core/* ɵɵtext */.EFF(126, "Erica245");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(127, " submitted a ticket.");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(128, "small", 143);
    core/* ɵɵtext */.EFF(129, "26 Aug");
    core/* ɵɵelementEnd */.k0s()()()()()();
  }
}
function ProfileComponent_ng_template_58_div_3_div_22_a_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "a", 186)(1, "div", 124)(2, "div");
    core/* ɵɵtext */.EFF(3);
    core/* ɵɵelementEnd */.k0s()()();
  }
  if (rf & 2) {
    const user_r5 = core/* ɵɵnextContext */.XpG().$implicit;
    core/* ɵɵpropertyInterpolate */.FS9("ngbTooltip", user_r5.name);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵclassMapInterpolate1 */.ZvI("avatar-title rounded-circle ", user_r5.variant, "");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵtextInterpolate1 */.SpI(" ", user_r5.text, " ");
  }
}
function ProfileComponent_ng_template_58_div_3_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 187);
    core/* ɵɵelement */.nrm(1, "img", 188);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const user_r5 = core/* ɵɵnextContext */.XpG().$implicit;
    core/* ɵɵpropertyInterpolate */.FS9("ngbTooltip", user_r5.name);
    core/* ɵɵadvance */.R7$();
    core/* ɵɵpropertyInterpolate */.FS9("src", user_r5.img, core/* ɵɵsanitizeUrl */.B4B);
  }
}
function ProfileComponent_ng_template_58_div_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 123);
    core/* ɵɵtemplate */.DNE(1, ProfileComponent_ng_template_58_div_3_div_22_a_1_Template, 4, 5, "a", 184)(2, ProfileComponent_ng_template_58_div_3_div_22_div_2_Template, 2, 2, "div", 185);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", !user_r5.img);
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", user_r5.img);
  }
}
function ProfileComponent_ng_template_58_div_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 181)(1, "div")(2, "div", 113)(3, "div", 24)(4, "div", 114)(5, "h5", 182)(6, "a", 116);
    core/* ɵɵtext */.EFF(7);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(8, "p", 117);
    core/* ɵɵtext */.EFF(9, "Last Update : ");
    core/* ɵɵelementStart */.j41(10, "span", 118);
    core/* ɵɵtext */.EFF(11);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(12, "div", 77)(13, "div");
    core/* ɵɵtext */.EFF(14);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(15, "div", 94)(16, "div", 65)(17, "div", 120)(18, "div")(19, "h5", 121);
    core/* ɵɵtext */.EFF(20, "Members :");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(21, "div", 122);
    core/* ɵɵtemplate */.DNE(22, ProfileComponent_ng_template_58_div_3_div_22_Template, 3, 2, "div", 183);
    core/* ɵɵelementEnd */.k0s()()()()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("card profile-project-card shadow-none profile-project-", data_r6.cardBorderColor, "");
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate */.JRh(data_r6.title);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r6.updatedTime);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵclassMapInterpolate1 */.ZvI("badge badge-soft-", data_r6.badgeClass, " fs-10");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵtextInterpolate1 */.SpI(" ", data_r6.badgeText, "");
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵproperty */.Y8G("ngForOf", data_r6.member);
  }
}
function ProfileComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 40)(1, "div", 41)(2, "div", 22);
    core/* ɵɵtemplate */.DNE(3, ProfileComponent_ng_template_58_div_3_Template, 23, 10, "div", 177);
    core/* ɵɵpipe */.nI1(4, "async");
    core/* ɵɵelementStart */.j41(5, "div", 23)(6, "div", 178)(7, "ul", 179)(8, "ngb-pagination", 180);
    core/* ɵɵpipe */.nI1(9, "async");
    core/* ɵɵtwoWayListener */.mxI("pageChange", function ProfileComponent_ng_template_58_Template_ngb_pagination_pageChange_8_listener($event) {
      core/* ɵɵrestoreView */.eBV(_r4);
      const ctx_r2 = core/* ɵɵnextContext */.XpG();
      core/* ɵɵtwoWayBindingSet */.DH7(ctx_r2.service.page, $event) || (ctx_r2.service.page = $event);
      return core/* ɵɵresetView */.Njj($event);
    });
    core/* ɵɵelementEnd */.k0s()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵproperty */.Y8G("ngForOf", core/* ɵɵpipeBind1 */.bMT(4, 4, ctx_r2.ListJsList));
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵproperty */.Y8G("collectionSize", core/* ɵɵpipeBind1 */.bMT(9, 6, ctx_r2.total));
    core/* ɵɵtwoWayProperty */.R50("page", ctx_r2.service.page);
    core/* ɵɵproperty */.Y8G("pageSize", ctx_r2.service.pageSize);
  }
}
function ProfileComponent_ng_template_64_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "tr", 200)(1, "td")(2, "div", 201)(3, "div", 202)(4, "div");
    core/* ɵɵelement */.nrm(5, "i");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(6, "div", 203)(7, "h6", 204)(8, "a", 205);
    core/* ɵɵtext */.EFF(9);
    core/* ɵɵelementEnd */.k0s()()()()();
    core/* ɵɵelementStart */.j41(10, "td");
    core/* ɵɵtext */.EFF(11);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(12, "td");
    core/* ɵɵtext */.EFF(13);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(14, "td");
    core/* ɵɵtext */.EFF(15);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(16, "td")(17, "div", 67)(18, "a", 206);
    core/* ɵɵelement */.nrm(19, "i", 207);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(20, "ul", 208)(21, "li")(22, "a", 71);
    core/* ɵɵelement */.nrm(23, "i", 209);
    core/* ɵɵtext */.EFF(24, "View");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(25, "li")(26, "a", 71);
    core/* ɵɵelement */.nrm(27, "i", 210);
    core/* ɵɵtext */.EFF(28, "Download");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelement */.nrm(29, "li", 211);
    core/* ɵɵelementStart */.j41(30, "li")(31, "a", 212);
    core/* ɵɵlistener */.bIt("click", function ProfileComponent_ng_template_64_tr_27_Template_a_click_31_listener() {
      const data_r8 = core/* ɵɵrestoreView */.eBV(_r7).$implicit;
      const ctx_r2 = core/* ɵɵnextContext */.XpG(2);
      const deleteModel_r9 = core/* ɵɵreference */.sdS(72);
      return core/* ɵɵresetView */.Njj(ctx_r2.confirm(deleteModel_r9, data_r8.id));
    });
    core/* ɵɵelement */.nrm(32, "i", 213);
    core/* ɵɵtext */.EFF(33, "Delete");
    core/* ɵɵelementEnd */.k0s()()()()()();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    core/* ɵɵpropertyInterpolate1 */.Mz_("id", "lj_", data_r8.id, "");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate2 */.STu("avatar-title bg-soft-", data_r8.iconBackgroundClass, " text-", data_r8.iconBackgroundClass, " rounded fs-20");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMap */.HbH(data_r8.icon);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r8.fileName);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate */.JRh(data_r8.fileType);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate */.JRh(data_r8.fileSize);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate */.JRh(data_r8.updatedDate);
  }
}
function ProfileComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 40)(1, "div", 41)(2, "div", 64)(3, "h5", 189);
    core/* ɵɵtext */.EFF(4, "Documents");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(5, "div", 34);
    core/* ɵɵelement */.nrm(6, "input", 190);
    core/* ɵɵelementStart */.j41(7, "label", 191);
    core/* ɵɵelement */.nrm(8, "i", 192);
    core/* ɵɵtext */.EFF(9, " Upload File");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(10, "div", 22)(11, "div", 23)(12, "div", 47)(13, "table", 193)(14, "thead", 194)(15, "tr")(16, "th", 195);
    core/* ɵɵtext */.EFF(17, "File Name");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(18, "th", 195);
    core/* ɵɵtext */.EFF(19, "Type");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(20, "th", 195);
    core/* ɵɵtext */.EFF(21, "Size");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(22, "th", 195);
    core/* ɵɵtext */.EFF(23, "Upload Date");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(24, "th", 195);
    core/* ɵɵtext */.EFF(25, "Action");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(26, "tbody");
    core/* ɵɵtemplate */.DNE(27, ProfileComponent_ng_template_64_tr_27_Template, 34, 13, "tr", 196);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(28, "div", 197)(29, "a", 198);
    core/* ɵɵelement */.nrm(30, "i", 199);
    core/* ɵɵtext */.EFF(31, " Load more ");
    core/* ɵɵelementEnd */.k0s()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$(27);
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r2.document);
  }
}
function ProfileComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 214)(1, "div", 215)(2, "button", 216);
    core/* ɵɵlistener */.bIt("click", function ProfileComponent_ng_template_71_Template_button_click_2_listener() {
      const modal_r11 = core/* ɵɵrestoreView */.eBV(_r10).$implicit;
      return core/* ɵɵresetView */.Njj(modal_r11.dismiss("Cross click"));
    });
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(3, "div", 217)(4, "div", 218);
    core/* ɵɵelement */.nrm(5, "lord-icon", 219);
    core/* ɵɵelementStart */.j41(6, "div", 220)(7, "h4");
    core/* ɵɵtext */.EFF(8, "You are about to delete a order ?");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(9, "p", 221);
    core/* ɵɵtext */.EFF(10, "Deleting your order will remove all of your information from our database.");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(11, "div", 222)(12, "button", 223);
    core/* ɵɵlistener */.bIt("click", function ProfileComponent_ng_template_71_Template_button_click_12_listener() {
      const modal_r11 = core/* ɵɵrestoreView */.eBV(_r10).$implicit;
      return core/* ɵɵresetView */.Njj(modal_r11.close("Close click"));
    });
    core/* ɵɵelement */.nrm(13, "i", 224);
    core/* ɵɵtext */.EFF(14, " Close");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(15, "button", 225);
    core/* ɵɵlistener */.bIt("click", function ProfileComponent_ng_template_71_Template_button_click_15_listener() {
      core/* ɵɵrestoreView */.eBV(_r10);
      const ctx_r2 = core/* ɵɵnextContext */.XpG();
      return core/* ɵɵresetView */.Njj(ctx_r2.deleteData(ctx_r2.deleteId));
    })("click", function ProfileComponent_ng_template_71_Template_button_click_15_listener() {
      const modal_r11 = core/* ɵɵrestoreView */.eBV(_r10).$implicit;
      return core/* ɵɵresetView */.Njj(modal_r11.close("Close click"));
    });
    core/* ɵɵtext */.EFF(16, "Yes, Delete It!");
    core/* ɵɵelementEnd */.k0s()()()();
  }
}
/**
 * Profile Component
 */
class ProfileComponent {
  constructor(formBuilder, modalService, TokenStorageService, service) {
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.TokenStorageService = TokenStorageService;
    this.service = service;
    /**
     * Swiper setting
     */
    this.config = {
      slidesPerView: 1,
      initialSlide: 0,
      spaceBetween: 25,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    };
    this.ListJsList = service.countries$;
    this.total = service.total$;
  }
  ngOnInit() {
    this.userData = this.TokenStorageService.getUser();
    /**
     * Fetches the data
     */
    this.fetchData();
  }
  /**
   * Fetches the data
   */
  fetchData() {
    this.document = data_document;
  }
  confirm(content, id) {
    this.deleteId = id;
    this.modalService.open(content, {
      centered: true
    });
  }
  // Delete Data
  deleteData(id) {}
  static {
    this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileComponent)(core/* ɵɵdirectiveInject */.rXU(fesm2022_forms/* UntypedFormBuilder */.ze), core/* ɵɵdirectiveInject */.rXU(ng_bootstrap/* NgbModal */.Bq), core/* ɵɵdirectiveInject */.rXU(token_storage_service/* TokenStorageService */.I), core/* ɵɵdirectiveInject */.rXU(ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      viewQuery: function ProfileComponent_Query(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵviewQuery */.GBs(NgbdProfileSortableHeader, 5);
        }
        if (rf & 2) {
          let _t;
          core/* ɵɵqueryRefresh */.mGM(_t = core/* ɵɵloadQuery */.lsd()) && (ctx.headers = _t);
        }
      },
      features: [core/* ɵɵProvidersFeature */.Jv_([ProfileService, common/* DecimalPipe */.QX])],
      decls: 73,
      vars: 11,
      consts: [["customNav", "ngbNav"], ["deleteModel", ""], [1, "profile-foreground", "position-relative", "mx-n4", "mt-n4"], [1, "profile-wid-bg"], ["src", "assets/images/profile-bg.jpg", "alt", "", 1, "profile-wid-img"], [1, "pt-4", "mb-4", "mb-lg-3", "pb-lg-4"], [1, "row", "g-4"], [1, "col-auto"], [1, "avatar-lg"], ["src", "assets/images/users/avatar-1.jpg", "alt", "user-img", 1, "img-thumbnail", "rounded-circle"], [1, "col"], [1, "p-2"], [1, "text-white", "mb-1"], [1, "text-white-75"], [1, "hstack", "text-white-50", "gap-1"], [1, "me-2"], [1, "ri-map-pin-user-line", "me-1", "text-white-75", "fs-16", "align-middle"], [1, "ri-building-line", "me-1", "text-white-75", "fs-16", "align-middle"], [1, "col-12", "col-lg-auto", "order-last", "order-lg-0"], [1, "row", "text", "text-white-50", "text-center"], [1, "col-lg-6", "col-4"], [1, "fs-14", "mb-0"], [1, "row"], [1, "col-lg-12"], [1, "d-flex"], ["ngbNav", "", "role", "tablist", 1, "nav", "nav-pills", "animation-nav", "profile-nav", "gap-2", "gap-lg-3", "flex-grow-1", 3, "activeId"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", 1, "nav-link"], [1, "ri-airplay-fill", "d-inline-block", "d-md-none"], [1, "d-none", "d-md-inline-block"], ["ngbNavContent", ""], [1, "ri-list-unordered", "d-inline-block", "d-md-none"], [1, "ri-price-tag-line", "d-inline-block", "d-md-none"], [1, "ri-folder-4-line", "d-inline-block", "d-md-none"], [1, "flex-shrink-0"], ["routerLink", "/pages/profile-setting", 1, "btn", "btn-success"], [1, "ri-edit-box-line", "align-bottom"], [1, "tab-content", "pt-4", "text-muted"], [3, "ngbNavOutlet"], [1, "col-xxl-3"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-5"], [1, "progress", "animated-progess", "custom-progress", "progress-label"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "30%"], [1, "label"], [1, "card-title", "mb-3"], [1, "table-responsive"], [1, "table", "table-borderless", "mb-0"], ["scope", "row", 1, "ps-0"], [1, "text-muted"], [1, "card-title", "mb-4"], [1, "d-flex", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", 1, "avatar-xs", "d-block"], [1, "avatar-title", "rounded-circle", "fs-16", "bg-dark", "text-light"], [1, "ri-github-fill"], [1, "avatar-title", "rounded-circle", "fs-16", "bg-primary"], [1, "ri-global-fill"], [1, "avatar-title", "rounded-circle", "fs-16", "bg-success"], [1, "ri-dribbble-fill"], [1, "avatar-title", "rounded-circle", "fs-16", "bg-danger"], [1, "ri-pinterest-fill"], [1, "d-flex", "flex-wrap", "gap-2", "fs-15"], ["href", "javascript:void(0);", "class", "badge badge-soft-primary", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-4"], [1, "flex-grow-1"], [1, "card-title", "mb-0"], ["ngbDropdown", "", 1, "dropdown"], ["href", "javascript:void(0);", "role", "button", "id", "dropdownMenuLink2", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "arrow-none"], [1, "ri-more-2-fill", "fs-14"], ["aria-labelledby", "dropdownMenuLink2", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "d-flex", "align-items-center", "py-3"], [1, "avatar-xs", "flex-shrink-0", "me-3"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "fs-14", "mb-1"], [1, "fs-13", "text-muted", "mb-0"], [1, "flex-shrink-0", "ms-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-success"], [1, "ri-user-add-line", "align-middle"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], ["href", "javascript:void(0);", "role", "button", "id", "dropdownMenuLink1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "arrow-none"], ["aria-labelledby", "dropdownMenuLink1", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "d-flex", "mb-4"], ["src", "assets/images/small/img-4.jpg", "alt", "", "height", "50", 1, "rounded"], [1, "flex-grow-1", "ms-3", "overflow-hidden"], ["href", "javascript:void(0);"], [1, "text-truncate", "fs-14"], [1, "text-muted", "mb-0"], ["src", "assets/images/small/img-5.jpg", "alt", "", "height", "50", 1, "rounded"], ["src", "assets/images/small/img-6.jpg", "alt", "", "height", "50", 1, "rounded"], [1, "col-xxl-9"], [1, "col-6", "col-md-4"], [1, "d-flex", "mt-4"], [1, "flex-shrink-0", "avatar-xs", "align-self-center", "me-3"], [1, "avatar-title", "bg-light", "rounded-circle", "fs-16", "text-primary"], [1, "ri-user-2-fill"], [1, "flex-grow-1", "overflow-hidden"], [1, "mb-1"], [1, "text-truncate", "mb-0"], [1, "ri-global-line"], ["href", "javascript:void(0);", 1, "fw-semibold"], [1, "card-header", "align-items-center", "d-flex"], [1, "card-title", "mb-0", "me-2"], [1, "flex-shrink-0", "ms-auto"], ["ngbNav", "", "role", "tablist", 1, "nav", "justify-content-end", "nav-tabs-custom", "rounded", "card-header-tabs", "border-bottom-0", 3, "activeId"], [1, "tab-content", "text-muted"], [1, "card-title"], [1, "swiper", "project-swiper", "mt-n4"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "card", "profile-project-card", "shadow-none", "profile-project-success", "mb-0"], [1, "card-body", "p-4"], [1, "flex-grow-1", "text-muted", "overflow-hidden"], [1, "fs-14", "text-truncate", "mb-1"], ["href", "javascript:void(0);", 1, "text-dark"], [1, "text-muted", "text-truncate", "mb-0"], [1, "fw-semibold", "text-dark"], [1, "badge", "badge-soft-warning", "fs-10"], [1, "d-flex", "align-items-center", "gap-2"], [1, "fs-12", "text-muted", "mb-0"], [1, "avatar-group"], [1, "avatar-group-item"], [1, "avatar-xs"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], [1, "avatar-title", "rounded-circle", "bg-light", "text-primary"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "rounded-circle", "img-fluid"], [1, "card", "profile-project-card", "shadow-none", "profile-project-danger", "mb-0"], [1, "badge", "badge-soft-success", "fs-10"], [1, "card", "profile-project-card", "shadow-none", "profile-project-info", "mb-0"], [1, "card", "profile-project-card", "shadow-none", "profile-project-warning", "mb-0"], [1, "swiper-button-next"], [1, "swiper-button-prev"], ["href", "javascript:void(0);", 1, "badge", "badge-soft-primary"], [1, "profile-timeline", "order-status"], [1, "acitivity-timeline"], [1, "acitivity-item", "d-flex"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "avatar-xs", "rounded-circle", "acitivity-avatar"], [1, "flex-grow-1", "ms-3"], [1, "badge", "bg-soft-primary", "text-primary", "align-middle"], [1, "text-muted", "mb-2"], [1, "mb-0", "text-muted"], [1, "acitivity-item", "py-3", "d-flex"], [1, "flex-shrink-0", "avatar-xs", "acitivity-avatar"], [1, "avatar-title", "bg-soft-success", "text-success", "rounded-circle"], [1, "badge", "bg-soft-secondary", "text-secondary", "align-middle"], [1, "ri-file-text-line", "align-middle", "ms-2"], [1, "avatar-group", "mb-2"], ["href", "javascript: void(0);", "ngbTooltip", "Christi", "placement", "top", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "Christi", 1, "avatar-group-item"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["href", "javascript: void(0);", "ngbTooltip", "Frank Hook", "placement", "top", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "Frank Hook", 1, "avatar-group-item"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["href", "javascript: void(0);", "ngbTooltip", "Ruby", "placement", "top", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", " Ruby", 1, "avatar-group-item"], ["href", "javascript: void(0);", "ngbTooltip", "more", "placement", "top", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "more", 1, "avatar-group-item"], [1, "avatar-title", "rounded-circle"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "avatar-xs", "rounded-circle", "acitivity-avatar"], [1, "badge", "bg-soft-success", "text-success", "align-middle"], [1, "col-xxl-4"], [1, "row", "border", "border-dashed", "gx-2", "p-2", "mb-2"], [1, "col-4"], ["src", "assets/images/small/img-2.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/small/img-3.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/small/img-4.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/users/avatar-6.jpg", "alt", "", 1, "avatar-xs", "rounded-circle", "acitivity-avatar"], [1, "avatar-xs", "acitivity-avatar"], [1, "avatar-title", "rounded-circle", "bg-soft-danger", "text-danger"], [1, "ri-shopping-bag-line"], [1, "badge", "bg-soft-danger", "text-danger", "align-middle", "ms-1"], ["src", "assets/images/users/avatar-7.jpg", "alt", "", 1, "avatar-xs", "rounded-circle", "acitivity-avatar"], [1, "avatar-title", "rounded-circle", "bg-soft-info", "text-info"], [1, "ri-line-chart-line"], [1, "text-danger"], ["href", "javascript:void(0);", 1, "link-warning", "text-decoration-underline"], ["src", "assets/images/users/avatar-8.jpg", "alt", "", 1, "avatar-xs", "rounded-circle", "acitivity-avatar"], [1, "text-secondary"], ["class", "col-xxl-3 col-sm-6", 4, "ngFor", "ngForOf"], [1, "mt-4"], [1, "pagination", "pagination-separated", "justify-content-center", "mb-0"], [3, "pageChange", "collectionSize", "page", "pageSize"], [1, "col-xxl-3", "col-sm-6"], [1, "fs-14", "text-truncate"], ["class", "avatar-group-item", 4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", "class", "d-block", "placement", "top", 3, "ngbTooltip", 4, "ngIf"], ["class", "avatar-xs", "placement", "top", 3, "ngbTooltip", 4, "ngIf"], ["href", "javascript: void(0);", "placement", "top", 1, "d-block", 3, "ngbTooltip"], ["placement", "top", 1, "avatar-xs", 3, "ngbTooltip"], ["alt", "", 1, "rounded-circle", "img-fluid", 3, "src"], [1, "card-title", "flex-grow-1", "mb-0"], ["type", "file", "id", "formFile", 1, "form-control", "d-none"], ["for", "formFile", 1, "btn", "btn-danger"], [1, "ri-upload-2-fill", "me-1", "align-bottom"], [1, "table", "table-borderless", "align-middle", "mb-0"], [1, "table-light"], ["scope", "col"], [3, "id", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-3"], ["href", "javascript:void(0);", 1, "text-success"], [1, "mdi", "mdi-loading", "mdi-spin", "fs-20", "align-middle", "me-2"], [3, "id"], [1, "d-flex", "align-items-center"], [1, "avatar-sm"], [1, "ms-3", "flex-grow-1"], [1, "fs-15", "mb-0"], ["href", "javascript:void(0)"], ["href", "javascript:void(0);", "id", "dropdownMenuLink15", "data-bs-toggle", "dropdown", "aria-expanded", "true", "ngbDropdownToggle", "", 1, "btn", "btn-light", "btn-icon", "arrow-none"], [1, "ri-equalizer-fill"], ["aria-labelledby", "dropdownMenuLink15", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "ri-eye-fill", "me-2", "align-middle", "text-muted"], [1, "ri-download-2-fill", "me-2", "align-middle", "text-muted"], [1, "dropdown-divider"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "ri-delete-bin-5-line", "me-2", "align-middle", "text-muted"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", "id", "btn-close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mt-2", "text-center"], ["src", "https://cdn.lordicon.com/gsqxdxog.json", "trigger", "loop", "colors", "primary:#405189,secondary:#f06548", 2, "width", "90px", "height", "90px"], [1, "mt-4", "pt-2", "fs-15", "mx-4", "mx-sm-5"], [1, "text-muted", "mx-4", "mb-0"], [1, "d-flex", "gap-2", "justify-content-center", "mt-4", "mb-2"], ["data-bs-dismiss", "modal", 1, "btn", "btn-link", "link-success", "fw-medium", "text-decoration-none", 3, "click"], [1, "ri-close-line", "me-1", "align-middle"], ["type", "button", "id", "delete-product", 1, "btn", "w-sm", "btn-danger", 3, "click"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 2)(1, "div", 3);
          core/* ɵɵelement */.nrm(2, "img", 4);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8);
          core/* ɵɵelement */.nrm(7, "img", 9);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(8, "div", 10)(9, "div", 11)(10, "h3", 12);
          core/* ɵɵtext */.EFF(11);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(12, "p", 13);
          core/* ɵɵtext */.EFF(13);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(14, "div", 14)(15, "div", 15);
          core/* ɵɵelement */.nrm(16, "i", 16);
          core/* ɵɵtext */.EFF(17);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(18, "div");
          core/* ɵɵelement */.nrm(19, "i", 17);
          core/* ɵɵtext */.EFF(20, "Themesbrand");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(21, "div", 18)(22, "div", 19)(23, "div", 20)(24, "div", 11)(25, "h4", 12);
          core/* ɵɵtext */.EFF(26, "24.3K");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(27, "p", 21);
          core/* ɵɵtext */.EFF(28, "Followers");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(29, "div", 20)(30, "div", 11)(31, "h4", 12);
          core/* ɵɵtext */.EFF(32, "1.3K");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(33, "p", 21);
          core/* ɵɵtext */.EFF(34, "Following");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(35, "div", 22)(36, "div", 23)(37, "div")(38, "div", 24)(39, "ul", 25, 0)(41, "li", 26)(42, "a", 27);
          core/* ɵɵelement */.nrm(43, "i", 28);
          core/* ɵɵelementStart */.j41(44, "span", 29);
          core/* ɵɵtext */.EFF(45, "Overview");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(46, ProfileComponent_ng_template_46_Template, 382, 16, "ng-template", 30);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(47, "li", 26)(48, "a", 27);
          core/* ɵɵelement */.nrm(49, "i", 31);
          core/* ɵɵelementStart */.j41(50, "span", 29);
          core/* ɵɵtext */.EFF(51, "Activities");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(52, ProfileComponent_ng_template_52_Template, 130, 0, "ng-template", 30);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(53, "li", 26)(54, "a", 27);
          core/* ɵɵelement */.nrm(55, "i", 32);
          core/* ɵɵelementStart */.j41(56, "span", 29);
          core/* ɵɵtext */.EFF(57, "Projects");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(58, ProfileComponent_ng_template_58_Template, 10, 8, "ng-template", 30);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(59, "li", 26)(60, "a", 27);
          core/* ɵɵelement */.nrm(61, "i", 33);
          core/* ɵɵelementStart */.j41(62, "span", 29);
          core/* ɵɵtext */.EFF(63, "Documents");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(64, ProfileComponent_ng_template_64_Template, 32, 1, "ng-template", 30);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(65, "div", 34)(66, "a", 35);
          core/* ɵɵelement */.nrm(67, "i", 36);
          core/* ɵɵtext */.EFF(68, " Edit Profile");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(69, "div", 37);
          core/* ɵɵelement */.nrm(70, "div", 38);
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵtemplate */.DNE(71, ProfileComponent_ng_template_71_Template, 17, 0, "ng-template", null, 1, core/* ɵɵtemplateRefExtractor */.C5r);
        }
        if (rf & 2) {
          const customNav_r12 = core/* ɵɵreference */.sdS(40);
          core/* ɵɵadvance */.R7$(11);
          core/* ɵɵtextInterpolate2 */.Lme("", ctx.userData.first_name, " ", ctx.userData.last_name, "");
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵtextInterpolate */.JRh(ctx.userData.role);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵtextInterpolate2 */.Lme("", ctx.userData.city, ", ", ctx.userData.country, "");
          core/* ɵɵadvance */.R7$(22);
          core/* ɵɵproperty */.Y8G("activeId", 1);
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 1);
          core/* ɵɵadvance */.R7$(6);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 2);
          core/* ɵɵadvance */.R7$(6);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 3);
          core/* ɵɵadvance */.R7$(6);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 4);
          core/* ɵɵadvance */.R7$(11);
          core/* ɵɵproperty */.Y8G("ngbNavOutlet", customNav_r12);
        }
      },
      dependencies: [common/* NgForOf */.Sq, common/* NgIf */.bT, ng_bootstrap/* NgbNavContent */.Um, ng_bootstrap/* NgbNav */.X9, ng_bootstrap/* NgbNavItem */.sy, ng_bootstrap/* NgbNavItemRole */.Gx, ng_bootstrap/* NgbNavLink */.Ri, ng_bootstrap/* NgbNavLinkBase */.WA, ng_bootstrap/* NgbNavOutlet */.m_, ng_bootstrap/* NgbDropdown */.tg, ng_bootstrap/* NgbDropdownToggle */["do"], ng_bootstrap/* NgbDropdownMenu */.U0, ng_bootstrap/* NgbTooltip */.md, ng_bootstrap/* NgbPagination */.s5, router/* RouterLink */.Wk, common/* AsyncPipe */.Jj]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/profile/settings/settings.component.ts





function SettingsComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "form", 64)(1, "div", 10)(2, "div", 65)(3, "div", 66)(4, "label", 67);
    core/* ɵɵtext */.EFF(5, "First Name");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(6, "input", 68);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(7, "div", 65)(8, "div", 66)(9, "label", 69);
    core/* ɵɵtext */.EFF(10, "Last Name");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(11, "input", 70);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(12, "div", 65)(13, "div", 66)(14, "label", 71);
    core/* ɵɵtext */.EFF(15, "Phone Number");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(16, "input", 72);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(17, "div", 65)(18, "div", 66)(19, "label", 73);
    core/* ɵɵtext */.EFF(20, "Email Address");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(21, "input", 74);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(22, "div", 75)(23, "div", 66)(24, "label", 76);
    core/* ɵɵtext */.EFF(25, "Joining Date");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(26, "input", 77);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(27, "div", 75)(28, "div", 66)(29, "label", 78);
    core/* ɵɵtext */.EFF(30, "Skills");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(31, "ng-select", 79);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(32, "div", 65)(33, "div", 66)(34, "label", 80);
    core/* ɵɵtext */.EFF(35, "Designation");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(36, "input", 81);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(37, "div", 65)(38, "div", 66)(39, "label", 82);
    core/* ɵɵtext */.EFF(40, "Website");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(41, "input", 83);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(42, "div", 84)(43, "div", 66)(44, "label", 85);
    core/* ɵɵtext */.EFF(45, "City");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(46, "input", 86);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(47, "div", 84)(48, "div", 66)(49, "label", 87);
    core/* ɵɵtext */.EFF(50, "Country");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(51, "input", 88);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(52, "div", 84)(53, "div", 66)(54, "label", 89);
    core/* ɵɵtext */.EFF(55, "Zip Code");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(56, "input", 90);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(57, "div", 75)(58, "div", 91)(59, "label", 92);
    core/* ɵɵtext */.EFF(60, "Description");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(61, "textarea", 93);
    core/* ɵɵtext */.EFF(62, "Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(63, "div", 75)(64, "div", 94)(65, "button", 95);
    core/* ɵɵtext */.EFF(66, "Updates");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(67, "button", 96);
    core/* ɵɵtext */.EFF(68, "Cancel");
    core/* ɵɵelementEnd */.k0s()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$(26);
    core/* ɵɵproperty */.Y8G("altInput", true)("convertModelValue", true);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵproperty */.Y8G("items", ctx_r0.selectValue)("multiple", true);
  }
}
function SettingsComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "form", 64)(1, "div", 97)(2, "div", 84)(3, "div")(4, "label", 98);
    core/* ɵɵtext */.EFF(5, "Old Password*");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(6, "input", 99);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(7, "div", 84)(8, "div")(9, "label", 100);
    core/* ɵɵtext */.EFF(10, "New Password*");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(11, "input", 101);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(12, "div", 84)(13, "div")(14, "label", 102);
    core/* ɵɵtext */.EFF(15, "Confirm Password*");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(16, "input", 103);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(17, "div", 75)(18, "div", 66)(19, "a", 104);
    core/* ɵɵtext */.EFF(20, "Forgot Password ?");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(21, "div", 75)(22, "div", 105)(23, "button", 106);
    core/* ɵɵtext */.EFF(24, "Change Password");
    core/* ɵɵelementEnd */.k0s()()()()();
    core/* ɵɵelementStart */.j41(25, "div", 107)(26, "div", 108)(27, "a", 109);
    core/* ɵɵtext */.EFF(28, "All Logout");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(29, "h5", 110);
    core/* ɵɵtext */.EFF(30, "Login History");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(31, "div", 111)(32, "div", 112)(33, "div", 113);
    core/* ɵɵelement */.nrm(34, "i", 114);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(35, "div", 115)(36, "h6");
    core/* ɵɵtext */.EFF(37, "iPhone 12 Pro");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(38, "p", 23);
    core/* ɵɵtext */.EFF(39, "Los Angeles, United States - March 16 at 2:47PM");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(40, "div")(41, "a", 116);
    core/* ɵɵtext */.EFF(42, "Logout");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(43, "div", 111)(44, "div", 112)(45, "div", 113);
    core/* ɵɵelement */.nrm(46, "i", 117);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(47, "div", 115)(48, "h6");
    core/* ɵɵtext */.EFF(49, "Apple iPad Pro");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(50, "p", 23);
    core/* ɵɵtext */.EFF(51, "Washington, United States - November 06 at 10:43AM");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(52, "div")(53, "a", 116);
    core/* ɵɵtext */.EFF(54, "Logout");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(55, "div", 111)(56, "div", 112)(57, "div", 113);
    core/* ɵɵelement */.nrm(58, "i", 114);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(59, "div", 115)(60, "h6");
    core/* ɵɵtext */.EFF(61, "Galaxy S21 Ultra 5G");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(62, "p", 23);
    core/* ɵɵtext */.EFF(63, "Conneticut, United States - June 12 at 3:24PM");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(64, "div")(65, "a", 116);
    core/* ɵɵtext */.EFF(66, "Logout");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(67, "div", 118)(68, "div", 112)(69, "div", 113);
    core/* ɵɵelement */.nrm(70, "i", 119);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(71, "div", 115)(72, "h6");
    core/* ɵɵtext */.EFF(73, "Dell Inspiron 14");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(74, "p", 23);
    core/* ɵɵtext */.EFF(75, "Phoenix, United States - July 26 at 8:10AM");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(76, "div")(77, "a", 116);
    core/* ɵɵtext */.EFF(78, "Logout");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
function SettingsComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "form")(1, "div", 120)(2, "div", 121)(3, "div", 10)(4, "div", 75)(5, "div", 66)(6, "label", 122);
    core/* ɵɵtext */.EFF(7, "Job Title");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(8, "input", 123);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(9, "div", 65)(10, "div", 66)(11, "label", 124);
    core/* ɵɵtext */.EFF(12, "Company Name");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(13, "input", 125);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(14, "div", 65)(15, "div", 66)(16, "label", 126);
    core/* ɵɵtext */.EFF(17, "Experience Years");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(18, "div", 10)(19, "div", 127)(20, "select", 128)(21, "option", 129);
    core/* ɵɵtext */.EFF(22, "Select years");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(23, "option", 130);
    core/* ɵɵtext */.EFF(24, "2001");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(25, "option", 131);
    core/* ɵɵtext */.EFF(26, "2002");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(27, "option", 132);
    core/* ɵɵtext */.EFF(28, "2003");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(29, "option", 133);
    core/* ɵɵtext */.EFF(30, "2004");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(31, "option", 134);
    core/* ɵɵtext */.EFF(32, "2005");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(33, "option", 135);
    core/* ɵɵtext */.EFF(34, "2006");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(35, "option", 136);
    core/* ɵɵtext */.EFF(36, "2007");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(37, "option", 137);
    core/* ɵɵtext */.EFF(38, "2008");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(39, "option", 138);
    core/* ɵɵtext */.EFF(40, "2009");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(41, "option", 139);
    core/* ɵɵtext */.EFF(42, "2010");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(43, "option", 140);
    core/* ɵɵtext */.EFF(44, "2011");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(45, "option", 141);
    core/* ɵɵtext */.EFF(46, "2012");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(47, "option", 142);
    core/* ɵɵtext */.EFF(48, "2013");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(49, "option", 143);
    core/* ɵɵtext */.EFF(50, "2014");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(51, "option", 144);
    core/* ɵɵtext */.EFF(52, "2015");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(53, "option", 145);
    core/* ɵɵtext */.EFF(54, "2016");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(55, "option", 146);
    core/* ɵɵtext */.EFF(56, "2017");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(57, "option", 147);
    core/* ɵɵtext */.EFF(58, "2018");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(59, "option", 148);
    core/* ɵɵtext */.EFF(60, "2019");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(61, "option", 149);
    core/* ɵɵtext */.EFF(62, "2020");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(63, "option", 150);
    core/* ɵɵtext */.EFF(64, "2021");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(65, "option", 151);
    core/* ɵɵtext */.EFF(66, "2022");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(67, "div", 152);
    core/* ɵɵtext */.EFF(68, " to ");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(69, "div", 127)(70, "select", 153)(71, "option", 129);
    core/* ɵɵtext */.EFF(72, "Select years");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(73, "option", 130);
    core/* ɵɵtext */.EFF(74, "2001");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(75, "option", 131);
    core/* ɵɵtext */.EFF(76, "2002");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(77, "option", 132);
    core/* ɵɵtext */.EFF(78, "2003");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(79, "option", 133);
    core/* ɵɵtext */.EFF(80, "2004");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(81, "option", 134);
    core/* ɵɵtext */.EFF(82, "2005");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(83, "option", 135);
    core/* ɵɵtext */.EFF(84, "2006");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(85, "option", 136);
    core/* ɵɵtext */.EFF(86, "2007");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(87, "option", 137);
    core/* ɵɵtext */.EFF(88, "2008");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(89, "option", 138);
    core/* ɵɵtext */.EFF(90, "2009");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(91, "option", 139);
    core/* ɵɵtext */.EFF(92, "2010");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(93, "option", 140);
    core/* ɵɵtext */.EFF(94, "2011");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(95, "option", 141);
    core/* ɵɵtext */.EFF(96, "2012");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(97, "option", 142);
    core/* ɵɵtext */.EFF(98, "2013");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(99, "option", 143);
    core/* ɵɵtext */.EFF(100, "2014");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(101, "option", 144);
    core/* ɵɵtext */.EFF(102, "2015");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(103, "option", 145);
    core/* ɵɵtext */.EFF(104, "2016");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(105, "option", 154);
    core/* ɵɵtext */.EFF(106, "2017");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(107, "option", 147);
    core/* ɵɵtext */.EFF(108, "2018");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(109, "option", 148);
    core/* ɵɵtext */.EFF(110, "2019");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(111, "option", 155);
    core/* ɵɵtext */.EFF(112, "2020");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(113, "option", 150);
    core/* ɵɵtext */.EFF(114, "2021");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(115, "option", 151);
    core/* ɵɵtext */.EFF(116, "2022");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(117, "div", 75)(118, "div", 66)(119, "label", 156);
    core/* ɵɵtext */.EFF(120, "Job Description");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(121, "textarea", 157);
    core/* ɵɵtext */.EFF(122, "You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(123, "div", 94)(124, "a", 158);
    core/* ɵɵtext */.EFF(125, "Delete");
    core/* ɵɵelementEnd */.k0s()()()()();
    core/* ɵɵelement */.nrm(126, "div", 159);
    core/* ɵɵelementStart */.j41(127, "div", 75)(128, "div", 160)(129, "button", 106);
    core/* ɵɵtext */.EFF(130, "Update");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(131, "a", 161);
    core/* ɵɵtext */.EFF(132, "Add New");
    core/* ɵɵelementEnd */.k0s()()()();
  }
}
function SettingsComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 162)(1, "h5", 163);
    core/* ɵɵtext */.EFF(2, "Security:");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(3, "div", 164)(4, "div", 27)(5, "h6", 165);
    core/* ɵɵtext */.EFF(6, "Two-factor Authentication");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(7, "p", 166);
    core/* ɵɵtext */.EFF(8, "Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(9, "div", 167)(10, "a", 168);
    core/* ɵɵtext */.EFF(11, "Enable Two-facor Authentication");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(12, "div", 169)(13, "div", 27)(14, "h6", 165);
    core/* ɵɵtext */.EFF(15, "Secondary Verification");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(16, "p", 166);
    core/* ɵɵtext */.EFF(17, "The first factor is a password and the second commonly includes a text with a code sent to your smartphone, or biometrics using your fingerprint, face, or retina.");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(18, "div", 167)(19, "a", 168);
    core/* ɵɵtext */.EFF(20, "Set up secondary method");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(21, "div", 169)(22, "div", 27)(23, "h6", 165);
    core/* ɵɵtext */.EFF(24, "Backup Codes");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(25, "p", 170);
    core/* ɵɵtext */.EFF(26, "A backup code is automatically generated for you when you turn on two-factor authentication through your iOS or Android Twitter app. You can also generate a backup code on twitter.com.");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(27, "div", 167)(28, "a", 168);
    core/* ɵɵtext */.EFF(29, "Generate backup codes");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(30, "div", 66)(31, "h5", 163);
    core/* ɵɵtext */.EFF(32, "Application Notifications:");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(33, "ul", 171)(34, "li", 48)(35, "div", 27)(36, "label", 172);
    core/* ɵɵtext */.EFF(37, "Direct messages");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(38, "p", 166);
    core/* ɵɵtext */.EFF(39, "Messages from people you follow");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(40, "div", 29)(41, "div", 173);
    core/* ɵɵelement */.nrm(42, "input", 174);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(43, "li", 175)(44, "div", 27)(45, "label", 176);
    core/* ɵɵtext */.EFF(46, " Show desktop notifications ");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(47, "p", 166);
    core/* ɵɵtext */.EFF(48, "Choose the option you want as your default setting. Block a site: Next to \"Not allowed to send notifications,\" click Add. ");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(49, "div", 29)(50, "div", 173);
    core/* ɵɵelement */.nrm(51, "input", 177);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(52, "li", 175)(53, "div", 27)(54, "label", 178);
    core/* ɵɵtext */.EFF(55, " Show email notifications ");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(56, "p", 166);
    core/* ɵɵtext */.EFF(57, " Under Settings, choose Notifications. Under Select an account, choose the account to enable notifications for. ");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(58, "div", 29)(59, "div", 173);
    core/* ɵɵelement */.nrm(60, "input", 179);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(61, "li", 175)(62, "div", 27)(63, "label", 180);
    core/* ɵɵtext */.EFF(64, " Show chat notifications ");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(65, "p", 166);
    core/* ɵɵtext */.EFF(66, "To prevent duplicate mobile notifications from the Gmail and Chat apps, in settings, turn off Chat notifications.");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(67, "div", 29)(68, "div", 173);
    core/* ɵɵelement */.nrm(69, "input", 181);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(70, "li", 175)(71, "div", 27)(72, "label", 182);
    core/* ɵɵtext */.EFF(73, " Show purchase notifications ");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(74, "p", 166);
    core/* ɵɵtext */.EFF(75, "Get real-time purchase alerts to protect yourself from fraudulent charges.");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(76, "div", 29)(77, "div", 173);
    core/* ɵɵelement */.nrm(78, "input", 183);
    core/* ɵɵelementEnd */.k0s()()()()();
    core/* ɵɵelementStart */.j41(79, "div")(80, "h5", 163);
    core/* ɵɵtext */.EFF(81, "Delete This Account:");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(82, "p", 166);
    core/* ɵɵtext */.EFF(83, "Go to the Data & Privacy section of your profile Account. Scroll to \"Your data & privacy options.\" Delete your Profile Account. Follow the instructions to delete your account :");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(84, "div");
    core/* ɵɵelement */.nrm(85, "input", 184);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(86, "div", 185)(87, "a", 186);
    core/* ɵɵtext */.EFF(88, "Close & Delete This Account");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(89, "a", 187);
    core/* ɵɵtext */.EFF(90, "Cancel");
    core/* ɵɵelementEnd */.k0s()()();
  }
}
/**
 * Profile Settings Component
 */
class SettingsComponent {
  constructor() {
    /**
    * Multiple Default Select2
    */
    this.selectValue = ['Illustrator', 'Photoshop', 'CSS', 'HTML', 'Javascript', 'Python', 'PHP'];
  }
  ngOnInit() {}
  static {
    this.ɵfac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 98,
      vars: 6,
      consts: [["customNav", "ngbNav"], [1, "position-relative", "mx-n4", "mt-n4"], [1, "profile-wid-bg", "profile-setting-img"], ["src", "assets/images/profile-bg.jpg", "alt", "", 1, "profile-wid-img"], [1, "overlay-content"], [1, "text-end", "p-3"], [1, "p-0", "ms-auto", "rounded-circle", "profile-photo-edit"], ["id", "profile-foreground-img-file-input", "type", "file", 1, "profile-foreground-img-file-input"], ["for", "profile-foreground-img-file-input", 1, "profile-photo-edit", "btn", "btn-light"], [1, "ri-image-edit-line", "align-bottom", "me-1"], [1, "row"], [1, "col-xxl-3"], [1, "card", "mt-n5"], [1, "card-body", "p-4"], [1, "text-center"], [1, "profile-user", "position-relative", "d-inline-block", "mx-auto", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "user-profile-image", 1, "rounded-circle", "avatar-xl", "img-thumbnail", "user-profile-image"], [1, "avatar-xs", "p-0", "rounded-circle", "profile-photo-edit"], ["id", "profile-img-file-input", "type", "file", 1, "profile-img-file-input"], ["for", "profile-img-file-input", 1, "profile-photo-edit", "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-light", "text-body"], [1, "ri-camera-fill"], [1, "fs-16", "mb-1"], [1, "text-muted", "mb-0"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-5"], [1, "flex-grow-1"], [1, "card-title", "mb-0"], [1, "flex-shrink-0"], ["href", "javascript:void(0);", 1, "badge", "bg-light", "text-primary", "fs-12"], [1, "ri-edit-box-line", "align-bottom", "me-1"], [1, "progress", "animated-progess", "custom-progress", "progress-label"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "30%"], [1, "label"], [1, "d-flex", "align-items-center", "mb-4"], [1, "ri-add-fill", "align-bottom", "me-1"], [1, "mb-3", "d-flex"], [1, "avatar-xs", "d-block", "flex-shrink-0", "me-3"], [1, "avatar-title", "rounded-circle", "fs-16", "bg-dark", "text-light"], [1, "ri-github-fill"], ["type", "email", "id", "gitUsername", "placeholder", "Username", "value", "@daveadame", 1, "form-control"], [1, "avatar-title", "rounded-circle", "fs-16", "bg-primary"], [1, "ri-global-fill"], ["type", "text", "id", "websiteInput", "placeholder", "www.example.com", "value", "www.velzon.com", 1, "form-control"], [1, "avatar-title", "rounded-circle", "fs-16", "bg-success"], [1, "ri-dribbble-fill"], ["type", "text", "id", "dribbleName", "placeholder", "Username", "value", "@dave_adame", 1, "form-control"], [1, "d-flex"], [1, "avatar-title", "rounded-circle", "fs-16", "bg-danger"], [1, "ri-pinterest-fill"], ["type", "text", "id", "pinterestName", "placeholder", "Username", "value", "Advance Dave", 1, "form-control"], [1, "col-xxl-9"], [1, "card", "mt-xxl-n5"], [1, "card-header"], ["ngbNav", "", "role", "tablist", 1, "nav", "nav-tabs-custom", "rounded", "card-header-tabs", "border-bottom-0", 3, "activeId"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", 1, "nav-link"], [1, "fas", "fa-home"], ["ngbNavContent", ""], [1, "far", "fa-user"], [1, "far", "fa-envelope"], [1, "tab-content"], [3, "ngbNavOutlet"], ["action", "javascript:void(0);"], [1, "col-lg-6"], [1, "mb-3"], ["for", "firstnameInput", 1, "form-label"], ["type", "text", "id", "firstnameInput", "placeholder", "Enter your firstname", "value", "Dave", 1, "form-control"], ["for", "lastnameInput", 1, "form-label"], ["type", "text", "id", "lastnameInput", "placeholder", "Enter your lastname", "value", "Adame", 1, "form-control"], ["for", "phonenumberInput", 1, "form-label"], ["type", "text", "id", "phonenumberInput", "placeholder", "Enter your phone number", "value", "+(1) 987 6543", 1, "form-control"], ["for", "emailInput", 1, "form-label"], ["type", "email", "id", "emailInput", "placeholder", "Enter your email", "value", "daveadame@velzon.com", 1, "form-control"], [1, "col-lg-12"], ["for", "JoiningdatInput", 1, "form-label"], ["type", "text", "placeholder", "Select date", "mwlFlatpickr", "", 1, "form-control", "flatpickr-input", 3, "altInput", "convertModelValue"], ["for", "skillsInput", 1, "form-label"], [3, "items", "multiple"], ["for", "designationInput", 1, "form-label"], ["type", "text", "id", "designationInput", "placeholder", "Designation", "value", "Lead Designer / Developer", 1, "form-control"], ["for", "websiteInput1", 1, "form-label"], ["type", "text", "id", "websiteInput1", "placeholder", "www.example.com", "value", "www.velzon.com", 1, "form-control"], [1, "col-lg-4"], ["for", "cityInput", 1, "form-label"], ["type", "text", "id", "cityInput", "placeholder", "City", "value", "California", 1, "form-control"], ["for", "countryInput", 1, "form-label"], ["type", "text", "id", "countryInput", "placeholder", "Country", "value", "United States", 1, "form-control"], ["for", "zipcodeInput", 1, "form-label"], ["type", "text", "minlength", "5", "maxlength", "6", "id", "zipcodeInput", "placeholder", "Enter zipcode", "value", "90011", 1, "form-control"], [1, "mb-3", "pb-2"], ["for", "exampleFormControlTextarea", 1, "form-label"], ["id", "exampleFormControlTextarea", "placeholder", "Enter your description", "rows", "3", 1, "form-control"], [1, "hstack", "gap-2", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-soft-success"], [1, "row", "g-2"], ["for", "oldpasswordInput", 1, "form-label"], ["type", "password", "id", "oldpasswordInput", "placeholder", "Enter current password", 1, "form-control"], ["for", "newpasswordInput", 1, "form-label"], ["type", "password", "id", "newpasswordInput", "placeholder", "Enter new password", 1, "form-control"], ["for", "confirmpasswordInput", 1, "form-label"], ["type", "password", "id", "confirmpasswordInput", "placeholder", "Confirm password", 1, "form-control"], ["href", "javascript:void(0);", 1, "link-primary", "text-decoration-underline"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-success"], [1, "mt-4", "mb-3", "border-bottom", "pb-2"], [1, "float-end"], ["href", "javascript:void(0);", 1, "link-primary"], [1, "card-title"], [1, "d-flex", "align-items-center", "mb-3"], [1, "flex-shrink-0", "avatar-sm"], [1, "avatar-title", "bg-light", "text-primary", "rounded-3", "fs-18"], [1, "ri-smartphone-line"], [1, "flex-grow-1", "ms-3"], ["href", "javascript:void(0);"], [1, "ri-tablet-line"], [1, "d-flex", "align-items-center"], [1, "ri-macbook-line"], ["id", "newlink"], ["id", "1"], ["for", "jobTitle", 1, "form-label"], ["type", "text", "id", "jobTitle", "placeholder", "Job title", "value", "Lead Designer / Developer", 1, "form-control"], ["for", "companyName", 1, "form-label"], ["type", "text", "id", "companyName", "placeholder", "Company name", "value", "Themesbrand", 1, "form-control"], ["for", "experienceYear", 1, "form-label"], [1, "col-lg-5"], ["data-choices", "", "data-choices-search-false", "", "name", "experienceYear", "id", "experienceYear", 1, "form-control"], ["value", ""], ["value", "Choice 1"], ["value", "Choice 2"], ["value", "Choice 3"], ["value", "Choice 4"], ["value", "Choice 5"], ["value", "Choice 6"], ["value", "Choice 7"], ["value", "Choice 8"], ["value", "Choice 9"], ["value", "Choice 10"], ["value", "Choice 11"], ["value", "Choice 12"], ["value", "Choice 13"], ["value", "Choice 14"], ["value", "Choice 15"], ["value", "Choice 16"], ["value", "Choice 17", "selected", ""], ["value", "Choice 18"], ["value", "Choice 19"], ["value", "Choice 20"], ["value", "Choice 21"], ["value", "Choice 22"], [1, "col-auto", "align-self-center"], ["data-choices", "", "data-choices-search-false", "", "name", "choices-single-default2", 1, "form-control"], ["value", "Choice 17"], ["value", "Choice 20", "selected", ""], ["for", "jobDescription", 1, "form-label"], ["id", "jobDescription", "rows", "3", "placeholder", "Enter description", 1, "form-control"], ["href", "javascript:deleteEl(1)", 1, "btn", "btn-success"], ["id", "newForm", 2, "display", "none"], [1, "hstack", "gap-2"], ["href", "javascript:new_link()", 1, "btn", "btn-primary"], [1, "mb-4", "pb-2"], [1, "card-title", "text-decoration-underline", "mb-3"], [1, "d-flex", "flex-column", "flex-sm-row", "mb-4", "mb-sm-0"], [1, "fs-14", "mb-1"], [1, "text-muted"], [1, "flex-shrink-0", "ms-sm-3"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-primary"], [1, "d-flex", "flex-column", "flex-sm-row", "mb-4", "mb-sm-0", "mt-2"], [1, "text-muted", "mb-sm-0"], [1, "list-unstyled", "mb-0"], ["for", "directMessage", 1, "form-check-label", "fs-14"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "directMessage", "checked", "", 1, "form-check-input"], [1, "d-flex", "mt-2"], ["for", "desktopNotification", 1, "form-check-label", "fs-14"], ["type", "checkbox", "role", "switch", "id", "desktopNotification", "checked", "", 1, "form-check-input"], ["for", "emailNotification", 1, "form-check-label", "fs-14"], ["type", "checkbox", "role", "switch", "id", "emailNotification", 1, "form-check-input"], ["for", "chatNotification", 1, "form-check-label", "fs-14"], ["type", "checkbox", "role", "switch", "id", "chatNotification", 1, "form-check-input"], ["for", "purchaesNotification", 1, "form-check-label", "fs-14"], ["type", "checkbox", "role", "switch", "id", "purchaesNotification", 1, "form-check-input"], ["type", "password", "id", "passwordInput", "placeholder", "Enter your password", "value", "make@321654987", 1, "form-control", 2, "max-width", "265px"], [1, "hstack", "gap-2", "mt-3"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-danger"], ["href", "javascript:void(0);", 1, "btn", "btn-light"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 1)(1, "div", 2);
          core/* ɵɵelement */.nrm(2, "img", 3);
          core/* ɵɵelementStart */.j41(3, "div", 4)(4, "div", 5)(5, "div", 6);
          core/* ɵɵelement */.nrm(6, "input", 7);
          core/* ɵɵelementStart */.j41(7, "label", 8);
          core/* ɵɵelement */.nrm(8, "i", 9);
          core/* ɵɵtext */.EFF(9, " Change Cover ");
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "div", 15);
          core/* ɵɵelement */.nrm(16, "img", 16);
          core/* ɵɵelementStart */.j41(17, "div", 17);
          core/* ɵɵelement */.nrm(18, "input", 18);
          core/* ɵɵelementStart */.j41(19, "label", 19)(20, "span", 20);
          core/* ɵɵelement */.nrm(21, "i", 21);
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(22, "h5", 22);
          core/* ɵɵtext */.EFF(23, "Anna Adame");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(24, "p", 23);
          core/* ɵɵtext */.EFF(25, "Lead Designer / Developer");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(26, "div", 24)(27, "div", 25)(28, "div", 26)(29, "div", 27)(30, "h5", 28);
          core/* ɵɵtext */.EFF(31, "Complete Your Profile");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(32, "div", 29)(33, "a", 30);
          core/* ɵɵelement */.nrm(34, "i", 31);
          core/* ɵɵtext */.EFF(35, " Edit");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(36, "div", 32)(37, "div", 33)(38, "div", 34);
          core/* ɵɵtext */.EFF(39, "30%");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(40, "div", 24)(41, "div", 25)(42, "div", 35)(43, "div", 27)(44, "h5", 28);
          core/* ɵɵtext */.EFF(45, "Portfolio");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(46, "div", 29)(47, "a", 30);
          core/* ɵɵelement */.nrm(48, "i", 36);
          core/* ɵɵtext */.EFF(49, " Add");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(50, "div", 37)(51, "div", 38)(52, "span", 39);
          core/* ɵɵelement */.nrm(53, "i", 40);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(54, "input", 41);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(55, "div", 37)(56, "div", 38)(57, "span", 42);
          core/* ɵɵelement */.nrm(58, "i", 43);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(59, "input", 44);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(60, "div", 37)(61, "div", 38)(62, "span", 45);
          core/* ɵɵelement */.nrm(63, "i", 46);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(64, "input", 47);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(65, "div", 48)(66, "div", 38)(67, "span", 49);
          core/* ɵɵelement */.nrm(68, "i", 50);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(69, "input", 51);
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(70, "div", 52)(71, "div", 53)(72, "div", 54)(73, "ul", 55, 0)(75, "li", 56)(76, "a", 57);
          core/* ɵɵelement */.nrm(77, "i", 58);
          core/* ɵɵtext */.EFF(78, " Personal Details ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(79, SettingsComponent_ng_template_79_Template, 69, 4, "ng-template", 59);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(80, "li", 56)(81, "a", 57);
          core/* ɵɵelement */.nrm(82, "i", 60);
          core/* ɵɵtext */.EFF(83, " Change Password ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(84, SettingsComponent_ng_template_84_Template, 79, 0, "ng-template", 59);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(85, "li", 56)(86, "a", 57);
          core/* ɵɵelement */.nrm(87, "i", 61);
          core/* ɵɵtext */.EFF(88, " Experience ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(89, SettingsComponent_ng_template_89_Template, 133, 0, "ng-template", 59);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(90, "li", 56)(91, "a", 57);
          core/* ɵɵelement */.nrm(92, "i", 61);
          core/* ɵɵtext */.EFF(93, " Privacy Policy ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(94, SettingsComponent_ng_template_94_Template, 91, 0, "ng-template", 59);
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(95, "div", 13)(96, "div", 62);
          core/* ɵɵelement */.nrm(97, "div", 63);
          core/* ɵɵelementEnd */.k0s()()()()();
        }
        if (rf & 2) {
          const customNav_r2 = core/* ɵɵreference */.sdS(74);
          core/* ɵɵadvance */.R7$(73);
          core/* ɵɵproperty */.Y8G("activeId", 1);
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 1);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 2);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 3);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 4);
          core/* ɵɵadvance */.R7$(7);
          core/* ɵɵproperty */.Y8G("ngbNavOutlet", customNav_r2);
        }
      },
      dependencies: [fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* NgSelectOption */.xH, fesm2022_forms/* ɵNgSelectMultipleOption */.y7, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* NgForm */.cV, ng_bootstrap/* NgbNavContent */.Um, ng_bootstrap/* NgbNav */.X9, ng_bootstrap/* NgbNavItem */.sy, ng_bootstrap/* NgbNavItemRole */.Gx, ng_bootstrap/* NgbNavLink */.Ri, ng_bootstrap/* NgbNavLinkBase */.WA, ng_bootstrap/* NgbNavOutlet */.m_, ng_select_ng_select/* NgSelectComponent */.vr, angularx_flatpickr/* FlatpickrDirective */.kL]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/team/data.ts
/**
 * Group List
 */
const Team = [{
  id: 1,
  backgroundImg: 'assets/images/small/img-9.jpg',
  userImage: 'assets/images/users/avatar-2.jpg',
  name: "Nancy Martino",
  jobPosition: "Team Leader & HR",
  projectCount: 225,
  taskCount: 197,
  isActive: false
}, {
  id: 2,
  backgroundImg: 'assets/images/small/img-12.jpg',
  userImage: null,
  userShortName: "HB",
  name: "Henry Baird",
  jobPosition: "Full Stack Developer",
  projectCount: 352,
  taskCount: 376,
  isActive: true
}, {
  id: 3,
  backgroundImg: 'assets/images/small/img-11.jpg',
  userImage: 'assets/images/users/avatar-3.jpg',
  name: "Frank Hook",
  jobPosition: "Project Manager",
  projectCount: 162,
  taskCount: 192,
  isActive: false
}, {
  id: 4,
  backgroundImg: 'assets/images/small/img-1.jpg',
  userImage: 'assets/images/users/avatar-8.jpg',
  name: "Jennifer Carter",
  jobPosition: "UI/UX Designer",
  projectCount: 241,
  taskCount: 205,
  isActive: true
}, {
  id: 5,
  backgroundImg: 'assets/images/small/img-1.jpg',
  userImage: null,
  userShortName: "ME",
  name: "Megan Elmore",
  jobPosition: "Team Leader & Web Developer",
  projectCount: 201,
  taskCount: 263,
  isActive: false
}, {
  id: 6,
  backgroundImg: 'assets/images/small/img-2.jpg',
  userImage: 'assets/images/users/avatar-4.jpg',
  name: "Alexis Clarke",
  jobPosition: "Backend Developer",
  projectCount: 132,
  taskCount: 147,
  isActive: false
}, {
  id: 7,
  backgroundImg: 'assets/images/small/img-4.jpg',
  userImage: '',
  userShortName: "NC",
  name: "Nathan Cole",
  jobPosition: "Front-End Developer",
  projectCount: 352,
  taskCount: 376,
  isActive: true
}, {
  id: 8,
  backgroundImg: 'assets/images/small/img-7.jpg',
  userImage: 'assets/images/users/avatar-6.jpg',
  name: "Joseph Parker",
  jobPosition: "Full Stack Developer",
  projectCount: 64,
  taskCount: 93,
  isActive: true
}, {
  id: 9,
  backgroundImg: 'assets/images/small/img-3.jpg',
  userImage: 'assets/images/users/avatar-5.jpg',
  name: "Erica Kernan",
  jobPosition: "Web Designer",
  projectCount: 345,
  taskCount: 298,
  isActive: false
}, {
  id: 10,
  backgroundImg: 'assets/images/users/avatar-5.jpg',
  userImage: null,
  userShortName: "DP",
  name: "Donald Palmer",
  jobPosition: "Wed Developer",
  projectCount: 95,
  taskCount: 135,
  isActive: true
}, {
  id: 11,
  backgroundImg: 'assets/images/small/img-8.jpg',
  userImage: 'assets/images/users/avatar-7.jpg',
  name: "Jack Gough",
  jobPosition: "React Js Developer",
  projectCount: 87,
  taskCount: 121,
  isActive: false
}, {
  id: 12,
  backgroundImg: 'assets/images/small/img-6.jpg',
  userImage: null,
  userShortName: "MW",
  name: "Marie Ward",
  jobPosition: "Backend Developer",
  projectCount: 145,
  taskCount: 210,
  isActive: false
}];

;// CONCATENATED MODULE: ./src/app/pages/extrapages/team/team.component.ts








const _c0 = a0 => ({
  "active": a0
});
const _c1 = a0 => ({
  "is-invalid": a0
});
function TeamComponent_ng_template_15_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 69);
    core/* ɵɵelement */.nrm(1, "img", 70);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const data_r3 = core/* ɵɵnextContext */.XpG().$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵpropertyInterpolate */.FS9("src", data_r3.userImage, core/* ɵɵsanitizeUrl */.B4B);
  }
}
function TeamComponent_ng_template_15_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 69)(1, "div", 71);
    core/* ɵɵtext */.EFF(2);
    core/* ɵɵelementEnd */.k0s()();
  }
  if (rf & 2) {
    const data_r3 = core/* ɵɵnextContext */.XpG().$implicit;
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate1 */.SpI(" ", data_r3.name.charAt(0), "");
  }
}
function TeamComponent_ng_template_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 36)(1, "div", 37)(2, "div", 38);
    core/* ɵɵelement */.nrm(3, "img", 39);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(4, "div", 40)(5, "div", 41)(6, "div", 42)(7, "div", 27)(8, "div", 43)(9, "div", 44)(10, "button", 45);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_15_div_1_Template_button_click_10_listener() {
      const data_r3 = core/* ɵɵrestoreView */.eBV(_r2).$implicit;
      const ctx_r3 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r3.activeMenu(data_r3.id));
    });
    core/* ɵɵelement */.nrm(11, "i", 46);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(12, "div", 47)(13, "a", 48);
    core/* ɵɵelement */.nrm(14, "i", 49);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(15, "ul", 50)(16, "li")(17, "a", 24);
    core/* ɵɵelement */.nrm(18, "i", 51);
    core/* ɵɵtext */.EFF(19, "View");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(20, "li")(21, "a", 24);
    core/* ɵɵelement */.nrm(22, "i", 52);
    core/* ɵɵtext */.EFF(23, "Favorites");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(24, "li")(25, "a", 53);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_15_div_1_Template_a_click_25_listener() {
      const data_r3 = core/* ɵɵrestoreView */.eBV(_r2).$implicit;
      const ctx_r3 = core/* ɵɵnextContext */.XpG(2);
      const deleteModel_r5 = core/* ɵɵreference */.sdS(47);
      return core/* ɵɵresetView */.Njj(ctx_r3.confirm(deleteModel_r5, data_r3.id));
    });
    core/* ɵɵelement */.nrm(26, "i", 54);
    core/* ɵɵtext */.EFF(27, "Delete");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(28, "div", 55)(29, "div", 56);
    core/* ɵɵtemplate */.DNE(30, TeamComponent_ng_template_15_div_1_div_30_Template, 2, 1, "div", 57)(31, TeamComponent_ng_template_15_div_1_div_31_Template, 3, 1, "div", 57);
    core/* ɵɵelementStart */.j41(32, "div", 58)(33, "a", 59);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_15_div_1_Template_a_click_33_listener() {
      core/* ɵɵrestoreView */.eBV(_r2);
      const ctx_r3 = core/* ɵɵnextContext */.XpG(2);
      const viewContent_r6 = core/* ɵɵreference */.sdS(45);
      return core/* ɵɵresetView */.Njj(ctx_r3.openEnd(viewContent_r6));
    })("click", function TeamComponent_ng_template_15_div_1_Template_a_click_33_listener() {
      const data_r3 = core/* ɵɵrestoreView */.eBV(_r2).$implicit;
      const ctx_r3 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r3.viewDataGet(data_r3.id));
    });
    core/* ɵɵelementStart */.j41(34, "h5", 60);
    core/* ɵɵtext */.EFF(35);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(36, "p", 61);
    core/* ɵɵtext */.EFF(37);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(38, "div", 55)(39, "div", 62)(40, "div", 63)(41, "h5", 64);
    core/* ɵɵtext */.EFF(42);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(43, "p", 61);
    core/* ɵɵtext */.EFF(44, "Projects");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(45, "div", 65)(46, "h5", 64);
    core/* ɵɵtext */.EFF(47);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(48, "p", 61);
    core/* ɵɵtext */.EFF(49, "Tasks");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(50, "div", 66)(51, "div", 67)(52, "a", 68);
    core/* ɵɵtext */.EFF(53, "View Profile");
    core/* ɵɵelementEnd */.k0s()()()()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    core/* ɵɵpropertyInterpolate1 */.Mz_("id", "t_", data_r3.id, "");
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵpropertyInterpolate */.FS9("src", data_r3.backgroundImg, core/* ɵɵsanitizeUrl */.B4B);
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("btn btn-light btn-icon rounded-circle btn-sm favourite-btn star_", data_r3.id, "");
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(13, _c0, data_r3.isActive == true));
    core/* ɵɵadvance */.R7$(20);
    core/* ɵɵproperty */.Y8G("ngIf", data_r3.userImage);
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", !data_r3.userImage);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r3.name);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate */.JRh(data_r3.jobPosition);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate */.JRh(data_r3.projectCount);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate */.JRh(data_r3.taskCount);
  }
}
function TeamComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 31);
    core/* ɵɵtemplate */.DNE(1, TeamComponent_ng_template_15_div_1_Template, 54, 15, "div", 32);
    core/* ɵɵelementStart */.j41(2, "div", 28)(3, "div", 33)(4, "a", 34);
    core/* ɵɵelement */.nrm(5, "i", 35);
    core/* ɵɵtext */.EFF(6, " Load More ");
    core/* ɵɵelementEnd */.k0s()()()();
  }
  if (rf & 2) {
    const ctx_r3 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r3.Team);
  }
}
function TeamComponent_ng_template_19_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 69);
    core/* ɵɵelement */.nrm(1, "img", 70);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const data_r8 = core/* ɵɵnextContext */.XpG().$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵpropertyInterpolate */.FS9("src", data_r8.userImage, core/* ɵɵsanitizeUrl */.B4B);
  }
}
function TeamComponent_ng_template_19_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 69)(1, "div", 71);
    core/* ɵɵtext */.EFF(2);
    core/* ɵɵelementEnd */.k0s()();
  }
  if (rf & 2) {
    const data_r8 = core/* ɵɵnextContext */.XpG().$implicit;
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate1 */.SpI(" ", data_r8.name.charAt(0), "");
  }
}
function TeamComponent_ng_template_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 36)(1, "div", 37)(2, "div", 38);
    core/* ɵɵelement */.nrm(3, "img", 39);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(4, "div", 40)(5, "div", 41)(6, "div", 42)(7, "div", 27)(8, "div", 43)(9, "div", 44)(10, "button", 45);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_19_div_1_Template_button_click_10_listener() {
      const data_r8 = core/* ɵɵrestoreView */.eBV(_r7).$implicit;
      const ctx_r3 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r3.activeMenu(data_r8.id));
    });
    core/* ɵɵelement */.nrm(11, "i", 46);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(12, "div", 47)(13, "a", 48);
    core/* ɵɵelement */.nrm(14, "i", 49);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(15, "ul", 50)(16, "li")(17, "a", 24);
    core/* ɵɵelement */.nrm(18, "i", 51);
    core/* ɵɵtext */.EFF(19, "View");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(20, "li")(21, "a", 24);
    core/* ɵɵelement */.nrm(22, "i", 52);
    core/* ɵɵtext */.EFF(23, "Favorites");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(24, "li")(25, "a", 53);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_19_div_1_Template_a_click_25_listener() {
      const data_r8 = core/* ɵɵrestoreView */.eBV(_r7).$implicit;
      const ctx_r3 = core/* ɵɵnextContext */.XpG(2);
      const deleteModel_r5 = core/* ɵɵreference */.sdS(47);
      return core/* ɵɵresetView */.Njj(ctx_r3.confirm(deleteModel_r5, data_r8.id));
    });
    core/* ɵɵelement */.nrm(26, "i", 54);
    core/* ɵɵtext */.EFF(27, "Delete");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(28, "div", 55)(29, "div", 56);
    core/* ɵɵtemplate */.DNE(30, TeamComponent_ng_template_19_div_1_div_30_Template, 2, 1, "div", 57)(31, TeamComponent_ng_template_19_div_1_div_31_Template, 3, 1, "div", 57);
    core/* ɵɵelementStart */.j41(32, "div", 58)(33, "a", 59);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_19_div_1_Template_a_click_33_listener() {
      core/* ɵɵrestoreView */.eBV(_r7);
      const ctx_r3 = core/* ɵɵnextContext */.XpG(2);
      const viewContent_r6 = core/* ɵɵreference */.sdS(45);
      return core/* ɵɵresetView */.Njj(ctx_r3.openEnd(viewContent_r6));
    })("click", function TeamComponent_ng_template_19_div_1_Template_a_click_33_listener() {
      const data_r8 = core/* ɵɵrestoreView */.eBV(_r7).$implicit;
      const ctx_r3 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r3.viewDataGet(data_r8.id));
    });
    core/* ɵɵelementStart */.j41(34, "h5", 60);
    core/* ɵɵtext */.EFF(35);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(36, "p", 61);
    core/* ɵɵtext */.EFF(37);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(38, "div", 55)(39, "div", 62)(40, "div", 63)(41, "h5", 64);
    core/* ɵɵtext */.EFF(42);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(43, "p", 61);
    core/* ɵɵtext */.EFF(44, "Projects");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(45, "div", 65)(46, "h5", 64);
    core/* ɵɵtext */.EFF(47);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(48, "p", 61);
    core/* ɵɵtext */.EFF(49, "Tasks");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(50, "div", 66)(51, "div", 67)(52, "a", 68);
    core/* ɵɵtext */.EFF(53, "View Profile");
    core/* ɵɵelementEnd */.k0s()()()()()()();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    core/* ɵɵpropertyInterpolate1 */.Mz_("id", "t_", data_r8.id, "");
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵpropertyInterpolate */.FS9("src", data_r8.backgroundImg, core/* ɵɵsanitizeUrl */.B4B);
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("btn btn-light btn-icon rounded-circle btn-sm favourite-btn star_", data_r8.id, "");
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(13, _c0, data_r8.isActive == true));
    core/* ɵɵadvance */.R7$(20);
    core/* ɵɵproperty */.Y8G("ngIf", data_r8.userImage);
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngIf", !data_r8.userImage);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r8.name);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate */.JRh(data_r8.jobPosition);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate */.JRh(data_r8.projectCount);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate */.JRh(data_r8.taskCount);
  }
}
function TeamComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 72);
    core/* ɵɵtemplate */.DNE(1, TeamComponent_ng_template_19_div_1_Template, 54, 15, "div", 32);
    core/* ɵɵelementStart */.j41(2, "div", 28)(3, "div", 33)(4, "a", 73);
    core/* ɵɵelement */.nrm(5, "i", 35);
    core/* ɵɵtext */.EFF(6, " Load More ");
    core/* ɵɵelementEnd */.k0s()()()();
  }
  if (rf & 2) {
    const ctx_r3 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r3.Team);
  }
}
function TeamComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 74)(1, "form", 75);
    core/* ɵɵlistener */.bIt("ngSubmit", function TeamComponent_ng_template_42_Template_form_ngSubmit_1_listener() {
      core/* ɵɵrestoreView */.eBV(_r10);
      const ctx_r3 = core/* ɵɵnextContext */.XpG();
      return core/* ɵɵresetView */.Njj(ctx_r3.saveTeam());
    });
    core/* ɵɵelementStart */.j41(2, "div", 27)(3, "div", 28);
    core/* ɵɵelement */.nrm(4, "input", 76);
    core/* ɵɵelementStart */.j41(5, "div", 77)(6, "div", 78);
    core/* ɵɵelement */.nrm(7, "img", 79);
    core/* ɵɵelementStart */.j41(8, "div", 80)(9, "div", 81)(10, "h5", 82);
    core/* ɵɵtext */.EFF(11, "Add New Members");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(12, "div", 83)(13, "div", 84)(14, "div")(15, "label", 85)(16, "div", 86)(17, "div", 87);
    core/* ɵɵelement */.nrm(18, "i", 88);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(19, "input", 89);
    core/* ɵɵlistener */.bIt("change", function TeamComponent_ng_template_42_Template_input_change_19_listener($event) {
      core/* ɵɵrestoreView */.eBV(_r10);
      const ctx_r3 = core/* ɵɵnextContext */.XpG();
      return core/* ɵɵresetView */.Njj(ctx_r3.bgfileChange($event));
    });
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(20, "button", 90);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_42_Template_button_click_20_listener() {
      const modal_r11 = core/* ɵɵrestoreView */.eBV(_r10).$implicit;
      return core/* ɵɵresetView */.Njj(modal_r11.dismiss("Cross click"));
    });
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(21, "div", 91)(22, "div", 92)(23, "div", 93)(24, "label", 94)(25, "div", 86)(26, "div", 87);
    core/* ɵɵelement */.nrm(27, "i", 88);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(28, "input", 95);
    core/* ɵɵlistener */.bIt("change", function TeamComponent_ng_template_42_Template_input_change_28_listener($event) {
      core/* ɵɵrestoreView */.eBV(_r10);
      const ctx_r3 = core/* ɵɵnextContext */.XpG();
      return core/* ɵɵresetView */.Njj(ctx_r3.fileChange($event));
    });
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(29, "div", 96)(30, "div", 97);
    core/* ɵɵelement */.nrm(31, "img", 98);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(32, "div", 99)(33, "label", 100);
    core/* ɵɵtext */.EFF(34, "Name");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(35, "input", 101);
    core/* ɵɵelementStart */.j41(36, "div", 102);
    core/* ɵɵtext */.EFF(37, "Please Enter a member name.");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(38, "div", 103)(39, "label", 104);
    core/* ɵɵtext */.EFF(40, "Designation");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(41, "input", 105);
    core/* ɵɵelementStart */.j41(42, "div", 102);
    core/* ɵɵtext */.EFF(43, "Please Enter a designation.");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(44, "div", 103)(45, "label", 106);
    core/* ɵɵtext */.EFF(46, "Projects");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(47, "input", 107);
    core/* ɵɵelementStart */.j41(48, "div", 102);
    core/* ɵɵtext */.EFF(49, "Please Enter a projectd.");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(50, "div", 103)(51, "label", 108);
    core/* ɵɵtext */.EFF(52, "Tasks");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(53, "input", 109);
    core/* ɵɵelementStart */.j41(54, "div", 102);
    core/* ɵɵtext */.EFF(55, "Please Enter a tasks.");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(56, "div", 110)(57, "button", 111);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_42_Template_button_click_57_listener() {
      const modal_r11 = core/* ɵɵrestoreView */.eBV(_r10).$implicit;
      return core/* ɵɵresetView */.Njj(modal_r11.dismiss("Cross click"));
    });
    core/* ɵɵtext */.EFF(58, "Close");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(59, "button", 112);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_42_Template_button_click_59_listener() {
      const modal_r11 = core/* ɵɵrestoreView */.eBV(_r10).$implicit;
      return core/* ɵɵresetView */.Njj(modal_r11.dismiss("Cross click"));
    });
    core/* ɵɵtext */.EFF(60, "Add Member");
    core/* ɵɵelementEnd */.k0s()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("formGroup", ctx_r3.teamForm);
    core/* ɵɵadvance */.R7$(34);
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(5, _c1, ctx_r3.submitted && ctx_r3.form["name"].errors));
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(7, _c1, ctx_r3.submitted && ctx_r3.form["designation"].errors));
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(9, _c1, ctx_r3.submitted && ctx_r3.form["projects"].errors));
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(11, _c1, ctx_r3.submitted && ctx_r3.form["tasks"].errors));
  }
}
function TeamComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 113)(1, "div", 38);
    core/* ɵɵelement */.nrm(2, "img", 114);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(3, "div", 115)(4, "div", 116)(5, "div", 27)(6, "div", 43)(7, "div", 117);
    core/* ɵɵelement */.nrm(8, "input", 118);
    core/* ɵɵelementStart */.j41(9, "label", 119);
    core/* ɵɵelement */.nrm(10, "i", 120);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(11, "div", 47)(12, "a", 121);
    core/* ɵɵelement */.nrm(13, "i", 49);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(14, "ul", 122)(15, "li")(16, "a", 24);
    core/* ɵɵelement */.nrm(17, "i", 51);
    core/* ɵɵtext */.EFF(18, "View");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(19, "li")(20, "a", 24);
    core/* ɵɵelement */.nrm(21, "i", 52);
    core/* ɵɵtext */.EFF(22, "Favorites");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(23, "li")(24, "a", 24);
    core/* ɵɵelement */.nrm(25, "i", 54);
    core/* ɵɵtext */.EFF(26, "Delete");
    core/* ɵɵelementEnd */.k0s()()()()()()();
    core/* ɵɵelementStart */.j41(27, "div", 123);
    core/* ɵɵelement */.nrm(28, "div", 124);
    core/* ɵɵelementStart */.j41(29, "div", 125)(30, "h5", 126)(31, "a", 127);
    core/* ɵɵtext */.EFF(32, "Nancy Martino");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(33, "p", 128);
    core/* ɵɵtext */.EFF(34, "Team Leader & HR");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(35, "div", 129)(36, "div", 86)(37, "a", 130);
    core/* ɵɵelement */.nrm(38, "i", 131);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(39, "div", 86)(40, "a", 132);
    core/* ɵɵelement */.nrm(41, "i", 133);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(42, "div", 86)(43, "a", 134);
    core/* ɵɵelement */.nrm(44, "i", 135);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(45, "div", 86)(46, "a", 136);
    core/* ɵɵelement */.nrm(47, "i", 137);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(48, "div", 138)(49, "div", 65)(50, "div", 139)(51, "h5", 140);
    core/* ɵɵtext */.EFF(52, "124");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(53, "p", 61);
    core/* ɵɵtext */.EFF(54, "Projects");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(55, "div", 65)(56, "div", 139)(57, "h5", 141);
    core/* ɵɵtext */.EFF(58, "81");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(59, "p", 61);
    core/* ɵɵtext */.EFF(60, "Tasks");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(61, "div", 115)(62, "h5", 142);
    core/* ɵɵtext */.EFF(63, "Personal Details");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(64, "div", 99)(65, "p", 143);
    core/* ɵɵtext */.EFF(66, "Number");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(67, "h6");
    core/* ɵɵtext */.EFF(68, "+(256) 2451 8974");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(69, "div", 99)(70, "p", 143);
    core/* ɵɵtext */.EFF(71, "Email");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(72, "h6");
    core/* ɵɵtext */.EFF(73, "nancymartino.com");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(74, "div")(75, "p", 143);
    core/* ɵɵtext */.EFF(76, "Location");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(77, "h6", 144);
    core/* ɵɵtext */.EFF(78, "Carson City - USA");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(79, "div", 145)(80, "h5", 146);
    core/* ɵɵtext */.EFF(81, "File Manager");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(82, "div", 147)(83, "div", 148)(84, "div", 149);
    core/* ɵɵelement */.nrm(85, "i", 150);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(86, "div", 151)(87, "h6", 64)(88, "a", 152);
    core/* ɵɵtext */.EFF(89, "Images");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(90, "p", 61);
    core/* ɵɵtext */.EFF(91, "4469 Files");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(92, "div", 128);
    core/* ɵɵtext */.EFF(93, " 12 GB ");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(94, "div", 147)(95, "div", 148)(96, "div", 153);
    core/* ɵɵelement */.nrm(97, "i", 154);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(98, "div", 151)(99, "h6", 64)(100, "a", 152);
    core/* ɵɵtext */.EFF(101, "Documents");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(102, "p", 61);
    core/* ɵɵtext */.EFF(103, "46 Files");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(104, "div", 128);
    core/* ɵɵtext */.EFF(105, " 3.46 GB ");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(106, "div", 147)(107, "div", 148)(108, "div", 155);
    core/* ɵɵelement */.nrm(109, "i", 156);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(110, "div", 151)(111, "h6", 64)(112, "a", 152);
    core/* ɵɵtext */.EFF(113, "Media");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(114, "p", 61);
    core/* ɵɵtext */.EFF(115, "124 Files");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(116, "div", 128);
    core/* ɵɵtext */.EFF(117, " 4.3 GB ");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(118, "div", 157)(119, "div", 148)(120, "div", 158);
    core/* ɵɵelement */.nrm(121, "i", 159);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(122, "div", 151)(123, "h6", 64)(124, "a", 152);
    core/* ɵɵtext */.EFF(125, "Others");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(126, "p", 61);
    core/* ɵɵtext */.EFF(127, "18 Files");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(128, "div", 128);
    core/* ɵɵtext */.EFF(129, " 846 MB ");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(130, "div", 160)(131, "button", 161);
    core/* ɵɵelement */.nrm(132, "i", 162);
    core/* ɵɵtext */.EFF(133, " Send Message");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(134, "a", 163);
    core/* ɵɵelement */.nrm(135, "i", 164);
    core/* ɵɵtext */.EFF(136, " View Profile");
    core/* ɵɵelementEnd */.k0s()();
  }
}
function TeamComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 165)(1, "div", 166)(2, "button", 167);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_46_Template_button_click_2_listener() {
      const modal_r13 = core/* ɵɵrestoreView */.eBV(_r12).$implicit;
      return core/* ɵɵresetView */.Njj(modal_r13.dismiss("Cross click"));
    });
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(3, "div", 74)(4, "div", 168);
    core/* ɵɵelement */.nrm(5, "lord-icon", 169);
    core/* ɵɵelementStart */.j41(6, "div", 170)(7, "h4");
    core/* ɵɵtext */.EFF(8, "Are you Sure ?");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(9, "p", 171);
    core/* ɵɵtext */.EFF(10, "Are you Sure You want to Remove this Product ?");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(11, "div", 172)(12, "button", 173);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_46_Template_button_click_12_listener() {
      const modal_r13 = core/* ɵɵrestoreView */.eBV(_r12).$implicit;
      return core/* ɵɵresetView */.Njj(modal_r13.close("Close click"));
    });
    core/* ɵɵtext */.EFF(13, "Close");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(14, "button", 174);
    core/* ɵɵlistener */.bIt("click", function TeamComponent_ng_template_46_Template_button_click_14_listener() {
      core/* ɵɵrestoreView */.eBV(_r12);
      const ctx_r3 = core/* ɵɵnextContext */.XpG();
      return core/* ɵɵresetView */.Njj(ctx_r3.deleteData(ctx_r3.deleteId));
    })("click", function TeamComponent_ng_template_46_Template_button_click_14_listener() {
      const modal_r13 = core/* ɵɵrestoreView */.eBV(_r12).$implicit;
      return core/* ɵɵresetView */.Njj(modal_r13.close("Close click"));
    });
    core/* ɵɵtext */.EFF(15, "Yes, Delete It!");
    core/* ɵɵelementEnd */.k0s()()()();
  }
}
/**
 * Team Component
 */
class TeamComponent {
  constructor(formBuilder, modalService, offcanvasService) {
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.offcanvasService = offcanvasService;
    this.submitted = false;
  }
  ngOnInit() {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [{
      label: 'Pages'
    }, {
      label: 'Team',
      active: true
    }];
    /**
     * Form Validation
     */
    this.teamForm = this.formBuilder.group({
      name: ['', [fesm2022_forms/* Validators */.k0.required]],
      designation: ['', [fesm2022_forms/* Validators */.k0.required]],
      projects: ['', [fesm2022_forms/* Validators */.k0.required]],
      tasks: ['', [fesm2022_forms/* Validators */.k0.required]]
    });
    // Chat Data Get Function
    this._fetchData();
  }
  // Chat Data Fetch
  _fetchData() {
    this.Team = Team;
  }
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content) {
    this.submitted = false;
    this.modalService.open(content, {
      size: 'md',
      centered: true
    });
  }
  /**
  * Form data get
  */
  get form() {
    return this.teamForm.controls;
  }
  /**
  * Save Team
  */
  saveTeam() {
    if (this.teamForm.valid) {
      const id = '10';
      const backgroundImg = 'assets/images/small/img-6.jpg';
      const userImage = null;
      const name = this.teamForm.get('name')?.value;
      const jobPosition = this.teamForm.get('designation')?.value;
      const projectCount = this.teamForm.get('projects')?.value;
      const taskCount = this.teamForm.get('tasks')?.value;
      this.Team.push({
        id,
        backgroundImg,
        userImage,
        name,
        jobPosition,
        projectCount,
        taskCount
      });
      this.modalService.dismissAll();
    }
    this.submitted = true;
  }
  /**
   * Active Toggle navbar
   */
  activeMenu(id) {
    document.querySelector('.star_' + id)?.classList.toggle('active');
  }
  confirm(content, id) {
    this.deleteId = id;
    this.modalService.open(content, {
      centered: true
    });
  }
  // Delete Data
  deleteData(id) {
    document.getElementById('t_' + id)?.remove();
  }
  // View Data Get
  viewDataGet(id) {
    var teamData = this.Team.filter(team => {
      return team.id === id;
    });
    var profile_img = teamData[0].userImage ? `<img src="` + teamData[0].userImage + `" alt="" class="avatar-lg img-thumbnail rounded-circle mx-auto">` : `<div class="avatar-lg img-thumbnail rounded-circle flex-shrink-0 mx-auto fs-20">
        <div class="avatar-title bg-soft-danger text-danger rounded-circle">` + teamData[0].name[0] + `</div>
      </div>`;
    var img_data = document.querySelector('.profile-offcanvas .team-cover img');
    img_data.src = teamData[0].backgroundImg;
    var profile = document.querySelector('.profileImg');
    profile.innerHTML = profile_img;
    document.querySelector('.profile-offcanvas .p-3 .mt-3 h5').innerHTML = teamData[0].name;
    document.querySelector('.profile-offcanvas .p-3 .mt-3 p').innerHTML = teamData[0].jobPosition;
    document.querySelector('.project_count').innerHTML = teamData[0].projectCount;
    document.querySelector('.task_count').innerHTML = teamData[0].taskCount;
  }
  openEnd(content) {
    this.offcanvasService.open(content, {
      position: 'end'
    });
  }
  fileChange(event) {
    let fileList = event.target;
    let file = fileList.files[0];
    document.getElementById('');
    this.teamForm.patchValue({
      // image_src: file.name
      image_src: 'avatar-8.jpg'
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result;
      document.getElementById('member-img').src = this.imageURL;
    };
    reader.readAsDataURL(file);
  }
  bgfileChange(event) {
    let fileList = event.target;
    let file = fileList.files[0];
    document.getElementById('');
    this.teamForm.patchValue({
      // image_src: file.name
      image_src: 'avatar-8.jpg'
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.bgimageURL = reader.result;
      document.getElementById('cover-img').src = this.bgimageURL;
    };
    reader.readAsDataURL(file);
  }
  static {
    this.ɵfac = function TeamComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TeamComponent)(core/* ɵɵdirectiveInject */.rXU(fesm2022_forms/* UntypedFormBuilder */.ze), core/* ɵɵdirectiveInject */.rXU(ng_bootstrap/* NgbModal */.Bq), core/* ɵɵdirectiveInject */.rXU(ng_bootstrap/* NgbOffcanvas */.RS));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 48,
      vars: 6,
      consts: [["Border", "ngbNav"], ["content", ""], ["viewContent", ""], ["deleteModel", ""], ["title", "Team", 3, "breadcrumbItems"], [1, "card"], [1, "card-body"], [1, "row", "g-2"], [1, "col-sm-4"], [1, "search-box"], ["type", "text", "placeholder", "Search for name, tasks, projects or something...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "ri-search-line", "search-icon"], [1, "col-sm-auto", "ms-auto"], ["ngbDropdown", "", 1, "list-grid-nav", "hstack", "gap-1"], ["ngbNav", "", 1, "d-flex", "gap-1", 3, "activeId"], [3, "ngbNavItem"], ["ngbNavLink", "", "id", "grid-view-button", 1, "btn", "btn-soft-info", "nav-link", "btn-icon", "fs-14", "filter-button"], [1, "ri-grid-fill"], ["ngbNavContent", ""], ["ngbNavLink", "", "id", "list-view-button", 1, "btn", "btn-soft-info", "nav-link", "btn-icon", "fs-14", "filter-button"], [1, "ri-list-unordered"], ["type", "button", "id", "dropdownMenuLink1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-soft-info", "btn-icon", "fs-14", "arrow-none"], [1, "ri-more-2-fill"], ["aria-labelledby", "dropdownMenuLink1", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["data-bs-toggle", "modal", "data-bs-target", "#addmembers", 1, "btn", "btn-success", 3, "click"], [1, "ri-add-fill", "me-1", "align-bottom"], [1, "row"], [1, "col-lg-12"], [3, "ngbNavOutlet"], ["role", "document"], [1, "team-list", "grid-view-filter", "row"], ["class", "col", 3, "id", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-3"], ["href", "javascript:void(0);", 1, "text-success", "arrow-none"], [1, "mdi", "mdi-loading", "mdi-spin", "fs-20", "align-middle", "me-2"], [1, "col", 3, "id"], [1, "card", "team-box"], [1, "team-cover"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "card-body", "p-4"], [1, "row", "align-items-center", "team-row"], [1, "col", "team-settings"], [1, "col"], [1, "flex-shrink-0", "me-2"], ["type", "button", 3, "click", "ngClass"], [1, "ri-star-fill", "fs-14"], ["ngbDropdown", "", 1, "col", "text-end", "dropdown"], ["href", "javascript:void(0);", "id", "dropdownMenuLink2", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "arrow-none"], [1, "ri-more-fill", "fs-17"], ["aria-labelledby", "dropdownMenuLink2", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "ri-eye-line", "me-2", "align-middle"], [1, "ri-star-line", "me-2", "align-middle"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "ri-delete-bin-5-line", "me-2", "align-middle"], [1, "col-lg-4", "col"], [1, "team-profile-img"], ["class", "avatar-lg img-thumbnail rounded-circle flex-shrink-0", 4, "ngIf"], [1, "team-content"], ["data-bs-toggle", "offcanvas", "aria-controls", "offcanvasExample", 3, "click"], [1, "fs-16", "mb-1"], [1, "text-muted", "mb-0"], [1, "row", "text-muted", "text-center"], [1, "col-6", "border-end", "border-end-dashed"], [1, "mb-1"], [1, "col-6"], [1, "col-lg-2", "col"], [1, "text-end"], ["routerLink", "/pages/profile", 1, "btn", "btn-light", "view-btn"], [1, "avatar-lg", "img-thumbnail", "rounded-circle", "flex-shrink-0"], ["alt", "", 1, "rounded-circle", "img-fluid", "userprofile", 3, "src"], [1, "avatar-title", "border", "bg-light", "text-primary", "rounded-circle", "text-uppercase"], [1, "team-list", "list-view-filter", "row"], ["href", "javascript:void(0);", 1, "text-success"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], ["type", "hidden", "id", "memberid-input", "value", "", 1, "form-control"], [1, "px-1", "pt-1"], [1, "modal-team-cover", "position-relative", "mb-0", "mt-n4", "mx-n4", "rounded-top", "overflow-hidden"], ["src", "assets/images/small/img-9.jpg", "alt", "", "id", "cover-img", 1, "img-fluid"], [1, "d-flex", "position-absolute", "start-0", "end-0", "top-0", "p-3"], [1, "flex-grow-1"], ["id", "createMemberLabel", 1, "modal-title", "text-white"], [1, "flex-shrink-0"], [1, "d-flex", "gap-3", "align-items-center"], ["for", "cover-image-input", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Select Cover Image", 1, "mb-0"], [1, "avatar-xs"], [1, "avatar-title", "bg-light", "border", "rounded-circle", "text-muted", "cursor-pointer"], [1, "ri-image-fill"], ["value", "", "id", "cover-image-input", "type", "file", "accept", "image/png, image/gif, image/jpeg", 1, "form-control", "d-none", 3, "change"], ["type", "button", "id", "createMemberBtn-close", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-white", 3, "click"], [1, "text-center", "mb-4", "mt-n5", "pt-2"], [1, "position-relative", "d-inline-block"], [1, "position-absolute", "bottom-0", "end-0"], ["for", "member-image-input", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "title", "Select Member Image", 1, "mb-0"], ["value", "", "id", "member-image-input", "type", "file", "accept", "image/png, image/gif, image/jpeg", 1, "form-control", "d-none", 3, "change"], [1, "avatar-lg"], [1, "avatar-title", "bg-light", "rounded-circle"], ["src", "assets/images/users/user-dummy-img.jpg", "id", "member-img", 1, "avatar-md", "rounded-circle", "h-auto"], [1, "mb-3"], ["for", "teammembersName", 1, "form-label"], ["type", "text", "id", "teammembersName", "placeholder", "Enter name", "formControlName", "name", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "mb-4"], ["for", "designation", 1, "form-label"], ["type", "text", "id", "designation", "placeholder", "Enter designation", "formControlName", "designation", 1, "form-control", 3, "ngClass"], ["for", "totalProjects", 1, "form-label"], ["type", "number", "id", "totalProjects", "placeholder", "Total projects", "formControlName", "projects", 1, "form-control", 3, "ngClass"], ["for", "totalTasks", 1, "form-label"], ["type", "number", "id", "totalTasks", "placeholder", "Total tasks", "formControlName", "tasks", 1, "form-control", 3, "ngClass"], [1, "hstack", "gap-2", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "id", "addNewMember", 1, "btn", "btn-success", 3, "click"], [1, "offcanvas-body", "profile-offcanvas", "p-0"], ["src", "assets/images/small/img-9.jpg", "alt", "", 1, "img-fluid"], [1, "p-3"], [1, "team-settings"], [1, "bookmark-icon", "flex-shrink-0", "me-2"], ["type", "checkbox", "id", "favourite13", 1, "bookmark-input", "bookmark-hide"], [1, "btn-star", "fs-16", "favourite-btn"], [1, "ri-star-fill"], ["href", "javascript:void(0);", "id", "dropdownMenuLink14", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "arrow-none"], ["aria-labelledby", "dropdownMenuLink14", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [1, "p-3", "text-center", "profile_img"], [1, "profileImg"], [1, "mt-3"], [1, "fs-15"], ["href", "javascript:void(0);", 1, "link-primary", "arrow-none", "team_name"], [1, "text-muted"], [1, "hstack", "gap-2", "justify-content-center", "mt-4"], ["href", "javascript:void(0);", 1, "avatar-title", "arrow-none", "bg-soft-secondary", "text-secondary", "rounded", "fs-16"], [1, "ri-facebook-fill"], ["href", "javascript:void(0);", 1, "avatar-title", "arrow-none", "bg-soft-success", "text-success", "rounded", "fs-16"], [1, "ri-slack-fill"], ["href", "javascript:void(0);", 1, "avatar-title", "arrow-none", "bg-soft-info", "text-info", "rounded", "fs-16"], [1, "ri-linkedin-fill"], ["href", "javascript:void(0);", 1, "avatar-title", "arrow-none", "bg-soft-danger", "text-danger", "rounded", "fs-16"], [1, "ri-dribbble-fill"], [1, "row", "g-0", "text-center"], [1, "p-3", "border", "border-dashed", "border-start-0"], [1, "mb-1", "project_count"], [1, "mb-1", "task_count"], [1, "fs-15", "mb-3"], [1, "text-muted", "text-uppercase", "fw-semibold", "fs-12", "mb-2"], [1, "mb-0"], [1, "p-3", "border-top"], [1, "fs-15", "mb-4"], [1, "d-flex", "mb-3"], [1, "flex-shrink-0", "avatar-xs"], [1, "avatar-title", "bg-soft-danger", "text-danger", "rounded", "fs-16"], [1, "ri-image-2-line"], [1, "flex-grow-1", "ms-3"], ["href", "javascript:void(0);"], [1, "avatar-title", "bg-soft-secondary", "text-secondary", "rounded", "fs-16"], [1, "ri-file-zip-line"], [1, "avatar-title", "bg-soft-success", "text-success", "rounded", "fs-16"], [1, "ri-live-line"], [1, "d-flex"], [1, "avatar-title", "bg-soft-primary", "text-primary", "rounded", "fs-16"], [1, "ri-error-warning-line"], [1, "offcanvas-foorter", "border", "p-3", "hstack", "gap-3", "text-center", "position-relative"], [1, "btn", "btn-light", "w-100"], [1, "ri-question-answer-fill", "align-bottom", "ms-1"], ["routerLink", "/pages/profile", 1, "btn", "btn-primary", "w-100"], [1, "ri-user-3-fill", "align-bottom", "ms-1"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", "id", "btn-close", 1, "btn-close", 3, "click"], [1, "mt-2", "text-center"], ["src", "https://cdn.lordicon.com/gsqxdxog.json", "trigger", "loop", "colors", "primary:#f7b84b,secondary:#f06548", 2, "width", "100px", "height", "100px"], [1, "mt-4", "pt-2", "fs-15", "mx-4", "mx-sm-5"], [1, "text-muted", "mx-4", "mb-0"], [1, "d-flex", "gap-2", "justify-content-center", "mt-4", "mb-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "w-sm", "btn-light", 3, "click"], ["type", "button", "id", "delete-product", 1, "btn", "w-sm", "btn-danger", 3, "click"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = core/* ɵɵgetCurrentView */.RV6();
          core/* ɵɵelement */.nrm(0, "app-breadcrumbs", 4);
          core/* ɵɵelementStart */.j41(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "input", 10);
          core/* ɵɵtwoWayListener */.mxI("ngModelChange", function TeamComponent_Template_input_ngModelChange_6_listener($event) {
            core/* ɵɵrestoreView */.eBV(_r1);
            core/* ɵɵtwoWayBindingSet */.DH7(ctx.term, $event) || (ctx.term = $event);
            return core/* ɵɵresetView */.Njj($event);
          });
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelement */.nrm(7, "i", 11);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(8, "div", 12)(9, "div", 13)(10, "ul", 14, 0)(12, "li", 15)(13, "a", 16);
          core/* ɵɵelement */.nrm(14, "i", 17);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(15, TeamComponent_ng_template_15_Template, 7, 1, "ng-template", 18);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(16, "li", 15)(17, "a", 19);
          core/* ɵɵelement */.nrm(18, "i", 20);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(19, TeamComponent_ng_template_19_Template, 7, 1, "ng-template", 18);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(20, "button", 21);
          core/* ɵɵelement */.nrm(21, "i", 22);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(22, "ul", 23)(23, "li")(24, "a", 24);
          core/* ɵɵtext */.EFF(25, "All");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(26, "li")(27, "a", 24);
          core/* ɵɵtext */.EFF(28, "Last Week");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(29, "li")(30, "a", 24);
          core/* ɵɵtext */.EFF(31, "Last Month");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(32, "li")(33, "a", 24);
          core/* ɵɵtext */.EFF(34, "Last Year");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(35, "button", 25);
          core/* ɵɵlistener */.bIt("click", function TeamComponent_Template_button_click_35_listener() {
            core/* ɵɵrestoreView */.eBV(_r1);
            const content_r9 = core/* ɵɵreference */.sdS(43);
            return core/* ɵɵresetView */.Njj(ctx.openModal(content_r9));
          });
          core/* ɵɵelement */.nrm(36, "i", 26);
          core/* ɵɵtext */.EFF(37, " Add Members");
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(38, "div", 27)(39, "div", 28)(40, "div");
          core/* ɵɵelement */.nrm(41, "div", 29);
          core/* ɵɵtemplate */.DNE(42, TeamComponent_ng_template_42_Template, 61, 13, "ng-template", 30, 1, core/* ɵɵtemplateRefExtractor */.C5r)(44, TeamComponent_ng_template_44_Template, 137, 0, "ng-template", null, 2, core/* ɵɵtemplateRefExtractor */.C5r);
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵtemplate */.DNE(46, TeamComponent_ng_template_46_Template, 16, 0, "ng-template", null, 3, core/* ɵɵtemplateRefExtractor */.C5r);
        }
        if (rf & 2) {
          const Border_r14 = core/* ɵɵreference */.sdS(11);
          core/* ɵɵproperty */.Y8G("breadcrumbItems", ctx.breadCrumbItems);
          core/* ɵɵadvance */.R7$(6);
          core/* ɵɵtwoWayProperty */.R50("ngModel", ctx.term);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("activeId", 1);
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 1);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 2);
          core/* ɵɵadvance */.R7$(25);
          core/* ɵɵproperty */.Y8G("ngbNavOutlet", Border_r14);
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgForOf */.Sq, common/* NgIf */.bT, fesm2022_forms/* ɵNgNoValidate */.qT, fesm2022_forms/* DefaultValueAccessor */.me, fesm2022_forms/* NumberValueAccessor */.Q0, fesm2022_forms/* NgControlStatus */.BC, fesm2022_forms/* NgControlStatusGroup */.cb, fesm2022_forms/* NgModel */.vS, fesm2022_forms/* FormGroupDirective */.j4, fesm2022_forms/* FormControlName */.JD, ng_bootstrap/* NgbNavContent */.Um, ng_bootstrap/* NgbNav */.X9, ng_bootstrap/* NgbNavItem */.sy, ng_bootstrap/* NgbNavItemRole */.Gx, ng_bootstrap/* NgbNavLink */.Ri, ng_bootstrap/* NgbNavLinkBase */.WA, ng_bootstrap/* NgbNavOutlet */.m_, ng_bootstrap/* NgbDropdown */.tg, ng_bootstrap/* NgbDropdownToggle */["do"], ng_bootstrap/* NgbDropdownMenu */.U0, router/* RouterLink */.Wk, breadcrumbs_component/* BreadcrumbsComponent */.m]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/timeline/timeline.component.ts


// Swiper Slider
/**
 * Timeline Component
 */
class TimelineComponent {
  constructor() {
    /**
    * Swiper setting
    */
    this.config = {
      initialSlide: 0,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 5
        }
      }
    };
  }
  ngOnInit() {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [{
      label: 'Pages'
    }, {
      label: 'Timeline',
      active: true
    }];
  }
  static {
    this.ɵfac = function TimelineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TimelineComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: TimelineComponent,
      selectors: [["app-timeline"]],
      decls: 251,
      vars: 1,
      consts: [["title", "Timeline", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "timeline"], [1, "timeline-item", "left"], [1, "icon", "ri-stack-line"], [1, "date"], [1, "content"], [1, "d-flex"], [1, "flex-shrink-0"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "avatar-sm", "rounded"], [1, "flex-grow-1", "ms-3"], [1, "fs-15"], [1, "text-muted", "fs-13", "fw-normal"], [1, "text-muted", "mb-2"], [1, "hstack", "gap-2"], [1, "btn", "btn-sm", "btn-light"], [1, "me-1"], [1, "timeline-item", "right"], [1, "icon", "ri-vip-diamond-line"], [1, "text-muted"], [1, "row", "g-2"], [1, "col-sm-6"], [1, "d-flex", "border", "border-dashed", "p-2", "rounded", "position-relative"], [1, "flex-shrink-0", "avatar-xs"], [1, "avatar-title", "bg-soft-danger", "text-danger", "fs-15", "rounded"], [1, "ri-image-2-line"], [1, "flex-grow-1", "overflow-hidden", "ms-2"], [1, "text-truncate", "mb-0"], ["href", "javascript:void(0);", 1, "stretched-link"], [1, "avatar-title", "bg-soft-info", "text-info", "fs-15", "rounded"], [1, "ri-file-zip-line"], [1, "flex-grow-1", "ms-2", "overflow-hidden"], [1, "mb-0", "text-truncate"], [1, "icon", "ri-gift-line"], [1, "avatar-group", "mb-2"], ["href", "javascript: void(0);", "data-bs-toggle", "tooltip", "data-bs-trigger", "hover", "data-bs-placement", "top", "title", "", "data-bs-original-title", "Christi", 1, "avatar-group-item"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["href", "javascript: void(0);", "data-bs-toggle", "tooltip", "data-bs-trigger", "hover", "data-bs-placement", "top", "title", "", "data-bs-original-title", "Frank Hook", 1, "avatar-group-item"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["href", "javascript: void(0);", "data-bs-toggle", "tooltip", "data-bs-trigger", "hover", "data-bs-placement", "top", "title", "", "data-bs-original-title", " Ruby", 1, "avatar-group-item"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-light", "text-primary"], ["href", "javascript: void(0);", "data-bs-toggle", "tooltip", "data-bs-trigger", "hover", "data-bs-placement", "top", "title", "", "data-bs-original-title", "more", 1, "avatar-group-item"], [1, "avatar-title", "rounded-circle"], [1, "icon", "ri-shield-star-line"], [1, "text-muted", "fst-italic", "mb-2"], [1, "btn", "btn-sm", "bg-light"], [1, "icon", "ri-user-smile-line"], [1, "row", "border", "border-dashed", "rounded", "gx-2", "p-2"], [1, "col-3"], ["src", "assets/images/small/img-2.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/small/img-3.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/small/img-4.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/small/img-6.jpg", "alt", "", 1, "img-fluid", "rounded"], [1, "icon", "ri-fire-line"], [1, "badge", "bg-soft-success", "text-success", "fs-10", "align-middle", "ms-1"], ["href", "javascript:void(0);", 1, "link-primary", "text-decoration-underline"], [1, "ri-arrow-right-line"], [1, "row", "mt-4"], [1, "mb-4"], [1, "timeline-2"], [1, "timeline-year"], [1, "timeline-continue"], [1, "row", "timeline-right"], [1, "col-12"], [1, "timeline-date"], [1, "timeline-box"], [1, "timeline-text"], ["src", "assets/images/users/avatar-7.jpg", "alt", "", 1, "avatar-sm", "rounded"], [1, "mb-1"], [1, "text-muted", "mb-0"], ["href", "javascript:void(0);"], ["src", "assets/images/small/img-7.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/small/img-10.jpg", "alt", "", 1, "img-fluid", "rounded"], ["src", "assets/images/small/img-9.jpg", "alt", "", 1, "img-fluid", "rounded"], [1, "mb-0", "text-muted", "vstack", "gap-2"], [1, "timeline-launch"], [1, "text-muted", "text-capitalize", "mb-0"], [1, "horizontal-timeline", "my-3"], [1, "swiper", "timelineSlider"]],
      template: function TimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelement */.nrm(0, "app-breadcrumbs", 0);
          core/* ɵɵelementStart */.j41(1, "div", 1)(2, "div", 2)(3, "div")(4, "h5");
          core/* ɵɵtext */.EFF(5, "Center Timeline");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(6, "div", 3)(7, "div", 4);
          core/* ɵɵelement */.nrm(8, "i", 5);
          core/* ɵɵelementStart */.j41(9, "div", 6);
          core/* ɵɵtext */.EFF(10, "15 Dec 2021");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(11, "div", 7)(12, "div", 8)(13, "div", 9);
          core/* ɵɵelement */.nrm(14, "img", 10);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(15, "div", 11)(16, "h5", 12);
          core/* ɵɵtext */.EFF(17, "Erica245 ");
          core/* ɵɵelementStart */.j41(18, "small", 13);
          core/* ɵɵtext */.EFF(19, "- 10 min Ago");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(20, "p", 14);
          core/* ɵɵtext */.EFF(21, "Wish someone a sincere \u2018good luck in your new job\u2019 with these sweet messages. Make sure you pick out a good luck new job card to go with the words, and pop a beautiful bunch of flowers from our gift range in your basket, to make them feel super special.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(22, "div", 15)(23, "a", 16)(24, "span", 17);
          core/* ɵɵtext */.EFF(25, "\uD83D\uDD25");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(26, " 19");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(27, "a", 16)(28, "span", 17);
          core/* ɵɵtext */.EFF(29, "\uD83E\uDD29");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(30, " 22");
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(31, "div", 18);
          core/* ɵɵelement */.nrm(32, "i", 19);
          core/* ɵɵelementStart */.j41(33, "div", 6);
          core/* ɵɵtext */.EFF(34, "22 Oct 2021");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(35, "div", 7)(36, "h5");
          core/* ɵɵtext */.EFF(37, "Adding a new event with attachments");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(38, "p", 20);
          core/* ɵɵtext */.EFF(39, "Too much or too little spacing, as in the example below, can make things unpleasant for the reader.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(40, "div", 21)(41, "div", 22)(42, "div", 23)(43, "div", 24)(44, "div", 25);
          core/* ɵɵelement */.nrm(45, "i", 26);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(46, "div", 9);
          core/* ɵɵelementStart */.j41(47, "div", 27)(48, "h6", 28)(49, "a", 29);
          core/* ɵɵtext */.EFF(50, "Business Template - UI/UX design");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(51, "small");
          core/* ɵɵtext */.EFF(52, "685 KB");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(53, "div", 22)(54, "div", 23)(55, "div", 24)(56, "div", 30);
          core/* ɵɵelement */.nrm(57, "i", 31);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(58, "div", 32)(59, "h6", 33)(60, "a", 29);
          core/* ɵɵtext */.EFF(61, "Bank Management System - PSD");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(62, "small");
          core/* ɵɵtext */.EFF(63, "8.78 MB");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(64, "div", 4);
          core/* ɵɵelement */.nrm(65, "i", 34);
          core/* ɵɵelementStart */.j41(66, "div", 6);
          core/* ɵɵtext */.EFF(67, "10 Jul 2021");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(68, "div", 7)(69, "h5");
          core/* ɵɵtext */.EFF(70, "Create new project buildng product");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(71, "p", 20);
          core/* ɵɵtext */.EFF(72, "Every team project can have a velzon. Use the velzon to share information with your team to understand and contribute to your project.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(73, "div", 35)(74, "a", 36);
          core/* ɵɵelement */.nrm(75, "img", 37);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(76, "a", 38);
          core/* ɵɵelement */.nrm(77, "img", 39);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(78, "a", 40)(79, "div", 41)(80, "div", 42);
          core/* ɵɵtext */.EFF(81, " R ");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(82, "a", 43)(83, "div", 41)(84, "div", 44);
          core/* ɵɵtext */.EFF(85, " 2+ ");
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(86, "div", 18);
          core/* ɵɵelement */.nrm(87, "i", 45);
          core/* ɵɵelementStart */.j41(88, "div", 6);
          core/* ɵɵtext */.EFF(89, "18 May 2021");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(90, "div", 7)(91, "h5");
          core/* ɵɵtext */.EFF(92, "Donald Palmer ");
          core/* ɵɵelementStart */.j41(93, "small", 13);
          core/* ɵɵtext */.EFF(94, "- Has changed 2 attributes");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(95, "p", 46);
          core/* ɵɵtext */.EFF(96, "\" This is an awesome admin dashboard template. It is extremely well structured and uses state of the art components (e.g. one of the only templates using boostrap 5.1.3 so far). I integrated it into a Rails 6 project. Needs manual integration work of course but the template structure made it easy. \"");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(97, "div", 15)(98, "a", 47)(99, "span", 17);
          core/* ɵɵtext */.EFF(100, "\uD83D\uDC97");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(101, " 35");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(102, "a", 16)(103, "span", 17);
          core/* ɵɵtext */.EFF(104, "\uD83D\uDC4D");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(105, " 10");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(106, "a", 16)(107, "span", 17);
          core/* ɵɵtext */.EFF(108, "\uD83D\uDE4F");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(109, " 10");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(110, "div", 4);
          core/* ɵɵelement */.nrm(111, "i", 48);
          core/* ɵɵelementStart */.j41(112, "div", 6);
          core/* ɵɵtext */.EFF(113, "10 Feb 2021");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(114, "div", 7)(115, "h5");
          core/* ɵɵtext */.EFF(116, "Velzon admin dashboard templates layout upload");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(117, "p", 20);
          core/* ɵɵtext */.EFF(118, "Powerful, clean & modern responsive bootstrap 5 admin template. The maximum file size for uploads in this demo :");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(119, "div", 49)(120, "div", 50);
          core/* ɵɵelement */.nrm(121, "img", 51);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(122, "div", 50);
          core/* ɵɵelement */.nrm(123, "img", 52);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(124, "div", 50);
          core/* ɵɵelement */.nrm(125, "img", 53);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(126, "div", 50);
          core/* ɵɵelement */.nrm(127, "img", 54);
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(128, "div", 18);
          core/* ɵɵelement */.nrm(129, "i", 55);
          core/* ɵɵelementStart */.j41(130, "div", 6);
          core/* ɵɵtext */.EFF(131, "01 Jan 2021");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(132, "div", 7)(133, "h5");
          core/* ɵɵtext */.EFF(134, "New ticket received ");
          core/* ɵɵelementStart */.j41(135, "span", 56);
          core/* ɵɵtext */.EFF(136, "Completed");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(137, "p", 14);
          core/* ɵɵtext */.EFF(138, " It is important for us that we receive email notifications when a ticket is created as our IT staff are mobile and will not always be looking at the dashboard for new tickets. ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(139, "a", 57);
          core/* ɵɵtext */.EFF(140, "Read More ");
          core/* ɵɵelement */.nrm(141, "i", 58);
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(142, "div", 59)(143, "div", 2)(144, "div")(145, "h5", 60);
          core/* ɵɵtext */.EFF(146, "Left Timeline");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(147, "div", 61)(148, "div", 62)(149, "p");
          core/* ɵɵtext */.EFF(150, "12 Dec 2021");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(151, "div", 63)(152, "div", 64)(153, "div", 65)(154, "p", 66);
          core/* ɵɵtext */.EFF(155, " 02:35AM to 04:30PM ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(156, "div", 65)(157, "div", 67)(158, "div", 68)(159, "div", 8);
          core/* ɵɵelement */.nrm(160, "img", 69);
          core/* ɵɵelementStart */.j41(161, "div", 11)(162, "h5", 70);
          core/* ɵɵtext */.EFF(163, "Frank hook joined with our company");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(164, "p", 71);
          core/* ɵɵtext */.EFF(165, "It makes a statement, it\u2019s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. ");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(166, "div", 64)(167, "div", 65)(168, "p", 66);
          core/* ɵɵtext */.EFF(169, " 02:35AM to 04:30PM ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(170, "div", 65)(171, "div", 67)(172, "div", 68)(173, "h5");
          core/* ɵɵtext */.EFF(174, "Trip planning");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(175, "p", 20);
          core/* ɵɵtext */.EFF(176, "In the trip planner, keep only one or two activities in a day if the purpose of the trip is to relax and take it easy during the vacation : ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(177, "div", 49)(178, "div", 50)(179, "a", 72);
          core/* ɵɵelement */.nrm(180, "img", 73);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(181, "div", 50)(182, "a", 72);
          core/* ɵɵelement */.nrm(183, "img", 52);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(184, "div", 50)(185, "a", 72);
          core/* ɵɵelement */.nrm(186, "img", 74);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(187, "div", 50)(188, "a", 72);
          core/* ɵɵelement */.nrm(189, "img", 75);
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(190, "div", 1)(191, "div", 65)(192, "div", 62)(193, "p");
          core/* ɵɵtext */.EFF(194, "08 Dec 2021");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(195, "div", 64)(196, "div", 65)(197, "p", 66);
          core/* ɵɵtext */.EFF(198, " 02:35AM to 04:30PM ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(199, "div", 65)(200, "div", 67)(201, "div", 68)(202, "h5");
          core/* ɵɵtext */.EFF(203, "Velzon - Project Discussion");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(204, "p", 71);
          core/* ɵɵtext */.EFF(205, "The purpose of the discussion is to interpret and describe the significance of your findings in light of what was already known about the research problem being investigated, and to explain any new understanding or fresh insights about the problem after you've taken the findings into consideration.");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(206, "div", 64)(207, "div", 65)(208, "p", 66);
          core/* ɵɵtext */.EFF(209, " 10:24AM to 11:15PM ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(210, "div", 65)(211, "div", 67)(212, "div", 68)(213, "h5");
          core/* ɵɵtext */.EFF(214, "Client Meeting (Nancy Martino)");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(215, "p", 71);
          core/* ɵɵtext */.EFF(216, "A client meeting, meaning, direct collaboration and communication with a customer, is the best way to understand their needs and how you can help support them.");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(217, "div", 64)(218, "div", 65)(219, "p", 66);
          core/* ɵɵtext */.EFF(220, " 9:20AM to 10:05PM ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(221, "div", 65)(222, "div", 67)(223, "div", 68)(224, "h5");
          core/* ɵɵtext */.EFF(225, "Designer & Developer Meeting");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(226, "ul", 76)(227, "li");
          core/* ɵɵtext */.EFF(228, "Last updates");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(229, "li");
          core/* ɵɵtext */.EFF(230, "Weekly Planning");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(231, "li");
          core/* ɵɵtext */.EFF(232, "Work Distribution");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(233, "div", 62)(234, "p")(235, "span");
          core/* ɵɵtext */.EFF(236, "05 Dec 2021");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(237, "div", 77)(238, "div", 67)(239, "div", 68)(240, "h5");
          core/* ɵɵtext */.EFF(241, "Our Company Activity");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(242, "p", 78);
          core/* ɵɵtext */.EFF(243, "Wow...!!! What a Journey So Far...!!!");
          core/* ɵɵelementEnd */.k0s()()()()()()()();
          core/* ɵɵelementStart */.j41(244, "div", 59)(245, "div", 2)(246, "div")(247, "h5");
          core/* ɵɵtext */.EFF(248, "Horizontal Timeline");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(249, "div", 79);
          core/* ɵɵelement */.nrm(250, "div", 80);
          core/* ɵɵelementEnd */.k0s()()()();
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("breadcrumbItems", ctx.breadCrumbItems);
        }
      },
      dependencies: [breadcrumbs_component/* BreadcrumbsComponent */.m]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/faqs/faqs.component.ts

function FaqsComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " What is Lorem Ipsum ? ");
  }
}
function FaqsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " Why do we use it ? ");
  }
}
function FaqsComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " Where does it come from ? ");
  }
}
function FaqsComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " Where can I get some ? ");
  }
}
function FaqsComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " Where can I get some ? ");
  }
}
function FaqsComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " Where does it come from ? ");
  }
}
function FaqsComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " Why do we use it ? ");
  }
}
function FaqsComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " What is Lorem Ipsum ? ");
  }
}
function FaqsComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " Why do we use it ? ");
  }
}
function FaqsComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " Where can I get some ? ");
  }
}
function FaqsComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " What is Lorem Ipsum ? ");
  }
}
function FaqsComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
function FaqsComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */.EFF(0, " Where does it come from ? ");
  }
}
function FaqsComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 36);
    core/* ɵɵtext */.EFF(1, " Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris. ");
    core/* ɵɵelementEnd */.k0s();
  }
}
/**
 * Faqs Component
 */
class FaqsComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function FaqsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaqsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: FaqsComponent,
      selectors: [["app-faqs"]],
      decls: 89,
      vars: 3,
      consts: [["acc", ""], [1, "row"], [1, "col-lg-12"], [1, "card", "rounded-0", "bg-soft-success", "mx-n4", "mt-n4", "border-top"], [1, "px-4"], [1, "col-xxl-5", "align-self-center"], [1, "py-4"], [1, "display-6", "coming-soon-text"], [1, "text-success", "fs-15", "mt-3"], [1, "hstack", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "btn-label", "rounded-pill"], [1, "ri-mail-line", "label-icon", "align-middle", "rounded-pill", "fs-16", "me-2"], ["type", "button", 1, "btn", "btn-info", "btn-label", "rounded-pill"], [1, "ri-twitter-line", "label-icon", "align-middle", "rounded-pill", "fs-16", "me-2"], [1, "col-xxl-3", "ms-auto"], [1, "mb-n5", "pb-1", "faq-img", "d-none", "d-xxl-block"], ["src", "assets/images/faq-img.png", "alt", "", 1, "img-fluid"], [1, "row", "justify-content-evenly"], [1, "col-lg-4"], [1, "mt-3"], [1, "d-flex", "align-items-center", "mb-2"], [1, "flex-shrink-0", "me-1"], [1, "ri-question-line", "fs-24", "align-middle", "text-success", "me-1"], [1, "flex-grow-1"], [1, "fs-16", "mb-0", "fw-semibold"], ["activeIds", "static-1", 3, "closeOthers"], ["id", "static-1"], ["ngbPanelTitle", "", "data-bs-toggle", "collapse", "data-bs-target", "#gen-ques-collapseOne", "aria-expanded", "false", "aria-controls", "gen-ques-collapseOne", "id", "gen-ques-headingOne", 1, "accordion-header", "border-0", "bg-transparent"], ["ngbPanelContent", ""], ["id", "static-2"], ["ngbPanelTitle", "", "id", "gen-ques-headingOne", 1, "accordion-header", "border-0", "bg-transparent"], ["id", "static-3"], ["ngbPanelTitle", "", 1, "accordion-header", "border-0", "bg-transparent"], ["id", "static-4"], [1, "ri-user-settings-line", "fs-24", "align-middle", "text-success", "me-1"], [1, "ri-shield-keyhole-line", "fs-24", "align-middle", "text-success", "me-1"], [1, "accordion-body"]],
      template: function FaqsComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelementStart */.j41(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 1)(5, "div", 5)(6, "div", 6)(7, "h4", 7);
          core/* ɵɵtext */.EFF(8, "Frequently asked questions");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(9, "p", 8);
          core/* ɵɵtext */.EFF(10, "If you can not find answer to your question in our FAQ, you can always contact us or email us. We will answer you shortly!");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(11, "div", 9)(12, "button", 10);
          core/* ɵɵelement */.nrm(13, "i", 11);
          core/* ɵɵtext */.EFF(14, " Email Us");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(15, "button", 12);
          core/* ɵɵelement */.nrm(16, "i", 13);
          core/* ɵɵtext */.EFF(17, " Send Us Tweet");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(18, "div", 14)(19, "div", 15);
          core/* ɵɵelement */.nrm(20, "img", 16);
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(21, "div", 17)(22, "div", 18)(23, "div", 19)(24, "div", 20)(25, "div", 21);
          core/* ɵɵelement */.nrm(26, "i", 22);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(27, "div", 23)(28, "h5", 24);
          core/* ɵɵtext */.EFF(29, "General Questions");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(30, "ngb-accordion", 25, 0)(32, "ngb-panel", 26);
          core/* ɵɵtemplate */.DNE(33, FaqsComponent_ng_template_33_Template, 1, 0, "ng-template", 27)(34, FaqsComponent_ng_template_34_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(35, "ngb-panel", 29);
          core/* ɵɵtemplate */.DNE(36, FaqsComponent_ng_template_36_Template, 1, 0, "ng-template", 30)(37, FaqsComponent_ng_template_37_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(38, "ngb-panel", 31);
          core/* ɵɵtemplate */.DNE(39, FaqsComponent_ng_template_39_Template, 1, 0, "ng-template", 32)(40, FaqsComponent_ng_template_40_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(41, "ngb-panel", 33);
          core/* ɵɵtemplate */.DNE(42, FaqsComponent_ng_template_42_Template, 1, 0, "ng-template", 32)(43, FaqsComponent_ng_template_43_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(44, "div", 18)(45, "div", 19)(46, "div", 20)(47, "div", 21);
          core/* ɵɵelement */.nrm(48, "i", 34);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(49, "div", 23)(50, "h5", 24);
          core/* ɵɵtext */.EFF(51, "Manage Account");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(52, "ngb-accordion", 25, 0)(54, "ngb-panel", 26);
          core/* ɵɵtemplate */.DNE(55, FaqsComponent_ng_template_55_Template, 1, 0, "ng-template", 32)(56, FaqsComponent_ng_template_56_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(57, "ngb-panel", 29);
          core/* ɵɵtemplate */.DNE(58, FaqsComponent_ng_template_58_Template, 1, 0, "ng-template", 32)(59, FaqsComponent_ng_template_59_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(60, "ngb-panel", 31);
          core/* ɵɵtemplate */.DNE(61, FaqsComponent_ng_template_61_Template, 1, 0, "ng-template", 32)(62, FaqsComponent_ng_template_62_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(63, "ngb-panel", 33);
          core/* ɵɵtemplate */.DNE(64, FaqsComponent_ng_template_64_Template, 1, 0, "ng-template", 32)(65, FaqsComponent_ng_template_65_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(66, "div", 18)(67, "div", 19)(68, "div", 20)(69, "div", 21);
          core/* ɵɵelement */.nrm(70, "i", 35);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(71, "div", 23)(72, "h5", 24);
          core/* ɵɵtext */.EFF(73, "Privacy & Security");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(74, "ngb-accordion", 25, 0)(76, "ngb-panel", 26);
          core/* ɵɵtemplate */.DNE(77, FaqsComponent_ng_template_77_Template, 1, 0, "ng-template", 32)(78, FaqsComponent_ng_template_78_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(79, "ngb-panel", 29);
          core/* ɵɵtemplate */.DNE(80, FaqsComponent_ng_template_80_Template, 1, 0, "ng-template", 32)(81, FaqsComponent_ng_template_81_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(82, "ngb-panel", 31);
          core/* ɵɵtemplate */.DNE(83, FaqsComponent_ng_template_83_Template, 1, 0, "ng-template", 32)(84, FaqsComponent_ng_template_84_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(85, "ngb-panel", 33);
          core/* ɵɵtemplate */.DNE(86, FaqsComponent_ng_template_86_Template, 1, 0, "ng-template", 32)(87, FaqsComponent_ng_template_87_Template, 2, 0, "ng-template", 28);
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵtext */.EFF(88, ".\n");
          core/* ɵɵelementEnd */.k0s();
        }
        if (rf & 2) {
          core/* ɵɵadvance */.R7$(30);
          core/* ɵɵproperty */.Y8G("closeOthers", true);
          core/* ɵɵadvance */.R7$(22);
          core/* ɵɵproperty */.Y8G("closeOthers", true);
          core/* ɵɵadvance */.R7$(22);
          core/* ɵɵproperty */.Y8G("closeOthers", true);
        }
      }
    });
  }
}
// EXTERNAL MODULE: ./src/app/pages/extrapages/pricing/data.ts
var data = __webpack_require__(5117);
;// CONCATENATED MODULE: ./src/app/pages/extrapages/pricing/pricing.component.ts





const pricing_component_c0 = a0 => ({
  "ribbon-box right": a0
});
const pricing_component_c1 = a0 => ({
  "d-none": a0
});
const _c2 = a0 => ({
  "disabled": a0
});
const _c3 = a0 => ({
  "ribbon-box ribbon-fill": a0
});
function PricingComponent_ng_template_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "span");
    core/* ɵɵtext */.EFF(5, "Popular");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(6, "div", 27)(7, "div", 28)(8, "h5", 29);
    core/* ɵɵtext */.EFF(9);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(10, "div", 30)(11, "h2", 31);
    core/* ɵɵtext */.EFF(12);
    core/* ɵɵelementStart */.j41(13, "small", 32);
    core/* ɵɵtext */.EFF(14, "/Month");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(15, "p", 33);
    core/* ɵɵtext */.EFF(16);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(17, "ul", 34)(18, "li")(19, "div", 35)(20, "div", 36);
    core/* ɵɵelement */.nrm(21, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(22, "div", 28)(23, "b");
    core/* ɵɵtext */.EFF(24);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(25, " documentos ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(26, "li")(27, "div", 35)(28, "div", 36);
    core/* ɵɵelement */.nrm(29, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(30, "div", 28)(31, "b");
    core/* ɵɵtext */.EFF(32);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(33, " Customers ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(34, "li")(35, "div", 35)(36, "div", 36);
    core/* ɵɵelement */.nrm(37, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(38, "div", 28);
    core/* ɵɵtext */.EFF(39, " Scalable Bandwidth ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(40, "li")(41, "div", 35)(42, "div", 36);
    core/* ɵɵelement */.nrm(43, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(44, "div", 28)(45, "b");
    core/* ɵɵtext */.EFF(46);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(47, " FTP Login ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(48, "li")(49, "div", 35)(50, "div");
    core/* ɵɵelement */.nrm(51, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(52, "div", 28)(53, "b");
    core/* ɵɵtext */.EFF(54, "24/7");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(55, " Support ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(56, "li")(57, "div", 35)(58, "div");
    core/* ɵɵelement */.nrm(59, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(60, "div", 28)(61, "b");
    core/* ɵɵtext */.EFF(62, "Unlimited");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(63, " Storage ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(64, "li")(65, "div", 35)(66, "div");
    core/* ɵɵelement */.nrm(67, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(68, "div", 28);
    core/* ɵɵtext */.EFF(69, " Domain ");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(70, "div", 38)(71, "a", 39);
    core/* ɵɵtext */.EFF(72, "Your Current Plan");
    core/* ɵɵelementEnd */.k0s()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(30, pricing_component_c0, data_r1.ribbon === true));
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(32, pricing_component_c1, data_r1.ribbon !== true));
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate */.JRh(data_r1.type);
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate1 */.SpI("$", data_r1.rate, " ");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r1.description);
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵtextInterpolate */.JRh(data_r1.documentos);
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵtextInterpolate */.JRh(data_r1.Customers);
    core/* ɵɵadvance */.R7$(14);
    core/* ɵɵtextInterpolate */.JRh(data_r1.FTP);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r1.supportClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r1.supportClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r1.storageClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r1.storageClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r1.domainClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r1.domainClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate1 */.ZvI("btn btn-", data_r1.planButtonClassname, " w-100");
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(34, _c2, data_r1.planButtonClassname === "danger"));
  }
}
function PricingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 13);
    core/* ɵɵtemplate */.DNE(1, PricingComponent_ng_template_14_div_1_Template, 73, 36, "div", 22);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r1.MonthlyPlan);
  }
}
function PricingComponent_ng_template_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "span");
    core/* ɵɵtext */.EFF(5, "Popular");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(6, "div", 27)(7, "div", 28)(8, "h5", 29);
    core/* ɵɵtext */.EFF(9);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(10, "div", 30)(11, "h2", 40)(12, "small", 41)(13, "del");
    core/* ɵɵtext */.EFF(14);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵtext */.EFF(15);
    core/* ɵɵelementStart */.j41(16, "small", 32);
    core/* ɵɵtext */.EFF(17, "/Year");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(18, "p", 33);
    core/* ɵɵtext */.EFF(19);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(20, "ul", 34)(21, "li")(22, "div", 35)(23, "div", 36);
    core/* ɵɵelement */.nrm(24, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(25, "div", 28)(26, "b");
    core/* ɵɵtext */.EFF(27);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(28, " documentos ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(29, "li")(30, "div", 35)(31, "div", 36);
    core/* ɵɵelement */.nrm(32, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(33, "div", 28)(34, "b");
    core/* ɵɵtext */.EFF(35);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(36, " Customers ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(37, "li")(38, "div", 35)(39, "div", 36);
    core/* ɵɵelement */.nrm(40, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(41, "div", 28);
    core/* ɵɵtext */.EFF(42, " Scalable Bandwidth ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(43, "li")(44, "div", 35)(45, "div", 36);
    core/* ɵɵelement */.nrm(46, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(47, "div", 28)(48, "b");
    core/* ɵɵtext */.EFF(49);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(50, " FTP Login ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(51, "li")(52, "div", 35)(53, "div");
    core/* ɵɵelement */.nrm(54, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(55, "div", 28)(56, "b");
    core/* ɵɵtext */.EFF(57, "24/7");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(58, " Support ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(59, "li")(60, "div", 35)(61, "div");
    core/* ɵɵelement */.nrm(62, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(63, "div", 28)(64, "b");
    core/* ɵɵtext */.EFF(65, "Unlimited");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(66, " Storage ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(67, "li")(68, "div", 35)(69, "div");
    core/* ɵɵelement */.nrm(70, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(71, "div", 28);
    core/* ɵɵtext */.EFF(72, " Domain ");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(73, "div", 38)(74, "a", 39);
    core/* ɵɵtext */.EFF(75, "Your Current Plan");
    core/* ɵɵelementEnd */.k0s()()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(31, pricing_component_c0, data_r3.ribbon === true));
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(33, pricing_component_c1, data_r3.ribbon !== true));
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate */.JRh(data_r3.type);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate1 */.SpI("$", data_r3.price, "");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵtextInterpolate1 */.SpI(" $", data_r3.rate, " ");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r3.description);
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵtextInterpolate */.JRh(data_r3.documentos);
    core/* ɵɵadvance */.R7$(8);
    core/* ɵɵtextInterpolate */.JRh(data_r3.Customers);
    core/* ɵɵadvance */.R7$(14);
    core/* ɵɵtextInterpolate */.JRh(data_r3.FTP);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r3.supportClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r3.supportClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r3.storageClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r3.storageClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r3.domainClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r3.domainClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate1 */.ZvI("btn btn-", data_r3.planButtonClassname, " w-100");
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(35, _c2, data_r3.planButtonClassname === "danger"));
  }
}
function PricingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 13);
    core/* ɵɵtemplate */.DNE(1, PricingComponent_ng_template_20_div_1_Template, 76, 37, "div", 22);
    core/* ɵɵelementEnd */.k0s();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r1.YearlyPlan);
  }
}
function PricingComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 20)(1, "div", 24)(2, "div", 42)(3, "div", 26)(4, "span");
    core/* ɵɵtext */.EFF(5, "Popular");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(6, "div", 43)(7, "div", 28)(8, "h5", 44);
    core/* ɵɵtext */.EFF(9);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(10, "p", 45);
    core/* ɵɵtext */.EFF(11);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(12, "div", 46)(13, "div", 47);
    core/* ɵɵelement */.nrm(14, "i");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(15, "div", 48)(16, "h2")(17, "sup")(18, "small");
    core/* ɵɵtext */.EFF(19, "$");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵtext */.EFF(20);
    core/* ɵɵelementStart */.j41(21, "span", 32);
    core/* ɵɵtext */.EFF(22, "/Month");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelement */.nrm(23, "hr", 49);
    core/* ɵɵelementStart */.j41(24, "div")(25, "ul", 50)(26, "li")(27, "div", 35)(28, "div", 36);
    core/* ɵɵelement */.nrm(29, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(30, "div", 28);
    core/* ɵɵtext */.EFF(31, " Upto ");
    core/* ɵɵelementStart */.j41(32, "b");
    core/* ɵɵtext */.EFF(33);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(34, " documentos ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(35, "li")(36, "div", 35)(37, "div", 36);
    core/* ɵɵelement */.nrm(38, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(39, "div", 28);
    core/* ɵɵtext */.EFF(40, " Upto ");
    core/* ɵɵelementStart */.j41(41, "b");
    core/* ɵɵtext */.EFF(42);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(43, " Customers ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(44, "li")(45, "div", 35)(46, "div", 36);
    core/* ɵɵelement */.nrm(47, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(48, "div", 28);
    core/* ɵɵtext */.EFF(49, " Scalable Bandwidth ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(50, "li")(51, "div", 35)(52, "div", 36);
    core/* ɵɵelement */.nrm(53, "i", 37);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(54, "div", 28)(55, "b");
    core/* ɵɵtext */.EFF(56);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(57, " FTP Login ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(58, "li")(59, "div", 35)(60, "div");
    core/* ɵɵelement */.nrm(61, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(62, "div", 28)(63, "b");
    core/* ɵɵtext */.EFF(64, "24/7");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(65, " Support ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(66, "li")(67, "div", 35)(68, "div");
    core/* ɵɵelement */.nrm(69, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(70, "div", 28)(71, "b");
    core/* ɵɵtext */.EFF(72, "Unlimited");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(73, " Storage ");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(74, "li")(75, "div", 35)(76, "div");
    core/* ɵɵelement */.nrm(77, "i");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(78, "div", 28);
    core/* ɵɵtext */.EFF(79, " Domain ");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(80, "div", 51)(81, "a", 52);
    core/* ɵɵtext */.EFF(82, "Sign up free");
    core/* ɵɵelementEnd */.k0s()()()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(32, pricing_component_c0, data_r4.ribbon === true));
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(34, pricing_component_c1, data_r4.ribbon !== true));
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate */.JRh(data_r4.type);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate */.JRh(data_r4.purpose);
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵclassMapInterpolate1 */.ZvI("", data_r4.planIcon, " fs-20");
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate1 */.SpI("", data_r4.rate, " ");
    core/* ɵɵadvance */.R7$(13);
    core/* ɵɵtextInterpolate */.JRh(data_r4.documentos);
    core/* ɵɵadvance */.R7$(9);
    core/* ɵɵtextInterpolate */.JRh(data_r4.Customers);
    core/* ɵɵadvance */.R7$(14);
    core/* ɵɵtextInterpolate */.JRh(data_r4.FTP);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r4.supportClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r4.supportClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r4.storageClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r4.storageClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵclassMapInterpolate1 */.ZvI("flex-shrink-0 text-", data_r4.domainClass, " me-1");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵclassMapInterpolate1 */.ZvI("ri-", data_r4.domainClassSymbol, "-circle-fill fs-15 align-middle");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate1 */.ZvI("btn btn-", data_r4.planButtonClassname, " w-100 waves-effect waves-light");
  }
}
function PricingComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 53)(1, "div", 54)(2, "div", 55);
    core/* ɵɵtext */.EFF(3, "New");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(4, "div", 56)(5, "div", 53)(6, "div", 57)(7, "div")(8, "h5", 58);
    core/* ɵɵtext */.EFF(9);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(10, "p", 33);
    core/* ɵɵtext */.EFF(11);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(12, "div", 59)(13, "h2")(14, "sup")(15, "small");
    core/* ɵɵtext */.EFF(16, "$");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵtext */.EFF(17);
    core/* ɵɵelementStart */.j41(18, "span", 32);
    core/* ɵɵtext */.EFF(19, " /Per month");
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(20, "div", 60)(21, "a", 61);
    core/* ɵɵtext */.EFF(22, "Sign up");
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(23, "div", 53)(24, "div", 62)(25, "div", 63)(26, "h5", 64);
    core/* ɵɵtext */.EFF(27, "Plan Features:");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(28, "div", 65)(29, "ul", 66)(30, "li");
    core/* ɵɵtext */.EFF(31, "Users: ");
    core/* ɵɵelementStart */.j41(32, "span", 67);
    core/* ɵɵtext */.EFF(33);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(34, "li");
    core/* ɵɵtext */.EFF(35, "Storage: ");
    core/* ɵɵelementStart */.j41(36, "span", 67);
    core/* ɵɵtext */.EFF(37);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(38, "li");
    core/* ɵɵtext */.EFF(39, "Domain: ");
    core/* ɵɵelementStart */.j41(40, "span", 67);
    core/* ɵɵtext */.EFF(41);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(42, "li");
    core/* ɵɵtext */.EFF(43, "Support: ");
    core/* ɵɵelementStart */.j41(44, "span", 67);
    core/* ɵɵtext */.EFF(45);
    core/* ɵɵelementEnd */.k0s()()()()()()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(9, _c3, data_r5.ribbon === true));
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(11, pricing_component_c1, data_r5.ribbon !== true));
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵtextInterpolate */.JRh(data_r5.type);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate */.JRh(data_r5.purpose);
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate1 */.SpI("", data_r5.rate, " ");
    core/* ɵɵadvance */.R7$(16);
    core/* ɵɵtextInterpolate */.JRh(data_r5.users);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate1 */.SpI("", data_r5.storage, " GB");
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r5.domain);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate */.JRh(data_r5.support);
  }
}
/**
 * Pricing Component
 */
class PricingComponent {
  constructor() {}
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
    // Chat Data Get Function
    this._fetchData();
  }
  // Chat Data Fetch
  _fetchData() {
    this.MonthlyPlan = data/* MonthlyPlan */.Ny;
    this.YearlyPlan = data/* YearlyPlan */.yw;
    this.pricingPlan = data/* pricingPlan */.Wv;
    this.SimplePlan = data/* SimplePlan */.cH;
  }
  static {
    this.ɵfac = function PricingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PricingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: PricingComponent,
      selectors: [["app-pricing"]],
      decls: 43,
      vars: 7,
      consts: [["customNav", "ngbNav"], ["title", "Pages", 3, "breadcrumbItems"], [1, "row", "justify-content-center", "mt-4"], [1, "col-lg-5"], [1, "text-center", "mb-4"], [1, "fw-semibold", "fs-22"], [1, "text-muted", "mb-4", "fs-15"], [1, "d-inline-flex"], ["ngbNav", "", "id", "pills-tab", "role", "tablist", "role", "tablist", 1, "nav", "nav-pills", "arrow-navtabs", "plan-nav", "rounded", "mb-3", "p-1", 3, "activeId"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", 1, "nav-link"], ["ngbNavContent", ""], [1, "badge", "bg-success"], [1, "row"], [3, "ngbNavOutlet"], [1, "row", "justify-content-center", "mt-5"], [1, "text-center", "mb-4", "pb-2"], [1, "row", "justify-content-center"], [1, "col-xl-9"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], ["class", "col-xxl-3 col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-xxl-3", "col-lg-6"], [1, "card", "pricing-box", 3, "ngClass"], [1, "card-body", "bg-light", "m-2", "p-4"], [1, "ribbon-two", "ribbon-two-danger", 3, "ngClass"], [1, "d-flex", "align-items-center", "mb-3"], [1, "flex-grow-1"], [1, "mb-0", "fw-semibold"], [1, "ms-auto"], [1, "month", "mb-0"], [1, "fs-13", "text-muted"], [1, "text-muted"], [1, "list-unstyled", "vstack", "gap-3"], [1, "d-flex"], [1, "flex-shrink-0", "text-success", "me-1"], [1, "ri-checkbox-circle-fill", "fs-15", "align-middle"], [1, "mt-3", "pt-2"], ["href", "javascript:void(0);", 3, "ngClass"], [1, "annual", "mb-0"], [1, "fs-16"], [1, "card-body", "p-4", "m-2"], [1, "d-flex", "align-items-center"], [1, "mb-1", "fw-semibold"], [1, "text-muted", "mb-0"], [1, "avatar-sm"], [1, "avatar-title", "bg-light", "rounded-circle", "text-primary"], [1, "pt-4"], [1, "my-4", "text-muted"], [1, "list-unstyled", "text-muted", "vstack", "gap-3"], [1, "mt-4"], ["href", "javascript:void(0);"], [1, "col-lg-6"], [1, "card", "pricing-box", "text-center", 3, "ngClass"], [1, "ribbon", "ribbon-primary", 3, "ngClass"], [1, "row", "g-0"], [1, "card-body", "h-100"], [1, "mb-1"], [1, "py-4"], [1, "text-center", "plan-btn", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "btn-success", "w-sm", "waves-effect", "waves-light"], [1, "card-body", "border-start", "mt-4", "mt-lg-0"], [1, "card-header", "bg-light"], [1, "fs-15", "mb-0"], [1, "card-body", "pb-0"], [1, "list-unstyled", "vstack", "gap-3", "mb-0"], [1, "text-success", "fw-semibold"]],
      template: function PricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelement */.nrm(0, "app-breadcrumbs", 1);
          core/* ɵɵelementStart */.j41(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h4", 5);
          core/* ɵɵtext */.EFF(5, "Plans & Pricing");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(6, "p", 6);
          core/* ɵɵtext */.EFF(7, "Simple pricing. No hidden fees. Advanced features for you business.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(8, "div", 7)(9, "ul", 8, 0)(11, "li", 9)(12, "a", 10);
          core/* ɵɵtext */.EFF(13, " Monthly ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(14, PricingComponent_ng_template_14_Template, 2, 1, "ng-template", 11);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(15, "li", 9)(16, "a", 10);
          core/* ɵɵtext */.EFF(17, " Annually ");
          core/* ɵɵelementStart */.j41(18, "span", 12);
          core/* ɵɵtext */.EFF(19, "25% Off");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵtemplate */.DNE(20, PricingComponent_ng_template_20_Template, 2, 1, "ng-template", 11);
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(21, "div", 13);
          core/* ɵɵelement */.nrm(22, "div", 14);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(23, "div", 15)(24, "div", 3)(25, "div", 16)(26, "h4", 5);
          core/* ɵɵtext */.EFF(27, "Choose the plan that's right for you");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(28, "p", 6);
          core/* ɵɵtext */.EFF(29, "Simple pricing. No hidden fees. Advanced features for you business.");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(30, "div", 17)(31, "div", 18)(32, "div", 13);
          core/* ɵɵtemplate */.DNE(33, PricingComponent_div_33_Template, 83, 36, "div", 19);
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(34, "div", 15)(35, "div", 20)(36, "div", 16)(37, "h4", 5);
          core/* ɵɵtext */.EFF(38, "Simple Pricing Plan");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(39, "p", 6);
          core/* ɵɵtext */.EFF(40, "Simple pricing. No hidden fees. Advanced features for you business.");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(41, "div", 13);
          core/* ɵɵtemplate */.DNE(42, PricingComponent_div_42_Template, 46, 13, "div", 21);
          core/* ɵɵelementEnd */.k0s();
        }
        if (rf & 2) {
          const customNav_r6 = core/* ɵɵreference */.sdS(10);
          core/* ɵɵproperty */.Y8G("breadcrumbItems", ctx.breadCrumbItems);
          core/* ɵɵadvance */.R7$(9);
          core/* ɵɵproperty */.Y8G("activeId", 1);
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 1);
          core/* ɵɵadvance */.R7$(4);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 2);
          core/* ɵɵadvance */.R7$(7);
          core/* ɵɵproperty */.Y8G("ngbNavOutlet", customNav_r6);
          core/* ɵɵadvance */.R7$(11);
          core/* ɵɵproperty */.Y8G("ngForOf", ctx.pricingPlan);
          core/* ɵɵadvance */.R7$(9);
          core/* ɵɵproperty */.Y8G("ngForOf", ctx.SimplePlan);
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgForOf */.Sq, ng_bootstrap/* NgbNavContent */.Um, ng_bootstrap/* NgbNav */.X9, ng_bootstrap/* NgbNavItem */.sy, ng_bootstrap/* NgbNavItemRole */.Gx, ng_bootstrap/* NgbNavLink */.Ri, ng_bootstrap/* NgbNavLinkBase */.WA, ng_bootstrap/* NgbNavOutlet */.m_, breadcrumbs_component/* BreadcrumbsComponent */.m]
    });
  }
}
// EXTERNAL MODULE: ./node_modules/ngx-lightbox/index.js + 7 modules
var ngx_lightbox = __webpack_require__(42244);
;// CONCATENATED MODULE: ./src/app/pages/extrapages/gallery/gallery.component.ts




const gallery_component_c0 = a0 => ({
  "active": a0
});
function GalleryComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "a", 21);
    core/* ɵɵelement */.nrm(4, "img", 22);
    core/* ɵɵelementStart */.j41(5, "div", 23);
    core/* ɵɵlistener */.bIt("click", function GalleryComponent_div_25_Template_div_click_5_listener() {
      const i_r2 = core/* ɵɵrestoreView */.eBV(_r1).index;
      const ctx_r2 = core/* ɵɵnextContext */.XpG();
      return core/* ɵɵresetView */.Njj(ctx_r2.open(i_r2));
    });
    core/* ɵɵelementStart */.j41(6, "h5", 24);
    core/* ɵɵtext */.EFF(7);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(8, "div", 25)(9, "div", 26)(10, "div", 27);
    core/* ɵɵtext */.EFF(11, "by ");
    core/* ɵɵelementStart */.j41(12, "a", 28);
    core/* ɵɵtext */.EFF(13);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(14, "div", 29)(15, "div", 30)(16, "button", 31);
    core/* ɵɵelement */.nrm(17, "i", 32);
    core/* ɵɵtext */.EFF(18);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(19, "button", 31);
    core/* ɵɵelement */.nrm(20, "i", 33);
    core/* ɵɵtext */.EFF(21);
    core/* ɵɵelementEnd */.k0s()()()()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵpropertyInterpolate */.FS9("src", data_r4.img, core/* ɵɵsanitizeUrl */.B4B);
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate */.JRh(data_r4.title);
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate */.JRh(data_r4.auther);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate1 */.SpI(" ", data_r4.likes, " ");
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate1 */.SpI(" ", data_r4.comments, " ");
  }
}
/**
 * Gallery Component
 */
class GalleryComponent {
  constructor(lightbox) {
    this.lightbox = lightbox;
    this.images = [];
    this.galleryFilter = 'all';
    this.list = [{
      id: 1,
      img: 'assets/images/small/img-1.jpg',
      title: "Glasses and laptop from above",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K",
      category: 'project'
    }, {
      id: 3,
      img: 'assets/images/small/img-3.jpg',
      title: "Photo was taken in Beach",
      auther: "Elwood Arter",
      likes: "2.2K",
      comments: "1.3K",
      category: 'project'
    }, {
      id: 4,
      img: 'assets/images/small/img-4.jpg',
      title: "Drawing a sketch",
      auther: "Jason McQuaid",
      likes: "2.2K",
      comments: "1.3K",
      category: 'project'
    }, {
      id: 5,
      img: 'assets/images/small/img-5.jpg',
      title: "Working from home little spot",
      auther: "Henry Baird",
      likes: "2.2K",
      comments: "1.3K",
      category: 'project'
    }, {
      id: 6,
      img: 'assets/images/small/img-7.jpg',
      title: "Sunrise above a beach",
      auther: "James Ballard",
      likes: "2.2K",
      comments: "1.3K",
      category: 'project'
    }, {
      id: 7,
      img: 'assets/images/small/img-9.jpg',
      title: "Dramatic clouds at the Golden Gate Bridge",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K",
      category: 'project'
    }, {
      id: 8,
      img: 'assets/images/small/img-10.jpg',
      title: "Fun day at the Hill Station",
      auther: "Henry Baird",
      likes: "2.2K",
      comments: "1.3K",
      category: 'project'
    }, {
      id: 9,
      img: 'assets/images/small/img-1.jpg',
      title: "Glasses and laptop from above",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K",
      category: 'designing'
    }, {
      id: 10,
      img: 'assets/images/small/img-4.jpg',
      title: "Drawing a sketch",
      auther: "Jason McQuaid",
      likes: "2.2K",
      comments: "1.3K",
      category: 'designing'
    }, {
      id: 11,
      img: 'assets/images/small/img-5.jpg',
      title: "Working from home little spot",
      auther: "Henry Baird",
      likes: "2.2K",
      comments: "1.3K",
      category: 'designing'
    }, {
      id: 12,
      img: 'assets/images/small/img-7.jpg',
      title: "Sunrise above a beach",
      auther: "James Ballard",
      likes: "2.2K",
      comments: "1.3K",
      category: 'designing'
    }, {
      id: 13,
      img: 'assets/images/small/img-9.jpg',
      title: "Dramatic clouds at the Golden Gate Bridge",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K",
      category: 'designing'
    }, {
      id: 14,
      img: 'assets/images/small/img-10.jpg',
      title: "Fun day at the Hill Station",
      auther: "Henry Baird",
      likes: "2.2K",
      comments: "1.3K",
      category: 'designing'
    }, {
      id: 15,
      img: 'assets/images/small/img-2.jpg',
      title: "Working at a coffee shop",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: 'photography'
    }, {
      id: 16,
      img: 'assets/images/small/img-6.jpg',
      title: "Project discussion with team",
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: 'photography'
    }, {
      id: 17,
      img: 'assets/images/small/img-8.jpg',
      title: "Glasses and laptop from above",
      auther: "Erica Kernan",
      likes: "2.2K",
      comments: "1.3K",
      category: 'photography'
    }, {
      id: 18,
      img: 'assets/images/small/img-11.jpg',
      title: "Cycling in the countryside",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: 'photography'
    }, {
      id: 19,
      img: 'assets/images/small/img-12.jpg',
      title: "A mix of friends and strangers heading off to find an adventure.",
      auther: "Erica Kernan",
      likes: "2.2K",
      comments: "1.3K",
      category: 'photography'
    }, {
      id: 20,
      img: 'assets/images/small/img-1.jpg',
      title: "Glasses and laptop from above",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K",
      category: 'development'
    }, {
      id: 21,
      img: 'assets/images/small/img-3.jpg',
      title: "Photo was taken in Beach",
      auther: "Elwood Arter",
      likes: "2.2K",
      comments: "1.3K",
      category: 'development'
    }, {
      id: 22,
      img: 'assets/images/small/img-7.jpg',
      title: "Sunrise above a beach",
      auther: "James Ballard",
      likes: "2.2K",
      comments: "1.3K",
      category: 'development'
    }, {
      id: 23,
      img: 'assets/images/small/img-9.jpg',
      title: "Dramatic clouds at the Golden Gate Bridge",
      auther: "Ron Mackie",
      likes: "2.2K",
      comments: "1.3K",
      category: 'development'
    }];
    for (let i = 1; i <= 24; i++) {
      const src = '../../../../assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../../assets/images/small/img-' + i + '-thumb.jpg';
      const item = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this.images.push(item);
    }
  }
  ngOnInit() {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [{
      label: 'Pages'
    }, {
      label: 'Gallery',
      active: true
    }];
    this.filterredImages = this.list;
  }
  /***
  * Active all category selected
  */
  activeCategory(category) {
    this.galleryFilter = category;
    if (this.galleryFilter === 'all') {
      this.filterredImages = this.list;
    } else {
      this.filterredImages = this.list.filter(x => x.category === this.galleryFilter);
    }
  }
  open(index) {
    // open lightbox
    this.lightbox.open(this.images, index, {});
  }
  close() {
    // close lightbox programmatically
    this.lightbox.close();
  }
  static {
    this.ɵfac = function GalleryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GalleryComponent)(core/* ɵɵdirectiveInject */.rXU(ngx_lightbox/* Lightbox */.Yf));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      decls: 30,
      vars: 17,
      consts: [["title", "Gallery", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, ""], [1, "card-body"], [1, "text-center"], ["id", "filter", 1, "list-inline", "categories-filter", "animation-nav"], [1, "list-inline-item"], ["data-filter", "*", 1, "categories", "active", 3, "click", "ngClass"], ["data-filter", ".project", 1, "categories", 3, "click", "ngClass"], ["data-filter", ".designing", 1, "categories", 3, "click", "ngClass"], ["data-filter", ".photography", 1, "categories", 3, "click", "ngClass"], ["data-filter", ".development", 1, "categories", 3, "click", "ngClass"], [1, "row", "gallery-wrapper"], ["class", "element-item col-xxl-3 col-xl-4 col-sm-6 project designing development", "data-category", "designing development", 4, "ngFor", "ngForOf"], [1, "text-center", "my-2"], ["href", "javascript:void(0);", 1, "text-success"], [1, "mdi", "mdi-loading", "mdi-spin", "fs-20", "align-middle", "me-2"], ["data-category", "designing development", 1, "element-item", "col-xxl-3", "col-xl-4", "col-sm-6", "project", "designing", "development"], [1, "gallery-box", "card"], [1, "gallery-container"], ["title", "", 1, "image-popup"], ["alt", "", 1, "gallery-img", "img-fluid", "mx-auto", 3, "src"], [1, "gallery-overlay", 3, "click"], [1, "overlay-caption"], [1, "box-content"], [1, "d-flex", "align-items-center", "mt-1"], [1, "flex-grow-1", "text-muted"], ["href", "javascript:void(0);", 1, "text-body", "text-truncate"], [1, "flex-shrink-0"], [1, "d-flex", "gap-3"], ["type", "button", 1, "btn", "btn-sm", "fs-12", "btn-link", "text-body", "text-decoration-none", "px-0"], [1, "ri-thumb-up-fill", "text-muted", "align-bottom", "me-1"], [1, "ri-question-answer-fill", "text-muted", "align-bottom", "me-1"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelement */.nrm(0, "app-breadcrumbs", 0);
          core/* ɵɵelementStart */.j41(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 2)(7, "div", 5)(8, "ul", 6)(9, "li", 7)(10, "a", 8);
          core/* ɵɵlistener */.bIt("click", function GalleryComponent_Template_a_click_10_listener() {
            return ctx.activeCategory("all");
          });
          core/* ɵɵtext */.EFF(11, "All");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(12, "li", 7)(13, "a", 9);
          core/* ɵɵlistener */.bIt("click", function GalleryComponent_Template_a_click_13_listener() {
            return ctx.activeCategory("project");
          });
          core/* ɵɵtext */.EFF(14, "Project");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(15, "li", 7)(16, "a", 10);
          core/* ɵɵlistener */.bIt("click", function GalleryComponent_Template_a_click_16_listener() {
            return ctx.activeCategory("designing");
          });
          core/* ɵɵtext */.EFF(17, "Designing");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(18, "li", 7)(19, "a", 11);
          core/* ɵɵlistener */.bIt("click", function GalleryComponent_Template_a_click_19_listener() {
            return ctx.activeCategory("photography");
          });
          core/* ɵɵtext */.EFF(20, "Photography");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(21, "li", 7)(22, "a", 12);
          core/* ɵɵlistener */.bIt("click", function GalleryComponent_Template_a_click_22_listener() {
            return ctx.activeCategory("development");
          });
          core/* ɵɵtext */.EFF(23, "Development");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(24, "div", 13);
          core/* ɵɵtemplate */.DNE(25, GalleryComponent_div_25_Template, 22, 5, "div", 14);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(26, "div", 15)(27, "a", 16);
          core/* ɵɵelement */.nrm(28, "i", 17);
          core/* ɵɵtext */.EFF(29, " Load More ");
          core/* ɵɵelementEnd */.k0s()()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("breadcrumbItems", ctx.breadCrumbItems);
          core/* ɵɵadvance */.R7$(10);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(7, gallery_component_c0, ctx.galleryFilter === "all"));
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(9, gallery_component_c0, ctx.galleryFilter === "project"));
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(11, gallery_component_c0, ctx.galleryFilter === "designing"));
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(13, gallery_component_c0, ctx.galleryFilter === "photography"));
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngClass", core/* ɵɵpureFunction1 */.eq3(15, gallery_component_c0, ctx.galleryFilter === "development"));
          core/* ɵɵadvance */.R7$(3);
          core/* ɵɵproperty */.Y8G("ngForOf", ctx.filterredImages);
        }
      },
      dependencies: [common/* NgClass */.YU, common/* NgForOf */.Sq, breadcrumbs_component/* BreadcrumbsComponent */.m]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/sitemap/sitemap.component.ts


/**
 * Sitemap Component
 */
class SitemapComponent {
  constructor() {}
  ngOnInit() {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [{
      label: 'Pages'
    }, {
      label: 'Sitemap',
      active: true
    }];
  }
  static {
    this.ɵfac = function SitemapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SitemapComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: SitemapComponent,
      selectors: [["app-sitemap"]],
      decls: 363,
      vars: 1,
      consts: [["title", "Sitemap", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], [1, "sitemap-content"], [1, "sitemap-horizontal"], [1, "administration"], [1, "director"], ["href", "javascript:void(0);", 1, "fw-semibold"], [1, "subdirector"], [1, "departments"], [1, "department"], ["href", "javascript:void(0);"], [1, "hori-sitemap"], [1, "list-unstyled", "mb-0"], [1, "p-0", "parent-title"], ["href", "javascript: void(0);", 1, "fw-semibold", "fs-14"], [1, "list-unstyled", "second-list", "row", "g-0", "pt-0"], [1, "col-sm-3"], ["href", "javascript: void(0);", 1, "fw-semibold", "sub-title"], [1, "list-unstyled", "row", "g-0", "second-list"], [1, "col-sm-6"], ["href", "javascript: void(0);"], ["href", "javascript: void(0);", 1, "fw-semibold"], [1, "list-unstyled", "second-list", "pt-0"], [1, "list-unstyled", "row", "g-0", "sub-list"], [1, "list-unstyled", "second-list"], [1, "verti-sitemap"], ["href", "javascript: void(0);", 1, "fw-medium", "fs-14"], [1, "first-list"], [1, "list-wrap"], ["href", "javascript: void(0);", 1, "fw-medium", "text-primary"], [1, "second-list", "list-unstyled"], [1, "third-list", "list-unstyled"], [1, "ri-airplay-line", "me-1", "align-bottom"], [1, "ri-pencil-ruler-2-line", "me-1", "align-bottom"], [1, "ri-file-list-3-line", "me-1", "align-bottom"], [1, "ri-stack-line", "me-1", "align-bottom"]],
      template: function SitemapComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelement */.nrm(0, "app-breadcrumbs", 0);
          core/* ɵɵelementStart */.j41(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
          core/* ɵɵtext */.EFF(6, "Responsive Sitemap");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(7, "div", 6)(8, "div", 7)(9, "figure", 8)(10, "ul", 9)(11, "li")(12, "ul", 10)(13, "li")(14, "a", 11)(15, "span");
          core/* ɵɵtext */.EFF(16, "Velzon Admin");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(17, "ul", 12)(18, "li")(19, "a", 11)(20, "span");
          core/* ɵɵtext */.EFF(21, "Contact Us");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(22, "ul", 13)(23, "li")(24, "a", 11)(25, "span");
          core/* ɵɵtext */.EFF(26, "Main Pages");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(27, "li", 14)(28, "a", 11)(29, "span");
          core/* ɵɵtext */.EFF(30, "Account Management");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(31, "ul")(32, "li")(33, "a", 15)(34, "span");
          core/* ɵɵtext */.EFF(35, "Sign Up");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(36, "li")(37, "a", 15)(38, "span");
          core/* ɵɵtext */.EFF(39, "Login");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(40, "li")(41, "a", 15)(42, "span");
          core/* ɵɵtext */.EFF(43, "Profile Settings");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(44, "li")(45, "a", 15)(46, "span");
          core/* ɵɵtext */.EFF(47, "Modify Reservation");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(48, "li")(49, "a", 15)(50, "span");
          core/* ɵɵtext */.EFF(51, "Cancel Reservation");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(52, "li")(53, "a", 15)(54, "span");
          core/* ɵɵtext */.EFF(55, "Write Reviews");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(56, "li", 14)(57, "a", 11)(58, "span");
          core/* ɵɵtext */.EFF(59, "About Us");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(60, "ul")(61, "li")(62, "a", 15)(63, "span");
          core/* ɵɵtext */.EFF(64, "Overview");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(65, "li")(66, "a", 15)(67, "span");
          core/* ɵɵtext */.EFF(68, "Connect Via Social Media");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(69, "li")(70, "a", 15)(71, "span");
          core/* ɵɵtext */.EFF(72, "Careers");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(73, "li")(74, "a", 15)(75, "span");
          core/* ɵɵtext */.EFF(76, "Team Members");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(77, "li")(78, "a", 15)(79, "span");
          core/* ɵɵtext */.EFF(80, "Policies");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(81, "li", 14)(82, "a", 11)(83, "span");
          core/* ɵɵtext */.EFF(84, "Book a Trip");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(85, "ul")(86, "li")(87, "a", 15)(88, "span");
          core/* ɵɵtext */.EFF(89, "Travel Details");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(90, "li")(91, "a", 15)(92, "span");
          core/* ɵɵtext */.EFF(93, "Reservation Process");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(94, "li")(95, "a", 15)(96, "span");
          core/* ɵɵtext */.EFF(97, "Payment Option");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(98, "li")(99, "a", 15)(100, "span");
          core/* ɵɵtext */.EFF(101, "Comfirmation");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(102, "li", 14)(103, "a", 11)(104, "span");
          core/* ɵɵtext */.EFF(105, "Destination");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(106, "ul")(107, "li")(108, "a", 15)(109, "span");
          core/* ɵɵtext */.EFF(110, "Architecture");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(111, "li")(112, "a", 15)(113, "span");
          core/* ɵɵtext */.EFF(114, "Art");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(115, "li")(116, "a", 15)(117, "span");
          core/* ɵɵtext */.EFF(118, "Entertainment");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(119, "li")(120, "a", 15)(121, "span");
          core/* ɵɵtext */.EFF(122, "History");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(123, "li")(124, "a", 15)(125, "span");
          core/* ɵɵtext */.EFF(126, "Science");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(127, "li")(128, "a", 15)(129, "span");
          core/* ɵɵtext */.EFF(130, "Sports");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(131, "li")(132, "a", 15)(133, "span");
          core/* ɵɵtext */.EFF(134, "Music");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(135, "li")(136, "a", 15)(137, "span");
          core/* ɵɵtext */.EFF(138, "Tracking Camp");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(139, "li", 14)(140, "a", 11)(141, "span");
          core/* ɵɵtext */.EFF(142, "Travel Tips");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(143, "ul")(144, "li")(145, "a", 15)(146, "span");
          core/* ɵɵtext */.EFF(147, "General Travel");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(148, "li")(149, "a", 15)(150, "span");
          core/* ɵɵtext */.EFF(151, "Helpth Concerns");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(152, "li")(153, "a", 15)(154, "span");
          core/* ɵɵtext */.EFF(155, "Safety Measures");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(156, "li")(157, "a", 15)(158, "span");
          core/* ɵɵtext */.EFF(159, "FAQ's");
          core/* ɵɵelementEnd */.k0s()()()()()()()()()()()()()()()();
          core/* ɵɵelementStart */.j41(160, "div", 1)(161, "div", 2)(162, "div", 3)(163, "div", 4)(164, "h4", 5);
          core/* ɵɵtext */.EFF(165, "Horizontal");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(166, "div", 6)(167, "div", 16)(168, "ul", 17)(169, "li", 18)(170, "a", 19);
          core/* ɵɵtext */.EFF(171, "My Account");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(172, "ul", 20)(173, "li", 21)(174, "a", 22);
          core/* ɵɵtext */.EFF(175, "About Us");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(176, "ul", 23)(177, "li", 24)(178, "a", 25);
          core/* ɵɵtext */.EFF(179, "Overview");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(180, "li", 24)(181, "a", 25);
          core/* ɵɵtext */.EFF(182, "History");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(183, "li", 21)(184, "a", 26);
          core/* ɵɵtext */.EFF(185, "My self-care Plan");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(186, "ul", 27)(187, "li")(188, "div")(189, "a", 25);
          core/* ɵɵtext */.EFF(190, "Basic");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(191, "a", 25);
          core/* ɵɵtext */.EFF(192, "Early Physiotherapy");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(193, "a", 25);
          core/* ɵɵtext */.EFF(194, "Intermediate Physiotherapy");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(195, "a", 25);
          core/* ɵɵtext */.EFF(196, "Return to Normal Activity");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(197, "li", 21)(198, "a", 22);
          core/* ɵɵtext */.EFF(199, "Support Us");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(200, "ul", 28)(201, "li", 24)(202, "a", 25);
          core/* ɵɵtext */.EFF(203, "Contact Us");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(204, "li", 24)(205, "a", 25);
          core/* ɵɵtext */.EFF(206, "Customer Services");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(207, "ul", 29)(208, "li")(209, "div")(210, "a", 25);
          core/* ɵɵtext */.EFF(211, "Chat With Us");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(212, "a", 25);
          core/* ɵɵtext */.EFF(213, "Connect Information");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(214, "a", 25);
          core/* ɵɵtext */.EFF(215, "FAQ'S");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(216, "li", 21)(217, "a", 26);
          core/* ɵɵtext */.EFF(218, "Terms & Conditions");
          core/* ɵɵelementEnd */.k0s()()()()()()()()();
          core/* ɵɵelementStart */.j41(219, "div", 1)(220, "div", 2)(221, "div", 3)(222, "div", 4)(223, "h4", 5);
          core/* ɵɵtext */.EFF(224, "Vertical");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(225, "div", 6)(226, "div", 1)(227, "div", 24)(228, "div", 30)(229, "ul", 17)(230, "li", 18)(231, "a", 31);
          core/* ɵɵtext */.EFF(232, "Nancy Martino - Project Director");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(233, "li")(234, "div", 32)(235, "div", 33)(236, "a", 34);
          core/* ɵɵtext */.EFF(237, "Erica Kernan - Team Leader");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(238, "ul", 35)(239, "li")(240, "a", 25);
          core/* ɵɵtext */.EFF(241, "Jason McQuaid - Member");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(242, "li")(243, "a", 25);
          core/* ɵɵtext */.EFF(244, "Elwood Arter - Member");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(245, "div", 32)(246, "div", 33)(247, "a", 34);
          core/* ɵɵtext */.EFF(248, "Mary Jones - Project Manager");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(249, "ul", 35)(250, "li")(251, "a", 25);
          core/* ɵɵtext */.EFF(252, "Jordyn Jones - Designer");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(253, "li")(254, "a", 25);
          core/* ɵɵtext */.EFF(255, "Ashlee Haney - Developer");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(256, "li")(257, "a", 25);
          core/* ɵɵtext */.EFF(258, "Rashad Charles - BackEnd Developer");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(259, "li")(260, "a", 25);
          core/* ɵɵtext */.EFF(261, "Walter Newman - Frontend Developer");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(262, "li")(263, "a", 25);
          core/* ɵɵtext */.EFF(264, "Adam Moss - Designer");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(265, "div", 32)(266, "div", 33)(267, "a", 34);
          core/* ɵɵtext */.EFF(268, "Tilly Kent - Executive Manager");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(269, "ul", 35)(270, "li")(271, "a", 25);
          core/* ɵɵtext */.EFF(272, "Tyler Porter - Account Executive");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(273, "li")(274, "a", 25);
          core/* ɵɵtext */.EFF(275, "Alicia Thompson - Sales Executive");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(276, "ul", 36)(277, "li")(278, "a", 25);
          core/* ɵɵtext */.EFF(279, "Jack Coates - Member");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(280, "li")(281, "a", 25);
          core/* ɵɵtext */.EFF(282, "Owen Jarvis - Member");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(283, "li")(284, "a", 25);
          core/* ɵɵtext */.EFF(285, "Ashlee Haney - Member");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(286, "li")(287, "a", 25);
          core/* ɵɵtext */.EFF(288, "Archie Cook - Member");
          core/* ɵɵelementEnd */.k0s()()()()()();
          core/* ɵɵelementStart */.j41(289, "div", 32)(290, "div", 33)(291, "a", 34);
          core/* ɵɵtext */.EFF(292, "Rachel Rose - HR");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(293, "div", 24)(294, "div", 30)(295, "ul", 17)(296, "li", 18)(297, "a", 31);
          core/* ɵɵtext */.EFF(298, "Velzon");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(299, "li")(300, "div", 32)(301, "div", 33)(302, "a", 34);
          core/* ɵɵelement */.nrm(303, "i", 37);
          core/* ɵɵtext */.EFF(304, " Dashboards");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(305, "ul", 35)(306, "li")(307, "a", 25);
          core/* ɵɵtext */.EFF(308, "Analytics");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(309, "li")(310, "a", 25);
          core/* ɵɵtext */.EFF(311, "CRM");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(312, "div", 32)(313, "div", 33)(314, "a", 34);
          core/* ɵɵelement */.nrm(315, "i", 38);
          core/* ɵɵtext */.EFF(316, " App Pages");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(317, "ul", 35)(318, "li")(319, "a", 25);
          core/* ɵɵtext */.EFF(320, "Calender");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(321, "li")(322, "a", 25);
          core/* ɵɵtext */.EFF(323, "Chat");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(324, "li")(325, "a", 25);
          core/* ɵɵtext */.EFF(326, "Email");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(327, "li")(328, "a", 25);
          core/* ɵɵtext */.EFF(329, "Ecommerce");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(330, "li")(331, "a", 25);
          core/* ɵɵtext */.EFF(332, "Projects");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(333, "li")(334, "a", 25);
          core/* ɵɵtext */.EFF(335, "Tasks");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(336, "div", 32)(337, "div", 33)(338, "a", 34);
          core/* ɵɵelement */.nrm(339, "i", 39);
          core/* ɵɵtext */.EFF(340, " Pages");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(341, "div", 32)(342, "div", 33)(343, "a", 34);
          core/* ɵɵelement */.nrm(344, "i", 40);
          core/* ɵɵtext */.EFF(345, " Components");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(346, "ul", 35)(347, "li")(348, "a", 25);
          core/* ɵɵtext */.EFF(349, "Base UI");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(350, "li")(351, "a", 25);
          core/* ɵɵtext */.EFF(352, "Advance UI");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(353, "ul", 36)(354, "li")(355, "a", 25);
          core/* ɵɵtext */.EFF(356, "Sweet Alerts");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(357, "li")(358, "a", 25);
          core/* ɵɵtext */.EFF(359, "Range Slider");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(360, "li")(361, "a", 25);
          core/* ɵɵtext */.EFF(362, "Nestable List");
          core/* ɵɵelementEnd */.k0s()()()()()()()()()()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("breadcrumbItems", ctx.breadCrumbItems);
        }
      },
      dependencies: [breadcrumbs_component/* BreadcrumbsComponent */.m]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/search-results/data.ts
/**
 * swiper Data
 */
const swiper = [{
  id: 1,
  img: 'assets/images/small/img-12.jpg',
  title: "Bootstrap"
}, {
  id: 2,
  img: 'assets/images/small/img-11.jpg',
  title: "Website"
}, {
  id: 3,
  img: 'assets/images/small/img-10.jpg',
  title: "Responsive"
}, {
  id: 4,
  img: 'assets/images/small/img-9.jpg',
  title: "Design"
}, {
  id: 5,
  img: 'assets/images/small/img-8.jpg',
  title: "eCommerce"
}, {
  id: 6,
  img: 'assets/images/small/img-7.jpg',
  title: "Templates"
}, {
  id: 7,
  img: 'assets/images/small/img-6.jpg',
  title: "Admin Panel"
}, {
  id: 8,
  img: 'assets/images/small/img-5.jpg',
  title: "Simple"
}, {
  id: 9,
  img: 'assets/images/small/img-4.jpg',
  title: "Dark"
}];
/**
 * Gallery Data
 */
const gallery = [{
  id: 1,
  img: 'assets/images/small/img-1.jpg',
  title: "Glasses and laptop from above",
  auther: "Ron Mackie",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 2,
  img: 'assets/images/small/img-2.jpg',
  title: "Working at a coffee shop",
  auther: "Nancy Martino",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 3,
  img: 'assets/images/small/img-3.jpg',
  title: "Photo was taken in Beach",
  auther: "Elwood Arter",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 4,
  img: 'assets/images/small/img-4.jpg',
  title: "Drawing a sketch",
  auther: "Jason McQuaid",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 5,
  img: 'assets/images/small/img-4.jpg',
  title: "Working from home little spot",
  auther: "Henry Baird",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 6,
  img: 'assets/images/small/img-5.jpg',
  title: "Glasses and laptop from above",
  auther: "Erica Kernan",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 7,
  img: 'assets/images/small/img-6.jpg',
  title: "Sunrise above a beach",
  auther: "James Ballard",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 8,
  img: 'assets/images/small/img-7.jpg',
  title: "Project discussion with team",
  auther: "Ruby Griffin",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 9,
  img: 'assets/images/small/img-8.jpg',
  title: "Dramatic clouds at the Golden Gate Bridge",
  auther: "Ron Mackie",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 10,
  img: 'assets/images/small/img-9.jpg',
  title: "Fun day at the Hill Station",
  auther: "Henry Baird",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 11,
  img: 'assets/images/small/img-10.jpg',
  title: "Cycling in the countryside",
  auther: "Nancy Martino",
  likes: "2.2K",
  comments: "1.3K"
}, {
  id: 12,
  img: 'assets/images/small/img-11.jpg',
  title: "A mix of friends and strangers heading off to find an adventure.",
  auther: "Erica Kernan",
  likes: "2.2K",
  comments: "1.3K"
}];
/**
 * New Data
 */
const news = [{
  id: 1,
  img: 'assets/images/small/img-1.jpg',
  badgeClass: "success",
  badgeText: "Business",
  title: "A mix of friends and strangers heading off to find an adventure",
  auther: "James Ballard",
  date: "23 Nov, 2021"
}, {
  id: 2,
  img: 'assets/images/small/img-2.jpg',
  badgeClass: "warning",
  badgeText: "Development",
  title: "How to get creative in your work ?",
  auther: "Ruby Griffin",
  date: "23 Nov, 2021"
}, {
  id: 3,
  img: 'assets/images/small/img-3.jpg',
  badgeClass: "info",
  badgeText: "Fashion",
  title: "How to become a best sale marketer in a year!",
  auther: "Elwood Arter",
  date: "23 Nov, 2021"
}, {
  id: 4,
  img: 'assets/images/small/img-4.jpg',
  badgeClass: "primary",
  badgeText: "Product",
  title: "Manage white space in responsive layouts ?",
  auther: "Nancy Martino",
  date: "23 Nov, 2021"
}, {
  id: 5,
  img: 'assets/images/small/img-5.jpg',
  badgeClass: "success",
  badgeText: "Business",
  title: "Stack designer Olivia Murphy offers freelancing advice",
  auther: "Erica Kernan",
  date: "11 Nov, 2021"
}, {
  id: 6,
  img: 'assets/images/small/img-6.jpg',
  badgeClass: "danger",
  badgeText: "Design",
  title: "A day in the of a professional fashion designer",
  auther: "Jason McQuaid",
  date: "14 Nov, 2021"
}, {
  id: 7,
  img: 'assets/images/small/img-7.jpg',
  badgeClass: "danger",
  badgeText: "Design",
  title: "Design your apps in your own way",
  auther: "Henry Baird",
  date: "19 Nov, 2021"
}, {
  id: 8,
  img: 'assets/images/small/img-8.jpg',
  badgeClass: "warning",
  badgeText: "Development",
  title: "How apps is changing the IT world",
  auther: "Elwood Arter",
  date: "10 Aug, 2021"
}];
/**
 * Video Data
 */
const video = [{
  id: 1,
  title: "Admin dashboard templates - Material Design for Velzon",
  siteLink: "https://themesbrand.com/velzon/index.html",
  videoLink: "https://www.youtube.com/embed/GfSZtaoc5bw",
  description: "Velzon admin is super flexible, powerful, clean, modern & responsive admin template based on bootstrap 5 stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.",
  likes: 335,
  comments: 102,
  auther: "Themesbrand"
}, {
  id: 2,
  title: "Create Responsive Admin Dashboard using Html CSS",
  siteLink: "https://themesbrand.com/velzon/index.html",
  videoLink: "https://www.youtube.com/embed/Z-fV2lGKnnU",
  description: "Velzon admin is super flexible, powerful, clean, modern & responsive admin template based on bootstrap 5 stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.",
  likes: 485,
  comments: 167,
  auther: "Themesbrand"
}, {
  id: 3,
  title: "Velzon - The Most Popular Bootstrap 5 HTML, Angular & React Js Admin",
  siteLink: "https://themesbrand.com/velzon/index.html",
  videoLink: "https://www.youtube.com/embed/1y_kfWUCFDQ",
  description: "Velzon admin is super flexible, powerful, clean, modern & responsive admin template based on bootstrap 5 stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.",
  likes: 122,
  comments: 51,
  auther: "Themesbrand"
}];

;// CONCATENATED MODULE: ./src/app/pages/extrapages/search-results/search-results.component.ts






function SearchResultsComponent_ng_template_41_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 72)(1, "div")(2, "a", 73)(3, "img", 74);
    core/* ɵɵlistener */.bIt("click", function SearchResultsComponent_ng_template_41_div_32_Template_img_click_3_listener() {
      const i_r2 = core/* ɵɵrestoreView */.eBV(_r1).index;
      const ctx_r2 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r2.open(i_r2));
    });
    core/* ɵɵelementEnd */.k0s()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵpropertyInterpolate */.FS9("src", data_r4.src, core/* ɵɵsanitizeUrl */.B4B);
  }
}
function SearchResultsComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 44)(1, "h5", 45)(2, "a", 46);
    core/* ɵɵtext */.EFF(3, "Velzon - Responsive Bootstrap 5 Admin Dashboard");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(4, "p", 47);
    core/* ɵɵtext */.EFF(5, "https://themesbrand.com/velzon/index.html");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(6, "p", 48);
    core/* ɵɵtext */.EFF(7, "Velzon admin is super flexible, powerful, clean, modern & responsive admin template based on ");
    core/* ɵɵelementStart */.j41(8, "span", 49);
    core/* ɵɵtext */.EFF(9, "bootstrap 5");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(10, " stable with unlimited possibilities. You can simply change to any layout or mode by changing a couple of lines of code. You can start small and large projects or update design in your existing project using Velzon it is very quick and easy as it is beautiful, adroit, and delivers the ultimate user experience.");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(11, "ul", 50)(12, "li", 51);
    core/* ɵɵelement */.nrm(13, "i", 52);
    core/* ɵɵtext */.EFF(14, "10");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(15, "li", 51);
    core/* ɵɵelement */.nrm(16, "i", 53);
    core/* ɵɵtext */.EFF(17, "8");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(18, "li", 54)(19, "div", 55)(20, "div", 56);
    core/* ɵɵelement */.nrm(21, "i", 57);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(22, "div", 58)(23, "span", 59);
    core/* ɵɵtext */.EFF(24, "Themesbrand");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelement */.nrm(25, "div", 60);
    core/* ɵɵelementStart */.j41(26, "div", 61)(27, "h5", 62);
    core/* ɵɵtext */.EFF(28, "Showing results Images");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(29, "div", 2)(30, "div", 63)(31, "div", 8);
    core/* ɵɵtemplate */.DNE(32, SearchResultsComponent_ng_template_41_div_32_Template, 4, 1, "div", 64);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelement */.nrm(33, "div", 60);
    core/* ɵɵelementStart */.j41(34, "div", 61)(35, "h5", 45)(36, "a", 46);
    core/* ɵɵtext */.EFF(37, "Skote - Admin & Dashboard Template by Themesbrand");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(38, "p", 47);
    core/* ɵɵtext */.EFF(39, "https://themesbrand.com/skote/");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(40, "p", 48);
    core/* ɵɵtext */.EFF(41, "Skote is an admin dashboard template that is a beautifully crafted, clean & minimal designed admin template with Dark, Light Layouts with RTL options. You can build any type of web application like Saas based interface, eCommerce, Crypto, CRM, CMS, Project management apps, Admin Panels, etc.");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(42, "ul", 50)(43, "li", 51);
    core/* ɵɵelement */.nrm(44, "i", 52);
    core/* ɵɵtext */.EFF(45, "485");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(46, "li", 51);
    core/* ɵɵelement */.nrm(47, "i", 53);
    core/* ɵɵtext */.EFF(48, "167");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(49, "li", 54)(50, "div", 55)(51, "div", 56);
    core/* ɵɵelement */.nrm(52, "i", 57);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(53, "div", 58)(54, "span", 59);
    core/* ɵɵtext */.EFF(55, "Themesbrand");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelement */.nrm(56, "div", 60);
    core/* ɵɵelementStart */.j41(57, "div", 61)(58, "h5", 45)(59, "a", 46);
    core/* ɵɵtext */.EFF(60, "Minia - React Js Admin & Dashboard Template");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(61, "p", 47);
    core/* ɵɵtext */.EFF(62, "https://themesbrand.com/minia/react/");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(63, "p", 48);
    core/* ɵɵtext */.EFF(64, "Minia react is a simple and beautiful admin template built with Bootstrap ^5.1.3. It has ");
    core/* ɵɵelementStart */.j41(65, "span", 49);
    core/* ɵɵtext */.EFF(66, "5+ different layouts and 3 modes");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵtext */.EFF(67, " ( Dark, Light & RTL ) which are managed by SCSS only. You can simply change to any layouts or mode by changing a couple of lines code.");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(68, "ul", 50)(69, "li", 51);
    core/* ɵɵelement */.nrm(70, "i", 52);
    core/* ɵɵtext */.EFF(71, "69");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(72, "li", 51);
    core/* ɵɵelement */.nrm(73, "i", 53);
    core/* ɵɵtext */.EFF(74, "43");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(75, "li", 54)(76, "div", 55)(77, "div", 56);
    core/* ɵɵelement */.nrm(78, "i", 57);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(79, "div", 58)(80, "span", 59);
    core/* ɵɵtext */.EFF(81, "Themesbrand");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelement */.nrm(82, "div", 60);
    core/* ɵɵelementStart */.j41(83, "div", 61)(84, "h5", 45)(85, "a", 46);
    core/* ɵɵtext */.EFF(86, "Doson - Angular Admin & Dashboard Template by Themesbrand");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(87, "p", 47);
    core/* ɵɵtext */.EFF(88, "https://themesbrand.com/dason/angular/");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(89, "p", 48);
    core/* ɵɵtext */.EFF(90, "Dason is a simple and beautiful admin template built with Bootstrap ^5.1.3. It has 5+ different layouts and 3 modes ( Dark, Light & RTL ) which are managed by SCSS only. You can simply change to any layouts or mode by changing a couple of lines code.");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(91, "ul", 50)(92, "li", 51);
    core/* ɵɵelement */.nrm(93, "i", 52);
    core/* ɵɵtext */.EFF(94, "102");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(95, "li", 51);
    core/* ɵɵelement */.nrm(96, "i", 53);
    core/* ɵɵtext */.EFF(97, "36");
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(98, "li", 54)(99, "div", 55)(100, "div", 56);
    core/* ɵɵelement */.nrm(101, "i", 57);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(102, "div", 58)(103, "span", 59);
    core/* ɵɵtext */.EFF(104, "Themesbrand");
    core/* ɵɵelementEnd */.k0s()()()()()();
    core/* ɵɵelementStart */.j41(105, "div")(106, "ul", 65)(107, "li", 66)(108, "a", 67);
    core/* ɵɵelement */.nrm(109, "i", 68);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(110, "li", 69)(111, "a", 67);
    core/* ɵɵtext */.EFF(112, "1");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(113, "li", 70)(114, "a", 67);
    core/* ɵɵtext */.EFF(115, "2");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(116, "li", 70)(117, "a", 67);
    core/* ɵɵtext */.EFF(118, "3");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(119, "li", 70)(120, "a", 67);
    core/* ɵɵtext */.EFF(121, "4");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(122, "li", 70)(123, "a", 67);
    core/* ɵɵtext */.EFF(124, "5");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(125, "li", 70)(126, "a", 67);
    core/* ɵɵelement */.nrm(127, "i", 71);
    core/* ɵɵelementEnd */.k0s()()()();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$(32);
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r2.images);
  }
}
function SearchResultsComponent_ng_template_46_div_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 81)(1, "div", 82)(2, "div", 56);
    core/* ɵɵelement */.nrm(3, "img", 83);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(4, "div", 84)(5, "a", 85);
    core/* ɵɵtext */.EFF(6);
    core/* ɵɵelementEnd */.k0s()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵpropertyInterpolate */.FS9("src", data_r5.img, core/* ɵɵsanitizeUrl */.B4B);
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate */.JRh(data_r5.title);
  }
}
function SearchResultsComponent_ng_template_46_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = core/* ɵɵgetCurrentView */.RV6();
    core/* ɵɵelementStart */.j41(0, "div", 86)(1, "div", 87)(2, "div", 88)(3, "a", 89);
    core/* ɵɵelement */.nrm(4, "img", 90);
    core/* ɵɵelementStart */.j41(5, "div", 91);
    core/* ɵɵlistener */.bIt("click", function SearchResultsComponent_ng_template_46_div_7_Template_div_click_5_listener() {
      const i_r7 = core/* ɵɵrestoreView */.eBV(_r6).index;
      const ctx_r2 = core/* ɵɵnextContext */.XpG(2);
      return core/* ɵɵresetView */.Njj(ctx_r2.open(i_r7));
    });
    core/* ɵɵelementStart */.j41(6, "h5", 92);
    core/* ɵɵtext */.EFF(7);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(8, "div", 93)(9, "div", 94)(10, "div", 95);
    core/* ɵɵtext */.EFF(11, "by ");
    core/* ɵɵelementStart */.j41(12, "a", 96);
    core/* ɵɵtext */.EFF(13);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(14, "div", 56)(15, "div", 97)(16, "button", 98);
    core/* ɵɵelement */.nrm(17, "i", 99);
    core/* ɵɵtext */.EFF(18);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(19, "button", 98);
    core/* ɵɵelement */.nrm(20, "i", 100);
    core/* ɵɵtext */.EFF(21);
    core/* ɵɵelementEnd */.k0s()()()()()()();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵpropertyInterpolate */.FS9("src", data_r8.img, core/* ɵɵsanitizeUrl */.B4B);
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate */.JRh(data_r8.title);
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate */.JRh(data_r8.auther);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate1 */.SpI(" ", data_r8.likes, " ");
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate1 */.SpI(" ", data_r8.comments, " ");
  }
}
function SearchResultsComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 2)(1, "div", 3)(2, "div", 75)(3, "div", 76);
    core/* ɵɵtemplate */.DNE(4, SearchResultsComponent_ng_template_46_div_4_Template, 7, 2, "div", 77);
    core/* ɵɵelementEnd */.k0s()()()();
    core/* ɵɵelementStart */.j41(5, "div", 78)(6, "div", 2);
    core/* ɵɵtemplate */.DNE(7, SearchResultsComponent_ng_template_46_div_7_Template, 22, 5, "div", 79);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(8, "div", 80)(9, "ul", 65)(10, "li", 66)(11, "a", 67);
    core/* ɵɵelement */.nrm(12, "i", 68);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(13, "li", 69)(14, "a", 67);
    core/* ɵɵtext */.EFF(15, "1");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(16, "li", 70)(17, "a", 67);
    core/* ɵɵtext */.EFF(18, "2");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(19, "li", 70)(20, "a", 67);
    core/* ɵɵtext */.EFF(21, "3");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(22, "li", 70)(23, "a", 67);
    core/* ɵɵtext */.EFF(24, "4");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(25, "li", 70)(26, "a", 67);
    core/* ɵɵtext */.EFF(27, "5");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(28, "li", 70)(29, "a", 67);
    core/* ɵɵelement */.nrm(30, "i", 71);
    core/* ɵɵelementEnd */.k0s()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r2.swiper);
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r2.gallery);
  }
}
function SearchResultsComponent_ng_template_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 7)(1, "div", 102)(2, "div", 103)(3, "div", 104)(4, "div", 56);
    core/* ɵɵelement */.nrm(5, "img", 105);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(6, "div", 106)(7, "ul", 107)(8, "li", 54)(9, "span");
    core/* ɵɵtext */.EFF(10);
    core/* ɵɵelementEnd */.k0s()()();
    core/* ɵɵelementStart */.j41(11, "h5")(12, "a", 46);
    core/* ɵɵtext */.EFF(13);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(14, "ul", 108)(15, "li", 54);
    core/* ɵɵelement */.nrm(16, "i", 109);
    core/* ɵɵtext */.EFF(17);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(18, "li", 54);
    core/* ɵɵelement */.nrm(19, "i", 110);
    core/* ɵɵtext */.EFF(20);
    core/* ɵɵelementEnd */.k0s()()()()()()();
  }
  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵpropertyInterpolate */.FS9("src", data_r9.img, core/* ɵɵsanitizeUrl */.B4B);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵclassMapInterpolate1 */.ZvI("badge badge-soft-", data_r9.badgeClass, " fs-11");
    core/* ɵɵadvance */.R7$();
    core/* ɵɵtextInterpolate */.JRh(data_r9.badgeText);
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate */.JRh(data_r9.title);
    core/* ɵɵadvance */.R7$(4);
    core/* ɵɵtextInterpolate1 */.SpI(" ", data_r9.auther, "");
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate1 */.SpI(" ", data_r9.date, "");
  }
}
function SearchResultsComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 2);
    core/* ɵɵtemplate */.DNE(1, SearchResultsComponent_ng_template_51_div_1_Template, 21, 8, "div", 101);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(2, "div", 80)(3, "ul", 65)(4, "li", 66)(5, "a", 67);
    core/* ɵɵelement */.nrm(6, "i", 68);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(7, "li", 69)(8, "a", 67);
    core/* ɵɵtext */.EFF(9, "1");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(10, "li", 70)(11, "a", 67);
    core/* ɵɵtext */.EFF(12, "2");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(13, "li", 70)(14, "a", 67);
    core/* ɵɵtext */.EFF(15, "3");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(16, "li", 70)(17, "a", 67);
    core/* ɵɵtext */.EFF(18, "4");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(19, "li", 70)(20, "a", 67);
    core/* ɵɵtext */.EFF(21, "5");
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(22, "li", 70)(23, "a", 67);
    core/* ɵɵelement */.nrm(24, "i", 71);
    core/* ɵɵelementEnd */.k0s()()()();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$();
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r2.news);
  }
}
function SearchResultsComponent_ng_template_56_div_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 116)(1, "h5", 45)(2, "a", 46);
    core/* ɵɵtext */.EFF(3);
    core/* ɵɵelementEnd */.k0s()();
    core/* ɵɵelementStart */.j41(4, "p", 117);
    core/* ɵɵtext */.EFF(5);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(6, "div", 118)(7, "div", 56);
    core/* ɵɵelement */.nrm(8, "iframe", 119);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(9, "div", 120)(10, "p", 121);
    core/* ɵɵtext */.EFF(11);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelement */.nrm(12, "div", 122);
    core/* ɵɵelementStart */.j41(13, "ul", 50)(14, "li", 51);
    core/* ɵɵelement */.nrm(15, "i", 52);
    core/* ɵɵtext */.EFF(16);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(17, "li", 51);
    core/* ɵɵelement */.nrm(18, "i", 53);
    core/* ɵɵtext */.EFF(19);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(20, "li", 54)(21, "div", 55)(22, "div", 56);
    core/* ɵɵelement */.nrm(23, "i", 57);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(24, "div", 58)(25, "span", 59);
    core/* ɵɵtext */.EFF(26);
    core/* ɵɵelementEnd */.k0s()()()()()()()();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate */.JRh(data_r10.title);
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵtextInterpolate */.JRh(data_r10.siteLink);
    core/* ɵɵadvance */.R7$(6);
    core/* ɵɵtextInterpolate */.JRh(data_r10.description);
    core/* ɵɵadvance */.R7$(5);
    core/* ɵɵtextInterpolate */.JRh(data_r10.likes);
    core/* ɵɵadvance */.R7$(3);
    core/* ɵɵtextInterpolate */.JRh(data_r10.comments);
    core/* ɵɵadvance */.R7$(7);
    core/* ɵɵtextInterpolate */.JRh(data_r10.auther);
  }
}
function SearchResultsComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.j41(0, "div", 2)(1, "div", 111);
    core/* ɵɵtemplate */.DNE(2, SearchResultsComponent_ng_template_56_div_2_Template, 27, 6, "div", 112);
    core/* ɵɵelementEnd */.k0s();
    core/* ɵɵelementStart */.j41(3, "div", 113)(4, "button", 114);
    core/* ɵɵelement */.nrm(5, "i", 115);
    core/* ɵɵtext */.EFF(6, " Load more ");
    core/* ɵɵelementEnd */.k0s()()();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.XpG();
    core/* ɵɵadvance */.R7$(2);
    core/* ɵɵproperty */.Y8G("ngForOf", ctx_r2.video);
  }
}
/**
 * SearchResults Component
 */
class SearchResultsComponent {
  constructor(lightbox) {
    this.lightbox = lightbox;
    this.images = [];
    /**
     * Swiper setting
     */
    this.config = {
      initialSlide: 0,
      slidesPerView: 1
    };
    for (let i = 1; i <= 5; i++) {
      const src = 'assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../../assets/images/small/img-' + i + '-thumb.jpg';
      const item = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this.images.push(item);
    }
  }
  ngOnInit() {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [{
      label: 'Pages'
    }, {
      label: 'Search Results',
      active: true
    }];
    // Chat Data Get Function
    this._fetchData();
  }
  // Chat Data Fetch
  _fetchData() {
    this.swiper = swiper;
    this.gallery = gallery;
    this.news = news;
    this.video = video;
  }
  open(index) {
    // open lightbox
    this.lightbox.open(this.images, index, {});
  }
  static {
    this.ɵfac = function SearchResultsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SearchResultsComponent)(core/* ɵɵdirectiveInject */.rXU(ngx_lightbox/* Lightbox */.Yf));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: SearchResultsComponent,
      selectors: [["app-search-results"]],
      decls: 82,
      vars: 7,
      consts: [["customNav", "ngbNav"], ["title", "Search Results", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header", "border-0"], [1, "row", "justify-content-center", "mb-4"], [1, "col-lg-6"], [1, "row", "g-2"], [1, "col"], [1, "position-relative", "mb-3"], ["type", "text", "placeholder", "Search here..", "value", "Admin Dashboard", 1, "form-control", "form-control-lg", "bg-light", "border-light"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample", "aria-controls", "offcanvasExample", 1, "btn", "btn-link", "link-success", "btn-lg", "position-absolute", "end-0", "top-0"], [1, "ri-mic-fill"], [1, "col-auto"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "waves-effect", "waves-light"], [1, "mdi", "mdi-magnify", "me-1"], [1, "fs-16", "fw-semibold", "text-center", "mb-0"], [1, "text-primary", "fw-medium", "fst-italic"], ["tabindex", "-1", "id", "offcanvasExample", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-top"], [1, "offcanvas-body"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset", "float-end"], [1, "d-flex", "flex-column", "h-100", "justify-content-center", "align-items-center"], [1, "search-voice"], [1, "ri-mic-fill", "align-middle"], [1, "voice-wave"], ["ngbNav", "", "role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-custom", "nav-success", 3, "activeId"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "data-bs-toggle", "tab", "role", "tab", 1, "nav-link"], [1, "ri-search-2-line", "text-muted", "align-bottom", "me-1"], ["ngbNavContent", ""], [1, "ri-image-fill", "text-muted", "align-bottom", "me-1"], [1, "ri-list-unordered", "text-muted", "align-bottom", "me-1"], [1, "ri-video-line", "text-muted", "align-bottom", "me-1"], [1, "nav-item", "ms-auto"], ["ngbDropdown", "", 1, "dropdown"], ["role", "button", "id", "dropdownMenuLink1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "nav-link", "fw-medium", "text-reset", "mb-n1"], [1, "ri-settings-4-line", "align-middle", "me-1"], ["aria-labelledby", "dropdownMenuLink1", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "card-body", "p-4"], [1, "tab-content", "text-muted"], [3, "ngbNavOutlet"], [1, "pb-3"], [1, "mb-1"], ["href", "javascript:void(0);"], [1, "text-success", "mb-2"], [1, "text-muted", "mb-2"], [1, "fw-semibold"], [1, "list-inline", "d-flex", "align-items-center", "g-3", "text-muted", "fs-14", "mb-0"], [1, "list-inline-item", "me-3"], [1, "ri-thumb-up-line", "align-middle", "me-1"], [1, "ri-question-answer-line", "align-middle", "me-1"], [1, "list-inline-item"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0"], [1, "ri-user-line"], [1, "flex-grow-1", "fs-13", "ms-1"], [1, "fw-medium"], [1, "border", "border-dashed"], [1, "py-3"], [1, "fs-13", "mb-3", "text-muted", "fst-italic"], [1, "col-xl-4", "col-lg-10"], ["class", "col-md-3 col-sm-6", 4, "ngFor", "ngForOf"], [1, "pagination", "pagination-separated", "justify-content-center", "mb-0"], [1, "page-item", "disabled"], ["href", "javascript:void(0);", 1, "page-link"], [1, "mdi", "mdi-chevron-left"], [1, "page-item", "active"], [1, "page-item"], [1, "mdi", "mdi-chevron-right"], [1, "col-md-3", "col-sm-6"], [1, "image-popup", "d-block"], ["alt", "", 1, "img-fluid", "d-block", "rounded", 3, "click", "src"], [1, "swiper", "images-menu", "mb-3"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "gallery-light"], ["class", "col-xl-3 col-lg-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "mt-4"], [1, "swiper-slide"], [1, "d-flex", "align-items-center", "border", "border-dashed", "rounded", "p-2"], ["alt", "", "width", "65", 1, "rounded", 3, "src"], [1, "flex-grow-1", "ms-2"], ["href", "javascript:void(0);", 1, "stretched-link", "fw-medium"], [1, "col-xl-3", "col-lg-4", "col-sm-6"], [1, "gallery-box", "card"], [1, "gallery-container"], ["title", "", 1, "image-popup"], ["alt", "", 1, "gallery-img", "img-fluid", "mx-auto", 3, "src"], [1, "gallery-overlay", 3, "click"], [1, "overlay-caption"], [1, "box-content"], [1, "d-flex", "align-items-center", "mt-2"], [1, "flex-grow-1", "text-muted"], ["href", "javascript:void(0);", 1, "text-body", "text-truncate"], [1, "d-flex", "gap-3"], ["type", "button", 1, "btn", "btn-sm", "fs-12", "btn-link", "text-body", "text-decoration-none", "px-0"], [1, "ri-thumb-up-fill", "text-muted", "align-bottom", "me-1"], [1, "ri-question-answer-fill", "text-muted", "align-bottom", "me-1"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "card", "border"], [1, "card-body"], [1, "d-sm-flex"], ["alt", "", "width", "115", 1, "rounded-1", 3, "src"], [1, "flex-grow-1", "ms-sm-4", "mt-3", "mt-sm-0"], [1, "list-inline", "mb-2"], [1, "list-inline", "mb-0"], [1, "ri-user-3-fill", "text-success", "align-middle", "me-1"], [1, "ri-calendar-2-fill", "text-success", "align-middle", "me-1"], [1, "col-lg-12", "video-list"], ["class", "list-element", 4, "ngFor", "ngForOf"], [1, "text-center"], ["id", "loadmore", 1, "btn", "btn-link", "text-success", "mt-2"], [1, "mdi", "mdi-loading", "mdi-spin", "fs-20", "align-middle", "me-2"], [1, "list-element"], [1, "text-success"], [1, "d-flex", "flex-column", "flex-sm-row"], ["src", core/* ɵɵtrustConstantResourceUrl */.wXG`https://www.youtube.com/embed/GfSZtaoc5bw`, "title", "YouTube video", "allowfullscreen", "", 1, "rounded"], [1, "flex-grow-1", "ms-sm-3", "mt-2", "mt-sm-0"], [1, "text-muted", "mb-0"], [1, "border", "border-dashed", "mb-1", "mt-3"]],
      template: function SearchResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelement */.nrm(0, "app-breadcrumbs", 1);
          core/* ɵɵelementStart */.j41(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10);
          core/* ɵɵelement */.nrm(10, "input", 11);
          core/* ɵɵelementStart */.j41(11, "a", 12);
          core/* ɵɵelement */.nrm(12, "i", 13);
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(13, "div", 14)(14, "button", 15);
          core/* ɵɵelement */.nrm(15, "i", 16);
          core/* ɵɵtext */.EFF(16, " Search");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(17, "div", 3)(18, "h5", 17);
          core/* ɵɵtext */.EFF(19, "Showing results for \"");
          core/* ɵɵelementStart */.j41(20, "span", 18);
          core/* ɵɵtext */.EFF(21, "Admin Dashboard");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtext */.EFF(22, " \"");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(23, "div", 19)(24, "div", 20);
          core/* ɵɵelement */.nrm(25, "button", 21);
          core/* ɵɵelementStart */.j41(26, "div", 22)(27, "div", 23);
          core/* ɵɵelement */.nrm(28, "i", 24)(29, "span", 25)(30, "span", 25)(31, "span", 25);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(32, "h4");
          core/* ɵɵtext */.EFF(33, "Talk to me, what can I do for you?");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(34, "div")(35, "ul", 26, 0)(37, "li", 27)(38, "a", 28);
          core/* ɵɵelement */.nrm(39, "i", 29);
          core/* ɵɵtext */.EFF(40, " All Results ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(41, SearchResultsComponent_ng_template_41_Template, 128, 1, "ng-template", 30);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(42, "li", 27)(43, "a", 28);
          core/* ɵɵelement */.nrm(44, "i", 31);
          core/* ɵɵtext */.EFF(45, " Images ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(46, SearchResultsComponent_ng_template_46_Template, 31, 2, "ng-template", 30);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(47, "li", 27)(48, "a", 28);
          core/* ɵɵelement */.nrm(49, "i", 32);
          core/* ɵɵtext */.EFF(50, " News ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(51, SearchResultsComponent_ng_template_51_Template, 25, 1, "ng-template", 30);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(52, "li", 27)(53, "a", 28);
          core/* ɵɵelement */.nrm(54, "i", 33);
          core/* ɵɵtext */.EFF(55, " Videos ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵtemplate */.DNE(56, SearchResultsComponent_ng_template_56_Template, 7, 1, "ng-template", 30);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(57, "li", 34)(58, "div", 35)(59, "a", 36);
          core/* ɵɵelement */.nrm(60, "i", 37);
          core/* ɵɵtext */.EFF(61, " Settings ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(62, "ul", 38)(63, "li")(64, "a", 39);
          core/* ɵɵtext */.EFF(65, "Search Settings");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(66, "li")(67, "a", 39);
          core/* ɵɵtext */.EFF(68, "Advanced Search");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(69, "li")(70, "a", 39);
          core/* ɵɵtext */.EFF(71, "Search History");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(72, "li")(73, "a", 39);
          core/* ɵɵtext */.EFF(74, "Search Help");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelement */.nrm(75, "div", 40);
          core/* ɵɵelementStart */.j41(76, "li")(77, "a", 39);
          core/* ɵɵtext */.EFF(78, "Dark Mode:Off");
          core/* ɵɵelementEnd */.k0s()()()()()()();
          core/* ɵɵelementStart */.j41(79, "div", 41)(80, "div", 42);
          core/* ɵɵelement */.nrm(81, "div", 43);
          core/* ɵɵelementEnd */.k0s()()()()();
        }
        if (rf & 2) {
          const customNav_r11 = core/* ɵɵreference */.sdS(36);
          core/* ɵɵproperty */.Y8G("breadcrumbItems", ctx.breadCrumbItems);
          core/* ɵɵadvance */.R7$(35);
          core/* ɵɵproperty */.Y8G("activeId", 1);
          core/* ɵɵadvance */.R7$(2);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 1);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 2);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 3);
          core/* ɵɵadvance */.R7$(5);
          core/* ɵɵproperty */.Y8G("ngbNavItem", 4);
          core/* ɵɵadvance */.R7$(29);
          core/* ɵɵproperty */.Y8G("ngbNavOutlet", customNav_r11);
        }
      },
      dependencies: [common/* NgForOf */.Sq, ng_bootstrap/* NgbNavContent */.Um, ng_bootstrap/* NgbNav */.X9, ng_bootstrap/* NgbNavItem */.sy, ng_bootstrap/* NgbNavItemRole */.Gx, ng_bootstrap/* NgbNavLink */.Ri, ng_bootstrap/* NgbNavLinkBase */.WA, ng_bootstrap/* NgbNavOutlet */.m_, ng_bootstrap/* NgbDropdown */.tg, ng_bootstrap/* NgbDropdownToggle */["do"], ng_bootstrap/* NgbDropdownMenu */.U0, breadcrumbs_component/* BreadcrumbsComponent */.m]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/privacy-policy/privacy-policy.component.ts


class PrivacyPolicyComponent {
  constructor() {}
  ngOnInit() {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [{
      label: 'Pages'
    }, {
      label: 'Privacy Policy',
      active: true
    }];
  }
  static {
    this.ɵfac = function PrivacyPolicyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PrivacyPolicyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: PrivacyPolicyComponent,
      selectors: [["app-privacy-policy"]],
      decls: 93,
      vars: 1,
      consts: [["title", "PRIVACY POLICY", 3, "breadcrumbItems"], [1, "row", "justify-content-center"], [1, "col-lg-10"], [1, "card"], [1, "bg-soft-warning", "position-relative"], [1, "card-body", "p-5"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "svgjs", "http://svgjs.com/svgjs", "width", "1440", "height", "60", "preserveAspectRatio", "none", "viewBox", "0 0 1440 60"], ["mask", "url(\"#SvgjsMask1001\")", "fill", "none"], ["d", "M 0,4 C 144,13 432,48 720,49 C 1008,50 1296,17 1440,9L1440 60L0 60z", 2, "fill", "var(--vz-card-bg-custom)"], ["id", "SvgjsMask1001"], ["width", "1440", "height", "60", "fill", "#ffffff"], [1, "card-body", "p-4"], [1, "d-flex"], [1, "flex-shrink-0", "me-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-check-circle", "text-success", "icon-dual-success", "icon-xs"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "flex-grow-1"], [1, "text-muted"], [1, "text-muted", "vstack", "gap-2"], [1, "text-end"], ["href", "javascript:void(0);", 1, "btn", "btn-danger"]],
      template: function PrivacyPolicyComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelement */.nrm(0, "app-breadcrumbs", 0);
          core/* ɵɵelementStart */.j41(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3");
          core/* ɵɵtext */.EFF(8, "Privacy Policy");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(9, "p", 7);
          core/* ɵɵtext */.EFF(10, "Last update: 16 Sept, 2022");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(11, "div", 8);
          core/* ɵɵnamespaceSVG */.qSk();
          core/* ɵɵelementStart */.j41(12, "svg", 9)(13, "g", 10);
          core/* ɵɵelement */.nrm(14, "path", 11);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(15, "defs")(16, "mask", 12);
          core/* ɵɵelement */.nrm(17, "rect", 13);
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵnamespaceHTML */.joV();
          core/* ɵɵelementStart */.j41(18, "div", 14)(19, "div", 15)(20, "div", 16);
          core/* ɵɵnamespaceSVG */.qSk();
          core/* ɵɵelementStart */.j41(21, "svg", 17);
          core/* ɵɵelement */.nrm(22, "path", 18)(23, "polyline", 19);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵnamespaceHTML */.joV();
          core/* ɵɵelementStart */.j41(24, "div", 20)(25, "h5");
          core/* ɵɵtext */.EFF(26, "Privacy Policy for velzon");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(27, "p", 21);
          core/* ɵɵtext */.EFF(28, "At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(29, "p", 21);
          core/* ɵɵtext */.EFF(30, "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at Email.com");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(31, "p", 21);
          core/* ɵɵtext */.EFF(32, "This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Website Name. This policy is not applicable to any information collected offline or via channels other than this website.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(33, "p", 21);
          core/* ɵɵtext */.EFF(34, "How we use your information:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(35, "ul", 21)(36, "li")(37, "p");
          core/* ɵɵtext */.EFF(38, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(39, "li")(40, "p");
          core/* ɵɵtext */.EFF(41, "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(42, "li")(43, "p");
          core/* ɵɵtext */.EFF(44, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(45, "li")(46, "p");
          core/* ɵɵtext */.EFF(47, "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.");
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵelementStart */.j41(48, "div", 15)(49, "div", 16);
          core/* ɵɵnamespaceSVG */.qSk();
          core/* ɵɵelementStart */.j41(50, "svg", 17);
          core/* ɵɵelement */.nrm(51, "path", 18)(52, "polyline", 19);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵnamespaceHTML */.joV();
          core/* ɵɵelementStart */.j41(53, "div", 20)(54, "h5");
          core/* ɵɵtext */.EFF(55, "How we use your information");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(56, "p", 21);
          core/* ɵɵtext */.EFF(57, "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(58, "p", 21);
          core/* ɵɵtext */.EFF(59, "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(60, "p", 21);
          core/* ɵɵtext */.EFF(61, "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number. ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(62, "p", 21);
          core/* ɵɵtext */.EFF(63, "We use the information we collect in various ways, including to:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(64, "ul", 22)(65, "li");
          core/* ɵɵtext */.EFF(66, " Provide, operate, and maintain our website ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(67, "li");
          core/* ɵɵtext */.EFF(68, " Improve, personalize, and expand our website ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(69, "li");
          core/* ɵɵtext */.EFF(70, " Understand and analyze how you use our website ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(71, "li");
          core/* ɵɵtext */.EFF(72, " Develop new products, services, features, and functionality ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(73, "li");
          core/* ɵɵtext */.EFF(74, " Send you emails ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(75, "li");
          core/* ɵɵtext */.EFF(76, " Find and prevent fraud ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(77, "p", 21);
          core/* ɵɵtext */.EFF(78, "Like any other website, Website Name uses \u2018cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(79, "div", 15)(80, "div", 16);
          core/* ɵɵnamespaceSVG */.qSk();
          core/* ɵɵelementStart */.j41(81, "svg", 17);
          core/* ɵɵelement */.nrm(82, "path", 18)(83, "polyline", 19);
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵnamespaceHTML */.joV();
          core/* ɵɵelementStart */.j41(84, "div", 20)(85, "p", 21);
          core/* ɵɵtext */.EFF(86, "Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(87, "p", 21)(88, "b");
          core/* ɵɵtext */.EFF(89, "Website Name's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.");
          core/* ɵɵelementEnd */.k0s()()()();
          core/* ɵɵelementStart */.j41(90, "div", 23)(91, "a", 24);
          core/* ɵɵtext */.EFF(92, "I'm Understand");
          core/* ɵɵelementEnd */.k0s()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("breadcrumbItems", ctx.breadCrumbItems);
        }
      },
      dependencies: [breadcrumbs_component/* BreadcrumbsComponent */.m]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/terms-condition/terms-condition.component.ts


class TermsConditionComponent {
  constructor() {}
  ngOnInit() {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [{
      label: 'Pages'
    }, {
      label: 'Term & Conditions',
      active: true
    }];
  }
  static {
    this.ɵfac = function TermsConditionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TermsConditionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.VBU({
      type: TermsConditionComponent,
      selectors: [["app-terms-condition"]],
      decls: 81,
      vars: 1,
      consts: [["title", "Term & Conditions", 3, "breadcrumbItems"], [1, "row", "justify-content-center"], [1, "col-lg-10"], [1, "card"], [1, "bg-soft-warning", "position-relative"], [1, "card-body", "p-5"], [1, "text-center"], [1, "mb-0", "text-muted"], [1, "shape"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "svgjs", "http://svgjs.com/svgjs", "width", "1440", "height", "60", "preserveAspectRatio", "none", "viewBox", "0 0 1440 60"], ["mask", "url(\"#SvgjsMask1001\")", "fill", "none"], ["d", "M 0,4 C 144,13 432,48 720,49 C 1008,50 1296,17 1440,9L1440 60L0 60z", 2, "fill", "var(--vz-card-bg-custom)"], ["id", "SvgjsMask1001"], ["width", "1440", "height", "60", "fill", "#ffffff"], [1, "card-body", "p-4"], [1, "text-muted"], [1, "text-muted", "vstack", "gap-2"], [1, "text-muted", "fw-semibold"], [1, "text-end", "d-flex", "gap-1", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn", "btn-success"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-danger"], [1, "ri-close-line", "align-bottom", "me-1"]],
      template: function TermsConditionComponent_Template(rf, ctx) {
        if (rf & 1) {
          core/* ɵɵelement */.nrm(0, "app-breadcrumbs", 0);
          core/* ɵɵelementStart */.j41(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3");
          core/* ɵɵtext */.EFF(8, "Term & Conditions");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(9, "p", 7);
          core/* ɵɵtext */.EFF(10, "Last update: 16 Sept, 2022");
          core/* ɵɵelementEnd */.k0s()()();
          core/* ɵɵelementStart */.j41(11, "div", 8);
          core/* ɵɵnamespaceSVG */.qSk();
          core/* ɵɵelementStart */.j41(12, "svg", 9)(13, "g", 10);
          core/* ɵɵelement */.nrm(14, "path", 11);
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(15, "defs")(16, "mask", 12);
          core/* ɵɵelement */.nrm(17, "rect", 13);
          core/* ɵɵelementEnd */.k0s()()()()();
          core/* ɵɵnamespaceHTML */.joV();
          core/* ɵɵelementStart */.j41(18, "div", 14)(19, "div")(20, "h5");
          core/* ɵɵtext */.EFF(21, "Welcome to Velzon!");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(22, "p", 15);
          core/* ɵɵtext */.EFF(23, "These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at Website.com.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(24, "p", 15);
          core/* ɵɵtext */.EFF(25, "By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(26, "p", 15);
          core/* ɵɵtext */.EFF(27, "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(28, "div")(29, "h5");
          core/* ɵɵtext */.EFF(30, "License");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(31, "p", 15);
          core/* ɵɵtext */.EFF(32, "Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(33, "p", 15);
          core/* ɵɵtext */.EFF(34, "You must not:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(35, "ul", 16)(36, "li");
          core/* ɵɵtext */.EFF(37, " Republish material from Website Name ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(38, "li");
          core/* ɵɵtext */.EFF(39, " Sell, rent or sub-license material from Website Name ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(40, "li");
          core/* ɵɵtext */.EFF(41, " Reproduce, duplicate or copy material from Website Name ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(42, "li");
          core/* ɵɵtext */.EFF(43, " Redistribute content from Website Name ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(44, "p", 15);
          core/* ɵɵtext */.EFF(45, "This Agreement shall begin on the date hereof.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(46, "p", 15);
          core/* ɵɵtext */.EFF(47, "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Company Name does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Company Name,its agents and/or affiliates.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(48, "div")(49, "p", 15);
          core/* ɵɵtext */.EFF(50, "Company Name reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(51, "p", 15);
          core/* ɵɵtext */.EFF(52, "You warrant and represent that:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(53, "ul", 16)(54, "li");
          core/* ɵɵtext */.EFF(55, " You are entitled to post the Comments on our website and have all necessary licenses and consents to do so; ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(56, "li");
          core/* ɵɵtext */.EFF(57, " The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party; ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(58, "li");
          core/* ɵɵtext */.EFF(59, " The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(60, "li");
          core/* ɵɵtext */.EFF(61, " The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity. ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(62, "p", 15);
          core/* ɵɵtext */.EFF(63, "You hereby grant Company Name a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(64, "p", 15);
          core/* ɵɵtext */.EFF(65, "Approved organizations may hyperlink to our Website as follows:");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(66, "ul", 16)(67, "li");
          core/* ɵɵtext */.EFF(68, " By use of our corporate name; or ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(69, "li");
          core/* ɵɵtext */.EFF(70, " By use of the uniform resource locator being linked to; or ");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(71, "li");
          core/* ɵɵtext */.EFF(72, " By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site. ");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(73, "p", 17);
          core/* ɵɵtext */.EFF(74, "No use of Company Name's logo or other artwork will be allowed for linking absent a trademark license agreement.");
          core/* ɵɵelementEnd */.k0s()();
          core/* ɵɵelementStart */.j41(75, "div", 18)(76, "a", 19);
          core/* ɵɵtext */.EFF(77, "Accept");
          core/* ɵɵelementEnd */.k0s();
          core/* ɵɵelementStart */.j41(78, "a", 20);
          core/* ɵɵelement */.nrm(79, "i", 21);
          core/* ɵɵtext */.EFF(80, " Decline");
          core/* ɵɵelementEnd */.k0s()()()()()();
        }
        if (rf & 2) {
          core/* ɵɵproperty */.Y8G("breadcrumbItems", ctx.breadCrumbItems);
        }
      },
      dependencies: [breadcrumbs_component/* BreadcrumbsComponent */.m]
    });
  }
}
;// CONCATENATED MODULE: ./src/app/pages/extrapages/extrapages-routing.module.ts

// Component pages














const routes = [{
  path: 'starter',
  component: StarterComponent
}, {
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'profile-setting',
  component: SettingsComponent
}, {
  path: 'team',
  component: TeamComponent
}, {
  path: 'timeline',
  component: TimelineComponent
}, {
  path: 'faqs',
  component: FaqsComponent
}, {
  path: 'pricing',
  component: PricingComponent
}, {
  path: 'gallery',
  component: GalleryComponent
}, {
  path: 'sitemap',
  component: SitemapComponent
}, {
  path: 'search-results',
  component: SearchResultsComponent
}, {
  path: 'privacy-policy',
  component: PrivacyPolicyComponent
}, {
  path: 'terms-condition',
  component: TermsConditionComponent
}];
class ExtraPagesRoutingModule {
  static {
    this.ɵfac = function ExtraPagesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExtraPagesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.$C({
      type: ExtraPagesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.G2t({
      imports: [router/* RouterModule */.iI.forChild(routes), router/* RouterModule */.iI]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(ExtraPagesRoutingModule, {
    imports: [router/* RouterModule */.iI],
    exports: [router/* RouterModule */.iI]
  });
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 1 modules
var shared_module = __webpack_require__(49801);
;// CONCATENATED MODULE: ./src/app/pages/extrapages/extraspages.module.ts



// Swiper Slider
// Select Droup down

// Flatpicker

// Feather Icon


// Ng Search 
// Load Icon


// Component pages
















class ExtraspagesModule {
  constructor() {
    (0,lord_icon_element/* defineElement */.e)((lottie_default()).loadAnimation);
  }
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
      imports: [common/* CommonModule */.MD, fesm2022_forms/* FormsModule */.YN, fesm2022_forms/* ReactiveFormsModule */.X1, ng_bootstrap/* NgbNavModule */.Pv, ng_bootstrap/* NgbDropdownModule */.zH, ng_bootstrap/* NgbAccordionModule */._f, ng_bootstrap/* NgbTooltipModule */.n8, ng_bootstrap/* NgbPaginationModule */.c9, ng_select_ng_select/* NgSelectModule */.MQ, angularx_flatpickr/* FlatpickrModule */.ND, ExtraPagesRoutingModule, shared_module/* SharedModule */.G, angular_feather/* FeatherModule */.M.pick(angular_feather_icons/* allIcons */.Wzl)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.Obh(ExtraspagesModule, {
    declarations: [StarterComponent, ProfileComponent, SettingsComponent, TeamComponent, TimelineComponent, FaqsComponent, PricingComponent, GalleryComponent, SitemapComponent, SearchResultsComponent, PrivacyPolicyComponent, TermsConditionComponent],
    imports: [common/* CommonModule */.MD, fesm2022_forms/* FormsModule */.YN, fesm2022_forms/* ReactiveFormsModule */.X1, ng_bootstrap/* NgbNavModule */.Pv, ng_bootstrap/* NgbDropdownModule */.zH, ng_bootstrap/* NgbAccordionModule */._f, ng_bootstrap/* NgbTooltipModule */.n8, ng_bootstrap/* NgbPaginationModule */.c9, ng_select_ng_select/* NgSelectModule */.MQ, angularx_flatpickr/* FlatpickrModule */.ND, ExtraPagesRoutingModule, shared_module/* SharedModule */.G, angular_feather/* FeatherModule */.M]
  });
})();

/***/ })

}]);