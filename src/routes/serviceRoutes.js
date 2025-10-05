// src/routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const Service = require('../models/Service'); // Importamos la nueva clase Service

// 1. GET /api/servicios - CONSULTAR TODOS
router.get('/', (req, res) => {
    const services = Service.getAll(); 
    res.status(200).json(services);
});

// 2. POST /api/servicios - CREAR NUEVO
router.post('/', (req, res) => {
    const newService = Service.create(req.body);
    res.status(201).json(newService);
});

// 3. PUT /api/servicios/:id - ACTUALIZAR
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedService = Service.update(id, req.body);
    
    if (updatedService) {
        res.status(200).json(updatedService);
    } else {
        res.status(404).json({ message: 'Servicio no encontrado.' });
    }
});

// 4. DELETE /api/servicios/:id - ELIMINAR
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const success = Service.delete(id);

    if (success) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Servicio no encontrado para eliminar.' });
    }
});

module.exports = router;