import { useEffect, useState } from "react";

export default function SkillInfoModal({ skill, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (skill) {
      setVisible(true);
    }
  }, [skill]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 300);
  };

  if (!skill) return null;

  return (
    <div className={`modal-overlay ${visible ? "fade-in" : "fade-out"}`} onClick={handleClose}>
      <div 
        className={`modal-box ${visible ? "modal-in" : "modal-out"}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{skill.title}</h2>
        <p>{skill.description}</p>

        <h3>✅ O que eu sei fazer:</h3>
        <ul>
          {skill.whatIKnow.map((item, i) => (
            <li key={i}> - {item}</li>
          ))}
        </ul>

        <button className="modal-close" onClick={handleClose}>Fechar</button>
      </div>
    </div>
  );
}
