// Base de dados fictícia
const paises = {
    "789": "Brasil",
    "800": "Itália",
    "840": "Estados Unidos",
};

const fabricantes = {
    "1234": "Empresa A",
    "5678": "Empresa B",
    "9101": "Empresa C",
};

// Função para calcular o dígito verificador
function calcularDigitoVerificador(numeroBase) {
    let soma = 0

    for (let i = 0; i < numeroBase.length; i++) {
        const digito = parseInt(numeroBase[i])
        if (i % 2 === 0) {
            soma += digito * 1
        } else {
            soma += digito * 3
        }
    }

    // Calcular o dígito verificador
    const resto = soma % 10
    const digitoVerificador = resto === 0 ? 0 : 10 - resto

    return digitoVerificador
}

// Função para extrair informações do código EAN
function extrairInformacoesEAN(codigoEAN) {
    if (codigoEAN.length !== 13) {
        console.log("O código EAN deve ter 13 dígitos.")
        return;
    }

    // Separar as partes do código
    const paisOrigem = codigoEAN.slice(0, 3); // Dígitos 1 a 3
    const codigoFabricante = codigoEAN.slice(3, 7); // Dígitos 4 a 7
    const codigoProduto = codigoEAN.slice(7, 12); // Dígitos 8 a 12
    const digitoVerificador = codigoEAN[12]; // Último dígito

    // Buscar informações na base de dados fictícia
    const nomePais = paises[paisOrigem] || "Desconhecido";
    const nomeFabricante = fabricantes[codigoFabricante] || "Desconhecido";

    // Imprimir as informações
    console.log("Informações do Código EAN:");
    console.log(`País de Origem: ${paisOrigem} (${nomePais})`);
    console.log(`Código do Fabricante: ${codigoFabricante} (${nomeFabricante})`);
    console.log(`Código do Produto: ${codigoProduto}`);
    console.log(`Dígito Verificador: ${digitoVerificador}`);
}

const numeroBase = "789123456789"; // 12 dígitos (número base)
const digitoVerificador = calcularDigitoVerificador(numeroBase);
const codigoEAN = numeroBase + digitoVerificador;

console.log("Código EAN Gerado:", codigoEAN);
extrairInformacoesEAN(codigoEAN);
