import { useState, useEffect } from "react";
import { products } from "./products";
import { Item } from "./item";

const ItemDetailContainer = () => {
  const { data } = useState({});

  useEffect(() => {
    costumeFetch(products).then((res) => console.log(res));
  }, []);

  return (
    <>
      <Item listProducts={data} />
    </>
  );
};

export { ItemDetailContainer };
