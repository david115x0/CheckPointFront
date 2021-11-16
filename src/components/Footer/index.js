/* eslint-disable jsx-a11y/anchor-is-valid */

import './style.scss';
import imgGithub from './img/github5.jpg'
import imgGmail from './img/gmail.png'
import imgLinkedin from './img/linkedin.png'
const Footer = () => {
    return (
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                
                <li class="nav-item"><a href="https://www.linkedin.com/in/david-silva-sousa-790a42225" name="footer" class="nav-link px-2 text-muted" ><img src={imgLinkedin} alt="linkedin"/>Linkedin</a></li>

                <li class="nav-item">
                    <a href="https://github.com/david115x0" class="nav-link px-2 text-muted"><img src={imgGithub} alt="github" />GITHUB</a></li>
                
                <li class="nav-item"><a href="mailto:davidsilvafs29@gmail.com" class="nav-link px-2 text-muted"><img src={imgGmail} alt="gmail"/>Gmail</a></li>
            </ul>
            <p class="text-center text-muted">© 2021 Company, Inc</p>
        </footer>
    )
}
export default Footer;