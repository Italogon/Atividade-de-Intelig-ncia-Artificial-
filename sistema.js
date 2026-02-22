const readline = require('readline');
const Grafo = require('./grafo');
const { bfs } = require('./bfs');
const { dfs } = require('./dfs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mapa de la city
const grafo = new Grafo();

grafo.adicionarAresta("Pizzaria", "Hospital");
grafo.adicionarAresta("Hospital", "Cinema");
grafo.adicionarAresta("Cinema", "Escola");
grafo.adicionarAresta("Escola", "Mercado");
grafo.adicionarAresta("Mercado", "Praça");
grafo.adicionarAresta("Praça", "Shopping");
grafo.adicionarAresta("Shopping", "Posto de Gasolina");
grafo.adicionarAresta("Posto de Gasolina", "Farmácia");
grafo.adicionarAresta("Farmácia", "Casa do Cliente");

// Conexões alternativas
grafo.adicionarAresta("Pizzaria", "Praça");
grafo.adicionarAresta("Cinema", "Shopping");
grafo.adicionarAresta("Hospital", "Mercado");

console.log("\n=== SISTEMA DO ENTREGADOR DE PIZZA ===");
console.log("Escolha o algoritmo de busca:");
console.log("1 - Busca em Largura (BFS)");
console.log("2 - Busca em Profundidade (DFS)");

rl.question("Digite 1 ou 2: ", function(opcao) {

    let caminho;

    if (opcao === "1") {
        caminho = bfs(grafo, "Pizzaria", "Casa do Cliente");
        console.log("\nCaminho encontrado usando BFS:");
    } else if (opcao === "2") {
        caminho = dfs(grafo, "Pizzaria", "Casa do Cliente");
        console.log("\nCaminho encontrado usando DFS:");
    } else {
        console.log("Você é cego!?");
        rl.close();
        return;
    }

    console.log(caminho);
    rl.close();
});