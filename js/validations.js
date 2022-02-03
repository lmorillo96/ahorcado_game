window.addEventListener('keydown', (e) => {
    if(!ahorcado.classList.contains('hidde')) {
        validates(e);
    }
    
});

function validates(e) {
    let teclaPresionada = e.key;
    
    if(!teclaPresionada.match(new RegExp(/[A-Z\s]+/))) {
        alert("Solo letras mayusculas");
    } else {
        console.log(teclaPresionada);
    }
}
