// SENA_API_Proyecto/server.js (CÓDIGO FINAL Y COMPLETO)

const express = require('express');
const cors = require('cors'); // <-- LÍNEA NUEVA: Importa el paquete CORS
const app = express();
const PORT = 3000;

// IMPORTAR RUTAS
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');
const serviceRoutes = require('./src/routes/serviceRoutes');
const authRoutes = require('./src/routes/authRoutes');

// Middleware para habilitar CORS
app.use(cors()); // <-- LÍNEA NUEVA: Activa el CORS para permitir la conexión del HTML

// Middleware para leer JSON
app.use(express.json()); 

// CONEXIÓN DE RUTAS (Endpoints)
app.use('/api/productos', productRoutes);
app.use('/api/usuarios', userRoutes);
app.use('/api/servicios', serviceRoutes);
app.use('/api/auth', authRoutes);

// Ruta de Bienvenida
app.get('/', (req, res) => {
    res.status(200).send({
        message: "API del Proyecto SENA lista para trabajar.",
        status: "OK"
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor Express activo en: http://localhost:${PORT}`);
});