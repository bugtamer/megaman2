"use strict";
(self["webpackChunkmegaman2"] = self["webpackChunkmegaman2"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_megaman2_megaman2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/megaman2/megaman2.component */ 8222);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  consts: [[1, "container"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mm2-megaman2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_components_megaman2_megaman2_component__WEBPACK_IMPORTED_MODULE_0__.Megaman2Component],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_megaman2_megaman2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/megaman2/megaman2.component */ 8222);
/* harmony import */ var _components_password_board_password_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/password-board/password-board.component */ 931);
/* harmony import */ var _components_screen_password_screen_password_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/screen/password-screen/password-screen.component */ 5430);
/* harmony import */ var _components_screen_marker_marker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/screen/marker/marker.component */ 4141);
/* harmony import */ var _components_screen_boss_screen_boss_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/screen/boss-screen/boss-screen.component */ 9659);
/* harmony import */ var _components_screen_boss_boss_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/screen/boss/boss.component */ 9870);
/* harmony import */ var _components_screen_e_tank_e_tank_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/screen/e-tank/e-tank.component */ 4484);
/* harmony import */ var _components_screen_items_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/screen/items/items.component */ 3974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_megaman2_megaman2_component__WEBPACK_IMPORTED_MODULE_1__.Megaman2Component, _components_password_board_password_board_component__WEBPACK_IMPORTED_MODULE_2__.PasswordBoardComponent, _components_screen_password_screen_password_screen_component__WEBPACK_IMPORTED_MODULE_3__.PasswordScreenComponent, _components_screen_marker_marker_component__WEBPACK_IMPORTED_MODULE_4__.MarkerComponent, _components_screen_boss_screen_boss_screen_component__WEBPACK_IMPORTED_MODULE_5__.BossScreenComponent, _components_screen_boss_boss_component__WEBPACK_IMPORTED_MODULE_6__.BossComponent, _components_screen_e_tank_e_tank_component__WEBPACK_IMPORTED_MODULE_7__.ETankComponent, _components_screen_items_items_component__WEBPACK_IMPORTED_MODULE_8__.ItemsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule]
  });
})();

/***/ }),

/***/ 8222:
/*!***********************************************************!*\
  !*** ./src/app/components/megaman2/megaman2.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Megaman2Component": () => (/* binding */ Megaman2Component)
/* harmony export */ });
/* harmony import */ var src_app_models_password_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/password.model */ 8824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _screen_password_screen_password_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screen/password-screen/password-screen.component */ 5430);



class Megaman2Component {
  constructor() {
    this.password = new src_app_models_password_model__WEBPACK_IMPORTED_MODULE_0__.Password();
  }
  get passwordCoordinates() {
    const coords = [];
    for (let coordinate of this.password.compute) {
      coords.push(coordinate.xy);
    }
    return coords;
  }
  setEtanks(etanks) {
    const isIncrement = etanks > this.password.currentEtanks;
    let pendingChanges = Math.abs(this.password.currentEtanks - etanks);
    console.debug('etanks', etanks);
    console.debug('isIncrement', isIncrement);
    console.debug('pendingChanges', pendingChanges);
    while (pendingChanges-- > 0) {
      if (isIncrement) {
        this.password.incEtanks();
        console.debug('inc');
      } else {
        this.password.decEtanks();
        console.debug('dec');
      }
    }
  }
}
Megaman2Component.ɵfac = function Megaman2Component_Factory(t) {
  return new (t || Megaman2Component)();
};
Megaman2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: Megaman2Component,
  selectors: [["mm2-megaman2"]],
  decls: 5,
  vars: 2,
  consts: [[1, "container"], [3, "password", "title"], ["href", "https://github.com/bugtamer/megaman2/"]],
  template: function Megaman2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mm2-password-screen", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small")(3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Git repo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("password", ctx.password)("title", ctx.passwordCoordinates);
    }
  },
  dependencies: [_screen_password_screen_password_screen_component__WEBPACK_IMPORTED_MODULE_1__.PasswordScreenComponent],
  styles: [".container[_ngcontent-%COMP%] {\n  width: 336px;\n  padding: 0;\n  margin: 1em 0;\n  text-align: center;\n}\n\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:visited {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZWdhbWFuMi9tZWdhbWFuMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0VBSUUsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMzZweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hOmFjdGl2ZSxcbmE6bGluayxcbmE6aG92ZXIsXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogd2hpdGU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 931:
/*!***********************************************************************!*\
  !*** ./src/app/components/password-board/password-board.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordBoardComponent": () => (/* binding */ PasswordBoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function PasswordBoardComponent_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1[5]);
  }
}
class PasswordBoardComponent {
  constructor() {
    this.data = [];
  }
  get rows() {
    const rows = [];
    for (let x of this.rowHeader) {
      const newRow = [x];
      for (let y of this.colHeader) {
        const marker = this.getMarker(x, y);
        newRow.push(marker);
      }
      rows.push(newRow);
    }
    return rows;
  }
  // LOWER LEVEL IMPLEMENTATION DETAILS
  getMarker(x, y) {
    const target = `${x}${y}`;
    const wasFound = this.data.find(candidate => candidate.xy === target);
    return wasFound ? '●' : '';
  }
  get colHeader() {
    return ['1', '2', '3', '4', '5'];
  }
  get rowHeader() {
    return ['A', 'B', 'C', 'D', 'E'];
  }
}
PasswordBoardComponent.ɵfac = function PasswordBoardComponent_Factory(t) {
  return new (t || PasswordBoardComponent)();
};
PasswordBoardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PasswordBoardComponent,
  selectors: [["mm2-password-board"]],
  inputs: {
    data: "data"
  },
  decls: 14,
  vars: 1,
  consts: [[1, "hide"], [4, "ngFor", "ngForOf"]],
  template: function PasswordBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table")(1, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PasswordBoardComponent_tr_13_Template, 13, 6, "tr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n\ntd[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 0.5em 0.5em;\n  margin: 0.5em 0.5em;\n  height: 2em;  \n  width: 2em;\n  text-align: center;\n  vertical-align: middle;\n  color: #d84008;\n}\n\n.hide[_ngcontent-%COMP%] {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1ib2FyZC9wYXNzd29yZC1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xuICBtYXJnaW46IDAuNWVtIDAuNWVtO1xuICBoZWlnaHQ6IDJlbTsgIFxuICB3aWR0aDogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjZDg0MDA4O1xufVxuXG4uaGlkZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9659:
/*!************************************************************************!*\
  !*** ./src/app/components/screen/boss-screen/boss-screen.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BossScreenComponent": () => (/* binding */ BossScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _boss_boss_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../boss/boss.component */ 9870);


class BossScreenComponent {}
BossScreenComponent.ɵfac = function BossScreenComponent_Factory(t) {
  return new (t || BossScreenComponent)();
};
BossScreenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BossScreenComponent,
  selectors: [["mm2-boss-screen"]],
  inputs: {
    password: "password"
  },
  decls: 9,
  vars: 8,
  consts: [[1, "screen"], ["x", "112", "y", "31", 1, "boss", 3, "boss", "change"], ["x", "48", "y", "31", 1, "boss", 3, "boss", "change"], ["x", "176", "y", "159", 1, "boss", 3, "boss", "change"], ["x", "112", "y", "159", 1, "boss", 3, "boss", "change"], ["x", "48", "y", "95", 1, "boss", 3, "boss", "change"], ["x", "48", "y", "159", 1, "boss", 3, "boss", "change"], ["x", "176", "y", "23", 1, "boss", 3, "boss", "change"], ["x", "176", "y", "95", 1, "boss", 3, "boss", "change"]],
  template: function BossScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mm2-boss", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BossScreenComponent_Template_mm2_boss_change_1_listener() {
        return ctx.password.airman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mm2-boss", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BossScreenComponent_Template_mm2_boss_change_2_listener() {
        return ctx.password.bubbleman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mm2-boss", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BossScreenComponent_Template_mm2_boss_change_3_listener() {
        return ctx.password.crashman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mm2-boss", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BossScreenComponent_Template_mm2_boss_change_4_listener() {
        return ctx.password.flashman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mm2-boss", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BossScreenComponent_Template_mm2_boss_change_5_listener() {
        return ctx.password.heatman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mm2-boss", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BossScreenComponent_Template_mm2_boss_change_6_listener() {
        return ctx.password.metalman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mm2-boss", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BossScreenComponent_Template_mm2_boss_change_7_listener() {
        return ctx.password.quickman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mm2-boss", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BossScreenComponent_Template_mm2_boss_change_8_listener() {
        return ctx.password.woodman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boss", ctx.password.airman);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boss", ctx.password.bubbleman);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boss", ctx.password.crashman);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boss", ctx.password.flashman);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boss", ctx.password.heatman);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boss", ctx.password.metalman);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boss", ctx.password.quickman);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("boss", ctx.password.woodman);
    }
  },
  dependencies: [_boss_boss_component__WEBPACK_IMPORTED_MODULE_0__.BossComponent],
  styles: [".screen[_ngcontent-%COMP%] {\n  position: relative;\n  \n  width:  256px;\n  height: 240px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW4vYm9zcy1zY3JlZW4vYm9zcy1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiw0RUFBNEU7RUFDNUUsYUFBYTtFQUNiLGFBQWE7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ib3NzZXMvYm9zcy1zY3JlZW4ucG5nJyk7ICovXG4gIHdpZHRoOiAgMjU2cHg7XG4gIGhlaWdodDogMjQwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9870:
/*!**********************************************************!*\
  !*** ./src/app/components/screen/boss/boss.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BossComponent": () => (/* binding */ BossComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);



const _c0 = ["boss"];
class BossComponent {
  // LIFE CYCLE
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngAfterViewInit() {
    this.setImageXY();
  }
  get isDefeated() {
    return this.boss.isDefeated;
  }
  get url() {
    const bossName = this.boss.name.toLowerCase();
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBasePath + `bosses/${bossName}.png`;
  }
  get name() {
    return this.item ? `${this.boss.name} + ${this.item}` : this.boss.name;
  }
  get item() {
    const item = this.boss.item[1];
    return item ? item.substr(4, item.length) : '';
  }
  onClick() {
    this.change.emit();
  }
  // LOWER LEVEL IMPLEMENTATION DETAILS
  setImageXY() {
    if (this.isReady) {
      this.bossRef.nativeElement.style.top = this.y + 'px';
      this.bossRef.nativeElement.style.left = this.x + 'px';
    }
  }
  get isReady() {
    return this.bossRef !== undefined && this.bossRef.nativeElement !== undefined;
  }
}
BossComponent.ɵfac = function BossComponent_Factory(t) {
  return new (t || BossComponent)();
};
BossComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BossComponent,
  selectors: [["mm2-boss"]],
  viewQuery: function BossComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bossRef = _t.first);
    }
  },
  inputs: {
    boss: "boss",
    x: "x",
    y: "y"
  },
  outputs: {
    change: "change"
  },
  decls: 2,
  vars: 5,
  consts: [[1, "boss", "fade-in-out", 3, "src", "alt", "title", "click"], ["boss", ""]],
  template: function BossComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BossComponent_Template_img_click_0_listener() {
        return ctx.onClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("isDefeated", ctx.isDefeated);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.name)("title", ctx.name);
    }
  },
  styles: [".boss[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n}\n\n.isDefeated[_ngcontent-%COMP%] {\n  opacity: .25;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW4vYm9zcy9ib3NzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5ib3NzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pc0RlZmVhdGVkIHtcbiAgb3BhY2l0eTogLjI1O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4484:
/*!**************************************************************!*\
  !*** ./src/app/components/screen/e-tank/e-tank.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ETankComponent": () => (/* binding */ ETankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);



const _c0 = ["etank"];
class ETankComponent {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngAfterViewInit() {
    this.setImageXY();
  }
  get isNotSelected() {
    return this.etank != this.currentEtank;
  }
  get label() {
    return `${this.etank} E-tanks`;
  }
  get quantityImage() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBasePath + `numbers/${this.etank}.png`;
  }
  get etankImage() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBasePath + 'e.png';
  }
  onSelect() {
    this.change.emit(+this.etank);
  }
  setImageXY() {
    if (this.isReady) {
      this.etankRef.nativeElement.style.top = this.y + 'px';
      this.etankRef.nativeElement.style.left = this.x + 'px';
    }
  }
  get isReady() {
    return this.etankRef !== undefined && this.etankRef.nativeElement !== undefined;
  }
}
ETankComponent.ɵfac = function ETankComponent_Factory(t) {
  return new (t || ETankComponent)();
};
ETankComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ETankComponent,
  selectors: [["mm2-e-tank"]],
  viewQuery: function ETankComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.etankRef = _t.first);
    }
  },
  inputs: {
    etank: "etank",
    currentEtank: "currentEtank",
    x: "x",
    y: "y"
  },
  outputs: {
    change: "change"
  },
  decls: 4,
  vars: 10,
  consts: [[3, "click"], ["etank", ""], [1, "number", 3, "src", "alt", "title"], [3, "src", "alt", "title"]],
  template: function ETankComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ETankComponent_Template_span_click_0_listener() {
        return ctx.onSelect();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2)(3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fade-in-out", ctx.isNotSelected)("shadow", ctx.isNotSelected);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.quantityImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.label)("title", ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.etankImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.label)("title", ctx.label);
    }
  },
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: black;\n  padding: 8px 8px;\n  width: 100%;\n}\n\nspan[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 8px 8px;\n  align-items: center;\n}\n\n.number[_ngcontent-%COMP%] {\n    margin-bottom: 4px;\n    margin-right: 4px;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  opacity: .25;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW4vZS10YW5rL2UtdGFuay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5zcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDhweCA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5udW1iZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLnNoYWRvdyB7XG4gIG9wYWNpdHk6IC4yNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3974:
/*!************************************************************!*\
  !*** ./src/app/components/screen/items/items.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsComponent": () => (/* binding */ ItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);



class ItemsComponent {
  constructor() {
    this.heatmanChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.airmanChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.flashmanChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  onHeatmanClick() {
    this.heatmanChange.emit();
  }
  onAirmanClick() {
    this.airmanChange.emit();
  }
  onFlashmanClick() {
    this.flashmanChange.emit();
  }
  get heatmanUrl() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBasePath + 'items/item-1.png';
  }
  get airmanUrl() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBasePath + 'items/item-2.png';
  }
  get flashmanUrl() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBasePath + 'items/item-3.png';
  }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) {
  return new (t || ItemsComponent)();
};
ItemsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ItemsComponent,
  selectors: [["mm2-items"]],
  inputs: {
    password: "password"
  },
  outputs: {
    heatmanChange: "heatmanChange",
    airmanChange: "airmanChange",
    flashmanChange: "flashmanChange"
  },
  decls: 3,
  vars: 9,
  consts: [["alt", "Heatman - Item 1", "title", "Heatman - Item 1", 1, "item", "fade-in-out", 2, "left", "200px", "top", "240px", 3, "src", "click"], ["alt", "Airman - Item 2", "title", "Airman - Item 2", 1, "item", "fade-in-out", 2, "left", "232px", "top", "240px", 3, "src", "click"], ["alt", "Flashman - Item 3", "title", "Flashman - Item 3", 1, "item", "fade-in-out", 2, "left", "272px", "top", "240px", 3, "src", "click"]],
  template: function ItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemsComponent_Template_img_click_0_listener() {
        return ctx.onHeatmanClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemsComponent_Template_img_click_1_listener() {
        return ctx.onAirmanClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemsComponent_Template_img_click_2_listener() {
        return ctx.onFlashmanClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("isNotObtained", !(ctx.password == null ? null : ctx.password.heatman == null ? null : ctx.password.heatman.isDefeated));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.heatmanUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("isNotObtained", !(ctx.password == null ? null : ctx.password.airman == null ? null : ctx.password.airman.isDefeated));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.airmanUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("isNotObtained", !(ctx.password == null ? null : ctx.password.flashman == null ? null : ctx.password.flashman.isDefeated));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.flashmanUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  styles: [".item[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n}\n\n.isNotObtained[_ngcontent-%COMP%] {\n  opacity: .25;\n}\n\n.heatman[_ngcontent-%COMP%] {\n  top:   200px;\n  right: 136px;\n}\n\n.airman[_ngcontent-%COMP%] {\n  top:   232px;\n  right: 136px;\n}\n\n.flashman[_ngcontent-%COMP%] {\n  top:   272px;\n  right: 136px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW4vaXRlbXMvaXRlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlzTm90T2J0YWluZWQge1xuICBvcGFjaXR5OiAuMjU7XG59XG5cbi5oZWF0bWFuIHtcbiAgdG9wOiAgIDIwMHB4O1xuICByaWdodDogMTM2cHg7XG59XG5cbi5haXJtYW4ge1xuICB0b3A6ICAgMjMycHg7XG4gIHJpZ2h0OiAxMzZweDtcbn1cblxuLmZsYXNobWFuIHtcbiAgdG9wOiAgIDI3MnB4O1xuICByaWdodDogMTM2cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4141:
/*!**************************************************************!*\
  !*** ./src/app/components/screen/marker/marker.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerComponent": () => (/* binding */ MarkerComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const _c0 = ["marker"];
const IMAGE_X_OFFSET = 173;
const IMAGE_Y_OFFSET = 69;
const SEPARATION = 16;
const A_CHAR_CODE = 65;
class MarkerComponent {
  ngOnChanges(changes) {
    this.putMarker();
  }
  get url() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBasePath + 'marker.png';
  }
  // LOWER LEVEL IMPLEMENTATION DETAILS
  putMarker() {
    if (this.isReady) {
      this.markerRef.nativeElement.style.top = `${this.x}px`;
      this.markerRef.nativeElement.style.left = `${this.y}px`;
    }
  }
  get x() {
    const x = this.xy.x.charCodeAt(0) - A_CHAR_CODE;
    return IMAGE_X_OFFSET + SEPARATION * x;
  }
  get y() {
    const y = this.xy.y - 1;
    return IMAGE_Y_OFFSET + SEPARATION * y;
  }
  get isReady() {
    return this.markerRef !== undefined && this.markerRef.nativeElement !== undefined;
  }
}
MarkerComponent.ɵfac = function MarkerComponent_Factory(t) {
  return new (t || MarkerComponent)();
};
MarkerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MarkerComponent,
  selectors: [["mm2-marker"]],
  viewQuery: function MarkerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.markerRef = _t.first);
    }
  },
  inputs: {
    xy: "xy"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 3,
  consts: [[1, "marker", 3, "src", "alt", "title"], ["marker", ""]],
  template: function MarkerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0, 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.xy.xy)("title", ctx.xy.xy);
    }
  },
  styles: [".marker[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW4vbWFya2VyL21hcmtlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmtlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5430:
/*!********************************************************************************!*\
  !*** ./src/app/components/screen/password-screen/password-screen.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordScreenComponent": () => (/* binding */ PasswordScreenComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _marker_marker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../marker/marker.component */ 4141);
/* harmony import */ var _boss_boss_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boss/boss.component */ 9870);
/* harmony import */ var _e_tank_e_tank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../e-tank/e-tank.component */ 4484);
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/items.component */ 3974);






class PasswordScreenComponent {
  setEtanks(etanks) {
    const isIncrement = etanks > this.password.currentEtanks;
    let pendingChanges = Math.abs(this.password.currentEtanks - etanks);
    while (pendingChanges-- > 0) {
      if (isIncrement) {
        this.password.incEtanks();
      } else {
        this.password.decEtanks();
      }
    }
  }
  get url() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBasePath + 'screen.png';
  }
}
PasswordScreenComponent.ɵfac = function PasswordScreenComponent_Factory(t) {
  return new (t || PasswordScreenComponent)();
};
PasswordScreenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PasswordScreenComponent,
  selectors: [["mm2-password-screen"]],
  inputs: {
    password: "password"
  },
  decls: 25,
  vars: 24,
  consts: [[1, "screen"], ["alt", "", 3, "src"], [3, "xy"], ["x", "118", "y", "318", 1, "boss", 3, "boss", "change"], ["x", "54", "y", "318", 1, "boss", 3, "boss", "change"], ["x", "246", "y", "398", 1, "boss", 3, "boss", "change"], ["x", "182", "y", "398", 1, "boss", 3, "boss", "change"], ["x", "246", "y", "318", 1, "boss", 3, "boss", "change"], ["x", "118", "y", "398", 1, "boss", 3, "boss", "change"], ["x", "182", "y", "310", 1, "boss", 3, "boss", "change"], ["x", "54", "y", "398", 1, "boss", 3, "boss", "change"], ["etank", "0", "x", "212", "y", "140", 3, "currentEtank", "change"], ["etank", "1", "x", "244", "y", "140", 3, "currentEtank", "change"], ["etank", "2", "x", "196", "y", "164", 3, "currentEtank", "change"], ["etank", "3", "x", "228", "y", "164", 3, "currentEtank", "change"], ["etank", "4", "x", "258", "y", "164", 3, "currentEtank", "change"], [3, "password", "heatmanChange", "airmanChange", "flashmanChange"]],
  template: function PasswordScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 1)(2, "mm2-marker", 2)(3, "mm2-marker", 2)(4, "mm2-marker", 2)(5, "mm2-marker", 2)(6, "mm2-marker", 2)(7, "mm2-marker", 2)(8, "mm2-marker", 2)(9, "mm2-marker", 2)(10, "mm2-marker", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mm2-boss", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_boss_change_11_listener() {
        return ctx.password.airman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mm2-boss", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_boss_change_12_listener() {
        return ctx.password.bubbleman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mm2-boss", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_boss_change_13_listener() {
        return ctx.password.crashman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mm2-boss", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_boss_change_14_listener() {
        return ctx.password.flashman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mm2-boss", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_boss_change_15_listener() {
        return ctx.password.heatman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mm2-boss", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_boss_change_16_listener() {
        return ctx.password.metalman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mm2-boss", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_boss_change_17_listener() {
        return ctx.password.quickman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mm2-boss", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_boss_change_18_listener() {
        return ctx.password.woodman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mm2-e-tank", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_e_tank_change_19_listener($event) {
        return ctx.setEtanks($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mm2-e-tank", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_e_tank_change_20_listener($event) {
        return ctx.setEtanks($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mm2-e-tank", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_e_tank_change_21_listener($event) {
        return ctx.setEtanks($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mm2-e-tank", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_e_tank_change_22_listener($event) {
        return ctx.setEtanks($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mm2-e-tank", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PasswordScreenComponent_Template_mm2_e_tank_change_23_listener($event) {
        return ctx.setEtanks($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mm2-items", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("heatmanChange", function PasswordScreenComponent_Template_mm2_items_heatmanChange_24_listener() {
        return ctx.password.heatman.toggleIsDefeated();
      })("airmanChange", function PasswordScreenComponent_Template_mm2_items_airmanChange_24_listener() {
        return ctx.password.airman.toggleIsDefeated();
      })("flashmanChange", function PasswordScreenComponent_Template_mm2_items_flashmanChange_24_listener() {
        return ctx.password.flashman.toggleIsDefeated();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("xy", ctx.password.etanks.clone());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("xy", ctx.password.airman.xy.clone());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("xy", ctx.password.bubbleman.xy.clone());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("xy", ctx.password.crashman.xy.clone());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("xy", ctx.password.flashman.xy.clone());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("xy", ctx.password.heatman.xy.clone());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("xy", ctx.password.metalman.xy.clone());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("xy", ctx.password.quickman.xy.clone());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("xy", ctx.password.woodman.xy.clone());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boss", ctx.password.airman);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boss", ctx.password.bubbleman);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boss", ctx.password.crashman);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boss", ctx.password.flashman);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boss", ctx.password.heatman);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boss", ctx.password.metalman);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boss", ctx.password.quickman);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boss", ctx.password.woodman);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentEtank", ctx.password.currentEtanks);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentEtank", ctx.password.currentEtanks);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentEtank", ctx.password.currentEtanks);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentEtank", ctx.password.currentEtanks);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentEtank", ctx.password.currentEtanks);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("password", ctx.password);
    }
  },
  dependencies: [_marker_marker_component__WEBPACK_IMPORTED_MODULE_1__.MarkerComponent, _boss_boss_component__WEBPACK_IMPORTED_MODULE_2__.BossComponent, _e_tank_e_tank_component__WEBPACK_IMPORTED_MODULE_3__.ETankComponent, _items_items_component__WEBPACK_IMPORTED_MODULE_4__.ItemsComponent],
  styles: [".screen[_ngcontent-%COMP%] {\n  position: relative;\n  \n  width:  336px;\n  height: 504px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zY3JlZW4vcGFzc3dvcmQtc2NyZWVuL3Bhc3N3b3JkLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFEQUFxRDtFQUNyRCxhQUFhO0VBQ2IsYUFBYTtBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcmVlbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9zY3JlZW4ucG5nJyk7ICovXG4gIHdpZHRoOiAgMzM2cHg7XG4gIGhlaWdodDogNTA0cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9667:
/*!**************************************!*\
  !*** ./src/app/models/boss.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boss": () => (/* binding */ Boss)
/* harmony export */ });
class Boss {
  constructor(name, alive, dead, item) {
    this.isDefeated = false;
    this.name = name;
    this.alive = alive;
    this.dead = dead;
    this.item = item;
  }
  nextCoordinate() {
    this.alive.next();
    this.dead.next();
  }
  previousCoordinate() {
    this.alive.previous();
    this.dead.previous();
  }
  toggleIsDefeated() {
    this.isDefeated = !this.isDefeated;
  }
  get index() {
    return this.xy.toIndex;
  }
  get xy() {
    return this.isDefeated ? this.dead : this.alive;
  }
}

/***/ }),

/***/ 8017:
/*!********************************************!*\
  !*** ./src/app/models/coordinate.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Coordinate": () => (/* binding */ Coordinate)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_ascii_parser_ascii_parser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/ascii-parser/ascii-parser.service */ 7779);


const INJECTOR = _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector.create({
  providers: [{
    provide: _services_ascii_parser_ascii_parser_service__WEBPACK_IMPORTED_MODULE_0__.AsciiParserService,
    deps: []
  }]
});
class Coordinate {
  constructor(x, y) {
    this.parser = INJECTOR.get(_services_ascii_parser_ascii_parser_service__WEBPACK_IMPORTED_MODULE_0__.AsciiParserService);
    this.xCharCode = this.parser.letterToCharCode(x);
    this.yCharCode = this.parser.numberToCharCode(y);
  }
  get xy() {
    return String.fromCharCode(this.xCharCode, this.yCharCode);
  }
  get x() {
    return String.fromCharCode(this.xCharCode);
  }
  get y() {
    return this.parser.numberCharCodeToNumber(this.yCharCode);
  }
  get toIndex() {
    const x = this.parser.numberCharCodeToNumber(this.xCharCode);
    const y = this.parser.letterCharCodeToNumber(this.yCharCode);
    const rowNumber = this.parser.numberCharCodeToNumber(this.xLastRowCharCode);
    return rowNumber * y + x;
  }
  next() {
    if (this.isEtankUpperLimit) {
      this.yCharCode = this.yFirstColumCharCode;
      return;
    }
    if (this.isBossUpperLimit) {
      this.xCharCode = this.xSecondRowCharCode;
      this.yCharCode = this.yFirstColumCharCode;
      return;
    }
    if (this.isLastColumn) {
      this.xCharCode++;
      this.yCharCode = this.yFirstColumCharCode;
    } else {
      this.yCharCode++;
    }
  }
  previous() {
    if (this.isEtankLowerLimit) {
      this.yCharCode = this.yLastColumCharCode;
      return;
    }
    if (this.isBossLowerLimit) {
      this.xCharCode = this.xLastRowCharCode;
      this.yCharCode = this.yLastColumCharCode;
      return;
    }
    if (this.isFirstColumn) {
      this.xCharCode--;
      this.yCharCode = this.yLastColumCharCode;
    } else {
      this.yCharCode--;
    }
  }
  clone() {
    const x = this.x;
    const y = this.y;
    return new Coordinate(x, y);
  }
  // LOWER LEVEL IMPLEMENTATION DETAILS
  get isEtankLowerLimit() {
    return this.isFirstRow && this.isFirstColumn;
  }
  get isEtankUpperLimit() {
    return this.isFirstRow && this.isLastColumn;
  }
  get isBossLowerLimit() {
    return this.isSecondRow && this.isFirstColumn;
  }
  get isBossUpperLimit() {
    return this.isLastRow && this.isLastColumn;
  }
  get isFirstRow() {
    return this.xCharCode === this.xFirstRowCharCode;
  }
  get isSecondRow() {
    return this.xCharCode === this.xSecondRowCharCode;
  }
  get isLastRow() {
    return this.xCharCode === this.xLastRowCharCode;
  }
  get isFirstColumn() {
    return this.yCharCode === this.yFirstColumCharCode;
  }
  get isLastColumn() {
    return this.yCharCode === this.yLastColumCharCode;
  }
  get xFirstRowCharCode() {
    return this.parser.letterToCharCode('A');
  }
  get xSecondRowCharCode() {
    return this.parser.letterToCharCode('B');
  }
  get xLastRowCharCode() {
    return this.parser.letterToCharCode('E');
  }
  get yFirstColumCharCode() {
    return this.parser.numberToCharCode(Coordinate.Y_MIN);
  }
  get yLastColumCharCode() {
    return this.parser.numberToCharCode(Coordinate.Y_MAX);
  }
}
Coordinate.Y_MIN = 1;
Coordinate.Y_MAX = 5;

/***/ }),

/***/ 8824:
/*!******************************************!*\
  !*** ./src/app/models/password.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Password": () => (/* binding */ Password)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_initial_state_initial_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/initial-state/initial-state.service */ 7896);
/* harmony import */ var _coordinate_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinate.model */ 8017);



const INJECTOR = _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({
  providers: [{
    provide: _services_initial_state_initial_state_service__WEBPACK_IMPORTED_MODULE_0__.InitialStateService,
    deps: []
  }]
});
class Password {
  constructor() {
    this.initialState = INJECTOR.get(_services_initial_state_initial_state_service__WEBPACK_IMPORTED_MODULE_0__.InitialStateService);
    this.etanks = this.initialState.etanks();
    this.airman = this.initialState.airman();
    this.bubbleman = this.initialState.bubbleman();
    this.crashman = this.initialState.crashman();
    this.flashman = this.initialState.flashman();
    this.heatman = this.initialState.heatman();
    this.metalman = this.initialState.metalman();
    this.quickman = this.initialState.quickman();
    this.woodman = this.initialState.woodman();
  }
  get compute() {
    const cartesianCoordinates = [this.etanks];
    for (let boss of this.bosses) {
      cartesianCoordinates.push(boss.xy);
    }
    return cartesianCoordinates;
  }
  incEtanks() {
    if (this.etanks.y < _coordinate_model__WEBPACK_IMPORTED_MODULE_1__.Coordinate.Y_MAX) {
      this.etanks.next();
      for (let boss of this.bosses) {
        boss.nextCoordinate();
      }
    }
  }
  decEtanks() {
    if (this.etanks.y > _coordinate_model__WEBPACK_IMPORTED_MODULE_1__.Coordinate.Y_MIN) {
      this.etanks.previous();
      for (let boss of this.bosses) {
        boss.previousCoordinate();
      }
    }
  }
  get currentEtanks() {
    const yOffset = 1;
    return this.etanks.y - yOffset;
  }
  get bosses() {
    const bosses = [];
    bosses.push(this.bubbleman);
    bosses.push(this.heatman);
    bosses.push(this.airman);
    bosses.push(this.woodman);
    bosses.push(this.quickman);
    bosses.push(this.flashman);
    bosses.push(this.crashman);
    bosses.push(this.metalman);
    return bosses;
  }
}

/***/ }),

/***/ 7779:
/*!***************************************************************!*\
  !*** ./src/app/services/ascii-parser/ascii-parser.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsciiParserService": () => (/* binding */ AsciiParserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AsciiParserService {
  numberCharCodeToNumber(number) {
    const numberOffset = this.numberToCharCode(0);
    return number - numberOffset;
  }
  letterCharCodeToNumber(letter) {
    const letterOffset = this.letterToCharCode('A') - 1;
    return letter - letterOffset;
  }
  numberToCharCode(singleDigit) {
    return this.letterToCharCode(`${singleDigit}`);
  }
  letterToCharCode(singleLetter) {
    const firstChar = 0;
    return singleLetter.charCodeAt(firstChar);
  }
}
AsciiParserService.ɵfac = function AsciiParserService_Factory(t) {
  return new (t || AsciiParserService)();
};
AsciiParserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AsciiParserService,
  factory: AsciiParserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7896:
/*!*****************************************************************!*\
  !*** ./src/app/services/initial-state/initial-state.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialStateService": () => (/* binding */ InitialStateService)
/* harmony export */ });
/* harmony import */ var src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/coordinate.model */ 8017);
/* harmony import */ var src_app_models_boss_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/boss.model */ 9667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class InitialStateService {
  etanks() {
    return new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('A', 1);
  }
  airman() {
    const alive = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('D', 2);
    const dead = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('E', 3);
    const item = ['(A) Airman', '(2) Item-2'];
    return new src_app_models_boss_model__WEBPACK_IMPORTED_MODULE_1__.Boss('Airman', alive, dead, item);
  }
  bubbleman() {
    const alive = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('C', 3);
    const dead = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('D', 1);
    const item = ['(B) Bubbleman'];
    return new src_app_models_boss_model__WEBPACK_IMPORTED_MODULE_1__.Boss('Bubbleman', alive, dead, item);
  }
  crashman() {
    const alive = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('E', 2);
    const dead = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('C', 5);
    const item = ['(C) Crashman'];
    return new src_app_models_boss_model__WEBPACK_IMPORTED_MODULE_1__.Boss('Crashman', alive, dead, item);
  }
  flashman() {
    const alive = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('E', 4);
    const dead = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('C', 1);
    const item = ['(F) Flashman', '(3) Item-3'];
    return new src_app_models_boss_model__WEBPACK_IMPORTED_MODULE_1__.Boss('Flashman', alive, dead, item);
  }
  heatman() {
    const alive = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('D', 5);
    const dead = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('B', 2);
    const item = ['(H) Heatman', '(1) Item-1'];
    return new src_app_models_boss_model__WEBPACK_IMPORTED_MODULE_1__.Boss('Heatman', alive, dead, item);
  }
  metalman() {
    const alive = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('E', 1);
    const dead = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('E', 5);
    const item = ['(M) Metalman'];
    return new src_app_models_boss_model__WEBPACK_IMPORTED_MODULE_1__.Boss('Metalman', alive, dead, item);
  }
  quickman() {
    const alive = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('C', 4);
    const dead = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('B', 4);
    const item = ['(Q) Quickman'];
    return new src_app_models_boss_model__WEBPACK_IMPORTED_MODULE_1__.Boss('Quickman', alive, dead, item);
  }
  woodman() {
    const alive = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('B', 5);
    const dead = new src_app_models_coordinate_model__WEBPACK_IMPORTED_MODULE_0__.Coordinate('D', 3);
    const item = ['(W) Woodman'];
    return new src_app_models_boss_model__WEBPACK_IMPORTED_MODULE_1__.Boss('Woodman', alive, dead, item);
  }
}
InitialStateService.ɵfac = function InitialStateService_Factory(t) {
  return new (t || InitialStateService)();
};
InitialStateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: InitialStateService,
  factory: InitialStateService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  imageBasePath: '../../../../assets/img/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map