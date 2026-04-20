import { useParams, useSearchParams } from "react-router-dom";
import { cities } from "../../data/cities";
import styles from "./CityDetail.module.css";

const CityDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const modo = searchParams.get("modo"); // compacto o null

  const city = cities.find((c) => c.id === id);

  if (!city) {
    return <p>Ciudad no encontrada</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Detalle de Ciudad</h1>

      {/* 👇 Lógica del modo */}
      {modo === "compacto" ? (
        <h2>{city.name}</h2>
      ) : (
        <>
          <h2>{city.name}</h2>
          <p><strong>Población (habitantes ):</strong> {city.population}</p>
        </>
      )}
    </div>
  );
};

export default CityDetail;