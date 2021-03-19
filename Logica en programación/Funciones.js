// Constantes del formato:
var salto = '<br>';

// Problema a resolver:
var problema1 = '1. Haga un algoritmo que calcule e imprima el área de un circulo =>Área = π r 2';
document.write(problema1,salto);

// Variables a ingresar: 
var radio = 20; // Variable

// Constantes:
var pi = 3.1416;  

// Operaciones:
var area = (pi*(radio*radio));

// Resultado : 
document.write('Área = ',area, salto, salto);

// ---------------------------------------------------------------------------------------------------

// Problema a resolver:
var problema2 = '2. Haga un algoritmo que calcule e imprima el área de un triángulo => Área =(b*h) / 2';
document.write(problema2,salto);

//Variables a ingresar: 
var base = 80;
var altura =60; // Variable

// Operaciones:
var area = (base*altura/2);

// Resultado:
document.write('Área = ', area, salto, salto);

//------------------------------------------------------------------------------------------------------

//Problema a resolver:

var problema3 = '3.Diseñar un algoritmo a través del cual se pueda calcular la siguiente expresión'
document.write(problema3,salto);

//Variable a ingresar:

//Variables
var y1 = 5
var y2 = 2
var x1 = 6
var x2 = 3

//Operaciones
var z = ((y1-y2) / (x1-x2));

//Resultado
document.write('z = ',z, salto, salto);

//----------------------------------------------------------------------------------------------------------

//Problema a resolver:

var problema4 = '4.Diseñe un algoritmo para la conversión de una medida de metros a pies y pulgadas, donde se sabe que un 1 metro es igual a 3.28 pies y 1 pie es igual a 12 pulgadas'
document.write(problema4,salto);

//Variables a ingresar:

//Variables 
var metros = 4;

//Constantes
var metros = 3.28;
var pulgadas = 12;

//Operaciones
var pies = 4*3.28;
var pulgadas = pies*12;

//Resultado
document.write("el número en un metro en pies =", metros, salto, "el número en pies es =", pies, salto, "el numero de pulgadas es =", pulgadas, salto, salto);

//----------------------------------------------------------------------------------------------------------

//Problema a resolver:

var problema5 = '5.Elabore un algoritmo que convierta una temperatura dada en centigrados a fahrenheit. Tener en cuenta que la siguiente fórmula; °F=9/5 °C + 32'
document.write(problema5,salto);

//Variables a ingresar:

//Variables

var centigrados = 20;

//operaciones 

var fahrenheit = (9/5*20 + 32)

//Resultado
document.write('Los grados centigrados son =', centigrados, salto, 'Los grados fahrenheit son =', fahrenheit, salto, salto);

//-----------------------------------------------------------------------------------------------------------

//Problema resolver:

var problema6 = '6. Hacer un algoritmo para calcular el IVA de un valor digitado por el teclado, mostrar este resultado y el de sumar el IVA al valor digitado'
document.write(problema6,salto);

//Variables a ingresar:

//Variables
var valorI = 4000;

//constante
var VIVA = 0.19;

//Operaciones
var IVA = (4000*0.19);
var VIVA = (4000+760);

//Resultado
document.write('Valor ingresado es =', valorI, salto, 'La suma del IVA con el valor digitado =', VIVA, salto, salto);

//---------------------------------------------------------------------------------------------------------

//Problema a resolver:

var problema7 = '7. Elabore un algoritmo para mostrar la cantidad de miles, centenas, decenas, unidades de un número entero digitado. Ejemplo: sea 1483 el número entero digitado el algoritmo debe mostrar en pantalla'
document.write(problema7,salto);

//Variables a ingresar:

//Variables
var cifra = 6534;

//Constantes

var miles;
var centenas;
var decenas;
var unidades;

//Operaciones

var miles = (cifra/1000);
var miles = Math.floor (miles);
var miles = miles;
var centenas = (cifra/100);
var centenas = Math.floor (centenas);
var centenas = centenas - (miles*10);
var centenas = centenas;
var decenas = (cifra/10);
var decenas = Math.floor (decenas);
var decenas = decenas - ((miles*100) + (centenas*10));
var decenas = decenas;
var unidades = cifra - ((miles*1000) + (centenas*100) + (decenas*10));

//Resultado
document.write('El resultado de miles es = ', miles, salto, 'El resultado de centenas es = ', centenas, salto, 'El resultado de decenas es = ',decenas, salto, 'Las unidades de número digitado = ', unidades, salto, salto);

//---------------------------------------------------------------------------------------------------------

//Problema a resolver:

var problema8 = '8. Elaborar un algoritmo que permita leer el nombre de un empleado, el número de horas extras diurnas, horas extras nocturnas y el valor básico hora. Se debe calcular el valor a pagar en una quincena teniendo en cuenta que el recargo de la hora extra diurna es del 25% y el de la nocturna es del 75%.'
document.write(problema8,salto);

//Variables a ingresar:

//Variables
var xd = 6;
var xn = 3;
var pbh = 10000;

//Constantes
var usuario = 'David';
var Rxd = 1.25;
var Rxn = 1.70;
var ft = 15;

//Operaciones

var vdt = (7000 * 15);
var vrxd = (7000 * 1.25);
var vrxn = (7000 * 1.70);
var vtp = (vdt +((vrxd*6)+(vrxn*2)));

//Resultado
document.write('Nombre del empreado = ', usuario, salto, 'Horas extras diurnas =', xd, salto, 'Horas extras nocturnas = ', xn, salto, 'El valor hora básico = ', pbh, salto, 'El resultado de la recarga en jornada diurna = ',vrxd, salto, 'El resultado de la recarga en jornada nocturna = ',vrxn, salto, 'El resultado pagado en quincena =', vtp, salto, salto);

//----------------------------------------------------------------------------------------------------------

//Problema a resolver:

var problema10 = '10. Elaborar un algoritmo que permita leer el nombre y valor de venta de 3 productos de una tienda de insumos agrícolas. Sobre el 1er producto se hace un descuento del 2.5%, sobre el 2º un descuento del 1.8% y sobre el 3ro el 1.3%. Se debe calcular el valor final que debe de pagar el cliente por la mercancía comprada'
document.write(problema10,salto);

//Variables a ingresar:

//Variables
var p1 = 'Mouse';
var v1 = 25000;
var p2 = 'Control';
var v2 = 4000;
var p3 = 'Audifonos';
var v3 = 10000;

//Constantes 
var descuento1 = 0.025;
var descuento2 = 0.018;
var descuento3 = 0.013;

//Operaciones 

var v1 = v1 - (v1 * 0.025);
var v2 = v2 - (v2 * 0.018);
var v3 = v3 - (v3 * 0.013);

// Resultado 

document.write('Nombre del 1 producto = ', p1, salto, 'valor del producto = ', v1, salto, 'Nombre del 2 producto = ', p2, salto, 'Valor del producto =', v2, salto, 'Nombre del 3 producto = ', p3, salto,'Valor del producto = ', v3, salto, salto);

//--------------------------------------------------------------------------------------------------------

//Problema resolver:

var problema11 = '11. En la prueba final de atletismo de los 50 metros planos en los juegos olímpicos, se obtuvo el tiempo utilizado por cada uno de los 8 atletas participantes. Se debe imprimir la velocidad promedio (Metros/Segundos) en que los atletas corrieron'
document.write(problema11,salto);

//Variables a ingresar:

//Variables
var v1 = 5;
var V2 = 5.79;
var v3 = 5.43;
var v4 = 4.99;
var v5 = 5.36;
var v6 = 5.1;
var v7 = 5.22;
var v8 = 5.65;

//Constantes
var m = 50;

//Operaciones

var Vatleta = ((m/v1) + (m/v2) + (m/v3) + (m/v4) + (m/v5) + (m/v6) + (m/v7) + (m/v8));

//Resultado
document.write('Velocidad promedio de los ateltas =',Vatleta, salto,salto);

//-----------------------------------------------------------------------------------------------------

//Problema a resolver:

var problema12 = '12. Elaborar un algoritmo que permita intercambiar el valor de dos variables. Ejemplo: Si la variable A=5 y la B=8, luego del proceso debe quedar así: A=8 y B=5.'
document.write(problema12,salto)

//Variables a ingresar:

//variables

var A = 8 ;
var B = 5 ;

//Operaciones 
var ValorA = B;
var ValorB = A;

//Resultado
document.write('El valor de A = ', B, salto, 'El valor de B = ', A ,salto,salto);

//--------------------------------------------------------------------------------------------------

//Problema a resolver
var problema13 = '13.  Se debe leer una cantidad de 6 dígitos que debe ser múltiplo de 1.000 y que representa el valor que va a retirar una persona de un cajero electrónico. Se debe de imprimir cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000 y 1.000 debe entregar dicha máquina. Ejemplo: Se desea retirar 238.000. El cajero debería entregar 4 billetes de 50.000, 1 billete de 20.000, 1 billete de 10.000, 1 billete de 5.000, 1 billete de 2.000 y 1 billete de 1.000.'
document.write(problema13,salto);

//Variables a ingresar:

//Variables

//--------------------------------------------------------------------------------------------------------

