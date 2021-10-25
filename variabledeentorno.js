//se accede al proceso . variables de entorno . nombre de la variable
let saludo = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'No tengo web';

console.log("hola "+saludo);
console.log("mi web es "+web);