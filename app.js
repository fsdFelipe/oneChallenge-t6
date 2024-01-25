function criptografar() {
    let text = document.getElementById("texto").value;

    // Verificar se o campo de texto está vazio
    if (!text.trim()) {
        labelText = "Digite uma mensagem para criptografar";
        var labelElement = document.getElementById("label");

        // Mudar a cor do texto para vermelho
        labelElement.style.color = "red";
        labelElement.innerText = labelText;

        // Agendar a remoção da mensagem após 3 segundos
        setTimeout(function() {
            labelElement.innerText = "Nenhuma mensagem encontrada";
            labelElement.style.color = ""; // Resetar a cor
        }, 3000);

        return;
    }

    // Verificar se há letras maiúsculas no texto
if (/[A-Z]/.test(text)) {
    labelText = "Apenas letras MINUSCULAS";
    var labelElement = document.getElementById("label");

    // Mudar a cor do texto para vermelho
    labelElement.style.color = "red";
    labelElement.innerText = labelText;

    // Agendar a remoção da mensagem após 3 segundos
    setTimeout(function() {
        labelElement.innerText = "Digite novamente";
        labelElement.style.color = ""; // Resetar a cor
    }, 3000);

    return;
}

    // Função para substituir uma letra por duas letras à frente
    function novaLetra(letra) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const index = alphabet.indexOf(letra);
        if (index !== -1) {
            // Substituir por duas letras à frente, considerando wrap-around
            const newIndex = (index + 2) % 26;
            return alphabet[newIndex];
        }
        return letra; // Se não for uma letra, mantém inalterado
    }

    // Substituir cada letra no texto
    text = text.split('').map(novaLetra).join('');

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

     // Verificar se o campo de texto está vazio
    if (!text.trim()) {
        labelText = "Digite uma mensagem para descriptografar";
        var labelElement = document.getElementById("label");

        // Mudar a cor do texto para vermelho
        labelElement.style.color = "red";
        labelElement.innerText = labelText;

        // Agendar a remoção da mensagem após 3 segundos
        setTimeout(function() {
            labelElement.innerText = "Nenhuma mensagem encontrada";
            labelElement.style.color = ""; // Resetar a cor
        }, 3000);

        return;
    }

    // Função para substituir uma letra por duas letras à frente
    function novaLetra(letra) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const index = alphabet.indexOf(letra);
        if (index !== -1) {
            // Substituir por duas letras à frente
            const newIndex = (index - 2 + 26) % 26;
            return alphabet[newIndex];
        }
        return letra; // Se não for uma letra, mantém inalterado
    }

    // Substituir cada letra no texto na area texto-final
    text = text.split('').map(novaLetra).join('');

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