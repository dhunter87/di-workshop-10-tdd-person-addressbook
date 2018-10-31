// Your Person class goes here!
class Person{
    constructor(fullName,age){
        this.fullName = fullName;
        this.age = age;
        console.log(this.fullName);
    }
    displayInfo(){
        console.log(this.fullName+"\n"+this.age);
    }
}

module.exports = Person;