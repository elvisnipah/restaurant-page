import { tabCreator } from "./index.js";

const content = document.getElementById("content");


function createMenu() {
    content.innerHTML = "";
    tabCreator();
    const display = document.createElement("div");
    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Menu";
    display.appendChild(menuHeader);
    const itemOne = {
        name: "Burger Delight",
        price: "$8.99",
        image: "../dist/burger.jpg"
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
        image: "../dist/pizza.jpg"
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

export {createMenu}