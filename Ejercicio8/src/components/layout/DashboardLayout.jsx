import { Outlet, NavLink } from "react-router-dom";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className={styles.container}>

      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>EmpresaSys</h2>

        <nav className={styles.nav}>

          <NavLink to="/" end className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            Inicio
          </NavLink>

          <NavLink to="/empresas/1" className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }>
            Empresa
          </NavLink>

        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className={styles.content}>
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;