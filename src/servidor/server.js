const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile("C:/Users/woondeling.colina/Documents/React/PT/clashofclans/public/index.html")
})

const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3001/', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})