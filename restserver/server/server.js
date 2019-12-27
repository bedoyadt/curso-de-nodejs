require('./config/config');

const express = require('express');

const path = require('path');

const mongoose = require('mongoose');

const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//app.use(require("./router/usuario"));
//=======================================================
app.set('port', process.env.PORT || 3000);
hbs.registerPartials(__dirname + '/views');

//========================================================


//--------------------------------------

app.set('view engine', '.hbs');
app.use(require("./router/usuario"));

//------------------------------------------------

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;
    console.log("Conectado a la DB");
});

//============================
//app.use('/', app);
//==========================================

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', process.env.PORT);

});