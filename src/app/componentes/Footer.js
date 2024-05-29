import style from "./menu.module.css";

export default function Footer(){
    return (
        <footer className={style.rodape}>
            <div>
                <ul className={style.text}>
                    <li>Todos os direitos reservados.</li>
                </ul>
            </div>
        </footer>
    )
}