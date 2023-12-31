var items = [];

document.querySelector('input[type=submit]').addEventListener('click', () => {
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;

    listaProdutos.innerHTML = "";

    items.forEach(function (val) {
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML += `<div class="lista-produtos">
            <div class="lista-produto-single">
                <h3>${val.nome}</h3>
                <span class="price-produto">R$ ${val.valor}</span>
            </div>
        </div>`;
    });

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = ' Valor Total R$ ' + soma;
});

document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "Valor Total R$ 00,00";
});
