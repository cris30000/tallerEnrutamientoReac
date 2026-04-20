import { Outlet, NavLink } from "react-router-dom";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Mi Dashboard</h2>

        <nav>
          <NavLink to="/" end className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            Inicio
          </NavLink>

          <NavLink to="/usuarios" className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            Usuarios
          </NavLink>

          <NavLink to="/productos" className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            Productos
          </NavLink>

          <NavLink to="/ciudades/1" className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            
            Ciudades
          </NavLink>
          <NavLink to="/vehiculos" className={({ isActive }) =>
            isActive ? styles.active : styles.link
 }>
    Vehículos
</NavLink>
        </nav>
      </aside>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;