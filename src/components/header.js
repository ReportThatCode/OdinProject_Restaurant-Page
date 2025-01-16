import headerCSS from "./header.css";
import imgSRC from "./cookieLOGO.png"

const $header = document.createElement("header");

// LOGO
const logo = document.createElement("div");
logo.classList.add("content-logo")

const imgLOGO = new Image();
imgLOGO.src = imgSRC

const span = document.createElement("span");
span.textContent = "COOKIEMANIA"

// OPTIONS HEADER
const optionsHeader = document.createElement("div");

const $home = document.createElement("div");
$home.classList.add("btn-header");
$home.id = "home"
$home.textContent = "HOME";

const $menu = document.createElement("div");
$menu.classList.add("btn-header");
$menu.id = "menu"
$menu.textContent = "MENU";

const $contact = document.createElement("div");
$contact.classList.add("btn-header");
$contact.id = "contact"
$contact.textContent = "CONTACT";


// UNIONES

logo.appendChild(imgLOGO)
logo.appendChild(span)

optionsHeader.appendChild($home);
optionsHeader.appendChild($menu);
optionsHeader.appendChild($contact);


$header.appendChild(logo)
$header.appendChild(optionsHeader)

export default $header;