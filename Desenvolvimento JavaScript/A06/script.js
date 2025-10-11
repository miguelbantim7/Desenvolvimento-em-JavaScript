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
        //limpar as classes de sucesso/erro
        mensagemErro.className="mensagem-status"
        isValido = false 
    } else if (emailRegex.test(email)){
        //email válido 
        mensagemErro.textContent = "Email válido!"
        mensagemErro.className= 'mensagem-status sucesso'
        isValido= true;
    } else if (!emailRegex.test(email)) {
        // email inválido
        mensagemErro.textContent = "Erro: Email inválido!";
        mensagemErro.className = 'mensagem-status erro';
        isValido= false;
    }

    //interação com a tela: habilitar ou desabilitar o botão Enviar
    btnEnviar.disabled = !isValido;
    






}