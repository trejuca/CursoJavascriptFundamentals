class Empleado {
	
	constructor(primerNombre = "", apellidoPaterno = "") {
		
		if (new.target === Empleado) {
			throw new Error("No se puede instanciar un objeto Empleado")
		}
		
		this._primerNombre = primerNombre
		this._apellidoPaterno = apellidoPaterno
	}
	
	calcularSueldo() {
		return -1	
	}
	
	set primerNombre(primerNombre) {
		this._primerNombre = primerNombre
	}
	
	get primerNombre() {
		return this._primerNombre
	}
	
	set apellidoPaterno(apellidoPaterno) {
		this._apellidoPaterno = apellidoPaterno
	}
	
	get apellidoPaterno() {
		return this._apellidoPaterno
	}
}
module.exports = Empleado
