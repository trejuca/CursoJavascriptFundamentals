
class Figura {
	
	constructor(area = 0.0) {
		if (new.target === Figura) {
			throw new Error("No se pueden instanciar objetos de la clase Figura")
		}
		this._area = area
	}
	
	calcularArea() {
		return -1	
	}
	
	set area(area) {
		this._area = area
	}
	
	get area() {
		return this._area
	}
}

module.exports = Figura
