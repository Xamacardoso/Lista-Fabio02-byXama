//26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
import { question } from "readline-sync";

console.log('===== DIAS PARA SEMANAS E DIAS =====\n')

//Entrada
let dias = Number(question("Digite um número de dias para saber a quantas semanas equivalem: ")) 

//Processamento
let semanas = Math.floor(dias/7)
let dias2 = dias%7

//Saída
console.log(`\n O número de dias que você escolheu equivale a: 

 >>> ${semanas} semana(s) e ${dias2} dia(s).`)