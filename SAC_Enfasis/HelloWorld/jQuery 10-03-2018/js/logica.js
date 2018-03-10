$("#iniciarGame").click(function(){
	initMejorado();
});


function init()
{
	var nombreJugador1 = document.getElementById('jugador1').value;
	var nombreJugador2 = document.getElementById('jugador2').value;

	console.log("El jugador 1 es: "+nombreJugador1);
	console.log("El jugador 2 es: "+nombreJugador2);	
}

function initMejorado()
{
	var nombrePlayer1 = $("#jugador1").val();
	var nombrePlayer2 = $("#jugador2").val();

	console.log("------------------------Usando jQuery--------------------------");
	console.log("El jugador 1 es: "+nombrePlayer1);
	console.log("El jugador 2 es: "+nombrePlayer2);
}