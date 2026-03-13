# Taller de Estructuras de Datos

## 📚 Descripción General
Este taller práctico de **Estructuras de Datos** está enfocado en **arreglos lineales** y algoritmos fundamentales implementados en **JavaScript**. Contiene **10 ejercicios** que demuestran:

- Operaciones básicas (recorrido, inserción, eliminación)
- Búsqueda lineal y binaria
- Ordenamiento (Burbuja e Inserción)

**Nivel**: Introducción a Estructuras de Datos.

**Ejecución**: Node.js (correr `node Ejercicio-X.js` en terminal).

## 📋 Resumen de Ejercicios

| # | Archivo | Concepto Principal | Detalles |
|---|---------|--------------------|----------|
| 1 | `Ejercicio-1.js` | **Recorrido de arreglo** | Imprime todos los países usando `for`. |
| 2 | `Ejercicio-2.js` | **Longitud de arreglo** | Muestra `paises.length`. |
| 3 | `Ejercicio-3.js` | **Búsqueda Lineal** | Busca 'Chile' → posición o -1. |
| 4 | `Ejercicio-4.js` | **Búsqueda Lineal** | Busca 'Francia' → posición. |
| 5 | `Ejercicio-5.js` | **Bubble Sort** | Ordena países alfabéticamente (intercambios adyacentes). |
| 6 | `Ejercicio-6.js` | **Insertion Sort** | Ordena insertando cada elemento en posición correcta. |
| 7 | `Ejercicio-7.js` | **Búsqueda Binaria** | Ordena + busca 'Brasil', 'Italia', 'Alemania' (divide mitades). |
| 8 | `Ejercicio-8.js` | **Arreglo vacío** | Crea `planetas = []`. |
| 9 | `Ejercicio-9.js` | **Inserción dinámica** | `unshift()` inicio, `push()` final: Mercurio, Venus, Tierra, Marte, Jupiter. |
| 10 | `Ejercicio-10.js` | **Eliminación dinámica** | `pop()` elimina últimos 2 elementos. |

## 🔧 Datos de Ejemplo
- **Arreglo `paises`** (20 países): Colombia, Argentina, Brasil, Chile, Peru, México, España, Francia, Alemania, Italia, Estados Unidos, Canadá, Japón, China, Corea del Sur, India, Australia, Portugal, Suiza, Suecia.
- **Arreglo `planetas`**: Manipulado dinámicamente.

## 🎯 Conceptos Clave

### Operaciones Arreglos
```
Recorrido: for(i=0; i<length; i++)
Longitud: array.length
Insertar: unshift(inicio), push(final)
Eliminar: pop(final)
```

### Complejidad Algorítmica
| Algoritmo | Mejor | Promedio | Peor |
|-----------|-------|----------|------|
| Búsqueda Lineal | O(1) | O(n) | O(n) |
| Búsqueda Binaria | O(1) | O(log n) | O(log n) |
| Bubble Sort | O(n) | O(n²) | O(n²) |
| Insertion Sort | O(n) | O(n²) | O(n²) |

## 🚀 Cómo Ejecutar
1. Abrir terminal en `/Users/sofi/Desktop/Taller_Estructura_Datos`
2. Correr: `node Ejercicio-X.js` (ej: `node Ejercicio-7.js`)

**Ejemplo salida Ejercicio-7**:
```
=== 7. Búsqueda Binaria ===
a. 'Brasil' encontrado en posición 2
b. 'Italia' encontrado en posición 9
c. 'Alemania' encontrado en posición 7
```

## 📈 Estructura del Proyecto
```
Taller_Estructura_Datos/
├── Ejercicio-1.js → 10.js
└── README.md
```

¡Ejercicios listos para revisar y ejecutar! 🌟

