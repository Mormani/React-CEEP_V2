import React, {Component} from 'react';
import "./style.css";

class ListaDeCategorias extends Component {

    // Atributos Privados
    #novasCategorias;

    // Construtor
    constructor() {

        super();
        this.state = { categorias: [] };
        this.#novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() { this.props.categorias.inscrever(this.#novasCategorias); }

    componentWillUnmount() { this.props.categorias.desinscrever(this.#novasCategorias); }

    _novasCategorias(categorias) { this.setState( {...this.state, categorias} ); }

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
                    {this.state.categorias.map(
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