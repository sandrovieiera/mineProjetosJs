let fah = document.getElementById('fah');
let cel = document.getElementById('cel');
let res = document.getElementById('res');

function trans() {

    let fa = Number(fah.value)
    let f = fa * 9 / 5 + 32;
    res.innerHTML = ` ${fa} celsius é equivalente a ${f} graus fahrenheit `
    if (fa === 0) {
        alert('digite um numero')
        res.innerHTML = ''
    }
}
function mudar() {
    let ce = Number(cel.value)
    let c = ce - 32 * 5 / 9;
    res.innerHTML = `${ce} fahrenheit é equivalente a ${c} graus celsius`
    if (ce === 0) {
        alert('Escreva um numero')
        res.innerHTML = ''
    }
}