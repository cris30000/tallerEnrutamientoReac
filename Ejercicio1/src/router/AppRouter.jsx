import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu/Menu";

import Inicio from "../pages/Inicio/Inicio";
import Productos from "../pages/Productos/Productos";
import Acerca from "../pages/Acerca/Acerca";

function AppRouter() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;