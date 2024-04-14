console.log("hola mundo");
console.log("hola mundo");

//tipos
var myString: string = "Hola mundo";
myString = 22 + "";
myString.replace("mundo", "a todos");

var myNumber: number= 22;
var myBool: boolean = !true;

var myVar :any= "Hola";
myVar = false;

//strings
var StringArray: string[] = ["item1", "item2", ""];
var NumberArray: number[] = [1,2,3,4,5];

var booleanArray: boolean[] = [true, false, true];
var anyArray: any[] = [1,2,true, "hola", []];

//tuple
var strNumTuple: [string, number];
strNumTuple = ["hola", 22];

//void, undefined, null
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

//funciones
function getSum(num1: number, num2: number): number{
    return num1 + num2;
}

let mySum = function(num1: number | string , num2: number | string): number{
    return +num1 + +num2;
}

function getName(firstName:string , lastName?: string):string{
    return firstName + " " + lastName; 
}

interface ITodo{
    title: string;
    text: string;
}

showTodo({title: "hola", text: "mundo"});


//interfaces
function showTodo(todo: ITodo){
    console.log(todo.title + " " + todo.text);

}


getName("Daniel", "Gonzalez");
getName("Daniel");




document.write(myNumber.toString());
document.write(typeof(strNumTuple));