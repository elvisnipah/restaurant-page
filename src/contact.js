import { tabCreator } from "./index.js";

const content = document.getElementById("content");

function createContact() {
    content.innerHTML = "";
    tabCreator();
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

export {createContact};