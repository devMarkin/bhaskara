var valorA = prompt("Informe o valor de A:");
var valorB = prompt("Informe o valor de B:");
var valorC = prompt("Informe o valor de C:");
var coeficiente1;
var coeficiente2;

var delta = (valorB * valorB) - 4 * valorA * valorC;

document.write("Valor de Delta => " + delta + "<br/><br/>");

if(delta < 0){
document.write("Para Delta negativo, não existem raízes reais. <br/>");  
		} else{
		  
document.write("Para Delta positivo, raízes diferentes: <br/>");  
		  
coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
		  
document.write("x' = " + coeficiente1 + "<br/>");
document.write("x'' = " + coeficiente2 + "<br/>");
		}