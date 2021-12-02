async function hola(nombre) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("hola " + nombre);
        resolve(nombre);
      }, 1500);
    });
  }
  
async function hablar(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("bla bla bla bla ...");
        resolve(nombre);
      }, 1000);
    });
  }
async function adios(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Adios " + nombre);
        resolve();
      }, 1000);
    });
  }

async function main(){
    let nombre = await hola("andres");
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}
console.log("Empezamos el proceso");
main();
console.log("Terminamos el proceso");