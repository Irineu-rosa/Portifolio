import { Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Sua página inicial */}
      <Route path="/" element={<Home />} />

      {/* Quando acessar /portifolio → redireciona para / */}
      <Route path="/portifolio" element={<Navigate to="/" />} />

      {/* Outras rotas */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
