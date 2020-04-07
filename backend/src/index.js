const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express(); //criar aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

//para rodar -> npm start no terminal
app.listen(3333); //localhost:3333
