//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let nomes = [];
let lista = document.getElementById('listaAmigos');


function limparLi(){
    lista.innerHTML = '';
}

function limparCampo(){
    let valorinput = document.querySelector('input');
    valorinput.value = '';
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if(nome === ""){
        alert("Coloque um nome valido")
    } else {
        nomes.push(nome);
        console.log(nomes);
        
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
        limparCampo();
    }
}

function sortearAmigo(){
    limparLi();
    let nomeQuant = nomes.length;
    let nomeSort = Math.floor(Math.random() * nomeQuant);
    let nomeAleatorio = nomes[nomeSort];
    
    let ul = document.getElementById('resultado');
    let li = document.createElement("li");
    li.textContent = `O amigo sorteado é: ${nomeAleatorio}`;
    ul.appendChild(li);

}