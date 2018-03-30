//1. Cuando cargue toda la página, llama la función iniciar()
//2. Se obtienen los valores del HTML, incluyendo el Canvas (context, etc)
//3. Se genera la palabra aleatoria, se redondea un valor entre 0 y 1 x el número de palabras. Se toma una palabra de ese vector, con el índice random. Variable: palabra
//4. Se llama la función Ahorcado(contexto), que tiene variables necesarias y la función dibujar().
//5. Cuando se da click, se llama a la función agregarLetra, que encadena todo, pero como inicialmente no hay click, se llama a la función mostrarEspacios
//6. mostrarEspacios(ArraylongitudPalabra): Acá se agregan las letras al html o los guiones, inicialmente.
//7. Cuando se de click, se desarrolla la validación completa:
	// -agregarLetra(): En la variable letra, se guarda lo que se ingresó, y lo que ingresó se le lleva un string vacío nuevamente. Se llama la función mostrarPalabra(varibales)
		//mostrarPalabra(palabra, ahorcado, letra): Se recorre la palabra, a ver si está la letra ingresada, para luego ir a la función mostrarEspacio(). Sino, se dibuja y se aumentan y validan los intentos 
//8. Mirar si ganó o si perdió
var palabra = "";
var conjuntoPalabras=["UNIVERSIDAD",
                "MATERIA",
                "HUECO",
                "CLASE",
                "TEORIA",
                "PRACTICA",
                "PROFESOR",
                "DORMIR",
                "MUJERES",
                "NOTA",
                "PASILLO",
                "SALON",
                "HORARIO",
                "MADRUGAR",
                "TAREAS",
                "COMER",
                "FRIO",
                "CALOR",
                "ESTUDIAR",
                "JUGAR",
                "TRABAJAR"];
             
var datosAhorca,vectorLetras,errores;
var Ahorcado = function (con) {
    this.contexto = con;
    this.maximo = 7;
    this.intentos = 0;
    this.vivo = true;
    this.dibujar();
}

Ahorcado.prototype.dibujar = function () {
    var dibujo = this.contexto;

    imgPoste = new Image();
    imgPoste.src = "img/palo2.png";

    imgPoste.onload = function ()	
    {
    	dibujo.drawImage(imgPoste,1,10,600,470);
    }

    if (this.intentos > 0) {

		imgCabeza = new Image();
    	imgCabeza.src = "img/cabeza3.png";

    	imgCabeza.onload = function ()	
    	{
    	dibujo.drawImage(imgCabeza,320,130,50,70);
   		}

        if (this.intentos > 1) {

            imgCuerpo = new Image();
    		imgCuerpo.src = "img/cuerpo.png";

    		imgCuerpo.onload = function ()	
    		{	
    		dibujo.drawImage(imgCuerpo,320,195,70,80);
   			}

            if (this.intentos > 2) {

                imgBrazoDerecho = new Image();
    			imgBrazoDerecho.src = "img/brazoDerecho.png";

    			imgBrazoDerecho.onload = function ()	
    			{	
    			dibujo.drawImage(imgBrazoDerecho,290,210,35,75);
   				}

                if (this.intentos > 3) {

                    imgBrazoIzquierdo = new Image();
    				imgBrazoIzquierdo.src = "img/brazoIzquierdo.png";

    				imgBrazoIzquierdo.onload = function ()	
    				{	
    				dibujo.drawImage(imgBrazoIzquierdo,355,210,30,70);
   					}

                    if (this.intentos > 4) {

                        imgPiernaDerecha = new Image();
    					imgPiernaDerecha.src = "img/piernaDerecha.png";

    					imgPiernaDerecha.onload = function ()	
    					{	
    					dibujo.drawImage(imgPiernaDerecha,325,270,20,42);
   						}

   						if (this.intentos > 5) {
                    		imgPiernaIzquierda = new Image();
    						imgPiernaIzquierda.src = "img/piernaIzquierda.png";

    						imgPiernaIzquierda.onload = function ()	
    						{	
    						dibujo.drawImage(imgPiernaIzquierda,353,270,20,42);
   							}

   							if (this.intentos > 6) {
                    			imgMuerto = new Image();
    							imgMuerto.src = "img/cabezaMuerta.png";

    							imgHuesos = new Image();
    							imgHuesos.src = "img/huesos.png";

    							imgMuerto.onload = function ()	
    							{	
    							dibujo.drawImage(imgMuerto,320,130,50,70);
   								}
   								imgHuesos.onload = function ()	
    							{	
    							dibujo.drawImage(imgHuesos,10,50,160,360);
   								}

                			}
                    	}

                    }
                }
            }
        }
    }
}
Ahorcado.prototype.trazar = function () {
    this.intentos++;
    if (this.intentos >= this.maximo) {
        this.vivo = false;
    }
    this.dibujar();
}
function iniciar() {
    letraIngresada = document.getElementById("letra"); //Se obtienen los valores de la letra ingresa
    errores = document.getElementById("fallos"); // Acá irán las letras erradas
    var boton = document.getElementById("boton"); // Valores del boton

    var canvas = document.getElementById("lienzo"); // Valores del Canvas
    canvas.width = 700; 
    canvas.height = 460;
    
    //Acá se genera la palabra aleatoria:
    var random = Math.round(Math.random()*conjuntoPalabras.length);
    palabra=conjuntoPalabras[random];
    
    var contexto = canvas.getContext("2d");
    datosAhorca = new Ahorcado(contexto); //Datos del ahorcado, como el contexto de manera global, los intentos, la función dibujar, etc
    palabra = palabra.toUpperCase(); //Se pone la palabra en mayúscula
    
    vectorLetras=new Array(palabra.length);//Vector de acuerdo al tamaño de la palabra 
    
    boton.addEventListener("click",agregarLetra);//Funcion que se dispare al dar click, encadena todo.
   
    mostrarEspacios(vectorLetras); //Se dispara cuando aún no se han ingresado letras, para los guiones
}

function agregarLetra(e){
   var letra=letraIngresada.value;//En la variable letra, se guarda lo que se ingresó
   letraIngresada.value="";
   
   mostrarPalabra(palabra,datosAhorca,letra);//Contiene la lógica base
}

//No funciona la parte del Enter
function pulsaEnter(e) {
    if (e.keyCode == 13) {
		var letra=letraIngresada.value;       
        letraIngresada.value="";
        mostrarPalabra(palabra,datosAhorca,letra);       
    }
}

function mostrarPalabra(palabra,ahorcado,letra){
    var encontrado=false; //Variable de control, que indica, inicialmente, que aún no se ha encontrado la letra ingresada.
    var p;//Para el for
    letra =letra.toUpperCase();//Mayúsculas

    for (p in palabra){ //Si la letra que se ingresó es igual a la palabra en cada posición (letra), se le lleva al vector letras, esa letra, además no entra a los if siguientes
        if(letra==palabra[p]){
            vectorLetras[p]=letra;
            
            encontrado=true;
        };
    }
    mostrarEspacios(vectorLetras); //Se llama esta función, para poner la letra que se encontró
   
    if(!encontrado){ //Si la variable encontrado es false, se dibuja
        ahorcado.trazar();
        errores.innerText+=letra+", "//Se agega la letra errada
    }
    if(!ahorcado.vivo){ //Se valida si aún tenemos intentos
        alert("Has perdido, la palabra era "+palabra+ " .Carga la página nuevamente");
    }
     comprobarCompleta(); //Validar si ganó  
}

function mostrarEspacios(vectorLetras){ //Espacios o guiones en la página
    var espacios=document.getElementById("espacios"); //Valores del id espacios, donde irán los guiones
    var texto="";//Varibale que contiene las letras y/o guiones
    var i;//Para el for
    var largo=vectorLetras.length;//Largo del vector de la longitud de la palabra
    for(i=0;i<largo;i++){//Se recorre el largo de la palabra, donde si hay una letra, se agrega la letra a ese vector, sino, los guiones.
        if(vectorLetras[i]!= undefined){
            texto=texto+vectorLetras[i]+" ";
        }else{
            texto+="_ ";
        };
    }
    espacios.innerText=texto;  //Se agrega lo que tenga texto, al html
}

function comprobarCompleta(){
    var largo=vectorLetras.length;
    var contador=0; //Contador, vble auxiliar para ver si todo el vector de letras, está lleno, lo que indica que gané
    for(i=0;i<largo;i++){
         if(vectorLetras[i]>="A" && vectorLetras[i]<="Z"){ //Si el vectorLetras tiene letras entre la A y la Z, cuenta
             contador++;
        }
    }
  
    
    if (contador==vectorLetras.length){ //Si contador tiene el mismo número que la longitud del vector de letras, adivinó la palabra.
        alert("Felicitaciones, has adivinado la palabra: "+palabra);
    }
}
window.addEventListener("load",iniciar);