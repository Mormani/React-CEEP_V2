import React, {Component} from "react";
import CardNota from "../CardNota/CardNota.jsx";
import "./style.css";

class ListaDeNotas extends Component {

    // Atributos Privados
    #novasNotas;

    // Construtor
    constructor() {

        super();
        this.state = { notas: [] };
        this.#novasNotas = this._novasNotas.bind(this);
    }

    componentDidMount() { this.props.notas.inscrever(this.#novasNotas); }

    componentWillUnmount() { this.props.notas.desinscrever(this.#novasNotas); }

    _novasNotas(notas) { this.setState( {...this.state, notas } )  }

    render() {

        return(
        <ul className="lista-notas">
            {this.state.notas.map((nota, index) => {

                return(
                <li className="lista-notas_item" key={index}>
                    <CardNota
                        titulo={nota.titulo}
                        text={nota.texto}
                        indice={index}
                        categoria={nota.categoria}
                        apagarNota={this.props.apagarNota}
                    />
                </li>
                )
            })}
        </ul>
        );
    };
}

export default ListaDeNotas;