class Grafo {
    constructor() {
        this.listaAdj = {};
    }

    adicionarNo(no) {
        if (!this.listaAdj[no]) {
            this.listaAdj[no] = [];
        }
    }

    adicionarAresta(origem, destino) {
        this.adicionarNo(origem);
        this.adicionarNo(destino);

        this.listaAdj[origem].push(destino);
    }
}

module.exports = Grafo;