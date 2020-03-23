var Being = require('./being');
var Part = require('./part');
var Ship = require('./ship');
var validTypes = {
    type: 'shell',
    type: 'hyperdrive',
    type: 'computer',
    type: 'life support',
    type: 'landing gear',
}
class Shop {
    constructor(input ) {
        this.name = input.name;
        this.inventory = {};
    };
    addInventory(item){
        if(item instanceof Part || item.type === 'food'){
        this.inventory[item.type] = item;
        };
    };
    outfitShip(ship, part) {
        if (ship.captain[captain.credits] && ) {}
    }
}
module.exports = Shop;