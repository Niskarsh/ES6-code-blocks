// importing 
// exporting
// process obj
// http module
// fs module
// npm
// using npm to install modules
// package.json
// node_modules folder


import http from 'http'
import fs from 'fs'
import request from 'request'

// let server = http.createServer( (req, res) => {

//     res.writeHead (200, {'Content-type' : 'text/html'})
//     res.write('<h1>Hello world!!</h1>')
//     res.end ()
// })
const port = process.env.PORT || 3000
// server.listen (port, () => {
//     console.log(`Port ${port}`)
// })

fs.readFile (`${__dirname}/fsTxt.txt`, (err, data) => {
    if(err) console.log (err)
    console.log (data.toString())
})


// console.log (process.env)
