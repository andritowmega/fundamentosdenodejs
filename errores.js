function otraFuncion(){
    serompe();
}
function serompe(){
    //z no esta definida
    return 3+z;
}
function seRompeAsincrona(cb){
    //si no se pone el try catch dentro de setTimeout detecta error, por que esta funcion se ejecuta en otro hilo, y el hilo principal no tiene como detectar el error
    setTimeout(()=>{
        //probar eliminar este try catch, este try catch se ejecuta en el hilo de setTimeout
        try{
            return 3+z;
        } catch(err){
            console.error("error en funcion asincrona")
            cb(err);
        }
        
    })
}

try{
    //otraFuncion();
    seRompeAsincrona(()=>{
        console.log("ejecutando el callback")
    });
}
catch(err){
    console.error('error en la funcion');
    //console.error(err);
    console.error(err.message);
}
//sin try catch la función detiene toda la ejecución del programa y no se muestra el siguiente log
console.log("final del programa");