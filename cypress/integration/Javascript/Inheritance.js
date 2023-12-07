// one class can inherit/ acquire the properties, methods of another class.
// The class which inherits the properties of other is known as subclass(derived class, child class)
// the class whose properties are inherited is known as superclass. 

import Person from "./class.js"
class Pet extends Person
{
    get location(){
        return "BlueCross"
    }

    constructor(firstName, lastName){
        // call parent class constructor
        super(firstName, lastName)
    }
}

let pet = new Pet("sam", "Dam")
console.log(pet.fullName());