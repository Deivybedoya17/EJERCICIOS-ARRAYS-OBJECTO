const peliculas = [
    { id: 1, nombre: "Avengers", horarios: ["14:00", "17:00", "20:00"], precio: 15 },
    { id: 2, nombre: "Star Wars", horarios: ["15:00", "18:00", "21:00"], precio: 15 }
];

let asientos = [
    { numero: "A1", ocupado: false },
    { numero: "A2", ocupado: false },
    { numero: "A3", ocupado: true },
    { numero: "B1", ocupado: false },
    { numero: "B2", ocupado: false }
];

let boletas = [];

function verPeliculas() {
    return peliculas.map(p => ({
        nombre: p.nombre,
        horarios: p.horarios
    }));
}

function verAsientosDisponibles() {
    return asientos.filter(a => !a.ocupado);
}

function comprarBoleta(peliculaId, horario, asientosSeleccionados) {
    // Verificar si la película existe
    const pelicula = peliculas.find(p => p.id === peliculaId);
    if (!pelicula) return "Película no encontrada";

    // Verificar si el horario está disponible
    if (!pelicula.horarios.includes(horario)) {
        return "Horario no disponible";
    }

    // Verificar si los asientos seleccionados están disponibles
    const asientosValidos = asientosSeleccionados.every(asiento => {
        const asientoExiste = asientos.find(a => a.numero === asiento && !a.ocupado);
        return asientoExiste;
    });

    if (!asientosValidos) return "Asientos no disponibles";

    // Calcular el costo total
    const total = pelicula.precio * asientosSeleccionados.length;

    // Marcar los asientos como ocupados
    asientosSeleccionados.forEach(asiento => {
        const idx = asientos.findIndex(a => a.numero === asiento);
        asientos[idx].ocupado = true;
    });

    // Crear la boleta
    const boleta = {
        id: boletas.length + 1,
        pelicula: pelicula.nombre,
        horario,
        asientos: asientosSeleccionados,
        total
    };

    // Agregar la boleta al historial
    boletas.push(boleta);
    return boleta;
}

// Ejemplo de uso
console.log(verPeliculas());
console.log(verAsientosDisponibles());
console.log(comprarBoleta(1, "14:00", ["A1", "A2"])); // Compra válida
console.log(verAsientosDisponibles()); // Ver los asientos disponibles después de la compra






