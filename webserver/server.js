const express = require('express');

const app = express();

const hbs = require('hbs');

require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'yeison'
    });

});
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'yEison'

    });
});
app.listen(port, () => {

    console.log(`escuchando en el puerto ${port}`);

});