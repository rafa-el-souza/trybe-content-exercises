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

// Crie um irmão para elementoOndeVoceEsta .
// Crie um filho para elementoOndeVoceEsta .
// Crie um filho para primeiroFilhoDoFilho .
// A partir desse filho criado, acesse terceiroFilho .

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

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');

let paiDoPai = document.querySelector('#paiDoPai');
paiDoPai.firstElementChild.removeChild(primeiroFilho);
paiDoPai.firstElementChild.firstElementChild.removeChild(segundoEUltimoFilhoDoFilho);
paiDoPai.firstElementChild.firstElementChild.removeChild(novoFilho);
paiDoPai.firstElementChild.removeChild(terceiroFilho);
pai.removeChild(pai.lastElementChild);
pai.removeChild(pai.lastElementChild);
console.log(paiDoPai);