//16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)
import { question } from "readline-sync";

console.log('===== AREA DO QUADRADO =====\n')

//Entrada
let lado = Number(question("Defina um valor para o lado de um quadrado: "))

//Processamento
const area = lado**2

//Saída
console.log(`\n Lado: ${lado} unidades\n\n Area do quadrado: ${area.toFixed(2)} unidades`)