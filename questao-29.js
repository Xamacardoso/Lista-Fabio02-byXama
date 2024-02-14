//29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
import { question } from "readline-sync";

console.log(' ===== MESES PARA ANOS E MESES =====\n')

//Entrada
const meses = parseInt(question(" Quantos meses deseja converter: "))

//Processamento
let anos = Math.floor(meses/12)
let meses2 =  meses%12

//Saída
console.log(`\n O numero de meses selecionado equivale a: 
 >>> ${anos} anos e ${meses2} meses.`)