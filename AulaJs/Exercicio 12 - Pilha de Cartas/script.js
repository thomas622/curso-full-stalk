let opcao
let cartas = []
let cartaRemovida
do{
    opcao = prompt("Cartas atualmente no baralho: "+cartas+"\n Escolha uma opção: \n 1- Adicionar uma carta \n 2- Puxar uma Carta \n 3- Sair")
    switch(opcao){
        case "1":
            let novaCarta = prompt("Qual o nome da nova carta?")
            cartas.push(novaCarta)
            break
        case "2":
            cartaRemovida = cartas.pop()
            alert(cartaRemovida+ " foi removida do baralho!")
            break
        case "3":
            alert("Finalizando...")
            break
        default:
            alert("Escolha uma opção válida!")
    }

}while(opcao != 3)