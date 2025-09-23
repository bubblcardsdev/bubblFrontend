import styles from "./marquee.module.css";

function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>
        <span className={styles.blinkText}>
          {/* Don't miss out on BIG savings across our entire collection. &#127881; */}
          {/* Buy 1 and Get 40% Discount &#127881; &nbsp; Buy 2 and Get 50% Discount
          &nbsp; &#127881; Buy 3 and Get 60% Discount &#127881; */}
          {/* Independence Day Special! &nbsp;&nbsp;&nbsp; Unlock up to 30% OFF
          &nbsp;&nbsp;&nbsp; Valid till 25th AUG only! */}
          Navaratri Special: 35% Off Site-Wide! Celebrate 9 Days of Savings 🎉🕉️
        </span>
      </div>
    </div>
  );
}

export default Marquee;
