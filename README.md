# AtividadeHenriqueFront
Atividade sobre Expressões Regulares em FrontEnd.
Este README explica as expressões regulares utilizadas na implementação do código JavaScript, que realiza a validação dos campos do formulário HTML.

Expressão Regular para Validar o Nome:
const regexNome = /^[A-ZãáàèéêíìóòõúüçÇ][A-ZãáàèéêíìóòõúüçÇ\s]{0,99}$/i;
- ^: início da linha.
- [A-ZãáàèéêíìóòõúüçÇ]: esta parte da expressão regular corresponde a um caractere que pode ser uma letra maiúscula (A-Z) ou uma letra acentuada utilizada em português (ãáàèéêíìóòõúüçÇ).
- [A-ZãáàèéêíìóòõúüçÇ\s]{0,99}: este trecho da expressão regular corresponde a zero a 99 ocorrências de letras maiúsculas, letras com acentos ou espaços em branco.
- /i: retorna sem diferenciar maiúsculas de minúsculas.

Expressão Regular para Validar o Email:
const regexEmail = /^[\w+\.-]+@[\w+\.-]+\.[a-zA-Z]{2,}$/;
- ^: início da linha.
- [\w+\.-]+: corresponde a um ou mais caracteres que podem ser letras, números, sublinhados, pontos , ou hífens.
- @: relaciona ao símbolo "@" em um endereço de email.
- [\w+\.-]+: outra sequência de um ou mais caracteres permitidos antes do domínio.
- \.: relacionado ao ponto final utilizado em um endereço de email.
- [a-zA-Z]{2,}: corresponde a dois ou mais caracteres alfabéticos, representando a extensão do domínio do email.
- $: final da linha.

Expressão Regular para Validar o Telefone:
const regexTel = /^\(?\d{2}\)?\s*(?:\d{4,5}-?\d{4}|\d{4}-?\d{3})$/;
- ^: representa o início da linha.
- \(?: faz o parêntese aberto ser opcional.
- \d{2}: corresponde a dois dígitos numéricos, representando o DDD do telefone.
- \)?: esta parte da expressão torna o parêntese fechado opcional.
- \s*: este trecho corresponde a zero ou mais espaços em branco.
- (?:\d{4,5}-?\d{4}|\d{4}-?\d{3}): essa parte utiliza um grupo de não-captura para definir duas formas possíveis para representar o número de telefone: com 4 ou 5 dígitos antes do hífen e 4 dígitos após o hífen, ou com 4 dígitos antes do hífen e 3 dígitos após o hífen.
- $: final da linha.

Espero que este README ajude a esclarecer como as expressões regulares foram escolhidas e como elas funcionam na validação dos campos do formulário. 
