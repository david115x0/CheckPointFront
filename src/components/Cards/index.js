/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import './style.scss';
import { Component } from 'react';
import img from './img/bigMom.png';
import imgBug from './img/buglog.png';
import imgAPI from './img/toDoListApi.png'
import icon from './img/github5.jpg'

export default class Cards extends Component {
    constructor() {
        super();
        this.state = {
            informacao: [
                {
                    nome: "BIG MOM",
                    imagem: img,
                    projeto: 'Este foi meu primeiro projeto de front-end. Ele foi realizado em equipe, onde cada integrante colaborou em determinadas partes do projeto, foi aqui que construí uma boa base de front-end...',
                    link: "https://jennimay.github.io/projeto-bigmom/"
                },
                {
                    nome: "BUG LOG",
                    imagem: imgBug,
                    projeto: 'Projeto realizado na matéria de front-end 2. Este projeto tem o objetivo de adicionarmos um report de bugs encontrados, podemos adicionar imagens por meio de links e uma descrição que desenvolva as características dos bugs.',
                    link: "https://david115x0.github.io/Checkpoint01/"
                },
                {
                    nome: "TO DO LIST E API JSON",
                    imagem: imgAPI,
                    projeto: "Segundo projeto de front-end 2 para este checkpoint precisávamos de criar um to do list, e um verificador Json, e sinaliza-os tachando os dados que não corresponde aos requisitos.",
                    link: "https://github.com/david115x0/CheckPoint-02/tree/main/CheckPointFront"
                }
            ]
        }
    }
    render() {
        return (
            <>
                <a name="cards"></a>
                <h1>Projetos</h1>
                {
                    this.state.informacao.map(({ nome, imagem, projeto, link }) => {
                        return (
                            <section>
                                <div class="card">
                                    <img src={imagem} alt="big_mom"></img>

                                    <div class="card-body">
                                        <h5 class="card-title">{nome}</h5>
                                        <p class="card-text">{projeto}</p>
                                    </div>
                                    <div class="card-body">
                                        <a href="#" class="card-link" href={link}><img src={icon} alt="icone"/>Link do Projeto</a>
                                    </div>
                                </div>


                            </section>
                        )
                    })
                }

            </>

        )
    }
}