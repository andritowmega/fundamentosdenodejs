const os = require('os');

//arquitectura
console.log(os.arch());

//plataforma
console.log(os.platform());

//cpus
console.log(os.cpus().length);

//errores y señales del sistema
//console.log(os.constants);

//memoria
const SIZE = 1024
function kb(bytes) {
    return bytes/SIZE;
}
function mb(bytes) {
    return kb(bytes)/SIZE;
}
function gb(bytes) {
    return mb(bytes)/SIZE;
}
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

//dir raiz
console.log(os.homedir());
console.log(os.tmpdir());

//host
console.log(os.hostname());

//red
console.log(os.networkInterfaces());