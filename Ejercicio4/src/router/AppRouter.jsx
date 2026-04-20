import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/Layout/DashboardLayout";

import Home from "../pages/Home/Home";
import Users from "../pages/Users/Users";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import CityDetail from "../pages/CityDetail/CityDetail";
import VehicleDetail from "../pages/VehicleDetail/VehicleDetail";
import VehicleSearch from "../pages/VehicleSearch/VehicleSearch";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 👇 LAYOUT PRINCIPAL */}
        <Route path="/" element={<DashboardLayout />}>

          <Route index element={<Home />} />
          <Route path="usuarios" element={<Users />} />
          <Route path="productos" element={<Products />} />
          <Route path="productos/:code" element={<ProductDetail />} />

          {/* 👇 CIUDADES DENTRO DEL LAYOUT */}
          <Route path="ciudades/:id" element={<CityDetail />} />
          
          {/* 👇 vehiculos DENTRO DEL LAYOUT */}
          <Route path="vehiculos" element={<VehicleSearch />} />
          <Route path="vehiculos/:placa" element={<VehicleDetail />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;