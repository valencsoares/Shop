import style from "./menu.module.css";
import Image from "next/image";

export default async function Main() {
    const resposta = await fetch("https://fakestoreapi.com/products", {nex:{revalidate: 1}});
    const products = await resposta.json();

    return (
        <main style={{ marginTop: "5%"}}>
            <div className={style.container}>
                {products.map((prod) =>
                    <div className={style.card}>
                        <p> {prod.title} </p>               
                        <Image width={200} height={200} src={prod.image} />
                        <p>US{prod.price}</p>
                        <p className={style.texto}>Description: {prod.description}</p>
                        <ul className={style.listaCard}>
                            <li>Category: {prod.category}</li>
                            <li className={style.liRating}>Rating: {prod.rating.count}</li>
                        </ul>
                    </div>)}
            </div>
        </main>
    );
}