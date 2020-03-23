var validTypes = [
    'shell',
    'hyperdrive',
    'computer',
    'life support',
    'landing gear',
    undefined,
];
class Part {
    constructor(input) {
    this.name = input.name;
    this.type = (function(type) {
        if(validTypes.includes(type)) {
            return type;
        } else {
            return undefined;
        }
    })(input.type); 
    this.value = input.value;
    this.broken = false;
    }

    isValid() {
        var part = this.type
        if (this.name === undefined) {
            return false;
        }
        else if (this.type === undefined) {
            return false;
        }
        else if (this.value === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
}
module.exports = Part;
