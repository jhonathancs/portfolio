import HardSkillsComponent from "./cartSkills"
import HardSkills from "./hardSkills"
import Aboutme from "./meAbout"

function About() {
    return(
        <div>
            <Aboutme />
            <HardSkills/>
            <HardSkillsComponent />
        </div>
    )
}

export default About