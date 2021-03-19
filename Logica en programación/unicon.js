//Constantes formato
var salto = '<br>';

var coordinador = ("Problemas de coordinación")
document.write(coordinador,salto,salto);

//Problema a resolver 

var problema1 = ('1. El centro de vacuna laureles coloca vacunas a los bebes menores de un año y la dosis a aplicar depende del peso y la edad del bebé según la siguiente fórmula dosis vacuna = peso del bebé + 10 / 10 * meses de edad del bebé más ocho')
document.write(problema1,salto);

//Variables 
var peso = 6; 
var meses = 2;

//Constantes 
const diez = 10;
const ocho = 8;

//Operaciones 
var dosis = ((peso + diez) / (diez * meses) + ocho);

//Solucion 
document.write("la dosis que se debe aplican al bebe son = ", dosis, salto,salto);

//Problema a resolver:

var problema2 = ('2. Un empleado trabaja 48 horas en la semana a razón de $15.000 hora. El porcentaje de retención en la fuente es del 12, 5% del salario bruto. Se desea saber cuál es el salario bruto, la retención en la fuente y el salario neto del trabajador')
document.write(problema2,salto);

//Variables 
var valorh = 15000;
var horast = 48;
var retencion;
var salariob;
var salarion;

//Constantes 
const porcentajer = 12.5;

//Operacion 
var salariob = (horast * valorh);
var retencion = ((salariob / 100) * porcentajer);
var salarion = (salariob - retencion );
document.write('El salario bruto= $ ',salariob, salto, 'Retención = ',retencion, salto, ' El salario total es = $', salarion, salto, salto);


var consultor = ('Consultor')
//Problema a resolver:

var problema4 = ('4. En la asignatura tecnología se realizaron 5 evaluaciones. Las evaluaciones tienen una calificación del 1 a 5. La primera evaluación tiene un peso del 15%, la segunda tiene un peso del 30%, la tercera tiene un peso de 25%, la cuarta tiene un peso de 10% y la última tiene un peso del 20%. Realice un algoritmo que determine la calificación final de un estudiante sabiendo que se tiene como datos de entrada la nota (en la escala del 1 a 5) de cada evaluación.')
document.write(problema4,salto);

//variables 
// 5 evaluciones 
// 15%, 30%, 25%, 10%, 20%

var nota1 = 4;
var nota2 = 3;
var nota3 = 2;
var nota4 = 3;
var nota5 = 2;

//Constantes
const vpr1 = 15;
const vpr2 = 30;
const vpr3 = 25;
const vpr4 = 10;
const vpr5 = 20;

//Operacion 
var promedio = ((nota1 * vpr1) + (nota2 * vpr2) + (nota3 * vpr3) + (nota4 * vpr4) + (nota5 * vpr5)) /100;
document.write('Calificación final:', promedio, salto, salto);

//Problema a resolver:
var problema5 = ('5.Una empresa le hace los siguientes descuentos sobre el sueldo base a sus trabajadores: 1% por ley de política habitacional, 4% por Seguro Social, 0,5% por seguro paro forzoso y 5% por caja de ahorro. Realice un algoritmo que determine el monto de cada descuento y el monto total a pagar al trabajador.')
document.write(problema5,salto);

//Variables
var sueldo = 500000;

//Constantes 
const ley = 1;
const seguros = 4;
const segurop = 0.5;
const ahorro = 5;

//Operacion
var montoh = (sueldo * ley) / 100;
var montos = (sueldo * seguros) / 100;
var montop = (sueldo * segurop) / 100;
var montototal = (montoh + montos + montop + sueldo);

document.write('Monto de la politica =', montoh, salto, ' Monto del seguro social =', montos, salto, 'Monto del seguro forzoso =', montop, salto, 'Monto total =', montototal, salto, salto);

//Problema a resolver:
var problema6 = ('6.Campos de Paz vende parcelas a crédito, donde el cliente da una inicial y el resto lo paga en 24 cuotas, pero con un incremento del 20% sobre lo que quedó debiendo. Teniendo como dato de entrada el precio de la parcela determine el monto de cada cuota y el precio final de la parcela.')
document.write(problema6,salto);

var coutai = 400000;
var valorp = 10000000;
var valorcuota ;
var montoc ;
var preciof ;

//constantes

const incremento = 20;
const cuotas = 24;

//operaciones

var valorcuota = (valorp - coutai) / cuotas;
var montoc = (valorcuota * incremento) / 100;
var montoc = Math.floor(montoc);
var preciof = coutai + ((valorcuota + montoc) * cuotas);

//solucion
document.write("El monto de cada parcela es: $",montoc,salto,"El precio final es: $",preciof,salto,salto);

var secretario = ('Secretario')
//Problema a resolver:
var problema7 = ('7. Diseñar el algoritmo correspondiente a un programa que calcule el área y el perímetro de un triángulo rectángulo dada la base y la altura')
document.write(problema7,salto);

//Variables 
var base = 5;
var altura = 3;
var perimetro;
var area


//Operacion
var perimetro = (base + altura) * 2;
var area = (base * altura);

//solucion 
document.write ('El perimetro es=', perimetro, salto, 'El area es =', area, salto, salto);

//Problema a resolver:

var problema8 = ('8. Un banco paga a sus ahorrista un interés del 1.5% sobre el monto ahorrado. Teniendo como dato de entrada el saldo inicial del ahorrista determine el saldo final.')
document.write(problema8,salto);

//Variables 
var saldo = 15000;

//Constante 
const interes = 1.5;

//Operacion
var sumainteres = (saldo * interes) / 100;
var saldof = sumainteres + saldo;

//Solucion
document.write('Saldo inicial de la cuenta= $', saldo, salto, 'Y el saldo final de la cuenta= $', saldof, salto, salto);

//Problema a resolver:
var problema9 = ('9. Calcular el volumen de un cono = 1/3  r2h')
document.write(problema9,salto);

//Variables 
var radio = 5;
var altura = 3;
var volumen;
var pi = 3.1416

//Constante
const numero = 1/3;
const cuadrado = 2;

//Operacion 
var volumen = (1/3 * 3.1416 * (radio * radio) * altura);
document.write( 'radio es =', radio, salto,'altura es =', altura,salto, 'El volumen del cono es =', volumen, salto, salto);

//Problema a resolver:
var tesorero = ('Tesorero')
var problema10 = ('10. Una empresa paga a sus empleados además del sueldo base una bonificación especial de 10 %. por cada hijo. Realice un algoritmo que determine el monto de la bonificación y el monto total a pagar al trabajador.')
document.write(problema10,salto);

//Variables 

var hijosp = 2;
var salariob = 490000;
var montot;

//Constante 
const bonificación = 10;

//Operacion 
var montob = ((salariob * bonificación) / 100) * hijosp;
var totalpagar = montob + salariob;

//Solucion
document.write('El monto de bonificacion es: $',montob, salto, 'El pago total con el monto de bonficacion es: $', totalpagar, salto, salto);

var problema11 = ('11. Una institución educativa le paga a sus profesores $20.000 por hora y le hace un descuento del 5% por concepto de caja ahorro. Determine el monto del descuento y el monto total a pagar al profesor.')
document.write(problema11,salto);

//Variables
var horas = 5;
var pagof;
var montod;

//Constantes
const pagohora = 20000;
const descuento = 5;

//Operacion 
var salarioahorro = horas * pagohora;
var montod = (salarioahorro * descuento) / 100;
var totalpagar = salarioahorro - montod;

//Solucion
document.write('Salario de ahorro del profesor: $', salarioahorro, salto, ' Monto del descuento es: $', montod, salto, 'El total a pagar es: $', totalpagar, salto, salto);

//Problema a resolver:
var problema12 = ('12. Una inmobiliaria vende terrenos a $ 550.000 por el metro cuadrado. El cliente debe dar una inicial y el resto lo paga en 12 cuotas. Determine el monto de cada cuota.')
document.write(problema12,salto);

//Variables
var pagoi;
var montocouta;
var metros2 = 15;
var Couta

//Constanres
const coutas = 12;
const valormetros2 = 550000;

//Operacion 
var valorterreno = ((metros2 * metros2) * valormetros2);
var couta = (valorterreno / coutas);
var couta = Math.floor(couta);

//Solucion 
document.write('El valor del terreno es: $', valorterreno, salto, 'El monto de la couta del terreno es: $', couta, salto, salto);
