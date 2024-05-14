
// Importar las clases
const Figura = require('./Figura')
const FiguraBidimensional = require('./FiguraBidimensional')
const Circulo = require('./Circulo')
const Cuadrado = require('./Cuadrado')
const Triangulo = require('./Triangulo')

// CRear un objeto Figura
const figura = new Figura()
console.log(`Area de la figura: ${figura.calcularArea()}`)

// Crear un objeto Circulo
const circulo = new Circulo(21.2,11.8)
console.log(`Area del circulo: ${circulo.calcularArea()}`)
console.log(`Perimetro del circulo: ${circulo.calcularPerimetro()}`)

// Crear un objeto Circulo
const cuadrado = new Cuadrado(21.2)
console.log(`Area del cuadrado: ${cuadrado.calcularArea()}`)
console.log(`Perimetro del cuadrado: ${cuadrado.calcularPerimetro()}`)

// Crear un objeto Circulo
const triangulo = new Triangulo(21.2,11.8)
console.log(`Area del triangulo: ${triangulo.calcularArea()}`)
console.log(`Perimetro del triangulo: ${triangulo.calcularPerimetro()}`)
