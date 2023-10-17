const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
const painel = document.querySelector('.paineis');
let imagemAtual = 0;
let loopInterval;

// Intervalo de tempo em milissegundos para avançar automaticamente (por exemplo, a cada 5 segundos).
const intervalo = 4000;

// Função para avançar a imagem automaticamente.
function avancarImagemAutomaticamente() {
    imagemAtual = (imagemAtual + 1) % imagensPainel.length;
    exibirImagemAtual();
}

// Função para iniciar o loop automático.
function iniciarLoop() {
    loopInterval = setInterval(avancarImagemAutomaticamente, intervalo);
}

// Função para parar o loop automático.
function pararLoop() {
    clearInterval(loopInterval);
}

// Adicionar um ouvinte de eventos para o botão "Avançar".
setaAvancar.addEventListener('click', function () {
    avancarImagemAutomaticamente();
});

// Adicionar um ouvinte de eventos para o botão "Voltar".
setaVoltar.addEventListener('click', function () {
    imagemAtual = (imagemAtual - 1 + imagensPainel.length) % imagensPainel.length;
    exibirImagemAtual();
});

// Função para exibir a imagem atual.
function exibirImagemAtual() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
    imagensPainel[imagemAtual].classList.add('mostrar');
}

// Iniciar o loop automático.
iniciarLoop();

// Adicionar um ouvinte de eventos para o mouse entrar no painel.
painel.addEventListener('mouseenter', function () {
    pararLoop();
});

// Adicionar um ouvinte de eventos para o mouse sair do painel.
painel.addEventListener('mouseleave', function () {
    iniciarLoop();
});
