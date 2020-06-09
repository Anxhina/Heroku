function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Client';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "flash-messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var _services_editmenu_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/editmenu.service */
    "./src/app/services/editmenu.service.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/edit-menu/edit-menu.component */
    "./src/app/components/edit-menu/edit-menu.component.ts");
    /* harmony import */


    var _components_loginadmin_loginadmin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/loginadmin/loginadmin.component */
    "./src/app/components/loginadmin/loginadmin.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _components_adminp_adminp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/adminp/adminp.component */
    "./src/app/components/adminp/adminp.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _components_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/reservation/reservation.component */
    "./src/app/components/reservation/reservation.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_test_test_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/test/test.component */
    "./src/app/components/test/test.component.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _components_testh_testh_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/testh/testh.component */
    "./src/app/components/testh/testh.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js"); /// import {
    //   MatTableModule,
    //   MatProgressSpinnerModule,
    //   MatFormFieldModule,
    //   MatInputModule,
    //   MatButtonModule,
    //   MatDatepickerModule,
    //   MatNativeDateModule,
    //   MatToolbarModule,
    // } from '@angular/material';


    var appRoutes = [// {path:'', component: HomeComponent},
    {
      path: 'menu',
      component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"]
    }, {
      path: 'admin',
      component: _components_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_17__["EditMenuComponent"]
    }, {
      path: 'login',
      component: _components_loginadmin_loginadmin_component__WEBPACK_IMPORTED_MODULE_18__["LoginadminComponent"]
    }, {
      path: 'adminp',
      component: _components_adminp_adminp_component__WEBPACK_IMPORTED_MODULE_20__["AdminpComponent"]
    }, {
      path: 'reservation',
      component: _components_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_22__["ReservationComponent"]
    }, {
      path: 'test',
      component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_33__["TestComponent"]
    }, {
      path: 'testh',
      component: _components_testh_testh_component__WEBPACK_IMPORTED_MODULE_35__["TesthComponent"]
    }, {
      path: '',
      component: _components_testh_testh_component__WEBPACK_IMPORTED_MODULE_35__["TesthComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_editmenu_service__WEBPACK_IMPORTED_MODULE_15__["EditMenuService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_21__["MDBBootstrapModule"].forRoot(), _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_32__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__["MatGridListModule"] //NgbModule.forRoot()
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"], _components_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_17__["EditMenuComponent"], _components_loginadmin_loginadmin_component__WEBPACK_IMPORTED_MODULE_18__["LoginadminComponent"], _components_adminp_adminp_component__WEBPACK_IMPORTED_MODULE_20__["AdminpComponent"], _components_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_22__["ReservationComponent"], _components_test_test_component__WEBPACK_IMPORTED_MODULE_33__["TestComponent"], _components_testh_testh_component__WEBPACK_IMPORTED_MODULE_35__["TesthComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_21__["MDBRootModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_32__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__["MatGridListModule"] //NgbModule.forRoot()
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"], _components_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_17__["EditMenuComponent"], _components_loginadmin_loginadmin_component__WEBPACK_IMPORTED_MODULE_18__["LoginadminComponent"], _components_adminp_adminp_component__WEBPACK_IMPORTED_MODULE_20__["AdminpComponent"], _components_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_22__["ReservationComponent"], _components_test_test_component__WEBPACK_IMPORTED_MODULE_33__["TestComponent"], _components_testh_testh_component__WEBPACK_IMPORTED_MODULE_35__["TesthComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_21__["MDBBootstrapModule"].forRoot(), _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_32__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__["MatGridListModule"] //NgbModule.forRoot()
          ],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
          providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_editmenu_service__WEBPACK_IMPORTED_MODULE_15__["EditMenuService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/adminp/adminp.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/adminp/adminp.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdminpComponent */

  /***/
  function srcAppComponentsAdminpAdminpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminpComponent", function () {
      return AdminpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminpComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r165.user.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r165.user.password, "");
      }
    }

    var AdminpComponent = /*#__PURE__*/function () {
      function AdminpComponent(authService, router) {
        _classCallCheck(this, AdminpComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AdminpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.getAdmin().subscribe(function (profile) {
            _this.user = profile.user;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(admin) {
          this.authService.selectedAdmin = admin;
        }
      }]);

      return AdminpComponent;
    }();

    AdminpComponent.ɵfac = function AdminpComponent_Factory(t) {
      return new (t || AdminpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AdminpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminpComponent,
      selectors: [["app-adminp"]],
      decls: 6,
      vars: 1,
      consts: [["href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet"], ["class", "title", "style", "position: relative; bottom: -200px;", 4, "ngIf"], [1, "title", 2, "position", "relative", "bottom", "-200px"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], ["type", "password"], ["aria-hidden", "true", 1, "fa", "fa-key"]],
      template: function AdminpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Profile Page ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminpComponent_div_5_Template, 9, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5wL2FkbWlucC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adminp',
          templateUrl: './adminp.component.html',
          styleUrls: ['./adminp.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/edit-menu/edit-menu.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/edit-menu/edit-menu.component.ts ***!
    \*************************************************************/

  /*! exports provided: EditMenuComponent */

  /***/
  function srcAppComponentsEditMenuEditMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditMenuComponent", function () {
      return EditMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_editmenu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/editmenu.service */
    "./src/app/services/editmenu.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_reservation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/reservation.service */
    "./src/app/services/reservation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function EditMenuComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Provo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditMenuComponent_div_28_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_28_tr_37_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var dite_r69 = ctx.$implicit;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r70.onEdit(dite_r69);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_28_tr_37_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var dite_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.onDelete(dite_r69._id, _r64);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dite_r69 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dite_r69.food);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dite_r69.description);
      }
    }

    function EditMenuComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditMenuComponent_div_28_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.onSubmit(_r64);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_28_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.editmenuService.selectedDitore._id = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 50, 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_28_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.editmenuService.selectedDitore.food = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 53, 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_28_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.editmenuService.selectedDitore.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Position :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_28_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.resetForm(_r64);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ditore food");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EditMenuComponent_div_28_tr_37_Template, 15, 2, "tr", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.editmenuService.selectedDitore._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.editmenuService.selectedDitore.food);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.editmenuService.selectedDitore.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r64.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.ditores);
      }
    }

    function EditMenuComponent_div_29_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_29_tr_37_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var pasta_r84 = ctx.$implicit;

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r85.onEditP(pasta_r84);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_29_tr_37_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var pasta_r84 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.onDeleteP(pasta_r84._id, _r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pasta_r84 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pasta_r84.pasta);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pasta_r84.descriptionp);
      }
    }

    function EditMenuComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditMenuComponent_div_29_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.onSubmitP(_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_29_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.editmenuService.selectedPasta._id = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 62, 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_29_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.editmenuService.selectedPasta.pasta = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pasta : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 63, 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_29_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r92.editmenuService.selectedPasta.descriptionp = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Position :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_29_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r93.resetForm(_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Pasta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EditMenuComponent_div_29_tr_37_Template, 15, 2, "tr", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.editmenuService.selectedPasta._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.editmenuService.selectedPasta.pasta);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.editmenuService.selectedPasta.descriptionp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r79.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.pastas);
      }
    }

    function EditMenuComponent_div_30_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_30_tr_37_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var fish_r99 = ctx.$implicit;

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r100.onEditF(fish_r99);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_30_tr_37_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var fish_r99 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r102.onDeleteF(fish_r99._id, _r94);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fish_r99 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fish_r99.fish);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fish_r99.descriptionf);
      }
    }

    function EditMenuComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditMenuComponent_div_30_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.onSubmitF(_r94);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_30_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r105.editmenuService.selectedFish._id = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 65, 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_30_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.editmenuService.selectedFish.fish = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 67, 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_30_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r107.editmenuService.selectedFish.descriptionf = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Position :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_30_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r108.resetForm(_r94);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Fish");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EditMenuComponent_div_30_tr_37_Template, 15, 2, "tr", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.editmenuService.selectedFish._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.editmenuService.selectedFish.fish);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.editmenuService.selectedFish.descriptionf);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r94.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.fishs);
      }
    }

    function EditMenuComponent_div_31_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_31_tr_37_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

          var meat_r114 = ctx.$implicit;

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r115.onEditM(meat_r114);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_31_tr_37_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

          var meat_r114 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r117.onDeleteM(meat_r114._id, _r109);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var meat_r114 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meat_r114.meat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meat_r114.descriptionm);
      }
    }

    function EditMenuComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditMenuComponent_div_31_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r118.onSubmitM(_r109);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_31_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r120.editmenuService.selectedMeat._id = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 71, 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_31_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r121.editmenuService.selectedMeat.meat = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 73, 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_31_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r122.editmenuService.selectedMeat.descriptionm = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Position :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_31_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r123.resetForm(_r109);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Meat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EditMenuComponent_div_31_tr_37_Template, 15, 2, "tr", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.editmenuService.selectedMeat._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.editmenuService.selectedMeat.meat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.editmenuService.selectedMeat.descriptionm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r109.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.meats);
      }
    }

    function EditMenuComponent_div_32_tr_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_32_tr_38_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

          var drink_r129 = ctx.$implicit;

          var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r130.onEditDr(drink_r129);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_32_tr_38_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

          var drink_r129 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r132.onDeleteDr(drink_r129._id, _r124);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var drink_r129 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](drink_r129.drink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](drink_r129.descriptiondr);
      }
    }

    function EditMenuComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditMenuComponent_div_32_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r133.onSubmitDr(_r124);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_32_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r135.editmenuService.selectedDrink._id = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 76, 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_32_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

          var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r136.editmenuService.selectedDrink.drink = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Drink : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 78, 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_32_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r137.editmenuService.selectedDrink.descriptiondr = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Position :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_32_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r138.resetForm(_r124);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Drink");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EditMenuComponent_div_32_tr_38_Template, 15, 2, "tr", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.editmenuService.selectedDrink._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.editmenuService.selectedDrink.drink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.editmenuService.selectedDrink.descriptiondr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r124.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r43.drinks);
      }
    }

    function EditMenuComponent_div_33_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_33_tr_37_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

          var dessert_r144 = ctx.$implicit;

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r145.onEditD(dessert_r144);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_33_tr_37_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

          var dessert_r144 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r147.onDeleteD(dessert_r144._id, _r139);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dessert_r144 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dessert_r144.dessert);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dessert_r144.descriptiond);
      }
    }

    function EditMenuComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 29, 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditMenuComponent_div_33_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149);

          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r148.onSubmitD(_r139);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_33_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r150.editmenuService.selectedDessert._id = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 81, 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_33_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149);

          var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r151.editmenuService.selectedDessert.dessert = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dessert : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 83, 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_div_33_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149);

          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r152.editmenuService.selectedDessert.descriptiond = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Position :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_div_33_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149);

          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r153.resetForm(_r139);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Dessert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EditMenuComponent_div_33_tr_37_Template, 15, 2, "tr", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.editmenuService.selectedDessert._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.editmenuService.selectedDessert.dessert);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.editmenuService.selectedDessert.descriptiond);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r139.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.desserts);
      }
    }

    function EditMenuComponent_th_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Appointment Date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditMenuComponent_td_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reservation_r154 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, reservation_r154.date, "dd/MM/yyyy"), " ");
      }
    }

    function EditMenuComponent_th_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditMenuComponent_td_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reservation_r155 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reservation_r155.name, " ");
      }
    }

    function EditMenuComponent_th_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Time ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditMenuComponent_td_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reservation_r156 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reservation_r156.time, " ");
      }
    }

    function EditMenuComponent_th_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Persons ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditMenuComponent_td_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reservation_r157 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reservation_r157.persons, " ");
      }
    }

    function EditMenuComponent_th_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditMenuComponent_td_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reservation_r158 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reservation_r158.number, " ");
      }
    }

    function EditMenuComponent_th_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Specification ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditMenuComponent_td_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reservation_r159 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reservation_r159.specification, " ");
      }
    }

    function EditMenuComponent_th_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditMenuComponent_td_60_Template(rf, ctx) {
      if (rf & 1) {
        var _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_td_60_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r162);

          var reservation_r160 = ctx.$implicit;

          var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

          return ctx_r161.onDeleteR(reservation_r160._id, _r61);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditMenuComponent_tr_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 92);
      }
    }

    function EditMenuComponent_tr_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 93);
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    var _c1 = function _c1() {
      return ["/adminp"];
    };

    var _c2 = function _c2() {
      return [5, 10, 25, 100];
    };

    var EditMenuComponent = /*#__PURE__*/function () {
      function EditMenuComponent(editmenuService, authService, reservationService, router, flashMessage) {
        _classCallCheck(this, EditMenuComponent);

        this.editmenuService = editmenuService;
        this.authService = authService;
        this.reservationService = reservationService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.ditores = [];
        this.pastas = [];
        this.meats = [];
        this.fishs = [];
        this.desserts = [];
        this.drinks = [];
        this.columns = ['date', 'name', 'time', 'number', 'persons', 'specification', 'cancel'];
        this.loadingReservation = false;
      }

      _createClass(EditMenuComponent, [{
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.reservations.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetForm();
          this.refreshDitoreList();
          this.resetFormP();
          this.refreshPastaList();
          this.resetFormF();
          this.refreshFishList();
          this.resetFormM();
          this.refreshMeatList();
          this.resetFormDr();
          this.refreshDrinkList();
          this.resetFormD();
          this.refreshDessertList();
          this.resetFormR();
          this.refreshReservationList(); //     this.updateSubscription = interval(600000).subscribe(
          //       (val) => { this.refreshReservationList()
          //     }
          // );
        } // Reservation functions

      }, {
        key: "resetFormR",
        value: function resetFormR(form) {
          if (form) form.reset();
          this.reservationService.selectedReservation = {
            _id: "",
            name: "",
            date: "",
            time: "",
            specification: "",
            number: "",
            persons: ""
          };
        }
      }, {
        key: "onSubmitR",
        value: function onSubmitR(form) {
          var _this2 = this;

          this.reservationService.postReservation(form.value).subscribe(function (res) {
            var date = new Date(res.date).toDateString();

            _this2.resetFormR(form);

            if (res.success) {
              _this2.refreshReservationList();
            }
          });
        }
      }, {
        key: "refreshReservationList",
        value: function refreshReservationList() {
          var _this3 = this;

          this.reservationService.getReservation().subscribe(function (allmenu) {
            _this3.reservations = allmenu;
            _this3.reservations = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](allmenu);
            _this3.reservations.sort = _this3.sort;
            _this3.reservations.paginator = _this3.paginator;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "onEditR",
        value: function onEditR(reservation) {
          this.reservationService.selectedReservation = reservation;
        }
      }, {
        key: "onDeleteR",
        value: function onDeleteR(_id, form) {
          var _this4 = this;

          if (confirm('Are you sure to delete this record ?') == true) {
            this.reservationService.deleteReservation(_id).subscribe(function (res) {
              _this4.resetFormR(form);

              _this4.refreshReservationList();

              M.toast({
                html: 'Deleted successfully',
                classes: 'rounded'
              });
            });
          }
        }
      }, {
        key: "reloadReservation",
        value: function reloadReservation() {
          var _this5 = this;

          this.loadingReservation = true;
          this.refreshReservationList();
          setTimeout(function () {
            _this5.loadingReservation = false;
          }, 4000);
        } // Ditore functions

      }, {
        key: "resetForm",
        value: function resetForm(form) {
          if (form) form.reset();
          this.editmenuService.selectedDitore = {
            _id: "",
            food: "",
            description: ""
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this6 = this;

          if (form.value._id == "") {
            this.editmenuService.postDitore(form.value).subscribe(function (res) {
              _this6.resetForm(form);

              _this6.refreshDitoreList();
            });
          } else {
            this.editmenuService.putDitore(form.value).subscribe(function (res) {
              _this6.resetForm(form);

              _this6.refreshDitoreList();

              M.toast({
                html: 'Updated successfully',
                classes: 'rounded'
              });
            });
          }
        }
      }, {
        key: "refreshDitoreList",
        value: function refreshDitoreList() {
          var _this7 = this;

          this.editmenuService.getDitore().subscribe(function (allmenu) {
            _this7.ditores = allmenu;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(dite) {
          this.editmenuService.selectedDitore = dite;
        }
      }, {
        key: "onDelete",
        value: function onDelete(_id, form) {
          var _this8 = this;

          if (confirm('Are you sure to delete this record ?') == true) {
            this.editmenuService.deleteDitore(_id).subscribe(function (res) {
              _this8.resetForm(form);

              _this8.refreshDitoreList();

              M.toast({
                html: 'Deleted successfully',
                classes: 'rounded'
              });
            });
          }
        } // end ditore functions
        // Pasta functions

      }, {
        key: "resetFormP",
        value: function resetFormP(form) {
          if (form) form.reset();
          this.editmenuService.selectedPasta = {
            _id: "",
            pasta: "",
            descriptionp: ""
          };
        }
      }, {
        key: "onSubmitP",
        value: function onSubmitP(form) {
          var _this9 = this;

          if (form.value._id == "") {
            this.editmenuService.postPasta(form.value).subscribe(function (res) {
              _this9.resetFormP(form);

              _this9.refreshPastaList();
            });
          } else {
            this.editmenuService.putPasta(form.value).subscribe(function (res) {
              _this9.resetFormP(form);

              _this9.refreshPastaList();

              M.toast({
                html: 'Updated successfully',
                classes: 'rounded'
              });
            });
          }
        }
      }, {
        key: "refreshPastaList",
        value: function refreshPastaList() {
          var _this10 = this;

          this.editmenuService.getPasta().subscribe(function (allmenu) {
            _this10.pastas = allmenu;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "onEditP",
        value: function onEditP(pasta) {
          this.editmenuService.selectedPasta = pasta;
        }
      }, {
        key: "onDeleteP",
        value: function onDeleteP(_id, form) {
          var _this11 = this;

          if (confirm('Are you sure to delete this record ?') == true) {
            this.editmenuService.deletePasta(_id).subscribe(function (res) {
              _this11.resetFormP(form);

              _this11.refreshPastaList();

              M.toast({
                html: 'Deleted successfully',
                classes: 'rounded'
              });
            });
          }
        } // end Of pasta functions
        // Fish functions

      }, {
        key: "resetFormF",
        value: function resetFormF(form) {
          if (form) form.reset();
          this.editmenuService.selectedFish = {
            _id: "",
            fish: "",
            descriptionf: ""
          };
        }
      }, {
        key: "onSubmitF",
        value: function onSubmitF(form) {
          var _this12 = this;

          if (form.value._id == "") {
            this.editmenuService.postFish(form.value).subscribe(function (res) {
              _this12.resetFormF(form);

              _this12.refreshFishList();
            });
          } else {
            this.editmenuService.putFish(form.value).subscribe(function (res) {
              _this12.resetFormF(form);

              _this12.refreshFishList();

              M.toast({
                html: 'Updated successfully',
                classes: 'rounded'
              });
            });
          }
        }
      }, {
        key: "refreshFishList",
        value: function refreshFishList() {
          var _this13 = this;

          this.editmenuService.getFish().subscribe(function (allmenu) {
            _this13.fishs = allmenu;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "onEditF",
        value: function onEditF(fish) {
          this.editmenuService.selectedFish = fish;
        }
      }, {
        key: "onDeleteF",
        value: function onDeleteF(_id, form) {
          var _this14 = this;

          if (confirm('Are you sure to delete this record ?') == true) {
            this.editmenuService.deleteFish(_id).subscribe(function (res) {
              _this14.resetFormF(form);

              _this14.refreshFishList();

              M.toast({
                html: 'Deleted successfully',
                classes: 'rounded'
              });
            });
          }
        } // end Of fish functions
        // Meat functions

      }, {
        key: "resetFormM",
        value: function resetFormM(form) {
          if (form) form.reset();
          this.editmenuService.selectedMeat = {
            _id: "",
            meat: "",
            descriptionm: ""
          };
        }
      }, {
        key: "onSubmitM",
        value: function onSubmitM(form) {
          var _this15 = this;

          if (form.value._id == "") {
            this.editmenuService.postMeat(form.value).subscribe(function (res) {
              _this15.resetFormM(form);

              _this15.refreshMeatList();
            });
          } else {
            this.editmenuService.putMeat(form.value).subscribe(function (res) {
              _this15.resetFormM(form);

              _this15.refreshMeatList();

              M.toast({
                html: 'Updated successfully',
                classes: 'rounded'
              });
            });
          }
        }
      }, {
        key: "refreshMeatList",
        value: function refreshMeatList() {
          var _this16 = this;

          this.editmenuService.getMeat().subscribe(function (allmenu) {
            _this16.meats = allmenu;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "onEditM",
        value: function onEditM(meat) {
          this.editmenuService.selectedMeat = meat;
        }
      }, {
        key: "onDeleteM",
        value: function onDeleteM(_id, form) {
          var _this17 = this;

          if (confirm('Are you sure to delete this record ?') == true) {
            this.editmenuService.deleteMeat(_id).subscribe(function (res) {
              _this17.resetFormM(form);

              _this17.refreshMeatList();

              M.toast({
                html: 'Deleted successfully',
                classes: 'rounded'
              });
            });
          }
        } // end Of meat functions
        // Dessert functions

      }, {
        key: "resetFormD",
        value: function resetFormD(form) {
          if (form) form.reset();
          this.editmenuService.selectedDessert = {
            _id: "",
            dessert: "",
            descriptiond: ""
          };
        }
      }, {
        key: "onSubmitD",
        value: function onSubmitD(form) {
          var _this18 = this;

          if (form.value._id == "") {
            this.editmenuService.postDessert(form.value).subscribe(function (res) {
              _this18.resetFormD(form);

              _this18.refreshDessertList();
            });
          } else {
            this.editmenuService.putDessert(form.value).subscribe(function (res) {
              _this18.resetFormD(form);

              _this18.refreshDessertList();

              M.toast({
                html: 'Updated successfully',
                classes: 'rounded'
              });
            });
          }
        }
      }, {
        key: "refreshDessertList",
        value: function refreshDessertList() {
          var _this19 = this;

          this.editmenuService.getDessert().subscribe(function (allmenu) {
            _this19.desserts = allmenu;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "onEditD",
        value: function onEditD(dessert) {
          this.editmenuService.selectedDessert = dessert;
        }
      }, {
        key: "onDeleteD",
        value: function onDeleteD(_id, form) {
          var _this20 = this;

          if (confirm('Are you sure to delete this record ?') == true) {
            this.editmenuService.deleteDessert(_id).subscribe(function (res) {
              _this20.resetFormD(form);

              _this20.refreshDessertList();

              M.toast({
                html: 'Deleted successfully',
                classes: 'rounded'
              });
            });
          }
        } // end Of meat functions
        // Drink functions

      }, {
        key: "resetFormDr",
        value: function resetFormDr(form) {
          if (form) form.reset();
          this.editmenuService.selectedDrink = {
            _id: "",
            drink: "",
            descriptiondr: ""
          };
        }
      }, {
        key: "onSubmitDr",
        value: function onSubmitDr(form) {
          var _this21 = this;

          if (form.value._id == "") {
            this.editmenuService.postDrink(form.value).subscribe(function (res) {
              _this21.resetFormDr(form);

              _this21.refreshDrinkList();
            });
          } else {
            this.editmenuService.putDrink(form.value).subscribe(function (res) {
              _this21.resetFormDr(form);

              _this21.refreshDrinkList();

              M.toast({
                html: 'Updated successfully',
                classes: 'rounded'
              });
            });
          }
        }
      }, {
        key: "refreshDrinkList",
        value: function refreshDrinkList() {
          var _this22 = this;

          this.editmenuService.getDrink().subscribe(function (allmenu) {
            _this22.drinks = allmenu;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "onEditDr",
        value: function onEditDr(drink) {
          this.editmenuService.selectedDrink = drink;
        }
      }, {
        key: "onDeleteDr",
        value: function onDeleteDr(_id, form) {
          var _this23 = this;

          if (confirm('Are you sure to delete this record ?') == true) {
            this.editmenuService.deleteDrink(_id).subscribe(function (res) {
              _this23.resetFormDr(form);

              _this23.refreshDrinkList();
            });
          }
        } // end Of meat functions

      }, {
        key: "onLogoutClick",
        value: function onLogoutClick() {
          this.authService.logout();
          this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
          });
          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return EditMenuComponent;
    }();

    EditMenuComponent.ɵfac = function EditMenuComponent_Factory(t) {
      return new (t || EditMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_editmenu_service__WEBPACK_IMPORTED_MODULE_1__["EditMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reservation_service__WEBPACK_IMPORTED_MODULE_6__["ReservationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesService"]));
    };

    EditMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditMenuComponent,
      selectors: [["app-edit-menu"]],
      viewQuery: function EditMenuComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_editmenu_service__WEBPACK_IMPORTED_MODULE_1__["EditMenuService"]])],
      decls: 102,
      vars: 27,
      consts: [[1, "buttons", 2, "bottom", "-200px", "position", "relative"], [1, "row"], ["type", "hidden"], ["selection", ""], [1, "col-sm-2"], [3, "click"], [3, "routerLink"], [1, "terminal", 2, "bottom", "-200px", "position", "relative", 3, "ngSwitch"], ["class", "text-center", 4, "ngSwitchDefault"], ["class", "text-center", 4, "ngSwitchCase"], [1, "container"], [2, "color", "purple", "background", "#D3D3D3", "font-size", "140%"], ["matInput", "", "placeholder", "Ex. ium", 2, "color", "purple", "background", "#D3D3D3", "font-size", "250%", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "time"], ["matColumnDef", "persons"], ["matColumnDef", "number"], ["matColumnDef", "specification"], ["id", "spec", "matColumnDef", "cancel"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "id", "spec", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["id", "adminreservation", 1, "container", 2, "background", "gray"], [3, "ngSubmit"], ["reservationForm", "ngForm"], ["type", "hidden", "name", "_id", 3, "ngModel", "ngModelChange"], ["_id", "ngModel"], ["name", "date", "matInput", "", "placeholder", "Choose a date", "required", "", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["name", "time", "matInput", "", "placeholder", "Time", "type", "time", 3, "ngModel", "ngModelChange"], ["name", "name", "matInput", "", "placeholder", "Name", "required", "", 3, "ngModel", "ngModelChange"], ["name", "persons", "matInput", "", "placeholder", "NUmber of persons", "type", "number", 3, "ngModel", "ngModelChange"], ["name", "number", "matInput", "", "placeholder", "Phone number", "type", "text", 3, "ngModel", "ngModelChange"], ["name", "specification", "matInput", "", "placeholder", "Any Specification", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "green", "type", "submit", "type", "submit", 1, "btn", "btn-custom", "right", 3, "disabled"], [1, "input-field", "col", "s12"], ["type", "button", 1, "btn", "btn-custom", "right", 3, "click"], [1, "text-center"], [1, "col", "s12"], [1, "card"], [1, "card-content", "white-text"], [1, "col", "s5"], ["ditoreForm", "ngForm"], ["type", "text", "name", "food", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["food", "ngModel"], [1, "red-text"], ["type", "text", "name", "description", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], ["type", "submit", 1, "btn", "btn-custom", "right", 3, "disabled"], [1, "col", "s7", 2, "color", "black", "position", "relative"], [1, "responsive-table", "highlight"], ["style", "color: black;", 4, "ngFor", "ngForOf"], [2, "color", "black"], ["type", "submit", 1, "btn", "btn-custom", "right", 3, "click"], ["pastaForm", "ngForm"], ["type", "text", "name", "pasta", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "descriptionp", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["fishForm", "ngForm"], ["type", "text", "name", "fish", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["fish", "ngModel"], ["type", "text", "name", "descriptionf", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["descriptionf", "ngModel"], [4, "ngFor", "ngForOf"], ["meatForm", "ngForm"], ["type", "text", "name", "meat", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["meat", "ngModel"], ["type", "text", "name", "descriptionm", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["descriptionm", "ngModel"], ["drinkForm", "ngForm"], ["type", "text", "name", "drink", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["drink", "ngModel"], ["type", "text", "name", "descriptiondr", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["descriptiondr", "ngModel"], ["dessertForm", "ngForm"], ["type", "text", "name", "dessert", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["dessert", "ngModel"], ["type", "text", "name", "descriptiond", "placeholder", "Enter full name", "required", "", 3, "ngModel", "ngModelChange"], ["descriptiond", "ngModel"], ["style", "color: black; position: relative; left: -50px;", 4, "ngFor", "ngForOf"], [2, "color", "black", "position", "relative", "left", "-50px"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", "id", "spec"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function EditMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_Template_p_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164);

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return _r37.value = "pasta";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ditore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_Template_p_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164);

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return _r37.value = "meat";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Meat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_Template_p_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164);

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return _r37.value = "fish";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_Template_p_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164);

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return _r37.value = "dessert";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dessert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_Template_p_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164);

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return _r37.value = "drink";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Drink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_Template_p_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164);

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return _r37.value = "ditore";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pasta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edit Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EditMenuComponent_div_27_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EditMenuComponent_div_28_Template, 38, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EditMenuComponent_div_29_Template, 38, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EditMenuComponent_div_30_Template, 38, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EditMenuComponent_div_31_Template, 38, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditMenuComponent_div_32_Template, 39, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EditMenuComponent_div_33_Template, 38, 5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EditMenuComponent_Template_input_keyup_38_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditMenuComponent_th_41_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, EditMenuComponent_td_42_Template, 3, 4, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EditMenuComponent_th_44_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EditMenuComponent_td_45_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EditMenuComponent_th_47_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EditMenuComponent_td_48_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EditMenuComponent_th_50_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, EditMenuComponent_td_51_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, EditMenuComponent_th_53_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EditMenuComponent_td_54_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, EditMenuComponent_th_56_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, EditMenuComponent_td_57_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, EditMenuComponent_th_59_Template, 2, 0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, EditMenuComponent_td_60_Template, 3, 0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, EditMenuComponent_tr_61_Template, 1, 0, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, EditMenuComponent_tr_62_Template, 1, 0, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-paginator", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "form", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditMenuComponent_Template_form_ngSubmit_71_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164);

            var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

            return ctx.onSubmitR(_r61);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_Template_input_ngModelChange_73_listener($event) {
            return ctx.reservationService.selectedReservation._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_Template_input_ngModelChange_76_listener($event) {
            return ctx.date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "mat-datepicker-toggle", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "mat-datepicker", null, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_Template_input_ngModelChange_81_listener($event) {
            return ctx.time = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_Template_input_ngModelChange_83_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_Template_input_ngModelChange_85_listener($event) {
            return ctx.persons = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_Template_input_ngModelChange_87_listener($event) {
            return ctx.number = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditMenuComponent_Template_input_ngModelChange_89_listener($event) {
            return ctx.specification = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Make Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMenuComponent_Template_button_click_94_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164);

            var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

            return ctx.resetFormR(_r61);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", _r37.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ditore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pasta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "fish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "meat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "drink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dessert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.reservations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2))("pageSize", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reservationService.selectedReservation._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("matDatepicker", _r63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.persons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.specification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r61.valid);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n    table-layout: fixed;\n    position: relative;\n  }\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .error[_ngcontent-%COMP%] {\n    background-color: #d84f4f;\n    padding: 10px;\n  }\n  .success[_ngcontent-%COMP%] {\n    background-color: #73cc73;\n    padding: 10px;\n  }\n  form[_ngcontent-%COMP%] {\n    width: 100%;\n    table-layout: fixed;\n  }\n  .mat-form-field-empty.mat-form-field-label[_ngcontent-%COMP%] {\n    color: black;\n}\n  .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: black !important;\n}\n  #adminreservation[_ngcontent-%COMP%]{\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LW1lbnUvZWRpdC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjtFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjtFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsWUFBWTtBQUNoQjtFQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0VBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtbWVudS9lZGl0LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4NGY0ZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIFxuICAuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczY2M3MztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4jYWRtaW5yZXNlcnZhdGlvbntcbiAgd2lkdGg6IDUwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-menu',
          templateUrl: './edit-menu.component.html',
          styleUrls: ['./edit-menu.component.css'],
          providers: [_services_editmenu_service__WEBPACK_IMPORTED_MODULE_1__["EditMenuService"]]
        }]
      }], function () {
        return [{
          type: _services_editmenu_service__WEBPACK_IMPORTED_MODULE_1__["EditMenuService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_reservation_service__WEBPACK_IMPORTED_MODULE_6__["ReservationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesService"]
        }];
      }, {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
            "static": true
          }]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        // images = [1, 2, 3].map((n) => `../../../assets/images/${n}.jpg`);
        this.menus = ["Pasta", "Meat", "Fish", "Dessert", "Drink"].map(function (string) {
          return "".concat(string);
        });
        this.images = ["el6"].map(function (string) {
          return "../../../assets/images/".concat(string, ".png");
        });
        this.images1 = ["el3"].map(function (string) {
          return "../../../assets/images/".concat(string, ".png");
        });
        this.images2 = ["el4"].map(function (string) {
          return "../../../assets/images/".concat(string, ".png");
        });
        this.images3 = ["el1"].map(function (string) {
          return "../../../assets/images/".concat(string, ".png");
        });
        this.p = String;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUrl",
        value: function getUrl() {
          return "url('../../../assets/images/menu.jpg')";
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 16,
      vars: 8,
      consts: [["lang", "en"], [1, "container-fluid", 2, "position", "fixed", "height", "100vh", "left", "0px", "background-position", "center", "position", "absolute", "background-size", "cover"], [1, "container-fluid"], [1, "row"], [1, "col", 2, "bottom", "-210px"], [4, "ngFor", "ngForOf"], [1, "col", 2, "bottom", "-260px"], [1, "text-center", 2, "color", "green", "position", "relative", "bottom", "-370px"], [1, "w-100", 3, "src"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "IlGrapolo Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Photo1Animation", ctx.images3.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Photo2Animation", ctx.images2.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Photo1Animation", ctx.images.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@Photo2Animation", ctx.images1.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["body{\n    background: #D3D3D3\n\n    ;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJOztJQUVBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAjRDNEM0QzXG5cbiAgICA7XG59XG5cblxuIl19 */"],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(-100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('1200ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1900ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(100%)'
        }))]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Photo1Animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('1900ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)'
        }))]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Photo2Animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('1900ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(0)'
        }))]))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-100%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('p', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('1200ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1900ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(100%)'
          }))]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Photo1Animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-100%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('1900ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)'
          }))]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Photo2Animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(100%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('1900ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0)'
          }))]))])])]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/loginadmin/loginadmin.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/loginadmin/loginadmin.component.ts ***!
    \***************************************************************/

  /*! exports provided: LoginadminComponent */

  /***/
  function srcAppComponentsLoginadminLoginadminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginadminComponent", function () {
      return LoginadminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginadminComponent = /*#__PURE__*/function () {
      function LoginadminComponent(authService, router, flashMessage) {
        _classCallCheck(this, LoginadminComponent);

        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
      }

      _createClass(LoginadminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLoginSubmit",
        value: function onLoginSubmit() {
          var _this24 = this;

          var admin = {
            username: this.username,
            password: this.password
          };
          this.authService.authenticateAdmin(admin).subscribe(function (data) {
            if (data.success) {
              _this24.authService.storeAdminData(data.token, data.admin);

              _this24.flashMessage.show('You are now logged in', {
                cssClass: 'alert-success',
                timeout: 200
              });

              _this24.router.navigate(['admin']);
            } else {
              _this24.flashMessage.show(data.msg, {
                cssClass: 'alert-danger',
                timeout: 3000
              });

              _this24.router.navigate(['login']);
            }
          });
        }
      }]);

      return LoginadminComponent;
    }();

    LoginadminComponent.ɵfac = function LoginadminComponent_Factory(t) {
      return new (t || LoginadminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]));
    };

    LoginadminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginadminComponent,
      selectors: [["app-loginadmin"]],
      decls: 12,
      vars: 2,
      consts: [[1, "page-header"], [2, "position", "relative", "bottom", "-200px", 3, "submit"], [1, "form-group"], ["type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 1, "btn", "btn-primary"]],
      template: function LoginadminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginadminComponent_Template_form_submit_2_listener() {
            return ctx.onLoginSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginadminComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginadminComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW5hZG1pbi9sb2dpbmFkbWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginadminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loginadmin',
          templateUrl: './loginadmin.component.html',
          styleUrls: ['./loginadmin.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_editmenu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/editmenu.service */
    "./src/app/services/editmenu.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenuComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dite_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dite_r20.food);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dite_r20.description);
      }
    }

    function MenuComponent_div_54_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MenuComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_54_div_1_Template, 3, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.images);
      }
    }

    function MenuComponent_div_55_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MenuComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_55_div_1_Template, 3, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.imagesP);
      }
    }

    function MenuComponent_div_56_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MenuComponent_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_56_div_1_Template, 3, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.imagesF);
      }
    }

    function MenuComponent_div_57_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MenuComponent_div_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_57_div_1_Template, 3, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.imagesDr);
      }
    }

    function MenuComponent_div_58_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MenuComponent_div_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_58_div_1_Template, 3, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.imagesD);
      }
    }

    function MenuComponent_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pasta_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pasta_r31.pasta);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pasta_r31.descriptionp);
      }
    }

    function MenuComponent_div_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var meat_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meat_r32.meat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meat_r32.descriptionm);
      }
    }

    function MenuComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fish_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fish_r33.fish);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fish_r33.descriptionf);
      }
    }

    function MenuComponent_div_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dess_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dess_r34.dessert);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dess_r34.descriptiond);
      }
    }

    function MenuComponent_div_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var drink_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](drink_r35.drink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](drink_r35.descriptiondr);
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(editmenuService, router) {
        _classCallCheck(this, MenuComponent);

        this.editmenuService = editmenuService;
        this.router = router;
        this.image = [4, 2, 1, 3].map(function (n) {
          return "../../../assets/images/".concat(n, ".jpg");
        });
        this.images = [1, 2, 1, 1, 1, 1, 1, 1].map(function (n) {
          return "../../../assets/images/".concat(n, ".jpg");
        });
        this.imagesP = [2, 2, 2, 2, 2, 2, 2, 2].map(function (n) {
          return "../../../assets/images/".concat(n, ".jpg");
        });
        this.imagesD = [2, 2, 2, 2, 2, 2, 2, 2].map(function (n) {
          return "../../../assets/images/".concat(n, ".jpg");
        });
        this.imagesDr = [2, 2, 2, 2, 2, 2, 2, 2].map(function (n) {
          return "../../../assets/images/".concat(n, ".jpg");
        });
        this.imagesF = [2, 2, 1, 1, 1, 2, 2, 2].map(function (n) {
          return "../../../assets/images/".concat(n, ".jpg");
        });
        this.p = String;
        this.pastas = [];
        this.meat = [];
        this.fish = [];
        this.dessert = [];
        this.drink = [];
        this.ditore = [];
        this.slides = [[]];
      }

      _createClass(MenuComponent, [{
        key: "chunk",
        value: function chunk(arr, chunkSize) {
          for (var i = 0, len = arr.length; i < len; i += chunkSize) {
            this.images.push(arr.slice(i, i + chunkSize));
          }

          return this.images;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          //Dispaly Meny Ditore
          this.editmenuService.getDitore().subscribe(function (allmenu) {
            _this25.ditore = allmenu;
          }, function (err) {
            console.log(err);
            return false;
          }); //Display Pasta

          this.editmenuService.getPasta().subscribe(function (allpastas) {
            _this25.pastas = allpastas;
          }, function (err) {
            console.log(err);
            return false;
          }); //Display Meat

          this.editmenuService.getMeat().subscribe(function (allmeat) {
            _this25.meat = allmeat;
          }, function (err) {
            console.log(err);
            return false;
          }); //Display Fish

          this.editmenuService.getFish().subscribe(function (allfish) {
            _this25.fish = allfish;
          }, function (err) {
            console.log(err);
            return false;
          }); //Display Dessert

          this.editmenuService.getDessert().subscribe(function (alldessert) {
            _this25.dessert = alldessert;
          }, function (err) {
            console.log(err);
            return false;
          }); //Display Drink

          this.editmenuService.getDrink().subscribe(function (alldrinks) {
            _this25.drink = alldrinks;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }, {
        key: "getUrl",
        value: function getUrl() {
          return "url('../../../assets/images/menu1.jpg')";
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_editmenu_service__WEBPACK_IMPORTED_MODULE_2__["EditMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 150,
      vars: 12,
      consts: [[1, "container-fluid", 2, "height", "100vh", "left", "0px", "position", "absolute", "background", "white"], [1, "jumbotron", 2, "background", "white"], [1, "team", 2, "background", "white", "position", "relative"], ["src", "../../../assets/images/menu.jpg", 1, "w-100", 2, "height", "50vh"], [2, "position", "absolute", "; top", "35%", "left", "45%", "color", "white"], ["id", "menuan", 1, "container", 2, "font-size", "200%"], ["id", "BE", 1, "beautiful"], ["id", "A", 1, "beautiful"], ["id", "U", 1, "beautiful"], ["id", "TIFUL", 1, "beautiful"], [1, "text-center", 2, "font-size", "200%"], [1, "container-fluid", "row", "row-cols-4", "text-center"], ["class", "col card card-body text-center", 4, "ngFor", "ngForOf"], [1, "container-fluid"], [1, "buttons", "container-fluid", "text-center", 2, "font-size", "200%", "font-style", "italic"], [1, "row"], ["type", "hidden"], ["selection", ""], [1, "col-sm-2"], [3, "click"], [1, "mt-2", "mb-5", 3, "ngSwitch"], ["class", " row row-cols-4 ", 4, "ngSwitchDefault"], ["class", " row row-cols-4 ", 4, "ngSwitchCase"], [1, "text-center", 2, "font-size", "250%"], [1, "container"], [1, "row", "row-cols-3", "text-center"], ["class", "col  text-center", 4, "ngFor", "ngForOf"], ["class", "col text-center", 4, "ngFor", "ngForOf"], [1, "container-fluid", "padding"], [1, "row", "text-center"], [1, "col-md-4"], ["src", "../../../assets/images/w3newbie.png"], [1, "light"], [1, "col-12"], [1, "light-100"], [1, "col", "card", "card-body", "text-center"], [2, "font-size", "150%"], [1, "p-4", 2, "font-style", "italic"], [1, "row", "row-cols-4"], [1, "d-block", "mb-6", "h-100"], ["alt", "", 1, "img-fluid", "img-thumbnail", 3, "src"], ["href", "../../../assets/images/menu1.jpg", 1, "d-block", "mb-6", "h-100"], [1, "col", "text-center"], [2, "font-style", "italic"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figure", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "U");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Menu Ditore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MenuComponent_div_27_Template, 5, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_p_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            return _r9.value = "meat";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Meat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_p_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            return _r9.value = "fish";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Fish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_p_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            return _r9.value = "dessert";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dessert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_p_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            return _r9.value = "drink";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Drink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_p_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            return _r9.value = "pasta";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Pasta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MenuComponent_div_54_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MenuComponent_div_55_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, MenuComponent_div_56_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, MenuComponent_div_57_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, MenuComponent_div_58_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Pasta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, MenuComponent_div_67_Template, 5, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Meat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, MenuComponent_div_76_Template, 5, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Fish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, MenuComponent_div_85_Template, 5, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Dessert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, MenuComponent_div_94_Template, 5, 2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Drink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, MenuComponent_div_103_Template, 5, 2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "hr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "+355675550387");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "anxhina.gjoni@live.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "100 Aleksandri i Madh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Tirane, Albania");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "hr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Our hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "hr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Monday: 9am-5pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Saturday: 10am - 4pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sanday: closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "hr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "hr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Monday: 9am-5pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Saturday: 10am - 4pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Sanday: closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "hr", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\xA9 proka.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@menuAnimation", ctx.ditore.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ditore);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", _r9.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pasta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "fish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "drink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dessert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pastas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fish);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dessert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drink);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"]],
      styles: ["\n.row-cols-4  {\n    overflow: hidden;\n    transition: all 2s ease;\n  \n  }\n  \n  .img-fluid {\n    transition: all 3s ease;\n  }\n  \n  .row-cols-4 :hover .img-fluid{\n    transform: scale(1.2);\n    opacity: 0.8;\n  }\n  \n  .row-cols-4 :hover{\n    outline: 10px solide #d3325f;\n    outline-offset: 2rem;\n  }\n  \n  footer{\n    background-color:black;\n    color: #d5d5d5;\n    padding-top: 2rem;\n  \n  }\n  \n  hr.light{\n    border-top: 1px solid #d5d5d5;\n    width: 75%;\n    margin-top: .8rem;\n    margin-bottom: 1rem;\n  }\n  \n  footer a{\n    color: #d5d5d5;\n  }\n  \n  hr.light-100{\n    border-top: 1px solid #d5d5d5;\n    width: 100%;\n    margin-top: .8rem;\n    margin-bottom: 1rem;\n  }\n  \n  #menuan {\n \n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .beautiful {\n    color: white;\n    font-family: Quicksand;\n    font-size: 49pt;\n    letter-spacing: 11px;\n    text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);\n  }\n  \n  #A, #TIFUL {\n    -webkit-animation: blink 2s 2;\n            animation: blink 2s 2;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    \n  }\n  \n  @-webkit-keyframes blink {\n    from{text-shadow: 0px 0px 0px transparent; opacity: 0.3;}\n    25%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    30%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n   50%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 0.7; }\n     75%{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    to{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  }\n  \n  @keyframes blink {\n    from{text-shadow: 0px 0px 0px transparent; opacity: 0.3;}\n    25%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    30%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n   50%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 0.7; }\n     75%{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    to{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  }\n  \n  #BE, #U{\n    -webkit-animation: flicker 1.7s 1;\n            animation: flicker 1.7s 1;\n    -webkit-animation-delay: 4s;\n            animation-delay: 4s;\n  }\n  \n  @-webkit-keyframes flicker{\n    0%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    50%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    100%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 1; }\n  }\n  \n  @keyframes flicker{\n    0%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    50%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    100%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 1; }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCOztFQUV6Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7O0VBRW5COztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFJQTs7SUFFRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQjs4REFDMEQ7RUFDNUQ7O0VBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDJCQUFtQjtZQUFuQixtQkFBbUI7O0VBRXJCOztFQUVBO0lBQ0UsS0FBSyxvQ0FBb0MsRUFBRSxZQUFZLENBQUM7SUFDeEQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7SUFDdEQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7R0FDdkQsSUFBSTs4REFDdUQsQ0FBQyxZQUFZLEVBQUU7S0FDeEUsS0FBSyxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7SUFDeEQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7RUFDeEQ7O0VBUkE7SUFDRSxLQUFLLG9DQUFvQyxFQUFFLFlBQVksQ0FBQztJQUN4RCxJQUFJLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztJQUN0RCxJQUFJLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztHQUN2RCxJQUFJOzhEQUN1RCxDQUFDLFlBQVksRUFBRTtLQUN4RSxLQUFLLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztJQUN4RCxJQUFJLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztFQUN4RDs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLEdBQUcsb0NBQW9DLENBQUMsWUFBWSxDQUFDO0lBQ3JELElBQUksb0NBQW9DLENBQUMsWUFBWSxDQUFDO0lBQ3RELEtBQUs7OERBQ3FELENBQUMsVUFBVSxFQUFFO0VBQ3pFOztFQUxBO0lBQ0UsR0FBRyxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7SUFDckQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7SUFDdEQsS0FBSzs4REFDcUQsQ0FBQyxVQUFVLEVBQUU7RUFDekUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucm93LWNvbHMtNCAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2U7XG4gIFxuICB9XG4gIFxuICAuaW1nLWZsdWlkIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgM3MgZWFzZTtcbiAgfVxuXG4gIC5yb3ctY29scy00IDpob3ZlciAuaW1nLWZsdWlke1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICAucm93LWNvbHMtNCA6aG92ZXJ7XG4gICAgb3V0bGluZTogMTBweCBzb2xpZGUgI2QzMzI1ZjtcbiAgICBvdXRsaW5lLW9mZnNldDogMnJlbTtcbiAgfVxuXG4gIGZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgIGNvbG9yOiAjZDVkNWQ1O1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICBcbiAgfVxuICBcbiAgaHIubGlnaHR7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNWQ1ZDU7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tdG9wOiAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIGZvb3RlciBhe1xuICAgIGNvbG9yOiAjZDVkNWQ1O1xuICB9XG4gIGhyLmxpZ2h0LTEwMHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDVkNTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cblxuXG4gICNtZW51YW4ge1xuIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJlYXV0aWZ1bCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gICAgZm9udC1zaXplOiA0OXB0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxMXB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggaG90cGluaywgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLFxuICAgICAgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLCAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSk7XG4gIH1cbiAgXG4gICNBLCAjVElGVUwge1xuICAgIGFuaW1hdGlvbjogYmxpbmsgMnMgMjtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIFxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICBmcm9te3RleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDsgb3BhY2l0eTogMC4zO31cbiAgICAyNSV7dGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50O29wYWNpdHk6IDAuMzt9XG4gICAgMzAle3RleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtvcGFjaXR5OiAwLjM7fVxuICAgNTAle3RleHQtc2hhZG93OiAwcHggMHB4IDI1cHggaG90cGluaywgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLFxuICAgICAgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLCAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSk7b3BhY2l0eTogMC43OyB9XG4gICAgIDc1JXsgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50O29wYWNpdHk6IDAuMzt9XG4gICAgdG97IHRleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtvcGFjaXR5OiAwLjM7fVxuICB9XG4gIFxuICAjQkUsICNVe1xuICAgIGFuaW1hdGlvbjogZmxpY2tlciAxLjdzIDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmbGlja2Vye1xuICAgIDAle3RleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtvcGFjaXR5OiAwLjM7fVxuICAgIDUwJXt0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQ7b3BhY2l0eTogMC4zO31cbiAgICAxMDAle3RleHQtc2hhZG93OiAwcHggMHB4IDI1cHggaG90cGluaywgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLFxuICAgICAgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLCAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSk7b3BhY2l0eTogMTsgfVxuICB9XG4gICJdfQ== */"],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('div', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(-100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('div', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('800ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(0)'
        }))]))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('div', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-100%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('div', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('800ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0)'
          }))]))])])]
        }]
      }], function () {
        return [{
          type: _services_editmenu_service__WEBPACK_IMPORTED_MODULE_2__["EditMenuService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["/menu"];
    };

    var _c2 = function _c2() {
      return ["/reservation"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.collapse = false;
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 23,
      vars: 7,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-light", "bg-light", "sticky-top", "text-center", 2, "position", "fixed"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "../../../assets/images/logo.png"], ["type", "button", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon", 2, "background", "orange"], [1, "navbar-collapse", 3, "hidden", "click"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 2, "color", "green"], [1, "nav-link", 2, "font-size", "1.5vw", 3, "routerLink"], [1, "sr-only"], [1, "nav-item"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() {
            return ctx.collapse = !ctx.collapse;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_6_listener() {
            return ctx.collapse = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reservation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.collapse);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: white;\n    font-size: 30px;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: black;\n}\n\nli[_ngcontent-%COMP%]   #twitter[_ngcontent-%COMP%]:hover, #facebook[_ngcontent-%COMP%]:hover, #instagram[_ngcontent-%COMP%]:hover {\n    color: black;\n  \n  }\n\n#twitter[_ngcontent-%COMP%], #facebook[_ngcontent-%COMP%], #instagram[_ngcontent-%COMP%], #admin[_ngcontent-%COMP%]{\n    display: inline-block; \n    font-size: 30px; \n    position: relative;\n    left: 30px;\n    bottom: -10px;\n    margin-left:10px;\n    margin-right:10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZOztFQUVkOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSBhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbmxpIGE6aG92ZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5saSAjdHdpdHRlcjpob3ZlciwgI2ZhY2Vib29rOmhvdmVyLCAjaW5zdGFncmFtOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIFxuICB9XG5cbiAgI3R3aXR0ZXIsICNmYWNlYm9vaywgI2luc3RhZ3JhbSwgI2FkbWlue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgZm9udC1zaXplOiAzMHB4OyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMzBweDtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/reservation/reservation.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/reservation/reservation.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ReservationComponent */

  /***/
  function srcAppComponentsReservationReservationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationComponent", function () {
      return ReservationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_reservation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/reservation.service */
    "./src/app/services/reservation.service.ts");
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ReservationComponent = /*#__PURE__*/function () {
      function ReservationComponent(reservationService, validateService, router, flashMessage) {
        _classCallCheck(this, ReservationComponent);

        this.reservationService = reservationService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
      }

      _createClass(ReservationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetFormRe();
          this.refreshReservationList();
        }
      }, {
        key: "resetFormRe",
        value: function resetFormRe(form) {
          if (form) form.reset();
          this.reservationService.selectedReservation = {
            _id: "",
            name: "",
            date: "",
            time: "",
            specification: "",
            number: "",
            persons: ""
          };
        }
      }, {
        key: "refreshReservationList",
        value: function refreshReservationList() {
          var _this26 = this;

          this.reservationService.getReservation().subscribe(function (allmenu) {
            _this26.reservations = allmenu;
            _this26.reservations = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](allmenu);

            _this26.refreshReservationList();
          }, function (err) {
            console.log(err);
            return false;
          });
        } // Register reservation from client

      }, {
        key: "onRegisterSubmit",
        value: function onRegisterSubmit(form) {
          var _this27 = this;

          var reservation = {
            _id: this._id,
            name: this.name,
            time: this.time,
            date: this.date,
            persons: this.persons,
            specification: this.specification,
            number: this.number
          };

          if (!this.validateService.validateReservation(reservation)) {
            this.flashMessage.show('Please fill in all fields', {
              cssClass: 'alert-danger',
              timeout: 3000
            });
            return false;
          }

          this.reservationService.postReservation(form.value).subscribe(function (data) {
            var date = new Date(data.date).toDateString();

            _this27.resetFormRe(form);

            _this27.flashMessage.show('Reservation register', {
              cssClass: 'alert-success',
              timeout: 3000
            }); // if(data.success){
            //   this.resetFormRe();
            //   this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
            //   this.router.navigate(['/reservation']);
            // } else {
            //   this.router.navigate(['/reservation']);
            // }

          });
        }
      }]);

      return ReservationComponent;
    }();

    ReservationComponent.ɵfac = function ReservationComponent_Factory(t) {
      return new (t || ReservationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reservation_service__WEBPACK_IMPORTED_MODULE_2__["ReservationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]));
    };

    ReservationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReservationComponent,
      selectors: [["app-reservation"]],
      decls: 129,
      vars: 9,
      consts: [[1, "container-fluid", 2, "height", "100vh", "left", "0px", "position", "absolute", "background", "white"], [1, "team", 2, "background", "white", "position", "relative"], ["src", "../../../assets/images/reservation.jpg", 1, "w-100", 2, "height", "60vh"], [2, "position", "absolute", "; top", "35%", "color", "white"], ["id", "container", 1, "container", 2, "font-size", "100%"], ["id", "BE", 1, "beautiful"], ["id", "A", 1, "beautiful"], ["id", "U", 1, "beautiful"], ["id", "TIFUL", 1, "beautiful"], [1, "container"], [1, "text-center"], [2, "font-size", "300%"], [1, "row"], [1, "col"], [2, "font-size", "200%"], [1, "container", "text-center"], ["id", "reservation", 1, "container", 2, "background", "#f5f0f0"], [1, "text-center", 3, "ngSubmit"], ["rForm", "ngForm"], ["type", "hidden", "name", "_id", 3, "ngModel", "ngModelChange"], ["_id", "ngModel"], ["name", "date", "matInput", "", "placeholder", "Choose a date", "required", "", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["name", "time", "matInput", "", "placeholder", "Time", "type", "time", 3, "ngModel", "ngModelChange"], ["color", "white"], ["name", "name", "matInput", "", "placeholder", "Name", "required", "", 3, "ngModel", "ngModelChange"], ["name", "persons", "matInput", "", "placeholder", "Number of Guests ", "type", "number", 3, "ngModel", "ngModelChange"], ["name", "number", "matInput", "", "placeholder", "Phone number", "type", "text", 3, "ngModel", "ngModelChange"], ["rows", "5", "cols", "40", "name", "specification", "matInput", "", "placeholder", "Comments", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "green"], [1, "input-field", "col", "s12"], ["type", "button", 1, "btn", "btn-custom", "right", 2, "color", "white", 3, "click"], [1, "container-fluid", "padding"], [1, "row", "text-center"], [1, "col-md-4"], ["src", "../../../assets/images/w3newbie.png"], [1, "light"], [1, "col-12"], [1, "light-100"]],
      template: function ReservationComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ResE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "rva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ioN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Make a Reservation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "By Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Prefer to make your reservation via phone? Call (347) 555-1234 between 10am and noon.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "SPECIAL EVENTS & PRIVATE PARTIES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Catering and Events are opportunities for us to work more closely with our guests, occasions for us to share our dedication to celebration in exciting new ways.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Or Reserve Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "form", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReservationComponent_Template_form_ngSubmit_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169);

            var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

            return ctx.onRegisterSubmit(_r166);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_56_listener($event) {
            return ctx.reservationService.selectedReservation._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_59_listener($event) {
            return ctx.date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "mat-datepicker-toggle", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-datepicker", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_64_listener($event) {
            return ctx.time = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_66_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_68_listener($event) {
            return ctx.persons = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_70_listener($event) {
            return ctx.number = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "textarea", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_textarea_ngModelChange_72_listener($event) {
            return ctx.specification = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Make Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservationComponent_Template_button_click_78_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169);

            var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

            return ctx.resetFormRe(_r166);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "hr", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "+355675550387");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "anxhina.gjoni@live.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "100 Aleksandri i Madh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Tirane, Albania");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "hr", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Our hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Monday: 9am-5pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Saturday: 10am - 4pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Sanday: closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "hr", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "hr", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Monday: 9am-5pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Saturday: 10am - 4pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Sanday: closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "hr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\xA9 proka.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reservationService.selectedReservation._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("matDatepicker", _r168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.persons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.specification);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
      styles: ["\n  form {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .error {\n    background-color: #d84f4f;\n    padding: 10px;\n  }\n  \n  .success {\n    background-color: #73cc73;\n    padding: 10px;\n  }\n  \n  form {\n    width: 100%;\n    table-layout: fixed;\n  }\n  \n  #reservation{\n  width: 500px;\n}\n  \n  #container {\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  \n  .beautiful {\n    color: white;\n    font-family: Quicksand;\n    font-size: 49pt;\n    letter-spacing: 11px;\n    text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);\n  }\n  \n  #A, #TIFUL {\n    -webkit-animation: blink 2s 2;\n            animation: blink 2s 2;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    \n  }\n  \n  @-webkit-keyframes blink {\n    from{text-shadow: 0px 0px 0px transparent; opacity: 0.3;}\n    25%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    30%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n   50%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 0.7; }\n     75%{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    to{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  }\n  \n  @keyframes blink {\n    from{text-shadow: 0px 0px 0px transparent; opacity: 0.3;}\n    25%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    30%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n   50%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 0.7; }\n     75%{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    to{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  }\n  \n  #BE, #U{\n    -webkit-animation: flicker 1.7s 1;\n            animation: flicker 1.7s 1;\n    -webkit-animation-delay: 4s;\n            animation-delay: 4s;\n  }\n  \n  @-webkit-keyframes flicker{\n    0%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    50%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    100%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 1; }\n  }\n  \n  @keyframes flicker{\n    0%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    50%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n    100%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n      0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 1; }\n  }\n  \n  .mat-form-field-empty.mat-form-field-label {\n    color: black;\n}\n  \n  .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: black !important;\n}\n  \n  footer{\n    background-color: black;\n    color: #d5d5d5;\n    padding-top: 2rem;\n  \n  }\n  \n  hr.light{\n    border-top: 1px solid #d5d5d5;\n    width: 75%;\n    margin-top: .8rem;\n    margin-bottom: 1rem;\n  }\n  \n  footer a{\n    color: #d5d5d5;\n  }\n  \n  hr.light-100{\n    border-top: 1px solid #d5d5d5;\n    width: 100%;\n    margin-top: .8rem;\n    margin-bottom: 1rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtFQUNmOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUY7RUFDRSxZQUFZO0FBQ2Q7O0VBQ0E7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0VBQ0U7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEI7OERBQzBEO0VBQzVEOztFQUVBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiwyQkFBbUI7WUFBbkIsbUJBQW1COztFQUVyQjs7RUFHQTtJQUNFLEtBQUssb0NBQW9DLEVBQUUsWUFBWSxDQUFDO0lBQ3hELElBQUksb0NBQW9DLENBQUMsWUFBWSxDQUFDO0lBQ3RELElBQUksb0NBQW9DLENBQUMsWUFBWSxDQUFDO0dBQ3ZELElBQUk7OERBQ3VELENBQUMsWUFBWSxFQUFFO0tBQ3hFLEtBQUssb0NBQW9DLENBQUMsWUFBWSxDQUFDO0lBQ3hELElBQUksb0NBQW9DLENBQUMsWUFBWSxDQUFDO0VBQ3hEOztFQVJBO0lBQ0UsS0FBSyxvQ0FBb0MsRUFBRSxZQUFZLENBQUM7SUFDeEQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7SUFDdEQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7R0FDdkQsSUFBSTs4REFDdUQsQ0FBQyxZQUFZLEVBQUU7S0FDeEUsS0FBSyxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7SUFDeEQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7RUFDeEQ7O0VBRUE7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxHQUFHLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztJQUNyRCxJQUFJLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztJQUN0RCxLQUFLOzhEQUNxRCxDQUFDLFVBQVUsRUFBRTtFQUN6RTs7RUFMQTtJQUNFLEdBQUcsb0NBQW9DLENBQUMsWUFBWSxDQUFDO0lBQ3JELElBQUksb0NBQW9DLENBQUMsWUFBWSxDQUFDO0lBQ3RELEtBQUs7OERBQ3FELENBQUMsVUFBVSxFQUFFO0VBQ3pFOztFQUVBO0lBQ0UsWUFBWTtBQUNoQjs7RUFDQTtFQUNFLGtDQUFrQztBQUNwQzs7RUFFRTtJQUNFLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCOztFQUVuQjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICAuZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODRmNGY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgLnN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3M2NjNzM7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIH1cbiAgXG4jcmVzZXJ2YXRpb257XG4gIHdpZHRoOiA1MDBweDtcbn1cbiNjb250YWluZXIge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuICAuYmVhdXRpZnVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgICBmb250LXNpemU6IDQ5cHQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDExcHg7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCBob3RwaW5rLCAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSksXG4gICAgICAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSksIDBweCAwcHggMjVweCByZ2IoMCwgMCwgMTkxKTtcbiAgfVxuICBcbiAgI0EsICNUSUZVTCB7XG4gICAgYW5pbWF0aW9uOiBibGluayAycyAyO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgXG4gIH1cbiAgXG4gIFxuICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICBmcm9te3RleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDsgb3BhY2l0eTogMC4zO31cbiAgICAyNSV7dGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50O29wYWNpdHk6IDAuMzt9XG4gICAgMzAle3RleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtvcGFjaXR5OiAwLjM7fVxuICAgNTAle3RleHQtc2hhZG93OiAwcHggMHB4IDI1cHggaG90cGluaywgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLFxuICAgICAgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLCAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSk7b3BhY2l0eTogMC43OyB9XG4gICAgIDc1JXsgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50O29wYWNpdHk6IDAuMzt9XG4gICAgdG97IHRleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtvcGFjaXR5OiAwLjM7fVxuICB9XG4gIFxuICAjQkUsICNVe1xuICAgIGFuaW1hdGlvbjogZmxpY2tlciAxLjdzIDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmbGlja2Vye1xuICAgIDAle3RleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtvcGFjaXR5OiAwLjM7fVxuICAgIDUwJXt0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQ7b3BhY2l0eTogMC4zO31cbiAgICAxMDAle3RleHQtc2hhZG93OiAwcHggMHB4IDI1cHggaG90cGluaywgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLFxuICAgICAgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLCAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSk7b3BhY2l0eTogMTsgfVxuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuICBmb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6ICNkNWQ1ZDU7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gIFxuICB9XG4gIFxuICBoci5saWdodHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDVkNTtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbi10b3A6IC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgZm9vdGVyIGF7XG4gICAgY29sb3I6ICNkNWQ1ZDU7XG4gIH1cbiAgaHIubGlnaHQtMTAwe1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkNWQ1O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH0iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reservation',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          templateUrl: './reservation.component.html',
          styleUrls: ['./reservation.component.css']
        }]
      }], function () {
        return [{
          type: _services_reservation_service__WEBPACK_IMPORTED_MODULE_2__["ReservationService"]
        }, {
          type: _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/test/test.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/test/test.component.ts ***!
    \***************************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppComponentsTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function TestComponent_th_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestComponent_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r180 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r180.position, " ");
      }
    }

    function TestComponent_th_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestComponent_td_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var el_r181 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", el_r181.name, " ");
      }
    }

    function TestComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestComponent_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r182 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r182.weight, " ");
      }
    }

    function TestComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r183 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r183.symbol, " ");
      }
    }

    function TestComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
      }
    }

    function TestComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
      }
    }

    var ELEMENT_DATA = [{
      position: 1,
      name: '24/09/2020,',
      weight: 1.0079,
      symbol: 'H'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He'
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li'
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be'
    }, {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B'
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C'
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N'
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O'
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }];

    var TestComponent = /*#__PURE__*/function () {
      function TestComponent() {
        _classCallCheck(this, TestComponent);

        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(TestComponent, [{
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestComponent;
    }();

    TestComponent.ɵfac = function TestComponent_Factory(t) {
      return new (t || TestComponent)();
    };

    TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestComponent,
      selectors: [["app-test"]],
      decls: 20,
      vars: 3,
      consts: [[2, "position", "relative", "bottom", "-200px"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function TestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TestComponent_Template_input_keyup_4_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestComponent_th_7_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestComponent_td_8_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TestComponent_th_10_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TestComponent_td_11_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TestComponent_th_13_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TestComponent_td_14_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TestComponent_th_16_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TestComponent_td_17_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TestComponent_tr_18_Template, 1, 0, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TestComponent_tr_19_Template, 1, 0, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0L3Rlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test',
          templateUrl: './test.component.html',
          styleUrls: ['./test.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/testh/testh.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/testh/testh.component.ts ***!
    \*****************************************************/

  /*! exports provided: TesthComponent */

  /***/
  function srcAppComponentsTesthTesthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TesthComponent", function () {
      return TesthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_reservation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/reservation.service */
    "./src/app/services/reservation.service.ts");
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function TesthComponent_ngb_carousel_6_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var imag_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", imag_r191, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function TesthComponent_ngb_carousel_6_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TesthComponent_ngb_carousel_6_1_ng_template_0_Template, 2, 1, "ng-template", 58);
      }
    }

    function TesthComponent_ngb_carousel_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TesthComponent_ngb_carousel_6_1_Template, 1, 0, undefined, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r185.image);
      }
    }

    function TesthComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r194 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r194, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function TesthComponent_101_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var imag_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imag_r195.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", imag_r195.rev, " ");
      }
    }

    function TesthComponent_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TesthComponent_101_ng_template_0_Template, 7, 2, "ng-template", 64);
      }
    }

    var _c0 = function _c0() {
      return ["/reservation"];
    };

    var _c1 = function _c1() {
      return ["/menu"];
    };

    function TesthComponent_div_170_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Make a Reservation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Show Menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      }
    }

    function TesthComponent_div_176_Template(rf, ctx) {
      if (rf & 1) {
        var _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 73, 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TesthComponent_div_176_Template_form_submit_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200);

          var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r199.onSubmitRev(_r198);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Let a review");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter Your Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TesthComponent_div_176_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200);

          var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r201.username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Short Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TesthComponent_div_176_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200);

          var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r202.rev = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r189.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r189.rev);
      }
    }

    var _c2 = function _c2() {
      return ["/login"];
    };

    var TesthComponent = /*#__PURE__*/function () {
      function TesthComponent(reservationService, validateService, flashMessage) {
        _classCallCheck(this, TesthComponent);

        this.reservationService = reservationService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.image = ["background", "background1", "background1"].map(function (n) {
          return "../../../assets/images/".concat(n, ".png");
        });
        this.images = ["food", "food1", "food2", "food3"].map(function (n) {
          return "../../../assets/images/".concat(n, ".jpg");
        });
        this.show = false;
        this.buttonName = 'Show';
        this.reviews = [];
        this.review = false;
        this.button = 'Show';
      }

      _createClass(TesthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetFormRev();
          this.refreshReviewsList();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.show = !this.show; // CHANGE THE NAME OF THE BUTTON.

          if (this.show) this.buttonName = "Hide";else this.buttonName = "Show";
        }
      }, {
        key: "toggleR",
        value: function toggleR() {
          this.review = !this.review; // CHANGE THE NAME OF THE BUTTON.

          if (this.review) this.button = "Hide";else this.button = "Show";
        }
      }, {
        key: "resetFormRev",
        value: function resetFormRev(form) {
          if (form) form.reset();
          this.reservationService.selectedReview = {
            _id: "",
            username: "",
            rev: ""
          };
        }
      }, {
        key: "onSubmitRev",
        value: function onSubmitRev(form) {
          var _this28 = this;

          this.reservationService.postReview(form.value).subscribe(function (res) {
            _this28.resetFormRev(form);

            _this28.refreshReviewsList();
          });
        }
      }, {
        key: "refreshReviewsList",
        value: function refreshReviewsList() {
          var _this29 = this;

          this.reservationService.getReview().subscribe(function (allmenu) {
            _this29.reviews = allmenu;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }]);

      return TesthComponent;
    }();

    TesthComponent.ɵfac = function TesthComponent_Factory(t) {
      return new (t || TesthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reservation_service__WEBPACK_IMPORTED_MODULE_2__["ReservationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]));
    };

    TesthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TesthComponent,
      selectors: [["app-testh"]],
      decls: 177,
      vars: 7,
      consts: [["lang", "en"], ["charset", "UTF-8"], [1, "container-fluid", 2, "height", "100vh", "left", "0px", "position", "absolute", "background", "white"], [1, "carousel-inner"], [1, "carousel-item", "active"], [4, "ngIf"], [2, "position", "absolute", "; top", "35%", "color", "white"], ["id", "container", 1, "container"], ["id", "BE", 1, "beautiful"], ["id", "A", 1, "beautiful"], ["id", "U", 1, "beautiful"], ["id", "TIFUL", 1, "beautiful"], [1, "row", "text-center", "padding", "foto"], ["class", "col-xs-12 col-sm-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "jumbotron", 2, "background", "white"], [1, "team", 2, "background", "white", "position", "relative"], ["src", "../../../assets/images/team.jpg", 1, "w-100", 2, "height", "80vh"], [2, "position", "absolute", "top", "50%", "left", "30%", "color", "white"], ["id", "team-basil", "data-collection-id", "58b606edebbd1a10e586acf9", "data-parallax-id", "58b606edebbd1a10e586acf9", "data-edit-main-image", "Background", 1, "Index-page"], [1, "Index-page-content"], ["data-type", "page", "data-updated-on", "1488405448204", "id", "page-58b606edebbd1a10e586acf9", 1, "sqs-layout", "sqs-grid-12", "columns-12"], [1, "row", "sqs-row"], [1, "col", "sqs-col-4", "span-4"], ["data-block-type", "2", "id", "block-8b3071a983d0a4d28ba0", 1, "sqs-block", "html-block", "sqs-block-html"], [1, "sqs-block-content"], [2, "font-size", "200%", "text-shadow", "1px 1px 10px #000"], [2, "font-size", "150%"], [2, "font-style", "italic"], ["data-block-type", "2", "id", "block-yui_3_17_2_19_1488316984327_7821", 1, "sqs-block", "html-block", "sqs-block-html"], ["data-block-type", "2", "id", "block-yui_3_17_2_19_1488316984327_10428", 1, "sqs-block", "html-block", "sqs-block-html"], [1, "col", "sqs-col-12", "span-12"], ["data-aspect-ratio", "0.11764705882352941", "data-block-type", "21", "id", "block-yui_3_17_2_19_1488316984327_20147", 1, "sqs-block", "spacer-block", "sqs-block-spacer"], ["data-block-json", "{\"hSize\":null,\"floatDir\":null,\"methodOption\":\"transient\",\"existingGallery\":null,\"show-meta-only-title\":false,\"newWindow\":false,\"design\":\"grid\",\"aspectRatio\":null,\"auto-crop\":true,\"square-thumbs\":true,\"aspect-ratio\":\"standard\",\"show-meta\":true,\"thumbnails-per-row\":2,\"padding\":24,\"lightbox\":false,\"collectionId\":\"58b6082c5016e1efa0c21579\",\"vSize\":null,\"transientGalleryId\":\"58b6082c5016e1efa0c21579\"}", "data-block-type", "8", "id", "block-yui_3_17_2_19_1488316984327_21018", 1, "sqs-block", "gallery-block", "sqs-block-gallery"], [1, "col"], ["id", "post", 1, "review", "jumbotron", "text-center", 2, "background", "black"], [4, "ngFor", "ngForOf"], [1, "container-fluid", "padding"], [1, "row", "text-center", "padding"], [1, "col-12", "social", "padding"], ["href", "#"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-google-plus-g"], [1, "row", "text-center"], [1, "col-md-4"], ["src", "../../../assets/images/w3newbie.png"], [1, "light"], [1, "col-12"], [1, "light-100"], [3, "routerLink"], ["id", "afc_sidebar_697"], ["label", "Click", 3, "click"], ["src", "../../../assets/images/icon.jpg"], ["class", "row", 4, "ngIf"], ["id", "review"], ["label", "Click", 1, "mr-2", 2, "color", "black", 3, "click"], [1, "fas", "fa-4x", "fa-envelope"], ["ngbSlide", ""], [1, "w-100", 2, "height", "90vh", 3, "src"], [1, "col-xs-12", "col-sm-6", "col-md-3"], [1, "elementor-image-box-wrapper"], [1, "elementor-image-box-img"], ["width", "400", "height", "300", "alt", "", 1, "attachment-full", "size-full", 3, "src"], ["class", "container-fluid card col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2", "style", "background: black;", "ngbSlide", "", "style", "background: green; position: absolute;"], [1, "card-deck"], [1, "card", 2, "background", "white"], [1, "card-body", "text-center"], [1, "card-text", 2, "font-size", "200%", "color", "black"], [1, "card-text", 2, "font-size", "150%", "font-style", "italic", "color", "black"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-2"], ["id", "hide", 1, "btn", "btn-outline-secondary", "btn-lg", 3, "routerLink"], [1, "form-style-4", 2, "background-color", "black", 3, "submit"], ["revForm", "ngForm"], ["for", "username"], ["type", "text", "name", "username", "required", "true", 3, "ngModel", "ngModelChange"], ["for", "rev"], ["type", "text", "name", "rev", "required", "true", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Send Review"]],
      template: function TesthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TesthComponent_ngb_carousel_6_Template, 2, 1, "ngb-carousel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Res");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Au");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "RANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TesthComponent_div_30_Template, 4, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "figure", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Our Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "LIZ GRISAITIS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "EXECUTIVE CHEF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "MATTEO CAPON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "CHEF DE CUISINE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "ANGIE WALSH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "PASTRY CHEF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, TesthComponent_101_Template, 1, 0, undefined, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "hr", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "+355675550387");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "anxhina.gjoni@live.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "100 Aleksandri i Madh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Tirane, Albania");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "hr", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Our hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "hr", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Monday: 9am-5pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Saturday: 10am - 4pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Sanday: closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "hr", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "hr", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Monday: 9am-5pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Saturday: 10am - 4pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Sanday: closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "hr", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h5", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\xA9 proka.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TesthComponent_Template_a_click_166_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, TesthComponent_div_170_Template, 6, 4, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TesthComponent_Template_a_click_172_listener() {
            return ctx.toggleR();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, TesthComponent_div_176_Template, 17, 2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.review);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
      styles: ["\n@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700');\n/* html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block} */\n@media (min-width: 576px) {\n  html { font-size: 0.2rem; }\n}\n@media (min-width: 768px) {\n  html { font-size: 0.2rem; }\n}\n@media (min-width: 992px) {\n  html { font-size: 0.2rem; }\n}\n@media (min-width: 1200px) {\n  html { font-size: 1rem; }\n}\n#afc_sidebar_697 {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  margin: 0px 0px 0px 0px;\n  padding: 10px;\n  color: #ffffff;\n}\n#review {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  margin: 0px 0px 0px 0px;\n  padding: 10px;\n  color: #ffffff;\n}\n#hide{\n\n  padding-bottom: 100px;\n\n  width:70%;\n  padding:15px 0px 15px 8px;\n  border-radius:5px;\n  box-shadow:inset 4px 6px 10px -4px rgba(white), 0 1px 1px -1px rgba(255,255,255,0.3);\n  background: white;\n  border:1px solid rgba(0,0,0,1);\n  margin-bottom:10px;\n  color:black;\n  text-shadow:#000 0px 1px 5px;\n  position: relative;\n  \n  background-color: white;\n\n}\nhtml, body{\n  height: 100%;\n  width:100%;\n  font-family: 'Poppins' sans-serif;\n  color: #222;\n}\n.carousel-caption{\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.carousel-caption h1{\n  font-size: 500%;\n  text-transform: uppercase;\n  text-shadow: 1px 1px 10px #000;\n}\n.social a {\n  font-size: 4.5em;\n  padding: 3rem;\n  color: black;\n}\n.fa-facebook a{\n  color: #3b5998;\n}\n.fa-facebook:hover, fa-twitter:hover, fa-instagram:hover, fa-google-pluspg:hover{\n  color: #d5d5d5;\n}\nfooter{\n  background-color: black;\n  color: #d5d5d5;\n  padding-top: 2rem;\n\n}\nhr.light{\n  border-top: 1px solid #d5d5d5;\n  width: 75%;\n  margin-top: .8rem;\n  margin-bottom: 1rem;\n}\nfooter a{\n  color: #d5d5d5;\n}\nhr.light-100{\n  border-top: 1px solid #d5d5d5;\n  width: 100%;\n  margin-top: .8rem;\n  margin-bottom: 1rem;\n}\n.foto {\n  overflow: hidden;\n  transition: all 2s ease;\n\n}\n.elementor-image-box-img {\n  transition: all 3s ease;\n}\n.foto :hover .elementor-image-box-img{\n  transform: scale(1.2);\n  opacity: 0.8;\n}\n.foto:hover{\n  outline: 10px solide #d3325f;\n  outline-offset: 2rem;\n}\n.team h1{\n  font-size: 500%;\n  text-transform: uppercase;\n  text-shadow: 1px 1px 10px #000;\n}\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev{\n    display:block;\n}\n#container {\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.beautiful {\n  color: white;\n  font-family: Quicksand;\n  font-size: 49pt;\n  letter-spacing: 11px;\n  text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n    0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);\n}\n#A, #TIFUL {\n  -webkit-animation: blink 2s 2;\n          animation: blink 2s 2;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  \n}\n@-webkit-keyframes blink {\n  from{text-shadow: 0px 0px 0px transparent; opacity: 0.3;}\n  25%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  30%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n 50%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n    0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 0.7; }\n   75%{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  to{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n}\n@keyframes blink {\n  from{text-shadow: 0px 0px 0px transparent; opacity: 0.3;}\n  25%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  30%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n 50%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n    0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 0.7; }\n   75%{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  to{ text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n}\n#BE, #U{\n  -webkit-animation: flicker 1.7s 1;\n          animation: flicker 1.7s 1;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n@-webkit-keyframes flicker{\n  0%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  50%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  100%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n    0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 1; }\n}\n@keyframes flicker{\n  0%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  50%{text-shadow: 0px 0px 0px transparent;opacity: 0.3;}\n  100%{text-shadow: 0px 0px 25px hotpink, 0px 0px 25px rgb(0, 0, 191),\n    0px 0px 25px rgb(0, 0, 191), 0px 0px 25px rgb(0, 0, 191);opacity: 1; }\n}\n.form-style-4{\n\twidth: 450px;\n\tfont-size: 16px;\n\tbackground: #495C70;\n\tpadding: 30px 30px 15px 30px;\n\tborder: 5px solid #53687E;\n}\n.form-style-4 input[type=submit],\n.form-style-4 input[type=button],\n.form-style-4 input[type=text],\n.form-style-4 input[type=email],\n.form-style-4 textarea,\n.form-style-4 label\n{\n\tfont-family: Georgia, \"Times New Roman\", Times, serif;\n\tfont-size: 16px;\n\tcolor: #fff;\n\n}\n.form-style-4 label {\n\tdisplay:block;\n\tmargin-bottom: 10px;\n}\n.form-style-4 label > span{\n\tfloat: left;\n\twidth: 150px;\n}\n.form-style-4 input[type=text],\n.form-style-4 input[type=email] \n{\n\tbackground: transparent;\n\tborder: none;\n\tborder-bottom: 1px dashed #83A4C5;\n\twidth: 275px;\n\toutline: none;\n\tpadding: 0px 0px 0px 0px;\n\tfont-style: italic;\n}\n.form-style-4 textarea{\n\tfont-style: italic;\n\tpadding: 0px 0px 0px 0px;\n\tbackground: transparent;\n\toutline: none;\n\tborder: none;\n\tborder-bottom: 1px dashed #83A4C5;\n\twidth: 275px;\n\toverflow: hidden;\n\tresize:none;\n\theight:20px;\n}\n.form-style-4 textarea:focus, \n.form-style-4 input[type=text]:focus,\n.form-style-4 input[type=email]:focus,\n.form-style-4 input[type=email] :focus\n{\n\tborder-bottom: 1px dashed #D9FFA9;\n}\n.form-style-4 input[type=submit],\n.form-style-4 input[type=button]{\n\tbackground: #576E86;\n\tborder: none;\n\tpadding: 8px 10px 8px 10px;\n\tborder-radius: 5px;\n\tcolor: #A8BACE;\n}\n.form-style-4 input[type=submit]:hover,\n.form-style-4 input[type=button]:hover{\nbackground: #394D61;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0aC90ZXN0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwRUFBMEU7QUFEMUUsZ05BQWdOO0FBR2hOO0VBQ0UsT0FBTyxpQkFBaUIsRUFBRTtBQUM1QjtBQUNBO0VBQ0UsT0FBTyxpQkFBaUIsRUFBRTtBQUM1QjtBQUNBO0VBQ0UsT0FBTyxpQkFBaUIsRUFBRTtBQUM1QjtBQUNBO0VBQ0UsT0FBTyxlQUFlLEVBQUU7QUFDMUI7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBS0E7O0VBRUUscUJBQXFCOztFQUVyQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvRkFBb0Y7RUFDcEYsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixrQkFBa0I7O0VBRWxCLHVCQUF1Qjs7QUFFekI7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7O0FBRW5CO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1Qjs7QUFFekI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0QjtBQUdBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7QUFHQTs7O0lBR0ksYUFBYTtBQUNqQjtBQU1BOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEI7NERBQzBEO0FBQzVEO0FBRUE7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLDJCQUFtQjtVQUFuQixtQkFBbUI7O0FBRXJCO0FBRUE7RUFDRSxLQUFLLG9DQUFvQyxFQUFFLFlBQVksQ0FBQztFQUN4RCxJQUFJLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztFQUN0RCxJQUFJLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztDQUN2RCxJQUFJOzREQUN1RCxDQUFDLFlBQVksRUFBRTtHQUN4RSxLQUFLLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztFQUN4RCxJQUFJLG9DQUFvQyxDQUFDLFlBQVksQ0FBQztBQUN4RDtBQVJBO0VBQ0UsS0FBSyxvQ0FBb0MsRUFBRSxZQUFZLENBQUM7RUFDeEQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7RUFDdEQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7Q0FDdkQsSUFBSTs0REFDdUQsQ0FBQyxZQUFZLEVBQUU7R0FDeEUsS0FBSyxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7RUFDeEQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7QUFDeEQ7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsR0FBRyxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7RUFDckQsSUFBSSxvQ0FBb0MsQ0FBQyxZQUFZLENBQUM7RUFDdEQsS0FBSzs0REFDcUQsQ0FBQyxVQUFVLEVBQUU7QUFDekU7QUFMQTtFQUNFLEdBQUcsb0NBQW9DLENBQUMsWUFBWSxDQUFDO0VBQ3JELElBQUksb0NBQW9DLENBQUMsWUFBWSxDQUFDO0VBQ3RELEtBQUs7NERBQ3FELENBQUMsVUFBVSxFQUFFO0FBQ3pFO0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLG1CQUFtQjtDQUNuQiw0QkFBNEI7Q0FDNUIseUJBQXlCO0FBQzFCO0FBQ0E7Ozs7Ozs7Q0FPQyxxREFBcUQ7Q0FDckQsZUFBZTtDQUNmLFdBQVc7O0FBRVo7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7QUFDQTs7O0NBR0MsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixpQ0FBaUM7Q0FDakMsWUFBWTtDQUNaLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsWUFBWTtDQUNaLGlDQUFpQztDQUNqQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxXQUFXO0FBQ1o7QUFFQTs7Ozs7Q0FLQyxpQ0FBaUM7QUFDbEM7QUFFQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEIsY0FBYztBQUNmO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZXN0aC90ZXN0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHRtbHtmb250LWZhbWlseTpzYW5zLXNlcmlmOy1tcy10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9Ym9keXttYXJnaW46MH1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixtZW51LG5hdixzZWN0aW9uLHN1bW1hcnl7ZGlzcGxheTpibG9ja30gKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczo0MDAsNTAwLDcwMCcpO1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgaHRtbCB7IGZvbnQtc2l6ZTogMC4ycmVtOyB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7IGZvbnQtc2l6ZTogMC4ycmVtOyB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgaHRtbCB7IGZvbnQtc2l6ZTogMC4ycmVtOyB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIGh0bWwgeyBmb250LXNpemU6IDFyZW07IH1cbn1cblxuI2FmY19zaWRlYmFyXzY5NyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI3JldmlldyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5cblxuXG4jaGlkZXtcblxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG5cbiAgd2lkdGg6NzAlO1xuICBwYWRkaW5nOjE1cHggMHB4IDE1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgYm94LXNoYWRvdzppbnNldCA0cHggNnB4IDEwcHggLTRweCByZ2JhKHdoaXRlKSwgMCAxcHggMXB4IC0xcHggcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLDEpO1xuICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gIGNvbG9yOmJsYWNrO1xuICB0ZXh0LXNoYWRvdzojMDAwIDBweCAxcHggNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG5cbmh0bWwsIGJvZHl7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6MTAwJTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIyMjtcbn1cblxuLmNhcm91c2VsLWNhcHRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmNhcm91c2VsLWNhcHRpb24gaDF7XG4gIGZvbnQtc2l6ZTogNTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCAjMDAwO1xufVxuXG4uc29jaWFsIGEge1xuICBmb250LXNpemU6IDQuNWVtO1xuICBwYWRkaW5nOiAzcmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5mYS1mYWNlYm9vayBhe1xuICBjb2xvcjogIzNiNTk5ODtcbn1cblxuLmZhLWZhY2Vib29rOmhvdmVyLCBmYS10d2l0dGVyOmhvdmVyLCBmYS1pbnN0YWdyYW06aG92ZXIsIGZhLWdvb2dsZS1wbHVzcGc6aG92ZXJ7XG4gIGNvbG9yOiAjZDVkNWQ1O1xufVxuXG5mb290ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2Q1ZDVkNTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG5cbn1cblxuaHIubGlnaHR7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkNWQ1O1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tdG9wOiAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmZvb3RlciBhe1xuICBjb2xvcjogI2Q1ZDVkNTtcbn1cbmhyLmxpZ2h0LTEwMHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNWQ1ZDU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuXG5cbi5mb3RvIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2U7XG5cbn1cblxuLmVsZW1lbnRvci1pbWFnZS1ib3gtaW1nIHtcbiAgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2U7XG59XG5cbi5mb3RvIDpob3ZlciAuZWxlbWVudG9yLWltYWdlLWJveC1pbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZm90bzpob3ZlcntcbiAgb3V0bGluZTogMTBweCBzb2xpZGUgI2QzMzI1ZjtcbiAgb3V0bGluZS1vZmZzZXQ6IDJyZW07XG59XG5cblxuLnRlYW0gaDF7XG4gIGZvbnQtc2l6ZTogNTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCAjMDAwO1xufVxuXG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSxcbi5jYXJvdXNlbC1pdGVtLW5leHQsXG4uY2Fyb3VzZWwtaXRlbS1wcmV2e1xuICAgIGRpc3BsYXk6YmxvY2s7XG59XG5cblxuXG5cblxuI2NvbnRhaW5lciB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iZWF1dGlmdWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gIGZvbnQtc2l6ZTogNDlwdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDExcHg7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggaG90cGluaywgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLFxuICAgIDBweCAwcHggMjVweCByZ2IoMCwgMCwgMTkxKSwgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpO1xufVxuXG4jQSwgI1RJRlVMIHtcbiAgYW5pbWF0aW9uOiBibGluayAycyAyO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICBcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIGZyb217dGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50OyBvcGFjaXR5OiAwLjM7fVxuICAyNSV7dGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50O29wYWNpdHk6IDAuMzt9XG4gIDMwJXt0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQ7b3BhY2l0eTogMC4zO31cbiA1MCV7dGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCBob3RwaW5rLCAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSksXG4gICAgMHB4IDBweCAyNXB4IHJnYigwLCAwLCAxOTEpLCAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSk7b3BhY2l0eTogMC43OyB9XG4gICA3NSV7IHRleHQtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudDtvcGFjaXR5OiAwLjM7fVxuICB0b3sgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50O29wYWNpdHk6IDAuMzt9XG59XG5cbiNCRSwgI1V7XG4gIGFuaW1hdGlvbjogZmxpY2tlciAxLjdzIDE7XG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XG59XG5cbkBrZXlmcmFtZXMgZmxpY2tlcntcbiAgMCV7dGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50O29wYWNpdHk6IDAuMzt9XG4gIDUwJXt0ZXh0LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQ7b3BhY2l0eTogMC4zO31cbiAgMTAwJXt0ZXh0LXNoYWRvdzogMHB4IDBweCAyNXB4IGhvdHBpbmssIDBweCAwcHggMjVweCByZ2IoMCwgMCwgMTkxKSxcbiAgICAwcHggMHB4IDI1cHggcmdiKDAsIDAsIDE5MSksIDBweCAwcHggMjVweCByZ2IoMCwgMCwgMTkxKTtvcGFjaXR5OiAxOyB9XG59XG5cbi5mb3JtLXN0eWxlLTR7XG5cdHdpZHRoOiA0NTBweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRiYWNrZ3JvdW5kOiAjNDk1QzcwO1xuXHRwYWRkaW5nOiAzMHB4IDMwcHggMTVweCAzMHB4O1xuXHRib3JkZXI6IDVweCBzb2xpZCAjNTM2ODdFO1xufVxuLmZvcm0tc3R5bGUtNCBpbnB1dFt0eXBlPXN1Ym1pdF0sXG4uZm9ybS1zdHlsZS00IGlucHV0W3R5cGU9YnV0dG9uXSxcbi5mb3JtLXN0eWxlLTQgaW5wdXRbdHlwZT10ZXh0XSxcbi5mb3JtLXN0eWxlLTQgaW5wdXRbdHlwZT1lbWFpbF0sXG4uZm9ybS1zdHlsZS00IHRleHRhcmVhLFxuLmZvcm0tc3R5bGUtNCBsYWJlbFxue1xuXHRmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjZmZmO1xuXG59XG4uZm9ybS1zdHlsZS00IGxhYmVsIHtcblx0ZGlzcGxheTpibG9jaztcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mb3JtLXN0eWxlLTQgbGFiZWwgPiBzcGFue1xuXHRmbG9hdDogbGVmdDtcblx0d2lkdGg6IDE1MHB4O1xufVxuLmZvcm0tc3R5bGUtNCBpbnB1dFt0eXBlPXRleHRdLFxuLmZvcm0tc3R5bGUtNCBpbnB1dFt0eXBlPWVtYWlsXSBcbntcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjODNBNEM1O1xuXHR3aWR0aDogMjc1cHg7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuLmZvcm0tc3R5bGUtNCB0ZXh0YXJlYXtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzgzQTRDNTtcblx0d2lkdGg6IDI3NXB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRyZXNpemU6bm9uZTtcblx0aGVpZ2h0OjIwcHg7XG59XG5cbi5mb3JtLXN0eWxlLTQgdGV4dGFyZWE6Zm9jdXMsIFxuLmZvcm0tc3R5bGUtNCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxuLmZvcm0tc3R5bGUtNCBpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyxcbi5mb3JtLXN0eWxlLTQgaW5wdXRbdHlwZT1lbWFpbF0gOmZvY3VzXG57XG5cdGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI0Q5RkZBOTtcbn1cblxuLmZvcm0tc3R5bGUtNCBpbnB1dFt0eXBlPXN1Ym1pdF0sXG4uZm9ybS1zdHlsZS00IGlucHV0W3R5cGU9YnV0dG9uXXtcblx0YmFja2dyb3VuZDogIzU3NkU4Njtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiA4cHggMTBweCA4cHggMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRjb2xvcjogI0E4QkFDRTtcbn1cbi5mb3JtLXN0eWxlLTQgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLFxuLmZvcm0tc3R5bGUtNCBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXJ7XG5iYWNrZ3JvdW5kOiAjMzk0RDYxO1xufVxuXG4iXX0= */"],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('div', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(-150%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('div', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('800ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(0)'
        }))]))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TesthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-testh',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          templateUrl: './testh.component.html',
          styleUrls: ['./testh.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('div', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-150%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('div', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('800ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0)'
          }))]))])])]
        }]
      }], function () {
        return [{
          type: _services_reservation_service__WEBPACK_IMPORTED_MODULE_2__["ReservationService"]
        }, {
          type: _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]
        }, {
          type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.loggedIn()) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.baseURL = 'users';
      }

      _createClass(AuthService, [{
        key: "authenticateAdmin",
        value: function authenticateAdmin(admin) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
          headers.append('Content-Type', 'application/json');
          return this.http.post('users/authenticate', admin, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "storeAdminData",
        value: function storeAdminData(token, admin) {
          localStorage.setItem('id_token', token);
          localStorage.setItem('admin', JSON.stringify(admin));
          this.authToken = token;
          this.admin = admin;
        }
      }, {
        key: "loadToken",
        value: function loadToken() {
          var token = localStorage.getItem('id_token');
          this.authToken = token;
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return localStorage.getItem('access_token') !== null;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authToken = null;
          this.admin = null;
          localStorage.clear();
        }
      }, {
        key: "getAdmin",
        value: function getAdmin() {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
          this.loadToken();
          headers.append('Authorization', this.authToken);
          headers.append('Content-Type', 'application/json');
          return this.http.get('users/profile', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "putAdmin",
        value: function putAdmin(admin) {
          return this.http.put(this.baseURL + "/".concat(admin._id), admin);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/editmenu.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/editmenu.service.ts ***!
    \**********************************************/

  /*! exports provided: EditMenuService */

  /***/
  function srcAppServicesEditmenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditMenuService", function () {
      return EditMenuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/toPromise */
    "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var EditMenuService = /*#__PURE__*/function () {
      function EditMenuService(http) {
        _classCallCheck(this, EditMenuService);

        this.http = http;
        this.baseURL = 'ditore';
        this.baseURL1 = 'pasta';
        this.baseURL2 = 'fish';
        this.baseURL3 = 'meat';
        this.baseURL4 = 'drink';
        this.baseURL5 = 'dessert';
      } // DItore 


      _createClass(EditMenuService, [{
        key: "postDitore",
        value: function postDitore(dite) {
          return this.http.post(this.baseURL, dite);
        }
      }, {
        key: "getDitore",
        value: function getDitore() {
          return this.http.get(this.baseURL, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "putDitore",
        value: function putDitore(dite) {
          return this.http.put(this.baseURL + "/".concat(dite._id), dite);
        }
      }, {
        key: "deleteDitore",
        value: function deleteDitore(_id) {
          return this.http["delete"](this.baseURL + "/".concat(_id));
        } // end ditore
        // Post, get, put and delete Pasta 

      }, {
        key: "postPasta",
        value: function postPasta(pasta) {
          return this.http.post(this.baseURL1, pasta);
        }
      }, {
        key: "getPasta",
        value: function getPasta() {
          return this.http.get(this.baseURL1, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "putPasta",
        value: function putPasta(pasta) {
          return this.http.put(this.baseURL1 + "/".concat(pasta._id), pasta);
        }
      }, {
        key: "deletePasta",
        value: function deletePasta(_id) {
          return this.http["delete"](this.baseURL1 + "/".concat(_id));
        } // end Pasta
        // Post, get, put and delete Fish 

      }, {
        key: "postFish",
        value: function postFish(fish) {
          return this.http.post(this.baseURL2, fish);
        }
      }, {
        key: "getFish",
        value: function getFish() {
          return this.http.get(this.baseURL2, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "putFish",
        value: function putFish(fish) {
          return this.http.put(this.baseURL2 + "/".concat(fish._id), fish);
        }
      }, {
        key: "deleteFish",
        value: function deleteFish(_id) {
          return this.http["delete"](this.baseURL2 + "/".concat(_id));
        } // end Fish
        // Post, get, put and delete Meat 

      }, {
        key: "postMeat",
        value: function postMeat(meat) {
          return this.http.post(this.baseURL3, meat);
        }
      }, {
        key: "getMeat",
        value: function getMeat() {
          return this.http.get(this.baseURL3, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "putMeat",
        value: function putMeat(meat) {
          return this.http.put(this.baseURL3 + "/".concat(meat._id), meat);
        }
      }, {
        key: "deleteMeat",
        value: function deleteMeat(_id) {
          return this.http["delete"](this.baseURL3 + "/".concat(_id));
        } // end Meat
        // Post, get, put and delete drink 

      }, {
        key: "postDrink",
        value: function postDrink(drink) {
          return this.http.post(this.baseURL4, drink);
        }
      }, {
        key: "getDrink",
        value: function getDrink() {
          return this.http.get(this.baseURL4, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "putDrink",
        value: function putDrink(drink) {
          return this.http.put(this.baseURL4 + "/".concat(drink._id), drink);
        }
      }, {
        key: "deleteDrink",
        value: function deleteDrink(_id) {
          return this.http["delete"](this.baseURL4 + "/".concat(_id));
        } // end Drink
        // Post, get, put and delete Dessert 

      }, {
        key: "postDessert",
        value: function postDessert(dessert) {
          return this.http.post(this.baseURL5, dessert);
        }
      }, {
        key: "getDessert",
        value: function getDessert() {
          return this.http.get(this.baseURL5, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "putDessert",
        value: function putDessert(dessert) {
          return this.http.put(this.baseURL5 + "/".concat(dessert._id), dessert);
        }
      }, {
        key: "deleteDessert",
        value: function deleteDessert(_id) {
          return this.http["delete"](this.baseURL5 + "/".concat(_id));
        }
      }]);

      return EditMenuService;
    }();

    EditMenuService.ɵfac = function EditMenuService_Factory(t) {
      return new (t || EditMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]));
    };

    EditMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EditMenuService,
      factory: EditMenuService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditMenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/reservation.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/reservation.service.ts ***!
    \*************************************************/

  /*! exports provided: ReservationService */

  /***/
  function srcAppServicesReservationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationService", function () {
      return ReservationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/toPromise */
    "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var ReservationService = /*#__PURE__*/function () {
      function ReservationService(http) {
        _classCallCheck(this, ReservationService);

        this.http = http;
        this.baseURL = 'reservation';
        this.baseURL1 = 'review';
      }

      _createClass(ReservationService, [{
        key: "postReservation",
        value: function postReservation(reservation) {
          return this.http.post(this.baseURL, reservation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "getReservation",
        value: function getReservation() {
          return this.http.get(this.baseURL, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "putReservation",
        value: function putReservation(reservation) {
          return this.http.put(this.baseURL + "/".concat(reservation._id), reservation);
        }
      }, {
        key: "deleteReservation",
        value: function deleteReservation(_id) {
          return this.http["delete"](this.baseURL + "/".concat(_id));
        }
      }, {
        key: "postReview",
        value: function postReview(review) {
          return this.http.post(this.baseURL1, review).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "getReview",
        value: function getReview() {
          return this.http.get(this.baseURL1, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.json();
          }));
        }
      }]);

      return ReservationService;
    }();

    ReservationService.ɵfac = function ReservationService_Factory(t) {
      return new (t || ReservationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]));
    };

    ReservationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ReservationService,
      factory: ReservationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/validate.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/validate.service.ts ***!
    \**********************************************/

  /*! exports provided: ValidateService */

  /***/
  function srcAppServicesValidateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateService", function () {
      return ValidateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValidateService = /*#__PURE__*/function () {
      function ValidateService() {
        _classCallCheck(this, ValidateService);
      }

      _createClass(ValidateService, [{
        key: "validateDitore",
        value: function validateDitore(Ditore) {
          if (Ditore.food == undefined || Ditore.description == undefined) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "validatePasta",
        value: function validatePasta(Pasta) {
          if (Pasta.pasta == undefined || Pasta.descriptionp == undefined) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "validateMeat",
        value: function validateMeat(Meat) {
          if (Meat.meat == undefined || Meat.descriptionm == undefined) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "validateFish",
        value: function validateFish(Fish) {
          if (Fish.fish == undefined || Fish.descriptionf == undefined) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "validateDessert",
        value: function validateDessert(Dessert) {
          if (Dessert.dessert == undefined || Dessert.descriptiond == undefined) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "validateDrink",
        value: function validateDrink(Drink) {
          if (Drink.drink == undefined || Drink.descriptiondr == undefined) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "validateReservation",
        value: function validateReservation(Reservation) {
          if (Reservation.name == undefined || Reservation.specification == undefined || Reservation.number == undefined || Reservation.date == undefined || Reservation.persons == undefined || Reservation.date == undefined || Reservation.time == undefined) {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return ValidateService;
    }();

    ValidateService.ɵfac = function ValidateService_Factory(t) {
      return new (t || ValidateService)();
    };

    ValidateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ValidateService,
      factory: ValidateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/anxhina/Desktop/RestaurantP/Client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map