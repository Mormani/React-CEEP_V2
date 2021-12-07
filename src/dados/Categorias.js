export default class Categorias {

    constructor() { this.categorias = []; }

    adicionarCategoria(novaCategoria) {

        this.categorias.push(novaCategoria);
        console.log(this.categorias);
    }
}