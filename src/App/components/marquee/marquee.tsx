import styles from "./marquee.module.css";

function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>
        “Let's celebrate the triumph of courage and determination on this
        Independence Day!! &nbsp;
        <span className={styles.blinkText}>
          Join the revolution, Enjoy upto 50% off site wide” &#127881;
        </span>
      </div>
    </div>
  );
}

export default Marquee;
