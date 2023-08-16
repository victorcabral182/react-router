import MainButton from "components/MainButton";
import styles from "./NotFound.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          principal.
        </p>
        <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
          <MainButton>Voltar</MainButton>
        </div>
        <img className={styles.imagemCachorro} src={erro404} alt="" />
      </div>
      <div className={styles.espacoEmBranco} />
    </>
  );
}
