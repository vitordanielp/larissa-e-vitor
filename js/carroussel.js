const carroussel = document.querySelector('#carroussel');
const imgCarroussel = document.querySelector('#imagem-carroussel');
const btnEsquerdo = document.querySelector('#btn-esquerdo');
const btnDireito = document.querySelector('#btn-direito');


const imagens = ['capa'];
let indexAtual = 0;
const src = '../src/'

function rolarCarroussel(direcao) {
    direcao == -1 ? indexAtual -- : indexAtual ++;
    if(indexAtual > imagens.length) {
        indexAtual = 0;
    }
    imgCarroussel.src = src + imagens[indexAtual] + '.jpeg';
}

imgCarroussel.src = src + imagens[indexAtual] + '.jpeg';