import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { vehicles } from "../../data/vehicles";
import styles from "./VehicleSearch.module.css";

const VehicleSearch = () => {
  const [plate, setPlate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!plate) return;
    navigate(`/vehiculos/${plate}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Consulta de Vehículos</h1>

      <select
        className={styles.select}
        onChange={(e) => setPlate(e.target.value)}
      >
        <option value="">Seleccione una placa</option>
        {vehicles.map((v) => (
          <option key={v.plate} value={v.plate}>
            {v.plate}
          </option>
        ))}
      </select>

      <button
        className={styles.button}
        onClick={handleSearch}
      >
        Consultar
      </button>
    </div>
  );
};

export default VehicleSearch;