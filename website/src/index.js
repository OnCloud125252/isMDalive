import * as func from "./functions/function.js";

let a = document.getElementById("text");
//let b = document.getElementById("")

const ctxz = document.getElementById('home').getContext('2d');

let input = {
    ctx: document.getElementById('home').getContext('2d'),
    data: [0, 30, 45, 28, 60, NaN, 115]
};

func.chart(input);
func.api('home').then(response => {
    console.log(response);
});