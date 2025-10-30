import "./css/SobreMim.css";
import SkillsList from "../components/SkillsList";
import LinkedinIcon from "../Icons/icons8-linkedin-48.png";

export default function Sobre() {

  return (
    <div className="page_sobre">
      {/* <div className="perfil">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHEpNjHGUbWGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725535868253?e=1762992000&v=beta&t=inPsCcEWgcGOxxN7mIjYTUjfsoTOK7AGckRmVLUe4KQ" alt="Developer Illustration"/>
      </div> */}

      <section className="info">
        <h1>Sobre Mim</h1>

        <p>
          Sou Irineu Rosa, Desenvolvedor Web apaixonado por tecnologia e por transformar ideias em soluções reais. Minha jornada começou no curso técnico de Análise e Desenvolvimento de Sistemas pelo Senac Hub Academy, onde descobri minha vocação na programação. Depois, aprofundei meus estudos em Sistemas para Internet na Estácio, consolidando minha base no desenvolvimento web.
          <br/><br/>
          Hoje trabalho com PHP, PostgreSQL, React, HTML, CSS, bancos de dados SQL e outros, atuando tanto no front-end quanto no back-end — área onde mais me destaco. Busco criar interfaces eficientes, sistemas bem estruturados e experiências que realmente façam sentido para o usuário.
          <br/><br/>
          Sou movido por evolução, desafios e pela vontade constante de aprender algo novo. Cada projeto é uma oportunidade de crescer, melhorar e entregar o meu melhor.
        </p>        

        <a
          href="https://www.linkedin.com/in/irineu-rosa-9b5705207/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-linkedin"
        >
          <img id="linkedinIcon"  src={LinkedinIcon} alt="" /> Ver Perfil no LinkedIn
        </a>
      </section>
    </div>
  );
}
