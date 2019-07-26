require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())

massive(CONNECTION_STRING)
    .then((database) => {
        app.set('db', database)
        app.listen(SERVER_PORT, () => console.log(`Captain's Log #${SERVER_PORT}: We are lost in space...`))
    })

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.updateProduct)
app.get('/api/product/:id', ctrl.getProduct)