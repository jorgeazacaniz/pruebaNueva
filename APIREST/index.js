const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// cors permite conectarse con otro servidor
const cors = require ('cors')

// conectar mongo

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mp', {
    useNewUrlParser: true
})

//crear el servidor

const app = express();

// habilitar bodyparser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar cors

app.use(cors());

// Rutas de la app
app.use('/', routes());

// puerto de salida

app.listen(5000);
