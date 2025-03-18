// Declaración del array para almacenar los nombres de los amigos
let listaAmigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigosElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Elimina espacios en blanco al inicio y final

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agrega el nombre al array
    listaAmigos.push(nombre);

    // Limpia el campo de entrada
    inputAmigo.value = "";

    // Actualiza la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    listaAmigosElement.innerHTML = ""; // Limpia la lista actual

    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return;
    }

    // Selecciona un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Muestra el resultado
    resultadoElement.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
}