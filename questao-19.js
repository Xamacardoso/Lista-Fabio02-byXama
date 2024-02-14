//19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14))
import { question } from "readline-sync";

console.log('===== VOLUME DA ESFERA =====\n')

//Entrada
let raio = Number(question(" Defina um valor para o raio de uma esfera qualquer: "))

//Processamento
const pi = 3.14
const volume = 4*pi*(raio**3)

//Saída
console.log(`\n Raio: ${raio} unidades\n\n Valor do Volume da esfera: ${volume.toFixed(2)} un³`)