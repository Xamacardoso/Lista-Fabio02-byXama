//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
import { question } from "readline-sync";

console.log(' ===== CONVERSOR FAHRENHEIT >>> CELSIUS =====\n')

//Entrada
let tempF  = Number(question(" Digite uma temperatura em Fahrenheit(°F) para ser convertida em Celsius(°C): "))

//Processamento
let tempC = (5*tempF-160)/9

//Saída
console.log(`\n Fahrenheit >>> ${tempF.toFixed(2)} °F`)
console.log(`\n Celsius >>> ${tempC.toFixed(2)} °C`)
