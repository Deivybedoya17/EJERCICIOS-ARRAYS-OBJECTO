const ventas = [
    {producto: "Cerezas", categoria: "Frutas", monto: 1120},
    {producto: "Mantequilla", categoria: "Lácteos", monto: 2250},
    {producto: "Duraznos", categoria: "Frutas", monto: 1140},
    {producto: "Crema", categoria: "Lácteos", monto: 3110},
    {producto: "Helado", categoria: "Postres", monto: 2120},
    {producto: "sandia", categoria:"Frutas", monto: 2300}
];
const ventasPorCategoria = ventas.reduce((acc, venta) => {
    acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
    return acc;
}, {});
console.log("Ventas por categoría:", ventasPorCategoria);
