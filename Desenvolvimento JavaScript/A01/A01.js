/*como criar variáveis em JavaScript
-> variável é um espaço na memória
-> toda variável precisa de : nome e tipo
-> sintaxe: let <nome-variavel>
*/

/*variavel idade criada, mas nenhum 
valor ou tipo foi passado pra variavel*/

let numero = 15 /*variavel chamada numero com o valor
15 associado -> tipo inteiro (ou int, interger)*/

let preco = 9.99 /*variavel do tipo double (decimal)
chamada preco com valor 9.99*/

let nome = "JavaScript" /*variavel do tipo String (texto)
chamada nome com o valor "JavaScript"*/

/*Escrevendo textos no console*/
console.log("Hello World! :)");

/*Escreva no console, seu nome, idade e localização
utilizando variáveis*/
let meuNome = "Miguel"
let minhaIdade = 16
let localizacao = "Diadema"

console.log("Meu nome é " + meuNome + " e a minha idade é " + 
minhaIdade + ". E eu moro em " + localizacao + ".")


/*If-else
    -> Estrutura condicional: tomar decisões*/

let idade = 17

if (idade >= 18) {
    console.log("É maior de idade.")
} else {
    console.log("É menor de idade.")
}
 
/*Exercício: desenvolva um código que compare uma nota armazenada
na variável chamada "nota, se for maior ou igual a 5, o aluno
está aprovado, se for menor que 5, está reprovado*/


/*MODO PERFUMARIA ATIVADO
Vamos permitir que a entrada do usuário seja capturada*/


/*importando um módulo que permite ler a entrada do usuário*/
const readline = require("readline")

/*configuração para ler os dados do teclado*/
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

/*perguntando a nota*/
rl.question("Digite a nota do aluno: ", function(nota){

        /*convertendo entrada para numero*/
        nota = Number(nota);

        if (nota >= 5) {
            console.log("Aprovado!");
} else {
            console.log("Reprovado!");
}

rl.close();

    } )










