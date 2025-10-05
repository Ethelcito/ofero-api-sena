// src/models/Service.js
class Service {
    // Array para simular la base de datos de servicios
    static services = [
        { id: 1, name: 'Mantenimiento Preventivo', price: 80000, description: 'Revisión completa de frenos, batería y motor.' },
        { id: 2, name: 'Diagnóstico de Batería', price: 45000, description: 'Evaluación del estado de la batería y ciclo de vida.' }
    ];
    static nextId = 3;

    static getAll() {
        return Service.services;
    }

    static create(newServiceData) {
        const newService = {
            id: Service.nextId++,
            ...newServiceData
        };
        Service.services.push(newService);
        return newService;
    }

    static update(id, updateData) {
        const index = Service.services.findIndex(s => s.id === id);
        if (index === -1) return null;
        
        Service.services[index] = { ...Service.services[index], ...updateData, id: id };
        return Service.services[index];
    }

    static delete(id) {
        const initialLength = Service.services.length;
        Service.services = Service.services.filter(s => s.id !== id);
        return Service.services.length !== initialLength;
    }
}

module.exports = Service;