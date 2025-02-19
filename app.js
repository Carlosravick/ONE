let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('Adicione nomes primeiro!');
        return;
    }

    
    const listaEmbaralhada = [...amigos];
    for (let i = listaEmbaralhada.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listaEmbaralhada[i], listaEmbaralhada[j]] = [listaEmbaralhada[j], listaEmbaralhada[i]];
    }
    amigos = []
    atualizarListaAmigos()
    const nomeSorteado = listaEmbaralhada[0];
    exibirResultado(nomeSorteado);
}

function exibirResultado(nome) {
    const lista = document.getElementById('resultado');
    lista.innerHTML = `
        <li class="result-item">
            <span class="nome-sorteado">🎉 Sorteado:</span>
            <span class="nome">${nome}</span>
        </li>
    `;
}