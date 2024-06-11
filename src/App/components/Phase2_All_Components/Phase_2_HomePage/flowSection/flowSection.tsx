/* eslint-disable react/no-unknown-property */
import styles from "./flowSection.module.css";

function FlowSection() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <p className={styles.contentContainer}>How It Works</p>
      </div>
      <div className={styles.flowSectionContainer}>
        <div>
          <video
            autoPlay
            loop
            muted
            width={264}
            height={224}
            playsInline
            controls={false}
            preload="auto"
          >
            <source
              src="static/images/video/chooseabubblcard.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className={styles.bubblNumberDiv}>
            <div className={styles.numberDiv}>1</div>
            <div className={styles.flowHeading}>
              Choose A <br />
              Bubbl Card{" "}
            </div>
          </div>
          <div className={styles.line} />

          <p className={styles.flowContent}>
            Choose between our range of Bubbl Basics for a card that suits your
            style. Or Design a custom card. The choice is yours.
          </p>
        </div>
        <div>
          <div>
            <video
              autoPlay
              loop
              muted
              width={264}
              height={224}
              playsInline
              controls={false}
              preload="auto"
            >
              <source
                src="static/images/video/setupyourprofile.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.bubblNumberDiv}>
            <div className={styles.numberDiv}>2</div>
            <div className={styles.secondflowHeading}>Set Up Your Profile</div>
          </div>
          <div className={styles.line} />

          <p className={styles.flowContent}>
            Tap your Bubbl card to your phone to activate the link, follow the
            instructions to create your profile.
          </p>
        </div>
        <div>
          {/* <video autoPlay muted loop width={244} height={204}> */}
          {/* <Image
            src={functionGif}
            alt="connectVideo"
            width={264}
            height={224}
          /> */}
          <video
            autoPlay
            loop
            muted
            width={264}
            height={224}
            playsInline
            controls={false}
            preload="auto"
          >
            <source
              src="static/images/video/StartNetworkinglikeaPro2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* </video> */}
          <div className={styles.bubblNumberDiv}>
            <div className={styles.numberDiv}>3</div>
            <div className={styles.flowHeading}>Network Like A Pro</div>
          </div>
          <div className={styles.line} />
          <p className={styles.flowContent}>
            You can now tap and share your contact info, social media handles,
            and so much more with your own Bubbl!
          </p>
        </div>
      </div>
      {/* RESPONSIVE */}
      <div className={styles.responsiveContainer}>
        <p className={styles.ChooseHeading}>
          <span className={styles.roundCircle}>1</span>&nbsp; Choose A Bubbl
          Card
        </p>
        <div className={styles.lineDiv}>
          <div className={styles.lineResponsive} />
        </div>
        <div className={styles.videCenterDiv}>
          <video autoPlay muted loop width={244} height={204} playsInline>
            <source
              src="static/images/video/chooseabubblcard.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.videCenterDiv}>
          <p className={styles.videoDes}>
            Choose between our range of Bubbl Basics for a card that suits your
            style. Or Design a custom card. The choice is yours
          </p>
        </div>

        {/* SECOND */}

        <p className={styles.ChooseHeading}>
          <span className={styles.roundCircle}>2</span> &nbsp;Set Up Your
          Profile
        </p>
        <div className={styles.lineDiv}>
          <div className={styles.lineResponsive} />
        </div>
        <div className={styles.videCenterDiv}>
          <video autoPlay muted loop width={244} height={204} playsInline>
            <source
              src="static/images/video/setupyourprofile.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.videCenterDiv}>
          <p className={styles.videoDes}>
            Tap your Bubbl card to your phone to activate the link, follow the
            instructions to create your profile
          </p>
        </div>
        {/* THIRD */}
        <p className={styles.ChooseHeading}>
          <span className={styles.roundCircle}>3</span>&nbsp;Network Like A Pro
        </p>
        <div className={styles.lineDiv}>
          <div className={styles.lineResponsive} />
        </div>
        <div className={styles.videCenterDiv}>
          <video autoPlay muted loop width={244} height={204} playsInline>
            <source
              src="static/images/video/StartNetworkinglikeaPro2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* <Image
            src={functionGif}
            alt="connectVideo"
            width={264}
            height={224}
          /> */}
        </div>
        <div className={styles.videCenterDiv}>
          <p className={styles.videoDes}>
            You can now tap and share your contact info, socail media handles
            and so much more with your own Bubbl.
          </p>
        </div>
      </div>
    </div>
  );
}
export default FlowSection;
