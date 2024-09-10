let string = "Desafio Target Sistemas";

function buscaLetraA(string) {
    let contador = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === "a") {
            contador++
        }
    }

    if (contador > 0) {
        return `A letra 'a' aparece ${contador} vezes na string`
    } else {
        return "A letra 'a' não aparece na string"
    }
}

console.log(buscaLetraA(string));
