class Being {
    constructor(name, species) {
        this.isAlive = true;
    // should have a name 
        this.name = name;
    // can have a different name
    // has a species
        this.species = species;
    // has a different species
    // has no credits by default
        this.credits = 0;
    }
    // can update credits
    updateCredits(credit) {
    // can update credits is it already has some
    // can reduce credits as well
    var creditsNew = (this.credits + credit);
    return (this.credits = creditsNew);
    }
}
var beingOne = new Being();
console.log(beingOne.updateCredits(2000))
module.exports = Being;
