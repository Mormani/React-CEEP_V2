import React, {Component} from "react";
import "./style.css";

class FormularioCadastro extends Component {

    // Construtor
    constructor(props) {

    super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem Categoria"
    }

    _handleMudancaCategoria(evento) {

        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _handleMudancaTitulo(evento) { this.titulo = evento.target.value; }

    _handleMudancaTexto(evento) { this.texto = evento.target.value; }

    _criarNota(evento) {

        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render() {

        return (
        <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
            <select
                className="form-cadastro_input"
                onChange={this._handleMudancaCategoria.bind(this)}
            >
                <option selected disabled>Escolha uma categoria</option>
                <option>Sem categoria</option>
                {this.props.categorias.map(
                    (categoria) => {
                        return ( <option>{categoria}</option> );
                    }
                )}
            </select>
            <input
                type="text"
                placeholder="Título"
                className="form-cadastro_input"
                onChange={this._handleMudancaTitulo.bind(this)}
            />
            <textarea
                rows={15}
                placeholder="Escreva sua nota..."
                className="form-cadastro_input"
                onChange={this._handleMudancaTexto.bind(this)}
            >
            </textarea>
            <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
        </form>
        );
    }
}

export default FormularioCadastro;