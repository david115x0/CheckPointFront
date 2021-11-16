/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import img from './img/letra-d1.png'

const Header = () => {
    return (
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img class="bi me-2" width="40" height="32" src={img}></img>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item" ><a href="#" class="nav-link " aria-current="page" >Home</a></li>
                <li class="nav-item"><a href="#cards" class="nav-link">Projetos</a></li>
                <li class="nav-item"><a href="#description" class="nav-link">Descrição</a></li>
                <li class="nav-item"><a href="#footer" class="nav-link">Sobre</a></li>
            </ul>
        </header>
    )
}
export default Header;