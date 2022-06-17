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
    display.classList.add("contactDisplay");
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
    tabDiv.classList.add("tabDiv");

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
    display.classList.add("display");
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
    display.classList.add("display");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ3dDO0FBQ0U7QUFDTjs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVE7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVU7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWE7QUFDckIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFbUI7O0FBRW5CLHdEQUFROzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2dDOztBQUV4Qzs7O0FBR0E7QUFDQTtBQUNBLElBQUkscURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YWJDcmVhdG9yIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGFiQ3JlYXRvcigpO1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImNvbnRhY3REaXNwbGF5XCIpO1xuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29udGFjdEhlYWRlci5pbm5lclRleHQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICAgIGNvbnN0IG1hbmFnZXIgPSB7XG4gICAgICAgIGltZzogXCIuL2d1cy53ZWJwXCIsXG4gICAgICAgIG5hbWU6IFwiR3VzdGF2byBGcmluZ1wiLFxuICAgICAgICBwaG9uZTogXCI1NTUtNTU1LTU1NTNcIixcbiAgICAgICAgZW1haWw6IFwidGhlcmVhbGd1c3Rhdm9mcmluZ0Bsb3Nwb2xsb3MuY29tXCJcbiAgICB9XG4gICAgY29uc3QgbWFuYWdlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1hbmFnZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWFuYWdlckltYWdlLnNyYyA9IG1hbmFnZXIuaW1nO1xuICAgIGNvbnN0IG1hbmFnZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWFuYWdlck5hbWUudGV4dENvbnRlbnQgPSBtYW5hZ2VyLm5hbWU7XG4gICAgY29uc3QgbWFuYWdlclBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWFuYWdlclBob25lLnRleHRDb250ZW50ID0gbWFuYWdlci5waG9uZTtcbiAgICBjb25zdCBtYW5hZ2VyRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtYW5hZ2VyRW1haWwudGV4dENvbnRlbnQgPSBtYW5hZ2VyLmVtYWlsO1xuICAgIG1hbmFnZXJEZXRhaWxzLmFwcGVuZENoaWxkKG1hbmFnZXJJbWFnZSk7XG4gICAgbWFuYWdlckRldGFpbHMuYXBwZW5kQ2hpbGQobWFuYWdlck5hbWUpO1xuICAgIG1hbmFnZXJEZXRhaWxzLmFwcGVuZENoaWxkKG1hbmFnZXJQaG9uZSk7XG4gICAgbWFuYWdlckRldGFpbHMuYXBwZW5kQ2hpbGQobWFuYWdlckVtYWlsKTtcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKG1hbmFnZXJEZXRhaWxzKTtcblxuICAgIGNvbnN0IHNlY3VyaXR5SGVhZCA9IHtcbiAgICAgICAgaW1nOiBcIi4vbWlrZS5qcGVnXCIsXG4gICAgICAgIG5hbWU6IFwiTWlrZSBFaHJtYW50cmF1dFwiLFxuICAgICAgICBwaG9uZTogXCI2NjYtNjY2LTY2NjRcIixcbiAgICAgICAgZW1haWw6IFwibWljaGFlbGVocm1hbnRyYXV0QGxvc3BvbGxvcy5jb21cIlxuICAgIH1cblxuICAgIGNvbnN0IHNlY3VyaXR5SGVhZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNlY3VyaXR5SGVhZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBzZWN1cml0eUhlYWRJbWFnZS5zcmMgPSBzZWN1cml0eUhlYWQuaW1nO1xuICAgIGNvbnN0IHNlY3VyaXR5SGVhZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzZWN1cml0eUhlYWROYW1lLnRleHRDb250ZW50ID0gc2VjdXJpdHlIZWFkLm5hbWU7XG4gICAgY29uc3Qgc2VjdXJpdHlIZWFkUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzZWN1cml0eUhlYWRQaG9uZS50ZXh0Q29udGVudCA9IHNlY3VyaXR5SGVhZC5waG9uZTtcbiAgICBjb25zdCBzZWN1cml0eUhlYWRFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNlY3VyaXR5SGVhZEVtYWlsLnRleHRDb250ZW50ID0gc2VjdXJpdHlIZWFkLmVtYWlsO1xuICAgIHNlY3VyaXR5SGVhZERldGFpbHMuYXBwZW5kQ2hpbGQoc2VjdXJpdHlIZWFkSW1hZ2UpO1xuICAgIHNlY3VyaXR5SGVhZERldGFpbHMuYXBwZW5kQ2hpbGQoc2VjdXJpdHlIZWFkTmFtZSk7XG4gICAgc2VjdXJpdHlIZWFkRGV0YWlscy5hcHBlbmRDaGlsZChzZWN1cml0eUhlYWRQaG9uZSk7XG4gICAgc2VjdXJpdHlIZWFkRGV0YWlscy5hcHBlbmRDaGlsZChzZWN1cml0eUhlYWRFbWFpbCk7XG5cbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHNlY3VyaXR5SGVhZERldGFpbHMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5cblxufVxuXG5leHBvcnQge2NyZWF0ZUNvbnRhY3R9OyIsIi8vYWxlcnQoXCJIZWxsb1wiKTtcbmltcG9ydCB7cGFnZUxvYWR9IGZyb20gXCIuL3BhZ2UtbG9hZC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmZ1bmN0aW9uIHRhYkNyZWF0b3IoKSB7XG4gICAgY29uc3QgdGFiRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJEaXYuY2xhc3NMaXN0LmFkZChcInRhYkRpdlwiKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhvbWVCdXR0b24uaW5uZXJUZXh0ID0gXCJIT01FXCI7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHBhZ2VMb2FkKCk7XG4gICAgfSk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi4gaW5uZXJUZXh0ID0gXCJNRU5VXCI7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNyZWF0ZU1lbnUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWJvdXRCdXR0b24uaW5uZXJUZXh0ID0gXCJDT05UQUNUXCI7XG4gICAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjcmVhdGVDb250YWN0KCk7XG4gICAgfSlcblxuICAgIHRhYkRpdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICB0YWJEaXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiRGl2KTtcbn07XG5cbmV4cG9ydCB7dGFiQ3JlYXRvcn1cblxucGFnZUxvYWQoKTsiLCJpbXBvcnQgeyB0YWJDcmVhdG9yIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0YWJDcmVhdG9yKCk7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuICAgIGNvbnN0IGl0ZW1PbmUgPSB7XG4gICAgICAgIG5hbWU6IFwiQnVyZ2VyIERlbGlnaHRcIixcbiAgICAgICAgcHJpY2U6IFwiJDguOTlcIixcbiAgICAgICAgaW1hZ2U6IFwiLi9idXJnZXIuanBnXCJcbiAgICB9XG4gICAgY29uc3QgaXRlbU9uZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXRlbU9uZUlNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaXRlbU9uZUlNRy5zcmMgPSBpdGVtT25lLmltYWdlO1xuICAgIGl0ZW1PbmVET00uYXBwZW5kQ2hpbGQoaXRlbU9uZUlNRyk7XG4gICAgY29uc3QgaXRlbU9uZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtT25lTmFtZS5pbm5lckhUTUwgPSBpdGVtT25lLm5hbWU7XG4gICAgaXRlbU9uZURPTS5hcHBlbmRDaGlsZChpdGVtT25lTmFtZSk7XG4gICAgY29uc3QgaXRlbU9uZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbU9uZVByaWNlLmlubmVySFRNTCA9IGl0ZW1PbmUucHJpY2U7XG4gICAgaXRlbU9uZURPTS5hcHBlbmRDaGlsZChpdGVtT25lUHJpY2UpO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbU9uZURPTSk7XG5cbiAgICBjb25zdCBpdGVtVHdvID0ge1xuICAgICAgICBuYW1lOiBcIlBpenphIFBhblwiLFxuICAgICAgICBwcmljZTogXCIkMTQuOTlcIixcbiAgICAgICAgaW1hZ2U6IFwiLi9waXp6YS5qcGdcIlxuICAgIH1cbiAgICBjb25zdCBpdGVtVHdvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpdGVtVHdvSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpdGVtVHdvSU1HLnNyYyA9IGl0ZW1Ud28uaW1hZ2U7XG4gICAgaXRlbVR3b0RPTS5hcHBlbmRDaGlsZChpdGVtVHdvSU1HKTtcbiAgICBjb25zdCBpdGVtVHdvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1Ud29OYW1lLmlubmVySFRNTCA9IGl0ZW1Ud28ubmFtZTtcbiAgICBpdGVtVHdvRE9NLmFwcGVuZENoaWxkKGl0ZW1Ud29OYW1lKTtcbiAgICBjb25zdCBpdGVtVHdvUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtVHdvUHJpY2UuaW5uZXJIVE1MID0gaXRlbVR3by5wcmljZTtcbiAgICBpdGVtVHdvRE9NLmFwcGVuZENoaWxkKGl0ZW1Ud29QcmljZSk7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChpdGVtVHdvRE9NKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTWVudX0iLCJpbXBvcnQgeyB0YWJDcmVhdG9yIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGFiQ3JlYXRvcigpO1xuXG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJXRUxDT01FIFRPIExPUyBQT0xMT1MgSEVSTUFOT1NcIjtcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ28uc3JjID0gXCIuL2xvZ28ucG5nXCI7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiTG9zIFBvbGxvcyBIZXJtYW5vcyBpcyBhIGZpY3Rpb25hbCBmYXN0IGZvb2QgcmVzdGF1cmFudCBjaGFpbiBzcGVjaWFsaXppbmcgaW4gY2hpY2tlbiB0aGF0IHdhcyBmZWF0dXJlZCBpbiB0aGUgdGVsZXZpc2lvbiBzZXJpZXMgQnJlYWtpbmcgQmFkLiBMb3MgUG9sbG9zIEhlcm1hbm9zIGlzIGZlYXR1cmVkIGFzIGEgZnJvbnQgb3JnYW5pemF0aW9uIGZvciBHdXMgRnJpbmcncyBtZXRoIG1hbnVmYWN0dXJpbmcgYW5kIGRpc3RyaWJ1dGlvbiBvcGVyYXRpb24sIGJ1dCBpcyBhbHNvIGhpZ2hseSByZWdhcmRlZCBieSB0aGUgZ2VuZXJhbCBwdWJsaWMgb2YgdGhlIFNvdXRod2VzdCBhcyBhIHJlZ2lvbmFsIGNoYWluIG9uIHBhciB3aXRoIEtGQy5cIlxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbn1cblxuXG5cbmV4cG9ydCB7cGFnZUxvYWR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=