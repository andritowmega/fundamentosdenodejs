const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta,(err,data)=>{
        console.log("data",data.toString());
    });
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta,contenido,(err)=>{
        if(err){
            console.error("No se pudo escribir ",err);
        }
        else console.log("Escrito correctamente");
    });
}

function borrar(ruta,cb){
    fs.unlink(ruta,cb);
}

leer(__dirname+'/archivo.txt',console.log);
console.log("-------");
escribir(__dirname+'/archivo1.txt',"Soy un archivo nuevo",console.log);
console.log("-------");
borrar(__dirname+'/archivo.txt',console.log);