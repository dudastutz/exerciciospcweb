const palavras = ["javascript", "html", "css", "programacao", "computador", "xablau"];

const LerConteudo = seletor => {
    return document.querySelector(seletor).value;
}

const sortearPalavra = palavras => {
    const indice = Math.floor(Math.random() * palavras.length);
    return palavras[indice];
};

let palavraOculta = sortearPalavra(palavras);

const tamanhoPalavra = palavraOculta => {
    let tracejado = '';
    for (let i = 0; i < palavraOculta.length; i++) {
        tracejado = tracejado + ' _';
    }
    return tracejado;
};

let palavraTracada = tamanhoPalavra(palavraOculta);

const tracejado = document.querySelector("#palavra-oculta");
tracejado.textContent = palavraTracada;

let chancesRestantes = 6;
const botaoAdivinhar = document.querySelector("#adivinhar");

const atualizarPalavraTracada = (letra, palavraOculta, palavraTracada, chancesRestantes) => {
    let novaPalavraTracada = '';
    let novaChancesRestantes = chancesRestantes;
    let letraCorreta = false;
    for (let i = 0; i < palavraOculta.length; i++) {
        if (palavraOculta[i] === letra) {
            novaPalavraTracada += letra + ' ';
            letraCorreta = true;
        } else {
            novaPalavraTracada += palavraTracada[i * 2] + ' ';
        }
    }

    if (!letraCorreta && novaChancesRestantes > 0) {
        novaChancesRestantes--;
        LetrasErradas.push(letra)
        letrasErradas.textContent = `Letras erradas: ${LetrasErradas}`
        console.log(letrasErradas)
    }

    return { novaPalavraTracada, novaChancesRestantes };
};

let LetrasErradas = []
const letrasErradas = document.querySelector("#letras-erradas")

botaoAdivinhar.addEventListener('click', function(){
    const letra = LerConteudo("#letra").toLowerCase();
    let resultado = atualizarPalavraTracada(letra, palavraOculta, palavraTracada, chancesRestantes);
     if (letra.length !== 1 || !/^[a-zA-Z]+$/.test(letra)){ 
        alert("Por favor, insira uma letra válida."); 
        return;}
    palavraTracada = resultado.novaPalavraTracada;
    chancesRestantes = resultado.novaChancesRestantes;
    tracejado.textContent = palavraTracada;
    document.querySelector("#tentativas").textContent = `Tentativas restantes: ${chancesRestantes}`; // Atualiza o elemento com id "tentativas"
    console.log(palavraTracada);
    console.log(chancesRestantes);

    if (palavraTracada.replace(/ /g, '') === palavraOculta) {
        tracejado.textContent = "Você venceu!";
    }

    if (chancesRestantes === 0 && palavraTracada.replace(/ /g, '') !== palavraOculta) {
        tracejado.textContent = "Você perdeu!";
        
    }

    
});











