//create a server with express
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./Backend/dataBase/index.js')

app.use(express.static(__dirname + '/client/dist'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Router
app.use("/patients",require('./backend/Routers/PatientsRouter.js'))
app.use("/doctors",require('./backend/Routers/DoctorsRouter.js'))

//server listening
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }) 