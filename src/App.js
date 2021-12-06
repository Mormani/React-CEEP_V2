import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import {Component} from "react";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

    render() {

        return (
        <section className="conteudo">
            <FormularioCadastro/>
            <ListaDeNotas/>
        </section>
        );
    }
}

export default App;
