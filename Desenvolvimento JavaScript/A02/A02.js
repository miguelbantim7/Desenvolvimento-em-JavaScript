/*trabalhando com métodos de console

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question('Qual é seu nome? ', (nome) => {
     console.log(`Olá, ${nome}`)

     rl.close()
})
*/

/*usando o let -> respeita o escopo do bloco
if (true){
    let nome = "Miguel"
    console.log(nome);
}
console.log (nome)
*/

/*usando var -> não respeita escopo do bloco 
if (true){
    var nome = "JavaScript"
    console.log(nome);
}
console.log(nome)*/

/*exemplo 3 -> dentro de um for
for (let i = 0; i < 3; i++){
    console.log("Dentro do for", i)
}
console.log("Fora do for", i)
*/

/*IF ELSE

let idade = 26
if (idade < 12 ) {
    console.log("Criança")
} else if (idade < 18) {
     console.log("Adolescente")
} else {
    console.log("Adulto")
}*/


/*Exercicio 1*/

//importando o módulo readline para receber a entrada dos dados
/*const readline = require("readline")

//configurar o módulo pra capturar as entradas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let P1, P2, P3, P4, chTotal, chFaltas
//perguntando pro usuario as quatro notas
/*rl.question("Digite a nota P1: ", function (P1) {
    rl.question("Digite a nota P2: ", function (P2) {
        rl.question("Digite a nota P3: ", function (P3) {
            rl.question("Digite a nota P4: ", function (P4) {
                rl.question("Digite a carga horaria (em horas):", function (chTotal) {
                    rl.question("Digite a quantidade de faltas: ", function (chFaltas) {
                        P1 = Number(P1)
                        P2 = Number(P2)
                        P3 = Number(P3)
                        P4 = Number(P4)
                        chTotal = Number(chTotal)
                        chFaltas = Number(chFaltas)
                       
                        //calculo da media
                        let media = (P1 + P2 + P3 + P4) / 4

                        //calculo porcentagem faltas
                        let faltas = (chFaltas / chTotal) * 100

                        //verificação da situação do aluno (nota e falta)
                        if (faltas >= 25){
                            console.log("Reprovado por falta")
                        } else if (media >= 6) {
                            console.log("APROVADO", media)
                        } else {
                            console.log("REPROVADO", media)
                        }

                        rl.close(); //encerra o programa

                    })
                })
            })
        })
    })
})*/

//definindo as informaçóes do sistema
/*let id = "admin"
let senha = "admin123"

//definindo as informações inseridas pelo usuario 
let idUsuario = "admin"
let senhaUsuario = "admin123"

//verificação do login

if (id == idUsuario && senha == senhaUsuario) {
    console.log("Usuário logado com sucesso.")
} else {
    console.log("Usuário ou senha incorretos.")
}

rl.close(); */

/*Switch: case

let codigo = 01;

switch (codigo) {
    case 980: console.log("Kindle")
        break;
    case 332: console.log("BYD Dolphin mini")
        break;
    case 105: console.log("Aspirador robô")
        break;
    default: console.log("Item não encontrado.")
        break;
}

rl.close();*/

//Situação 1

/*let codigo = 2

switch (codigo) {
    case 1:
        console.log("Produto: Caneta")
        break;
    case 2:
        console.log("Produto: Lápis")
        break;
    case 3:
        console.log("Produto: Borracha")
        break;
    case 4:
        console.log("Produto: Caderno")
    default:
        console.log("Código inválido")
        break;
}

//Situação 2

let numero1 = 10
let numero2 = 5
let operacao = "subtração"

switch (operacao) {
    case "adição":
        console.log("Resultado", numero1 + numero2)
        break;
    case "subtração":
        console.log("Resultado", numero1 - numero2)
        break;
    case "multiplicação":
        console.log("Resultado", numero1 * numero2)
        break;
    case "divisão":
        if (numero2 === 0) {
            console.log("Erro: divisão por zero")
    } else {
        console.log("Resultado", numero1 / numero2)
    }
    default:
        console.log("Operação inválida")
        break;
}

rl.close()*/



/*FOR - REPETIÇÃO

for (let i = 30; i >= 0; i--){
    console.log("Contagem regressiva", i)
}
*/

/**for ( let i = 0; i <= 20; i+=2){
    console.log("Números pares: ", i)
}*/

/*for ( let i = 1; i <= 20; i+=2){
    console.log("Números impares: ", i)
}*/



/*
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


while (numero < 10 ) {
rl.question("Digite um número: ", function(numero){
        numero = Number(numero)
        console.log("Número inálido, tente de novo")


})

*/


//criar uma função chamada delay que conta o tempo em milisegundos 
function delay (ms) {
    //cria uma rotina que fica "resolvendo algo, nesse caso"
    //fica esperando milisegundos definidos pelo usuário e 
    //exibe o conteúdo
    return new Promise(resolve => setTimeout(resolve, ms));
}


let i = 1

while (i <= 5){ 
    console.log(i);  //escrever o número na tela 
    i++ //incrementar o número
    await delay(1000)
}








































































































































































