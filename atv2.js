function gerarCNPJ() {
    const cnpjBase = []
    for (let i = 0; i < 8; i++) {
        cnpjBase.push(Math.floor(Math.random() * 10))
    }
    cnpjBase.push(0, 0, 0, 1)

    // Função para calcular dígito verificador
    function calcularDigito(cnpjArray, pesos) {
        let soma = 0
        for (let i = 0; i < pesos.length; i++) {
            soma += cnpjArray[i] * pesos[i]
        }
        const resto = soma % 11
        return resto < 2 ? 0 : 11 - resto
    }

    // Pesos para cálculo dos dígitos verificadores
    const pesosPrimeiro = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    const pesosSegundo = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

    const primeiroDigito = calcularDigito(cnpjBase, pesosPrimeiro)
    cnpjBase.push(primeiroDigito)

    const segundoDigito = calcularDigito(cnpjBase, pesosSegundo)
    cnpjBase.push(segundoDigito)

    // Retornar o CNPJ no formato correto (xx.xxx.xxx/xxxx-xx)
    return cnpjBase
        .join('')
        .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
}

console.log("CNPJ Gerado: " + gerarCNPJ())