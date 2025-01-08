"use strict";
function generics(arg) {
    return arg;
}
let x1 = generics(17);
let x2 = generics("everyone");
console.log("hello " + x2.toUpperCase() + " my lucky number is " + x1);
