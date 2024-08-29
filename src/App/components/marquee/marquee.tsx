import styles from "./marquee.module.css";

function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>
        50% Off Sitewide! &nbsp;
        <span className={styles.blinkText}>
          Don't miss out on BIG savings across our entire collection. &#127881;
        </span>
      </div>
    </div>
  );
}

export default Marquee;
