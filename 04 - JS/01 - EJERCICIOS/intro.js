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
console.log(explorer.proper)


