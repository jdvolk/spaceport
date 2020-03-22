class Ship {
    constructor(input) {
        this.name = input.name;
        if(input.type === 'military' || input.type === 'cargo' || input.type === 'passenger') {
            this.type = input.type
        }
        this.maxCrew = input.maxCrew;
        this.odometer = input.odometer;
        if (input.odometer === undefined) {
            this.odometer = 0;
        }
        if (input.fuelCapacity ===  undefined) {
        this.fuelCapacity = 10;
        } else if (input.fuelCapacity != undefined) {
            this.fuelCapacity = input.fuelCapacity;
        }
        this.fuel = 0;

    }
    updatePart() {};
    loadCargo() {};
    checkReadiness() {};


}
module.exports = Ship;