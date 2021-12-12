const { exec,spawn } = require('child_process');

//proceso de listar archivos en windows
exec('dir',(err,stdout,sterr)=>{
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
})
console.log("-----------")
//ejecutando otro proceso en node
/*exec('node console.js',(err,stdout,sterr)=>{
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
})
*/
let proceso = spawn('dir',['-la']);
console.log(proceso.pid);
console.log("-----------spawn ");

//eventos
proceso.stdout.on('data',function (dato){
    console.log(dato.toString())
})

proceso.on('exit',()=>{
    console.log("proceso muerto",proceso.killed);
    console.log("proceso terminado");
})