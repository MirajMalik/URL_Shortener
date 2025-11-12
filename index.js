const express = require('express');
const app = express();
const PORT = 8001;
const urlRoute = require('./routes/url.route')

app.use('/url',urlRoute);

app.listen(PORT,(req,res)=>{
    console.log(`The server is running at port : ${PORT}`)
})