import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "../components/Layout/DashboardLayout";
import CompanyDetail from "../pages/Company/CompanyDetail";
import CompanyBranches from "../pages/Company/CompanyBranches";

const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* 🔥 LAYOUT PRINCIPAL */}
        <Route path="/" element={<DashboardLayout />}>

          {/* HOME */}
          <Route index element={<h1>Bienvenido al Dashboard</h1>} />

          {/* EMPRESAS */}
          <Route path="empresas/:id" element={<CompanyDetail />} />
          <Route path="empresas/:id/sedes" element={<CompanyBranches />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRouter;