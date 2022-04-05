let id = 1;
let company = 'Meresa';
let isPublished = true;
let x = 3;
x = "hello";
let ids = [1, 2, 3, 4];
let arr = [1, true, "hello"];
//tuple
let person = [1, 'Meresa', true];
let employee;
employee = [
    [1, 'Meresa'],
    [2, 'heran'],
    [3, 'Yemane'],
    [4, 'Aregawi']
];
//union
let pid;
pid = 22;
pid = "23";
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.LEFT);
