const mongoose = require("mongoose");
const { MONGO_URL } = require("../../config");

//import models
require("./Users");


module.exports = async function(){
    try{
        await mongoose.connect(MONGO_URL)
        console.log("db Connected")
    }catch(e){
        console.log("MONGO ERROR " , e);
    }
}