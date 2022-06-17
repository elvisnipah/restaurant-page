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
        image: "./burger.jpg"
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
        image: "./pizza.jpg"
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
    logo.src = "./logo.png";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUN3QztBQUNFO0FBQ047O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBUTtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVtQjs7QUFFbkIsd0RBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZ0M7O0FBRXhDOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSxxREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFiQ3JlYXRvciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRhYkNyZWF0b3IoKTtcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnRhY3RIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzXCI7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICBjb25zdCBtYW5hZ2VyID0ge1xuICAgICAgICBpbWc6IFwiLi9ndXMud2VicFwiLFxuICAgICAgICBuYW1lOiBcIkd1c3Rhdm8gRnJpbmdcIixcbiAgICAgICAgcGhvbmU6IFwiNTU1LTU1NS01NTUzXCIsXG4gICAgICAgIGVtYWlsOiBcInRoZXJlYWxndXN0YXZvZnJpbmdAbG9zcG9sbG9zLmNvbVwiXG4gICAgfVxuICAgIGNvbnN0IG1hbmFnZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtYW5hZ2VySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1hbmFnZXJJbWFnZS5zcmMgPSBtYW5hZ2VyLmltZztcbiAgICBjb25zdCBtYW5hZ2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1hbmFnZXJOYW1lLnRleHRDb250ZW50ID0gbWFuYWdlci5uYW1lO1xuICAgIGNvbnN0IG1hbmFnZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1hbmFnZXJQaG9uZS50ZXh0Q29udGVudCA9IG1hbmFnZXIucGhvbmU7XG4gICAgY29uc3QgbWFuYWdlckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWFuYWdlckVtYWlsLnRleHRDb250ZW50ID0gbWFuYWdlci5lbWFpbDtcbiAgICBtYW5hZ2VyRGV0YWlscy5hcHBlbmRDaGlsZChtYW5hZ2VySW1hZ2UpO1xuICAgIG1hbmFnZXJEZXRhaWxzLmFwcGVuZENoaWxkKG1hbmFnZXJOYW1lKTtcbiAgICBtYW5hZ2VyRGV0YWlscy5hcHBlbmRDaGlsZChtYW5hZ2VyUGhvbmUpO1xuICAgIG1hbmFnZXJEZXRhaWxzLmFwcGVuZENoaWxkKG1hbmFnZXJFbWFpbCk7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChtYW5hZ2VyRGV0YWlscyk7XG5cbiAgICBjb25zdCBzZWN1cml0eUhlYWQgPSB7XG4gICAgICAgIGltZzogXCIuL21pa2UuanBlZ1wiLFxuICAgICAgICBuYW1lOiBcIk1pa2UgRWhybWFudHJhdXRcIixcbiAgICAgICAgcGhvbmU6IFwiNjY2LTY2Ni02NjY0XCIsXG4gICAgICAgIGVtYWlsOiBcIm1pY2hhZWxlaHJtYW50cmF1dEBsb3Nwb2xsb3MuY29tXCJcbiAgICB9XG5cbiAgICBjb25zdCBzZWN1cml0eUhlYWREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzZWN1cml0eUhlYWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2VjdXJpdHlIZWFkSW1hZ2Uuc3JjID0gc2VjdXJpdHlIZWFkLmltZztcbiAgICBjb25zdCBzZWN1cml0eUhlYWROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2VjdXJpdHlIZWFkTmFtZS50ZXh0Q29udGVudCA9IHNlY3VyaXR5SGVhZC5uYW1lO1xuICAgIGNvbnN0IHNlY3VyaXR5SGVhZFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2VjdXJpdHlIZWFkUGhvbmUudGV4dENvbnRlbnQgPSBzZWN1cml0eUhlYWQucGhvbmU7XG4gICAgY29uc3Qgc2VjdXJpdHlIZWFkRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzZWN1cml0eUhlYWRFbWFpbC50ZXh0Q29udGVudCA9IHNlY3VyaXR5SGVhZC5lbWFpbDtcbiAgICBzZWN1cml0eUhlYWREZXRhaWxzLmFwcGVuZENoaWxkKHNlY3VyaXR5SGVhZEltYWdlKTtcbiAgICBzZWN1cml0eUhlYWREZXRhaWxzLmFwcGVuZENoaWxkKHNlY3VyaXR5SGVhZE5hbWUpO1xuICAgIHNlY3VyaXR5SGVhZERldGFpbHMuYXBwZW5kQ2hpbGQoc2VjdXJpdHlIZWFkUGhvbmUpO1xuICAgIHNlY3VyaXR5SGVhZERldGFpbHMuYXBwZW5kQ2hpbGQoc2VjdXJpdHlIZWFkRW1haWwpO1xuXG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChzZWN1cml0eUhlYWREZXRhaWxzKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuXG5cbn1cblxuZXhwb3J0IHtjcmVhdGVDb250YWN0fTsiLCIvL2FsZXJ0KFwiSGVsbG9cIik7XG5pbXBvcnQge3BhZ2VMb2FkfSBmcm9tIFwiLi9wYWdlLWxvYWQuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuXG5mdW5jdGlvbiB0YWJDcmVhdG9yKCkge1xuICAgIGNvbnN0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLmlubmVyVGV4dCA9IFwiSE9NRVwiO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwYWdlTG9hZCgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uIGlubmVyVGV4dCA9IFwiTUVOVVwiO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjcmVhdGVNZW51KCk7XG4gICAgfSk7XG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFib3V0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ09OVEFDVFwiO1xuICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3JlYXRlQ29udGFjdCgpO1xuICAgIH0pXG5cbiAgICB0YWJEaXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIHRhYkRpdi5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkRpdik7XG59O1xuXG5leHBvcnQge3RhYkNyZWF0b3J9XG5cbnBhZ2VMb2FkKCk7IiwiaW1wb3J0IHsgdGFiQ3JlYXRvciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGFiQ3JlYXRvcigpO1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG4gICAgY29uc3QgaXRlbU9uZSA9IHtcbiAgICAgICAgbmFtZTogXCJCdXJnZXIgRGVsaWdodFwiLFxuICAgICAgICBwcmljZTogXCIkOC45OVwiLFxuICAgICAgICBpbWFnZTogXCIuL2J1cmdlci5qcGdcIlxuICAgIH1cbiAgICBjb25zdCBpdGVtT25lRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpdGVtT25lSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpdGVtT25lSU1HLnNyYyA9IGl0ZW1PbmUuaW1hZ2U7XG4gICAgaXRlbU9uZURPTS5hcHBlbmRDaGlsZChpdGVtT25lSU1HKTtcbiAgICBjb25zdCBpdGVtT25lTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1PbmVOYW1lLmlubmVySFRNTCA9IGl0ZW1PbmUubmFtZTtcbiAgICBpdGVtT25lRE9NLmFwcGVuZENoaWxkKGl0ZW1PbmVOYW1lKTtcbiAgICBjb25zdCBpdGVtT25lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtT25lUHJpY2UuaW5uZXJIVE1MID0gaXRlbU9uZS5wcmljZTtcbiAgICBpdGVtT25lRE9NLmFwcGVuZENoaWxkKGl0ZW1PbmVQcmljZSk7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChpdGVtT25lRE9NKTtcblxuICAgIGNvbnN0IGl0ZW1Ud28gPSB7XG4gICAgICAgIG5hbWU6IFwiUGl6emEgUGFuXCIsXG4gICAgICAgIHByaWNlOiBcIiQxNC45OVwiLFxuICAgICAgICBpbWFnZTogXCIuL3BpenphLmpwZ1wiXG4gICAgfVxuICAgIGNvbnN0IGl0ZW1Ud29ET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGl0ZW1Ud29JTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGl0ZW1Ud29JTUcuc3JjID0gaXRlbVR3by5pbWFnZTtcbiAgICBpdGVtVHdvRE9NLmFwcGVuZENoaWxkKGl0ZW1Ud29JTUcpO1xuICAgIGNvbnN0IGl0ZW1Ud29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbVR3b05hbWUuaW5uZXJIVE1MID0gaXRlbVR3by5uYW1lO1xuICAgIGl0ZW1Ud29ET00uYXBwZW5kQ2hpbGQoaXRlbVR3b05hbWUpO1xuICAgIGNvbnN0IGl0ZW1Ud29QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1Ud29QcmljZS5pbm5lckhUTUwgPSBpdGVtVHdvLnByaWNlO1xuICAgIGl0ZW1Ud29ET00uYXBwZW5kQ2hpbGQoaXRlbVR3b1ByaWNlKTtcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGl0ZW1Ud29ET00pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbn1cblxuZXhwb3J0IHtjcmVhdGVNZW51fSIsImltcG9ydCB7IHRhYkNyZWF0b3IgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0YWJDcmVhdG9yKCk7XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJXRUxDT01FIFRPIExPUyBQT0xMT1MgSEVSTUFOT1NcIjtcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ28uc3JjID0gXCIuL2xvZ28ucG5nXCI7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiTG9zIFBvbGxvcyBIZXJtYW5vcyBpcyBhIGZpY3Rpb25hbCBmYXN0IGZvb2QgcmVzdGF1cmFudCBjaGFpbiBzcGVjaWFsaXppbmcgaW4gY2hpY2tlbiB0aGF0IHdhcyBmZWF0dXJlZCBpbiB0aGUgdGVsZXZpc2lvbiBzZXJpZXMgQnJlYWtpbmcgQmFkLiBMb3MgUG9sbG9zIEhlcm1hbm9zIGlzIGZlYXR1cmVkIGFzIGEgZnJvbnQgb3JnYW5pemF0aW9uIGZvciBHdXMgRnJpbmcncyBtZXRoIG1hbnVmYWN0dXJpbmcgYW5kIGRpc3RyaWJ1dGlvbiBvcGVyYXRpb24sIGJ1dCBpcyBhbHNvIGhpZ2hseSByZWdhcmRlZCBieSB0aGUgZ2VuZXJhbCBwdWJsaWMgb2YgdGhlIFNvdXRod2VzdCBhcyBhIHJlZ2lvbmFsIGNoYWluIG9uIHBhciB3aXRoIEtGQy5cIlxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbn1cblxuXG5cbmV4cG9ydCB7cGFnZUxvYWR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=