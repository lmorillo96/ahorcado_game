function ahorcadoDibujo (color, xinicial, yinicial, xfinal, yfinal) {
    pincel.beginPath(); // para arrancar un trazo. empezar a dibujar
	pincel.strokeStyle = color; // variable para asignar color
	pincel.moveTo(xinicial, yinicial); // función para colocar lapiz partida
	pincel.lineTo(xfinal, yfinal); // función para colocar lapiz llegada
    pincel.stroke(); // dibuja la línea
	pincel.closePath();
}

//Tronco Horca
const DibujarTronco1 = () => {
	ahorcadoDibujo("black", 150, 200, 500, 200);
}

const DibujarCabeza = () => {
	pincel.beginPath(); // para arrancar un trazo. empezar a dibujar
	pincel.strokeStyle = '#000'; // variable para asignar color
	pincel.arc(500, 252, 50, 0, 2*3.14);
    pincel.stroke(); // dibuja la línea
	pincel.closePath();
}

const DibujarTronco2 = () => {
	ahorcadoDibujo("black", 150, 200, 150, 650);
}

//Base Horca
const DibujarBase = () =>  {
	ahorcadoDibujo("black", 130, 700, 150, 650);
	ahorcadoDibujo("black", 170, 700, 150, 650);
	ahorcadoDibujo("black", 130, 700, 170, 700);
}

//Cuerpo Horca
const DibujarTorso = () => {
	ahorcadoDibujo("black", 500, 302, 500, 420); // Tronco
}

const DibujarBrazoIzq = () => {
	ahorcadoDibujo("black", 580, 400, 500, 320); // brazo IZQ
}

const DibujarBrazoDer = () => {
	ahorcadoDibujo("black", 420, 400, 500, 320); // Brazo DERECHO
}

const DibujarPiernaIzq = () => {
	ahorcadoDibujo("black", 430, 502, 500, 420); // pierna izquierda
}

const DibujarPiernaDer = () => {
	ahorcadoDibujo("black", 570, 502, 500, 420); // pierna DERECHA
}

let arrDibujoAhorcado = [
	DibujarBase,
	DibujarTronco2,
	DibujarTronco1,
	DibujarCabeza,
	DibujarTorso,
	DibujarBrazoIzq,
	DibujarBrazoDer,
	DibujarPiernaIzq,
	DibujarPiernaDer 
].reverse();






