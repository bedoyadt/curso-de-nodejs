//==============================
//puerto
//==============================
process.env.PORT = process.env.PORT || 3000;

//=================
//entorno
//==========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================
//Base de Datos
//==========================

let urlDb;
if (process.env.NODE_ENV === 'dev') {
    urlDb = 'mongodb://localhost:27017/cafe';
} else {
    urlDb = 'mongodb+srv://yeison:Bedoya701@cluster0-hqesz.mongodb.net/test?retryWrites=true&w=majority';
}
process.env.URLDB = urlDb;





//==============================Conection a mlab===================================


//===================================================================================