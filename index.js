const express = require('express');

//crear el servidor
const app = express();

//habilitar express.json
app.use(express.json({ extended:true }));

//puerto
const PORT = process.env.PORT || 4000;

//IMPORTAR RUTAS
app.use('/api/productos', require('./routes/productos'));

app.listen(PORT, () => {
    console.log(`el servidor esta en el puerto ${PORT}`);
});