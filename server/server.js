import animal from '../resources/animal'
import 'babel-polyfill'

class wild extends animal {
    constructor (dog) {
        super (dog)

    }

    isWorking () {
        let foo1
        
        console.log (`think`)
        let foo = data => {return data}
        console.log (foo ('data'))
        let a = () => {
            this.letCheck();
        }
    }

    

    letCheck () {
        try {
        
        {
            var a=1
            let b=2
            console.log (`a is ${a} b is ${b}`)  //Guess what will be printed

        }

        console.log (`a is ${a} b is ${b}`)  //Guess what will be printed
    } catch (e) {
        console.log (`error is ${e}`)
    }

    }

}


let nup = new wild ('hi') // creates object of class wild

nup.isDog()  // Accessing function of class animal 
nup.foo1 = 'hi foo'  
console.log (` foo1 ${nup.foo1}`) //Guess what will be printed


// different object of same class wild, using different argument for constructor method
let second = new wild ('Tommy') 

second.foo1 = 'foo2'  //same variable accessed from different object

second.isDog()  //Guess what will be printed

console.log (` foo2 ${second.foo1}`)  
