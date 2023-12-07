import Person from './class.js'


let person = new Person("Charis", "Dud") 
console.log(person.fullName())
function add(a,b)
{
    return a+b
}

let sum = add(2,3)
console.log(sum);

// Anyonymus function - function expression - do not have name
let sumOfIntegers = function(a, b){
    return a+b
}
console.log(sumOfIntegers(4,5));

let sumOfNum = (a, b)=> a+b
console.log(sumOfNum(6,8));

//Block of code
// var = global scope/ functional 

var greet = "Hello"
if(1==1)
{
    let greet = "Evening"
    
}

function print(){
    var greet = "Welcome"
}

console.log(greet);
