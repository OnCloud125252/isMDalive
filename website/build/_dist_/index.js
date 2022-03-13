import * as func from "./functions/function.js";


//console.log("123");
let homeChart = document.getElementById("home").getContext("2d");

let a = document.getElementById("text");
let b = document.getElementById("")

setInterval(() => {
    a.innerText = func.TWtime().full;
    //b.innerText = func.api();
}, 500);