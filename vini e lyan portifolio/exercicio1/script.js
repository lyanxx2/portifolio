let num1;
let num2;
let resultado;
let parOuImpar;

num1 = Number(window.prompt("Digitr aqui o primeiro número:"));
num2 = Number(window.prompt("Digite o segundo número"));

resultado = num1 + num2;    

parOuImpar = resultado % 2;

if(parOuImpar == 0) {
    alert(" o número " + resultado + " é par");
}else{
    alert(" o número " + resultado + " é impar");
 

}

