 
// ─────────────────────────────────────────────
// 7. Búsqueda binaria
// ─────────────────────────────────────────────
// La búsqueda binaria SOLO funciona en arreglos ordenados.
// Divide el arreglo en mitades: si el elemento buscado es menor
// que el del medio, busca en la mitad izquierda; si es mayor,
// en la mitad derecha. Mucho más rápida que la lineal.
let paises = [
  "Colombia", "Argentina", "Brasil", "Chile", "Peru",
  "México", "España", "Francia", "Alemania", "Italia",
  "Estados Unidos", "Canadá", "Japón", "China", "Corea del Sur",
  "India", "Australia", "Portugal", "Suiza", "Suecia"
];

// necesitas esta función porque la búsqueda binaria requiere el arreglo ordenado
function burbuja(arreglo) {
  let arr = [...arreglo];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function busquedaBinaria(arreglo, nombre) {
  let inicio = 0;
  let fin = arreglo.length - 1;
  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    if (arreglo[medio] === nombre) {
      return medio;
    } else if (arreglo[medio] < nombre) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }
  return -1;
}

console.log("=== 7. Búsqueda Binaria ===");
let paisesOrdenados = burbuja(paises);

// a. Brasil
let posBrasil = busquedaBinaria(paisesOrdenados, "Brasil");
console.log(`a. '${paisesOrdenados[posBrasil]}' encontrado en posición ${posBrasil}`);

// b. Italia
let posItalia = busquedaBinaria(paisesOrdenados, "Italia");
console.log(`b. '${paisesOrdenados[posItalia]}' encontrado en posición ${posItalia}`);

// c. Alemania
let posAlemania = busquedaBinaria(paisesOrdenados, "Alemania");
console.log(`c. '${paisesOrdenados[posAlemania]}' encontrado en posición ${posAlemania}`);