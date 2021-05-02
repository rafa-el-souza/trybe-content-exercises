console.log("JS CONNECTED");

// Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai .
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai 

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

let pai = document.querySelector('#elementoOndeVoceEsta').parentNode
console.log(pai);
pai.style.color = "aquamarine";
pai.style.fontSize = "120px";

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
console.log(primeiroFilhoDoFilho);
primeiroFilhoDoFilho.innerHTML = 'Peligro!';

let primeiroFilho = document.querySelector('#pai').firstElementChild;
console.log(primeiroFilho);

primeiroFilho = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
console.log(primeiroFilho);

let textoAtencao = document.querySelector('#elementoOndeVoceEsta').nextSibling;
console.log(textoAtencao);

let terceiroFilho = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
console.log(terceiroFilho);

terceiroFilho = document.querySelector('#pai').children[2];
console.log(terceiroFilho);

let novoIrmaoDoMeio = document.createElement('div');
novoIrmaoDoMeio.innerHTML = 'Created dynamically';
pai.appendChild(novoIrmaoDoMeio);

let novoFilho = document.createElement('div');
novoFilho.innerHTML = 'Also Created dynamically';
elementoOndeVoceEsta.appendChild(novoFilho);

let bisneto = document.createElement('div');
bisneto.innerHTML = 'Dynamically created';
bisneto.id = 'bisneto';
console.log(bisneto);
primeiroFilhoDoFilho.appendChild(bisneto);

terceiroFilho = document.querySelector('#bisneto').parentNode.parentNode.parentNode.children[2];;
console.log(terceiroFilho);