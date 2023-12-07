module.exports = class Person
{
    age = 25

    // get used for property not for method
    get location(){
        return "canada"
    }

    // Constructor is method which eecutes by default when you create object of the class
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName
    }

    //method
    fullName(){
        console.log(this.firstName + this.lastName);
    }
}

// create object of a class
// let person = new Person(); 

// // Access property from class
// console.log(person.age);

// console.log(person.location);


