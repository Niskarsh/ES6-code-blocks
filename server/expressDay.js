// express module
// server setting
// nodemon
// render and templeting
// express.static
// CRUD
// request-response cycle
// middlewares
// forms

import express from 'express'
import hbs from 'hbs'

let app = express()
app.set ('view engine', hbs)
app.use (express.static(__dirname+'/../public'))

const port = process.env.PORT || 3000

// app.use ('/', (req, res, next) => {
//     console.log('Accessing / route')
//     next()
// })

app.get ('/form/:user',(req, res) => {
    let user = req.params.user
    res.render ('home.hbs', {
        name:user
    })
})

app.get('/form', (req, res) => {
    res.render ('form.hbs')
})

app.post ('/form', (req, res) => {
    res.redirect ('/form/akhil')
})



app.listen (port, console.log (`Started listening on port ${port}`))