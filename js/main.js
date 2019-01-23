//Funciones y eventos, que quiero que haga y quien creo que lo provoque//
function saludar(){ //<--- operacion logica
	window.alert("Hola desde JavaScript")
}
//a donde debe realizar la operacion//
document.querySelector("h1").onclick = saludar; //<--- evento/comportamiento.
//hay 3 formas de integrar el js al HTML 1 es citar con externo src= nombrar interno, crear un bloque en el HTML <script></script>//
//desde del atributo O COLOCAR LA ACCION DENTRO DEL ATRIBUTO, pero eso no es lo recomendable//
