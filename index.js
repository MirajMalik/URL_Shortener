const express = require('express');
const app = express();
const{connectToMongoDB} = require("./connectionDb");
const PORT = 8001;
const url = 'mongodb+srv://miraj_db:miraj_db@cluster0.xlenclv.mongodb.net/?appName=Cluster0'
const urlRoute = require('./routes/url.route')

connectToMongoDB(url)
.then(()=> console.log('Mongodb connected'));

app.use(express.json());

app.use('/url',urlRoute);

app.listen(PORT,()=>{
    console.log(`The server is running at port : ${PORT}`)
})