document.addEventListener('DOMContentLoaded', function () {
    
    const LerConteudo = seletor => {
        return document.querySelector(seletor).value;
    }

    const CriarElem = NomeTag => {
        const novoElem = document.createElement(NomeTag);
        const lista = document.querySelector("#lista-tarefas");
        const textoTarefa = LerConteudo("#tarefa");

        // Adiciona o texto da tarefa ao novo elemento
        novoElem.textContent = textoTarefa;

        // Cria botão de exclusão
        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", function() {
            novoElem.remove(); // Remove o elemento li
        });

        // Cria botão de "Não concluído"
        const botaoNaoConcluido = document.createElement("button");
        botaoNaoConcluido.textContent = "Não concluído";
        botaoNaoConcluido.addEventListener("click", function() {
            if (botaoNaoConcluido.textContent === "Não concluído") {
                botaoNaoConcluido.textContent = "Concluído";
                novoElem.style.color = "green"
            } else {
                botaoNaoConcluido.textContent = "Não concluído";
                novoElem.style.color = "red"
            }
        });

        // Adiciona os botões ao novo elemento
        novoElem.appendChild(botaoNaoConcluido);
        novoElem.appendChild(botaoExcluir);

        // Adiciona o novo elemento à lista de tarefas
        lista.appendChild(novoElem);
    }

    const Adicionar = document.querySelector("#adicionar");
    Adicionar.addEventListener("click", function(){
        CriarElem("li");
    });

});
