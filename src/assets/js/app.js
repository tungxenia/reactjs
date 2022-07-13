/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style/js/app.ts":
/*!*************************!*\
  !*** ./style/js/app.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_Init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/Init */ \"./style/js/common/Init.js\");\n/* harmony import */ var _controllers_HeaderController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/HeaderController */ \"./style/js/controllers/HeaderController.js\");\n//= ========================================================================\n//      Component: Main\n//      Author: TungNV\n//      Email: tungvan11t2@gmail.com\n//      Description: Demo typescript\n//= ========================================================================= \n\n\n\n\nnew _common_Init__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    header: _controllers_HeaderController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack://tungxenia/./style/js/app.ts?");

/***/ }),

/***/ "./style/js/common/Init.js":
/*!*********************************!*\
  !*** ./style/js/common/Init.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Init {\n    constructor(functions) {\n        this.core = {};\n        this.functions = functions;\n        this.events = [\"scroll\", \"resize\"];\n\n        this.init();\n    }\n\n    static presentError(operation, error) {\n        if (typeof console === \"undefined\") {\n            return;\n        }\n        if (console.groupCollapsed) {\n            console.groupCollapsed(`%c [${operation} error] - ${error.message}. Expand for details:`, \"color: #ff5a5a\");\n            console.log(error.stack);\n            console.groupEnd();\n        } else {\n            console.log(error.stack);\n        }\n    }\n\n    init() {\n        Object.keys(this.functions).forEach(k => {\n            this.bindEvents(k, this.functions[k]);\n        });\n    }\n\n    setInstance(Module) {\n        if (typeof Module === \"function\") {\n            return new Module();\n        }\n\n        return Module;\n    }\n\n    deBounce(instance, event) {\n        window.addEventListener(event, () => {\n            window.requestAnimationFrame ? window.requestAnimationFrame(() => instance[event]()) : instance[event]();\n        });\n    }\n\n    bindEvent(event, module) {\n        return typeof module[event] !== \"undefined\" ? this.deBounce(module, event) : null;\n    }\n\n    bindEvents(name, method) {\n        try {\n            const module = this.setInstance(method);\n\n            this.events.forEach(event => this.bindEvent(event, module));\n\n            this.core[name] = module;\n        } catch (error) {\n            Init.presentError(name, error);\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Init);\n\n//# sourceURL=webpack://tungxenia/./style/js/common/Init.js?");

/***/ }),

/***/ "./style/js/controllers/HeaderController.js":
/*!**************************************************!*\
  !*** ./style/js/controllers/HeaderController.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n//= ========================================================================\n//      Component: Header\n//      Author: TungNV\n//      Email: tungvan11t2@gmail.com\n//      Description: Demo typescript\n//= ========================================================================= \nclass Header {\n    constructor() {\n        const element = document.querySelector(\".js-header\");\n        if (element) {\n            this.bindEvent();\n        }\n    }\n\n    bindEvent() {\n        // input code\n    }\n}\n\n//# sourceURL=webpack://tungxenia/./style/js/controllers/HeaderController.js?");

/***/ }),

/***/ "./style/scss/app.scss":
/*!*****************************!*\
  !*** ./style/scss/app.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tungxenia/./style/scss/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./style/js/app.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./style/scss/app.scss");
/******/ 	
/******/ })()
;