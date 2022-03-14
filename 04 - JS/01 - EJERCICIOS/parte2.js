const cuadrado = function(x){
    return x * x;
}
let numero = 4;
console.log(cuadrado(numero));

const ruido = function(){
    console.log("KATAPLUM");
}
ruido();

const exponencial =  function(base,exponente){
    let resultado = 1;
    for(let i=0;i<exponente;i++){
        resultado*=base;
    }
    return resultado;
}

console.log(exponencial(2,10));

console.log(sumar(2,2));
function sumar(x,y){
    return x + y;
}

const restar = (a,b) => {
    return a - b;
}
console.log(restar(4,2));

function saludar(quien){
    console.log("Hola "+ quien);
}
saludar("Jaime");
console.log("Bye");

/**Excepciones */
function promptDirection(question){    
    let result = prompt(question);
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look(){
    if(promptDirection("Which way?") == "L"){
        return "a house";
    }else{
        return "twoo angry bears";
    }
}

try {
    console.log("Look " + look());
} catch (error) {
    console.log("Hubo un error : " + error);
}