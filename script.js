let title=document.getElementById("main-title")
console.log(title)
let paragraph=document.getElementsByClassName("intro")
console.log(paragraph)
let paragraphs=document.getElementsByTagName("p")
console.log(paragraphs)
let firstpara=document.querySelector(".intro")
console.log(firstpara)
let allitems=document.querySelectorAll("li")
console.log(allitems)
let title2=document.getElementById("main-title")
title2.textContent="new title "
console.log(title2.textContent)

let firstparagraph=document.getElementsByClassName("intro")
console.log(firstparagraph)
firstparagraph[0].innerHTML="Changed inner html"
let button = document.getElementById("btn");
button.setAttribute("id", "new-btn");
title.style.backgroundColor = "yellow";
let newItem = document.createElement("li");
newItem.textContent = "Item 4";
document.getElementById("item-list").appendChild(newItem);
