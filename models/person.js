class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;

        this.fullName = this.firstName +' '+ this.lastName;
        this.email = [];
    }
    displayInfo(){
        console.log(this.firstName+"\n"+this.lastName+"\n"+this.dob);
        console.log('Full name : ' + this.fullName +', age : '+ this.dob);
    }
    getEmail(){
        this.email = email;
    }
}
module.exports = Person;