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



let getEmpleaods = (id) => {

    return new Promise((resolve, rejects) => {

        let empledoBD = empleado.find(empleado => empleado.id === id);
        if (!empledoBD) {
            rejects(`No esiste un empleado con el ID ${id}`);
        } else {
            resolve(empledoBD);
        }
        //para verificar si todo esta correto
        // console.log(empledoBD);

    });

}
let getSalario = (empleado) => {

    return new Promise((resolve, rejects) => {

        let salarioBD = salario.find(salario => salario.id === empleado.id);
        if (!salarioBD) {
            rejects(`No se encontro un salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado
            });
        }
    });
}
getEmpleaods(1).then(empleado => {
    //console.log('Empleado de DB', empleado);
    getSalario(empleado).then(resp => {
        console.log(`el salario de ${resp.nombre} es de ${resp.salario}$`);
    }, (err) => console.log(err));
}, (err) => {
    console.log(err);
});