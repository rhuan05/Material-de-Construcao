let header = document.querySelector('header');

if (window.screen.width <= 425){
    header.style.backgroundImage = 'url(./assets/backgroundHeader/background_header425.png)';
} else if (window.screen.width <= 768){
    header.style.backgroundImage = 'url(./assets/backgroundHeader/background_header768.png)';
} else {
    header.style.backgroundImage = 'url(./assets/backgroundHeader/background_header.png)';
}

let menuCelular = document.getElementById('menuCelular');

menuCelular.addEventListener('click', () => {
    header.classList.toggle('ativouMenu');
});

// Colocar produtos

let modeloProduto = document.getElementById('modeloNovoProduto').childNodes[1];

produtosEletrica.map((e, i) => {
    let eletricaFileira = document.querySelectorAll('#eletrica .fileira')[0];
    let novoProduto = modeloProduto.cloneNode(true);
    novoProduto.childNodes[1].src = e.img;
    novoProduto.childNodes[3].innerHTML = e.nome;
    novoProduto.childNodes[5].innerHTML = e.preco;
    eletricaFileira.appendChild(novoProduto);
});

produtosHidaulica.map((e, i) => {
    let produtosHidaulica = document.querySelectorAll('#hidraulica .fileira')[0];
    let novoProduto = modeloProduto.cloneNode(true);
    novoProduto.childNodes[1].src = e.img;
    novoProduto.childNodes[3].innerHTML = e.nome;
    novoProduto.childNodes[5].innerHTML = e.preco;
    produtosHidaulica.appendChild(novoProduto);
});

if(window.screen.width <= 375){
    let produtosEletrica = document.querySelectorAll('#eletrica .fileira--elemento');
    document.querySelector('#eletrica .fileira').style.width = `${produtosEletrica.length * 200}px`;

    let produtosHidaulica = document.querySelectorAll('#hidraulica .fileira--elemento');
    document.querySelector('#hidraulica .fileira').style.width = `${produtosHidaulica.length * 200}px`;
}

// Ver produto

document.addEventListener('click', (e) => {
    let elementoClicado = e.target;

    if(elementoClicado.classList[0] === 'imagemProduto' || elementoClicado.classList[0] === 'nomeProduto'){
        let modeloProdutoEscolhido = document.getElementById('modeloProdutoEscolhido');
        modeloProdutoEscolhido.style.display = 'flex';

        let produtoEscolhido = elementoClicado.parentNode.childNodes;
        modeloProdutoEscolhido.childNodes[1].childNodes[1].src = produtoEscolhido[1].src;
        modeloProdutoEscolhido.childNodes[3].childNodes[3].innerHTML = produtoEscolhido[3].innerText;
        modeloProdutoEscolhido.childNodes[3].childNodes[5].innerHTML = produtoEscolhido[5].innerText;
    }
});

document.getElementById('fecharEscolhido').addEventListener('click', () => document.getElementById('modeloProdutoEscolhido').style.display = 'none')