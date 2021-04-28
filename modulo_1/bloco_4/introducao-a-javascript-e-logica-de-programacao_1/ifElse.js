function generateScore(min, max) {
    let score = Math.ceil(Math.random() * (max - min) + min) // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_n%C3%BAmero_aleat%C3%B3rio_entre_dois_valores
    console.log(`Sua nota foi ${score}`);
    return score;
}
function scoreToConcept(score) {
    if (score >= 80) {
        console.log("Parabéns, você foi aprovada(o)!")
    } else if (score < 80 && score >= 60) {
        console.log("Você está na nossa lista de espera");
    } else {
        console.log("Você foi reprovada(o)");
    }
}

scoreToConcept(generateScore(1, 100));