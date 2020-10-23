// Requires
var express = require('express')
var mongoose = require('mongoose')

// Inicializar variables
var app = express()

// Conexión a DB
mongoose.connection.openUri('mongodb://localhost:27017/hospital_db', (err, res) => {

   if( err ) throw err

   console.log('Base de Datos: \x1b[32m%s\x1b[0m', 'ONLINE ')

})


// Rutas
app.get('/', (req, res, next) => {

   res.status(200).json({
      ok: true,
      mensaje: 'Petición realizada'
   })
})



// Escuchar peticiones
app.listen( 3000, () => {
   console.log('Listen on port: \x1b[32m%s\x1b[0m', '3000 ')
   
})