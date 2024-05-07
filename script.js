const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('telefone');

    const nome = nomeInput.value;
    const email = emailInput.value;
    const tel = telInput.value;

    const nomeValido = validarNome(nome);
    const emailValido = validarEmail(email);
    const telValido = validarTel(tel);

    if (nomeValido && emailValido && telValido) {
        nomeInput.value = '';
        emailInput.value = '';
        telInput.value = '';
    } else {
        const erro = [];
        if (!nomeValido) {
            erro.push('Nome inválido: Máximo 100 caracteres e sem números.');
        }
        if (!emailValido) {
            erro.push('Email inválido.');
        }
        if (!telValido) {
            erro.push('Telefone inválido (utilize o formato brasileiro).');
        }
        alert(erro.join('\n'));
    }
});

function validarNome(nome) {
    const regexNome = /^[A-ZãáàèéêíìóòõúüçÇ][A-ZãáàèéêíìóòõúüçÇ\s]{0,99}$/i;
    return regexNome.test(nome);
}

function validarEmail(email) {
    const regexEmail = /^[\w+\.-]+@[\w+\.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

function validarTel(tel) {
    const regexTel = /^\(?\d{2}\)?\s*(?:\d{4,5}-?\d{4}|\d{4}-?\d{3})$/;
    return regexTel.test(tel);
}
