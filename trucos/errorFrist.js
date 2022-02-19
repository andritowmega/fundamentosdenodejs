const { callbackify } = require("util");
const { Z_ASCII } = require("zlib")

// el primer parametro que se debería pasar en callbacks es el error
function asincrona(callback){
    setTimeout(()=>{
        try{
            let a = 3 + Z;
            callback(null, a);
        } catch(e){
            callback(e);
        }
    },1000);
}

asincrona((err,dato)=>{
    if(err){
        console.error("Tenemos un error ",err);
        return false;

        // throw err; // No va funcioanr si afuera se pone un try catch
    }else{
        console.log("ok",dato);

    }
})