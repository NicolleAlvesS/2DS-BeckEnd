const express = require("express")
const app = express()
const port = 3009
app.use(express.json())
const fs = require('fs')


app.post("/clientes", (req, res) =>{
const clientes = req.body
try { 
    //abrir o arquivo 
    const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
    //adicionar clientes 
    bd.push(clientes)
    //salvar o arquivo
    fs.writeFileSync("bd.json", JSON.stringify(bd), "utf8")
    //resposta
    res.status(201).json({resposta: "Cliente cadastrado!"})
} catch (erro){
    res.status(500).json({erro: erro.message})
}
})


app.get("/perfil", (req, res) =>{
    res.json({nome: "Nicolle Alves", 
     idade:"16 anos"})
})


app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})