export default class ArrayDeNotas {

    // Atributos Privados
    #subs;

    // Construtor
    constructor() { this.notas = []; this.#subs = []; }

    inscrever(func) { this.#subs.push(func); }

    notificar() {

        this.#subs.forEach(
            (func) => func(this.notas)
        );
    }

    adicionarNota(titulo, texto, categoria) {

        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    apagarNota(indice) {

        this.notas.splice(indice, 1);
        this.notificar();
    }
}

class Nota{

    constructor(titulo, texto, categoria) {

        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}