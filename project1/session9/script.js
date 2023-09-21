// let headingElement = document.getElementById("heading");
// console.log(headingElement);
// let divElement = document.querySelector("div p");
// console.log(divElement);
// let divElement = document.getElementsByClassName("blue");
// console.log(divElement);
// let paragrapahElement = document.getElementsByTagName("p");
// console.log(paragrapahElement);
// const allParagraph = document.querySelector("p");
// console.log(allParagraph);

// /// Edit the element........

// const paragraphElement = document.getElementById("paragraph");
// console.log(paragraphElement);
// // paragraphElement.innerHTML = "<b> I am A</b> good learner";
// paragraphElement.innerText = "<b> I am A</b> good learner";

//.............create and add element........
const listItemElement = document.createElement("li");
listItemElement.innerText = "Rajesh";
const list = document.getElementById("nameList");
// list.append(listItemElement);
list.innerHTML = list.innerHTML + "<li>rajesh</li>";
