// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importamos la nueva clase User

// 1. GET /api/usuarios - CONSULTAR TODOS
router.get('/', (req, res) => {
    const users = User.getAll(); 
    res.status(200).json(users);
});

// 2. POST /api/usuarios - CREAR NUEVO
router.post('/', (req, res) => {
    const newUser = User.create(req.body);
    res.status(201).json(newUser);
});

// 3. PUT /api/usuarios/:id - ACTUALIZAR
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = User.update(id, req.body);
    
    if (updatedUser) {
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado.' });
    }
});

// 4. DELETE /api/usuarios/:id - ELIMINAR
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const success = User.delete(id);

    if (success) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Usuario no encontrado para eliminar.' });
    }
});

module.exports = router;