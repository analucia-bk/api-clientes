const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()

mongoose.connect ("mongodb://localhost:2701/clientes", {useMewUrlParser: true})
const db = mongoose.connection
db.on("error", console.log.bind(console,"connection error: "))
db.once("open", function(){
    console.log("conexão feita com sucesso")
})






const clientes = require ("./src/routes/clientesRoutes")
app.use(function(req,res,next){
    res.header("Acess-Control-Allow-Origin", "*")
    res.header(
        "Acess-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    )
    next()
})



app.use(bodyParser.json())
app.use("/clientes", clientes)
module.exports = app