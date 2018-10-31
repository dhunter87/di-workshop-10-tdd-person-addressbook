try{
    var Person = require('./Person')

    var dan = new Person('Dan Hunter', 30)
    dan.displayInfo()
}
catch(err){
    console.log(err);
}