const response = await fetch ('http://localhost:3000/produtos?cor=verde&tamanho=g',{
    method:'POST', 
    headers: { 'content-type': 'application/json'}, 
    body : JSON.stringify({username: 'Maycon', senha:"12345"})



} ); 


const body = await response.text();  

console.log(body); 