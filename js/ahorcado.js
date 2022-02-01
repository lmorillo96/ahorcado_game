let btnStart = document.querySelector('#iniciar-juego');
let btnFinish = document.querySelector('#terminar-juego');
let ahorcado = document.querySelector('#ahorcado');

// Llamar a la función para iniciar juego

btnStart.addEventListener('click',() => {
    console.log("Juego iniciado");
    showCanvas();
});

btnFinish.addEventListener('click', () => {
    hiddeCanvas();
    console.log(hiddeCanvas())
})


function showCanvas() {

    if (ahorcado.style.display === 'none') {
        ahorcado.style.display = 'block';
        btnStart.disabled = true;
    } else {
        ahorcado.style.display = 'none';
    }
}

function hiddeCanvas() {
    if (ahorcado.style.display === 'block') {
        ahorcado.classList.add('hidde');
    } else {
        ahorcado.style.display = 'none';
    }

    console.log("Juego finalizado")
}