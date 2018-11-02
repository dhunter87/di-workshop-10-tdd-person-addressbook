class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    displayInfo(){
        console.log(this.firstName+"\n"+this.lastName+"\n"+this.dob);
    }
}
module.exports = Person;