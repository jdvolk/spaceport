class Being {
    constructor(name, species) {
        this.isAlive = true;
        this.name = name;
        this.species = species;
        this.credits = 0;
    }
    updateCredits(credit) {
    var creditsNew = (this.credits + credit);
    return (this.credits = creditsNew);
    }
}
module.exports = Being;