import './imagem.css'
import img from '../../../assets/photo-me.jpg'

function Img() {
    return(
        <div className="img-me">
            <img src={img} alt="me-photo" />
        </div>
    )
}

export default Img;