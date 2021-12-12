const http = require('http');

http.createServer(router).listen(3000);

function router (req,res){
    console.log('nueva petición');
    console.log(req.url);
    switch(req.url){
        case '/hola':
            res.write('hola, que tal');
            res.end();
            break;
        default:
            res.write('error 404');
            res.end();
            break;
    }
    /*
    res.writeHead(201,{'Content-Type':'text/plain'})
    res.write('usando http nodejs');
    res.end();*/
}