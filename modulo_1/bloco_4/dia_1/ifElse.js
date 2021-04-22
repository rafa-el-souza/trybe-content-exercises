let nota = Math.random() * (100 - 1) + 1; //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_n%C3%BAmero_aleat%C3%B3rio_entre_dois_valores

console.log(nota);

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Você foi reprovada(o)");
}