function hola(nombre,miCallback){
    setTimeout(()=>{
        console.log('hola '+nombre);
        miCallback();
    },1500);
}

function hablar(callbackHablar){
    setTimeout(()=>{
        console.log("bla bla bla bla ...");
        callbackHablar();
    },1000);
}

function adios(nombre,otroCallback){
    setTimeout(()=>{
        console.log("Adios "+nombre);
        otroCallback();
    },1000);
}
let usuario = "andres";
//tipico llamado
/*
hola(usuario,()=>{
    hablar(()=>{
        hablar(()=>{
            hablar(()=>{
                adios(usuario,()=>{
                    console.log("terminando programa");
                });
            })
        })
    })
});
*/

//con recursividad
function conversacion(nombre,veces,callback){
    if(veces>0){
        hablar(()=>{
            conversacion(nombre, --veces,callback);
        });
    } else {
        adios(nombre,callback);
    }
}
hola(usuario,()=>{
    conversacion(usuario,5,()=>{
        console.log("proceso terminado");
    });
});