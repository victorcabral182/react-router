import styles from "./MainButton.module.css";

export default function MainButton({ children }) {
  return (
    <>
      <button className={styles.botaoPrincipal}>{children}</button>
    </>
  );
}
