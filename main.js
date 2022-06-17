/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const content = document.getElementById("content");

function createContact() {
    content.innerHTML = "";
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.tabCreator)();
    const display = document.createElement("div");
    const contactHeader = document.createElement("h1");
    contactHeader.innerText = "Contact Us";
    display.appendChild(contactHeader);
    const manager = {
        img: "./gus.webp",
        name: "Gustavo Fring",
        phone: "555-555-5553",
        email: "therealgustavofring@lospollos.com"
    }
    const managerDetails = document.createElement("div");
    const managerImage = document.createElement("img");
    managerImage.src = manager.img;
    const managerName = document.createElement("p");
    managerName.textContent = manager.name;
    const managerPhone = document.createElement("p");
    managerPhone.textContent = manager.phone;
    const managerEmail = document.createElement("p");
    managerEmail.textContent = manager.email;
    managerDetails.appendChild(managerImage);
    managerDetails.appendChild(managerName);
    managerDetails.appendChild(managerPhone);
    managerDetails.appendChild(managerEmail);
    display.appendChild(managerDetails);

    const securityHead = {
        img: "./mike.jpeg",
        name: "Mike Ehrmantraut",
        phone: "666-666-6664",
        email: "michaelehrmantraut@lospollos.com"
    }

    const securityHeadDetails = document.createElement("div");
    const securityHeadImage = document.createElement("img");
    securityHeadImage.src = securityHead.img;
    const securityHeadName = document.createElement("p");
    securityHeadName.textContent = securityHead.name;
    const securityHeadPhone = document.createElement("p");
    securityHeadPhone.textContent = securityHead.phone;
    const securityHeadEmail = document.createElement("p");
    securityHeadEmail.textContent = securityHead.email;
    securityHeadDetails.appendChild(securityHeadImage);
    securityHeadDetails.appendChild(securityHeadName);
    securityHeadDetails.appendChild(securityHeadPhone);
    securityHeadDetails.appendChild(securityHeadEmail);

    display.appendChild(securityHeadDetails);
    content.appendChild(display);


}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabCreator": () => (/* binding */ tabCreator)
/* harmony export */ });
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
//alert("Hello");




function tabCreator() {
    const tabDiv = document.createElement("div");

    const homeButton = document.createElement("button");
    homeButton.innerText = "HOME";
    homeButton.addEventListener("click", function() {
        (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
    });
    const menuButton = document.createElement("button");
    menuButton. innerText = "MENU";
    menuButton.addEventListener("click", function() {
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)();
    });
    const aboutButton = document.createElement("button");
    aboutButton.innerText = "CONTACT";
    aboutButton.addEventListener("click", function() {
        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.createContact)();
    })

    tabDiv.appendChild(homeButton);
    tabDiv.appendChild(menuButton);
    tabDiv.appendChild(aboutButton);

    content.appendChild(tabDiv);
};



;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const content = document.getElementById("content");


function createMenu() {
    content.innerHTML = "";
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.tabCreator)();
    const display = document.createElement("div");
    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Menu";
    display.appendChild(menuHeader);
    const itemOne = {
        name: "Burger Delight",
        price: "$8.99",
        image: "../dist/burger.jpeg"
    }
    const itemOneDOM = document.createElement("div");
    const itemOneIMG = document.createElement("img");
    itemOneIMG.src = itemOne.image;
    itemOneDOM.appendChild(itemOneIMG);
    const itemOneName = document.createElement("p");
    itemOneName.innerHTML = itemOne.name;
    itemOneDOM.appendChild(itemOneName);
    const itemOnePrice = document.createElement("p");
    itemOnePrice.innerHTML = itemOne.price;
    itemOneDOM.appendChild(itemOnePrice);
    display.appendChild(itemOneDOM);

    const itemTwo = {
        name: "Pizza Pan",
        price: "$14.99",
        image: "../dist/pizza.jpeg"
    }
    const itemTwoDOM = document.createElement("div");
    const itemTwoIMG = document.createElement("img");
    itemTwoIMG.src = itemTwo.image;
    itemTwoDOM.appendChild(itemTwoIMG);
    const itemTwoName = document.createElement("p");
    itemTwoName.innerHTML = itemTwo.name;
    itemTwoDOM.appendChild(itemTwoName);
    const itemTwoPrice = document.createElement("p");
    itemTwoPrice.innerHTML = itemTwo.price;
    itemTwoDOM.appendChild(itemTwoPrice);
    display.appendChild(itemTwoDOM);

    content.appendChild(display);
}



/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function pageLoad() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.tabCreator)();

    const display = document.createElement("div");
    const heading = document.createElement("h1");
    heading.innerText = "WELCOME TO LOS POLLOS HERMANOS";
    display.appendChild(heading);
    const logo = document.createElement("img");
    logo.src = "../dist/lospollos.png";
    display.appendChild(logo);
    const description = document.createElement("p");
    description.innerText = "Los Pollos Hermanos is a fictional fast food restaurant chain specializing in chicken that was featured in the television series Breaking Bad. Los Pollos Hermanos is featured as a front organization for Gus Fring's meth manufacturing and distribution operation, but is also highly regarded by the general public of the Southwest as a regional chain on par with KFC."
    display.appendChild(description);

    content.appendChild(display);
}





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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUN3QztBQUNFO0FBQ047O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBUTtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVtQjs7QUFFbkIsd0RBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZ0M7O0FBRXhDOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSxxREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFiQ3JlYXRvciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRhYkNyZWF0b3IoKTtcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnRhY3RIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzXCI7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICBjb25zdCBtYW5hZ2VyID0ge1xuICAgICAgICBpbWc6IFwiLi9ndXMud2VicFwiLFxuICAgICAgICBuYW1lOiBcIkd1c3Rhdm8gRnJpbmdcIixcbiAgICAgICAgcGhvbmU6IFwiNTU1LTU1NS01NTUzXCIsXG4gICAgICAgIGVtYWlsOiBcInRoZXJlYWxndXN0YXZvZnJpbmdAbG9zcG9sbG9zLmNvbVwiXG4gICAgfVxuICAgIGNvbnN0IG1hbmFnZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtYW5hZ2VySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1hbmFnZXJJbWFnZS5zcmMgPSBtYW5hZ2VyLmltZztcbiAgICBjb25zdCBtYW5hZ2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1hbmFnZXJOYW1lLnRleHRDb250ZW50ID0gbWFuYWdlci5uYW1lO1xuICAgIGNvbnN0IG1hbmFnZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1hbmFnZXJQaG9uZS50ZXh0Q29udGVudCA9IG1hbmFnZXIucGhvbmU7XG4gICAgY29uc3QgbWFuYWdlckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWFuYWdlckVtYWlsLnRleHRDb250ZW50ID0gbWFuYWdlci5lbWFpbDtcbiAgICBtYW5hZ2VyRGV0YWlscy5hcHBlbmRDaGlsZChtYW5hZ2VySW1hZ2UpO1xuICAgIG1hbmFnZXJEZXRhaWxzLmFwcGVuZENoaWxkKG1hbmFnZXJOYW1lKTtcbiAgICBtYW5hZ2VyRGV0YWlscy5hcHBlbmRDaGlsZChtYW5hZ2VyUGhvbmUpO1xuICAgIG1hbmFnZXJEZXRhaWxzLmFwcGVuZENoaWxkKG1hbmFnZXJFbWFpbCk7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChtYW5hZ2VyRGV0YWlscyk7XG5cbiAgICBjb25zdCBzZWN1cml0eUhlYWQgPSB7XG4gICAgICAgIGltZzogXCIuL21pa2UuanBlZ1wiLFxuICAgICAgICBuYW1lOiBcIk1pa2UgRWhybWFudHJhdXRcIixcbiAgICAgICAgcGhvbmU6IFwiNjY2LTY2Ni02NjY0XCIsXG4gICAgICAgIGVtYWlsOiBcIm1pY2hhZWxlaHJtYW50cmF1dEBsb3Nwb2xsb3MuY29tXCJcbiAgICB9XG5cbiAgICBjb25zdCBzZWN1cml0eUhlYWREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzZWN1cml0eUhlYWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2VjdXJpdHlIZWFkSW1hZ2Uuc3JjID0gc2VjdXJpdHlIZWFkLmltZztcbiAgICBjb25zdCBzZWN1cml0eUhlYWROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2VjdXJpdHlIZWFkTmFtZS50ZXh0Q29udGVudCA9IHNlY3VyaXR5SGVhZC5uYW1lO1xuICAgIGNvbnN0IHNlY3VyaXR5SGVhZFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2VjdXJpdHlIZWFkUGhvbmUudGV4dENvbnRlbnQgPSBzZWN1cml0eUhlYWQucGhvbmU7XG4gICAgY29uc3Qgc2VjdXJpdHlIZWFkRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzZWN1cml0eUhlYWRFbWFpbC50ZXh0Q29udGVudCA9IHNlY3VyaXR5SGVhZC5lbWFpbDtcbiAgICBzZWN1cml0eUhlYWREZXRhaWxzLmFwcGVuZENoaWxkKHNlY3VyaXR5SGVhZEltYWdlKTtcbiAgICBzZWN1cml0eUhlYWREZXRhaWxzLmFwcGVuZENoaWxkKHNlY3VyaXR5SGVhZE5hbWUpO1xuICAgIHNlY3VyaXR5SGVhZERldGFpbHMuYXBwZW5kQ2hpbGQoc2VjdXJpdHlIZWFkUGhvbmUpO1xuICAgIHNlY3VyaXR5SGVhZERldGFpbHMuYXBwZW5kQ2hpbGQoc2VjdXJpdHlIZWFkRW1haWwpO1xuXG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChzZWN1cml0eUhlYWREZXRhaWxzKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuXG5cbn1cblxuZXhwb3J0IHtjcmVhdGVDb250YWN0fTsiLCIvL2FsZXJ0KFwiSGVsbG9cIik7XG5pbXBvcnQge3BhZ2VMb2FkfSBmcm9tIFwiLi9wYWdlLWxvYWQuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuXG5mdW5jdGlvbiB0YWJDcmVhdG9yKCkge1xuICAgIGNvbnN0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLmlubmVyVGV4dCA9IFwiSE9NRVwiO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwYWdlTG9hZCgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uIGlubmVyVGV4dCA9IFwiTUVOVVwiO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjcmVhdGVNZW51KCk7XG4gICAgfSk7XG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFib3V0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ09OVEFDVFwiO1xuICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3JlYXRlQ29udGFjdCgpO1xuICAgIH0pXG5cbiAgICB0YWJEaXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIHRhYkRpdi5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkRpdik7XG59O1xuXG5leHBvcnQge3RhYkNyZWF0b3J9XG5cbnBhZ2VMb2FkKCk7IiwiaW1wb3J0IHsgdGFiQ3JlYXRvciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGFiQ3JlYXRvcigpO1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG4gICAgY29uc3QgaXRlbU9uZSA9IHtcbiAgICAgICAgbmFtZTogXCJCdXJnZXIgRGVsaWdodFwiLFxuICAgICAgICBwcmljZTogXCIkOC45OVwiLFxuICAgICAgICBpbWFnZTogXCIuLi9kaXN0L2J1cmdlci5qcGVnXCJcbiAgICB9XG4gICAgY29uc3QgaXRlbU9uZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXRlbU9uZUlNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaXRlbU9uZUlNRy5zcmMgPSBpdGVtT25lLmltYWdlO1xuICAgIGl0ZW1PbmVET00uYXBwZW5kQ2hpbGQoaXRlbU9uZUlNRyk7XG4gICAgY29uc3QgaXRlbU9uZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtT25lTmFtZS5pbm5lckhUTUwgPSBpdGVtT25lLm5hbWU7XG4gICAgaXRlbU9uZURPTS5hcHBlbmRDaGlsZChpdGVtT25lTmFtZSk7XG4gICAgY29uc3QgaXRlbU9uZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbU9uZVByaWNlLmlubmVySFRNTCA9IGl0ZW1PbmUucHJpY2U7XG4gICAgaXRlbU9uZURPTS5hcHBlbmRDaGlsZChpdGVtT25lUHJpY2UpO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbU9uZURPTSk7XG5cbiAgICBjb25zdCBpdGVtVHdvID0ge1xuICAgICAgICBuYW1lOiBcIlBpenphIFBhblwiLFxuICAgICAgICBwcmljZTogXCIkMTQuOTlcIixcbiAgICAgICAgaW1hZ2U6IFwiLi4vZGlzdC9waXp6YS5qcGVnXCJcbiAgICB9XG4gICAgY29uc3QgaXRlbVR3b0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXRlbVR3b0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaXRlbVR3b0lNRy5zcmMgPSBpdGVtVHdvLmltYWdlO1xuICAgIGl0ZW1Ud29ET00uYXBwZW5kQ2hpbGQoaXRlbVR3b0lNRyk7XG4gICAgY29uc3QgaXRlbVR3b05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtVHdvTmFtZS5pbm5lckhUTUwgPSBpdGVtVHdvLm5hbWU7XG4gICAgaXRlbVR3b0RPTS5hcHBlbmRDaGlsZChpdGVtVHdvTmFtZSk7XG4gICAgY29uc3QgaXRlbVR3b1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbVR3b1ByaWNlLmlubmVySFRNTCA9IGl0ZW1Ud28ucHJpY2U7XG4gICAgaXRlbVR3b0RPTS5hcHBlbmRDaGlsZChpdGVtVHdvUHJpY2UpO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbVR3b0RPTSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xufVxuXG5leHBvcnQge2NyZWF0ZU1lbnV9IiwiaW1wb3J0IHsgdGFiQ3JlYXRvciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRhYkNyZWF0b3IoKTtcblxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy5pbm5lclRleHQgPSBcIldFTENPTUUgVE8gTE9TIFBPTExPUyBIRVJNQU5PU1wiO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nby5zcmMgPSBcIi4uL2Rpc3QvbG9zcG9sbG9zLnBuZ1wiO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkxvcyBQb2xsb3MgSGVybWFub3MgaXMgYSBmaWN0aW9uYWwgZmFzdCBmb29kIHJlc3RhdXJhbnQgY2hhaW4gc3BlY2lhbGl6aW5nIGluIGNoaWNrZW4gdGhhdCB3YXMgZmVhdHVyZWQgaW4gdGhlIHRlbGV2aXNpb24gc2VyaWVzIEJyZWFraW5nIEJhZC4gTG9zIFBvbGxvcyBIZXJtYW5vcyBpcyBmZWF0dXJlZCBhcyBhIGZyb250IG9yZ2FuaXphdGlvbiBmb3IgR3VzIEZyaW5nJ3MgbWV0aCBtYW51ZmFjdHVyaW5nIGFuZCBkaXN0cmlidXRpb24gb3BlcmF0aW9uLCBidXQgaXMgYWxzbyBoaWdobHkgcmVnYXJkZWQgYnkgdGhlIGdlbmVyYWwgcHVibGljIG9mIHRoZSBTb3V0aHdlc3QgYXMgYSByZWdpb25hbCBjaGFpbiBvbiBwYXIgd2l0aCBLRkMuXCJcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG59XG5cblxuXG5leHBvcnQge3BhZ2VMb2FkfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9