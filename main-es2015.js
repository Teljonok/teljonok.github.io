(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark justify-content-center\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/favorite\">Favorite</a>\n    </li>\n  </ul>\n</nav>\n\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/favorite-weather/favorite-weather.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather/favorite-weather/favorite-weather.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex m-2\">\n  <div class=\"favorite-item d-flex flex-column m-2 p-2\" *ngFor=\"let favorite of (favorites$ |async)\">\n    <div class=\"\">{{favorite.city}}</div>\n    <div class=\"\">{{favorite.degree| number:'1.0-0'}} °  </div>\n    <div class=\"favorite-item-weatherType mt-3\">{{favorite.weatherType}} </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/home-weather/home-weather.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather/home-weather/home-weather.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-2\">\n  <div class=\"search-container\">\n    <input #searchInput pattern=\"[A-Za-z]\" class=\"search-input\" type=\"text\"\n           (keyup.enter)=\"validInput && onSearch(searchInput.value)\" placeholder=\"Search City\"\n           (change)=\"checkValues(searchInput.value)\"> <i\n    class=\"fas fa-search-location search-icon pointer\" (click)=\"validInput && onSearch(searchInput.value)\"></i>\n  </div>\n\n  <ng-container *ngIf=\"(weatherData$ | async).main as weatherData; else noDataMessage\">\n    <div class=\"d-flex\">\n          <div class=\"ml-auto\" (click)=\"toggleFavorite()\">\n        <i *ngIf=\"isFavorite\" class=\"fas fa-heart favorite-icon\"></i>\n        <i *ngIf=\"!isFavorite\" class=\"far fa-heart favorite-icon\"></i>\n        <button class=\"custom-button\">\n          <span *ngIf=\"isFavorite\">Remove from Favorites</span> <span *ngIf=\"!isFavorite\">Add to Favorites</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"d-flex flex-column weather-container\">\n      <div class=\"current-weather-container d-flex\">\n        <div class=\"p-2 weather-icon\">\n          <i [class]=\"buildWeatherIcon(weatherData.weatherType)\" style=\"font-size:30px;\"> </i>\n        </div>\n        <div>\n          <div>{{weatherData.city}}</div>\n          <div>{{weatherData.degree| number:'1.0-0'}}<span *ngIf=\"degreeType == 'celsius'\">° </span>\n            <span\n              *ngIf=\"degreeType == 'fahrenheit'\">F</span></div>\n        </div>\n\n      </div>\n\n      <div class=\"weather-type\">{{weatherData.weatherType |uppercase}}</div>\n      <div class=\"d-flex\">\n        <div class=\"d-flex weather-item m-2\" *ngFor=\"let  weatherItem of (weatherData$ | async).days\">\n          <app-weather-detail\n            [item]=\"weatherItem\" [degreeType]=\"weatherData.degreeType\" class=\"d-flex m-2\">\n          </app-weather-detail>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n</div>\n\n\n<ng-template #noDataMessage>\n  <p>There is no data </p>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/home-weather/weather-detail/weather-detail.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather/home-weather/weather-detail/weather-detail.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"detail\">\n  <div class=\"\">{{item.date |date: \"EEE\"}}</div>\n  <div class=\"\">{{item.degree| number:'1.0-0'}} <span *ngIf=\"celsius\" >° </span> <span *ngIf=\"!celsius \" >F</span>  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _weather_home_weather_home_weather_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather/home-weather/home-weather.component */ "./src/app/weather/home-weather/home-weather.component.ts");
/* harmony import */ var _weather_favorite_weather_favorite_weather_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather/favorite-weather/favorite-weather.component */ "./src/app/weather/favorite-weather/favorite-weather.component.ts");





const routes = [
    {
        path: '',
        component: _weather_home_weather_home_weather_component__WEBPACK_IMPORTED_MODULE_3__["HomeWeatherComponent"]
    },
    {
        path: 'home',
        component: _weather_home_weather_home_weather_component__WEBPACK_IMPORTED_MODULE_3__["HomeWeatherComponent"]
    },
    {
        path: 'favorite',
        component: _weather_favorite_weather_favorite_weather_component__WEBPACK_IMPORTED_MODULE_4__["FavoriteWeatherComponent"]
    },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color-light{\r\n  color:#ffffff80;\r\n}\r\n\r\n.main-body{\r\n  border-bottom: 2px solid #abacb0;\r\n  padding: 20px;\r\n}\r\n\r\n.custom-button{\r\n  background-color: #a3b6c1;\r\n  outline: none;\r\n  padding: 0 5px;\r\n  margin: 0 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1saWdodHtcclxuICBjb2xvcjojZmZmZmZmODA7XHJcbn1cclxuXHJcbi5tYWluLWJvZHl7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhYmFjYjA7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzYjZjMTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'weather-test';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _weather_weather_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather/weather.module */ "./src/app/weather/weather.module.ts");
/* harmony import */ var _weather_store_reducers_weather_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather/store/reducers/weather.reducers */ "./src/app/weather/store/reducers/weather.reducers.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _weather_store_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weather/store/effects */ "./src/app/weather/store/effects/index.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _weather_weather_module__WEBPACK_IMPORTED_MODULE_6__["WeatherModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({ weather: _weather_store_reducers_weather_reducers__WEBPACK_IMPORTED_MODULE_7__["weatherReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_weather_store_effects__WEBPACK_IMPORTED_MODULE_9__["WeatherEffects"]]),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/weather/favorite-weather/favorite-weather.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/weather/favorite-weather/favorite-weather.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorite-item{\r\n  flex-basis: 18%;\r\n  height: 170px;\r\n  border: 1px solid #343a40;\r\n  align-items: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9mYXZvcml0ZS13ZWF0aGVyL2Zhdm9yaXRlLXdlYXRoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvZmF2b3JpdGUtd2VhdGhlci9mYXZvcml0ZS13ZWF0aGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2b3JpdGUtaXRlbXtcclxuICBmbGV4LWJhc2lzOiAxOCU7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/weather/favorite-weather/favorite-weather.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/weather/favorite-weather/favorite-weather.component.ts ***!
  \************************************************************************/
/*! exports provided: FavoriteWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteWeatherComponent", function() { return FavoriteWeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_reducers_weather_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducers/weather.selectors */ "./src/app/weather/store/reducers/weather.selectors.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions */ "./src/app/weather/store/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather/weather.service.ts");






let FavoriteWeatherComponent = class FavoriteWeatherComponent {
    constructor(store, weatherService) {
        this.store = store;
        this.weatherService = weatherService;
    }
    ngOnInit() {
        this.favorites$ = this.store.select(_store_reducers_weather_selectors__WEBPACK_IMPORTED_MODULE_2__["getFavoritesData"]);
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["LoadFavoriteLocations"]());
    }
};
FavoriteWeatherComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_5__["WeatherService"] }
];
FavoriteWeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-weather',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite-weather.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/favorite-weather/favorite-weather.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite-weather.component.css */ "./src/app/weather/favorite-weather/favorite-weather.component.css")).default]
    })
], FavoriteWeatherComponent);



/***/ }),

/***/ "./src/app/weather/home-weather/home-weather.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/weather/home-weather/home-weather.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-container{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.search-input {\r\n  width: 30%;\r\n  outline: none;\r\n  background-color: #a3b6c1;\r\n  padding: 5px 55px 5px 10px;\r\n  top: 1px;\r\n}\r\n\r\n.search-icon{\r\n  font-size: 30px;\r\n  color: #929ca5;\r\n  margin: 5px;\r\n}\r\n\r\n.weather-container{\r\n  border: 1px solid #abacb0;\r\n}\r\n\r\n.favorite-icon{\r\n  position: relative;\r\n  font-size: 25px;\r\n  padding-right: 5px;\r\n  top: 3px;\r\n}\r\n\r\n.weather-type{\r\n  align-self: center;\r\n}\r\n\r\n.weather-item{\r\n  flex-basis: 15%;\r\n  height: 120px;\r\n  border: 1px solid #343a40;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9ob21lLXdlYXRoZXIvaG9tZS13ZWF0aGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvaG9tZS13ZWF0aGVyL2hvbWUtd2VhdGhlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzYjZjMTtcclxuICBwYWRkaW5nOiA1cHggNTVweCA1cHggMTBweDtcclxuICB0b3A6IDFweDtcclxufVxyXG5cclxuLnNlYXJjaC1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzkyOWNhNTtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLndlYXRoZXItY29udGFpbmVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYmFjYjA7XHJcbn1cclxuXHJcbi5mYXZvcml0ZS1pY29ue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIHRvcDogM3B4O1xyXG59XHJcbi53ZWF0aGVyLXR5cGV7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ud2VhdGhlci1pdGVte1xyXG4gIGZsZXgtYmFzaXM6IDE1JTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/weather/home-weather/home-weather.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/weather/home-weather/home-weather.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWeatherComponent", function() { return HomeWeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers_weather_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers/weather.selectors */ "./src/app/weather/store/reducers/weather.selectors.ts");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions */ "./src/app/weather/store/actions/index.ts");






let HomeWeatherComponent = class HomeWeatherComponent {
    constructor(store) {
        this.store = store;
        this.isFavorite = false;
        this.validInput = false;
    }
    ngOnInit() {
        this.weatherData$ = this.store.select(_store_reducers_weather_selectors__WEBPACK_IMPORTED_MODULE_3__["getWeatherStateData"]);
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_5__["LoadWeather"]());
        this.degreeType = 'celsius';
    }
    onSearch(city) {
        this.weatherData$ = this.store.select(_store_reducers_weather_selectors__WEBPACK_IMPORTED_MODULE_3__["getWeatherSearchData"]);
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_5__["LoadWeatherSearch"](city));
    }
    toggleFavorite() {
        this.weatherData$
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this))
            .subscribe(data => {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_5__["ToggleFavorite"](data.main));
        });
        this.isFavorite = !this.isFavorite;
    }
    buildWeatherIcon(weatherType) {
        let icon;
        switch (weatherType) {
            case 'Sunny':
                icon = 'fas fa-sun';
                break;
            case 'Clouds':
                icon = 'fas fa-cloud-rain';
                break;
            case 'Rain':
                icon = 'fas fa-cloud-rain';
                break;
            default:
                icon = 'fas fa-sun';
        }
        return icon;
    }
    ngOnDestroy() {
    }
    checkValues(value) {
        this.validInput = !!(value && value.match('[\u0000-\u007F]'));
    }
};
HomeWeatherComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
HomeWeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-weather',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-weather.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/home-weather/home-weather.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-weather.component.css */ "./src/app/weather/home-weather/home-weather.component.css")).default]
    })
], HomeWeatherComponent);



/***/ }),

/***/ "./src/app/weather/home-weather/weather-detail/weather-detail.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/weather/home-weather/weather-detail/weather-detail.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvaG9tZS13ZWF0aGVyL3dlYXRoZXItZGV0YWlsL3dlYXRoZXItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/weather/home-weather/weather-detail/weather-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/weather/home-weather/weather-detail/weather-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WeatherDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailComponent", function() { return WeatherDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherDetailComponent = class WeatherDetailComponent {
    constructor() { }
    ngOnInit() {
        this.celsius = !!"celsius";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WeatherDetailComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WeatherDetailComponent.prototype, "degreeType", void 0);
WeatherDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/home-weather/weather-detail/weather-detail.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-detail.component.css */ "./src/app/weather/home-weather/weather-detail/weather-detail.component.css")).default]
    })
], WeatherDetailComponent);



/***/ }),

/***/ "./src/app/weather/store/actions/index.ts":
/*!************************************************!*\
  !*** ./src/app/weather/store/actions/index.ts ***!
  \************************************************/
/*! exports provided: LOAD_WEATHER, LOAD_WEATHER_FAIL, LOAD_WEATHER_SUCCESS, LOAD_WEATHER_SEARCH, TOGGLE_FAVORITE, LOAD_FAVORITES, LOAD_FAVORITES_SUCCESS, LoadWeather, LoadWeatherFail, LoadWeatherSuccess, ToggleFavorite, LoadWeatherSearch, LoadFavoriteLocations, LoadFavoriteLocationsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _weather_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.actions */ "./src/app/weather/store/actions/weather.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_WEATHER", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_WEATHER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_WEATHER_FAIL", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_WEATHER_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_WEATHER_SUCCESS", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_WEATHER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_WEATHER_SEARCH", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_WEATHER_SEARCH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_FAVORITE", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_FAVORITE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_FAVORITES", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_FAVORITES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_FAVORITES_SUCCESS", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_FAVORITES_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadWeather", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LoadWeather"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadWeatherFail", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LoadWeatherFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadWeatherSuccess", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LoadWeatherSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleFavorite", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleFavorite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadWeatherSearch", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LoadWeatherSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadFavoriteLocations", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LoadFavoriteLocations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadFavoriteLocationsSuccess", function() { return _weather_actions__WEBPACK_IMPORTED_MODULE_1__["LoadFavoriteLocationsSuccess"]; });





/***/ }),

/***/ "./src/app/weather/store/actions/weather.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/weather/store/actions/weather.actions.ts ***!
  \**********************************************************/
/*! exports provided: LOAD_WEATHER, LOAD_WEATHER_FAIL, LOAD_WEATHER_SUCCESS, LOAD_WEATHER_SEARCH, TOGGLE_FAVORITE, LOAD_FAVORITES, LOAD_FAVORITES_SUCCESS, LoadWeather, LoadWeatherFail, LoadWeatherSuccess, ToggleFavorite, LoadWeatherSearch, LoadFavoriteLocations, LoadFavoriteLocationsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WEATHER", function() { return LOAD_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WEATHER_FAIL", function() { return LOAD_WEATHER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WEATHER_SUCCESS", function() { return LOAD_WEATHER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WEATHER_SEARCH", function() { return LOAD_WEATHER_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_FAVORITE", function() { return TOGGLE_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FAVORITES", function() { return LOAD_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FAVORITES_SUCCESS", function() { return LOAD_FAVORITES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadWeather", function() { return LoadWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadWeatherFail", function() { return LoadWeatherFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadWeatherSuccess", function() { return LoadWeatherSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFavorite", function() { return ToggleFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadWeatherSearch", function() { return LoadWeatherSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFavoriteLocations", function() { return LoadFavoriteLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFavoriteLocationsSuccess", function() { return LoadFavoriteLocationsSuccess; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const LOAD_WEATHER = '[Location] Load ';
const LOAD_WEATHER_FAIL = '[Location] Load  Fail';
const LOAD_WEATHER_SUCCESS = '[Location] Load  Success';
const LOAD_WEATHER_SEARCH = '[Location] Load  Weather by Search';
const TOGGLE_FAVORITE = '[Favorites] Add/Remove Location from Favorites';
const LOAD_FAVORITES = '[Favorites] Load';
const LOAD_FAVORITES_SUCCESS = '[Favorites] Load  Success';
class LoadWeather {
    constructor() {
        this.type = LOAD_WEATHER;
    }
}
class LoadWeatherFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_WEATHER_FAIL;
    }
}
class LoadWeatherSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_WEATHER_SUCCESS;
    }
}
class ToggleFavorite {
    //todo interface
    constructor(payload) {
        this.payload = payload;
        this.type = TOGGLE_FAVORITE;
    }
}
class LoadWeatherSearch {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_WEATHER_SEARCH;
    }
}
class LoadFavoriteLocations {
    constructor() {
        this.type = LOAD_FAVORITES;
    }
}
class LoadFavoriteLocationsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_FAVORITES_SUCCESS;
    }
}


/***/ }),

/***/ "./src/app/weather/store/effects/index.ts":
/*!************************************************!*\
  !*** ./src/app/weather/store/effects/index.ts ***!
  \************************************************/
/*! exports provided: effects, WeatherEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _weather_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.effects */ "./src/app/weather/store/effects/weather.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherEffects", function() { return _weather_effects__WEBPACK_IMPORTED_MODULE_1__["WeatherEffects"]; });



const effects = [_weather_effects__WEBPACK_IMPORTED_MODULE_1__["WeatherEffects"]];



/***/ }),

/***/ "./src/app/weather/store/effects/weather.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/weather/store/effects/weather.effects.ts ***!
  \**********************************************************/
/*! exports provided: WeatherEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherEffects", function() { return WeatherEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/weather.actions */ "./src/app/weather/store/actions/weather.actions.ts");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../weather.service */ "./src/app/weather/weather.service.ts");







let WeatherEffects = class WeatherEffects {
    constructor(actions$, weatherService) {
        this.actions$ = actions$;
        this.weatherService = weatherService;
        this.loadData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_WEATHER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => {
            return this.weatherService.getWeatherData(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(weatherData => ({ type: _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_WEATHER_SUCCESS"], payload: weatherData })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_WEATHER_FAIL"] })));
        }));
        this.loadSearchData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_WEATHER_SEARCH"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => {
            return this.weatherService.getWeatherData(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(weatherData => ({ type: _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_WEATHER_SUCCESS"], payload: weatherData })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_WEATHER_FAIL"] })));
        }));
        this.toggleFavorites$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["TOGGLE_FAVORITE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => {
            return this.weatherService.toggleFavorite(action.payload);
        }));
        this.loadFavorites$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_FAVORITES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => {
            const data = this.weatherService.getFavoritesLocations();
            return { type: _actions_weather_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_FAVORITES_SUCCESS"], payload: data };
        }));
    }
};
WeatherEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_6__["WeatherService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "loadData$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "loadSearchData$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], WeatherEffects.prototype, "toggleFavorites$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "loadFavorites$", void 0);
WeatherEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WeatherEffects);



/***/ }),

/***/ "./src/app/weather/store/reducers/weather.reducers.ts":
/*!************************************************************!*\
  !*** ./src/app/weather/store/reducers/weather.reducers.ts ***!
  \************************************************************/
/*! exports provided: initialState, weatherReducer, getWeatherLoading, getWeatherData, getWeatherSearchData, getFavoritesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherReducer", function() { return weatherReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherLoading", function() { return getWeatherLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherData", function() { return getWeatherData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherSearchData", function() { return getWeatherSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritesData", function() { return getFavoritesData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_weather_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/weather.actions */ "./src/app/weather/store/actions/weather.actions.ts");


const initialState = {
    locations: {},
    favorites: [],
    loading: false
};
function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_WEATHER"]: {
            return Object.assign({}, state, { loading: true });
        }
        case _actions_weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_WEATHER_FAIL"]: {
            return Object.assign({}, state, { loading: false });
        }
        case _actions_weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_WEATHER_SUCCESS"]: {
            const successAction = action;
            const weatherData = successAction.payload;
            return Object.assign({}, state, { loading: false, locations: weatherData });
        }
        case _actions_weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_WEATHER_SEARCH"]: {
            const searchAction = action;
            const weatherData = searchAction.payload;
            return Object.assign({}, state, { loading: false, locations: weatherData });
        }
        case _actions_weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_FAVORITES"]: {
            return Object.assign({}, state, { loading: false });
        }
        case _actions_weather_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_FAVORITES_SUCCESS"]: {
            return Object.assign({}, state, { loading: false, favorites: action.payload });
        }
        case _actions_weather_actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_FAVORITE"]: {
            return Object.assign({}, state, { loading: false });
        }
        default:
            return Object.assign({}, state);
    }
}
const getWeatherLoading = (state) => {
    return state.loading;
};
const getWeatherData = (state) => {
    return state.locations;
};
const getWeatherSearchData = (state) => {
    return state.locations;
};
const getFavoritesData = (state) => {
    return state.favorites;
};


/***/ }),

/***/ "./src/app/weather/store/reducers/weather.selectors.ts":
/*!*************************************************************!*\
  !*** ./src/app/weather/store/reducers/weather.selectors.ts ***!
  \*************************************************************/
/*! exports provided: reducers, selectWeatherState, getWeatherStateData, getWeatherSearchData, getWeatherStateLoading, getFavoritesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWeatherState", function() { return selectWeatherState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherStateData", function() { return getWeatherStateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherSearchData", function() { return getWeatherSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherStateLoading", function() { return getWeatherStateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritesData", function() { return getFavoritesData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _weather_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.reducers */ "./src/app/weather/store/reducers/weather.reducers.ts");



const reducers = {
    weather: _weather_reducers__WEBPACK_IMPORTED_MODULE_2__["weatherReducer"]
};
const selectWeatherState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('weather');
const getWeatherStateData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectWeatherState, _weather_reducers__WEBPACK_IMPORTED_MODULE_2__["getWeatherData"]);
const getWeatherSearchData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectWeatherState, _weather_reducers__WEBPACK_IMPORTED_MODULE_2__["getWeatherSearchData"]);
const getWeatherStateLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectWeatherState, _weather_reducers__WEBPACK_IMPORTED_MODULE_2__["getWeatherLoading"]);
const getFavoritesData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectWeatherState, _weather_reducers__WEBPACK_IMPORTED_MODULE_2__["getFavoritesData"]);


/***/ }),

/***/ "./src/app/weather/weather.module.ts":
/*!*******************************************!*\
  !*** ./src/app/weather/weather.module.ts ***!
  \*******************************************/
/*! exports provided: WeatherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherModule", function() { return WeatherModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_weather_home_weather_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-weather/home-weather.component */ "./src/app/weather/home-weather/home-weather.component.ts");
/* harmony import */ var _favorite_weather_favorite_weather_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorite-weather/favorite-weather.component */ "./src/app/weather/favorite-weather/favorite-weather.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _home_weather_weather_detail_weather_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-weather/weather-detail/weather-detail.component */ "./src/app/weather/home-weather/weather-detail/weather-detail.component.ts");








let WeatherModule = class WeatherModule {
};
WeatherModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_weather_home_weather_component__WEBPACK_IMPORTED_MODULE_2__["HomeWeatherComponent"],
            _favorite_weather_favorite_weather_component__WEBPACK_IMPORTED_MODULE_3__["FavoriteWeatherComponent"],
            _home_weather_weather_detail_weather_detail_component__WEBPACK_IMPORTED_MODULE_7__["WeatherDetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: []
    })
], WeatherModule);



/***/ }),

/***/ "./src/app/weather/weather.service.ts":
/*!********************************************!*\
  !*** ./src/app/weather/weather.service.ts ***!
  \********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
    }
    getWeatherData(city) {
        //TODO local city
        city = city || 'Tel Aviv';
        const api_key = '4de493cca8b2a993d11df65848dac270';
        const units = 'metric';
        return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${api_key}&units=${units}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((detail) => {
            let weatherData = {};
            weatherData['main'] = {};
            weatherData['main'].cityId = detail['city'].id;
            weatherData['main'].city = detail['city'].name;
            const timeText = '12:00:00';
            let filteredItems = detail['list'].filter(item => {
                return item.dt_txt.includes(timeText);
            });
            weatherData['days'] = [];
            filteredItems.forEach(item => {
                weatherData['days'].push({
                    date: item.dt_txt,
                    degree: item.main.temp,
                    weatherType: item.weather[0].main
                });
            });
            weatherData['main'].degree = weatherData['days'][0].degree;
            weatherData['main'].weatherType = weatherData['days'][0].weatherType;
            return Object.assign({}, weatherData);
        }));
    }
    getFavoritesLocations() {
        const favoritesLocations = JSON.parse(localStorage.getItem('favorites') || '[]');
        //TODO
        return favoritesLocations;
    }
    toggleFavorite(cityData) {
        let storedData = JSON.parse(localStorage.getItem(`favorites`) || '[]');
        const isFavoriteExist = storedData.some(city => city['cityId'] === cityData.cityId);
        if (isFavoriteExist) {
            storedData = storedData.filter(value => value['cityId'] !== cityData.cityId);
        }
        else {
            storedData.push(cityData);
        }
        localStorage.setItem('favorites', JSON.stringify(storedData));
        return true;
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shevi\projects\weather-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map