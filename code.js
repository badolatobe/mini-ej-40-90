//41
const nombre = "Braian Emanuel Badolato"
console.log(nombre);

//42
const edad = 33
console.log("Tiene "+edad+" años");

//43
const esEstudiante = true;
if (esEstudiante){
    console.log("Es estudiante");
}else{
    console.log("No es estudiante");
}

//44
const fruta = "banana";
console.log("Su fruta favorita es " +fruta);

//45
const num1= 5542345;
const num2= 4756354;
const suma= num1+num2;
console.log("la resta da "+ (num1-num2));
console.log("la suma da "+ suma);

//46
const tempC = 33;
const f = (tempC*9/5)+32;
console.log("La temp expresada en Fahrenheit es: "+f);

//47
const precioProducto = 55;
const cantidadComprada = 33;
console.log("El costo total de la compra es de: $"+(precioProducto*cantidadComprada));

//48
const radio=30;
const area=3.14*(radio/2*radio/2);
console.log("El area de un circulo es: "+area);

//49
const numA=4;
const numB=77;
console.log(numA>numB);

//50
const cadena1="Hola!";
const cadena2= "Todo bien?";
console.log(cadena1+" "+cadena2);

//51
const edad2=16;
if (edad2>18){
    console.log("Es mayor de edad");
} 
else{
    console.log("No es mayor de edad");
}

//52
const puntuacion=66;
if (puntuacion>=60){
    console.log("Estas aprobado, campeón!");
}
else{
    console.log("Te faltó nota, mi rey!");
}

//53
const diaSemana="Domingo";

switch (diaSemana) {
    case "Lunes":
        console.log("Se trabaja :(")
        break;

    case "Martes":
        console.log("Se trabaja :(")
        break;
    
    case "Miercoles":
        console.log("Se trabaja :(")
        break;

    case "Jueves":
        console.log("Se trabaja :(")
        break;

    case "Viernes":
        console.log("Se trabaja :(")
        break;

    case "Sabado":
        console.log("Solo se entrena")
        break;

    case "Domingo":
        console.log("No se trabaja")
        break;


    default:
        console.log("El día `Osvaldo` no existe")
        break;
}

//54
const numeroA=67;
const numeroB=45;
if (numeroA>numeroB){
    console.log("Numero A es mayo a Numero B");
}
    else{
        console.log("Numero B es mayot que numero A");
    }


//55
const color="Verde";
if (color==="Rojo"){
    console.log("El color es Rojo");
}
else if (color==="Verde"){
    console.log("El color es Verde");
}
else if (color==="Azul"){
        console.log("El color es Azul");
}
else  {
    console.log("No es un color");
}

//56
const calificacion=65;
if (calificacion>=95) {
    console.log("Excelente");
} else if (calificacion>=60 && calificacion<= 94){
    console.log("Aprobado");
}
    else{
        console.log("Reprobado");

    }

//57
const numerox=11;
if (numerox>0){
    console.log("El numero es positivo");
}
    else if (numerox<0){
        console.log("El numero es negativo");
    }
        else{
            console.log("el numero es 0");
        }
    
//58
function esPar(num) {
    return num % 2 === 0;
}
const valor=16;
const resultado=esPar(valor);
console.log(resultado);

//59
const hora=20;
if (hora>=6 && hora<=12){
    console.log("buen dia");
}
else if (hora >12 && hora <20)
    {
    console.log("buenas tardes");        
}
else if (hora >=20 && hora <=24 
    || hora>=0 && hora<6){
    console.log("buenas noches");
}
else {
    console.log(error);
}

//60
const lado1=36;
const lado2=22;
const lado3=32;
if (lado1===lado2&&lado1===lado3&&lado2===lado3){
    console.log("el triangulo es equilátero");
}
else if (lado1===lado2&&lado1!==lado3||
        lado2===lado3&&lado2!==lado1||
        lado3===lado1&&lado3!==lado2)
    {
    console.log("el triangulo es isóceles");
}
else {
    console.log("El triangulo es escaleno");
}

//71
for (var i=1;i<11;i++){
console.log("vuelta nº "+i);
}

//72
var contador=10;
while (contador>=1) {
    console.log("Vuelta del contador Nº "+contador);
    contador--;
}

//73
const frutas=["manzana", "peras", "banana"];
for (const comida of frutas) {
    console.log(comida);
}
    
//74
var contador2=1;
do {
    console.log(contador2);
    contador2++;
} while (contador2<=5);

//75
for (let index = 1; index <=20; index++) {
if (index % 2 === 0) {
    console.log(index+" es par")
} else {
    console.log(index+" es impar");
    }    
}

//76
const arreglo=["hola","mundo","como","va"];
for (var index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
    
    
}

//77
const objeto={
    nombre:"producto x",
    precio:500,
    stock:21,
}

for (i in objeto){
    console.log(`${i}: ${objeto[i]}`);
}

//78
var generado;
while ((generado = Math.floor(Math.random() * 10)) !== 7) {
  console.log(generado);
}

console.log("Se generó el número 7. Fin del bucle.");

//79
const numeroTabla=7;
console.log("La Tabla del 7 es:");
for (let i = 0; i < 11; i++) {
    let multiplicador=i*numeroTabla;
    console.log(multiplicador);
    
}

//80
const numArreglo=[22,55,36,98,74,125,36,98,45,369,54];
let maximo=0;
for (const iterator of numArreglo) {
    if (maximo<iterator){
        maximo=iterator;
    }
}
console.log("El número máximo de numArreglo es: "+maximo);

//81
function saludar() {
console.log("Hola mundo!");    
}

saludar();

//82
function sumar(a,b,s){
    return a+b+s;
}
const resSuma=sumar(16,58,96);
console.log(resSuma);

//83
function esPar1(numx){
    return numx % 2 === 0
}
const nValor=7;
const res=esPar1(nValor);

console.log(res);

//84
const notas=[9,7,8,9,10,7,8];
function calcPromedio(nota){
    let result=0;
    for (const iterator of nota) {
        result+=iterator;
    }
    return result/nota.length

}
console.log("El promedio de las notas es: "+calcPromedio(notas));

//85
//Opción A
const texto="me gustan los arboles verdeS";

function revertirTexto(params) {
    let nuevaCadena="";
    for (let index = params.length-1; index >=0; index--) {
        nuevaCadena += params[index];
    }
    return nuevaCadena;
}
console.log(revertirTexto(texto));

//Opción B
function revertirTexto2(params) {
    var separarCadena=params.split("");
    var invertirArreglo=separarCadena.reverse();
    var unirArreglo=invertirArreglo.join("");
    return unirArreglo;
}

console.log(revertirTexto2(texto));

//86
var contador3=0;
function incrementarContador(cont) {
    contador3++;
}
incrementarContador();
console.log(contador3);

//87
const producto1={
    Nombre: "gaseosa",
    tipo:"2.5L",
    stock: 55,
    Precio: 2500,

};

const producto2={
    Nombre: "jabon",
    tipo:"2.5L",
    stock: 55,
    Precio: 1700,

};
const desc1=0.15;
const desc2=0.35;
function calcularDescuento(producto) {
    let pcd=producto.Precio-(producto.Precio*desc1);
    console.log(`El producto seleccionado es: ${producto.Nombre},
    Su precio es de $${producto.Precio} y su Precio con descuento es de: $${pcd}` );
}

calcularDescuento(producto1);

//88
const numFactorial=5;
function calcularFactorial(params) {
    let facto=1;
   for (let index = 1; index <= params; index++) {
   facto= index*facto;
         console.log(facto);
   }
}

calcularFactorial(numFactorial);

//89
const nombrePropio="Braian";
function saludar(params) {
   console.log(`Hola ${params}! ¿Como estas hoy?`); 
}

saludar(nombrePropio);

//90
const listaFrutas=["banana", "ananá", "kiwi", "uva", "durazno", "frutilla",];

function crearLista(params) {
    let nuevaLista=params.sort();
    //console.log("Las Lista de frutas ordenadas es: " + nuevaLista);
}

console.log(crearLista(listaFrutas));
