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

    obterVizinhos(no) {
        return this.listaAdj[no] || [];
    }

    imprimir() {
        console.log("Lista de Adjacência:");
        console.log(this.listaAdj);
    }
}

module.exports = Grafo;