const express = require('express')
const app = express()
const SERVER_PORT = 4268

app.listen(SERVER_PORT, () => console.log(`Captain's Log #${SERVER_PORT}: We are lost in space...`))