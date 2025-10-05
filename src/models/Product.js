// src/models/Product.js
class Product {
    static products = [
        { id: 1, name: 'Ledo 2', price: 2100000, description: 'La forma más divertida de moverte.' },
        { id: 2, name: 'Ledo 3', price: 2450000, description: 'Con estilo y actitud.' },
        { id: 3, name: 'Stareer 2', price: 4000000, description: 'Potencia, estilo y tecnología.' }
    ];
    static nextId = 4;

    static getAll() {
        return Product.products;
    }

    static create(newProductData) {
        const newProduct = {
            id: Product.nextId++,
            ...newProductData
        };
        Product.products.push(newProduct);
        return newProduct;
    }

    static update(id, updateData) {
        const index = Product.products.findIndex(p => p.id === id);
        if (index === -1) return null;
        Product.products[index] = { ...Product.products[index], ...updateData, id: id };
        return Product.products[index];
    }

    static delete(id) {
        const initialLength = Product.products.length;
        Product.products = Product.products.filter(p => p.id !== id);
        return Product.products.length !== initialLength;
    }
}

module.exports = Product;