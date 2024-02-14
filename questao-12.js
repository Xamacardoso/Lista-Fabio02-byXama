//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
import { question } from "readline-sync";

console.log('===== AUMENTO SALARIAL EM 25% =====\n')

//Entrada
let salario = Number(question("Qual é o seu salário?: "))

//Processamento
const salario_novo = salario *1.25

//Saída
console.log(`\nO seu salário com um aumento de 25% será de: ${salario_novo}`)