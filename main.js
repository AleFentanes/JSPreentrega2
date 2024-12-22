

//PREENTREGA 2 
/*Objetivo del ejercicio:
- escribir la traducción de una palabra de alemán a español 
- Sólo hay dos intentos
- Crear array 
- Método de búsqueda y filtrado: por artículo (der,das,die)
- acumular puntos x acierto
*/

function traducir() {

    // Array
    const palabras = [
        { ale: "der Vater", esp: "el padre" },
        { ale: "die Mutter", esp: "la madre" },
        { ale: "der Bruder", esp: "el hermano" },
        { ale: "die Schwester", esp: "la hermana" },
        { ale: "der Onkel", esp: "el tío" },
        { ale: "die Tante", esp: "la tía" },
        { ale: "das Mädchen", esp: "la niña" },
        { ale: "das Kind", esp: "el niño" },
        { ale: "das Baby", esp: "el bebé" },
        { ale: "die Oma", esp: "la abuela" },
        { ale: "der Opa", esp: "el abuelo" }
    ];


    // Para obtener una palabra aleatoria
    function obtenerPalabraAleatoria(palabrasFiltradas) {
        const index = Math.floor(Math.random() * palabrasFiltradas.length);
        return palabrasFiltradas[index];
    }


    // Para buscar por artículo en alemán
    function buscarPorArticulo(articulo) {
        return palabras.filter(palabra => palabra.ale.toLowerCase().startsWith(articulo.toLowerCase()));
    }


    // Instrucción
    let filtro = prompt("¿Quieres buscar palabras por su artículo en alemán? (Sí/No)").toLowerCase();
    let palabrasFiltradas = palabras;

    if (filtro === "sí") {
        let articuloBuscar = prompt("Escribe el artículo (der, die, das) para filtrar las palabras:");
        palabrasFiltradas = buscarPorArticulo(articuloBuscar);
    }

    
    let continuar = true; // Continuar con el juego
    let puntos = 0; // Acumular puntos

    while (continuar) {
        let intentos = 2; // Para cada nueva palabra
        const palabraSeleccionada = obtenerPalabraAleatoria(palabrasFiltradas);
        const palabraAle = palabraSeleccionada.ale;  // Alemán
        const palabraEsp = palabraSeleccionada.esp;  // Español

        // Instrucción
        let palabra = prompt(`Traduce "${palabraAle}" al español (Sólo tienes 2 intentos).`);

        // Si cancela o no escribe nada
        if (palabra === null || palabra === "") {
            alert("Noch einmal / Intenta de nuevo");
            continue; 
        }

        // Intentos
        let respuestaCorrecta = false; 

        while (intentos > 0 && !respuestaCorrecta) {
            if (palabra.toLowerCase() === palabraEsp.toLowerCase()) {
                alert("Gut gemacht! / ¡Bien hecho!");
                puntos++; // Suma x correcta
                respuestaCorrecta = true; // Termina 
            } else {
                intentos--; // Resta
                if (intentos > 0) {
                    palabra = prompt(`Falsch! / ¡Incorrecto! Te queda ${intentos} intento(s). Traduce nuevamente: "${palabraAle}".`);
                } else {
                    alert(`Has superado el número de intentos. La respuesta correcta es "${palabraEsp}".`);
                    respuestaCorrecta = true;
                }
            }
        }

        // Para no repetir palabras
        const index = palabrasFiltradas.indexOf(palabraSeleccionada);

        if (index !== -1) {
            palabrasFiltradas.splice(index, 1);
        }

        // Si ya no quedan palabras
        if (palabrasFiltradas.length === 0) {
            alert("¡Ya no hay más palabras disponibles! Has completado el juego.");
            continuar = false; // Termina si no hay más palabras
        } else {
            continuar = confirm("¿Quieres seguir jugando?");
        }
    }

    // Mostrar puntos al final
    alert(`Acumulaste: ${puntos} puntos.`);
}

traducir();


    