import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import {Component} from "react";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

    criarNota(titulo, texto) {


    }

    render() {

        return (
        <section className="conteudo">
            <FormularioCadastro criarNota={this.criarNota}/>
            <ListaDeNotas/>
        </section>
        );
    }
}

export default App;
