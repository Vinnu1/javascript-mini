// Objects in JavaScript
// let person = {
//     name: 'Vinayak',
//     age: 21,
//     gender: 'Male',
//     getAge: function(){
//         console.log(this.age);
//     }
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);
// person.getAge();

//Object Construct Function

function person(name,age,gender){
    this.name = name,
    this.age = age,
    this.gender = gender
    this.getAge = function(){
        console.log(this.age);
    }
}

let person1 = new person('Vinayak',21,'Male');
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
person1.getAge();
