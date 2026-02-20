class Grafo {
    constructor() {
        this.listaAdj = {};
    }

    adicionarNo(no) {
        if (!this.listaAdj[no]) {
            this.listaAdj[no] = [];
        }
    }
}

module.exports = Grafo;