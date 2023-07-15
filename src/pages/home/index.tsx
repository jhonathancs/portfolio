import NameAnimation from "./nameAnimation";
import StackAnimation from "./stackAnimations";
import Imagem from './imgs/imagem'
import './home.css'

function Home() {
    return (
      <div className="container">
        <div className="text-name">
        <h1>Olá! Eu sou<NameAnimation />E Gosto de <StackAnimation /></h1>
          <p>Seja Bem Vindo ao meu Portfolio!</p>
      </div>
        <Imagem />
     </div>
      )
  }
  
  export default Home;