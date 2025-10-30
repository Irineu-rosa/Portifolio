import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Sobre from "./pages/sobre_mim.jsx";
import Conhecimentos from "./pages/conhecimentos.jsx";
import Portifolio from "./pages/portifolio.jsx";
import Rodape from "./components/Footer.jsx";
import './App.css'

function App() {
  return (
    <BrowserRouter>      
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
      <Route path="/" element={<Portifolio />} />
      <Route path="/" element={<Home />} />
      <Route path="/sobre_mim" element={<Sobre />} />
      <Route path="/conhecimentos" element={<Conhecimentos />} />
    </Routes>

    <Rodape></Rodape>
    </BrowserRouter>
  );
}

export default App;
