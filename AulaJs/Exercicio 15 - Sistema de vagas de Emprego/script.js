let opcao = ""
let alertText = '';
const vagas = []

do{
    opcao = prompt("Bem-vindo, escolha uma opção: \n 1- Listar vagas disponíveis \n 2- Criar uma nova vaga \n 3- Visualizar uma vaga \n 4- Inscrever candidato em uma vaga \n 5- Excluir uma vaga \n 6- Sair")
    switch(opcao){
        case "1": //Listar vaga
            vagas.forEach(function(NomeDaVaga, indice) {
                alertText += (indice+1) +"- "+ NomeDaVaga.nome + ' - Candidatos: '+NomeDaVaga.candidatos.length+"\n";
            });
            alert(alertText);
            break;
        case "2": //Criar vaga
            let nomeVaga = {} = prompt("Digite o nome da vaga")
            let descVaga = prompt("Digite a descrição da vaga")
            let dataVaga = prompt("Digite a data limite da vaga")
            let novaVaga = {
                nome: nomeVaga,
                descricao: descVaga,
                candidatos: []
            }
            if(confirm("Confirma a criação da vaga "+nomeVaga+"?")){
                alert("Vaga criada com sucesso.")
                vagas.push(novaVaga)
            }
            else{
                alert("Criação de vaga cancelada.")
            }
            break
        case "3": //Visualizar uma vaga
            vagas.forEach(function(NomeDaVaga, indice) {
                alertText += (indice+1) +"- "+ NomeDaVaga.nome + ' - Candidatos: '+NomeDaVaga.candidatos.length+"\n";
            });
            let indiceVaga = prompt("Insira o indice da vaga que deseja visualizar: \n"+ alertText)
            if(indiceVaga > vagas.length || indiceVaga < vagas.length){
                alert("Indice não correspondente a nenhuma vaga")
            } else{
                //procurar alguma forma de colocar o indice, nome da vaga, descriçao, data, etc igual no case 1
                alert()
            }
        case "4": //Inscrever um candidato
            let nomeCandidato = prompt("Insira o nome do candidato")
            
        case "5": //Excluir vaga
        case "6": //Sair
        default:
            alert("Escolha uma opção válida")
    }

} while(opcao != "6")

