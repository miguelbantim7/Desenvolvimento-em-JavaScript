function validarEmail() {

    //Passo 1: capturar os elementos do DOM (tela)
    const emailInput = document.getElementById('email');
    const mensagemErro = document.getElementById('mensagemErro');
    const btnEnviar = document.getElementById('btnEnviar');

    //Passo 2: verificar o valor a ser validado
    const email = emailInput.value.trim();

    //validação pra verificar se o formato de email está correto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValido = false;

    //Passo 3: aplicar as regras de validação
    if (email == "") {
        mensagemErro.textContent = "Digite seu e-mail para continuar.";
        mensagemErro.className = "mensagem-status";
        isValido = false;
    } else if (emailRegex.test(email)) {
        mensagemErro.textContent = "Email válido!";
        mensagemErro.className = 'mensagem-status sucesso';
        isValido = true;
    } else {
        mensagemErro.textContent = "Erro: Email inválido!";
        mensagemErro.className = 'mensagem-status erro';
        isValido = false;
    }

    //Interação com a tela: habilitar ou desabilitar o botão Enviar
    btnEnviar.disabled = !isValido;
}

// Função para validação do formulário (senha)
function validarFormulario(event) {
    event.preventDefault();

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return false;
    }

    alert('Cadastro enviado com sucesso: ' + document.getElementById('email').value);
    // Aqui você poderia fazer uma chamada de API para envio dos dados, por exemplo
    return true;
}

// Passo 4: Fazer o envio do formulário e exibir um alerta de sucesso

const formulario = document.getElementById('cadastroForm');
formulario.addEventListener('submit', function(event) {
    // Validação do email
    validarEmail();

    // Se o email for válido, validamos o formulário
    if (!document.getElementById('btnEnviar').disabled) {
        // Validar senhas
        if (validarFormulario(event)) {
            // O cadastro foi feito com sucesso
            console.log("Cadastro enviado com sucesso.");
        }
    }
});