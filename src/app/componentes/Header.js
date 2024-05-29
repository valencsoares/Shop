import styles from "./menu.module.css";
import Image from "next/image";

export default function Header(){
    return (
        <header className={styles.cabecalho}>
            <div>
                <Image width={200} height={200} src={'https://media.istockphoto.com/id/1423019666/pt/vetorial/reading-e-book-pixel-perfect-gradient-linear-ui-icon.jpg?s=612x612&w=0&k=20&c=myq2n2LjW78sV61KfeuOKGpMddPZxNKb7i8CpoQXWlo='}/>
            </div>
            <div>
                <p>Venha para nossa loja, aqui você encontrará tudo que precisa!</p>
            </div>
            <div>
                <Image width={50} height={50} src={'https://media.istockphoto.com/id/1206806317/pt/vetorial/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cl3NPzmnu0pRmaRGndYIejbHGe-atORf0JDjzmhX8Z8='}/>
            </div>
        </header>
    )
}