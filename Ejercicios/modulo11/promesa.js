
// Crear el productor que devuleve una promesa
const promesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		let exito = false
		
		if (exito) {
			resolve("La promesa ha terminado de forma correcta")
		} else {
			reject("La promesa ha fallado")
		}
	}, 5000)
})

// Crear el consumidor de la promesa
promesa
	.then((resultado) => {
		console.log(resultado)
	})
	.catch((error) => {
		console.log(error)
	})