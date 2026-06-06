import { createServer } from "node:http"; 

const frase1  =  Promise.resolve( 'Ola'); 
const frase2 = Promise.resolve('Mundo'); 
const frasesPromises = [ frase1, frase2]; 
const frases = [];

for await ( const frase of frasesPromises) { 
    console.log(frase); 
    frases.push(frase); 
}
//console.log(frases.join()); 

const parte1 = Buffer.from('Ola '); 
const parte2 = Buffer.from( 'Mundo'); 
const final = Buffer.concat([parte1,parte2]); 
//console.log(final);  
//console.log(final.toString('utf-8')); 
// console.log(parte1)





const server = createServer( async(req,res) => { 
    res.statusCode = 200; 
    res.setHeader("content-type","text/html")

const url = new URL (req.url, 'http://localhost'); 

const cor = url.searchParams.get('cor'); 
const tamanho = url.searchParams.get('tamanho');  
//console.log(req.headers['content-type'])
//console.log(req.rawHeaders)

//console.log(url)

const chunks = []; 
for await ( const chunk of req){ 
    chunks.push(chunk); 
}
console.log(Buffer.concat(chunks)); 
const body = Buffer.concat(chunks).toString('utf-8');
console.log(body); 
console.log( JSON.parse(body));
console.log(JSON.parse(body).username); 
console.log(JSON.parse(body).senha);  



  
     //responstas de erro e status code
if(req.method === 'GET'&& url.pathname==='/'){
    res.statusCode = 200;  
    res.end("Home")
}
else if(req.method === 'POST' && url.pathname ==='/produtos') {
    res.statusCode = 201;  
    res.end(`Produto: ${cor}, ${tamanho}`);
}else { 
    res.statusCode = 404; 
    res.end( "Pagina nõa encontrada"); 
}


console.log (req.method) 
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     


server.listen(3000,()=> {console.log("Server: http://localhost:3000")}); 