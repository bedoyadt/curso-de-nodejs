//async y await

/*
let getnombre = async() => {

    //para disparar un eroor
    //throw new Error('no esiste un nonbre para este usurio');

    return 'yeison';
};*/

let getnombre = () => {
    return new Promise((resolve, rejects) => {

        setTimeout(() => {
            resolve('yeison');
        }, 3000);


    });
}

//console.log(getnombre());

getnombre().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log('error de async', e);
});