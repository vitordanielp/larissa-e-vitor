let segundos = 60;

const contadorSegundos = document.querySelector("#contador-segundos");
function atualizaTempo(valor) {
    contadorSegundos.textContent = valor;
    segundos -=1;
}


setInterval(() => {
    if (segundos >= 0) {
        atualizaTempo(segundos);
    }
    else {
        segundos = 60;
        atualizaTempo(segundos);
    }
}, 1000);
