function dfs(grafo, inicio, destino) {
}
function dfs(grafo, inicio, destino) {
    const visitados = new Set();
}
function dfs(grafo, inicio, destino) {
    const visitados = new Set();

    function buscar(no, caminho) {
    }
}
function dfs(grafo, inicio, destino) {
    const visitados = new Set();

    function buscar(no, caminho) {
        if (no === destino) {
            return caminho;
        }

        visitados.add(no);

        for (let vizinho of grafo.listaAdj[no]) {
            if (!visitados.has(vizinho)) {
                const resultado = buscar(vizinho, [...caminho, vizinho]);
                if (resultado) return resultado;
            }
        }

        return null;
    }

    return buscar(inicio, [inicio]);
}
module.exports = { Grafo, mapa, bfs, dfs };
