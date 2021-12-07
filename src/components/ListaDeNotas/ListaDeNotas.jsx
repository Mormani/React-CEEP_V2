import React, {Component} from "react";
import CardNota from "../CardNota/CardNota.jsx";
import "./style.css";

class ListaDeNotas extends Component {

    render() {

        return(
        <ul className="lista-notas">
            {this.props.notas.map((nota, index) => {

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