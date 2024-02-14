//17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
import { question } from "readline-sync";

console.log('===== AREA DO RETANGULO =====\n')

//Entrada
let base = Number(question("Defina um valor para a base do retangulo: "))
let altura = Number(question("Agora um valor para a altura dele: "))

//Processamento
const area = base*altura/2

//Saída
console.log(`\n Base: ${base}\n Altura: ${altura}\n\n Area do retangulo: ${area.toFixed(2)}`)