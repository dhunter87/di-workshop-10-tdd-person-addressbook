// Your Person class goes here!
class Person{
    condtructor(fullName,age){
        this.fullName = fullName
        this.age = age 

    }
    displayInfo(){
        var lines = [
            this.fullname,
            this.age
        ] 
        return lines.join('\n')
    }
}

module.exports = Person