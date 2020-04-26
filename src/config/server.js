const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json()); // la apliación trabajará con json
app.use(cors()); // para uso local con angular
app.set('port',3030); // puerto de conexión
module.exports = app; // exportando el objeto configurado