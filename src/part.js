class Part {
    constructor(input) {
    // should have name
    this.name = input.name;
    // can have different name
    // has a type
    this.type = input.type; 
    // can have a different type
    // must have a valid type 
    // ccan have a value
    this.value = input.value;
    // can have a different value
    // is not broken by default
    this.broken = false;
    // is invalid without a name 
    // is invalid a type 
    // is invalid without a value 
    // is valid
    }
    isValid() {
        var validTypes = [
            'shell',
            'hyperdrive',
            'computer',
            'life support',
            'landing gear',
            undefined,
        ]
        if (this.type === validTypes) {
            return false;
        } 
        else if (this.name === undefined) {
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
