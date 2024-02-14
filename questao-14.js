//14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
import { question } from "readline-sync";

console.log('===== MEDIA PONDERADA DE 3 NOTAS =====\n')

//Entrada
let nota1 = Number(question('Nota 1: '))
let peso1 = Number(question('Peso 1: '))
let nota2 = Number(question('Nota 2: '))
let peso2 = Number(question('Peso 2: '))
let nota3 = Number(question('Nota 3: '))
let peso3 = Number(question('Peso 3: '))

//Processamento
const soma_pesos = peso1+peso2+peso3
const media_pond = (nota1*peso1 + nota2*peso2 + nota3*peso3)/soma_pesos

//Saída
console.log(`\n A média ponderada dessas notas é ${media_pond.toFixed(2)}`)