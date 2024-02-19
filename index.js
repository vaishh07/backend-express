require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello World !')
})

app.get('/twitter', () => {
    res.send('vaishnavicom')

})
app.get('/login', (req,res) => {
    res.send('<h1> please login at frontend </h1>')
})
``
app.get('/youtube', (req,res) => {
    res.send("<h2>please see into it<h2>")
})

app.get(process.env.PORT, () => {
    res.send("<h2>Backend and dev<h2>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

