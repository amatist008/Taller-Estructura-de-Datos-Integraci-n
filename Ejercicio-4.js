let paises = ["Colombia", "Argentina", "Brasil", "Chile", "Peru","México", "España", "Francia", "Alemania", "Italia","Estados Unidos", "Canadá", "Japón", "China", "Corea del Sur","India", "Australia", "Portugal", "Suiza", "Suecia"];


// ─────────────────────────────────────────────
// 4. Búsqueda lineal de "Francia" → mostrar posición
// ─────────────────────────────────────────────
console.log("\n=== 4. Búsqueda lineal de 'Francia' ===");
let posFrancia = busquedaLineal(paises, "Francia");
if (posFrancia !== -1) {
  console.log(`'Francia' está en la posición: ${posFrancia}`);
} else {
  console.log("'Francia' no se encuentra en el arreglo");
}