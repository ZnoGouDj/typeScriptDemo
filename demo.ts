function lol(arg: number, arg2: string = "DEFAULT"): number {
    return arg + 5;
}

const result = lol(5);

// Primitive types

const x: number = 10;
let y: string = "lol";
const arrayOfString: string[] = [ "dsad" ];
const booleanValue: boolean = true;
const undef: undefined = undefined;
const nullVal: null = null;

// Functions
// (arg: argType, arg2: argType2, ...) => resultType
const functionValue = function(x: number, y: number): number {
    return x + y;
}

function someFunc(...varArgs: string[]): void {

}

// Classes

class MyAwesomeClass {

}

const mac: MyAwesomeClass = new MyAwesomeClass();

// Objects & interfaces

interface IPropertyHolder {
    x: number;
    y: number;
    str: string;
}

function checkProperties(arg: IPropertyHolder): boolean {
    return arg.x == 0 && arg.y == 1 && arg.str.length == 5;
}

const obj = {
    x: 10,
    y: 20,
    z: 30
}
