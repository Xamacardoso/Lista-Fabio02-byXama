//13. Leia um valor em real (R$), calcule e escreva 70% deste valor.
import { question } from "readline-sync";

console.log(' ===== 70% DE UM NUMERO =====\n')

//Entrada
let valor = Number(question(" Digite um valor em reais(R$) para exibir 70% dele?: "))

//Processamento
const valor_novo = valor *0.70

//Saída
console.log(`\n 70% de seu valor equivalem a: R$${valor_novo} reais`)