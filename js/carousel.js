const carousel = document.querySelector('#carousel');
const imgcarousel = document.querySelector('#imagem-carousel');
const btnEsquerdo = document.querySelector('#btn-esquerdo');
const btnDireito = document.querySelector('#btn-direito');


const imagens = ['173', '168', '156', '149', '147', '145', '139', '135',
    '134', '130', '127', '126', '122', '121', '120', '111', '108', '102',
    '98', '97', '94', '92', '91', '86', '84', '81', '80', '74', '64', '62',
    '61', '60', '58', '57', '55', '54', '52', '50', '43', '42', '40', '38',
    '36', '34', '28', '27', '26', '24', '20', '18', '17', '15', '13', '8', '4', '1'].reverse();
let indexAtual = 0;
const src = '../src/carousel/l&v-';

function rolarcarousel(direcao) {
    direcao == -1 ? indexAtual-- : indexAtual++;
    if (indexAtual >= imagens.length) {
        indexAtual = 0;
    }
    else if (indexAtual < 0) {
        indexAtual = imagens.length - 1;
    }
    imgcarousel.src = src + imagens[indexAtual] + '.jpg';
}

btnDireito.addEventListener('click', () => {
    rolarcarousel(1);
});

btnEsquerdo.addEventListener('click', () => {
    rolarcarousel(-1);
});

imgcarousel.src = src + imagens[indexAtual] + '.jpg';