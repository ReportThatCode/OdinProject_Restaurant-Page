import css from "./home.css"
import imgSRC from "./coocki.png"
const home = document.createElement("main");


const left = document.createElement("div");
left.classList.add("left")

const title = document.createElement("h1");
title.innerHTML = "Welcome to <span>Cookie</span> shop!"

const descripcion = document.createElement("p");
descripcion.classList.add("left-descripcion")
descripcion.textContent = "We take the passion for cookies to the next level. Each cookie is handcrafted with the highest quality ingredients, creating irresistible combinations that delight all tastes."

const btnMenu = document.createElement("button");
btnMenu.classList.add("left-btn")
btnMenu.textContent = "See more"

left.appendChild(title)
left.appendChild(descripcion)
left.appendChild(btnMenu)

const right = document.createElement("div");
right.classList.add("right")

const img = new Image();
img.src = imgSRC

right.appendChild(img)


home.appendChild(left)
home.appendChild(right)

export default home