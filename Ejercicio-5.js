// ─────────────────────────────────────────────
// 5. Ordenamiento burbuja (Bubble Sort)
// ─────────────────────────────────────────────
// Compara pares de elementos adyacentes y los intercambia
// si están en el orden incorrecto. Repite hasta ordenar todo.
console.log("\n=== 5. Ordenamiento Burbuja ===");
function burbuja(arreglo) {
  let arr = [...arreglo]; // copia para no modificar el original
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // intercambio (swap)
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
 
let paisesOrdenadosBurbuja = burbuja(paises);
console.log("Arreglo ordenado con burbuja:");
console.log(paisesOrdenadosBurbuja);
 