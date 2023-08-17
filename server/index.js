require('dotenv').config()
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
app.use(express.json())
app.use(cors())
const url = 3001  

const db = mysql.createPool({

    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    
});

app.listen(url, () => {

    console.log("Foi? Foi!")   
})

////////////////////////////////////////////////////////////////////////////////////ADM//
////////////////////////////////////////////////////////////////////////////////////ADM//
////////////////////////////////////////////////////////////////////////////////////ADM//



app.get('/request', (req, res) => {

    const SQL = "SELECT * FROM processos"

    db.query(SQL, (err, result) => {
        if (err )console.log(err)
        else res.send(result)
    })
})

app.post('/search', (req, res) => {

    const {numero} = req.body;
    const {usuario} = req.body; 
    const {instancia} = req.body;
    const {sistema} = req.body;
    const {status} = req.body;

    const numeroParam = numero ? `%${numero.replace(/[^\d.-]/g, '')}%` : '';
    // const numeroParam = numero || '';
    const instanciaParam = instancia || '';
    const sistemaParam = sistema || '';
    const statusParam = status || '';
    const usuarioParam = usuario ? `${usuario}%` : '';
    
    const SQL = "SELECT * FROM processos WHERE numero LIKE ? OR instancia = ? OR sistema = ? OR status = ? OR usuario LIKE ? ";

    db.query(SQL, [ numeroParam, instanciaParam, sistemaParam, statusParam, usuarioParam ], (err, result) => {

        if (err) console.log(err);
        else res.send(result)
        
    })
    
})

app.put('/edit', (req, res) => {
    
    const {id} = req.body;
    const {numbers} = req.body;
    const {instancie} = req.body;
    const {system} = req.body;
    const {status} = req.body;
    const {data} = req.body;

    let SQL = "UPDATE processos SET numero = ?, instancia = ?, sistema = ?, status = ?, data = ? WHERE idprocessos = ?";

    db.query(SQL, [numbers, instancie, system, status, data, id,], (err, result) => {

        if (err) console.error(err)
        else res.send(result)
        
    })
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    
    let SQL = 'DELETE FROM processos WHERE idprocessos = ?'
    db.query(SQL, id, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    })
})

////////////////////////////////////////////////////////////////////////////////////USER//
////////////////////////////////////////////////////////////////////////////////////USER//
////////////////////////////////////////////////////////////////////////////////////USER//


app.post('/userregister', (req, res) => {
    
    const {numero} = req.body;
    const {instancia} = req.body;
    const {sistema} = req.body;
    const {status} = req.body
    const {usuario} = req.body;
    const {email} = req.body;
    const {data} = req.body


    const SQL = "INSERT INTO processos (numero, instancia, sistema, status, usuario, email, data) VALUES (?,?,?,?,?,?,?)"
    
    db.query(SQL, [numero, instancia, sistema, status, usuario, email, data], (err, result) => {

        if (err) console.log(err)
        else res.send(result)

    })
    
})

app.get('/userrequest', (req, res) => {
    const {email} = req.query

    const SQL = "SELECT * FROM processos WHERE email = ?"

    db.query(SQL, email, (err, result) => {

        if (err )console.log(err)
        else res.send(result) 
    })
})
