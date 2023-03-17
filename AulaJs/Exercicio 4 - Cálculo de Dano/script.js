let nome1 = prompt("Insira o nome do primeiro personagem")
let poderDeAtaque1 = prompt("Insira o poder de ataque do primeiro personagem")
let nome2 = prompt("Insira o nome do segundo personagem")
let pontosDeVida2 = prompt("Insira os pontos de vida do segundo personagem")
let poderDeDefesa2 = prompt("Insira o poder de defesa do segundo personagem")
let escudo = prompt("O segundo personagem possui escudo? Digite 'Sim' ou 'Nao'")

if (escudo == "sim") {
    let temEscudo = true;
}
else if (escudo == "nao"){
    let temEscudo = false;
}
else{
    escudo = prompt("O segundo personagem possui escudo? Digite 'sim' ou 'nao'")
}

let danoCausado = 0

if (poderDeAtaque1 > poderDeDefesa2 && temEscudo == false){
    danoCausado = poderDeAtaque1 - poderDeDefesa2;
}
else if(poderDeAtaque1 > poderDeDefesa2 && temEscudo == true){
    danoCausado = (poderDeAtaque1 - poderDeDefesa2)/2
}

pontosDeVida2 = pontosDeVida2 - danoCausado

alert("Informações Atualizadas: \n"+
    "Dano Causado: "+danoCausado+"\n"+
    "Pontos de Vida Restantes: "+pontosDeVida2)