/* Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada.
Considera a seguinte definição:

1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.
*/

function ativCalculadora(numero1, numero2, operador) {
    switch (operador) {
        case 1:
            return numero1 + numero2

        case 2:
            return numero1 - numero2

        case 3:
             return numero1 * numero2

        case 4:
            if (numero2 != 0) {
              return numero1 / numero2
            } else{
            alert("ERRO - Divisão por zero")
            }      
            
        default:
            alert("Operação inexistente: 0")
    }
    
}

let num1 = parseFloat(prompt("Digite o primeiro número: "))
let num2 = parseFloat(prompt("Digite o segundo número: "))
let op = parseInt(prompt("Digite o número do operador:\n1 (Soma),\n2 (Subtração),\n3 (Multiplicação),\n4 (Divisão)")) 

let respostaCalc = ativCalculadora(num1, num2, op)
alert("Resposta: " + respostaCalc)