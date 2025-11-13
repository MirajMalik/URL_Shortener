const mongoose = require('mongoose');

async function connectToMongoDB(url) {
    try{
         await mongoose.connect(url);
        console.log("MongoDB Connected");

    } catch(error){
        console.log(error);
    }
    

}

module.exports = {
    connectToMongoDB
}