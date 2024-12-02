const doctores = [
    { id: 1, nombre: 'Dr. Pérez', especialidad: 'Cardiología' },
    { id: 2, nombre: 'Dra. Morales', especialidad: 'Dermatología' },
    { id: 3, nombre: 'Dr. López', especialidad: 'Neurología' }
];

let citas = [];

function agendarCita(paciente, doctorId, fecha, hora) {
    const doctor = doctores.find(d => d.id === doctorId);
    if (!doctor) {
        return `Doctor no encontrado`;
    }
    if (citasExiste(fecha, hora, doctorId)) {
        return `Horario no disponible para el doctor seleccionado.`;
    }

    const nuevaCita = {
        id: citas.length + 1,
        paciente,
        doctor: doctor.nombre,
        fecha,
        hora
    };
    citas.push(nuevaCita);
    return `Cita agendada para ${paciente} con ${doctor.nombre} el ${fecha} a las ${hora}.`;
}

function citasExiste(fecha, hora, doctorId) {
    const doctor = doctores.find(d => d.id === doctorId);
    return citas.some(c =>
        c.fecha === fecha &&
        c.hora === hora &&
        c.doctor === doctor?.nombre
    );
}

function verCitasPaciente(paciente) {
    return citas.filter(c => c.paciente === paciente);
}

function cancelarCitas(citaId) {
    const index = citas.findIndex(c => c.id === citaId);
    if (index === -1) return `Cita no encontrada`;
    
    citas.splice(index, 1);
    return `Cita cancelada exitosamente`;
}

// Ejemplo de uso
console.log(agendarCita('Luis Fernández', 1, '2024-12-02', '10:30'));
console.log(agendarCita('María González', 2, '2024-12-02', '11:00'));
console.log(agendarCita('Luis Fernández', 1, '2024-12-02', '10:30')); // Intento de cita duplicada
console.log(verCitasPaciente('Luis Fernández'));
console.log(cancelarCitas(1));
console.log(verCitasPaciente('Luis Fernández'));
