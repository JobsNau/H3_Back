const express=require('express')
const cors=require('cors')

class Server{

    constructor(){
        this.app=express()
        this.port=process.env.PORT
        this.usuariosPath='/api/usuarios'

        //middlewares
        //this.middlewares();

        //rutas de APP
        this.routes();
    }
    middleware(){
        //CORS
        this.app.use(cors())

        //Lectura y parsero
        this.app.use(express.json())

        //directorio public
        this.app.use(express.static('public'))
    }

    //CORS
    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'))

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor conectado")
        })
    }

}

module.exports=Server