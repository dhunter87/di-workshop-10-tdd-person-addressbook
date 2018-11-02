const chai = require('chai')
const expect = chai.expect

// Your Person test goes here!

const Person = require('../models/person.js');

describe('Person', () => {
    it('Should initialise properly', () => {
        var person = new Person('Joe','Bloggs','01 Jan 1990');

        expect(person.firstName).to.equal('Joe');
        expect(person.lastName).to.equal('Bloggs');
        expect(person.dob).to.equal('01 Jan 1990');
    })
})


