require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
    .then((database) => {
        app.set('db', database)
        app.listen(SERVER_PORT, () => console.log(`Captain's Log #${SERVER_PORT}: We are lost in space...`))
    })