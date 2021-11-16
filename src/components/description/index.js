/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Component } from 'react';
import './style.scss';

export default class Description extends Component {
    render() {
        return (

            <div className="descricao">
                <a name="description"></a>
                <div>
                    <h1 class="display-5 fw-bold">Eu, David</h1>
                    <p class="col-md-8 fs-4">		Meu nome é David tenho 21 anos, entusiasta por programação, filmes e livros.
                        Comecei meus estudos por programação recentemente, estou gostando bastante.
                        O CTD está
                        sendo uma ótima plataforma guia nesta jornada, aprecio bastante a sinceridade e o cuidado em que o curso é conduzido.</p>
                </div>
            </div>
        )
    }
}
