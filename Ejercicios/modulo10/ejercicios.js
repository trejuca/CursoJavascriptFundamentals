

//  1. Acceder a todas las etiquetas de enlaces (a).
//const enlaces = document.querySelectorAll("a")
//console.log(enlaces)
//
//enlaces.forEach((enlace, index) => {
//	console.log(`Enlace ${index + 1}: ${enlace.href}`)
//})

// 2. Acceder a todas las etiquetas a través de su clase.
//const etiquetas1 = document.querySelectorAll(".clase1")
//const etiquetas2 = document.querySelectorAll(".clase2")
//
//etiquetas1.forEach(etiqueta => {
//	console.log(etiqueta.textContent)
//})

// 3. Acceder a todas las etiquetas de entrada (input).
//const cajas = document.querySelectorAll(
//	"input[type=text], input[type=email], input[type=password]")
//cajas.forEach((caja, index) => {
//	console.log(`Valor anterior: ${caja.value}`)
//	caja.value = "Nuevo valor" + index
//})

// 4. Agregar un nuevo enlace (a)
//const contenedor = document.querySelector("#contendorEnlaces")
//const nuevoEnlace = document.createElement("a")
//
//nuevoEnlace.textContent = "Enlace agregado con JS"
//nuevoEnlace.href = "http://ejemplo.com"
//
//contenedor.appendChild(nuevoEnlace)
//console.log(contenedor)

// 5. Agregar una nueva caja de texto (input)
//const contenedorCajas = document.querySelector("#contenedorCajasTexto")
//const nuevaCaja = document.createElement("input")
//const nuevaEtiqueta = document.createElement("label")
//
//nuevaEtiqueta.textContent ="Repetir Contraseña"
//nuevaEtiqueta.htmlFor ="repetirPassword"
//
//nuevaCaja.id = "repetirPassword"
//nuevaCaja.value = "123456"
//nuevaCaja.type = "password"
//
//contenedorCajas.appendChild(nuevaEtiqueta)
//contenedorCajas.appendChild(nuevaCaja)
//

//  6. Cambiar el titulo de la pagina.
//function cambiarTitulo() {
//	document.title = document.getElementById("nuevoTitulo").value
//}

// 8. Eliminar un elemento del documento.
//const botonEliminar = document.getElementById("botonEliminar")
//botonEliminar.onclick = function() {
//	const enlaces = document.querySelectorAll("a")
//	enlaces.forEach((enlace) => {
//		enlace.remove()
//	})
//}

// 9. Cambiar el color del fondo de la pagina
//document.body.style.backgroundColor = "yellow"
//document.body.style.backgroundColor = "rgb(54,208,211)"
//document.body.style.backgroundColor = "#000010"
//document.getElementById("color").onchange = function() {
//	document.body.style.backgroundColor = 
//		document.getElementById("color").value
//}
//document.getElementById("color").addEventListener("click", event => {
//	document.body.style.backgroundColor = event.target.value
//})
//

// 10. Agregar una función para el botón del formulario para que recoja los 
// valores del usuario y los muestre en consola.

const recolectarDatos = function() {
	
	const usuario = {}
	
	document.querySelectorAll(".caja").forEach(nodo => {
		usuario[nodo.id] = nodo.value
	})
	
	console.log(usuario)
}





