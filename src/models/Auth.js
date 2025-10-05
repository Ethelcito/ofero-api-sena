// src/models/Auth.js
const User = require('./User'); // Importamos la clase User para buscar credenciales

class Auth {
    /**
     * Simulacion el proceso de inicio de sesión.
     * @param {string} email 
     * @param {string} password 
     * @returns {object | null} Retorna un objeto con un token si las credenciales son válidas.
     */
    static login(email, password) {
        // Buscamos un usuario con el email proporcionado.
        // Asumiremos que el usuario admin (id: 1) de la clase User es el que usaremos.
        const user = User.users.find(u => u.email === email && u.password === password);

        if (user) {
            // En un proyecto real, se usaría JWT (JSON Web Token).
            // Aquí simularemos el token como "autenticacion_exitosa_id:[ID_DEL_USUARIO]".
            const token = `autenticacion_exitosa_id:${user.id}`;
            return {
                message: 'Inicio de sesión exitoso',
                user: { id: user.id, name: user.name, role: user.role },
                token: token
            };
        } else {
            return null; // Credenciales inválidas
        }
    }
}

module.exports = Auth;