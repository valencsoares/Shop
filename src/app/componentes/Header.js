import styles from "./menu.module.css";
import Image from "next/image";

export default function Header(){
    return (
        <header className={styles.cabecalho}>
            <button className={styles.botao3} style={{ marginLeft: '2rem' }}>
                <Image width={55} height={55} src={'https://media.istockphoto.com/id/1423019666/pt/vetorial/reading-e-book-pixel-perfect-gradient-linear-ui-icon.jpg?s=612x612&w=0&k=20&c=myq2n2LjW78sV61KfeuOKGpMddPZxNKb7i8CpoQXWlo='} />
            </button>
            <div>
                <p>Encontre tudo que você precisa em um só lugar!</p>
            </div>
            <div>
                <button className={styles.botao}>Adicionar produto</button>
            </div>
            <button className={styles.botao2} style={{ marginRight: '2rem' }}>
                <Image width={35} height={35} src={'https://media.istockphoto.com/id/1206806317/pt/vetorial/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cl3NPzmnu0pRmaRGndYIejbHGe-atORf0JDjzmhX8Z8='} />
            </button>
        </header>
    )
}