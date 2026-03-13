let paises = ["Colombia", "Argentina", "Brasil", "Chile", "Peru","México", "España", "Francia", "Alemania", "Italia","Estados Unidos", "Canadá", "Japón", "China", "Corea del Sur","India", "Australia", "Portugal", "Suiza", "Suecia"];

//Mostrar solo los nombres de los paises recorriendo el arreglo
/*console.log("Punto Numero 1. Mostrar solo los nombres de los paises recorriendo el arreglo")
for(let i = 0; i < paises.length; i++){
    console.log(paises[i])
}*/

//Mostar logitud del arreglo
console.log(paises.length)

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
 
// ─────────────────────────────────────────────
// 7. Búsqueda binaria
// ─────────────────────────────────────────────
// La búsqueda binaria SOLO funciona en arreglos ordenados.
// Divide el arreglo en mitades: si el elemento buscado es menor
// que el del medio, busca en la mitad izquierda; si es mayor,
// en la mitad derecha. Mucho más rápida que la lineal.
console.log("\n=== 7. Búsqueda Binaria ===");
 
// Primero ordenamos el arreglo (requisito de la búsqueda binaria)
let paisesOrdenados = burbuja(paises);
 
function busquedaBinaria(arreglo, nombre) {
  let inicio = 0;
  let fin = arreglo.length - 1;
 
  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
 
    if (arreglo[medio] === nombre) {
      return medio; // ¡encontrado!
    } else if (arreglo[medio] < nombre) {
      inicio = medio + 1; // buscar en la mitad derecha
    } else {
      fin = medio - 1; // buscar en la mitad izquierda
    }
  }
  return -1; // no encontrado
}
 
// a. Buscar "Brasil"
let posBrasil = busquedaBinaria(paisesOrdenados, "Brasil");
if (posBrasil !== -1) {
  console.log(`a. '${paisesOrdenados[posBrasil]}' encontrado en posición ${posBrasil}`);
} else {
  console.log("a. 'Brasil' no encontrado");
}
 
// b. Buscar "Italia"
let posItalia = busquedaBinaria(paisesOrdenados, "Italia");
if (posItalia !== -1) {
  console.log(`b. '${paisesOrdenados[posItalia]}' encontrado en posición ${posItalia}`);
} else {
  console.log("b. 'Italia' no encontrado");
}
 
// c. Buscar "Alemania"
let posAlemania = busquedaBinaria(paisesOrdenados, "Alemania");
if (posAlemania !== -1) {
  console.log(`c. '${paisesOrdenados[posAlemania]}' encontrado en posición ${posAlemania}`);
} else {
  console.log("c. 'Alemania' no encontrado");
}
 
// ─────────────────────────────────────────────
// 8. Crear arreglo vacío llamado planetas
// ─────────────────────────────────────────────
console.log("\n=== 8. Crear arreglo vacío 'planetas' ===");
let planetas = [];
console.log("Arreglo planetas creado:", planetas);
 
// ─────────────────────────────────────────────
// 9. Insertar elementos al arreglo planetas
// ─────────────────────────────────────────────
// unshift() → inserta al INICIO
// push()    → inserta al FINAL
console.log("\n=== 9. Insertando planetas ===");
 
// a. "Mercurio" al inicio
planetas.unshift("Mercurio");
console.log("Después de insertar 'Mercurio' al inicio:", planetas);
 
// b. "Venus" al inicio
planetas.unshift("Venus");
console.log("Después de insertar 'Venus' al inicio:", planetas);
 
// c. "Tierra" al final
planetas.push("Tierra");
console.log("Después de insertar 'Tierra' al final:", planetas);
 
// d. "Marte" al inicio
planetas.unshift("Marte");
console.log("Después de insertar 'Marte' al inicio:", planetas);
 
// e. "Jupiter" al final
planetas.push("Jupiter");
console.log("Después de insertar 'Jupiter' al final:", planetas);
 
// ─────────────────────────────────────────────
// 10. Eliminar los dos últimos elementos
// ─────────────────────────────────────────────
// pop() elimina y retorna el último elemento del arreglo
console.log("\n=== 10. Eliminando los dos últimos elementos ===");
let eliminado1 = planetas.pop();
console.log(`Eliminado: '${eliminado1}' → planetas ahora:`, planetas);
 
let eliminado2 = planetas.pop();
console.log(`Eliminado: '${eliminado2}' → planetas ahora:`, planetas);