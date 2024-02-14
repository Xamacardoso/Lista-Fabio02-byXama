//28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.
import { question } from "readline-sync";

console.log(' ===== HORAS PARA SEMANAS, DIAS E HORAS =====\n')

//Entrada
let horas = parseInt(question("Quantas horas deseja converter?: "))

//Processamento
let semanas = Math.floor(horas/168)
let restosem = horas%168
let dias = Math.floor(restosem/24)
let horas2 = restosem%24

//Saída
console.log(`\n O número de horas escolhido equivale a: 
 >>> ${semanas}sem, ${dias}d e ${horas2}h.`)