numeroInformado = 34;
let primeiroNum = 0;
let segundoNum = 0;
let terceiroNum = 1;

function sequenciaDeFibonacci(numero) {
    
    while (terceiroNum < numero) {

        primeiroNum = segundoNum
        segundoNum = terceiroNum

        terceiroNum = primeiroNum + segundoNum

    }

    return [primeiroNum, segundoNum, terceiroNum]
}

function verificaSeEstaNaSequencia(numero) {
    
    const sequencia = sequenciaDeFibonacci(numero)

    if (sequencia.includes(numero)) {
        return "Esta na sequência!"
    } else {
        return "Não esta na sequência!"
    }
}

console.log(verificaSeEstaNaSequencia(numeroInformado));

