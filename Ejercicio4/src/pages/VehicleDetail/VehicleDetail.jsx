import { useParams, Link } from "react-router-dom";
import { vehicles } from "../../data/vehicles";
import styles from "./VehicleDetail.module.css";

const VehicleDetail = () => {
  const { placa } = useParams();

  const vehicle = vehicles.find((v) => v.plate === placa);

  if (!vehicle) {
    return <p>Vehículo no encontrado</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detalle del Vehículo</h1>

      <p className={styles.info}>
        <span className={styles.label}>Placa:</span> {vehicle.plate}
      </p>

      <p className={styles.info}>
        <span className={styles.label}>Marca:</span> {vehicle.brand}
      </p>

      <p className={styles.info}>
        <span className={styles.label}>Modelo:</span> {vehicle.model}
      </p>

      <p className={styles.info}>
        <span className={styles.label}>Año:</span> {vehicle.year}
      </p>

      <Link to="/vehiculos" className={styles.back}>
        Volver
      </Link>
    </div>
  );
};

export default VehicleDetail;