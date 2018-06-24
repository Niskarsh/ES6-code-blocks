import animal from '../resources/animal'

class wild extends animal {
    constructor (dog) {
        super (dog)

    }

    isWorking () {
        console.log (`think`)
    }

    letCheck () {
        try {
        
        {
            var a=1
            let b=2
            console.log (`a is ${a} b is ${b}`)

        }

        console.log (`a is ${a} b is ${b}`)
    } catch (e) {
        console.log (`error is ${e}`)
    }

    }

}

new wild('hi').isWorking()
let nup = new wild ('hi')
nup.isWorking()
nup.letCheck()
