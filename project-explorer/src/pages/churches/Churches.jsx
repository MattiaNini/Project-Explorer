import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";
import { GET } from "../../utils/http";

export default function Churches() {
  const { results } = useParams();
  const [churchesData, setChurchesData] = useState({});

  useEffect(() => {
    GET(`accommodation?$filter=name%20eq%20%27'${results}'%27`).then((res) =>
      setChurchesData(res.results[0])
    );
  }, []);

  return (
    <div className={styles.Churche}>
      <img
        src={churchesData.results.image.url}
        alt={churchesData.results.name}
      />
      <section className={styles.texts}>
        <Link to="/">
          <button>Torna alla Home</button>
        </Link>
        <h1>{churchesData.results.name}</h1>
        <p>{churchesData.results.telephone}</p>
      </section>
    </div>
  );
}
