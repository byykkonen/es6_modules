/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n\r\nconsole.log(\"Hello World\");\r\n\r\nlet wishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n//select the form\r\nlet form = document.querySelector(\"#submitForm\");\r\n//select the input for the car\r\nlet makeInput = document.querySelector(\"#makeInput\");\r\n//select the infput for the car model\r\nlet modelInput = document.querySelector(\"#modelInput\");\r\n//select the input for the year\r\nlet yearInput = document.querySelector(\"#yearInput\");\r\n//select the paragraph element for the car make\r\nlet makeDisplay = document.querySelector(\"#car-make\");\r\n//select the paragrph element for the car model\r\nlet modelDisplay = document.querySelector(\"#car-model\");\r\n//select the paragraph ele. for the car year\r\nlet yearDisplay = document.querySelector(\"#car-year\");\r\n//select the remove button\r\nlet removeBtn = document.querySelector(\"#removeBtn\");\r\n//select the wishlist unordered list element\r\nlet listUL = document.querySelector(\"#wishListContainer > ul\");\r\n\r\n//Event Listeners\r\nform.addEventListener(\"submit\", addCar);\r\n\r\nremoveBtn.addEventListener(\"click\", removeCar);\r\n\r\n//Functions\r\n\r\nfunction showCarDetailes(car) {\r\n    //update car display texts\r\n    makeDisplay.textContent = car.make;\r\n    modelDisplay.textContent = car.model;\r\n    yearDisplay.textContent = car.year;\r\n    //enable the remove button\r\n    removeBtn.disabled = false;\r\n    //set the current car's id to the data-carId attribute of removeBtn\r\n    removeBtn.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\nfunction updateDOMlist() {\r\n    //clear the ul contents\r\n    listUL.innerHTML = \"\";\r\n\r\n    //iterate through the list of cars\r\n    wishlist.list.forEach((car) => {\r\n        //add a li to the ul for each car\r\n        let li = document.createElement(\"li\")\r\n        li.textContent = car.model;\r\n        // add a click event listener to showCarDetails per list item click\r\n        li.addEventListener(\"click\", () => showCarDetailes(car));\r\n        listUL.appendChild(li);\r\n    });\r\n}\r\n\r\nfunction addCar(event) {\r\n    event.preventDefault();\r\n\r\n    let make = makeInput.value;\r\n    let model = modelInput.value;\r\n    let year = yearInput.value;\r\n\r\n    wishlist.add(make, model, year);\r\n\r\n    updateDOMlist();\r\n\r\n    //reset form values\r\n    makeInput.value = \"\";\r\n    modelInput = \"\";\r\n    yearInput = \"\";\r\n}\r\n\r\nfunction removeCar() {\r\n    //get the displayed car's id\r\n    let carId = Number(removeBtn.getAttribute(\"data-carId\"));\r\n\r\n    //remove the selected car\r\n    wishlist.remove(carId);\r\n\r\n    //update the dom list\r\n    updateDOMlist();\r\n\r\n    //reset display values\r\n    makeDisplay.textContent = \"\";\r\n    modelDisplay.textContent = \"\";\r\n    yearDisplay.textContent = \"\";\r\n\r\n    //disable remove button\r\n    removeBtn.disabled = true;\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './car'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\nclass Wishlist {\r\n    //two class properties\r\n    list = [];\r\n    nextId = 0;\r\n\r\n\r\n    //two methods\r\n    add(make, model, year){\r\n        //use the Car class to create a new car\r\n        let car = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './car'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.nextId++, make, model, year);\r\n        //add that car to the wishlist list\r\n        this.list.push(car);\r\n    }\r\n    remove(carId) {\r\n        //find the car in the wishlist list that matches the remove id\r\n        let index = this.list.findIndex((car) => car.id == carId);\r\n        //remove it and update wishlist list\r\n        this.list.splice(index, 1);\r\n        //or with filter\r\n        //this.list = this.list.filter((car) => car.id != carId);\r\n    }\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;