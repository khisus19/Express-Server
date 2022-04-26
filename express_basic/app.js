// Usando objeto express
const express = require("express")
// App de Express
const app = express()
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// path inicial, responderá a la url localhost:3000
app.get("/", (req, res) => {
    res.send("Hola a todos mis explorers")
})

// Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a launchx")
})

// Regresando un objeto
// localhost:3000/explorersInNode
app.get("/explorersInNode", (req, res) => {
    const explorer1 = {name: "Eplorer1", msg: "Hello"}
    const explorer2 = {name: "Eplorer2", msg: "Hello"}
    const explorer3 = {name: "Eplorer3", msg: "Hello"}
    res.send([explorer1, explorer2, explorer3])
})

// Query Params: Recibir parámetros por la url
// http://localhost:3000/explorers/carlo
// req.params = {"explorerName":"carlo"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})


// Con esto inicializmos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})