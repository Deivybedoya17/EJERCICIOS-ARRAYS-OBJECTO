const alumnos = [
    {nombre: "Carlos", nota: 8.8},
    {nombre: "Sofía", nota: 6.2},
    {nombre: "Daniela", nota: 9.5},
    {nombre: "Andrés", nota: 5.9},
    {nombre: "Gabriela", nota: 7.4}
];
// Filtrar aprobados
const aprobados = alumnos    
.filter(alumnos => alumnos.nota >= 7)
.map(alumnos => alumnos.nombre);
console.log("alumnos aprobados:", aprobados);
