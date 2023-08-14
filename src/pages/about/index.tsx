import './index.css'
import HardSkillsComponent from "./cartSkills"
import HardSkills from "./hardSkills"
import Aboutme from "./meAbout"
import MyImage from "./myImage"

function About() {
    return(
        <div className="about-style">
            <div>
            <Aboutme />
            <HardSkills/>
            <HardSkillsComponent />
            </div>
            <div className='image'>
            <MyImage />
            </div>
        </div>
    )
}

export default About