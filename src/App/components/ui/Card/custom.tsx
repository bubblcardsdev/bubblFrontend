/* eslint-disable react/self-closing-comp */
import Image from "next/image";

import cards from "../../../../../public/homeShopPage/bubbl_team_card/tm/blue_team_card3x.png";
import styles from "./cards.module.css";

export default function Customcards() {
  return (
    <div className={styles.cardOnes_custom}>
      <div className={styles.cards_prod_one}>
        <Image src={cards} alt="bubbl" />
      </div>
    </div>
  );
}
