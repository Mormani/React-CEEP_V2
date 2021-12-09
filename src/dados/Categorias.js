export default class Categorias {

    // Atributos Privados
    #subs;

    // Construtor
    constructor() { this.categorias = []; this.#subs = []; }

    inscrever(func) { this.#subs.push(func); }

    desinscrever(paramFunc) { this.#subs = this.#subs.filter(func => func !== paramFunc); }

    notificar() {

        this.#subs.forEach(
            (func) => func(this.categorias)
        );
    }

    adicionarCategoria(novaCategoria) {

        this.categorias.push(novaCategoria);
        this.notificar();
    }
}