const FiguraBidimensional = require('./FiguraBidimensional')

class Cuadrado extends FiguraBidimensional {
	
	constructor(lado = 0.0, area = 0.0, perimetro = 0.0) {
		super(perimetro, area)
		this._lado = lado
	}
	
	set lado(lado) {
		this._lado = lado
	}
	
	get lado() {
		return this._lado
	}
	
	calcularArea() {
		return this._lado * this._lado
	}
	
	calcularPerimetro() {
		return 4 * this._lado  		
	}
}

module.exports = Cuadrado