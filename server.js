const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/discSalesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch((err) => {
  console.error('Error conectando a MongoDB:', err.message);
});

// 
const compraSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  direccion: String,
  disco: String,
  cantidad: Number,
  metodoPago: String
});


const Compra = mongoose.model('Compra', compraSchema);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});


app.post('/comprar', (req, res) => {
 
  const nuevaCompra = new Compra({
    nombre: req.body.nombre,
    email: req.body.email,
    direccion: req.body.direccion,
    disco: req.body.disco,
    cantidad: req.body.cantidad,
    metodoPago: req.body.metodoPago
  });


  nuevaCompra.save()
    .then(() => {

      res.redirect('/gracias');
    })
    .catch((err) => {
      console.error('Error guardando la compra:', err);
      res.status(500).send('Error al procesar la compra.');
    });
});


app.get('/gracias', (req, res) => {
  res.send('<h1>Gracias por tu compra</h1><p>Pronto recibirás los detalles en tu correo electrónico.</p>');
});


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


