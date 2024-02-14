//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
import { question } from "readline-sync";

console.log('===== AREA DO TRIANGULO =====\n')

//Entrada
let base = Number(question("Defina um valor para a base do triângulo: "))
let altura = Number(question("Agora um valor para a altura dele: "))

//Processamento
const area = base*altura/2

//Saída
console.log(`\n Base: ${base}\n Altura: ${altura}\n\n Area do triangulo: ${area.toFixed(2)}`)