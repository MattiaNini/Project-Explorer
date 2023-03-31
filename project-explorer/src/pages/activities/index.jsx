import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardList from "../../components/cardList/CardList";
import styles from "../../styles/Activities.module.scss";

//--ACTIVITIES--//
export default function Activities() {
  const [itemList, setItemList] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItemList(data));
  }, []);

  const filterList = (list, category) =>
    list.filter((item) => item.category === category);

  return (
    <div className={styles.Activities}>
      {searchParams.get("time") && (
        <h1>
          Il prodotto da te scelto potrà essere ritirato in negozio alle ore{" "}
          {searchParams.get("time")}
        </h1>
      )}
      <section>
        <h2>Categoria: Gioielleria</h2>
        <CardList data={filterList(itemList, "jewelery")} />
      </section>
      <section>
        <h2>Categoria: Vestiti da Donna</h2>
        <CardList data={filterList(itemList, "women's clothing")} />
      </section>
    </div>
  );
}
