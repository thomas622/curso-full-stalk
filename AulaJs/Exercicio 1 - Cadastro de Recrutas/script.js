let nome = prompt("Qual é o seu nome?")
let sobrenome = prompt("E sobrenome?")
let campoDeEstudo = prompt("Qual seu campo de estudo?")
let anoDeNascimento = prompt("E seu ano de nascimento?")
idade = 2023 - parseFloat(anoDeNascimento)

console.log("Nome completo: "+nome +" "+sobrenome)
console.log("Campo de estudo: "+campoDeEstudo)
console.log("Idade: "+idade)