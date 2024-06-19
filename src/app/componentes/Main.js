"use client" /* você defini que ele está do lado do cliente. quando é do lado do serve, usa use server */
/* quando é assyncrono não consegue trabalhar com manipulação de dados se estiver dentro de um componente, ou seja, não trabalha com estados */
import { useEffect, useState } from "react";
import style from "./menu.module.css";
import Image from "next/image";

export default function Main() {
    const [listProduct, setListProduct] = useState([]);
    
    useEffect(() => {
        const getProduct = async() => {
            const resposta = await fetch("https://fakestoreapi.com/products", {nex:{revalidate: 1}});
            const products = await resposta.json();
            setListProduct(products);
        }
        getProduct();
    }, []); /* o ", []" diz que será disparado apenas quando a lista estiver vazia */ 
    /* td vez q a minha lista for modificada ele vai buscar através do fecth a informação que será salva na lista */

    const orderAz = () => {
        const listAux = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));
        setListProduct(listAux)
    }
    const orderZa = () => {
        const listAux = [...listProduct].sort((a, b) => b.title.localeCompare(a.title));
        setListProduct(listAux)
    }
    const priceCrescent = () => {
        const listAux = [...listProduct].sort((a, b) => a.price - b.price);
        setListProduct(listAux)
    }
    const priceReverse = () => {
        const listAux = [...listProduct].sort((a, b) => b.price - a.price);
        setListProduct(listAux)
    }


    return (
        <>
        <div className={style.filters}>
            <div>
                <button onClick={orderAz}> Az </button>
                <button onClick={orderZa}> Za </button>
                <button onClick={priceCrescent}> Crescent price </button>
                <button onClick={priceReverse}> Decrescent price </button>
            </div>
        </div>

        <main>
            <div className={style.container}>
                {listProduct.map((prod) => /* mapeando o estado */
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
        </>
    );
}