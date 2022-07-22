const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send({"msg":"Hola javier!!"})
});

app.get('*', (req, res)=>{
    res.status(404);
    res.send({"msg":"404 - estas perdido"})
});



app.listen(4000,()=>{
    console.log("funcionando en el puerto 4000");
});