// Estado inicial del hotel
const habitaciones = [
    { numero: 201, tipo: 'individual', precio: 120, ocupada: false },
    { numero: 202, tipo: 'doble', precio: 200, ocupada: false },
    { numero: 203, tipo: 'suite deluxe', precio: 350, ocupada: false },
    { numero: 204, tipo: 'individual', precio: 100, ocupada: false },
    { numero: 205, tipo: 'doble', precio: 180, ocupada: false }
];

// Registro de reservas
let reservas = [];

// Función para hacer una reserva
function reservarHabitacion(numeroHabitacion, huesped, fechaIngreso, fechaSalida) {
    const habitacion = habitaciones.find(h => h.numero === numeroHabitacion);

    if (!habitacion) {
        return `La habitación ${numeroHabitacion} no existe.`;
    }

    if (habitacion.ocupada) {
        return `La habitación ${numeroHabitacion} ya está ocupada.`;
    }

    // Marcar la habitación como ocupada
    habitacion.ocupada = true;

    // Crear nueva reserva
    const nuevaReserva = {
        id: reservas.length + 1,
        habitacion: numeroHabitacion,
        huesped,
        fechaIngreso,
        fechaSalida
    };

    // Agregar a la lista de reservas
    reservas.push(nuevaReserva);

    return `Reserva confirmada para ${huesped} en la habitación ${numeroHabitacion}.`;
}

// Función para ver habitaciones disponibles
function verDisponibles() {
    return habitaciones.filter(h => !h.ocupada);
}

// Función para cancelar una reserva
function cancelarReserva(numeroHabitacion) {
    const habitacion = habitaciones.find(h => h.numero === numeroHabitacion);

    if (!habitacion) {
        return `La habitación ${numeroHabitacion} no existe.`;
    }

    if (!habitacion.ocupada) {
        return `La habitación ${numeroHabitacion} ya está libre.`;
    }

    // Marcar la habitación como libre
    habitacion.ocupada = false;

    // Eliminar reserva asociada
    reservas = reservas.filter(r => r.habitacion !== numeroHabitacion);

    return `Reserva cancelada para la habitación ${numeroHabitacion}.`;
}

// Ejemplo de uso
console.log('Habitaciones disponibles:', verDisponibles());
console.log(reservarHabitacion(202, 'Ana Gómez', '2024-12-05', '2024-12-10'));
console.log(reservarHabitacion(203, 'Luis Hernández', '2024-12-06', '2024-12-12'));
console.log('Habitaciones disponibles:', verDisponibles());
console.log(cancelarReserva(202));
console.log('Habitaciones disponibles:', verDisponibles());
console.log(reservarHabitacion(201, 'Clara Martínez', '2024-12-07', '2024-12-15'));
console.log('Reservas actuales:', reservas);


