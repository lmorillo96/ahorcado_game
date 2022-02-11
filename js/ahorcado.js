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

    if(palabrasAgregadas.length > 1)
        btnFinish.textContent = "CONTINUAR JUEGO";
});

btnFinish.addEventListener('click', () => {
    // history.go();
    if(palabrasAgregadas.length > 0){
        escogerPalabra(true);
        marcarLineas();
        isOver = false;
        recontarLetras();
    }else{
        reiniciarCanvas();
    }
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

function showList() {
    listaPalabras.classList.remove('hidde');
}