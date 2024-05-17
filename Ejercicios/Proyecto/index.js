
// Constante para el tipo de api a aconsultar
const API = "users"
// URL de la api a consultare
const URL = `https://jsonplaceholder.typicode.com/${API}`

/**

 */
const consultarUsuario = async (id) => {
	
	try {		
		const usuario = await fetch(`${URL}/${id}`)
		
		if (!usuario.ok) {
			throw new Error(`No se encontro el usuario con el id: ${id}`)
		}
		const usuarioJson = await usuario.json()
		cargarUsuario(usuarioJson)
		
	} catch (error) {
		alert(error)
	}
}

const leerUsuarioId = () => {
	const usuarioId = document.querySelector("#busqueda").value
	consultarUsuario(usuarioId)
}

const cargarUsuario = (usuario) => {
	Object.keys(usuario).forEach(llave => {
		let nodo = document.querySelector(`#${llave}`)
		
		if (nodo !== null) {
			nodo.value = usuario[llave]
		}
	})
}

const guardarUsuario = () => {
	
	const {usuario} = construirUsuario()
	console.log(usuario)	
	localStorage.setItem(usuario.id, JSON.stringify(usuario))
	//tablaComponente.actualizarTabla(usuario)
	tablaComponente.destruirTabla(tablaComponente.tabla)
	inicializarAplicacion()
}

const inicializarAplicacion = () => {
	
	const {nombresColumnas} = construirUsuario()
	console.log("inicia")
	tablaComponente.construirTabla("tabla-resultados", nombresColumnas)
	
	// Verificar si hay registros existentes en el localstorage
//	for (let index = 0; index < localStorage.length; index++) {
//		const usuario = JSON.parse(localStorage.getItem(localStorage.key(index)))
//		tablaComponente.actualizarTabla(usuario)
//	}
	Object.keys(localStorage).forEach((valor) => {
		const usuario = JSON.parse(localStorage.getItem(valor))
		tablaComponente.actualizarTabla(usuario)
	})

}

const construirUsuario = () => {
	
	const usuario = {}
	const nombresColumnas = {}
	
	document.querySelectorAll(".user-form").forEach(nodo => {
		usuario[nodo.id] = nodo.value
		//nombresColumnas[nodo.value] = nodo.dataset.nombreColumna
		//nombresColumnas[nodo.value] = nodo.dataset['nombreColumna']
		nombresColumnas[nodo.id] = nodo.getAttribute("data-nombre-columna")
		nodo.value = ""
	})
	
	return {usuario, nombresColumnas}
}






