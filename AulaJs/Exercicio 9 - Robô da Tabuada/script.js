let num = parseFloat(prompt("Digite um número para calcular sua tabuada de 1 a 20"))
let resultado = "Tabuada de 1 a 20 \n"

for(let i=1; i<= 20; i++){
    let calculo = num * i;
    resultado += num + " * "+i+" = "+ calculo+"\n"
}
alert(resultado)