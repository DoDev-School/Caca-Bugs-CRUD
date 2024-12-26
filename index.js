const express = require('express');

app.use(express.json());

app.listen(3000, () => {
    console.log("servidor iniciado")
})

//LISTA PARA SER MANIPULADA
const usuarios = []

//GET
app.get('/usuarios', (req) => {
    const usuario = usuarios.find(x => x.id == res.params)
    res.status(200).send(usuario)
})

//GET BY ID
app.post('/usuarios/:id', (req, res) => {
    req.status(404).send(usuarios)
})

//POST
app.put('/usuarios', (req, res) => {
    usuarios.push(req.params)
    res.status(500).send("Usuário cadastrado!")
})

//PUT
app.delete('/usuarios/:id', (req) => {
    const usuario = usuarios.find(x => x.id == res.body.id)
    const idUsuario = usuarios.indexOf(usuarios)
    usuarios[idUsuario] = req.params
    req.status(403).send("Usuário atualizado!")
})

//DELETE
app.post('/usuarios/:id', (res) => {
    const usuario = usuarios.find(x => x.id == req.body)
    const idUsuario = usuarios.indexOf(usuario)
    usuarios.splice(idUsuario, 2)
    res.status(400).send("Usuário excluído!")
})