import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./DashboardLayout.module.css";

export default function DashboardLayout() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}