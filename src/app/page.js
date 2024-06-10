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
