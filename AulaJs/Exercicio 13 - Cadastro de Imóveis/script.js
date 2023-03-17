let opcao
let quantidadeDeImoveis = 0
let imoveis = {
    nome: [],
    quantidadeDeQuartos: [],
    quantidadeDeBanheiros: [],
    garagem: []
}
let imoveisInfo =""

do{
    opcao = prompt("Quantidade de imóveis cadastrados: "+quantidadeDeImoveis+"\n Escolha uma opção: \n 1- Salvar novo imóvel \n 2- Mostrar todos os imóveis cadastrados \n 3- Sair")
    switch(opcao){
        case "1":
            imoveis.nome.push(prompt("Digite o nome do proprietário do imóvel"))
            imoveis.quantidadeDeQuartos.push(prompt("Digite a quantidade de quartos"))
            imoveis.quantidadeDeBanheiros.push(prompt("Digite a quantidade de banheiros"))
            imoveis.garagem.push(prompt("Possui garagem? S/N"))
            quantidadeDeImoveis++
            break
        case "2":
            if(quantidadeDeImoveis <= 0){
                alert("Não há nenhum imóvel cadastrado")
            }
            else if(quantidadeDeImoveis > 0){
                for(i=0; i<imoveis.nome.length; i++){
                    imoveisInfo += "Nome: "+imoveis.nome[i] + "\n Quantidade de Quartos "+ imoveis.quantidadeDeQuartos[i] + "\n Quantidade de Banheiros: "+ imoveis.quantidadeDeBanheiros[i]+"\n Possui garagem? "+imoveis.garagem[i]+"\n\n"
            }
            alert(imoveisInfo)
        }
            break
        case "3":
            alert("Finalizando...")
            break
        default:
            alert("Digite uma opção válida")
    }   


} while(opcao != "3")