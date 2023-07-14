import NameAnimation from "./nameAnimation";
import StackAnimation from "./stackAnimations";

function Home() {
    return (
      <div className="wrapper">
        <h1>Olá! Meu nome é<NameAnimation />Eu sou: <StackAnimation />
        </h1>
     </div>
      )
  }
  
  export default Home;