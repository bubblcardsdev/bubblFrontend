/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import HomePageNavigation from "src/App/components/Phase2_All_Components/Phase_2_HomePage/navigationHome/homeNavigation";
import { removeCheckLogin } from "src/App/helpers/local-storage";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import Business from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/business.png";
import Event from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/events.png";
import Individuals from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/individuals.png";
import Retail from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/retail.png";
import University from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/univertise.png";
import FunctionSection from "../../Phase_2_HomePage/functionSection/functionSection";
import TestimonialComponent from "../../Phase_2_HomePage/testimonialSection/testimonial";
import Footer from "../../Phase2_Footer/footer";
import styles from "./bubblFor.module.css";

function ParallaxWrapper({ children }: any) {
  return (
    <Parallax speed={10} style={{ transform: "translateY(-30%)" }}>
      {children}
    </Parallax>
  );
}

function BubblForComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const router = useRouter();

  useEffect(() => {
    removeCheckLogin();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topPositions = [10, 3, 10];
  const sizes = [20, 45, 45];
  const rightPositions = [0, -34, 0];
  const leftPosition = [0, 0, 1];
  const showGradients = [true, true, false];
  return (
    <section className={styles.shopPageSection}>
      <div className={styles.webSection}>
        <div className={styles.web}>
          <div className={styles.shopPageBackSection}>
            <div className={styles.navigateDiv}>
              <HomePageNavigation />
            </div>
            {/* <ParallaxWrapper>
            <div className={styles.netWorkingBackground}>
              <ParallaxBackground
                scrollPosition={scrollPosition}
                topPositions={topPositions}
                rightPositions={rightPositions}
                sizes={sizes}
                leftPositions={leftPosition}
                showImage1
                showImage2
                showImage3
                showGradients={showGradients}
              />
            </div>
          </ParallaxWrapper> */}
            <div className={styles.shopPageDiv}>
              <div className={styles.bubblHeading}>
                <p className={styles.networkHead}>The Future Of Networking</p>
                <p className={styles.bubblSubHead}>
                  Learn more on how you can unleash a new era of connectivity,
                  build connections and showcase your offerings using our
                  products tailored for businesses, individuals, events,
                  universities, retail & more…
                </p>
              </div>
            </div>
          </div>

          {/* Image and Content  */}
          <div className={styles.imageContent}>
            <div className={styles.rowContainer}>
              <div className={styles.firstColumn}>
                <div className={styles.firstColumnContent}>
                  <h1>Business</h1>
                  <p>
                    In today&apos;s rapidly evolving business environment,
                    staying ahead means embracing innovation at every turn.
                    Bubbl&apos;s NFC business cards represent the pinnacle of
                    efficiency and security in professional networking. These
                    state-of-the-art, customizable cards empower your business
                    to leap into the hands of your clients through seamless,
                    contactless information exchange. With just a simple tap,
                    watch as networking transforms, offering a swift and secure
                    transition of your contact details, portfolio, and digital
                    presence directly to the smartphones of your clientele.
                    Embrace the future of connectivity with Bubbl, and place
                    your business at the forefront of the digital age. <br />
                    <span
                      className={styles.learnMoreContainer}
                      onClick={() => router.push("/contact")}
                    >
                      Learn more
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.businessImageDiv}>
                  <Image src={Business} alt="Business" />
                </div>
              </div>
            </div>

            {/* SECOND */}

            <div className={`${styles.rowContainer} ${styles.rowContainerTop}`}>
              <div className={styles.firstColumn}>
                <div className={styles.businessImageDiv}>
                  <Image src={University} alt="Individuals" />
                </div>
              </div>

              <div className={styles.firstColumnContent}>
                <h1>Individuals</h1>
                <p>
                  Imagine the freedom of carrying your entire professional
                  identity in one sleek card. Bubbl introduces this
                  revolutionary convenience to individuals, transforming the way
                  you network, share your portfolio, and make those
                  all-important first impressions. Our NFC-enabled cards allow
                  for the instantaneous transmission of your curated profiles
                  with just a single tap against a smartphone. Personalize your
                  Bubbl card to match your unique persona, crafting distinct
                  profiles for various professional interactions. Whether
                  you&apos;re an artist, entrepreneur, freelancer, or
                  professional, Bubbl cards are designed to encapsulate and
                  convey your professional essence effortlessly. Step into a
                  world where networking is boundless, personal, and as easy as
                  a tap. Make every introduction unforgettable with Bubbl.
                  <br />
                  <span
                    className={styles.learnMoreContainer}
                    onClick={() => router.push("/contact")}
                  >
                    Learn more
                  </span>
                </p>
              </div>
            </div>

            {/* third */}
            <div className={`${styles.rowContainer} ${styles.rowContainerTop}`}>
              <div className={styles.firstColumn}>
                <div className={styles.firstColumnContent}>
                  <h1>Events</h1>
                  <p>
                    Elevate your events with Bubbl&apos;s NFC technology, a
                    gateway to seamless networking and enhanced engagement. Our
                    smart products turn every interaction into an opportunity,
                    facilitating instant access to essential event
                    information—agendas, schedules, venues, and more—with just a
                    tap. Bubbl cards are designed to connect the right people
                    and information effortlessly, ensuring every attendee can
                    make the most out of every event. From capturing leads to
                    enriching experiences, Bubbl transforms ordinary events into
                    dynamic networking hubs. Make your next event unforgettable
                    with the power of Bubbl. <br />
                    <span
                      className={styles.learnMoreContainer}
                      onClick={() => router.push("/contact")}
                    >
                      Learn more
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.businessImageDiv}>
                  <Image src={Individuals} alt="Events" />
                </div>
              </div>
            </div>
            {/* FOUR */}
            <div className={`${styles.rowContainer} ${styles.rowContainerTop}`}>
              <div className={styles.firstColumn}>
                <div className={styles.businessImageDiv}>
                  <Image src={Retail} alt="University" />
                </div>
              </div>
              <div>
                <div className={styles.firstColumnContent}>
                  <h1>University</h1>
                  <p>
                    Bubbl is revolutionizing the university experience by
                    introducing NFC-enabled cards that do more than just student
                    identification; they&apos;re a passport to the entire
                    campus. Whether it&apos;s library access, coursework
                    sharing, resume distribution at career fairs, or
                    facilitating attendance and participation in campus
                    activities, Bubbl cards streamline these interactions with
                    simplicity and style. This innovative tool not only enhances
                    the efficiency and security of campus operations but also
                    injects a dose of &apos;future-ready&apos; swag into the
                    daily lives of students and faculty. Bubbl is where
                    technology meets convenience, propelling the academic
                    journey forward with every tap. <br />
                    <span
                      className={styles.learnMoreContainer}
                      onClick={() => router.push("/contact")}
                    >
                      Learn more
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <ParallaxWrapper>
              <div className={styles.netWorkingBackground}>
                <ParallaxBackground
                  scrollPosition={scrollPosition / 10}
                  topPositions={topPositions}
                  rightPositions={rightPositions}
                  sizes={sizes}
                  leftPositions={leftPosition}
                  showImage1={false}
                  showImage2
                  showImage3={false}
                  showGradients={showGradients}
                />
              </div>
            </ParallaxWrapper>
            {/* Five */}
            <div className={`${styles.rowContainer} ${styles.rowContainerTop}`}>
              <div className={styles.firstColumn}>
                <div className={styles.firstColumnContent}>
                  <h1>Retail</h1>
                  <p>
                    In the dynamic world of retail, Bubbl&apos;s NFC cards are
                    transforming how businesses connect with their customers.
                    These versatile cards serve multiple purposes: from
                    providing instant product information and serving as an
                    innovative marketing tool, to enhancing loyalty programs and
                    validating product authenticity. Beyond transactions, they
                    enable retailers to gather valuable feedback and user data,
                    offering insights that can significantly improve the
                    customer experience. By integrating Bubbl cards, retail
                    companies not only streamline operations but also foster
                    deeper engagement and loyalty, making every customer
                    interaction more meaningful and personalized. With Bubbl,
                    the future of retail is not just about selling
                    products—it&apos;s about creating unforgettable shopping
                    experiences. <br />
                    <span
                      className={styles.learnMoreContainer}
                      onClick={() => router.push("/contact")}
                    >
                      Learn more
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.businessImageDiv}>
                  <Image src={Event} alt="Retail" />
                </div>
              </div>
            </div>

            {/* Section */}
            <section className={styles.functionSectionContainer}>
              <FunctionSection />
            </section>

            {/* {testimonials} */}
            <section className={styles.testimonialSectionContainer}>
              <TestimonialComponent />
            </section>
          </div>
        </div>
        {/* FOOTER */}
        <section className={styles.footerSectionResp}>
          <div className={styles.footerSectionInside}>
            <Footer />
          </div>
        </section>
      </div>

      {/* {responsive} */}

      <div className={styles.responsive}>
        <div className={styles.respSection}>
          <div className={styles.shopPageBackSection}>
            <div className={styles.navigateDiv}>
              <HomePageNavigation />
            </div>

            <div className={styles.shopPageDiv}>
              <div className={styles.bubblHeading}>
                <p className={styles.networkHead}>The Future Of Networking</p>
                <p className={styles.bubblSubHead}>
                  Learn more on how you can unleash a new era of connectivity,
                  build connections and showcase your offerings using our
                  products tailored for businesses, individuals, events,
                  universities, retail & more…
                </p>
              </div>
            </div>
          </div>
          <ParallaxWrapper>
            <div className={styles.netWorkingBackground}>
              <ParallaxBackground
                scrollPosition={scrollPosition / 10}
                topPositions={topPositions}
                rightPositions={rightPositions}
                sizes={sizes}
                leftPositions={leftPosition}
                showImage1={false}
                showImage2
                showImage3
                showGradients={showGradients}
              />
            </div>
          </ParallaxWrapper>
          {/* Image and Content  */}
          <div className={styles.imageContent}>
            <div className={styles.rowContainer}>
              <div className={styles.firstColumn}>
                <div className={styles.firstColumnContent}>
                  <h1>Business</h1>
                  <p>
                    Elevate your business to this fast paced technically
                    advanced world with a Business card that aids contactless
                    information sharing which is both efficient and secure.
                    These customizable card can bring your business to the
                    fingertips of your clients with a simple tap and go
                    technology. <br />
                    <span
                      className={styles.learnMoreContainer}
                      onClick={() => router.push("/contact")}
                    >
                      Learn more
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.businessImageDivResponsive}>
                  <Image src={Business} alt="Business" />
                </div>
              </div>
            </div>

            {/* SECOND */}

            <div className={`${styles.rowContainer} ${styles.rowContainerTop}`}>
              <div className={styles.firstColumn} />
              <div>
                <div className={styles.firstColumnContent}>
                  <h1>Individuals</h1>
                  <p>
                    With the convenience of carrying just one card with you,
                    Bubbl cards can be useful for sharing your portfolio with a
                    single tap and networking has been easier. Individuals can
                    personalize their cards to reflect their persona and make a
                    great first impression <br />
                    <span
                      className={styles.learnMoreContainer}
                      onClick={() => router.push("/contact")}
                    >
                      Learn more
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.businessImageDivResponsive}>
                <Image src={University} alt="Individuals" />
              </div>
            </div>

            {/* third */}
            <div className={`${styles.rowContainer} ${styles.rowContainerTop}`}>
              <div className={styles.firstColumn}>
                <div className={styles.firstColumnContent}>
                  <h1>Events</h1>
                  <p>
                    Lead generation and seamless networking can be made possible
                    with NFC business cards. It increases engagement and creates
                    networking opportunities with the right stream of audience.
                    Information regarding Event Agendas, schedules , event
                    details, venues etc can be shared via NFC cards. <br />
                    <span
                      className={styles.learnMoreContainer}
                      onClick={() => router.push("/contact")}
                    >
                      Learn more
                    </span>
                  </p>
                </div>
                <ParallaxWrapper>
                  <div className={styles.netWorkingBackground}>
                    <ParallaxBackground
                      scrollPosition={scrollPosition}
                      topPositions={topPositions}
                      rightPositions={rightPositions}
                      sizes={sizes}
                      leftPositions={leftPosition}
                      showImage1={false}
                      showImage2
                      showImage3={false}
                      showGradients={showGradients}
                    />
                  </div>
                </ParallaxWrapper>
              </div>
              <div>
                <div className={styles.businessImageDivResponsive}>
                  <Image src={Individuals} alt="Events" />
                </div>
              </div>
            </div>
            {/* FOUR */}
            <div className={`${styles.rowContainer} ${styles.rowContainerTop}`}>
              <div className={styles.firstColumn} />
              <div>
                <div className={styles.firstColumnContent}>
                  <h1>University</h1>
                  <p>
                    Bubbl cards can be used for student Identification and
                    various campus activities. It can be used for Libraries
                    ,sharing Course work with fellow mates, student engagement
                    activities and so on. Bubbl offers the right blend of
                    technology and swag can keep the students engaged. <br />
                    <span
                      className={styles.learnMoreContainer}
                      onClick={() => router.push("/contact")}
                    >
                      Learn more
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.businessImageDivResponsive}>
                <Image src={Retail} alt="University" />
              </div>
            </div>
            {/* Five */}
            <div className={`${styles.rowContainer} ${styles.rowContainerTop}`}>
              <div className={styles.firstColumn}>
                <div className={styles.firstColumnContent}>
                  <h1>Retail</h1>
                  <p>
                    Retail industry can greatly benefit from NFC Cards. The
                    cards can be used for product information, loyalty programs
                    , to validate the authenticity of the product, collect
                    feedback along with user data which can replace the
                    traditional user engaging system. <br />
                    <span
                      className={styles.learnMoreContainer}
                      onClick={() => router.push("/contact")}
                    >
                      Learn more
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <div className={styles.businessImageDivResponsive}>
                  <Image src={Event} alt="Retail" />
                </div>
              </div>
            </div>

            {/* Section */}

            <section className={styles.functionSectionContainer}>
              <FunctionSection />
            </section>

            <ParallaxWrapper>
              <div className={styles.netWorkingBackground}>
                <ParallaxBackground
                  scrollPosition={scrollPosition}
                  topPositions={topPositions}
                  rightPositions={rightPositions}
                  sizes={sizes}
                  leftPositions={leftPosition}
                  showImage1={false}
                  showImage2
                  showImage3={false}
                  showGradients={showGradients}
                />
              </div>
            </ParallaxWrapper>
            {/* {testimonials} */}
            <section className={styles.testimonialSectionContainer}>
              <TestimonialComponent />
            </section>
          </div>

          <section className={styles.footerSection}>
            <div className={styles.footerSectionInside}>
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
export default BubblForComponent;
