import { createServer } from "node:http"; 

const server = createServer((req,res) => { 
    res.statusCode = 200; 
    res.setHeader("content-type","text/html")

const url = new URL (req.url, 'http://localhost'); 

const cor = url.searchParams.get('cor'); 
const tamanho = url.searchParams.get('tamanho');  
console.log(req.headers['content-type'])
console.log(req.rawHeaders)



//console.log(url)

  
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