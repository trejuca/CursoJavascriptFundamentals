
class Figura {
	
	constructor(area = 0.0) {
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
