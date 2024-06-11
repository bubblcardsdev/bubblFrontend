import styles from "./marquee.module.css";

function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>
        “All you need is Love 💝 and a Bubbl card to share it!&nbsp;
        <span className={styles.blinkText}>
          Valentines Day Special - Buy 1 get 1 free”
        </span>
      </div>
    </div>
  );
}

export default Marquee;
