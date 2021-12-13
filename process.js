//const process = require('process');
process.on('beforeExit',()=>{
    console.log("el proceso va a terminar");
})
process.on('exit',()=>{
    console.log("proceso terminado");
})

//capturar error que no estar en try catch
process.on('uncaughtException',(err,origen)=>{
    console.log("se nos olvido capturar un error");
    //console.error(err);
});

functionQueNoExiste();

console.log("Si hay error, esto no se ejecuta");