import style from "./menu.module.css";
import Image from "next/image";

export default function Footer(){
    return (
        <footer className={style.rodape}>
            <div>
                <ul className={style.lista}>
                    <li>Todos os direitos reservados.</li>
                    <li className={style.ig}>Intagram</li>
                    <li className={style.face}>Facebook</li>
                    <li className={style.yt}>YouTube</li>
                    <li className={style.twt}>Twitter</li>
                    <li>
                        <Image width={50} height={50} style={{marginLeft: '2rem'}} src={'https://media.istockphoto.com/id/1423019666/pt/vetorial/reading-e-book-pixel-perfect-gradient-linear-ui-icon.jpg?s=612x612&w=0&k=20&c=myq2n2LjW78sV61KfeuOKGpMddPZxNKb7i8CpoQXWlo='}/>
                    </li>
                </ul>
                <p>Nossa empresa foi fundada dia 12 de agosto de 2006, nossa missão é trazer tudo que você precisa em apenas um clicar!</p>
            </div>
        </footer>
    )
}