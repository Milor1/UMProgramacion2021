//Constantes de formato 
var salto = '<br>';

//Problema a resolver:
var problema1 = ('1.Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.')
document.write(problema1, salto);

//Datos
var nume1 = 5;
var nume2 = 5;
var resultado;
var operacion;

if (nume1 === nume2) {
    operacion = "multiplicacion"
    resultado = nume1 * nume2;
}
if (nume1> nume2) {
    operacion = "resta"
    resultado = nume1 - nume2;
}
if (nume1< nume2) {
    operacion = "suma"
    resultado = nume2 + nume1;
}
document.write('Los números ingresados son : ', nume1 , ' y ' , nume2 ,salto, ' La operacion ejecutada es ', operacion, salto, ' El resultado obtenido ', resultado, salto, salto);

//--------------------------------------------------------------------------------------------------------
var problema2 = ('2.Leer tres números diferentes e imprimir el número mayor de los tres.')
document.write(problema2,salto);

//Datos
var nume1 = 4;
var nume2 = 3;
var nume3 = 9;
var resultado; 

if (nume1 > nume2 & nume1 > nume3) {
    resultado = 'El numero uno = '+nume1;
}
if (nume2 > nume1 & nume2 > nume3) {
    resultado = 'El numero dos ='+nume2;
}
if (nume3 > nume1 & nume3 > nume2) {
    resultado = 'El numero tres ='+nume3;
}
document.write('El numero mayor dado es: ', resultado, salto, salto);

//----------------------------------------------------------------------------------------------------------------
var problema3 = ('3. Determinar la cantidad de dinero que recibirá un trabajador por concepto de las horas extras trabajadas en una empresa, sabiendo que cuando las horas de trabajo exceden de 40, el resto se consideran horas extras y que estas se pagan al doble de una hora normal cuando no exceden de 8; si las horas extras exceden de 8 se pagan las primeras 8 al doble de lo que se pagan las horas normales y el resto al triple.')
document.write(problema3,salto);

//Datos
var horast = 50;

//Constantes
const horaslaborales = 40;
const horasextrasdobles = 8;
const valorhora = 12000;

var horasextras = horast - horaslaborales;
var horatriple;
var pagotriple;
var horadoble;
var pagotriple;
var pagototal;
var numero = 3;

if (horasextras >= 49) {
    horatriple = horast - horaslaborales - horasextrasdobles;
    pagotriple = horatriple * (valorhora * 3);
}
if (horasextras <=48) {
    horadoble = horast - horaslaborales;
    pagodoble = horasextras + (valorhora * 2);
}
pagototal = pagotriple + pagodoble + (valorhora * horaslaborales);
document.write('Las horas del trabajador: ', horast, salto, 'Horas extras: ', horasextras, salto, 'Las horas pagadas al doble: ', horadoble, salto, 'El valor del horas doble: ', pagodoble, salto, 'Horas pagadas al triple', pagotriple, salto, 'Y el total a pagar al trabajador', pagototal, salto);

//--------------------------------------------------------------------------------------------------------------------
var problema4 =('4.  Calcular la utilidad que un trabajador recibe en el reparto anual de utilidades si este se le asigna como un porcentaje de su salario mensual que depende de su antigüedad en la empresa de acuerdo con la siguiente tabla:')
document.write(problema4,salto);

//Datos
//  tiempo                        ||  utilidad
//menos de 1 año                  ||  5 % salario
//mas de 1 año menos de 2 años    ||  7 %  
//2 años menos de 5 años          ||  10 %
//5 años y menos de 10 años       ||  15 %
//10 años o mas                   ||  25 %


