let opcao = ""
let fila = []
let novoPaciente

do{
    let pacientes = ""
    for (i=0; i<fila.length; i++){
        pacientes += (i+1) + "º - "+fila[i]+"\n"
    }

    opcao = prompt("Lista de Pacientes a serem atendidos: \n"+ pacientes + "Escolha uma opção:\n 1- Novo Paciente \n 2- Consultar Paciente \n 3- Sair")

    switch(opcao){
        case "1":
            novoPaciente = prompt("Qual o nome do novo paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            let pacienteAtendido = fila.shift()
            alert(pacienteAtendido+" foi atendido.")
            break
        case "3":
            alert("Finalizando programa.")
            break
        default:
            alert("Escolha uma opção válida")
    }
    
} while(opcao != '3')