//27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.
import { question } from "readline-sync";

console.log('===== SEGUNDOS PARA HORAS, MIN, SEG =====\n')

//Entrada
let segs = Number(question("Digite um número de segundos para converter: "))

//Processamento
let horas = Math.floor(segs/3600)
let resto = horas%3600
let mins = Math.floor(resto/60)
let segs2 = resto%60

//Saída
console.log(`\n O tempo escolhido equivale a: 
 
>>> ${horas}h, ${mins}min e ${segs2}s`)