//18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
import { question } from "readline-sync";

console.log('===== COMPRIMENTO DA CIRCUNFERENCIA DO CIRCULO =====\n')

//Entrada
let raio = Number(question("Defina um valor para o raio do circulo: "))

//Processamento
const comprimento = raio*2*Math.PI

//Saída
console.log(`\n Raio: ${raio}\n\n Comprimento do circulo: ${comprimento.toFixed(2)}`)