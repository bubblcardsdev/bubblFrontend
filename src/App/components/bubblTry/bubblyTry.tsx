import styles from "./bubblTry.module.css";

export default function Bubbltry() {
  return (
    <div className={styles.bubbl_try}>
      <p className={styles.bubbl}>Bubbl</p>
      <div className={styles.line} />
      <button type="button" className={styles.trybubbtn}>
        Try Bubbl Now !
      </button>
    </div>
  );
}
