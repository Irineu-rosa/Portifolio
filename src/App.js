import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/home.jsx";
import Sobre from "./pages/sobre_mim.jsx";
import Conhecimentos from "./pages/conhecimentos.jsx";
import Portifolio from "./pages/portifolio.jsx";
import Rodape from "./components/Footer.jsx";
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/portifolio"> 
      <nav className="navbar">
        <div className="logo">Irineu<span>Rosa</span></div>
        <div className="nav-links">
          <Link to="/"><p><p className="iconMenu">🏠</p> Inicio</p></Link>
          <Link to="/sobre_mim"><p><p className="iconMenu">ℹ️</p> Sobre</p></Link>
          <Link to="/conhecimentos"><p><p className="iconMenu">💻</p> Competências</p></Link>
        </div>
      </nav>

      {/* Rotas menu*/}
      <Routes>

        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Redirecionamento: quando acessar /portifolio → ir para / */}
        <Route path="/portifolio" element={<Navigate to="/" />} />

        <Route path="/sobre_mim" element={<Sobre />} />
        <Route path="/conhecimentos" element={<Conhecimentos />} />

        {/* Se quiser abrir a página Portifolio separadamente */}
        <Route path="/meu_portifolio" element={<Portifolio />} />

      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;
