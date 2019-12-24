//simulando una base de datos 
let empleado = [{
    id: 1,
    nombre: 'yeison'
}, {
    id: 2,
    nombre: 'bedoya'
}, {
    id: 3,
    nombre: 'pedro'
}];

let salario = [{
    id: 1,
    salario: 2000000
}, {
    id: 2,
    salario: 2500000
}];


let getEmpleaods = (id, callbacks) => {
    let empledoBD = empleado.find(empleado => empleado.id === id);
    if (!empledoBD) {
        callbacks(`No esiste un empleado con el ID ${id}`);
    } else {
        callbacks(null, empledoBD);
    }
    //para verificar si todo esta correto
    // console.log(empledoBD);
}

let getSalario = (empleado, callbacks) => {
    let salarioBD = salario.find(salario => salario.id === empleado.id);
    if (!salarioBD) {
        callbacks(`No se encontro un salario para el usuario  ${ empleado.nombre }`);
    } else {
        callbacks(null, {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado
        });
    }
}
getEmpleaods(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };
        console.log(`el salario de ${resp.nombre} es de ${resp.salario}$`);
    })
});