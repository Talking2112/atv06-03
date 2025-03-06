function verificarCpf(cpf) {
    if (cpf.length !== 11) {
        return false
    }

    // Cálculo do primeiro dígito verificador
    let soma = 0
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i)
    }
    let resto = soma % 11
    let digito1 = resto < 2 ? 0 : 11 - resto

    // Verifica se o primeiro dígito está correto
    if (digito1 !== parseInt(cpf[9])) {
        return false
    }

    // Cálculo do segundo dígito verificador
    soma = 0
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i)
    }
    resto = soma % 11
    let digito2 = resto < 2 ? 0 : 11 - resto

    // Verifica se o segundo dígito está correto
    if (digito2 !== parseInt(cpf[10])) {
        return false
    }

    return true
}

const cpf = "12345678909"
if (verificarCpf(cpf)) {
    console.log("CPF válido!")
} else {
    console.log("CPF inválido!")
}
