console.log("\n ****************VARIABLES**************");
var numero1;
numero1 = 4;
var numero2;
numero2 = 6;

console.log("Número 1 = "+numero1);
console.log("Número 2 = "+numero2);

console.log("\n ****************CADENAS**************");
var frase1;
frase1 = "Ejemplo Comillas Dobles";
var frase2;
frase2 = 'Ejemplo Comillas Simples';
var frase3;
frase3 = `Ejemplo Comillas ${frase1} Invertidas`;

console.log(frase1 +"\n"+ frase2 +"\n" + frase3);


console.log("\n ****************CONDICIONALES**************");
console.log(numero1 > numero2);

console.log("\n ****************OPERADOR LOGICO AND**************");
console.log(true && false);

console.log("\n ****************OPERADOR LOGICO OR**************");
console.log(true || false);

console.log("\n ****************ARREGLOS**************");
let numlist = [2,3,5,7,11,234];
console.log(numlist[0]);

numlist.push(16);
numlist.push(939);

console.log(numlist);
console.log(numlist.length);

let palabralist = ["explorer","missioncommander","launchex","innovaccion"];
console.log(palabralist);
console.log(palabralist.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("\n ****************OBJETOS**************");

let explorer = {
    nombre : "Nombre del Explorer",
    email: "email@innovaccion.mx",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot","Pastelería","Taquería","Vacunación"],
    proper: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}

console.log(explorer)
console.log(explorer.email)
console.log(explorer.proper.escolar)


/* FLUJO CONDICIONAL */
console.log("\n ****************FLUJO CONDICIONAL**************");
let number1 = 4;
let number2 = 2;
console.log("\n***************** if/else***********************");
if(number1 > number2 && number2 > 5){
    console.log("El numero 1 es mayor que el numero 2");
}
else if(number1==number2 || number1 < 3){
    console.log("Los numeros son iguales");
}
else{
    console.log("El numero 2 es mayor que el numero 1");
}

/* Ciclo condicional */
console.log("\n ****************WHILE**************");
let numberWhile = 0;
while(numberWhile <= 12){
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log("El resultado del While es = "+numberWhile);

/* Ciclo Conficional de una iteración mínimo */
console.log("\n ****************DO WHILE**************");
let numberDoWhile = 20;
do{
    numberDoWhile = numberDoWhile + 2;
    console.log(numberDoWhile);
}while(numberDoWhile < 20);
console.log("El resultado del do while es = "+numberDoWhile);

/** Ciclo for con iteacion controlada*/
console.log("\n ****************FOR**************");
for (let numeroFor = 0; numeroFor <= 12; numeroFor = numeroFor + 2){
    console.log(numeroFor);
}

/** Opciones para evitar anidar condicionales */
console.log("\n ****************SWITCH**************");
switch(prompt("¿Cómo está el clima?")){
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte bloqueador");
        break;
    case "nublado":
        console.log("Tapate bien");
        break;
    default:
        console.log("No sé cómo está el clima");
        break;
}
console.log("Aquí salimos del switch");
