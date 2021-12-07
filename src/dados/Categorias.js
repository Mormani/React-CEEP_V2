export default class Categorias {

    // Atributos Privados
    #subs;

    // Construtor
    constructor() { this.categorias = []; this.#subs = []; }

    inscrever(func) { this.#subs.push(func); }

    notificar() {

        this.#subs.forEach(
            (func) => func(this.categorias)
        );
    }

    adicionarCategoria(novaCategoria) {

        this.categorias.push(novaCategoria);
        console.log(this.categorias);
    }
}