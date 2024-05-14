const FiguraBidimensional = require('./FiguraBidimensional')

class Circulo extends FiguraBidimensional {
	
	constructor(radio = 0.0, circunferencia = 0.0, area = 0.0, perimetro = 0.0) {
		super(perimetro, area)
		this._radio = radio
		this._circunferencia = circunferencia
	}
	
	calcularArea() {
		return Math.PI * Math.pow(this._radio,2)
	}
	
	calcularPerimetro() {
		return 2 * Math.PI * this._radio
	}
	
	set radio(radio) {
		this._radio = radio
	}
	
	get radio() {
		return this._radio
	}
	
	set circunferencia(circunferencia) {
		this._circunferencia = circunferencia
	}
	
	get circunferencia() {
		return this._circunferencia
	}
}

module.exports = Circulo



