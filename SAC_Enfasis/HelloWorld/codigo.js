var ancho = 600;
var alto = 400;
var tecla = 0;

function iniciar()
{
	canvas = document.getElementById("lienzo");/*Obtenemos todos los elementos de la etiqueta canvas, pero en js */
	canvas.width = ancho;
	canvas.height = alto;

	/* Obteniendo el contexto */
	contextoCanvas = canvas.getContext("2d"); /* Especificamos el contexto (gráfico 2d o 3d(diferente)) y la etiqueta */

	imgHorca = new Image();
	imgHorca.src = "images/horca.png";

	imgBrazo = new Image();
	imgBrazo.src = "images/brazo.png";

	imgCabeza = new Image();
	imgCabeza.src = "images/cabeza.png";

	imgHorca.onload = function (){
		contextoCanvas.drawImage(imgHorca,0,0,200,200);
	};
	
}


function test(mensaje) /*Para probar */
{
	console.log(mensaje);
}


window.addEventListener("load",iniciar);/*Cuando cargue toda la ventana, va a llamar la función iniciar */

document.addEventListener("keydown",function(event){
	tecla = event.which || event.keycode;
	test("La tecla presionada es: "+tecla)
});/* Está atento a cuando se presione una tecla */