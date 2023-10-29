const express = require('express')
const cors = require('cors')


class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usersPatch = '/api/users'

        // Middlewares
        this.middlewares()

        // Rutas de mi aplicación
        this.router()
    }

    middlewares() {
        // CORS
        this.app.use( cors() )
        // Lectura y parceo del body
        this.app.use( express.json() )
        // Directorio Publico
        this.app.use( express.static('public') )
    }

    router() {

        // Directorio Publico
        this.app.use( this.usersPatch, require('../routes/user.router') )
    }

    listen() {
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }

}

module.exports = Server