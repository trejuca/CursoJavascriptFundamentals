const Figura = require('./Figura')

class FiguraBidimensional extends Figura {
	
	constructor(perimetro = 0.0, area = 0.0) {
		super(area)
		this._perimetro = perimetro
	}
	
	calcularPerimetro() {
		return -1	
	}
	
	set perimetro(area) {
		this._area = area
	}
	
	get perimetro() {
		return this._area
	}
}

module.exports = FiguraBidimensional