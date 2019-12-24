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


let getEmpleaods = async(id) => {

    let empledoBD = empleado.find(empleado => empleado.id === id);
    if (!empledoBD) {
        throw new Error(`No esiste un empleado con el ID ${id}`);
    } else {
        return (empledoBD);
    }
    //para verificar si todo esta correto
    // console.log(empledoBD);

}
let getSalario = async(empleado) => {

    let salarioBD = salario.find(salario => salario.id === empleado.id);
    if (!salarioBD) {
        throw new Error(`No se encontro un salario para el usuario ${ empleado.nombre }`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado
        };
    }
}

let getinformacion = async(id) => {

    let empleado = await getEmpleaods(id);
    let resp = await getSalario(empleado);
    //console.log(resp);
    return `${ resp.nombre} tiene un salario de ${resp.salario}$`;
}

getinformacion(1).then(mensaje => console.log(mensaje)).catch(err => console.log(err));