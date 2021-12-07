import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias.jsx";
import {Component} from "react";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias.js";
import ArrayDeNotas from "./dados/Notas.js";

class App extends Component {

    // Construtor
    constructor() {

        super();
        this.categorias = new Categorias();
        this.notas = new ArrayDeNotas();
    }

    render() {

        return (
        <section className="conteudo">
            <FormularioCadastro
                criarNota={this.notas.criarNota}
                categorias={this.categorias.categorias}
            />
            <main className="conteudo-principal">
                <ListaDeCategorias
                    categorias={this.categorias}
                    adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
                />
                <ListaDeNotas
                    notas={this.notas.notas}
                    apagarNota={this.notas.apagarNota.bind(this)}
                />
            </main>
        </section>
        );
    }
}

export default App;
