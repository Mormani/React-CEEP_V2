import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias.jsx";
import {Component} from "react";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

    // Construtor
    constructor() {

        super();
        this.state = { notas: [], categorias: [] };
    }

    criarNota(titulo, texto) {

        const novaNota = { titulo, texto };
        const novoArrayNotas = [...this.state.notas, novaNota];
        const novoEstado = { notas: novoArrayNotas };
        this.setState(novoEstado);
    }

    apagarNota(index) {

        let arrayNotas = this.state.notas;
        arrayNotas.splice(index, 1);
        this.setState({ notas: arrayNotas });

    }

    adicionarCategoria(nomeCategoria) {

        const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
        const novoEstado = {...this.state, categorias: novoArrayCategorias};
        this.setState(novoEstado);
    }

    render() {

        return (
        <section className="conteudo">
            <FormularioCadastro
                criarNota={this.criarNota.bind(this)}
                categorias={this.state.categorias}
            />
            <main className="conteudo-principal">
                <ListaDeCategorias
                    categorias={this.state.categorias}
                    adicionarCategoria={this.adicionarCategoria.bind(this)}
                />
                <ListaDeNotas
                    notas={this.state.notas}
                    apagarNota={this.apagarNota.bind(this)}
                />
            </main>
        </section>
        );
    }
}

export default App;
