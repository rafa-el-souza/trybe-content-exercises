function printStatus(status) {
    switch (status) {
        case "aprovada":
            console.log("Parabéns, você foi aprovada(o)!");
            break;
        case "reprovada":
            console.log("Você foi reprovada(o)");
            break;
        case "lista":
            console.log("Você está na nossa lista de espera");
            break;
        default:
            console.log("não se aplica");
    }
}
function generateScore(min, max) {
    let score = Math.ceil(Math.random() * (max - min) + min) // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#gerando_um_n%C3%BAmero_aleat%C3%B3rio_entre_dois_valores
    console.log(`Sua nota foi ${score}`);
    return score;
}
function scoreToConcept(score) {
    if (score >= 80) {
        let status = "aprovada";
        return status;
    } else if (score < 80 && score >= 60) {
        let status = "lista";
        return status;
    } else {
        let status = "reprovada";
        return status;
    }
}

printStatus(scoreToConcept(generateScore(1, 100)));