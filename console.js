console.log('algo');
console.info('algo de info');
console.error('algo con error');
console.warn('algo con warning');
console.log("-------------");
var tabla = [
    {
        a:1,
        b:'z',
    },
    {
        a:2,
        b:'X',
    }
]
console.log("tabla con log",tabla);
console.table(tabla);
console.log("-----CONSOLE GROUP--------");
console.group("conver");
console.log("Hola");
console.group("bla");
console.log("Bla bla");
console.log("Bla bla");
console.groupEnd("bla");
console.log("Bla bla");
console.log("Adios");
console.groupEnd("conver");
console.log("esto ya no es conversacion");
console.log("-----END CONSOLE GROUP--------");

function funcion1(){
    console.group('Funcion 1');
    console.log('log de la funcion 1');
    console.log('mas logs de 1');
    console.log('mas logs de 1');
    funcion2()
    console.log('mas logs de 1');
    console.log('mas logs de 1');
    console.groupEnd('Funcion 1');
}
function funcion2(){
    console.group('Funcion 2');
    console.log('Ahora los logs de la funcion 2');
    console.groupEnd('Funcion 1');
}
funcion1();
console.log("-----contador--------");
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
