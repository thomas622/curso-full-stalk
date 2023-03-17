let velocidade1 = prompt("Digite a velocidade do veiculo 1")
let velocidade2 = prompt("Digite a velocidade do veiculo 2")

let v1 = parseFloat(velocidade1)
let v2 = parseFloat(velocidade2)

if(v1 > v2){
    alert("Veiculo 1 é mais rápido");
}
else if(v2 > v1){
    alert("Veiculo 2 é mais rápido");
}
else{
    alert("As velocidades são iguais")
}