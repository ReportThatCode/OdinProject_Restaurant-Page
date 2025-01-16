import header from "./components/header.js"
import css from "./style.css"

import home from "./components/home.js"
import menu from "./components/menu.js"
import {item2} from "./components/contact.js"

const content = document.getElementById("content");

content.appendChild(header)
content.appendChild(home)

document.addEventListener("click",(e)=>{

    if(e.target.matches("#home")){
        content.innerHTML = ""
        content.appendChild(header)
        content.appendChild(home)
        console.log("home")
    }
    if(e.target.matches("#menu") || e.target.matches(".left-btn")){
        content.innerHTML = ""
        content.appendChild(header)
        content.appendChild(menu)
        console.log("menu")
    }
    if(e.target.matches("#contact")){
        content.innerHTML = ""
        content.appendChild(header)
        content.appendChild(item2)
        console.log("contact")
    }
})