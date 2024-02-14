//11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
import { question } from "readline-sync";

console.log('===== INVERSO DO NUMERO DE 3 DIGITOS =====\n')

//Entrada
let num = Number(question("Digite um número de 3 dígitos que será invertido: \n"))

//Processamento
let centena = Math.floor(num/100)
let resto = num%100
let dezena = Math.floor(resto/10)
let unidade = num%10

//Saída
console.log(`O inverso do seu número é: ${unidade}${dezena}${centena}`)