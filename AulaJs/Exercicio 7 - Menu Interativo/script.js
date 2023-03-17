let opcao
do{
    opcao = prompt("Bem-vindo, escolha a opção desejada: \n 1- Opção 1 \n 2- Opção 2 \n 3- Opção 3 \n 4- Opção 4 \n 5- Encerrar \n")
    switch(opcao){
        case "1":
            alert("Você escolheu a opção 1")
            break
        case "2":
            alert("Você escolheu a opção 2")
            break  
        case "3":
            alert("Você escolheu a opção 3")
            break
        case "4":
            alert("Você escolheu a opção 4")
            break
        case "5":
            alert("Você escolheu a opção 5")
            alert("O sistema está sendo encerrado.")
            break
        default:
            alert("Você não escolheu uma opção disponivel, tente novamente!")
    }

}  while(opcao != 5)