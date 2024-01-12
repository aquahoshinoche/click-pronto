// Número total de cliques
let clicks = 0;

// Adicionar evento de clique ao círculo
document.getElementById("circulo").addEventListener("click", () => {
    // Adicionar clique
    clicks++;
    // Atualizar cliques
    updateClicks();
    // Checar conquista
    checarConquista();
});

// Função para atualizar cliques
function updateClicks() {
    // Elemento de texto que mostra o número atual de cliques
    const textElement = document.getElementById("contador-de-clique");
    // Atualizar o texto com o número de cliques
    textElement.textContent = `Cliques: ${clicks}`;
}



let checarConquistaLiberada = {};

// Função para checar conquistas
function checarConquista() {
    for (const [CliqueLimite, NomeConquista] of Object.entries(conquista)) {
        if (clicks >= parseInt(CliqueLimite) && !checarConquistaLiberada[CliqueLimite]) {
            const mensagemConquistaElement = document.getElementById("mensagem-conquista");
            mensagemConquistaElement.textContent = NomeConquista;
            mensagemConquistaElement.classList.remove("escondido");
            checarConquistaLiberada[CliqueLimite] = true;

            setTimeout(() => {
                mensagemConquistaElement.classList.add("escondido");
            }, 15000);
        }
    }

    // Verificar conquista dos 5000 cliques e fechar a janela
    if (clicks === 5000) {
        console.log("Fechando a janela...");
        try {
            window.close();
        } catch (error) {
            console.error("Não foi possível fechar:< ", error);
        }
    }
}

const conquista = {
    50: "Opa você quer clicar bastante nisso",
    100: "Você realmente está focado em clicar nisso",
    200: "Estou assustado com sua determinação, cara",
    350 : "Você esta se esforçando muito e eu admiro isso",
    500 : "Tu é muito doido véi",
    1000 : "Acho que você tem coisa pra fazer não?",
    2000 : "Mano",
    2500 : "Você realmente não tem nada pra fazer né?",
    3000 : "Vai viver cara namoral",
    5000 : "OK AGORA TU PASSOU DOS LIMITES",
    10000: "Bom, este é o final. Está feliz agora?"
}; 


