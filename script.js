function mudar(){
    document.querySelector(".a").innerHTML += " Adicionado por query";
}

function add(){
    document.getElementById("getElById").innerHTML += " Adicionado por getElement";
}

function getElByClass(){
    let elementsByClass = document.getElementsByClassName("algo");
    console.log(elementsByClass);
    for(let i=0; i<elementsByClass.length; i++){
        console.log(elementsByClass[i]);
    }
}

function selecAll(){
    let selectorAll = document.querySelectorAll(".algo");
    console.log(selectorAll);
    selectorAll.pop();
    // const selectorArray = [...document.querySelectorAll(".algo")];
    // console.log(selectorArray);
    // selectorArray.pop();
    // console.log(selectorArray);   
}

function recarregar(){
    window.location.reload();
}



function innerSomething(){
    let text = document.getElementById("myP").innerText;
    console.log(text);

    text = document.getElementById("myP").innerHTML;
    console.log(text);

    text = document.getElementById("myP").textContent;
    console.log(text);
}




function criaElemento(){
    const novoElemento = document.createElement("div");
    novoElemento.innerText = "texto do novoElemento";
    document.body.appendChild(novoElemento);
    // const divExistente = document.getElementById("myP");
    // document.body.insertBefore(novoElemento, divExistente);
}