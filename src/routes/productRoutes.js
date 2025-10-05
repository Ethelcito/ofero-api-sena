// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // <-- La importacion CRiTICA

// 1. GET /api/productos - CONSULTAR TODOS
router.get('/', (req, res) => {
    const products = Product.getAll(); 
    res.status(200).json(products);
});

// 2. POST /api/productos - CREAR NUEVO
router.post('/', (req, res) => {
    const newProduct = Product.create(req.body);
    res.status(201).json(newProduct);
});

// 3. PUT /api/productos/:id - ACTUALIZAR
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedProduct = Product.update(id, req.body);
    
    if (updatedProduct) {
        res.status(200).json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Producto no encontrado.' });
    }
});

// 4. DELETE /api/productos/:id - ELIMINAR
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const success = Product.delete(id);

    if (success) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Producto no encontrado para eliminar.' });
    }
});

module.exports = router;