const DIV_TABLE_CONTAINER = "tabla-div"

let tablaComponent = {
	tabla: null,
	columnas: {},
	construirTabla: function(id, nombreColumnas) {
		
		let tablaTemp = document.getElementById(id)
		
		if (!tablaTemp) {
			this.tabla = document.createElement("table")
			this.tabla.border = 1
			this.tabla.id = id
			this.columnas = nombreColumnas
		}
		
		const encabezado = this.tabla.createTHead().insertRow()
		
		Object.keys(nombreColumnas).forEach((valor, index) => {
			encabezado.insertCell(index).innerHTML = `<b>${nombreColumnas[valor]}</b>`
		})
		//encabezado.insertCell(Object.keys(nombreColumnas).length).innerHTML = "Acciones"
		document.getElementById(DIV_TABLE_CONTAINER).appendChild(this.tabla)
	},
	construirFila: function() {
		
		const fila = this.tabla.insertRow()
		const celdas = {}
		
		Object.keys(this.columnas).forEach((elemento, index) => {
				celdas[elemento] = fila.insertCell(index)
		})
		
		return { fila, celdas }
	},
	actualizarTabla: function(datos) {
		
		const datosTabla = this.construirFila()

		Object.keys(datosTabla.celdas).forEach((nodo) => {
			datosTabla.celdas[nodo].innerHTML = datos[nodo]
		})
		
		datosTabla.celdas['acciones'].appendChild(function() {
			// Crear los links
			const linkEliminar = document.createElement("a")
			const linkActualizar = document.createElement("a")
			// Agregarles texto
			linkEliminar.innerText = "Eliminar"
			linkActualizar.innerText = "Actualizar"
			// Setear atributos de href
			linkEliminar.href = "#"
			linkActualizar.setAttribute("href", "#")
			// Registrar eventos
			linkEliminar.addEventListener("click", function() {
				localStorage.removeItem(datos.id)
			})
			
			linkActualizar.addEventListener("click", function() {
				cargarUsuario(datos)
			})

			const div = document.createElement("div")
			div.appendChild(linkEliminar)
			div.appendChild(linkActualizar)
			
			return div
		}())
	},
	
	
	
	
	
	
}