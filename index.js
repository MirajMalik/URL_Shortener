const express = require('express');
const app = express();
const PORT = 8001;


app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.listen(PORT,(req,res)=>{
    console.log(`The server is running at port : ${PORT}`)
})