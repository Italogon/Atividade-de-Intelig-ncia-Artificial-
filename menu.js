const bfs = require('./bfs');
const dfs = require('./dfs');
const readline = require('readline');

const grafo = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D'],
    D: []
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n=== MENU ===");
    console.log("1 - Executar BFS");
    console.log("2 - Executar DFS");
    console.log("3 - Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        if (opcao === "1") {
            console.log("Resultado BFS:", bfs(grafo, 'A', 'D'));
            mostrarMenu();
        } else if (opcao === "2") {
            console.log("Resultado DFS:", dfs(grafo, 'A', 'D'));
            mostrarMenu();
        } else if (opcao === "3") {
            rl.close();
        } else {
            console.log("Opção inválida!");
            mostrarMenu();
        }
    });
}

mostrarMenu();