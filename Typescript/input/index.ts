let id : number = 1;
let company: string = 'Meresa';
let isPublished: boolean = true;
let x:any = 3;
x = "hello";

let ids:number[] = [1, 2, 3, 4];
let arr:any[] = [1, true, "hello"]


//tuple
let person:[number, string, boolean] = [1, 'Meresa', true];
let employee:[number, string][];
employee =[
    [1, 'Meresa'],
    [2, 'heran'],
    [3, 'Yemane'],
    [4, 'Aregawi']
]

//union

let pid: string | number;
pid = 22;
pid ="23"

//Enum
enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

//Objects
const user : {
    id: number,
    name: string
} = {
    id: 1,
    name: 'Meresa'
}

type Person= {
    id:number,
    name:string
}

const meresa:Person = {
    id:2,
    name:'Meresa'
}

//Type Assertion
let cid:any = 1;
//let customerId = <number>cid;
let customerId = cid as number

function addNum(x: number, y:number): number {
    return x + y;
}


console.log(Direction.LEFT);


