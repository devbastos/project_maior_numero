let valorMaior = maiorNumero(10, 5);
console.log(valorMaior)

function maiorNumero(numero1, numero2) {
    if (numero1 > numero2)
        return numero1;
    else return numero2;
}

//ou codigo limpo

let valorMaior = maiorNumero(10, 5);
console.log(valorMaior)

function maiorNumero(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}