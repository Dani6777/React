console.log("hola mundo");
console.log("hola mundo");
//tipos
var myString = "Hola mundo";
myString = 22 + "";
myString.replace("mundo", "a todos");
var myNumber = 22;
var myBool = !true;
var myVar = "Hola";
myVar = false;
//strings
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var anyArray = [1, 2, true, "hola", []];
//tuple
var strNumTuple;
strNumTuple = ["hola", 22];
//void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//funciones
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    return +num1 + +num2;
};
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
showTodo({ title: "hola", text: "mundo" });
//interfaces
function showTodo(todo) {
    console.log(todo.title + " " + todo.text);
}
getName("Daniel", "Gonzalez");
getName("Daniel");
document.write(myNumber.toString());
document.write(typeof (strNumTuple));
