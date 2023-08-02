/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import IconSkills, { SkillIcon } from '../../data/IconSkills';
import { IconType } from 'react-icons';
import { IconContext } from 'react-icons';
import {GrMysql} from 'react-icons/gr';
import {SiJest} from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import './cartSkills.css'

const { 
  BiLogoTypescript,BiLogoFirebase,
  BiLogoMongodb,BiLogoRedux,BiLogoJavascript,
  BiLogoCss3 } = BiIcons;

const { 
  FaReact, FaPython, FaNodeJs, FaJava, 
  FaDocker, FaHtml5, FaGitAlt,FaGithub 
} = FaIcons;

const iconComponents: { [key: string]: IconType } = {
  BiLogoTypescript,BiLogoFirebase,BiLogoMongodb,BiLogoRedux,BiLogoCss3,
  FaReact,FaPython,FaNodeJs,FaJava,FaDocker,FaHtml5,
  FaGitAlt,FaGithub,GrMysql,SiJest,BiLogoJavascript
};

const HardSkillsComponent: React.FC = () => {
  return (
    <div className="grid-container-icons">
      <IconContext.Provider value={{size: '70px'}}>
      {IconSkills.map((skill: SkillIcon) => {
        const IconComponent = iconComponents[skill.icon];
        return (
          <div key={skill.title} className="project-item-icons">
            <IconComponent />
            <span>{skill.title}</span>
            {/* <span>{skill.about}</span> */}
          </div>
        );
      })}
      </IconContext.Provider>
    </div>
  );
};

export default HardSkillsComponent;
