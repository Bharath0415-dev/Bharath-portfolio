import React from 'react'
import "./skills.css"
import SkillList from '../../common/SkillList'
import checkMarkdark from "../../assets/checkmark-dark.svg"
import checkMarklight from "../../assets/checkmark-light.svg"
import { useTheme } from '../../common/ThemeContext'
function Skills() {
const {theme, toggleTheme}= useTheme();
const checkMarkIcon= theme==='light'? checkMarklight: checkMarkdark;
  return (
    <section id="skills" className='container2'>
        <h1 className='sectionTitle'>Skills</h1>
        <div className="skillList">
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="Javascript"/>
            <SkillList src={checkMarkIcon} skill="Node"/>
        </div>
            <hr />
        <div className="skillList">
            <SkillList src={checkMarkIcon} skill="Python"/>
            <SkillList src={checkMarkIcon} skill="Java"/>
            <SkillList src={checkMarkIcon} skill="C++"/>
            <SkillList src={checkMarkIcon} skill="DataBase"/>
            </div>
            <hr />
            <div className="skillList">

            <SkillList src={checkMarkIcon} skill="React"/>
            <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        </div>
    </section>
  )
}

export default Skills