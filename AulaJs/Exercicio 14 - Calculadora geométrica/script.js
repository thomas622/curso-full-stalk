let opcao
do{
    opcao = prompt("Escolha uma operação para calcular \n 1- Área do Triângulo \n 2- Área do Retângulo \n 3- Área do Quadrado \n 4- Área do Trapézio \n 5- Área do Círculo \n 6- Sair")
    switch(opcao){
        case "1":
            AreaDoTriangulo()
            break
        case "2":
            AreaDoRetangulo()
            break
        case "3":
            AreaDoQuadrado()
            break
        case "4":
            AreaDoTrapezio()
            break
        case "5":
            AreaDoCirculo()
            break
        case "6":
            alert("Finalizando")
            break
        default:
            alert("Digite uma opção válida")
    }

}while(opcao !="6")

function AreaDoTriangulo(){
    let base = parseFloat(prompt("Digite o valor da base"))
    let altura = parseFloat(prompt("Digite o valor da altura")) 
    return ("O valor da Área do Triangulo é:"+base*altura)/2
}

function AreaDoRetangulo(){
    let base = parseFloat(prompt("Digite o valor da base"))
    let altura = parseFloat(prompt("Digite o valor da altura")) 
    return ("O valor da Área do Retângulo é:"+base*altura)
}

function AreaDoQuadrado(){
    let lado = parseFloat(prompt("Digite o valor do lado"))
    return ("O valor da Área do Quadrado é:"+lado^2)
}

function AreaDoTrapezio(){
    let baseMaior = parseFloat(prompt("Digite o valor da base maior"))
    let baseMenor = parseFloat(prompt("Digite o valor da base menor"))
    let altura = parseFloat(prompt("Digite o valor da altura")) 
    return ("O valor da Área do Trapézio é:"+baseMaior + baseMenor) * altura / 2
}

function AreaDoCirculo(){
    let raio = parseFloat(prompt("Digite o valor do raio"))
    return ("O valor da Área do Círculo é:"+3.14 * raio^2)
}