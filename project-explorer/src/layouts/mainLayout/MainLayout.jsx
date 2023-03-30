import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
