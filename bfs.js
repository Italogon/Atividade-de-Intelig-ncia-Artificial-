function bfs(grafo, inicio, destino) {
    const fila = [[inicio]];
    const visitados = new Set();

    while (fila.length > 0) {
        const caminho = fila.shift();
        const no = caminho[caminho.length - 1];

        if (no === destino) {
            return caminho;
        }

        if (!visitados.has(no)) {
            visitados.add(no);

            for (let vizinho of grafo.listaAdj[no]) {
                fila.push([...caminho, vizinho]);
            }
        }
    }

    return null;
}

module.exports = { bfs };