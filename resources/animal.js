export default class animal {
    constructor (dog) {
        this.dog = dog
    }

    isDog () {
        console.log (`Dog name ${this.dog}`) // Remember how this referencing work, which obj is calling th function
    }
}