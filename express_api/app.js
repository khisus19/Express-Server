// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// HTTP Methods
// Esto es un end point
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Explorer1"}
    const explorer2 = {id: 2, name: "Explorer2"}
    const explorer3 = {id: 3, name: "Explorer3"}
    const explorer4 = {id: 4, name: "Explorer4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    // HTTP CODE STATUS:
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    
    const explorer1 = {id: 1, name: "Explorer1"}
    res.status(200).json(explorer1)
})
// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})