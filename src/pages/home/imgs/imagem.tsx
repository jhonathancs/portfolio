import './imagem.css'
import img from '../../../assets/photo-me.jpg'

function Img() {
    return(
        <div className="img-me">
            <p>
            <img src={img} alt="me-photo" />
            icons linkedin e icons github</p>
        </div>
    )
}

export default Img;