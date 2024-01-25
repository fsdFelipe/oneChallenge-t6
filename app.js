function verificarCampoTexto(text, mensagemVazia, mensagemLetrasMaiusculas) {
    // Verificar se o campo de texto está vazio
    if (!text.trim()) {
        labelText = mensagemVazia;
        exibirMensagemErro(labelText);
        return false;
    }

    // Verificar se há letras maiúsculas no texto
    if (/[A-Z]/.test(text)) {
        labelText = mensagemLetrasMaiusculas;
        exibirMensagemErro(labelText);
        return false;
    }

    return true;
}

function exibirMensagemErro(labelText) {
    var labelElement = document.getElementById("label");

    // Mudar a cor do texto para vermelho
    labelElement.style.color = "red";
    labelElement.innerText = labelText;

    // Agendar a remoção da mensagem após 3 segundos
    setTimeout(function() {
        labelElement.innerText = "Digite novamente";
        labelElement.style.color = ""; // Resetar a cor
    }, 3000);
}

function criptografar() {
    let text = document.getElementById("texto").value;

    if (!verificarCampoTexto(text, "Digite uma mensagem para criptografar", "Apenas letras MINUSCULAS")) {
        return;
    }

    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    // exibir texto criptografado na area texto-final
    document.getElementById("texto-final").innerText = text;

    labelText = "Texto criptografado";
    var labelElement = document.getElementById("label");

    // Mudar a cor do texto para verde
    labelElement.style.color = "green";
    labelElement.innerText = labelText;

    // Agendar a remoção da mensagem após 3 segundos
    setTimeout(function() {
        labelElement.innerText = "Mensagem criptografada";
        labelElement.style.color = ""; // Resetar a cor
    }, 3000);

    buttonAction("botaoCriptografar");
}

function descriptografar() {
    let text = document.getElementById("texto").value;

   if (!verificarCampoTexto(text, "Digite uma mensagem para descriptografar", "Apenas letras MINUSCULAS")) {
        return;
    }

    text = text.replace(/ufat/g, "u");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ai/g, "a");
    text = text.replace(/imes/g, "i");
    text = text.replace(/enter/g, "e");
    // exibir codigo descriptografado
    document.getElementById("texto-final").innerText = text;

     labelText = "Texto descriptografado";
    var labelElement = document.getElementById("label");

    // Mudar a cor do texto para verde
    labelElement.style.color = "green";
    labelElement.innerText = labelText;

    // Agendar a remoção da mensagem após 3 segundos
    setTimeout(function() {
        labelElement.innerText = "Mensagem descriptografada";
        labelElement.style.color = ""; // Resetar a cor
    }, 3000);

    buttonAction("botaoDescriptografar");
}


function copiarTexto() { 
    const textAfterElement = document.getElementById("texto-final");
    const text = textAfterElement.innerText;

    navigator.clipboard.writeText(text);

    buttonAction("copiarTexto");
}

function buttonAction(id) {
    const button = document.getElementById(id);
    const originalColor = button.style.backgroundColor;
    const orignalText = button.innerHTML;
    button.disabled = true;


    button.innerHTML = "OK !";
    //button.style.backgroundColor = "#28ff68";
    setTimeout(() => {
        button.innerHTML = orignalText;
        button.style.backgroundColor = originalColor;
        button.disabled = false;
    }, 1000);
}