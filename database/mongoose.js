const mongoose = require ('mongoose');
//permet de connecter de maniére synchrone
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb',{useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("DB Connected Successfuly")
             })
        .catch((error)=>{
            console.log(error)
              });
//export from node modules
 module.exports =  mongoose;             