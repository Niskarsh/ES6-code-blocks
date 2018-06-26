
import Promise from 'promise'


const asyncProcess = () => new Promise( (resolve, reject) => {
    setTimeout ( resolve('2 secs'), 5000)
} )

// asyncProcess().then(val => console.log(val)).catch(e => console.log(`error ${e}`));

asyncProcess().then((val) => {console.log(val)}, (val)=> {console.log(val)}).catch(e => console.log(e))

// asyncProcess().then()
