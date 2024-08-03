const dataCasamento = '2024-09-28T16:00:00';
const contadorDias = document.querySelector("#contador-dias");
const contadorHoras = document.querySelector("#contador-horas");
const contadorMinutos = document.querySelector("#contador-minutos");
const contadorSegundos = document.querySelector("#contador-segundos");

function updateCountdown() {
    const targetDate = new Date(dataCasamento);
    const now = new Date();
    const timeDiff = targetDate - now;

    const diasRestantes = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const horasRestantes = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosRestantes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const segundosRestantes = Math.floor((timeDiff % (1000 * 60)) / 1000);

    contadorDias.textContent = diasRestantes;
    contadorHoras.textContent = horasRestantes;
    contadorMinutos.textContent = minutosRestantes;
    contadorSegundos.textContent = segundosRestantes;

}

setInterval(updateCountdown, 1000);
updateCountdown();
