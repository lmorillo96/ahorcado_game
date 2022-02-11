window.addEventListener('keydown', (e) => {
    if(!ahorcado.classList.contains('hidde')) {
        validates(e);
    }
    
});

function validates(e) {
    let teclaPresionada = e.key;
    const regEx = new RegExp(/[A-Z]/);
    if(teclaPresionada.length == 1){
        if(!regEx.test(teclaPresionada)) {
            alert("Solo letras mayusculas");
        } else {
            dibujarLetras(teclaPresionada);
        }
    }
}
