import { useState } from "react";
import SkillsList from "../components/SkillsList";
import SkillInfoModal from "../components/SkillModalInfo";
import { skillsData } from "../data/skillsData";


import "./css/conhecimentos.css"

export default function Conhecimentos() {

  const minhasSkills = Object.keys(skillsData);
  const [selectedSkill, setSelectedSkill] = useState(null); 

  return (
    <div className="page_conhecimentos">
      <section className="info">
      <h1>💡 Habilidades</h1>   
      <p>
        Sou desenvolvedor júnior com experiência adquirida durante meu estágio na Ganso Sistemas, onde atuei no desenvolvimento e manutenção de funcionalidades internas, elaboração de relatórios e utilização de ferramentas como Delphi, FastReport, Firebird e IBExpert.
        Atualmente, sigo aprimorando minhas habilidades em desenvolvimento web, buscando aplicar boas práticas e evoluir continuamente na área.
      </p>      
      <p className="SkillsLista">
        <SkillsList skills={minhasSkills} onSkillClick={(skillName) => setSelectedSkill(skillsData[skillName])}/>
        <SkillInfoModal skill={selectedSkill} onClose={() => setSelectedSkill(null)}/>
      </p>    
      </section>    
    </div>
  );
}
