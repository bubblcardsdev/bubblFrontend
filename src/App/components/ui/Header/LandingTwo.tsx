import LoaderScreen from "../../lottie/lottie";
import NavBar from "../NavBar/_navbar";
import CardSlider from "./cardSlider";
import styles from "./header.module.css";
import ProfileDevice from "./profileDevice";
import WorkFlow from "./workFlow";

function LandingTwo() {
  return (
    <LoaderScreen>
      <div className={styles.headerBackgrnd}>
        <NavBar />
        <CardSlider />
      </div>
      <ProfileDevice />
      <WorkFlow />
    </LoaderScreen>
  );
}
export default LandingTwo;
