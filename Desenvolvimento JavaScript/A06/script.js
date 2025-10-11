//Função principal de validação que vai ser chamda pelo evento oninput do HTML
function validarEmail(){
  
       //Passo 1: capturar os elementos do DOM (tela)
       //cria uma variável chamada emailInput, acessa o documento .html e "pega" o 
       //elemento pelo id "email"
       const emailInput = document.getElementById('email')
       const mensagemErro = document.getElementById('mensagemErro')
       const btnEnviar = document.getElementById('btnEnviar')

       //Passo 2: verificar o valor a ser validado
       const email = emailInput.value.trim() //.trim() remove espaços em branco

       //validação pra verificar se o formato de email está correto (@email.com)
       //regex -> expressão regular 
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       let isValido = false; // todo endereço de email que for digitado, vai ser inválido até que a validação acuse que ele é válido

//Passo 3: aplicar as regras de validação
     
    if(email == ""){
        //campo vazio: não é um erro, mas também não é valido pra continuar
        mensagemErro.textContent= "Digite seu e-mail para continuar."
    }

    







}