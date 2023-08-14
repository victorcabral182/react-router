import styles from "./Banner.module.css";
import colouredCircle from "assets/circulo_colorido.png";
import myPhoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>Hello World!</h1>
          <p className={styles.paragrafo}>
            Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor
            de Front-end da Alura. Aqui compartilho vários conhecimentos, espero
            que aprenda algo novo :)
          </p>
        </div>
        <div className={styles.imagens}>
          <img
            className={styles.circuloColorido}
            src={colouredCircle}
            aria-hidden={true}
            alt=""
          />
          <img
            className={styles.minhaFoto}
            src={myPhoto}
            alt="Foto do Antônio Evaldo sorrindo."
          />
        </div>
      </div>
    </>
  );
}
