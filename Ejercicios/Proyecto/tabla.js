

const tablaComponente = {
	tabla: null,
	columnas: {},
	destruirTabla: function(table) {

		if (table) {
			table.remove()
		}
	},
	construirTabla: function(id, nombresColumnas) {
		console.log("entra a construir")
		let tablaTemp = document.getElementById(id)

		if (!tablaTemp) {
			this.tabla = document.createElement("table")
			this.tabla.id = id
			this.columnas = nombresColumnas
			this.tabla.setAttribute("class","table  table-hover")

			const encabezado = this.tabla.createTHead().insertRow()

			Object.keys(nombresColumnas).forEach(function(key, index) {
				encabezado.insertCell(index).innerHTML = `<b>${nombresColumnas[key]}</b>`
			})

			document.getElementById("div-resultados").appendChild(this.tabla)
		}
	},
	construirFila: function() {

		if (Object.keys(this.columnas).length === 0) {
			console.log("El objeto columnas esta vacio")
			return {};
		}

		const fila = this.tabla.insertRow()
		const celdas = {}

		Object.keys(this.columnas).forEach(function(elemento, index) {
			celdas[elemento] = fila.insertCell(index)
		})

		return { fila, celdas }
	},
	actualizarTabla: function(datos) {

		const datosTabla = this.construirFila()

		Object.keys(datosTabla.celdas).forEach(function(elemento, index) {
			datosTabla.celdas[elemento].innerHTML = datos[elemento]
		})

		datosTabla.celdas['acciones'].appendChild(function(tabla) {

			const linkEliminar = document.createElement('a')
			const linkActualizar = document.createElement('a')

			linkEliminar.innerText = "Eliminar"
			linkEliminar.setAttribute("href", "")
			linkEliminar.addEventListener("click", function(e) {
				e.preventDefault()
				localStorage.removeItem(datos.id)
				tablaComponente.destruirTabla(tabla)
				inicializarAplicacion()
			})

			linkActualizar.innerText = "Actualizar"
			linkActualizar.setAttribute("href", "")
			linkActualizar.addEventListener("click", function(e) {
				e.preventDefault()
				cargarUsuario(datos)
			})

			const div = document.createElement("div")
			div.appendChild(linkEliminar)
			div.appendChild(linkActualizar)

			return div
		}(this.tabla))
	}
}
