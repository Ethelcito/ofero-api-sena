// src/models/User.js
class User {
    // Array para simular la base de datos de usuarios
    static users = [
        // Usuario Admin por defecto
        { id: 1, name: 'Sebastian Admin', email: 'admin@ofero.com', password: 'password123', role: 'admin' }
    ];
    static nextId = 2; // El siguiente ID será el 2

    static getAll() {
        return User.users;
    }

    static create(newUserData) {
        const newUser = {
            id: User.nextId++,
            role: 'client', // Por defecto son clientes, solo yo soy el admin
            ...newUserData
        };
        User.users.push(newUser);
        return newUser;
    }

    static update(id, updateData) {
        const index = User.users.findIndex(u => u.id === id);
        if (index === -1) return null;
        
        // No permitir cambiar el ID
        User.users[index] = { ...User.users[index], ...updateData, id: id };
        return User.users[index];
    }

    static delete(id) {
        const initialLength = User.users.length;
        User.users = User.users.filter(u => u.id !== id);
        return User.users.length !== initialLength;
    }
}

module.exports = User;