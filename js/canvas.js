let pincel = ahorcado.getContext("2d");
pincel.fillStyle = "#C8F2EF";
pincel.fillRect(0,0,1200,800);
let letrasEncontradas = [];
let sizeXErroneas = 150;


// Función para dibujar Lineas

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal) {
	pincel.beginPath(); // para arrancar un trazo. empezar a dibujar
	pincel.strokeStyle = color; // variable para asignar color
	pincel.moveTo(xinicial, yinicial); // función para colocar lapiz partida
	pincel.lineTo(xfinal, yfinal); // función para colocar lapiz llegada
	pincel.stroke(); // dibuja la línea
	pincel.closePath(); // levantar el lapiz para finalizar
}

function marcarLineas () {
	pincel.fillStyle = "#C8F2EF";
	pincel.fillRect(0,0,1200,800);
	let lineas = palabraJuego.length;
	let color = "black";
	let sizeXi = 70;
	let sizeXf = 100;
	
	for (let i = 0; i < lineas; i++) {
		sizeXi = sizeXi + 80;
		sizeXf = sizeXf + 80;
		dibujarLinea(color, sizeXi, 80, sizeXf, 80);
	}
}

// Función dibujar letras correctas

function dibujarLetras(teclaPresionada) {
	let lineas = palabraJuego.length;
	let sizeX = 70;
	let sizeF = 100;

	if(!letrasEncontradas.includes(teclaPresionada))
		for (let i = 0; i < lineas; i++) {
			sizeX = sizeX + 80;
			sizeF = sizeF + 80;
			if(palabraJuego.indexOf(teclaPresionada) > -1) {
				if (teclaPresionada == palabraJuego[i]) {
					dibujarTexto(teclaPresionada, sizeX);
					letrasEncontradas.push(teclaPresionada);
					
				}
			} else {
				palabrasErroneas(teclaPresionada, sizeXErroneas);
				letrasEncontradas.push(teclaPresionada);
				let currFunction = arrDibujoAhorcado.pop();
				currFunction();
				if(arrDibujoAhorcado.length == 0){
					dibujarTexto("Se acabó el juego, PERDISTE!", 600, 150);
					EliminarPalabraActual();
					ChangeButtonText();
					isOver = true;
				}
				break;
			}
		}
		
		if(validarFindejuego()){
			dibujarTexto("Se acabó el juego, GANASTE!", 600, 150);
			EliminarPalabraActual();
			isOver = true;
			ChangeButtonText();
		}
}

//Eliminar palabra actual

function EliminarPalabraActual(){
	const idx = palabrasAgregadas.indexOf(palabraJuego);
	palabrasAgregadas.splice(idx, 1);
}

//cAMBIAR TEXTO BTN TERMINAR JUEGO

function ChangeButtonText(){
	if(palabrasAgregadas.length == 0)
		btnFinish.textContent = "TERMINAR JUEGO";
	else
		btnFinish.textContent = "CONTINUAR JUEGO";
}


// Función dibujar letras incorrectas

function palabrasErroneas(teclaPresionada, sizeX) {
	pincel.font="bold 20px arial";
	pincel.strokeStyle = "red";
	pincel.fillStyle = "red";
	pincel.strokeText(teclaPresionada, sizeX, 120);
	sizeXErroneas = sizeXErroneas + 30;
}

// DIBUJAR TEXTO

function dibujarTexto(teclaPresionada, sizeX, sizeY = 75) {
	pincel.font="bold 20px arial";
	pincel.strokeStyle = "black";
	pincel.fillStyle = "black";
	pincel.strokeText(teclaPresionada, sizeX, sizeY);
}

// validar fin de juego

function validarFindejuego() {
	let isFound; 
	for(let i = 0; i < palabraJuego.length; i++) {
		if (letrasEncontradas.includes(palabraJuego[i])) {
			isFound = true;
		}else{
			isFound = false;
			break;
		}
	}

	return isFound;
}

function reiniciarCanvas(){
	pincel.fillStyle = "#C8F2EF";
	pincel.fillRect(0,0,1200,800);
	palabrasAgregadas = [];
	isOver = false;
	hiddeCanvas();
	listaPalabras.innerHTML = '';
	showList();
	recontarLetras();
}

function recontarLetras(){
	letrasEncontradas = [];
}