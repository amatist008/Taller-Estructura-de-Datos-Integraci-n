//Usar búsqueda lineal para buscar la posición de un elemento con el nombre
//Chile y mostrar el nombre de ese elemento o decir que no se encuentra

console.log("\n=== 3. Búsqueda lineal de 'Chile' ===");
function busquedaLineal(arreglo, nombre) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === nombre) {
      return i; // retorna la posición si lo encuentra
    }
  }
  return -1; // retorna -1 si no lo encuentra
}
 
let posChile = busquedaLineal(paises, "Chile");
if (posChile !== -1) {
  console.log(`País encontrado: ${paises[posChile]} en la posición ${posChile}`);
} else {
  console.log("El país 'Chile' no se encuentra en el arreglo");
}
 