import { Link } from "react-router-dom";
import { users } from "../../data/users";
import styles from "./Users.module.css";

const Users = () => {
  return (
    <div className={styles.container}>
      <h1>Lista de Usuarios</h1>

      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id} className={styles.item}>
            <Link to={`/usuarios/${user.id}`} className={styles.link}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;