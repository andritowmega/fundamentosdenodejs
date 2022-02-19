const fs = require('fs');
const stream = require('stream');
const util = require('util');

// Stream de Lectura

let data = '';
let readableStream = fs.createReadStream(__dirname+'/input.txt');
readableStream.setEncoding('UTF8');
readableStream.on('data', (chunk)=>{
    //console.log(chunk);
    //para archivos grandes se va concatenando en data
    //se usa para grandes archivos como videos que pueden pesar muchos gigas
    data+= chunk;
});
//para archivos grandes tenemos que escuchar cuando terminamos de recibir información
readableStream.on('end',()=>{
    console.log(data);
});

//Stream de escritura
/*
process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('tal');*/

/*
const Transform = stream.Transform;
function CrearMayusculas(){
    Transform.call(this);
}
util.inherits(CrearMayusculas, Transform);

CrearMayusculas.prototype._transform() = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}
let mayus = new CrearMayusculas();

ReadableStream.pipe(CrearMayusculas).pipe(process.stdout);*/
