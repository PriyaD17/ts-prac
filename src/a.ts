function generics<T>(arg:T){
    return arg;
}

let x1= generics<number>(17);
let x2= generics<string>("everyone");

console.log("hello "+ x2.toUpperCase()+" my lucky number is "+ x1);
