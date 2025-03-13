// Neste código eu utilizei as Regras do Algoritmo de Luhn

// Invertendo os dígitos: Comece da direita para a esquerda.
// Dobrar os dígitos em posições ímpares: Dobre cada segundo dígito (começando do segundo dígito da direita).
// Somar os dígitos dos produtos: Se o produto de um dígito for maior que 9, some os dígitos do produto 
// (por exemplo, 18 se torna 1 + 8 = 9).
// Somar todos os dígitos: Some todos os dígitos resultantes.
// Verificar a soma: Se a soma total for um múltiplo de 10, o número do cartão é válido.

function luhnCheck(cardNumber) {
    const reversedDigits = cardNumber
      .split('')
      .reverse()
      .map(digit => parseInt(digit, 10));
  
    let checksum = 0;
  
    for (let i = 0; i < reversedDigits.length; i++) {
      let digit = reversedDigits[i];
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      checksum += digit;
    }
  
    return checksum % 10 === 0;
  }
  
  // Exemplo de uso
  const numeroCartao = "4532015112830366";
  if (luhnCheck(numeroCartao)) {
    console.log("O número do cartão é válido.");
  } else {
    console.log("O número do cartão é inválido.");
  }