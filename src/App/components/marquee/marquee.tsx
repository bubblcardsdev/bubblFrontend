import styles from "./marquee.module.css";

function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>
        <span className={styles.blinkText}>
          {/* Don't miss out on BIG savings across our entire collection. &#127881; */}
          Buy 1 and Get 40% Disount &#127881; &nbsp; Buy 2 and Get 50% Disount
          &nbsp; &#127881; Buy 3 and Get 60% Disount &#127881;
        </span>
      </div>
    </div>
  );
}

export default Marquee;
