	console.log("Este es un mensaje usando JavaScript"); /*Invocar la consola, inspector de elementos */
alert("Este es un mensaje usando JavaScript")
/*var nombreVariable = 1234;Declarar variable local */
var cedula = 1234560000000000;
var estatura = 1.20;
var nombre = "raul";
var descripcion = "\" Me describo. \n Como un ladron  \" ";
var gustos = ["robar", "jugar futbol", "robar a los compañeros del fútbol"];
var liberal = true;

var golpes = {
	"UdeM": 60000000,
	"UdeA": [30000000, "Una gasimba", "3 zapatos"],
	"Unal": {
		"ingenieria": 10000000,
		"derecho": 15000000,
		"comunicaciones": 20000000
	}
};

if (cedula > 4000000) {
	console.log("Mi nombre es: "+nombre);
	console.log("Mi estatura es: "+estatura);
	console.log(descripcion);
	console.log("Uno de mis gustos es: "+gustos[2]);
}  

/* ---------------------------------------------------------*/
jugador1 = { /*Objetos de variable global */
	Nombre: "Dungeon Master",
	Elemento: "Fuego",
	Exp: 20,
	Salud: 10,
	Ataque: 4,
	Proteccion: 1
};

jugador2 = {
	Nombre: "Dungeon Keeper",
	Elemento: "Hielo",
	Exp: 30,
	Salud: 10,
	Ataque: 2,
	Proteccion: 2
};



/**
 * [jugador2 description]
 * @type {Object}
 */


function selectFirst(jugador1, jugador2)
{
	if (jugador1.Exp > jugador2.Exp) 
	{
		return jugador1;
	}else
	{
		return jugador2;
	}
}

console.log(">Las características de los jugadores son las siguientes: \n -Jugador 1: \n     Nombre: "
	+jugador1.Nombre
	+"\n     Salud: "+jugador1.Salud
	+"\n     Ataque: "+jugador1.Ataque
	+"\n     Proteccion: "+jugador1.Proteccion
	+"\n --------------------------------------------------------------------- \n-Jugador 2: \n     Nombre: "
	+jugador2.Nombre
	+"\n     Salud: "+jugador2.Salud
	+"\n     Ataque: "+jugador2.Ataque
	+"\n     Proteccion: "+jugador2.Proteccion);



function iniBattle()
{
	var primerGolpe = selectFirst(jugador1, jugador2);
	console.log("El primer golpe será lanzado por: " +primerGolpe.Nombre + " que posee "+primerGolpe.Exp+ " de experiencia.");
}

iniBattle();

function Salud (jugador1, jugador2)
{
	jugador1.Salud = jugador1.Salud - jugador2.Ataque + jugador1.Proteccion;
	console.log("Salud Jugador 1: "+jugador1.Salud);

	jugador2.Salud = jugador2.Salud - jugador1.Ataque + jugador2.Proteccion;
	console.log("Salud Jugador 2: "+jugador2.Salud+"\n ------------------------------------------------");
	
}

/*nSalud=5;
while (nSalud<=5) {
	console.log("probando");
	nSalud=nSalud-1;
};*/

Salud(jugador1,jugador2);
Salud(jugador1,jugador2);
Salud(jugador1,jugador2);
Salud(jugador1,jugador2);
Salud(jugador1,jugador2);
