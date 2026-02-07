


const num1 = Number(prompt("Digite o primeiro numero"));
const num2 = Number(prompt("Digite o segundo número"));
const op = prompt("Digite a operação (+, -, *, /");

let resultado;

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Erro: Digite apenas o numeros válido!")
} else if (op === "+") {
    resultado = num1 + num2;
    alert("Resultado da soma: " + resultado)
} else if (op === "-") {
    resultado = num1 - num2
    alert("Resultado de subtracao é: " + resultado)
} else if (op === "*") {
    resultado = num1 * num2;
    alert("Resultado da Multiplicacao é:" + resultado)
} else if (op === "/") {
    resultado = num1 / num2;
    alert("Resultado da divisao é:" + resultado)
} else {
    alert("Erro : Operação Inválida!")
}


const idade1 = Number(prompt("Digite sua idade"));
if (Number.isNaN(idade1)) {
    alert("Erro: Digite apenas o número válido!")
  
} else if(idade1 <= 17){
   
    alert("Resultado da verificacao é: menor de idade")

} else if(idade1 >= 18){
        alert("Resultadoda verificacao é: maior de idade")

}else  {
    alert("Erro : Operação Inválida")
}
    



