import './index.css'
import HardSkillsComponent from "./cartSkills"
import HardSkills from "./hardSkills"
import Aboutme from "./meAbout"
import MyImage from "./myImage"
import ButtonCv from './buttonCv'

function About() {
    return(
        <div className="about-style">
            <div>
            <div className='image'>
            <Aboutme />
            <MyImage />
            </div>
            <ButtonCv />
            <HardSkills/>
            <HardSkillsComponent />
            </div>
        </div>
    )
}

export default About