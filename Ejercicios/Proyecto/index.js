
const API = "https://jsonplaceholder.typicode.com"
const API_USER = "users"
const API_COMMENT = "/comment"

/**
	Buscar usuario
 */
 const buscarUsuario = async () => {
	
	const id = document.querySelector("#busqueda").value
	
	try {
		const usuario = await fetch(`${API}/${API_USER}/${id}`)
		
		if(!usuario.ok) {
			throw new Error("No se encontro el usuario")
		}
		
		const usuarioJson = await usuario.json()
		cargarUsuario(usuarioJson)
	} catch(error) {
		alert(error)
	}
}

/**
	Funcion para distribuir los datos del objeto
	en el formulario
 */
const cargarUsuario = (usuario) => {
	
	Object.keys(usuario).forEach(function(llave) {
		
		let nodo = document.querySelector(`#${llave}`)
		
		if (nodo !== null) {
			nodo.value = usuario[llave]	
		}

	})
}

/**
	Funcion que recupera la informacion del formulario
	y la almacena en un nuevo objeto
 */
const construirUsuario = () => {
	
	const usuario = {}
	
	document.querySelectorAll(".usuario-form").forEach(nodo => {
		usuario[nodo.id] = nodo.value
		nodo.value = ""
	})
	
	return usuario
}

/**
	Funcion que guardar un objeto usuario en localstorage
 */
const guardarUsuario = () => {
	
	const usuario = construirUsuario()
	localStorage.setItem(usuario.id, JSON.stringify(usuario))
}


