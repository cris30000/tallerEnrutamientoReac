import { useParams, Link } from "react-router-dom";
import { users } from "../../data/users";
import styles from "./UserDetail.module.css";

const UserDetail = () => {
  const { id } = useParams();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <p>Usuario no encontrado</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Detalle del Usuario</h1>

      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <Link to="/usuarios" className={styles.back}>
        Volver
      </Link>
    </div>
  );
};

export default UserDetail;