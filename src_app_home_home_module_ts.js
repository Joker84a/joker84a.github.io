"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ 4877);
/* harmony import */ var _materials_materials_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materials/materials.component */ 831);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 994);







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
            // Keyboard
        ],
        declarations: [_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__.TimelineComponent, _materials_materials_component__WEBPACK_IMPORTED_MODULE_1__.MaterialsComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent],
        exports: [_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__.TimelineComponent, _materials_materials_component__WEBPACK_IMPORTED_MODULE_1__.MaterialsComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA],
        providers: [{
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.LOCALE_ID,
                useValue: 'it-IT' // 'de-DE' for Germany, 'fr-FR' for France ...
            },
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 831:
/*!*************************************************************!*\
  !*** ./src/app/components/materials/materials.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialsComponent": () => (/* binding */ MaterialsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _materials_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./materials.component.html?ngResource */ 6580);
/* harmony import */ var _materials_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materials.component.scss?ngResource */ 6384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);





let MaterialsComponent = class MaterialsComponent {
    constructor() {
        this.materials = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.materials;
    }
    ngOnInit() { }
};
MaterialsComponent.ctorParameters = () => [];
MaterialsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-materials',
        template: _materials_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_materials_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MaterialsComponent);



/***/ }),

/***/ 994:
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.component.html?ngResource */ 9929);
/* harmony import */ var _nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.component.scss?ngResource */ 7764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() { }
};
NavComponent.ctorParameters = () => [];
NavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nav',
        template: _nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavComponent);



/***/ }),

/***/ 4877:
/*!***********************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineComponent": () => (/* binding */ TimelineComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _timeline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.component.html?ngResource */ 6947);
/* harmony import */ var _timeline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.component.scss?ngResource */ 6969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);





let TimelineComponent = class TimelineComponent {
    constructor() {
        this.timelines = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.timelines;
    }
    ngOnInit() { }
};
TimelineComponent.ctorParameters = () => [];
TimelineComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-timeline',
        template: _timeline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_timeline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimelineComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "materials": () => (/* binding */ materials),
/* harmony export */   "timelines": () => (/* binding */ timelines)
/* harmony export */ });
const environment = {
    production: true
};
const timelines = [{
        "title": "Presentazione dell'iniziativa e creazione dei team",
        "icon": "../../../assets/imgs/rocket.svg",
        "date": "Novembre",
        "position": "left"
    },
    {
        "title": "Introduzione a Design Thinking ",
        "icon": "../../../assets/imgs/light-bulb.svg",
        "date": "Dicembre",
        "position": "right"
    },
    {
        "title": "Introduzione a Design Thinking ",
        "icon": "../../../assets/imgs/light-bulb.svg",
        "date": "Dicembre",
        "position": "left"
    }];
const materials = [
    {
        "link": "",
        "title": "Matierale 1",
        "description": "addiction information about the selected material"
    }, {
        "link": "",
        "title": "Matierale 1",
        "description": "addiction information about the selected material"
    }, {
        "link": "",
        "title": "Matierale 1",
        "description": "addiction information about the selected material"
    }, {
        "link": "",
        "title": "Matierale 1",
        "description": "addiction information about the selected material"
    }, {
        "link": "",
        "title": "Matierale 1",
        "description": "addiction information about the selected material"
    }, {
        "link": "",
        "title": "Matierale 1",
        "description": "addiction information about the selected material"
    },
];


/***/ }),

/***/ 6384:
/*!**************************************************************************!*\
  !*** ./src/app/components/materials/materials.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Calibri:400,300,700);\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 0px solid transparent;\n  border-radius: 0px;\n}\n.card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n}\n.card .card-title {\n  position: relative;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n* {\n  outline: none;\n}\n.table th, .table thead th {\n  font-weight: 500;\n}\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n.table th {\n  padding: 1rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n.table th, .table thead th {\n  font-weight: 500;\n}\nth {\n  text-align: inherit;\n}\n.m-b-20 {\n  margin-bottom: 20px;\n}\n.customcheckbox {\n  display: block;\n  position: relative;\n  padding-left: 24px;\n  font-weight: 100;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.customcheckbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.checkmark {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #CDCDCD;\n  border-radius: 6px;\n}\n.customcheckbox input:checked ~ .checkmark {\n  background-color: #2196BB;\n}\n.customcheckbox .checkmark:after {\n  left: 8px;\n  top: 4px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.header-table {\n  background-color: #EAECEF;\n}\n.download-button {\n  background-color: var(--ion-color-primary-green);\n  border: none;\n  padding-left: 30px !important;\n  padding-right: 30px !important;\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx1RUFBQTtBQUlSO0VBQ00sa0JBQUE7RUFHSCxhQUFBO0VBSUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUZIO0FBTUE7RUFHRyxjQUFBO0VBQ0EsZ0JBQUE7QUFISDtBQU1BO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSEg7QUFPQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUpIO0FBT0E7RUFDRyxhQUFBO0FBSkg7QUFPQTtFQUNHLGdCQUFBO0FBSkg7QUFRQTtFQUNHLHNCQUFBO0VBQ0EsZ0NBQUE7QUFMSDtBQVNBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFOSDtBQVVBO0VBQ0csZ0JBQUE7QUFQSDtBQVdBO0VBQ0csbUJBQUE7QUFSSDtBQVlBO0VBQ0csbUJBQUE7QUFUSDtBQWFBO0VBQ0csY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FBVkg7QUFjQTtFQUNHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFYSDtBQWNBO0VBQ0csa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVhIO0FBZUE7RUFDRyx5QkFBQTtBQVpIO0FBZ0JBO0VBQ0csU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQWJIO0FBZ0JBO0VBQ0kseUJBQUE7QUFiSjtBQWdCQTtFQUNJLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQWJKIiwiZmlsZSI6Im1hdGVyaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhbGlicmk6NDAwLDMwMCw3MDApO1xuXG5cblxuLmNhcmQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBtaW4td2lkdGg6IDA7XG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cblxuLmNhcmQtYm9keSB7XG4gICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgZmxleDogMSAxIGF1dG87XG4gICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuXG4uY2FyZCAuY2FyZC10aXRsZSB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBmb250LXdlaWdodDogNjAwO1xuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG4udGFibGUge1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXgtd2lkdGg6IDEwMCU7XG4gICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbioge1xuICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRhYmxlIHRoLCAudGFibGUgdGhlYWQgdGgge1xuICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG4udGFibGUgdGhlYWQgdGgge1xuICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xufVxuXG5cbi50YWJsZSB0aCB7XG4gICBwYWRkaW5nOiAxcmVtO1xuICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG5cbi50YWJsZSB0aCwgLnRhYmxlIHRoZWFkIHRoIHtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cblxudGgge1xuICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbn1cblxuXG4ubS1iLTIwIHtcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cblxuLmN1c3RvbWNoZWNrYm94IHtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBmb250LXNpemU6IDIycHg7XG4gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5cbi5jdXN0b21jaGVja2JveCBpbnB1dCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBvcGFjaXR5OiAwO1xuICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDogLTNweDtcbiAgIGxlZnQ6IDA7XG4gICBoZWlnaHQ6IDIwcHg7XG4gICB3aWR0aDogMjBweDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNDRENEQ0Q7XG4gICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cblxuLmN1c3RvbWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2QkI7XG59XG5cblxuLmN1c3RvbWNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIge1xuICAgbGVmdDogOHB4O1xuICAgdG9wOiA0cHg7XG4gICB3aWR0aDogNXB4O1xuICAgaGVpZ2h0OiAxMHB4O1xuICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5oZWFkZXItdGFibGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUNFRjtcbn1cblxuLmRvd25sb2FkLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1ncmVlbik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 7764:
/*!**************************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "@media (max-width: 991px) {\n  .navbar-scroll {\n    background-color: #fff;\n  }\n\n  .navbar-scroll .navbar-brand,\n.navbar-scroll .nav-link,\n.navbar-scroll .fa-bars {\n    color: #4f4f4f !important;\n  }\n}\n.navbar-brand {\n  letter-spacing: 3px;\n  font-size: 2rem;\n  font-weight: 500;\n}\n.navbar-scroll .navbar-brand,\n.navbar-scroll .nav-link,\n.navbar-scroll .fa-bars {\n  color: #fff;\n}\n.navbar-scroll {\n  box-shadow: none;\n}\n.navbar-scrolled {\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);\n}\n.navbar-scrolled .navbar-brand,\n.navbar-scrolled .nav-link,\n.navbar-scrolled .fa-bars {\n  color: #4f4f4f;\n}\n.navbar-scrolled {\n  background-color: #fff;\n}\n@media (max-width: 450px) {\n  #intro {\n    height: 950px !important;\n  }\n}\n@media (min-width: 550px) and (max-width: 750px) {\n  #intro {\n    height: 1100px !important;\n  }\n}\n@media (min-width: 800px) and (max-width: 990px) {\n  #intro {\n    height: 600px !important;\n  }\n}\n.display-1 {\n  font-weight: 500 !important;\n  letter-spacing: 40px;\n}\n@media (min-width: 1600px) {\n  .display-1 {\n    font-size: 10rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0Usc0JBQUE7RUFDSjs7RUFFRTs7O0lBR0UseUJBQUE7RUFDSjtBQUNGO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUU7OztFQUdFLFdBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsNkNBQUE7QUFDSjtBQUVFOzs7RUFHRSxjQUFBO0FBQ0o7QUFFRTtFQUNFLHNCQUFBO0FBQ0o7QUFFRTtFQUNFO0lBQ0Usd0JBQUE7RUFDSjtBQUNGO0FBRUU7RUFDRTtJQUNFLHlCQUFBO0VBQUo7QUFDRjtBQUdFO0VBQ0U7SUFDRSx3QkFBQTtFQURKO0FBQ0Y7QUFJRTtFQUNFLDJCQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQUtFO0VBQ0U7SUFDRSxnQkFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLm5hdmJhci1zY3JvbGwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgICAgXG4gICAgLm5hdmJhci1zY3JvbGwgLm5hdmJhci1icmFuZCxcbiAgICAubmF2YmFyLXNjcm9sbCAubmF2LWxpbmssXG4gICAgLm5hdmJhci1zY3JvbGwgLmZhLWJhcnMge1xuICAgICAgY29sb3I6ICM0ZjRmNGYgIWltcG9ydGFudDtcbiAgICB9ICAgICAgICAgXG4gIH1cbiAgXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLm5hdmJhci1zY3JvbGwgLm5hdmJhci1icmFuZCxcbiAgLm5hdmJhci1zY3JvbGwgLm5hdi1saW5rLFxuICAubmF2YmFyLXNjcm9sbCAuZmEtYmFycyB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5uYXZiYXItc2Nyb2xsIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIFxuICAubmF2YmFyLXNjcm9sbGVkIHtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgXG4gIC5uYXZiYXItc2Nyb2xsZWQgLm5hdmJhci1icmFuZCxcbiAgLm5hdmJhci1zY3JvbGxlZCAubmF2LWxpbmssXG4gIC5uYXZiYXItc2Nyb2xsZWQgLmZhLWJhcnMge1xuICAgIGNvbG9yOiAjNGY0ZjRmO1xuICB9XG4gIFxuICAubmF2YmFyLXNjcm9sbGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAjaW50cm8ge1xuICAgICAgaGVpZ2h0OiA5NTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAjaW50cm8ge1xuICAgICAgaGVpZ2h0OiAxMTAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gICAgI2ludHJvIHtcbiAgICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIC5kaXNwbGF5LTEge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogNDBweDtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgIC5kaXNwbGF5LTEge1xuICAgICAgZm9udC1zaXplOiAxMHJlbTtcbiAgICB9XG4gIH0iXX0= */";

/***/ }),

/***/ 6969:
/*!************************************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "/* The actual timeline (the vertical ruler) */\n.text-green {\n  color: var(--ion-color-primary-green);\n}\n.timeline-img {\n  left: -50px;\n  max-width: 100px;\n}\n.custom-card {\n  border: none !important;\n}\n.main-timeline {\n  position: relative;\n}\n/* The actual timeline (the vertical ruler) */\n.main-timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 3px;\n  background-color: black;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -3px;\n}\n/* Container around content */\n.timeline {\n  position: relative;\n  background-color: inherit;\n  width: 50%;\n}\n/* The circles on the timeline */\n.timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: -11px;\n  background-color: black;\n  border: 3px solid black;\n  top: 150px;\n  border-radius: 50%;\n  z-index: 1;\n}\n/* Place the container to the left */\n.left {\n  padding: 0px 40px 20px 0px;\n  left: 0;\n}\n/* Place the container to the right */\n.right {\n  padding: 0px 0px 20px 40px;\n  left: 50%;\n}\n/* Add arrows to the left container (pointing right) */\n.left::before {\n  content: \" \";\n  position: absolute;\n  top: 18px;\n  z-index: 1;\n  right: 30px;\n  border: medium solid white;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent white;\n}\n/* Add arrows to the right container (pointing left) */\n.right::before {\n  content: \" \";\n  position: absolute;\n  top: 18px;\n  z-index: 1;\n  left: 30px;\n  border: medium solid white;\n  border-width: 10px 10px 10px 0;\n  border-color: transparent white transparent transparent;\n}\n/* Fix the circle for containers on the right side */\n.right::after {\n  left: -14px;\n}\n/* Media queries - Responsive timeline on screens less than 600px wide */\n@media screen and (max-width: 600px) {\n  /* Place the timelime to the left */\n  .main-timeline::after {\n    left: 31px;\n  }\n\n  /* Full-width containers */\n  .timeline {\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px;\n  }\n\n  /* Make sure that all arrows are pointing leftwards */\n  .timeline::before {\n    left: 60px;\n    border: medium solid white;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent white transparent transparent;\n  }\n\n  /* Make sure all circles are at the same spot */\n  .left::after, .right::after {\n    left: 18px;\n  }\n\n  .left::before {\n    right: auto;\n  }\n\n  /* Make all right containers behave like the left ones */\n  .right {\n    left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUFBO0FBRUE7RUFDSSxxQ0FBQTtBQUFKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlBO0VBQ0ksdUJBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7QUFESjtBQUlBLDZDQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUEsNkJBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBREo7QUFJQSxnQ0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFESjtBQUlBLG9DQUFBO0FBQ0E7RUFDSSwwQkFBQTtFQUNBLE9BQUE7QUFESjtBQUlBLHFDQUFBO0FBQ0k7RUFDQSwwQkFBQTtFQUNBLFNBQUE7QUFESjtBQUlBLHNEQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdURBQUE7QUFESjtBQUlBLHNEQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdURBQUE7QUFESjtBQUlBLG9EQUFBO0FBQ0E7RUFDSSxXQUFBO0FBREo7QUFJQSx3RUFBQTtBQUNBO0VBQ0ksbUNBQUE7RUFDQTtJQUNJLFVBQUE7RUFETjs7RUFJRSwwQkFBQTtFQUNBO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFETjs7RUFJRSxxREFBQTtFQUNBO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0lBQ0EsOEJBQUE7SUFDQSx1REFBQTtFQUROOztFQUlFLCtDQUFBO0VBQ0E7SUFDSSxVQUFBO0VBRE47O0VBSUU7SUFDSSxXQUFBO0VBRE47O0VBSUUsd0RBQUE7RUFDQTtJQUNJLFFBQUE7RUFETjtBQUNGIiwiZmlsZSI6InRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuXG4udGV4dC1ncmVlbntcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1ncmVlbik7XG59XG5cblxuLnRpbWVsaW5lLWltZ3tcbiAgICBsZWZ0OiAtNTBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4uY3VzdG9tLWNhcmR7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXRpbWVsaW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cbi5tYWluLXRpbWVsaW5lOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLnRpbWVsaW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbi50aW1lbGluZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcmlnaHQ6IC0xMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIHRvcDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cbi5sZWZ0IHtcbiAgICBwYWRkaW5nOiAwcHggNDBweCAyMHB4IDBweDtcbiAgICBsZWZ0OiAwO1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSByaWdodCAqL1xuICAgIC5yaWdodCB7XG4gICAgcGFkZGluZzogMHB4IDBweCAyMHB4IDQwcHg7XG4gICAgbGVmdDogNTAlO1xufVxuXG4vKiBBZGQgYXJyb3dzIHRvIHRoZSBsZWZ0IGNvbnRhaW5lciAocG9pbnRpbmcgcmlnaHQpICovXG4ubGVmdDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGU7XG59XG5cbi8qIEFkZCBhcnJvd3MgdG8gdGhlIHJpZ2h0IGNvbnRhaW5lciAocG9pbnRpbmcgbGVmdCkgKi9cbi5yaWdodDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMzBweDtcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLyogRml4IHRoZSBjaXJjbGUgZm9yIGNvbnRhaW5lcnMgb24gdGhlIHJpZ2h0IHNpZGUgKi9cbi5yaWdodDo6YWZ0ZXIge1xuICAgIGxlZnQ6IC0xNHB4O1xufVxuXG4vKiBNZWRpYSBxdWVyaWVzIC0gUmVzcG9uc2l2ZSB0aW1lbGluZSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA2MDBweCB3aWRlICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuICAgIC5tYWluLXRpbWVsaW5lOjphZnRlciB7XG4gICAgICAgIGxlZnQ6IDMxcHg7XG4gICAgfVxuXG4gICAgLyogRnVsbC13aWR0aCBjb250YWluZXJzICovXG4gICAgLnRpbWVsaW5lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICB9XG4gICAgXG4gICAgLyogTWFrZSBzdXJlIHRoYXQgYWxsIGFycm93cyBhcmUgcG9pbnRpbmcgbGVmdHdhcmRzICovXG4gICAgLnRpbWVsaW5lOjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICAvKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbiAgICAubGVmdDo6YWZ0ZXIsIC5yaWdodDo6YWZ0ZXIge1xuICAgICAgICBsZWZ0OiAxOHB4O1xuICAgIH1cbiAgICBcbiAgICAubGVmdDo6YmVmb3JlIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgfVxuICAgIFxuICAgIC8qIE1ha2UgYWxsIHJpZ2h0IGNvbnRhaW5lcnMgYmVoYXZlIGxpa2UgdGhlIGxlZnQgb25lcyAqL1xuICAgIC5yaWdodCB7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".bg {\n  background-image: url('bg-home.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.486);\n}\n\n.logo {\n  max-width: 200px;\n}\n\n.logo-2 {\n  max-width: 250px;\n}\n\n.greta-green {\n  color: var(--ion-color-primary-green);\n}\n\n.more-button {\n  background-color: var(--ion-color-primary-green) !important;\n  border: none;\n  max-width: 200px !important;\n  margin-bottom: 30px;\n}\n\n.info {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.sponsor {\n  background-color: white;\n  margin-top: 80px;\n  margin-bottom: 30px;\n}\n\n.logo-sponsor {\n  width: 150px;\n}\n\n.projects {\n  height: 200px;\n  background-image: url('coding.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.486);\n}\n\n.upload-btn {\n  background-color: var(--ion-color-primary-green);\n}\n\n.footer {\n  height: 300px;\n  background-color: black;\n}\n\n.menu-a {\n  color: rgba(255, 255, 255, 0.6);\n  margin: 0 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-decoration: none;\n}\n\n.menu-a:hover {\n  color: var(--ion-color-primary-green);\n}\n\n.social-icon {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.social-icon:hover {\n  color: var(--ion-color-primary-green);\n}\n\n.footer-text {\n  color: rgba(255, 255, 255, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbURBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7QUFDRjs7QUFFQTtFQUNFLDJEQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1EQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnREFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFFQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBR0E7RUFDRSwrQkFBQTtBQUFGOztBQUVBO0VBQ0UscUNBQUE7QUFDRjs7QUFLQTtFQUNFLCtCQUFBO0FBRkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2JnLWhvbWUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2hhZG93Omluc2V0IDAgMCAwIDIwMDBweCByZ2JhKDAsIDAsIDAsIDAuNDg2KTtcbn1cblxuLmxvZ297XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5sb2dvLTJ7XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG5cbi5ncmV0YS1ncmVlbntcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWdyZWVuKTtcbn1cblxuLm1vcmUtYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWdyZWVuKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmluZm97XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc3BvbnNvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubG9nby1zcG9uc29yIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4ucHJvamVjdHN7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2NvZGluZy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJveC1zaGFkb3c6aW5zZXQgMCAwIDAgMjAwMHB4IHJnYmEoMCwgMCwgMCwgMC40ODYpO1xufVxuXG4udXBsb2FkLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWdyZWVuKTtcbn1cblxuXG4uZm9vdGVye1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1lbnUtYXtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tZW51LWE6aG92ZXJ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1ncmVlbilcbn1cblxuXG4uc29jaWFsLWljb257XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7ICBcbn1cbi5zb2NpYWwtaWNvbjpob3ZlcntcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWdyZWVuKVxufVxuXG5cblxuXG4uZm9vdGVyLXRleHR7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7O1xufVxuXG4iXX0= */";

/***/ }),

/***/ 6580:
/*!**************************************************************************!*\
  !*** ./src/app/components/materials/materials.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n      <div class=\"card\">\n          <div class=\"card-body text-center\">\n              <h5 class=\"card-title m-b-0\">Tutto il materiale utilizzato è disponibile qui</h5>\n          </div>\n              <div class=\"table-responsive b-1\">\n                  <table class=\"table\">\n                      <thead class=\"thead-light header-table\">\n                          <tr>\n                              <th scope=\"col\">Titolo</th>\n                              <!-- <th scope=\"col\">Descrizione</th> -->\n                              <th scope=\"col\">Link</th>\n                              \n                          </tr>\n                      </thead>\n                      <tbody class=\"customtable\">\n                          <tr  class=\"my-5\" *ngFor=\"let material of materials\">\n                              <td class=\"align-middle\">{{material.title}}</td>\n                              <!-- <td class=\"align-middle\">{{material.description}}</td> -->\n                              <td class=\"align-middle\"><a type=\"button\" class=\"btn btn-primary rounded-pill float-end download-button p-2 mt-3\" href=\"{{material.link}}\">Scarica</a></td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n      </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 9929:
/*!**************************************************************!*\
  !*** ./src/app/components/nav/nav.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<header>\n  <!-- Navbar -->\n  <nav class=\"navbar navbar-expand-lg fixed-top navbar-scroll\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" href=\"#!\">Greta</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-mdb-toggle=\"collapse\"\n        data-mdb-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n        <i class=\"fas fa-bars\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav me-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" aria-current=\"page\" href=\"#!\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#!\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#!\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#!\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#!\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#!\">About</a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav d-flex flex-row\">\n          <li class=\"nav-item me-3 me-lg-0\">\n            <a class=\"nav-link\" href=\"#!\">\n              <i class=\"fas fa-shopping-cart\"></i>\n            </a>\n          </li>\n          <li class=\"nav-item me-3 me-lg-0\">\n            <a class=\"nav-link\" href=\"#!\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n          </li>\n          <li class=\"nav-item me-3 me-lg-0\">\n            <a class=\"nav-link\" href=\"#!\">\n              <i class=\"fab fa-instagram\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar -->\n\n\n</header>";

/***/ }),

/***/ 6947:
/*!************************************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<section>\n  <div class=\"container py-5\">\n    <div class=\"main-timeline\">\n      <div *ngFor=\"let timeline of timelines; let odd = odd; let even = even; \" class=\"timeline {{timeline.position}}\" >\n      <!-- ngClass=\"{ 'left': {{even}}, 'right': {{!even}}}\"> -->\n        <div class=\"card custom-card\">\n          <div class=\"card-body p-4\">\n            <img class=\"timeline-img\" src=\"{{timeline.icon}}\">\n            <h3 class=\"mb-0 text-green\">{{timeline.date}}</h3>\n            <h2 class=\"mb-0\"> {{timeline.title}} </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n \n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n <app-nav></app-nav>\n\n  <!--Home-->\n  <div class=\"container-fluid h-100 bg\">\n    <div class=\"row align-items-center h-100\">\n      <div class=\"mx-auto text-center\" >\n        <img class=\"logo\" src=\"../../assets/logo.svg\">\n        <div class=\"title mb-4\">\n          <h1 class=\"text-white\"><span class=\"greta-green\">G</span>irls for <span class=\"home_text\">Gre</span>en</h1>\n          <h1 class=\"text-white\"><span class=\"greta-green\">T</span>echnology <span class=\"home_text\">A</span>pplications</h1>\n        </div>\n        <div class=\"row\">\n          <span class=\"text-white\">\n            <ion-icon name=\"calendar-outline\" class=\"greta-green\"></ion-icon>\n              Nov. 2022 - Gen. 2023\n          </span>\n          <span class=\"text-white\">\n            <ion-icon name=\"location-outline\" class=\"greta-green\"></ion-icon>\n            Università la Sapienza, Roma\n          </span>\n        </div>\n      </div>\n    </div>\n    \n  </div>\n\n  <!--Sezione informativa-->\n  <div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"m-5\">\n          <p class=\"greta-green\">INFO</p>\n          <h1>Titolo</h1>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <a type=\"button\" class=\"btn btn-primary rounded-pill float-end more-button p-2 mt-3\" href=\"\">Leggi di più</a>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <img src=\"../../assets/imgs/info.svg\" class=\"info\" alt=\"\">\n      </div>\n    </div>\n  </div>\n\n  <!--Sezione programma-->\n  <div class=\"text-center mt-5 \">\n    <h1 class=\"text-dark\">Programma</h1>\n    <app-timeline></app-timeline>\n  </div>\n\n  <!-- Sezione materiale-->\n  <div class=\"text-center mt-5 mb-5\">\n    <div class=\"mx-5\">\n      <h1 class=\"text-dark\">Materiale</h1>\n      <app-materials></app-materials>\n    </div>\n  </div>\n\n  <!-- Sezione carica progetto-->\n  <div class=\"row align-items-center projects\">\n    <div class=\"mx-auto text-center\" >\n      <h1 class=\"text-white\">Carica il tuo progetto</h1>\n      <a type=\"button\" class=\"btn btn-success upload-btn\" href=\"\">Upload!</a>\n    </div>\n  </div>\n\n  <!-- Sezione sponsor-->\n  <div class=\"text-center mt-5\">\n    <h1 class=\"text-dark\">Sponsor</h1>\n    <div class=\"row align-item-center sponsor mt-0\">\n      <div class=\"mx-auto text-center\">\n        <img class=\"logo-sponsor\" src=\"../../assets/sponsor/sapienza.svg\" alt=\"\">\n        <img class=\"logo-sponsor m-4\" src=\"../../assets/sponsor/fmd.png\" alt=\"\">\n        <img class=\"logo-sponsor m-4\" src=\"../../assets/sponsor/ibm.svg\" alt=\"\">  \n      </div>\n    </div>\n  </div>\n\n  \n\n\n  <footer class=\"footer\">\n    <div class=\"row align-items-center\">\n      <div class=\"mx-auto text-center\" >\n        <img class=\"logo mt-5\" src=\"../../assets/logo2.svg\">\n        <p class=\"mt-3\">\n          <a class=\"menu-a\" href=\"\">Home</a>\n          <a class=\"menu-a\" href=\"\">About</a>\n          <a class=\"menu-a\" href=\"\">News</a>\n          <a class=\"menu-a\" href=\"\">Contatti</a>\n        </p>\n        <div>\n          <a href=\"#\" class=\"social-icon mx-2\"><ion-icon name=\"logo-instagram\"></ion-icon></a>\n          <a href=\"#\" class=\"social-icon mx-2\"><ion-icon name=\"logo-facebook\"></ion-icon></a>\n        </div>\n        <div class=\"text-white mt-4 \">\n          <p class=\"m-0 footer-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>\n          <p class=\"m-0 footer-text\">2022 @ Luca Podo</p>\n        </div>\n      </div>\n    </div>\n    \n  </footer>\n  \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map