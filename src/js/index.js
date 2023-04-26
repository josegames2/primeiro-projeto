const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoescarrossel.forEach ((botao, indece) => {
    botao.addEventListener('click', () => {
        const botoescarrossel = document.querySelector('.selecionado');
        botoescarrossel.classList.remove('selecionado');
        botao.classList.add('selecionado');

        const imagemativa = document.querySelector('.ativa');
        imagemativa.classList.remove('ativa');
        
        imagens[indece].classList.add('ativa');
    })
})
