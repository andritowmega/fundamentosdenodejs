let suma = 0;
//para saber cuanto tarda un proceso
console.time("todo");
console.time("bucle");
for (let i = 0; i < 10000000; i++) {
  suma++;
}
console.timeEnd("bucle");

let suma2 = 0;
console.time("bucle2");
for (let i = 0; i < 100000000; i++) {
  suma2++;
}
console.timeEnd("bucle2");

console.time("asincrono");
asincrona().then(() => {
  console.timeEnd("asincrono");
});

console.timeEnd("todo");
//funciones asyncronas

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Termina el proceso Asíncrono");
      resolve();
    });
  });
}
