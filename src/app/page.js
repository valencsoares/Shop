import Image from "next/image";
import style from "./page.module.css";

export default async function Home() {
  try{
    const resposta = await fetch("https://fakestoreapi.com/products", {nex:{revalidate: 1}});
    const products = await resposta.json();

  return (
    <main style={{ marginTop: "10%" }}>
      <div className={style.container}>
        {products.map((prod) =>
          <div className={style.card}>
            <p>Name: {prod.title} </p>
            <p>Price: {prod.price}</p>
            <p>Description: {prod.description}</p>
            <p>Category: {prod.category}</p>
            <p>Rating: {prod.rating.count}</p>
            <Image width={200} height={200} src={prod.image}/>
          </div>)}
      </div>
    </main>
  );
} catch{
  return <p style={{ marginTop: "10%" }}>Deu Erro!</p>
}
}
