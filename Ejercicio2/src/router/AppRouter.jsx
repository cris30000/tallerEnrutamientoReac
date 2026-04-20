import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Inicio from "../pages/Inicio/Inicio";
import Productos from "../pages/Productos/Productos";
import ProductoDetalle from "../pages/ProductoDetalle/ProductoDetalle";
import Acerca from "../pages/acerca/Acerca";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<DashboardLayout />}>
          
          {/* 🔥 ruta inicial */}
          <Route index element={<Navigate to="/inicio" />} />

          <Route path="inicio" element={<Inicio />} />
          <Route path="productos" element={<Productos />} />
          <Route path="producto/:id" element={<ProductoDetalle />} />
          <Route path="acerca" element ={<Acerca/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;