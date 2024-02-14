//24. Leia um valor em m, calcule e escreva o equivalente em cm.
import { question } from "readline-sync";

console.log(' ===== CONVERSOR M >>> CM =====\n')

//Entrada
let valm = Number(question(" Insira quantos metros(m) deseja converter para centimetros(cm): "))

//Processamento
let valcm = valm*100

//Saída
console.log(`\n m >>> ${valm}m\n cm >>> ${valcm}cm`)