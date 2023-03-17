let palavra = prompt("Digite uma palavra para ver se ela é um palíndromo")
let palindromo=""

for(i=palavra.length-1; i >= 0; i--){
    palindromo += palavra[i]
}


if(palindromo == palavra){
    alert(palavra +" é um palindromo. \n"+palavra+"\n"+palindromo)
    
}
else{
    alert(palavra +" não é um palindromo. \n"+palavra+"\n"+palindromo)
}