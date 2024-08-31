const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port= process.env.PORT;

        //Midelware
        this.middleware();



        //rutas de aplicacion
        this.routes();
    }

    middleware(){
        
        this.app.use(cors());

        //lectura y parseo de body
        this.app.use( express.json() );

        this.app.use( express.static('public') ) ;
    }

    

 
    routes() {
        this.app.use('/api/usuarios',require('../routes/user'));


   
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('servidor puerto',this.port )
        })
    }

}

module.exports = Server