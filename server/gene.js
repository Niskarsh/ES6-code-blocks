import 'babel-polyfill'
// let a = function* () {
//     let t = yield 'something'
//     return t
// }
// let b = a()
// let iter = b.next()
// console.log (`val ${iter.value} done ${iter.done}`)
// iter = b.next(1)
// console.log (`val ${iter.value} done ${iter.done}`)

let fun = function* () {
    let a=1,b=2
    a= yield 'value of a'
    console.log(`a is ${a}`)
    // if(yield 'some'){

    // }
}

let invok = fun();
let two = invok.next()
console.log(`value ${two.value} done`)
// two = invok.next(3);

// {
//     value, done
// }


const apiCall = () => {

}

const gege = function* () {
    let val =yield apiCall()

}