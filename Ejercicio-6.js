
// ─────────────────────────────────────────────
// 6. Ordenamiento por inserción (Insertion Sort)
// ─────────────────────────────────────────────
// Toma cada elemento y lo "inserta" en la posición correcta
// dentro de la parte ya ordenada del arreglo.
console.log("\n=== 6. Ordenamiento por Inserción ===");
function insercion(arreglo) {
  let arr = [...arreglo]; // copia para no modificar el original
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let actual = arr[i]; // elemento que vamos a insertar
    let j = i - 1;
    // desplaza los elementos mayores una posición a la derecha
    while (j >= 0 && arr[j] > actual) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = actual; // inserta en la posición correcta
  }
  return arr;
}
 
let paisesOrdenadosInsercion = insercion(paises);
console.log("Arreglo ordenado con inserción:");
console.log(paisesOrdenadosInsercion);
 