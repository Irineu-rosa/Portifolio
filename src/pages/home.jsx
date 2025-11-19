import './css/page_home.css';

export default function Home() {

  return (
  <div className="page_home">
    <section class="hero">
      <div class="hero-content">
        <h1>Olá, eu sou <span>Irineu Rosa</span></h1>
        <p>Desenvolvedor Web apaixonado por criar experiências digitais incríveis.</p>
        <p>Meu portfólio ainda está em desenvolvimento e será atualizado continuamente conforme eu tiver tempo disponível.</p>
        <a href="https://github.com/Irineu-rosa" 
        target="_blank"        
        class="btn">Ver meus projetos</a>
      </div>
      <div class="hero-image">
        <img src="https://media.licdn.com/dms/image/v2/D4D35AQF5yFUDFPnqjA/profile-framedphoto-shrink_400_400/B4DZqSdSaiHwAc-/0/1763393742803?e=1764172800&v=beta&t=0iI6SuOJ_OxYdiYzLDGReSCOb6aCY0YiDo9BzsBHHuE" alt="Developer Illustration"/>
      </div>
    </section>

  </div>
  );
}
