// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const Auth = require('../models/Auth'); // Importamos la nueva clase Auth

// 1. POST /api/auth/login - INICIO DE SESIÓN
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Validar las credenciales usando la clase Auth
    const result = Auth.login(email, password);

    if (result) {
        res.status(200).json(result); // 200 OK y devuelve el token
    } else {
        res.status(401).json({ message: 'Credenciales inválidas.' }); // 401 Unauthorized
    }
});

// Este módulo solo necesita la ruta POST /login, no requiere GET, PUT ni DELETE
module.exports = router;