import styles from "./menu.module.css";
import Image from "next/image";

export default function Header(){
    return (
        <header className={styles.cabecalho}>
            <div>
                <Image width={55} height={55} style={{ marginLeft: '2rem' }} src={'https://media.istockphoto.com/id/1423019666/pt/vetorial/reading-e-book-pixel-perfect-gradient-linear-ui-icon.jpg?s=612x612&w=0&k=20&c=myq2n2LjW78sV61KfeuOKGpMddPZxNKb7i8CpoQXWlo='} />
            </div>
            <div>
                <p>Encontre tudo que você precisa em um só lugar!</p>
            </div>
            <div>
                <button>Adicionar produto</button>
            </div>
            <div>
                <Image width={35} height={35} style={{ marginRight: '2rem' }} src={'https://media.istockphoto.com/id/1206806317/pt/vetorial/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cl3NPzmnu0pRmaRGndYIejbHGe-atORf0JDjzmhX8Z8='} />
            </div>
        </header>
    )
}