//23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
import { question } from "readline-sync";

console.log(' ===== CONVERSOR KG >>> G =====\n')

//Entrada
let valkg = Number(question(" Quantos kilos deseja transformar em gramas(g): "))

//Processamento
let valg = valkg*1000

//Saída
console.log(`\n Kg >>> ${valkg}kg\n g >>> ${valg}g`)