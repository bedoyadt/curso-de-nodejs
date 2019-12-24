const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Deacripcion de la Tearea por Hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como Completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un Elemto por Hacer', {
        descripcion
    })
    .command('Actualizar', 'Actualizar un Elemto por Hacer', {
        descripcion,
        completado
    }).command('borrar', 'borar por Hacer', {
        descripcion
    }).help().argv;

module.exports = {
    argv
}