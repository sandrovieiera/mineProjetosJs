
function concatena() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let res = document.getElementById('res');
    
    

    
    res.textContent = `idade: ${idade} cidade: ${cidade} Nome: ${nome}`
}