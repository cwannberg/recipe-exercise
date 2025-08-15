import { correctHTML } from "./correct";

export function part1(){

console.log("1. What is the name of the recipe?");
    const h1 = correctHTML.querySelector<HTMLHeadingElement>("#recipe-name")!;
console.log(h1.textContent);

console.log("2. What HTML tag is used to display the Recipe name?");
console.log(h1.tagName);

console.log("3. What is the font size of the paragraph tag with the class description.");
const p = correctHTML.querySelector(".description")!;
const style = window.getComputedStyle(p);
console.log(style.fontSize);

console.log("4. What is the value of the alt atrribute on the image?");
const altAt = correctHTML.querySelector("img");
console.log(altAt?.alt);

console.log("5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:");
    const image = correctHTML.querySelector("img");
    const imageInfo = {
    url:image?.src,
    height: image?.naturalHeight,
    width: image?.naturalWidth,
    }
console.log("Url: " + imageInfo.url + ", Height: " + imageInfo.height + ", Width: " + imageInfo.width);


const listEl = correctHTML.querySelector(".ingredients-list-paste");

console.log("6. How many ingredients has the paste?");
console.log("Number of ingredients: " + listEl?.childElementCount);

console.log("7. Which is the forth element in the list containing the ingredients for the paste?");
const numberFour = listEl?.children[3];
console.log("The forth ingredient is " + numberFour?.textContent);

console.log("8. Create an an array of objects from the instructions.");
const list = correctHTML.querySelectorAll(".instructions-list li");
const ingredientsArray = Array.from(list).map((item, index) => ({
    order: index + 1,
    text: item.textContent
}));
console.log(ingredientsArray);
}