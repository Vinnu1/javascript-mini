'use strict'

class person{
    constructor(name,age,gender){
        this.name =name;
        this.age = age;
        this.gender = gender;
    }

    getAge(){
        return this.age;
    }
}
/*
let me = new person('Vinayak',21,'M');
console.log(me.name);
console.log(me.age);
console.log(me.gender);
console.log(me.getAge());
*/
class engineer extends person{
    constructor(name,age,gender,discipline){
        super(name,age,gender);
        this.discipline = discipline;
    }
}

let me = new engineer('Vinayak',21,'M','CS');
console.log(me.name);
console.log(me.age);
console.log(me.gender);
console.log(me.getAge());
console.log(me.discipline);