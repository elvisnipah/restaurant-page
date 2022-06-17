import { tabCreator } from "./index.js";

function pageLoad() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    tabCreator();

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



export {pageLoad};