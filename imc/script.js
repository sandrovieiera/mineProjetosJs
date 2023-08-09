let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let res = document.getElementById('res');


function verificar() {
   
    let pes = Number(peso.value);
    let alt = Number(altura.value);
    let imc = (pes / (alt * alt)).toFixed(2);
    res.innerHTML = `Seu imc é ${imc}`

      if (pes == 0){
        alert('digite um numero')
        res.innerHTML = 'numero invalido'
    }
    else if (alt == 0){
        alert ('digite um numero valido')
        res.innerHTML = 'numero invalido'
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = `Seu imc é ${imc} peso normal`
      }
     
      else if (imc >= 25 && imc <= 29.9) {
          res.innerHTML = `Seu imc é ${imc} acima do peso`
      } 
      else if (imc >= 30 && imc <= 34.9)  {
        res.innerHTML = `Seu imc é ${imc} Obesidade grau I`
      }
      else if (imc >= 35) {
        res.innerHTML = `Seu imc é ${imc} Obesidade mórbida`
      }
}