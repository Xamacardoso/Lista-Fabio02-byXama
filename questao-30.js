//30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.
import { question } from "readline-sync";

console.log('===== MINUTOS PARA DIAS, HORAS E MINS. =====\n')

//Entrada
let minutos = parseInt(question("Quantos minutos deseja converter?: "))

//Processamento
let dias = Math.floor(minutos/1440)
let restodias = minutos%1440
let horas = Math.floor(restodias/60)
let minutos2 = restodias%60

//Saída
console.log(`\n O número de minutos escolhido corresponde a: 
 >>> ${dias}d, ${horas}h e ${minutos2}min.`)