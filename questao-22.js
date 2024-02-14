//22. Leia um valor em km, calcule e escreva o equivalente em m.
import { question } from "readline-sync";

console.log(' ===== CONVERSOR KM >>> M =====\n')

//Entrada
let valkm = Number(question(" Insira quantos quilometros(Km) deseja converter para metros(m): "))

//Processamento
let valm = valkm*1000

//Saída
console.log(`\n Km >>> ${valkm}km\n m >>> ${valm}m`)