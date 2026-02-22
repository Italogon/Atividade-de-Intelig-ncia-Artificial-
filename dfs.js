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
}

module.exports = { dfs };