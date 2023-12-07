
let person = {
    firstName : "Swati",
    lastName : "Amberkar",
    age : 30,
    fullName : function(){
        return this.firstName + this.lastName;
    }
}

// Call fucntion from Object
console.log(person.fullName());
console.log(person.lastName);
console.log(person['lastName']);

// Update value in object
person.firstName = 'Swati Kasare'
console.log(person.firstName)

// Add new property in object
person.gender = 'Female'
console.log(person);

// Delete property in object
delete person.lastName;
console.log(person);

// Check Property present or not in Object
console.log('lastName' in person)


// Iterate all property from object
// Print all values in js object
for(let key in person)
{
    console.log(person[key]);
}