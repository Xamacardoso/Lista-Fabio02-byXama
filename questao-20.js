//20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
import { question } from "readline-sync";

console.log(' ===== CONVERSOR CELSIUS >>> FAHRENHEIT =====\n')

//Entrada
let tempC  = Number(question(" Digite uma temperatura em Celsius(°C) para ser convertida em Fahrenheit(°F): "))

//Processamento
let tempF = (9*tempC+160)/5

//Saída
console.log(`\n Celsius >>> ${tempC.toFixed(2)} °C`)
console.log(`\n Fahrenheit >>> ${tempF.toFixed(2)} °F`)