const argv = require('yargs').command('listar', 'imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 30
    }
}).help().argv;

const { crearchivo } = require('./multiplicar/multiplicar.js');

let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
console.log('limite', argv.limite);


//let base = 5;

//console.log(process);

//crearchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => {
//  console.log(e);
//});

//node app --base=15