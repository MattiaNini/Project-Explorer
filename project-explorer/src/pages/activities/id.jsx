import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./id.module.scss";

//--ACTIVITY--//
export default function Activity() {
  const { id } = useParams();

  const [activity, setActivity] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id || 13}`)
      .then((data) => data.json())
      .then((res) => setActivity(res));
  }, []);

  return (
    <div className={styles.Activity}>
      {activity.title ? (
        <>
          <img src={activity.image} alt={activity.title} />
          <section className={styles.texts}>
            <h1>{activity.title}</h1>
            <p>{activity.description}</p>
            <p>{activity.price}</p>
            <p>Categoria: {activity.category}</p>
          </section>
        </>
      ) : (
        <h3>Prodotto non disponibile!</h3>
      )}
    </div>
  );
}
