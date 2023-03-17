let opcao
let saldo = prompt("Qual a quantidade inicial de dinheiro disponivel?")
saldo = parseFloat(saldo)

do{
    opcao = prompt("Escolha uma opção: \n 1- Adicionar dinheiro \n 2- Remover dinheiro \n 3- Sair")

    switch(opcao){
        case "1":
            saldo += parseFloat(prompt("Quanto de dinheiro deseja adicionar?"))
            alert("Saldo atualizado: "+saldo+" R$")
            break
        case "2":
            saldo -= prompt("Quanto de dinheiro deseja remover?")
            alert("Saldo atualizado: "+saldo+" R$")
            break
        case "3":
            alert("Encerrando programa!")
            break
        default:
            alert("Escolha uma opção válida")
    }

} while(opcao != "3")

alert("A quantidade de dinheiro disponível é de "+saldo+" R$")