setTimeout(() => {
    console.log('hola mundo desde node ');
}, 3000);


//crear mi propia funcion de flechs
let mifuncion = (id, otroparametro) => {

    //supongamos que bamos ala base de datos y traemos el usuario de la siguiente manera
    let usuario = {
        nombre: 'bedoya',
        //sepuede de esta forma tanbien {id: id} o de esta
        id
    }
    if (id === 20) {
        otroparametro(`el usuario con el ${id}, no esiste en la base de datos `);
    } else {

        //estoy mando un parametro o sea los datos
        otroparametro(null, usuario);

    }
}
mifuncion(10, (err, otroparametro) => {

    if (err) {
        return console.log(err);
    }

    //a y no estamos concatenando es poner otro argumento para que aparesca el texto y lugo el hojeto = otroparametro
    console.log('usuario de la bvase de datos', otroparametro);

});











let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'yeison',
        id
    }
    callback(usuario);
}

getUsuarioById(10, (usuario) => {
    console.log('usuario base de datos', usuario);
});