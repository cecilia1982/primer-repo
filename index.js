
const http = require("http")
const fs = require("fs")

http.createServer(function(request, response){
	const dir = "public/" //<--DEFINIR EL DIRECTORIO DE LOS ARCHIVOS WEB

	//const url = request.url // <-- LEER LA RUTA/RECURSO SOLICITADO EN LA URL

	/*if( resquest.url == "/"){
		const file = "index.html"
	} else {
		const file = request.url
	}*/

    //const file = (CONDICION) ? VERDADERO : FALSO   //<-- OPERADOR TERNARIO
      const file = (request.url == "/") ? "index.html" : request.url  

	fs.readFile(dir + file, function(error, content){ //<-- INTENTAR LEER/CARGAR EL ARCHIVO/RECURSO SOLICITADO



		if( error ){ //<-- Si no pudo leer el archivo por ALGUNA x razon ...

			response.end("ARCHIVO NO ENCONTRADO :(")

		} else { //<-- SI EFECTIVAMENTE PUDO LEERLO...

			response.writeHead(200, {"Content-Type" : "text/html"}) //<-- ESPECIFICAR CODIGO DE RESPUESTA Y TIPO DE CONTENIDO

			response.end(content) //<-- ENVIAR AL CLIENTE/NAVEGADOR EL ARCHIVO ENCONTRADO 
		}

	})

}).listen(80)