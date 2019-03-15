const http = require("http")
const fs = require("fs")
const path = require ("path")

    http.createServer(function(request, response) {

        const dir = "public/" //<--DEFINIR EL DIRECTORIO DE LOS ARCHIVOS WEB

        //const url = request.url // <-- LEER LA RUTA/RECURSO SOLICITADO EN LA URL

        /*if( resquest.url == "/"){
        	const file = "index.html"
        } else {
        	const file = request.url
        }*/

        //const file = (CONDICION) ? VERDADERO : FALSO   //<-- OPERADOR TERNARIO
        const file = (request.url == "/") ? "index.html" : request.url


        let ext = path.extname(file)
            ext = String(ext)
            ext = ext.toLowerCase()
        

        let tipos = {
			".html"	: "text/html",
			".js"	: "text/javascript",
			".css"	: "text/css",
			".txt" 	: "text/plain",
			".json"	: "application/json",
			".png"	: "image/png",
			".jpg"	: "image/jpg",
			".gif"	: "image/gif",
			".ico"	: "image/x-icon",
			".wav"	: "audio/wav",
			".mp4"	: "video/mp4",
			".woff"	: "application/font-woff",
			".ttf"	: "application/font-ttf",
			".eot"	: "application/vnd.ms-fontobject",
			".otf"	: "application/font-otf",
			".svg"	: "application/image/svg+xml"
        }

        let contentType = tipos[ext] || "application/octet-stream" 


        console.log("Usted ah solicitado el archivo..." + file)
        console.log("La extension del archivo es: " + ext)

        fs.readFile(dir + file, function(error, content) { //<-- INTENTAR LEER/CARGAR EL ARCHIVO/RECURSO SOLICITADO


            if (error) { //<-- Si no pudo leer el archivo por ALGUNA x razon ...

                response.end("ARCHIVO NO ENCONTRADO :(")

            } else { //<-- SI EFECTIVAMENTE PUDO LEERLO...

                response.writeHead(200, { "Content-Type": contentType }) //<-- ESPECIFICAR CODIGO DE RESPUESTA Y TIPO DE CONTENIDO

                response.end(content) //<-- ENVIAR AL CLIENTE/NAVEGADOR EL ARCHIVO ENCONTRADO 
            }

        })

    }).listen(80)