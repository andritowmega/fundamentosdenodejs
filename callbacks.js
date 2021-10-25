//se le envia un parametro "miCallback" que puede ser una funcion 
//se llama a la variable "miCallback" que es una función cuando termino el proceso;
function soyAsincrona(miCallback){
    console.log('hola, soy una función asíncrona');
    setTimeout(()=>{
        console.log("Estoy siendo asíncrona");
        miCallback();
    },1000);
}
console.log('Iniciando proceso...');

//envio por parametro una función que va ser llamada dentro de soyAsincrona

soyAsincrona(()=>{
    console.log('Terminando proceso, llamado desde mi callback');
});


//Ahora pasamos otras variables y el callback
function hola(nombre,miCallback){
    setTimeout(()=>{
        console.log('hola '+nombre);
        miCallback();
    },1500);
}

function adios(nombre,otroCallback){
    setTimeout(()=>{
        console.log("Adios "+nombre);
        otroCallback();
    },1000);
}

//envio por parametro una función que va ser llamada dentro de soyAsincrona
//Aquí se puede llamar ordenadamente varias funciones asíncronas

let usuario="andres";
hola(usuario,()=>{
    adios(usuario,()=>{
        console.log("terminando programa");
    });
});

//Ahora llamamos las dos funciones asíncronas sin control
setTimeout(()=>{
    let usuario = "andres";
    console.log("->Sin control de asincronia");
    hola(usuario,()=>{});
    adios(usuario,()=>{});
},4000)
