
const readline = require("node:readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    console.log("\n===== MENÚ DE EJERCICIOS JAVASCRIPT =====");
    console.log("1. Variables y tipos de datos ");
    console.log("2. Métodos de String");
    console.log("3. Number");
    console.log("4. Mayor de edad");
    console.log("5. Sistema de notas");
    console.log("6. Menú con switch");
    console.log("7. Recorrer un arreglo");
    console.log("8. Leer arreglos 1 al 10 y pares hasta 20");
    console.log("9. Funciones para calcular el promedio");
    console.log("10. Objeto estudiante");
    console.log("11. Objeto estudiante");
    console.log("0. Salir");

    const opcion = Number(
        await rl.question("\n¿Qué ejercicio deseas ejecutar? ")
    );

    switch (opcion) {
        case 1: {
            let nombre = "Colphan";
            let edad = 31;
            let altura = 1.83;
            let estudiante = true;
            let carrera = "Ingenieria en Sistemas";

            console.log(nombre);
            console.log(edad);
            console.log(altura);
            console.log(estudiante);
            console.log(carrera);

            console.log(typeof nombre);
            console.log(typeof edad);
            console.log(typeof altura);
            console.log(typeof estudiante);
            console.log(typeof carrera);
            break;
        }

        case 2: {
            let nombreCompleto = "Juan Carlos Perez";

            console.log(nombreCompleto.length);
            console.log(nombreCompleto.charAt(0));
            console.log(nombreCompleto.endsWith("z"));

            let nombreModificado =
                nombreCompleto.replace("Juan", "Pedro");

            console.log(nombreModificado);
            console.log(nombreModificado.toUpperCase());
            break;
        }

        case 3: {
            let precio = 154.67892;

            console.log(precio.toFixed(2));

            let precioTexto = String(precio);
            console.log(precioTexto);
            console.log(isNaN(precio));

            let texto = "Hola";
            console.log(isNaN(texto));
            break;
        }

        case 4: {
            let edad = 20;

            let esMayorDeEdad =
                edad >= 18 ? "Mayor de edad" : "Menor de edad";

            console.log(esMayorDeEdad);
            break;
        }

        case 5: {
            let nota = 85;

            if (nota > 100) {
                console.log("Nota inválida");
            } else if (nota >= 90) {
                console.log("Excelente");
            } else if (nota >= 70) {
                console.log("Aprobado");
            } else if (nota >= 60) {
                console.log("Recuperación");
            } else {
                console.log("Reprobado");
            }
            break;
        }

        case 6: {
            let opcionMenu = 2;

            switch (opcionMenu) {
                case 1:
                    console.log("Ver perfil");
                    break;
                case 2:
                    console.log("Ver cursos");
                    break;
                case 3:
                    console.log("Ver calificaciones");
                    break;
                case 4:
                    console.log("Salir");
                    break;
                default:
                    console.log("Opción inválida");
            }
            break;
        }

        case 7: {
            let frutas = [
                "Manzana",
                "Pera",
                "Banano",
                "Mango",
                "Sandía"
            ];

            for (let i = 0; i < frutas.length; i++) {
                console.log(frutas[i]);
            }

            console.log("\n--- Frutas enumeradas ---");

            for (let i = 0; i < frutas.length; i++) {
                console.log("Fruta " + (i + 1) + ": " + frutas[i]);
            }
            break;
        }

        case 8: { 
            
    console.log("Números del 1 al 10");

    let numero = 1;

    do {
        console.log(numero);
        numero++;
    } while (numero <= 10);

    console.log("Números pares del 2 al 20");

    numero = 2;

    do {
        console.log(numero);
        numero += 2;
    } while (numero <= 20);

    break;
}
            
           

        case 9: {
               function calcularPromedio(nota1, nota2, nota3) {
        return (nota1 + nota2 + nota3) / 3;
    }

    function determinarEstado(promedio) {
        if (promedio >= 70) {
            return "Aprobado";
        } else {
            return "Reprobado";
        }
    }

    let promedio = calcularPromedio(80, 90, 70);
    let estado = determinarEstado(promedio);

    console.log("Promedio:", promedio);
    console.log("Estado:", estado);
            break;
        }

        case 10: {
            let estudiante = {
                nombre: "Carlos",
                edad: 21,
                carrera: "Ingeniería en Sistemas",
                nota: 85
            };

            console.log(estudiante.nombre);
            console.log(estudiante.edad);
            console.log(estudiante.carrera);

            let esMayorDeEdad =
                estudiante.edad >= 18
                    ? "Mayor de edad"
                    : "Menor de edad";

            console.log(esMayorDeEdad);

            if (estudiante.nota >= 70) {
                console.log("Aprobado");
            } else {
                console.log("Reprobado");
            }

            estudiante.nota = 95;
            estudiante.semestre = 4;

            console.log(estudiante);
            break;
        }

         case 11: {
            



console.log("Sistema de estudiantes");

const nombre = String("Carlos");
let edad = Number(21);
const carrera = String("Ingeniería en Sistemas");
const notas = [80, 90, 75];

let estudiante = {
    nombre: nombre,
    edad: edad,
    carrera: carrera
};

console.log("Nombre:", estudiante.nombre);
console.log("Edad:", estudiante.edad);
console.log("Carrera:", estudiante.carrera);
console.log("Notas:", notas.join(", "));

let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let promedio = calcularPromedio(suma, notas.length);

console.log("Promedio:", promedio.toFixed(2));

let estado;

if (promedio >= 70) {
    estado = "Aprobado";
} else {
    estado = "Reprobado";
}

console.log("Estado:", estado);

let condicion = edad >= 18 ? "Mayor de edad" : "Menor de edad";

console.log("Condición:", condicion);

let opcion = 1;

switch (opcion) {
    case 1:
        console.log("Estudiante registrado");
        break;
    default:
        console.log("Opción inválida");
}
            break;
        }

        case 0: {
            console.log("Programa finalizado.");
            break;
        }

        default: {
            console.log("Opción inválida. Elige un número del 0 al 10.");
            break;
        }
    }

    rl.close();
}

main();
