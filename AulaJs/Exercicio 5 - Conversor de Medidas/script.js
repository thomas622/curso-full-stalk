let valor = prompt("Digite um valor em metros")
let escolha = prompt("Para qual medida deseja converter? \n 1-milímetro \n 2-centímetro \n 3-decímetro \n 4-decâmetro \n 5-hectômetro \n 6-quilômetro")
let resultado

switch(escolha){
    case "1":
        resultado = valor * 1000
        alert(valor+" metros é igual a "+resultado+" em milímetros")
        break
    case "2":
        resultado = valor * 100
        alert(valor+" metros é igual a "+resultado+" em centímetros")
        break
    case "3":
        resultado = valor * 10
        alert(valor+" metros é igual a "+resultado+" em decímetros")
        break
    case "4":
        resultado = valor / 10
        alert(valor+" metros é igual a "+resultado+" em decâmetros")
        break
    case "5":
        resultado = valor / 100
        alert(valor+" metros é igual a "+resultado+" em hectômetros")
        break
    case "6":
        resultado = valor / 1000
        alert(valor+" metros é igual a "+resultado+" em quilômetros")
        break
    default:
        alert("Opção inválida")
}