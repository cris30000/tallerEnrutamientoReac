import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Inicio from "../pages/Inicio/Inicio";
import Productos from "../pages/Productos/Productos";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<DashboardLayout />}>
          <Route path="inicio" element={<Inicio />} />
          <Route path="productos" element={<Productos />} />
         
        <Route path="productos/:categoria" element={<Productos />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;