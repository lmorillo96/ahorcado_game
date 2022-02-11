let btnAddWord = document.querySelector('#nueva-palabra');
let listaPalabras = document.querySelector('#lista-palabras');
let inpAddWord = document.querySelector('#input-nueva-palabra')

// Creamos un array para luego agregar palabras que el jugador desee

var palabraJuego;
let palabrasAgregadas = [];

// Llamar a la función para agregar nueva palabra

btnAddWord.addEventListener('click', () => {
    agregarPalabra();
});

// Función para agregar palabras 

function agregarPalabra() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(inpAddWord.value));
    listaPalabras.appendChild(li);

    palabrasAgregadas.push(inpAddWord.value);
    
    inpAddWord.value = "";
}

