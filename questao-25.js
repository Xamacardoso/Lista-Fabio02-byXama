//25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
import { question } from "readline-sync";

console.log(' ===== METROS PARA KM E M =====\n')

//Entrada
let valmetros = parseInt(question(" Quantos metros deseja converter?: "))

//Processamento
let valkm = Math.floor(valmetros/1000)
let valmetros2 = (valmetros%1000)

//Saída
console.log(`\n O seu valor equivale a \n
>>> ${valkm}km e ${valmetros2}m`)
