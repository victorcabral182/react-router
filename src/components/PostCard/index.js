import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import MainButton from "components/MainButton";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/posts/${post.id}/capa.png`}
          alt={`Imagem de ${post.titulo}`}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <MainButton>Ler</MainButton>
      </div>
    </Link>
  );
}
