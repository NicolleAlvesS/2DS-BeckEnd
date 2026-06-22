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


app.get("/clientes", (req, res) =>{
    try{
    const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
    res.status(200).json({resposta: bd})
} catch (erro){
    res.status(500).json({erro: erro.message})
}
})

app.get("/clientes/:cpf", (req, res) =>{ 
    const cpf = req.params.cpf
    try{
    const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
    const cliente = bd.find((cliente) => cliente.cpf == cpf)
    if(!cliente){ 
        return res.status (404).json({resposta: cliente})
    }
} catch (erro){
    res.status(500).json({erro: erro.message})
}
})


app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})