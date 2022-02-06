let pincel = ahorcado.getContext("2d");
pincel.fillStyle = "#C8F2EF";
pincel.fillRect(0,0,1200,800);

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal) {
	pincel.beginPath(); // para arrancar un trazo. empezar a dibujar
	pincel.strokeStyle = color; // variable para asignar color
	pincel.moveTo(xinicial, yinicial); // función para colocar lapiz partida
	pincel.lineTo(xfinal, yfinal); // función para colocar lapiz llegada
	pincel.stroke(); // dibuja la línea
	pincel.closePath(); // levantar el lapiz para finalizar
}


dibujarLinea("red", 20, 20, 50, 20);

