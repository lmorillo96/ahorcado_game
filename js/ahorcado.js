let btnStart = document.querySelector('#iniciar-juego');
let btnFinish = document.querySelector('#terminar-juego');
let ahorcado = document.querySelector('#ahorcado');

// Llamar a la función para iniciar juego

btnStart.addEventListener('click',() => {
    
    if (palabrasAgregadas.length <= 0) {
        alert("Lista de palabras vacias");
        return;
    }

    showCanvas();
    hiddeList();
    escogerPalabra();
    marcarLineas();
});

btnFinish.addEventListener('click', () => {
    hiddeCanvas();
})

function showCanvas() {
    ahorcado.classList.remove('hidde');
}

function hiddeCanvas() {
    ahorcado.classList.add('hidde');
}

function hiddeList() {
    listaPalabras.classList.add('hidde');
}