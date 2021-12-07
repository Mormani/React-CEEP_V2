import React, {Component} from 'react';
import "./style.css";

class ListaDeCategorias extends Component {

    componentDidMount() { this.props.categorias.inscrever(this._novasCategorias); }

    _novasCategorias(categorias) {

        console.log(categorias);
    }

    _handlerEventoInput(e) {

        if (e.key === "Enter") {

            let valorCategoria = e.target.value;
            e.target.value = "";
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {

        return (

            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.categorias.map(
                        (categoria, index) => {
                            return ( <li className="lista-categorias_item" key={index}>{categoria}</li> );
                        }
                    )}
                </ul>
                <input
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria..."
                    type="text"
                    onKeyUp={this._handlerEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;