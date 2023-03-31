import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const NavigateActivities = () => {
    navigate("/activities");
  };
  return (
    <div className={styles.Navbar}>
      <h1>Sono la Navbar</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li onClick={NavigateActivities}>Activities</li>
      </ul>
    </div>
  );
};

export default Navbar;
