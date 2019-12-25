const axios = require('axios');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direcion de la Ciudad para octener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

let encodedURL = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyA6u8KqygfpM8t0331vmec97axxtQXve7A`).then(resp => {

    let location = resp.data.results[0];
    let cordenadas = location.geometry.location;

    console.log('Direccion: ', location.formatted_address);
    console.log('lat', cordenadas.lat);
    console.log('lng', cordenadas.lng);

    //console.log(resp);

}).catch(e => console.log('ERROR!!!', e));