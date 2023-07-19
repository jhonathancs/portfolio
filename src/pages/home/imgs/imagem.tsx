import './imagem.css'
import img from '../../../assets/photo-me.jpg'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IconContext} from 'react-icons'

function Img() {
    return(
        <div className="img-me">
            <p>
            <IconContext.Provider value={{size:'50px', color:'black'}}>
            <img src={img} alt="me-photo" />
            <a href="https://github.com/jhonathancs" target="_blank">
                <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/jhonathan-cs/" target="_blank">
                <AiFillLinkedin />
                </a>
            </IconContext.Provider >
            </p>
        </div>
    )
}

export default Img;