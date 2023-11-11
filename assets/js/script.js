let res = document.getElementById('res');
let repeti = document.getElementById('repeti')
let numerosSorteados = []
function bingo() {
    let numeroInteiroAleatorio
    do{
     numeroInteiroAleatorio = Math.floor(Math.random() * 80) + 1;
    }while (numerosSorteados.includes(numeroInteiroAleatorio));

    numerosSorteados.push(numeroInteiroAleatorio);

    res.innerHTML = numeroInteiroAleatorio
    repeti.innerHTML = numerosSorteados
}



  