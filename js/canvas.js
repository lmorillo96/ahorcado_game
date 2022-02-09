let pincel = ahorcado.getContext("2d");
pincel.fillStyle = "#C8F2EF";
pincel.fillRect(0,0,1200,800);


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

	for (let i = 0; i < lineas; i++) {
		sizeX = sizeX + 80;
		if (teclaPresionada == palabraJuego[i]) {
			pincel.font="bold 20px arial";
			pincel.strokeStyle = "black";
			pincel.fillStyle = "black";
			pincel.strokeText(teclaPresionada, sizeX, 75);
		}
	}
}

// Función dibujar letras incorrectas




// Dibujar letras de líneas





