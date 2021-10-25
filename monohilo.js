console.log("hola mundo");

let i=0;
    //se ejecuta en otro hilo asincronamente
    setInterval(()=>{
        console.log(i);
        i++;
        if(i === 5){
            // si se fuerza el error detiene todo el proceso.
            var a = 3 + z;
        }
    },1000);

console.log("Segunda instrucción");

