import css from "./menu.css"
import cream from "../imgs/Cream.png"
import redVelved from "../imgs/redVelved.png"
import penaut from "../imgs/Mani.png"
import chocolate from "../imgs/Chocolate.png"
import masmelo from "../imgs/masmeloo.png"

const container = document.createElement("div");
container.classList.add("container-menu")

const content = document.createElement("div");
content.classList.add("content-menu")



const items = [
    {
        name: "Cream",
        descripcion: "Lorem ipsum dolor sit amet, consectetur",
        price: 5,
        img: cream
    },
    {
        name: "Red Velved",
        descripcion: "Lorem ipsum dolor sit amet, consectetur",
        price: 7,
        img: redVelved
    },
    {
        name: "Peanut",
        descripcion: "Lorem ipsum dolor sit amet, consectetur",
        price: 4,
        img: penaut
    },
    {
        name: "Chocolate",
        descripcion: "Lorem ipsum dolor sit amet, consectetur",
        price: 5,
        img: chocolate
    },
    {
        name: "Masmelo",
        descripcion: "Lorem ipsum dolor sit amet, consectetur",
        price: 8,
        img: masmelo
    }
]


const title = document.createElement("h3");
title.textContent = "Menu"

const containerItems = document.createElement("div");
containerItems.classList.add("container-items");

for(let i = 0; i < items.length; i++){
    const item = document.createElement("div");
    item.classList.add("item")

    const itemBody = document.createElement("div");
    itemBody.classList.add("item-body");

    const itemTitle = document.createElement("h5");
    itemTitle.textContent = items[i].name;

    const itemDescripcion = document.createElement("p");
    itemDescripcion.textContent = items[i].descripcion

    const itemPrice = document.createElement("span");
    itemPrice.textContent = items[i].price + "$";

    const img = new Image();
    img.src = items[i].img

    
    itemBody.appendChild(itemTitle)
    itemBody.appendChild(itemDescripcion)
    itemBody.appendChild(itemPrice)
    
    
    if(i % 2 === 0){
        item.appendChild(itemBody)
        item.appendChild(img)
        containerItems.appendChild(item)
    }
    else {
        item.appendChild(img)
        item.appendChild(itemBody)
        containerItems.appendChild(item)
    }

}

content.appendChild(title)
content.appendChild(containerItems)

container.appendChild(content)

export default container;