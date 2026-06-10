const express = require("express")
const app = express()
const port = 3002
app.use(express.json())


app.get("/perfil", (req, res) =>{
    res.json({nome: "Nicolle Alves", 
     idade:"16 anos"})
})


app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})
