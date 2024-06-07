import Image from "next/image";
import style from "./page.module.css";
import Main from "./componentes/Main"

export default function Home() {
  try{
  return (
    <Main/>
  );
} catch{
  return <p style={{ justifyContent: 'center' }}>Deu Erro!</p>
}
}
