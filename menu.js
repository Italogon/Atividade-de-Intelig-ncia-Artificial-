const Grafo = require('./grafo');
const bfs = require('./bfs');
const dfs = require('./dfs');

// Criando o grafo
const grafo = new Grafo();

grafo.adicionarAresta('A', 'B');
grafo.adicionarAresta('A', 'C');
grafo.adicionarAresta('B', 'D');
grafo.adicionarAresta('C', 'D');

// Função para executar BFS
function executarBFS() {
    const resultado = bfs(grafo, 'A', 'D');
    console.log("Resultado BFS:", resultado);
}

// Função para executar DFS
function executarDFS() {
    const resultado = dfs(grafo, 'A', 'D');
    console.log("Resultado DFS:", resultado);
}

// Menu simples de execução
console.log("=== MENU DE TESTE ===");
executarBFS();
executarDFS();