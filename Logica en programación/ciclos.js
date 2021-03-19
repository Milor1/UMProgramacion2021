document.write('<h1>Ciclos</h1><br>');


document.write('<h1>Problema 1</h1><br>La factorial de un número es la multiplicación del número que van del 1 a dicho número. Para expresar el factorial se suele utilizar la notación n!. Así la definición');
//numero = 5; el factorial es 1*2*3*4*5*6

var factorial = prompt ('Ingrese el numero a factorial,');
var resultado = 1;

for (var i = 1; i <= factorial; i++) {
    document.write(i,'<br>Espero un 720<br>');
    resultado = resultado * i;
}
document.write(resultado);

document.write('<h1>problema 2</h2><br>Hacer un algoritmo que imprima los números del 15 al 30 incluyendo estos dos últimos.');
// numeros del 15 al 30 incluyendolos:
 var numero = 15;
for (var index = 15; index <= 30; index++) {
    document.write(index, '<br>');
    resultado = index;
}
document.write(resultado,salto);

document.write('<h1>Problema 1</h3><br> Crea un programa que escriba la tabla de multiplicar del 5: desde "5 x 0 = 0" hasta "5 x 10 = 50"')
//La tabla del 5:
var numero = 10;
