//alert("Hello");
import {pageLoad} from "./page-load.js";
import { createContact } from "./contact";
import { createMenu } from "./menu";

function tabCreator() {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tabDiv");

    const homeButton = document.createElement("button");
    homeButton.innerText = "HOME";
    homeButton.addEventListener("click", function() {
        pageLoad();
    });
    const menuButton = document.createElement("button");
    menuButton. innerText = "MENU";
    menuButton.addEventListener("click", function() {
        createMenu();
    });
    const aboutButton = document.createElement("button");
    aboutButton.innerText = "CONTACT";
    aboutButton.addEventListener("click", function() {
        createContact();
    })

    tabDiv.appendChild(homeButton);
    tabDiv.appendChild(menuButton);
    tabDiv.appendChild(aboutButton);

    content.appendChild(tabDiv);
};

export {tabCreator}

pageLoad();