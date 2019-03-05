webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/library/library.module": [
		296,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_library_filter_library_filter__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_grade_filter_grade_filter__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_header_app_header__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_recently_viewed_recently_viewed__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_footer_app_footer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_collection_page_collection_page__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_offline_toast_offline_toast__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_content_info_content_info__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_textbook_card_textbook_card__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_recently_viewed_view_all_recently_viewed_view_all__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_popups_popups__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_buttons_buttons__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_search__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_side_menu_side_menu__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__library_library__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















//pages

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.components = [
            {
                "name": "Application Header",
                "pageName": __WEBPACK_IMPORTED_MODULE_4__components_app_header_app_header__["a" /* AppHeaderComponent */]
            },
            {
                "name": "Medium Panel",
                "pageName": __WEBPACK_IMPORTED_MODULE_2__components_library_filter_library_filter__["a" /* LibraryFilterPage */]
            },
            {
                "name": "Grade Panel",
                "pageName": __WEBPACK_IMPORTED_MODULE_3__components_grade_filter_grade_filter__["a" /* GradeFilterComponent */]
            },
            {
                "name": "Recently Viewed",
                "pageName": __WEBPACK_IMPORTED_MODULE_5__components_recently_viewed_recently_viewed__["a" /* RecentlyViewedComponent */]
            },
            {
                "name": "Application Footer",
                "pageName": __WEBPACK_IMPORTED_MODULE_6__components_app_footer_app_footer__["a" /* AppFooterComponent */]
            },
            {
                "name": "Subject Cards",
                "pageName": __WEBPACK_IMPORTED_MODULE_10__components_textbook_card_textbook_card__["a" /* TextbookCardComponent */]
            },
            {
                "name": "Recently Viewed - View all",
                "pageName": __WEBPACK_IMPORTED_MODULE_11__components_recently_viewed_view_all_recently_viewed_view_all__["a" /* RecentlyViewedViewAllComponent */]
            },
            {
                "name": "Collection Component",
                "pageName": __WEBPACK_IMPORTED_MODULE_7__components_collection_page_collection_page__["a" /* CollectionPageComponent */]
            },
            {
                "name": "Offline Comp",
                "pageName": __WEBPACK_IMPORTED_MODULE_8__components_offline_toast_offline_toast__["a" /* OfflineToastComponent */]
            },
            {
                "name": "Content Info",
                "pageName": __WEBPACK_IMPORTED_MODULE_9__components_content_info_content_info__["a" /* ContentInfoComponent */]
            },
            {
                "name": "Popups",
                "pageName": __WEBPACK_IMPORTED_MODULE_12__components_popups_popups__["a" /* PopupsComponent */]
            },
            {
                "name": "Buttons",
                "pageName": __WEBPACK_IMPORTED_MODULE_13__components_buttons_buttons__["a" /* ButtonsComponent */]
            },
            {
                "name": "Search Card",
                "pageName": __WEBPACK_IMPORTED_MODULE_14__components_search_search__["a" /* SearchComponent */]
            },
            // {
            //   "name":"Offline Component",
            //   "pageName": OfflineComponent
            // },
            {
                "name": "Side Menu Componet",
                "pageName": __WEBPACK_IMPORTED_MODULE_15__components_side_menu_side_menu__["a" /* SideMenuComponent */]
            }
        ];
    }
    HomePage.prototype.onWhenItemClick = function (i) {
        console.log(this.components[i].pageName);
        this.navCtrl.push(this.components[i].pageName);
    };
    HomePage.prototype.gotToLlibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__library_library__["a" /* LibraryPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/pages/home/home.html"*/'<ion-header class="sb-header">\n<!-- Generated template for the AppHeaderComponent component -->\n<!-- <ion-header> -->\n<ion-navbar class="sb-header-toolbar">\n        <ion-title>Mobile UI Components</ion-title>\n      </ion-navbar>\n  <!-- </ion-header> -->\n</ion-header>\n<ion-content no-padding>\n  <!-- <ion-item-group>\n    <ion-item-divider color="light">Pages</ion-item-divider>\n\n    <ion-item (click)="gotToLlibrary()">Library</ion-item>\n\n  </ion-item-group> -->\n  <ion-item-group>\n    <ion-item-divider color="light">List of UI Components</ion-item-divider>\n\n    <ion-item *ngFor="let c of components; let i = index;" (click)="onWhenItemClick(i)">{{c.name}}</ion-item>\n\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LibraryFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryFilterPage = /** @class */ (function () {
    function LibraryFilterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.code = "<div class=\"sb-slider-pills-container sb-medium-pills-container\">\n        <div class=\"pill active\">English medium</div>\n        <div class=\"pill\">English medium</div>\n        <div class=\"pill\">English medium</div>\n        <div class=\"pill\">English medium</div>\n        <div class=\"pill\">English medium</div>\n        <div class=\"pill\">English medium</div>\n        <div class=\"pill\">English medium</div>\n        <div class=\"pill\">English medium</div>\n      </div>";
    }
    LibraryFilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LibraryFilterPage');
    };
    LibraryFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-library-filter',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/library-filter/library-filter.html"*/'<ion-header class="sb-header">\n    <!-- Generated template for the AppHeaderComponent component -->\n    <!-- <ion-header> -->\n    <ion-navbar class="sb-header-toolbar">\n      <ion-title>Medium Filter</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n<ion-content no-padding>\n<div class="sb-slider-pills-container">\n  <div class="sb-pills-container sb-medium-pills-container">\n      <div class="pill active">English medium</div>\n      <div class="pill">English medium</div>\n      <div class="pill">English medium</div>\n      <div class="pill">English medium</div>\n      <div class="pill">English medium</div>\n      <div class="pill">English medium</div>\n      <div class="pill">English medium</div>\n      <div class="pill">English medium</div>\n  </div>\n</div>\n\n  <div class="code-block">\n  <br><br>\n    <pre >\n      {{this.code}}\n    </pre>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/library-filter/library-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LibraryFilterPage);
    return LibraryFilterPage;
}());

//# sourceMappingURL=library-filter.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the GradeFilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GradeFilterComponent = /** @class */ (function () {
    function GradeFilterComponent() {
        console.log('Hello GradeFilterComponent Component');
        this.text = 'Hello World';
    }
    GradeFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'grade-filter',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/grade-filter/grade-filter.html"*/'<ion-header class="sb-header">\n    <!-- Generated template for the AppHeaderComponent component -->\n    <!-- <ion-header> -->\n    <ion-navbar class="sb-header-toolbar">\n      <ion-title>Grade Filter</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n<ion-content no-padding>\n  <div class="sb-slider-pills-container">\n  <div class="sb-pills-container sb-grade-pills-container">\n      <div class="pill active">Class 5</div>\n      <div class="pill">Class 6</div>\n      <div class="pill">Class 7</div>\n      <div class="pill">Class 8</div>\n      <div class="pill">Class 8</div>\n      <div class="pill">Class 8</div>\n      <div class="pill">ClassLong 8</div>\n      <div class="pill">ClassLongest 9</div>\n  </div>\n</div>\n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/grade-filter/grade-filter.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GradeFilterComponent);
    return GradeFilterComponent;
}());

//# sourceMappingURL=grade-filter.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
        this.code = "<ion-header class=\"sb-header\">\n  <ion-navbar class=\"sb-header-toolbar\">\n    <ion-toolbar>\n    <ion-buttons class=\"only-md sb-hamburger\" start>\n          <button class=\"sb-hamburger-menu sb-hamburger-icon\" ion-button icon-only>\n            <ion-icon name=\"menu\"></ion-icon>\n          </button>\n    </ion-buttons>\n    <ion-title></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n       <ion-icon name=\"notifications-outline\"></ion-icon>\n      </button>\n      <button ion-button icon-only>\n       <ion-icon name=\"search\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  </ion-navbar>\n  </ion-header>";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppHeaderComponent.prototype, "pageName", void 0);
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/app-header/app-header.html"*/'\n\n\n<ion-content no-padding>\n\n  <!-- component ui start -->\n  <ion-header class="sb-header">\n    <ion-navbar class="sb-header-navbar">\n      <ion-toolbar class="sb-header-toolbar">\n        <ion-buttons class="sb-hamburger" start>\n          <button class="sb-hamburger-menu sb-hamburger-icon" ion-button icon-only>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title></ion-title>\n        <ion-buttons class="sb-header-btn-group" end>\n          <button ion-button icon-only>\n            <ion-icon name="person"></ion-icon>\n          </button>\n          <button ion-button icon-only>\n            <ion-icon name="notifications-outline"></ion-icon>\n          </button>\n          <button ion-button icon-only>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-navbar>\n  </ion-header>\n  <!-- component ui start -->\n\n\n  <div class="code-block" style="margin-top:90px;">\n    <pre>\n            {{code}}\n          </pre>\n  </div>\n\n</ion-content>\n<!-- </ion-header> -->'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/app-header/app-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());

//# sourceMappingURL=app-header.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentlyViewedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RecentlyViewedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RecentlyViewedComponent = /** @class */ (function () {
    function RecentlyViewedComponent() {
        console.log('Hello RecentlyViewedComponent Component');
        this.text = 'Hello World';
    }
    RecentlyViewedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'recently-viewed',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/recently-viewed/recently-viewed.html"*/'<!-- Generated template for the RecentlyViewedComponent component -->\n<ion-header class="sb-header">\n  <!-- Generated template for the AppHeaderComponent component -->\n  <!-- <ion-header> -->\n  <ion-navbar class="sb-header-toolbar">\n    <ion-title>Recently Viewed</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n<div class="sb-recently-viewed-container">\n\n  <div class="sb-recently-viewed-items">\n    <div class="sb-recenlty-viewed-title">Recently Viewed <button ion-button class="sb-btn sb-btn-sm sb-btn-outline-info" float-end> View all</button></div>\n\n    <div class="sb-card-scroll-container">\n\n      <!-- Card style -->\n      <div class="sb-card-container sb-card-recently-container">\n          <div class="sb-card full">\n              <div class="img-container"></div>\n              <div class="sb-card-details">\n                <div class="title">Great thinkers and their new religions</div>\n                <div class="info"><span class=" class">Class6</span><span class="separator-dot"></span><span class=" subject">Social Science</span></div>\n              </div>\n           </div>\n\n           <div class="sb-card full">\n              <div class="img-container"></div>\n              <div class="sb-card-details">\n                <div class="title">Great thinkers and their new religions</div>\n                <div><span class="info class">Class6</span><span class="separator-dot"></span><span class="info subject">Social Science</span></div>\n              </div>\n           </div>\n           \n           <div class="sb-card offline full">\n              <div class="img-container">\n                  <ion-icon ios="ios-notifications-off" md="md-notifications-off" class="white offline-icon"></ion-icon>\n              </div>\n              <div class="sb-card-details">\n                <div class="title">Great thinkers and their new religions</div>\n                <div><span class="info class">Class6</span><span class="separator-dot"></span><span class="info subject">Social Science</span></div>\n              </div>\n           </div>\n      </div>\n     \n    \n\n    </div>\n    \n\n  </div>\n\n</div>\n  \n\n\n    <!-- <div class="section-floating P15 PT10">\n      <div class="heading">Recently Viewed\n        <button ion-button class="btn rounded" float-end> View all</button>\n      </div>\n      <div class="card-container">\n        <div class="card grid">\n          <div class="left">\n            <div class="img-container">\n              <img src="">\n            </div>\n          </div>\n          <div class="right">\n            <div>\n              <div class="title"> Great thinkers and their new religions\n              </div>\n            </div>\n            <div>\n              <span class="info">Class6</span>\n              <span class="separator-dot"></span>\n              <span class="info">Social Science</span>\n            </div>\n\n          </div>\n        </div>\n        <div class="card grid offline">\n            <div class="left">\n              <div class="img-container ">\n                <ion-icon ios="ios-notifications-off" md="md-notifications-off" class="white"></ion-icon>\n              </div>\n            </div>\n            <div class="right">\n              <div>\n                <div class="title"> Great thinkers and their new religions\n                </div>\n              </div>\n              <div>\n                <span class="info">Class6</span>\n                <span class="separator-dot"></span>\n                <span class="info">Social Science</span>\n              </div>\n    \n            </div>\n          </div>\n        <div class="card">\n          <div class="left">\n            <div class="img-container">\n              <img src="">\n            </div>\n          </div>\n          <div class="right">\n            <div>\n              <div class="title"> Great thinkers and their new religions</div>\n            </div>\n            <div>\n              <span class="info">Class6</span>\n              <span class="separator-dot"></span>\n              <span class="info">Social Science</span>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  <div class="section-floating P15 PT10" style="margin-top: 200px">\n    <div class="heading">Recently Viewed\n      <button ion-button class="btn rounded" float-end> View all</button>\n    </div>\n    <div class="card-container">\n      <div class="card grid offline">\n        <div class="left">\n          <div class="img-container ">\n            <ion-icon ios="ios-notifications-off" md="md-notifications-off" class="white"></ion-icon>\n          </div>\n        </div>\n        <div class="right">\n          <div>\n            <div class="title"> Testing some really really long text Great thinkers and their new religions Great thinkers and their new religions\n            </div>\n          </div>\n          <div>\n            <span class="info">Class6</span>\n            <span class="separator-dot"></span>\n            <span class="info">Social Science</span>\n          </div>\n\n        </div>\n      </div>\n      <div class="card">\n        <div class="left">\n          <div class="img-container">\n            <img src="">\n          </div>\n        </div>\n        <div class="right">\n          <div>\n            <div class="title"> Great thinkers and their new religions </div>\n          </div>\n          <div>\n            <span class="info">Class6</span>\n            <span class="separator-dot"></span>\n            <span class="info">Social Science</span>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div> -->\n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/recently-viewed/recently-viewed.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RecentlyViewedComponent);
    return RecentlyViewedComponent;
}());

//# sourceMappingURL=recently-viewed.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_library__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AppFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__library_library__["a" /* LibraryComponent */];
        this.tab2 = '';
    }
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/app-footer/app-footer.html"*/'\n<ion-tabs>\n  <ion-tab tabIcon="water" tabTitle="Library" [root]="tab1"></ion-tab>\n  <!-- <ion-tab tabIcon="flame" tabTitle="Courses" [root]="tab3"></ion-tab> -->\n  <ion-tab tabIcon="leaf" class="sb-scan-tab" [root]="tab2"></ion-tab>\n  <ion-tab tabIcon="flame" tabTitle="Courses" [root]="tab3"></ion-tab>\n  <!-- <ion-tab tabIcon="flame" tabTitle="Courses" [root]="tab3"></ion-tab> -->\n  <div class="shadow"></div>\n</ion-tabs>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/app-footer/app-footer.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());

//# sourceMappingURL=app-footer.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LibraryComponent = /** @class */ (function () {
    function LibraryComponent() {
        this.text = "\n    <ion-tabs>\n        <ion-tab tabIcon=\"water library\" tabTitle=\"Library\" [root]=\"tab1\"></ion-tab>\n        <ion-tab tabIcon=\"leaf scan\" tabTitle=\"Scan\" [root]=\"tab2\"></ion-tab>\n        <ion-tab tabIcon=\"flame courses\" tabTitle=\"Courses\" [root]=\"tab3\"></ion-tab>\n      </ion-tabs>";
    }
    LibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'library',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/library/library.html"*/'<!-- Generated template for the TabsComponent component -->\n<ion-header class="sb-header">\n    <ion-navbar class="sb-header-toolbar">\n        <ion-toolbar class="sb-header-toolbar">\n            <ion-buttons class="sb-hamburger">\n              <button class="sb-hamburger-menu sb-hamburger-icon" ion-button icon-only>\n                  <ion-icon name="arrow-back"></ion-icon>\n              </button>\n            </ion-buttons>\n      <ion-title>Tabs</ion-title>\n      </ion-toolbar>\n      </ion-navbar>\n  </ion-header>\n\n<ion-content no-padding>\n\n  <div class="code-block">\n    <pre>\n        {{text}}\n      </pre>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/library/library.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { mockRes } from '../collection-page/collection-page-mock.data';
/**
 * Generated class for the CollectionPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CollectionPageComponent = /** @class */ (function () {
    function CollectionPageComponent() {
        console.log('Hello CollectionPageComponent Component');
        this.text = 'Hello World';
    }
    // childrenData = mockRes.getChildContentAPIResponse.result.children;
    // toggle the card
    CollectionPageComponent.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    // to check whether the card is toggled or not
    CollectionPageComponent.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    CollectionPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'collection-page',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/collection-page/collection-page.html"*/'<!-- Generated template for the CollectionPageComponent component -->\n<ion-header class="sb-header">\n <!-- Generated template for the AppHeaderComponent component -->\n\n<ion-navbar class="sb-header-toolbar">\n      <ion-title>Collection Page</ion-title>\n    </ion-navbar>\n  </ion-header> \n\n<ion-content padding>\n\n  <!-- Content Card End -->\n  <detail-card></detail-card>\n \n  <ion-card class="sb-accordian-card">\n    <ion-grid class="sb-accordian-header">\n      <ion-row (click)="toggleGroup(100)">\n        <ion-col col-11>\n          <div class="sb-topic-text"> UNIT 1.2</div>\n        </ion-col>\n        <ion-col col-1 *ngIf="!isGroupShown(100)">\n          <div>\n            <ion-icon ios="ios-arrow-dropdown" md="md-arrow-dropdown" class="sb-accordian-arrow"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col col-1 *ngIf="isGroupShown(100)">\n          <div>\n            <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup" class="sb-accordian-arrow"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <div class="sb-hidden-content" *ngIf="isGroupShown(100)">\n      <div class="sb-separator-line"></div>\n      <div class="sb-topics-container">\n        <div class="sb-topic-container sb-topics-1child">\n          <div class="sb-topic-title">Vedic Culture in North India</div>\n          <div class="row sb-topic-item sb-topic-disabled">\n              <ion-icon ios="ios-arrow-dropright-circle" md="md-arrow-dropright-circle" class="sb-accordian-grey-icon"></ion-icon>\n              <div class="sb-accordian-grey-text">Advent of Aryans</div>\n            </div>\n          <div class="row sb-topic-item">\n            <ion-icon ios="ios-arrow-dropright-circle" md="md-arrow-dropright-circle" class="sb-play-icon"></ion-icon>\n            <div [ngClass]="{\'sb-play-selected\':isSelected,\'sb-play-unselected\':!isSelected}">Vedic\n              Period\n              <span>\n                <ion-icon class="sb-checkmark-icon" name="checkmark-circle-outline" *ngIf="isSelected"></ion-icon>\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <div class="sb-topic-container sb-topics-2child">\n          <div class="sb-separator-line"></div>\n          <div class="sb-topic-1title">Aryans and their home in India</div>\n\n          <div class="row sb-topic-item">\n            <ion-icon ios="ios-alert" md="md-alert" class="sb-accordian-grey-icon"></ion-icon>\n            <div class="sb-accordian-grey-text">Vedic Period</div>\n          </div>\n          <div class="row sb-topic-item">\n              <div class="sb-accordian-grey-text">Vedic Period</div>\n              <ion-icon ios="ios-alert" md="md-alert" class="sb-accordian-grey-icon"></ion-icon>\n            </div>\n        </div>\n\n        <div class="sb-topic-container sb-topics-3child">\n          <div class="sb-separator-line"></div>\n          <div class="sb-topic-1title">MEGHALITHIC IRON AGE IN TAMILNADU</div>\n          <div class="sb-topic-2title">Tamilnadu Excavation </div>\n          <div class="row sb-topic-item">\n            <ion-icon ios="ios-alert" md="md-alert" class="sb-accordian-grey-icon"></ion-icon>\n            <div class="sb-accordian-grey-text">Paleolithic Discoveries\n              <span>\n                <ion-icon class="sb-checkmark-icon" name="checkmark-circle-outline" *ngIf="isSelected"></ion-icon>\n              </span>\n            </div>\n          </div>\n          <div class="row sb-topic-item">\n            <ion-icon ios="ios-arrow-dropright-circle" md="md-arrow-dropright-circle" class="sb-play-icon"></ion-icon>\n            <div class=\'sb-play-selected\'>Paleolithic Discoveries\n              <span>\n                <ion-icon class="sb-checkmark-icon" name="checkmark-circle-outline"></ion-icon>\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <div class="sb-topic-container sb-topics-1child">\n          <div class="sb-separator-line"></div>\n          <div class="sb-topic-title">Exercises</div>\n\n          <div class="row sb-topic-item">\n            <ion-icon ios="ios-arrow-dropright-circle" md="md-arrow-dropright-circle" class="sb-play-icon"></ion-icon>\n            <div [ngClass]="{\'sb-play-selected\':isSelected,\'sb-play-unselected\':!isSelected}">Vedic\n              Culture in North India and Megalithic Culture in South India Period\n              <span>\n                <ion-icon class="sb-checkmark-icon" name="checkmark-circle-outline" *ngIf="isSelected"></ion-icon>\n              </span>\n            </div>\n          </div>\n          <div class="row sb-topic-item">\n            <ion-icon ios="ios-arrow-dropright-circle" md="md-arrow-dropright-circle" class="sb-accordian-grey-icon"></ion-icon>\n            <div class="sb-accordian-grey-text">Vedic Period</div>\n          </div>\n          <div class="row sb-topic-item">\n            <ion-icon ios="ios-arrow-dropright-circle" md="md-arrow-dropright-circle" class="sb-play-icon"></ion-icon>\n            <div class=\'sb-play-selected\'>Vedic Period\n              <span>\n                <ion-icon class="sb-checkmark-icon" name="checkmark-circle-outline"></ion-icon>\n              </span>\n            </div>\n          </div>\n          <div class="sb-separator-line"></div>\n        </div>\n\n      </div>\n    </div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/collection-page/collection-page.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CollectionPageComponent);
    return CollectionPageComponent;
}());

//# sourceMappingURL=collection-page.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * Generated class for the OfflineToastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OfflineToastComponent = /** @class */ (function () {
    function OfflineToastComponent(toastController) {
        this.toastController = toastController;
        console.log('Hello OfflineToastComponent Component');
        this.text = 'Hello World';
        this.presentToastWithOptions();
    }
    OfflineToastComponent.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your settings have been saved.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfflineToastComponent.prototype.presentToastWithOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'You are offline',
                            showCloseButton: true,
                            //icon : 'information',
                            position: 'top',
                            closeButtonText: '',
                            cssClass: 'toastAfterHeader'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfflineToastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'offline-toast',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/offline-toast/offline-toast.html"*/'<!-- Generated template for the OfflineToastComponent component -->\n<ion-header class="sb-header">\n    <ion-navbar class="sb-header-toolbar">\n      <ion-title>Offline Toast</ion-title>\n    </ion-navbar>\n </ion-header>\n\n<!-- <ion-content> -->\n  <!-- <div> <button ion-button class="class-pill" (click)="presentToast()">Toast</button>\n    <button ion-button class="class-pill" (click)="presentToastWithOptions()">Toast With Options</button></div> -->\n  <!-- <collection-page></collection-page> -->\n<!-- </ion-content> -->'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/offline-toast/offline-toast.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], OfflineToastComponent);
    return OfflineToastComponent;
}());

//# sourceMappingURL=offline-toast.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ContentInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ContentInfoComponent = /** @class */ (function () {
    function ContentInfoComponent() {
        console.log('Hello ContentInfoComponent Component');
        this.text = 'Hello World';
    }
    ContentInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'content-info',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/content-info/content-info.html"*/'<!-- Generated template for the ContentInfoComponent component -->\n<ion-header class="sb-header">\n  <!-- Generated template for the AppHeaderComponent component -->\n  <!-- <ion-header> -->\n  <ion-navbar class="sb-header-toolbar">\n    <ion-title>Content Info card</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <content-player></content-player>\n  <breadcrumbs></breadcrumbs>\n  <detail-card class="sb-detail-card-info"></detail-card>\n  <info></info>\n\n  \n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/content-info/content-info.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ContentInfoComponent);
    return ContentInfoComponent;
}());

//# sourceMappingURL=content-info.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextbookCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SubjectCardsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TextbookCardComponent = /** @class */ (function () {
    function TextbookCardComponent() {
        console.log('Hello SubjectCardsComponent Component');
        this.text = 'Hello World';
    }
    TextbookCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'textbook-card',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/textbook-card/textbook-card.html"*/'<ion-header class="sb-header">\n  <!-- Generated template for the AppHeaderComponent component -->\n  <!-- <ion-header> -->\n  <ion-navbar class="sb-header-toolbar">\n    <ion-title>Recently Viewed</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div class="sb-textbook-container">\n    <div class="sb-textbook-items">\n      <div class="sb-textbook-title-container">\n        <span class="textbook-icon">\n          <ion-icon ios="ios-albums" md="md-albums"></ion-icon>\n        </span>\n        <span class="textbook-title">\n          Social Science\n        </span>\n      </div>\n      <!-- Card style -->\n      <div class="sb-card-container sb-card-textbook-container">\n        <div class="sb-card ">\n          <div class="img-container"></div>\n          <div class="sb-card-details">\n            <div class="title">Great thinkers and their new religions</div>\n            <div><span class="info class">Class6</span><span class="separator-dot"></span><span class="info subject">Social\n                Science</span></div>\n          </div>\n        </div>\n\n        <div class="sb-card">\n          <div class="img-container"></div>\n          <div class="sb-card-details">\n            <div class="title">Great thinkers and their new religions</div>\n            <div><span class="info class">Class6</span><span class="separator-dot"></span><span class="info subject">Social\n                Science</span></div>\n          </div>\n        </div>\n\n        <div class="sb-card offline">\n          <div class="img-container">\n            <ion-icon ios="ios-notifications-off" md="md-notifications-off" class="white offline-icon"></ion-icon>\n          </div>\n          <div class="sb-card-details">\n            <div class="title">Great thinkers and their new religions</div>\n            <div><span class="info class">Class6</span><span class="separator-dot"></span><span class="info subject">Social\n                Science</span></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="sb-textbook-container">\n      <div class="sb-textbook-items">\n        <div class="sb-textbook-title-container">\n          <span class="textbook-icon">\n            <ion-icon ios="ios-albums" md="md-albums"></ion-icon>\n          </span>\n          <span class="textbook-title">\n            Social Science\n          </span>\n        </div>\n        <!-- Card style -->\n        <div class="sb-card-container sb-card-textbook-container">\n          <div class="sb-card ">\n            <div class="img-container"></div>\n            <div class="sb-card-details">\n              <div class="title">Great thinkers and their new religions</div>\n              <div><span class="info class">Class6</span><span class="separator-dot"></span><span class="info subject">Social\n                  Science</span></div>\n            </div>\n          </div>\n  \n          <div class="sb-card">\n            <div class="img-container"></div>\n            <div class="sb-card-details">\n              <div class="title">Great thinkers and their new religions</div>\n              <div><span class="info class">Class6</span><span class="separator-dot"></span><span class="info subject">Social\n                  Science</span></div>\n            </div>\n          </div>\n  \n          <div class="sb-card offline">\n            <div class="img-container">\n              <ion-icon ios="ios-notifications-off" md="md-notifications-off" class="white offline-icon"></ion-icon>\n            </div>\n            <div class="sb-card-details">\n              <div class="title">Great thinkers and their new religions</div>\n              <div><span class="info class">Class6</span><span class="separator-dot"></span><span class="info subject">Social\n                  Science</span></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/textbook-card/textbook-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TextbookCardComponent);
    return TextbookCardComponent;
}());

//# sourceMappingURL=textbook-card.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentlyViewedViewAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RecentlyViewedViewAllComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RecentlyViewedViewAllComponent = /** @class */ (function () {
    function RecentlyViewedViewAllComponent() {
        console.log('Hello RecentlyViewedViewAllComponent Component');
        this.text = 'Hello World';
    }
    RecentlyViewedViewAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'recently-viewed-view-all',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/recently-viewed-view-all/recently-viewed-view-all.html"*/'<!-- Generated template for the RecentlyViewedComponent component -->\n<ion-header class="sb-header">\n  <!-- Generated template for the AppHeaderComponent component -->\n  <!-- <ion-header> -->\n  <ion-navbar class="sb-header-toolbar">\n    <ion-title>Recently Viewed - view all</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <div class="sb-view-all-container">\n\n    <div class="sb-view-all-items">\n      <div class="sb-view-all-title">\n        <span class="page-heading">Recently Viewed</span>\n        <span class="page-info">Showing 10 items</span>\n      </div>\n    </div>\n\n  </div>\n  <div class="sb-view-all-container">\n    <div class="sb-card-container sb-card-view-all-container">\n      <div class="sb-card ">\n        <div class="img-container"></div>\n        <div class="sb-card-details">\n          <div class="title">Great thinkers and their new religions</div>\n          <div class="info"><span class=" class">Class6</span><span class="separator-dot"></span><span\n              class=" subject">Social\n              Science</span>\n          </div>\n          <div class="sb-card-actions">\n            <button ion-button class="action-btn float-end delete">\n              <ion-icon ios="ios-trash" md="md-trash" class="MR5"></ion-icon>\n              Delete\n            </button>\n            <button ion-button class="action-btn float-end ">\n              <ion-icon ios="ios-refresh-circle" md="md-refresh-circle" class="MR5"></ion-icon>\n              update\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <div class="sb-card ">\n          <div class="img-container"></div>\n          <div class="sb-card-details">\n            <div class="title">Great thinkers and their new religions</div>\n            <div class="info"><span class=" class">Class6</span><span class="separator-dot"></span><span\n                class=" subject">Social\n                Science</span>\n            </div>\n            <div class="sb-card-actions">\n              <button ion-button class="action-btn float-end download">\n                <ion-icon ios="ios-refresh-circle" md="md-refresh-circle" class="MR5"></ion-icon>\n                Download\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <div class="sb-card offline">\n          <div class="img-container">\n              <ion-icon ios="ios-notifications-off" md="md-notifications-off" class="white offline-icon"></ion-icon>\n          </div>\n          <div class="sb-card-details">\n            <div class="title">Great thinkers and their new religions</div>\n            <div class="info"><span class=" class">Class6</span><span class="separator-dot"></span><span\n                class=" subject">Social\n                Science</span>\n            </div>\n            <div class="sb-card-actions">\n              <button ion-button class="action-btn float-end delete">\n                <ion-icon ios="ios-trash" md="md-trash" class="MR5"></ion-icon>\n                Delete\n              </button>\n              <button ion-button class="action-btn float-end ">\n                <ion-icon ios="ios-refresh-circle" md="md-refresh-circle" class="MR5"></ion-icon>\n                Update\n              </button>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/recently-viewed-view-all/recently-viewed-view-all.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RecentlyViewedViewAllComponent);
    return RecentlyViewedViewAllComponent;
}());

//# sourceMappingURL=recently-viewed-view-all.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sb_rating_sb_rating__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sb_popup_sb_popup__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sb_download_popup_sb_download_popup__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PopupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopupsComponent = /** @class */ (function () {
    function PopupsComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        console.log('Hello PopupsComponent Component');
        this.text = 'Hello World';
    }
    PopupsComponent.prototype.openPopupInfo = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__sb_popup_sb_popup__["a" /* SbPopupComponent */], {
            sbPopoverHeading: "Download",
            sbPopoverMainTitle: "Great Thinkers and their new religions",
            actionsButtons: [
                {
                    btntext: "Download",
                    btnClass: 'popover-color'
                },
            ],
            icon: null,
            metaInfo: "1 item (20 MB)",
            sbPopoverContent: "Some content might not be playable offline."
        }, {
            cssClass: 'sb-popover info',
        });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (canDownload) {
            if (canDownload === void 0) { canDownload = false; }
            console.log('dismissed');
        });
    };
    PopupsComponent.prototype.openPopupDanger = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__sb_popup_sb_popup__["a" /* SbPopupComponent */], {
            sbPopoverHeading: "Delete",
            sbPopoverMainTitle: "Social Science Term 1",
            actionsButtons: [
                {
                    btntext: "Delete",
                    btnClass: 'popover-color'
                },
            ],
            icon: null,
            metaInfo: "30 items (200 MB)",
            sbPopoverContent: "Are you sure you want to delete ?"
        }, {
            cssClass: 'sb-popover danger',
        });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (canDownload) {
            if (canDownload === void 0) { canDownload = false; }
            console.log('dismissed');
        });
    };
    PopupsComponent.prototype.openPopupWarning = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__sb_popup_sb_popup__["a" /* SbPopupComponent */], {
            sbPopoverHeading: "Coming Soon",
            sbPopoverMainTitle: "Content coming soon",
            actionsButtons: [
                {
                    btntext: "Interested",
                    btnClass: 'popover-color'
                }
            ],
            icon: {
                md: "md-alert",
                ios: "ios-alert",
                className: ""
            },
            metaInfo: "",
            sbPopoverContent: "Let us know if you are interested in this content"
        }, {
            cssClass: 'sb-popover warning',
        });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (canDownload) {
            if (canDownload === void 0) { canDownload = false; }
            console.log('dismissed');
        });
    };
    PopupsComponent.prototype.openNoInternetPopup = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__sb_popup_sb_popup__["a" /* SbPopupComponent */], {
            sbPopoverHeading: "No connection",
            sbPopoverMainTitle: "No internet connection",
            actionsButtons: [],
            icon: {
                md: "md-notifications-off",
                ios: "ios-notifications-off",
                className: ""
            },
            metaInfo: "",
            sbPopoverContent: "Add this content to your download queue, once connection resumes ?"
        }, {
            cssClass: 'sb-popover warning',
        });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (canDownload) {
            if (canDownload === void 0) { canDownload = false; }
            console.log('dismissed');
        });
    };
    PopupsComponent.prototype.openNoBnadWidthPopup = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__sb_popup_sb_popup__["a" /* SbPopupComponent */], {
            sbPopoverHeading: "Low bandwidth",
            sbPopoverMainTitle: "Low bandwidth network detected",
            actionsButtons: [
                {
                    btntext: "Play Onlilne",
                    btnClass: 'popover-color'
                },
                {
                    btntext: "Download",
                    btnClass: 'sb-btn sb-btn-normal sb-btn-info'
                }
            ],
            icon: {
                md: "md-sad",
                ios: "ios-sad",
                className: ""
            },
            metaInfo: "",
            sbPopoverContent: "Consider downloading the content"
        }, {
            cssClass: 'sb-popover warning',
        });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (canDownload) {
            if (canDownload === void 0) { canDownload = false; }
            console.log('dismissed');
        });
    };
    PopupsComponent.prototype.openPopupRating = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__sb_rating_sb_rating__["a" /* SbRatingComponent */], {}, {
            cssClass: 'sb-popover info',
        });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (canDownload) {
            if (canDownload === void 0) { canDownload = false; }
            console.log('dismissed');
        });
    };
    PopupsComponent.prototype.openDownloadPopup = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__sb_download_popup_sb_download_popup__["a" /* SbDownloadPopupComponent */], {}, {
            cssClass: 'sb-popover sb-popover-download  info',
        });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (canDownload) {
            if (canDownload === void 0) { canDownload = false; }
            console.log('dismissed');
        });
    };
    PopupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popups',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/popups/popups.html"*/'<ion-header class="sb-header">\n  <ion-navbar class="sb-header-toolbar">\n    <ion-title>Recently Viewed</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h4 style="border-bottom: 5px solid #333; padding-bottom: 5px;">Click on buttons to view popups</h4>\n  <h5>Reusable single popover</h5>\n  <div class="d-flex flex-w-wrap">\n\n    <button ion-button class="sb-btn sb-btn-normal sb-btn-info" (click)="openPopupInfo()">SB Popover-info</button>\n    <button ion-button class="sb-btn sb-btn-normal sb-btn-error" (click)="openPopupDanger()">SB Popover-danger</button>\n    <button ion-button class="sb-btn sb-btn-normal sb-btn-warning" (click)="openPopupWarning()">SB\n      Popover-warning</button>\n    <button ion-button class="sb-btn sb-btn-normal sb-btn-warning" (click)="openNoInternetPopup()">No internet (No\n      Buttons)</button>\n    <button ion-button class="sb-btn sb-btn-normal sb-btn-warning" (click)="openNoBnadWidthPopup()">Low band width (\n      with 2 buttons)</button>\n     \n  </div>\n\n  <h5>Rating popup</h5>\n  <div class="d-flex flex-w-wrap">\n  <button ion-button class="sb-btn sb-btn-normal sb-btn-info" (click)="openPopupRating()">SB Rating - Popover</button>\n  </div>\n\n  <h5>Download popup</h5>\n  <div class="d-flex flex-w-wrap">\n      <button ion-button class="sb-btn sb-btn-normal sb-btn-info" (click)="openDownloadPopup()">SB download popup</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/popups/popups.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]])
    ], PopupsComponent);
    return PopupsComponent;
}());

//# sourceMappingURL=popups.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SbRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SbRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SbRatingComponent = /** @class */ (function () {
    function SbRatingComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.userRating = 0;
        console.log('Hello SbRatingComponent Component');
        this.text = 'Hello World';
        this.showCommentBox = false;
    }
    /**
     *
     * @param {number} ratingCount
     */
    SbRatingComponent.prototype.rateContent = function (userRating) {
        this.userRating = userRating;
        this.showCommentBox = true;
        console.log(this.showCommentBox);
    };
    SbRatingComponent.prototype.closePopover = function () {
        this.viewCtrl.dismiss();
    };
    SbRatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sb-rating',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/sb-rating/sb-rating.html"*/'<!-- Generated template for the SbRatingComponent component -->\n<ion-header class="sb-popover-header">\n    <ion-toolbar class="sb-popover-toolbar">\n      <ion-title class="sb-popover-title">Rate the Content\n          <ion-icon name="close" class="sb-modal-close" (click)="closePopover()"></ion-icon> </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content no-padding class="sb-popover-container">\n      <div class="sb-popover-items">\n          <rating [(ngModel)]="userRating" (ngModelChange)="rateContent($event)"></rating>\n          <div class="sb-popover-content-details" *ngIf="this.userRating">\n            <div class="main-title">\n              <div class="meta-info">\n                You have rated {{userRating}}\n              </div>\n            </div>\n          </div>\n          <ion-input *ngIf="showCommentBox" [(ngModel)]="comment" placeholder="Feedback (Optional)" style="border-bottom : 2px;"></ion-input>\n          <div *ngIf="showCommentBox" class="sb-line"></div>\n      </div>\n  </ion-content>\n\n  <ion-footer>\n      <div class="sb-popover-footer">\n        <button ion-button class="sb-popover-action-btn popover-color"> Submit</button>\n      </div>\n    </ion-footer>\n'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/sb-rating/sb-rating.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], SbRatingComponent);
    return SbRatingComponent;
}());

//# sourceMappingURL=sb-rating.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SbPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SbPopupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SbPopupComponent = /** @class */ (function () {
    function SbPopupComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.actionsButtons = this.navParams.get('actionsButtons');
        this.icon = this.navParams.get('icon');
        this.metaInfo = this.navParams.get('metaInfo');
        this.sbPopoverContent = this.navParams.get('sbPopoverContent');
        this.sbPopoverHeading = this.navParams.get('sbPopoverHeading');
        this.sbPopoverMainTitle = this.navParams.get('sbPopoverMainTitle');
        console.log('this.actionsButtons', this.actionsButtons);
        console.log('this.sbPopoverMainTitle', this.sbPopoverMainTitle);
    }
    SbPopupComponent.prototype.closePopover = function () {
        this.viewCtrl.dismiss();
    };
    SbPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sb-popup',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/sb-popup/sb-popup.html"*/'<ion-header class="sb-popover-header">\n  <ion-toolbar class="sb-popover-toolbar">\n    <ion-title class="sb-popover-title">{{sbPopoverHeading}}\n        <ion-icon name="close" class="sb-modal-close" (click)="closePopover()"></ion-icon> </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding class="sb-popover-container">\n    <div class="sb-popover-items">\n        <div class="icon-container">\n          <ion-icon ios="{{icon?.ios}}" md="{{icon?.md}}"></ion-icon>\n        </div>\n\n        <div class="sb-popover-content-details">\n          <div class="main-title">\n            {{sbPopoverMainTitle}}\n            <div class="meta-info">\n              {{metaInfo}}\n            </div>\n          </div>\n          <div class="sb-popover-content">\n            {{sbPopoverContent}}\n          </div>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n  <div class="sb-popover-footer">\n    <button ion-button class="sb-popover-action-btn " [ngClass]="btn.btnClass" *ngFor="let btn of actionsButtons"> {{btn.btntext }}</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/sb-popup/sb-popup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], SbPopupComponent);
    return SbPopupComponent;
}());

//# sourceMappingURL=sb-popup.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SbDownloadPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SbDownloadPopupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SbDownloadPopupComponent = /** @class */ (function () {
    function SbDownloadPopupComponent() {
        console.log('Hello SbDownloadPopupComponent Component');
        this.text = 'Hello World';
    }
    SbDownloadPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sb-download-popup',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/sb-download-popup/sb-download-popup.html"*/'<ion-header class="sb-popover-header">\n    <ion-toolbar class="sb-popover-toolbar">\n      <ion-title class="sb-popover-title">Downloading\n        <button ion-button clear class="sb-modal-close" (click)="closePopover()">Hide</button>\n      </ion-title>\n    </ion-toolbar>\n    <div style="height: 4px;\n  background-color:#000;\n  position: relative;">\n  <div style="position:absolute; background:#D8D8D8; left:20%; right:0; top:0; bottom:0">\n\n  </div>\n  </div>\n  </ion-header>\n\n  \n  \n  <ion-content no-padding class="sb-popover-container">\n      <div class="sb-popover-items">  \n          <div class="sb-popover-content-details">\n            <div class="main-title">\n                Great Thinkers and their new religions\n              <div class="meta-info">\n                  15 MB / 20 MB\n              </div>\n            </div>\n            <!-- <div class="sb-popover-content">\n              {{sbPopoverContent}}\n            </div> -->\n          </div>\n      </div>\n  </ion-content>\n  \n  <ion-footer>\n    <div class="sb-popover-footer">\n      <button ion-button class="sb-popover-action-btn sb-btn sb-btn-normal sb-btn-info" >Cancel</button>\n    </div>\n  </ion-footer>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/sb-download-popup/sb-download-popup.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SbDownloadPopupComponent);
    return SbDownloadPopupComponent;
}());

//# sourceMappingURL=sb-download-popup.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ButtonsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        console.log('Hello ButtonsComponent Component');
        this.text = 'Hello World';
    }
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'buttons',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/buttons/buttons.html"*/'<ion-header class="sb-header">\n  <!-- Generated template for the AppHeaderComponent component -->\n  <!-- <ion-header> -->\n  <ion-navbar class="sb-header-toolbar">\n    <ion-title>Recently Viewed</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div class="d-flex flex-w-wrap">\n\n      <!-- Buttons with background color -->\n      <button ion-button class="sb-btn sb-btn-normal sb-btn-primary">Primary Buttom </button>\n      <button ion-button class="sb-btn sb-btn-normal sb-btn-secondary">Secondary Button</button>\n      <button ion-button class="sb-btn sb-btn-normal sb-btn-tertiary"> Tertiary Button</button>\n      <button ion-button class="sb-btn sb-btn-normal sb-btn-info"> Info Button</button>\n      <button ion-button class="sb-btn sb-btn-normal sb-btn-warning"> Warning Button</button>\n      <button ion-button class="sb-btn sb-btn-normal sb-btn-error"> Error Button</button>\n    \n      <!-- Button with outline and background white -->\n      <button ion-button class="sb-btn sb-btn-sm  sb-btn-outline-info">Info </button>\n      <button ion-button class="sb-btn sb-btn-sm  sb-btn-outline-warning">Warning</button>\n      <button ion-button class="sb-btn sb-btn-sm  sb-btn-outline-success"> Success</button>\n      <button ion-button class="sb-btn sb-btn-sm  sb-btn-outline-error"> Error</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/buttons/buttons.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());

//# sourceMappingURL=buttons.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        console.log('Hello SearchComponent Component');
        this.text = 'Hello World';
    }
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/search/search.html"*/'<!-- Generated template for the SearchComponent component -->\n<ion-header class="search-header">\n  <ion-navbar>\n    <ion-input type="search" #searchInput placeholder="Social Science" clearInput></ion-input>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="close" float-end class="search-bar-icons"></ion-icon>\n      </button>\n      <button ion-button>\n        <ion-icon name="options" float-end class="search-bar-icons"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="sb-view-all-container">\n    <div class="sb-view-all-items sb-search-items">\n      <div class="sb-card-result sb-card-details">\n        <div class="sb-card-result-content"> Showing Results for "Social Science"</div>\n        <div class="sb-card-res-count">3 Results</div>\n      </div>\n    </div>\n    <div class="sb-card-container sb-card-view-all-container sb-search-card">\n      <div class="sb-card reverse">\n        <div class="img-container"></div>\n        <div class="sb-card-details">\n          <div class="title">Great thinkers and their new religions</div>\n          <div class="info"><span class=" class">Class6</span><span class="separator-dot"></span><span class=" subject">Social\n              Science</span>\n          </div>\n        </div>\n      </div>\n\n      <div class="sb-card reverse">\n        <div class="img-container"></div>\n        <div class="sb-card-details">\n          <div class="title">Great thinkers and their new religions</div>\n          <div class="info"><span class=" class">Class6</span><span class="separator-dot"></span><span class=" subject">Social\n              Science</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/search/search.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
        console.log('Hello SideMenuComponent Component');
        this.text = 'Hello World';
    }
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'side-menu',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/side-menu/side-menu.html"*/'<!-- Generated template for the SideMenuComponent component -->\n<!-- <div>\n  {{text}}\n</div> -->\n<ion-header class="sb-header">\n    <!-- Generated template for the AppHeaderComponent component -->\n    <!-- <ion-header> -->\n    <ion-navbar class="sb-header-toolbar">\n      <ion-title>Side Menu</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n<ion-header class="sb-header">\n    <ion-navbar class="sb-header-navbar" #content>\n      <!-- <ion-toolbar class="sb-header-toolbar"> -->\n      <ion-buttons class="sb-hamburger" start>\n        <button class="sb-hamburger-menu sb-hamburger-icon" ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title></ion-title>\n      <ion-buttons class="sb-header-btn-group" end>\n        <button ion-button icon-only>\n          <ion-icon name="person"></ion-icon>\n        </button>\n        <button ion-button icon-only>\n          <ion-icon name="notifications-outline"></ion-icon>\n        </button>\n        <button ion-button icon-only>\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n      <!-- </ion-toolbar> -->\n    </ion-navbar>\n  </ion-header>\n</ion-content>\n  \n  <ion-menu [content]="content" class="sb-side-menu" persistent="true">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n           <img class="img-container">\n          <span>Diksha</span>\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n     \n  \n      <ion-list class="sb-menu-list">\n        <ion-item>\n          <span class="sb-menu-icon">\n            <ion-icon ios="ios-contacts" md="md-contacts"></ion-icon>\n          </span>\n            <span class="sb-menu-item">User and Groups</span>\n        </ion-item>\n        <ion-item>\n            <span class="sb-menu-icon">\n          <ion-icon ios="ios-clipboard" md="md-clipboard" MR5></ion-icon>\n          </span>\n          <span class="sb-menu-item">Reports</span>\n        </ion-item>\n        <ion-item>\n            <span class="sb-menu-icon">\n          <ion-icon ios="ios-planet" md="md-planet"></ion-icon>\n          </span>\n          <span class="sb-menu-item">Language</span>\n        </ion-item>\n        <ion-item>\n            <span class="sb-menu-icon">\n          <ion-icon ios="ios-settings" md="md-settings"></ion-icon>\n          </span>\n          <span class="sb-menu-item">Settings</span>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n    <ion-footer class="side-menu-footer">\n      Version V1.12.27\n    </ion-footer>\n  </ion-menu>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/side-menu/side-menu.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());

//# sourceMappingURL=side-menu.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_library_library__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_library_library__["a" /* LibraryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_library_library__["a" /* LibraryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grade_filter_grade_filter__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_filter_library_filter__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_header_app_header__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recently_viewed_recently_viewed__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_footer_app_footer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__library_library__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collection_page_collection_page__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__offline_toast_offline_toast__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__content_info_content_info__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__detail_card_detail_card__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_textbook_card_textbook_card__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__recently_viewed_view_all_recently_viewed_view_all__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__popups_popups__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sb_popup_sb_popup__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__buttons_buttons__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__breadcrumbs_breadcrumbs__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__info_info__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__content_player_content_player__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__search_search__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__offline_offline__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__side_menu_side_menu__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic2_rating__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sb_rating_sb_rating__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sb_download_popup_sb_download_popup__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__grade_filter_grade_filter__["a" /* GradeFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__library_filter_library_filter__["a" /* LibraryFilterPage */],
                __WEBPACK_IMPORTED_MODULE_5__app_header_app_header__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__recently_viewed_recently_viewed__["a" /* RecentlyViewedComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_footer_app_footer__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__library_library__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_6__recently_viewed_recently_viewed__["a" /* RecentlyViewedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__collection_page_collection_page__["a" /* CollectionPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__offline_toast_offline_toast__["a" /* OfflineToastComponent */],
                __WEBPACK_IMPORTED_MODULE_11__content_info_content_info__["a" /* ContentInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__detail_card_detail_card__["a" /* DetailCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_textbook_card_textbook_card__["a" /* TextbookCardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__recently_viewed_view_all_recently_viewed_view_all__["a" /* RecentlyViewedViewAllComponent */],
                __WEBPACK_IMPORTED_MODULE_15__popups_popups__["a" /* PopupsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sb_popup_sb_popup__["a" /* SbPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_17__buttons_buttons__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__breadcrumbs_breadcrumbs__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__info_info__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__content_player_content_player__["a" /* ContentPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__search_search__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__offline_offline__["a" /* OfflineComponent */],
                __WEBPACK_IMPORTED_MODULE_23__side_menu_side_menu__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_25__sb_rating_sb_rating__["a" /* SbRatingComponent */],
                __WEBPACK_IMPORTED_MODULE_23__side_menu_side_menu__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_26__sb_download_popup_sb_download_popup__["a" /* SbDownloadPopupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_24_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__grade_filter_grade_filter__["a" /* GradeFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__library_filter_library_filter__["a" /* LibraryFilterPage */],
                __WEBPACK_IMPORTED_MODULE_5__app_header_app_header__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__recently_viewed_recently_viewed__["a" /* RecentlyViewedComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_footer_app_footer__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__library_library__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_6__recently_viewed_recently_viewed__["a" /* RecentlyViewedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__collection_page_collection_page__["a" /* CollectionPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__offline_toast_offline_toast__["a" /* OfflineToastComponent */],
                __WEBPACK_IMPORTED_MODULE_11__content_info_content_info__["a" /* ContentInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__detail_card_detail_card__["a" /* DetailCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_textbook_card_textbook_card__["a" /* TextbookCardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__recently_viewed_view_all_recently_viewed_view_all__["a" /* RecentlyViewedViewAllComponent */],
                __WEBPACK_IMPORTED_MODULE_15__popups_popups__["a" /* PopupsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sb_popup_sb_popup__["a" /* SbPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_17__buttons_buttons__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__breadcrumbs_breadcrumbs__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__info_info__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__content_player_content_player__["a" /* ContentPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__search_search__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__offline_offline__["a" /* OfflineComponent */],
                __WEBPACK_IMPORTED_MODULE_23__side_menu_side_menu__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_25__sb_rating_sb_rating__["a" /* SbRatingComponent */],
                __WEBPACK_IMPORTED_MODULE_26__sb_download_popup_sb_download_popup__["a" /* SbDownloadPopupComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__grade_filter_grade_filter__["a" /* GradeFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__library_filter_library_filter__["a" /* LibraryFilterPage */],
                __WEBPACK_IMPORTED_MODULE_5__app_header_app_header__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__recently_viewed_recently_viewed__["a" /* RecentlyViewedComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_footer_app_footer__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__library_library__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__collection_page_collection_page__["a" /* CollectionPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__offline_toast_offline_toast__["a" /* OfflineToastComponent */],
                __WEBPACK_IMPORTED_MODULE_11__content_info_content_info__["a" /* ContentInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__detail_card_detail_card__["a" /* DetailCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_textbook_card_textbook_card__["a" /* TextbookCardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__recently_viewed_view_all_recently_viewed_view_all__["a" /* RecentlyViewedViewAllComponent */],
                __WEBPACK_IMPORTED_MODULE_15__popups_popups__["a" /* PopupsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sb_popup_sb_popup__["a" /* SbPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_17__buttons_buttons__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__breadcrumbs_breadcrumbs__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__search_search__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__offline_offline__["a" /* OfflineComponent */],
                __WEBPACK_IMPORTED_MODULE_23__side_menu_side_menu__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_25__sb_rating_sb_rating__["a" /* SbRatingComponent */],
                __WEBPACK_IMPORTED_MODULE_26__sb_download_popup_sb_download_popup__["a" /* SbDownloadPopupComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the DetailCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DetailCardComponent = /** @class */ (function () {
    function DetailCardComponent() {
        console.log('Hello DetailCardComponent Component');
        this.text = 'Hello World';
    }
    DetailCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'detail-card',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/detail-card/detail-card.html"*/'<!-- Generated template for the DetailCardComponent component -->\n<!-- <ion-header class="sb-header">\n    <ion-navbar class="sb-header-toolbar">\n      <ion-title>Detail Card</ion-title>\n    </ion-navbar>\n  </ion-header> -->\n<div class="sb-dt-card">\n    <div class="sb-dt-content">\n      <div class="left">\n        \n        <div class="sb-dt-title"> Social Science term2</div>\n        <div class="sb-dt-source">\n          <span class="sb-by">by</span>\n          <span class="sb-user">Bindu Priya</span>\n        </div>\n        <div class="sb-dt-class-info">\n          <span class="sb-dt-label sb-dt-class">Third Class</span>\n          <span class="sb-separator-dot"></span>\n          <span class="sb-dt-label sb-dt-subject">Biology</span>\n        </div> \n      </div>\n     \n      <div class="right">\n        <div class="img-container">\n          <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_2126526940821504001269/artifact/images_1541139424717.thumb.jpg">\n        </div>\n        \n      </div>\n\n    </div>\n\n      <div class="sb-dt-content pt-0">\n      <div class="left">\n          <div class="sb-practice">\n            <button ion-button outline small>Practice</button>\n        </div>\n        </div>\n        <div class="right">\n            <div (click)="rateContent()" class="sb-rating-view">\n                <span class="sb-rating-value">4.5</span>\n                <span class="sb-rating-star">\n                  <ion-icon ios="ios-star" md="md-star"></ion-icon>\n                </span>\n              </div>\n      </div>\n\n    </div>\n    \n \n\n    <div class="sb-separator-line"></div>\n\n    <div class="sb-dt-card-actions">\n\n      <div class="sb-btn-tile-group">\n        <button ion-button clear icon-only class="sb-btn-tile">\n          <ion-icon ios="ios-cloud-download" md="md-cloud-download" class="sb-dt-card-blue-icon"></ion-icon>\n          <span class="sb-btn-footer-text">Download</span>\n        </button>\n        <button ion-button clear icon-only class="sb-btn-tile">\n            <ion-icon ios="ios-trash" md="md-trash" class="sb-dt-card-danger-icon"></ion-icon>\n            <span class="sb-btn-footer-text">Delete</span>\n          </button>\n        <button ion-button clear icon-only class="sb-btn-tile">\n          <ion-icon ios="ios-share" md="md-share" class="sb-dt-card-blue-icon"></ion-icon>\n          <span class="sb-btn-footer-text">Share</span>\n        </button>\n        <button ion-button clear icon-only class="sb-btn-tile">\n            <ion-icon ios="ios-star-outline" md="md-star-outline" class="sb-dt-card-blue-icon"></ion-icon>\n            <span class="sb-btn-footer-text">Rate</span>\n          </button>\n      </div>\n    </div>\n  </div>'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/detail-card/detail-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DetailCardComponent);
    return DetailCardComponent;
}());

//# sourceMappingURL=detail-card.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BreadcrumbsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
        console.log('Hello BreadcrumbsComponent Component');
        this.text = 'Hello World';
    }
    BreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'breadcrumbs',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/breadcrumbs/breadcrumbs.html"*/'      <div class="breadcrumb-container">\n          <div class="step-indicator">\n              <a class="step completed" href="#">Unit - 1.1 </a>\n              <a class="step completed" href="#">Unit - 1.2 </a>\n              <a class="step completed" href="#">Unit - 1.3 </a>\n              <a class="step completed" href="#">Unit - 1.4 </a>\n              <a class="step completed" href="#">Great Thinkes and Some Long Text </a>\n              <a class="step" href="#">Great Thinker and some long text to check breadcrumbs</a>\n            </div>\n     </div>\n \n\n'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/breadcrumbs/breadcrumbs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());

//# sourceMappingURL=breadcrumbs.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the InfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
        console.log('Hello InfoComponent Component');
        this.text = 'Hello World';
    }
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'info',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/info/info.html"*/'<!-- Generated template for the InfoComponent component -->\n<div class="sb-content-info-container">\n\n  <div class="sb-content-info-items">\n    <div class="sb-content-info-title">About</div>\n\n        <ion-card class="sb-content-info-card">\n            <div class="sb-content-info-heading">Great thinkers and their new religions and Some Text about the Design</div>\n                <div class="sb-info"> \n                  <div class="sb-content-title">Board</div>\n                <div class="sb-content-title-data">State(Tamilnadu)</div>\n                </div>\n               <div class="sb-info">\n                  <div class="sb-content-title">Medium</div>\n                  <div class="sb-content-title-data">English</div>\n               </div>\n               <div class="sb-info">\n                  <div class="sb-content-title">Class</div>\n                  <div class="sb-content-title-data">Class6</div>\n               </div>\n               <div class="sb-info">\n                  <div class="sb-content-title">Subject</div>\n                  <div class="sb-content-title-data">Biology</div>\n               </div>\n               <div class="sb-info">\n                  <div class="sb-content-title">License</div>\n                  <div class="sb-content-title-data">MIT CCBY</div>\n               </div>\n               <div class="sb-info">\n                  <div class="sb-content-title">Creators</div>\n                  <div class="sb-content-title-data">State(Tamilnadu)</div>\n               </div>\n               <div class="sb-info">\n                  <div class="sb-content-title">Contributors</div>\n                  <div class="sb-content-title-data">MIT CCBY</div>\n               </div>\n               <div class="sb-info">\n                  <div class="sb-content-title">Acknowledgment</div>\n                  <div class="sb-content-title-data">MIT CCBY</div>\n               </div>\n     \n       </ion-card>\n  </div>\n</div>\n'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/info/info.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ContentPlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ContentPlayerComponent = /** @class */ (function () {
    function ContentPlayerComponent() {
        console.log('Hello ContentPlayerComponent Component');
        this.text = 'Hello World';
    }
    ContentPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'content-player',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/content-player/content-player.html"*/'<!-- Generated template for the ContentPlayerComponent component -->\n<div class="sb-play-container sb-player-container">\n  <img class = "sb-player-container" src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21265402834026496011086/artifact/images-3_1541139404293.thumb.jpg">\n   <div class="sb-overlay-container">\n    <div class="sb-circle"> \n       <ion-icon name="arrow-back" class="sb-arrow-back"></ion-icon>\n    </div>\n     <div class="sb-common-player-group sb-play-title-group">\n         <button ion-button clear icon-only class="sb-common-title">\n           <ion-icon ios="ios-play" md="md-play" class="sb-common-white-icon"></ion-icon>\n         </button>\n     </div>\n     <div class="sb-online-message">You are online now</div>\n    </div>\n</div>\n<div class="sb-download-container sb-player-container" padding>\n<div class="sb-circle"> \n  <ion-icon name="arrow-back" class="sb-arrow-back"></ion-icon>\n</div>\n<div class="sb-common-player-group sb-common-title-group">\n    <button ion-button clear icon-only class="sb-common-title">\n      <ion-icon ios="ios-cloud-download" md="md-cloud-download" class="sb-common-white-icon"></ion-icon>\n    </button>\n    <div class="sb-common-footer-text">Please download to play</div> \n</div>\n</div>\n<div class="sb-player-container sb-offline-container">\n<div class="sb-circle"> \n   <ion-icon name="arrow-back" class="sb-arrow-back"></ion-icon>\n</div>\n <div class="sb-common-player-group sb-common-title-group">\n     <div class="sb-offline-title">\n       <ion-icon ios="ios-notifications-off" md="md-notifications-off" class="sb-offline-white-icon"></ion-icon>\n     </div>\n     <div class="sb-common-footer-text">You are not connected to the internet</div> \n     <div class="sb-common-footer-text sb-sub-footer">Only downloaded content can be played offline</div>\n </div>\n</div>\n'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/content-player/content-player.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ContentPlayerComponent);
    return ContentPlayerComponent;
}());

//# sourceMappingURL=content-player.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @ViewChild('someVar') input:ElementRef;
/**
 * Generated class for the OfflineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OfflineComponent = /** @class */ (function () {
    function OfflineComponent(rd, _elementRef) {
        this.rd = rd;
        this._elementRef = _elementRef;
        this.closeClicked = false;
        console.log(this.rd);
        console.log('Hello OfflineComponent Component');
        this.text = 'Hello World';
        this.closeClicked === false;
        this.shownGroup == false;
    }
    OfflineComponent.prototype.removeComponent = function () {
        console.log("ofFlineComonent", this.offline);
        console.log("sb-offline-mesg" + document.querySelector('sb-offline-msg'));
        this._elementRef.nativeElement.querySelector('div');
        console.log("Div seleccted", document.getElementById('sb-offline-msg'));
    };
    OfflineComponent.prototype.closeComp = function () {
        console.log("Close CLicked");
        console.log(this.closeClicked);
        this.closeClicked = true;
        console.log(this.closeClicked);
    };
    OfflineComponent.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    // to check whether the card is toggled or not
    OfflineComponent.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    OfflineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'offline',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/offline/offline.html"*/'<!-- Generated template for the OfflineComponent component -->\n<ion-header class="sb-header">\n  <!-- Generated template for the AppHeaderComponent component -->\n  <!-- <ion-header> -->\n  <ion-navbar class="sb-header-toolbar">\n    <ion-title>Offline</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-row #someVar class="sb-offline-msg" id="#sb-offline-msg" *ngIf="!closeClicked">\n    <ion-col col-2 class="offline-icon">\n          <ion-icon item-right name="notifications-off"></ion-icon>\n    </ion-col>\n    <ion-col col-8>\n      <div class="sb-offline-text">\n        You are Offline \n      </div>\n    </ion-col>\n    <ion-col col-2>\n        <button class="close-button" ion-button icon-only clear (click)="closeComp()">\n          <ion-icon item-right name="close"></ion-icon>\n        </button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="closeClicked"></ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/components/offline/offline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], OfflineComponent);
    return OfflineComponent;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryPage = /** @class */ (function () {
    function LibraryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LibraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LibraryPage');
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/pages/library/library.html"*/'<!--\n  Generated template for the LibraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <app-header></app-header>\n</ion-content>\n'/*ion-inline-end:"/home/bindu/gitprojects/sunbird-mobile-ui-components/src/pages/library/library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map