const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        if(res.status!="200"){
            console.log(res);
            cambia("./assets/img/sad-pikachu.gif");
        }else{
        console.log(res);
        return res.json();
        }
    }).then((data)=>{
        console.log(data);
        let pokeimage = data.sprites.front_default;
        console.log(pokeimage);
        cambia(pokeimage);
        let aux = new Array(6); 
        for(let n=0;n<=5;n++){
            aux[n]=data.stats[n].base_stat;
        }
        console.log(aux);
        
        let peso = data.weight;
        console.log(peso);
        let experiencia = data.base_experience;
        let tipo = data.types[0].type.name;
        let nomp = data.name.toUpperCase();
        console.log(nomp);
        cambiastats(aux,peso,experiencia,tipo,nomp);
    })
}

//fetchPokemon();

const cambia = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const cambiastats = (aux,peso,experiencia,tipo,nomp) => {
    const a0 = document.getElementById("a0");
    a0.innerHTML = aux[0];
    const a1 = document.getElementById("a1");
    a1.innerHTML = aux[1];
    const a2 = document.getElementById("a2");
    a2.innerHTML = aux[2];
    const a3 = document.getElementById("a3");
    a3.innerHTML = aux[3];
    const a4 = document.getElementById("a4");
    a4.innerHTML = aux[4];
    const a5 = document.getElementById("a5");
    a5.innerHTML = aux[5];
    const pe = document.getElementById("peso");
    pe.innerHTML = peso + " KG";
    const ex = document.getElementById("experiencia");
    ex.innerHTML = "Exp : " + experiencia ;
    const ti = document.getElementById("tipo");
    ti.innerHTML = tipo ;
    const nompk = document.getElementById("nomp");
    nompk.innerHTML = nomp ;
}

//cambia("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");

const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("HOLA "+pokeInput);
    fetchPokemon(pokeInput);
}