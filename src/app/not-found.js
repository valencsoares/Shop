import styles from "./page.module.css"
import Image from "next/image";

export default function notFound(){
    return (
        <div>
            <div className={styles.error}> 
                <h1>Oops! Não foi encontrado a página :( </h1>
                <Image width={500} height={500} src={'https://thumbs.dreamstime.com/z/rocket-icons-start-up-launch-symbol-new-innovation-development-trendy-modern-flat-design-icon-template-vector-illustration-41406668.jpg?ct=jpeg'}/>
            </div>
        </div>
    )
}