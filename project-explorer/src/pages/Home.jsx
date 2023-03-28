import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="activity/:id">Attività</Link>
        </li>
        <li>
          <Link to="city/:id">Città</Link>
        </li>
      </ul>
    </div>
  );
}
