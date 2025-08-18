import { wrongHTML } from "./wrong";
import { correctHTML} from "./correct"; 

export function part2(){


//1.    The logo text of the site has the wrong color. Change it to the correct one.
const logoText = document.querySelector<HTMLElement>(".logo-text")!;
const correctTextColor = window.getComputedStyle(logoText).color;
logoText.style.color = correctTextColor;

//2.    The alignment of the elements inside the header element are wrong. 
//      Change it to the correct one. Hint, check the flex properties for the correct alignment
const header = document.querySelector<HTMLElement>("header")!;
header.style.justifyContent = 'flex-start';

//3.    The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
const correctBorderColor = window.getComputedStyle(header).borderColor;
header.style.borderBottomColor = correctBorderColor;

//4.    The recipe name is wrong, change it to the correct one.
const correctRecipeName = correctHTML.querySelector("#recipe-name")!.textContent;
const newRecipeName = wrongHTML.querySelector("#recipe-name")!;
newRecipeName.textContent = correctRecipeName;

//5.    The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
const timeContainer = wrongHTML.querySelector(".time-container");
const icon = timeContainer?.firstElementChild!;
icon.classList.add("material-symbols-outlined");

//6.    The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
const correctTime = correctHTML.querySelector(".time")?.textContent!;
const time = wrongHTML.querySelector<HTMLElement>(".time");
time!.textContent = correctTime;

//7.    The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
const correctImage = correctHTML.querySelector(".image-container img");
const correctImageUrl = correctImage?.getAttribute("src");
const wrongImage = wrongHTML.querySelector(".image-container img");
wrongImage?.setAttribute("src", correctImageUrl!);

//8.    The background color of the ingredients list container is wrong. Fix it.
// ******************************************************************************************************************Funkar inte. Försök igen
const correctBackgroundEl = document.querySelector<HTMLElement>(".how-to-do .ingredients-container")!;
const correctBackgroundColor = window.getComputedStyle(correctBackgroundEl).backgroundColor;
const wrongBackgroundEl = wrongHTML.querySelector<HTMLElement>(".how-to-do .ingredients-container")!;
wrongBackgroundEl.style.backgroundColor = correctBackgroundColor;


//9.    The ingredients are divided in to two parts, one for the bottom and one for the paste. 
//      In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
const listItems = correctHTML.querySelector<HTMLUListElement>(".ingredients-list-bottom")!.children;
const wrongBottom = wrongHTML.querySelector<HTMLUListElement>(".ingredients-list-bottom");

wrongBottom!.innerHTML = ""; 
Array.from(listItems).forEach(li => {
    wrongBottom?.appendChild(li.cloneNode(true))
});

//10.    The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
const ingredients = correctHTML.querySelector(".ingredients-list-paste")!;
const thirdIngredient = ingredients?.children[2] as HTMLElement;

const wrongList = wrongHTML.querySelector(".ingredients-list-paste")!;
const wrongIngredient = wrongHTML.querySelector(".ingredients-list-paste")!.children[2];
wrongIngredient.remove();
wrongList.insertBefore(thirdIngredient.cloneNode(true), wrongList.children[2]);

//11.    There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
const missingIngredient = ingredients?.children[4].cloneNode(true);
wrongList.appendChild(missingIngredient);

//12.    The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
const h3 = wrongHTML.querySelector<HTMLElement>(".instructions")!;
h3?.classList.remove("shadow");

//13.    Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
const instructions = Array.from(wrongHTML.querySelectorAll(".instructions-list li")!);
    instructions[8].textContent = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
    instructions[8].textContent = "Ställ in i frysen över natten.";
}