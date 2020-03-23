var Being = require('./being');
var Part = require('./part');
var Ship = require('./ship');
var Shop = require('./shop');

var validTypes = [
    'shell',
    'hyperdrive',
    'computer',
    'life support',
    'landing gear',
    undefined,
];
class Planet {
    constructor(input) {
        this.name = input.name;
        this.shop = input.shop;
        this.currentShip;
        this.coordinates = input.coordinates;
    }
    landShip(ship) {
        if (ship.includes(captian)) {
            this.currentShip = ship;
        }
    }
    refuelShip() {
    }
    calculateDistance(otherPlanet) {
        var distance = (Math.sqrt((otherPlanet.coordinates.x - this.coordinates.x)** 2 + (otherPlanet.coordinates.y - this.coordinates.y)** 2 + (otherPlanet.coordinates.z - this.coordinates.z)** 2));
        return distance;
    }
    giveClearence() {
    }
}
module.exports = Planet;
