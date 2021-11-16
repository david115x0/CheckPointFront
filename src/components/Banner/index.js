/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import { Component } from 'react';
import img from './img/amigos3.jpg'
export default class Banner extends Component {
    render() {
        return (
            <div class="bd-example">
                <div id="carouselExampleSlidesOnly">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img} alt="drive filme"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}