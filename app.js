// appelle express from node module
const express = require('express');
//import from  file mongoose.js
const mongoose = require('./database/mongoose');
// app
const app = express();
//port et callback function
/*app.listen(3000,function (){
    console.log("Serveur started on port 3000");
});*/
//nouvelle methode
app.listen(3000, () => {
    console.log("Serveur started on port 3000 !");
});


