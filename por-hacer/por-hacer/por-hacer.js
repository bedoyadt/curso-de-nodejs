const fs = require('fs');

let listadoPorhacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('NO se pudo Gravar', err);

    });

}

const cargarDB = () => {

    try {
        listadoPorhacer = require('../db/data.json');
        console.log(listadoPorhacer);
    } catch (error) {
        listadoPorhacer = [];
    }



}

//este es pata crear un archivo json
const crear = (descripcion) => {

        cargarDB();

        let porHacer = {
            descripcion,
            completado: false
        };
        listadoPorhacer.push(porHacer);

        guardarDB();

        return porHacer;
    }
    //este es el de listar documentos del archivo json 
const getListado = () => {

    cargarDB();

    return listadoPorhacer;
}


//actualizar lista de tareas
const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;

    } else {
        return false;
    }

}

//borrar tarea
const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorhacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (listadoPorhacer.length === nuevoListado.length) {

        return false;

    } else {
        listadoPorhacer = nuevoListado;
        guardarDB();
        return false;
    }

}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}