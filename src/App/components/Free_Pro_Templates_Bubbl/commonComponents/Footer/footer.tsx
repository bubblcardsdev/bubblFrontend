/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import footerbg from "../TemplateImages/TemplateCommanAsstes/footer_image/Footer_image_1x.jpg";
import styles from "./footer.module.css";

export default function FooterBg() {
    return (
        <div
            className={styles.black_bg}
            style={{
                backgroundImage: `url(${footerbg.src})`,
            }}
        >
            <p>Join the bubbl community and<br />start saving trees now</p>
        </div>
    );
}
