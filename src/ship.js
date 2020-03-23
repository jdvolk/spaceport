var Being = require('./being');
var Part = require('./part');
var validParts = [
    'shell',
    'hyperdrive',
    'computer',
    'life support',
    'landing gear',
];
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
        this.captain = input.captain    
        this.fuel = 0;
        this.crew = [];
        this.cargo = [];
        this.parts = {};

        if (input.parts != undefined) {
            this.parts = input.parts;
            }
    }
    addCrew(crewArray) {
        if (this.crew.length >= this.maxCrew) {
            return;
        }
        for (var i = 0; i < crewArray.length; i++) {
            if (crewArray[i] instanceof Being) {
                if (this.crew.length === this.maxCrew){
                    break;
                }
                this.crew.push(crewArray[i]);
            }
        }
        };
    loadCargo(cargo) {
        if(cargo instanceof Part) {
            this.cargo.push(cargo)
            }
        };
    updatePart(part) {
        var difference;
        if (this.parts[part.type] != undefined) {
            difference = this.parts[part.type].value - part.value;
        }
        if(part.isValid()){
        this.parts[part.type] = part;
        }
        return difference;
    };
    checkReadiness() {
        var resultObj ={};
        resultObj.readyToFly = false;
        if (this.captain === undefined) {
            resultObj.notes = "Cannot fly without a captain";
            resultObj.readyToFly = false;
            return resultObj; 
        } 
        if (this.fuel === 0) {
            resultObj.notes = "Cannot fly without fuel"
            resultObj.readyToFly = false;
            return resultObj;
        } 
        if (this.parts === undefined) {
            resultObj.notes = "Cannot fly without parts";
            resultObj.readyToFly = false;
            return resultObj;
        } 
        if (this.captain != undefined && this.fuel != undefined && this.parts != undefined){
            resultObj.readyToFly = true;
            resultObj.notes = "Good to go!";
            return resultObj;
        } 
        return 
    }
};
module.exports = Ship;