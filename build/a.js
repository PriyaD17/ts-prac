"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
var Disha;
(function (Disha) {
    Disha["up"] = "upar";
    Disha["down"] = "neeche";
    Disha["left"] = "baain";
    Disha["right"] = "daain";
})(Disha || (Disha = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["up"] = 17] = "up";
    Direction2[Direction2["down"] = 21] = "down";
    Direction2[Direction2["left"] = 22] = "left";
    Direction2[Direction2["right"] = 23] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction.down);
console.log(Direction.left);
console.log(Disha.down);
console.log(Direction2.down);
console.log(Direction2.left);
