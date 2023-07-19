/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { IconType } from 'react-icons';
import { IconContext } from 'react-icons';
import IconSkills, { SkillIcon } from '../../data/IconSkills';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';

const iconComponents: { [key: string]: IconType } = {
  FaReact,
  IoLogoJavascript,
  IoLogoCss3,
  // Add more icons here as needed
};

const HardSkillsComponent: React.FC = () => {
  return (
    <div>
      <IconContext.Provider value={{size: '80px',color: 'black'}}>
      {IconSkills.map((skill: SkillIcon) => {
        const IconComponent = iconComponents[skill.icon];
        return (
          <div key={skill.title} className="icon-container">
            <IconComponent />
            <span className="icon-name">{skill.title}</span>
          </div>
        );
      })}
      </IconContext.Provider>
    </div>
  );
};

export default HardSkillsComponent;
