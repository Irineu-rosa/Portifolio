import "./css/SkillsList.css";

export default function SkillsList({ skills, onSkillClick }) {
  return (
    <div className="Container-skills">
      <ul className="skills">
        {skills.map((skill, index) => (
          <li
            key={skill}
            className="skill-item"
            style={{ animationDelay: `${index * 0.15}s` }}
            onClick={() => onSkillClick(skill)}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
