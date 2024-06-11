/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import testContent from "../../../../images/Bubble-website_assets/testimonials/1x.png";
import quote from "../../../../images/Bubble-website_assets/testimonials/quote.svg";
import testimonialImg6 from "../../../../images/Bubble-website_assets/testimonials/anath.png";
import testimonialImg7 from "../../../../images/Bubble-website_assets/testimonials/mithun.png";
import testimonialImg4 from "../../../../images/Bubble-website_assets/testimonials/benny.png";
import testimonialImg5 from "../../../../images/Bubble-website_assets/testimonials/varsha.png";
import testimonialImg2 from "../../../../images/Bubble-website_assets/testimonials/1.png";
import testimonialImg3 from "../../../../images/Bubble-website_assets/testimonials/2.png";
import testimonialImg1 from "../../../../images/Bubble-website_assets/testimonials/3.png";
import testimonialImg9 from "../../../../images/Bubble-website_assets/testimonials/4.png";
import testimonialImg8 from "../../../../images/Bubble-website_assets/testimonials/5.png";
import styles from "./CreateProfile.module.css";

type TestimonialT = {
  id: number;
  imgSrc: StaticImageData;
  content: string;
  name: string;
};

const testimonialData = [
  {
    id: 1,
    imgSrc: testimonialImg6,
    content:
      "Bubbl has completely changed the way I network. With their innovative NFC enabled cards, I no longer have to carry around stacks of paper business cards. I love how customizable and easy to use Bubbl is - it's the perfect solution for the modern-day entrepreneur.",
    name: "Ananth Karthik",
  },
  {
    id: 2,
    imgSrc: testimonialImg1,
    content:
      "I was hesitant to switch to digital business cards, but Bubbl made the transition seamless. I love being able to manage multiple profiles and include links to all my social handles and portfolios in one place. Bubbl is truly a game-changer for networking.",
    name: " Sandya",
  },
  {
    id: 3,
    imgSrc: testimonialImg3,
    content:
      "As someone who's passionate about sustainability, I appreciate how Bubbl is easy on the planet. The fact that I can share my contact information without using paper cards is a huge win in my book. Plus, the design options are endless - I've had so much fun customizing my Bubbl profiles!",
    name: "Arun Prabhu",
  },
  {
    id: 4,
    imgSrc: testimonialImg7,
    content:
      "I was blown away by the ease of use and convenience of Bubbl. Being able to simply tap my phone to someone else's to share my contact information has saved me so much time and hassle. Bubbl is definitely the future of networking.",
    name: " Mithun D",
  },
  {
    id: 5,
    imgSrc: testimonialImg5,
    content:
      "I've always been someone who loves trying out new tech, and Bubbl did not disappoint. Their NFC enabled cards and pop sockets are not only cutting-edge, but also functional and practical. I can't imagine going back to paper business cards now that I've discovered Bubbl.",
    name: " Varsha Singhvi",
  },
  {
    id: 6,
    imgSrc: testimonialImg2,
    content:
      "As a freelancer, I often struggle to stand out in a sea of other professionals. Bubbl has given me an edge by providing a sleek and innovative way to share my portfolio and contact information. I've received so many compliments on my Bubbl card, and it's definitely helped me make some valuable connections.",
    name: " Praveen",
  },
  {
    id: 7,
    imgSrc: testimonialImg8,
    content:
      "I was pleasantly surprised by the quality and beauty of Bubbl's design options. The bamboo and metal cards are especially stunning and give off a high-end, professional vibe. And the fact that they're also so affordable is a huge plus! I've received so many compliments on my Bubbl card, and I always recommend it to anyone looking for a unique and stylish way to network.",
    name: " Husaini",
  },
  {
    id: 8,
    imgSrc: testimonialImg4,
    content:
      "One of the things I love most about Bubbl is how user-friendly it is. Even if you're not tech-savvy, you can easily create and manage multiple profiles with all of your important information. The design options are also really fun and creative - I've gotten so many compliments on my Bubbl card!",
    name: "Benial Pearl",
  },
  {
    id: 9,
    imgSrc: testimonialImg9,
    content:
      "Bubbl is not only a great tool for networking, but also a great way to showcase your personal brand. With the ability to include links to your social media and portfolio, you can really make a statement and stand out from the crowd. I highly recommend Bubbl to anyone looking to elevate their professional image.",
    name: "Vasu",
  },
] as const;

export default function Testimonial() {
  const [userTestimonial, setUserTestimonial] = useState<TestimonialT>(
    testimonialData[0]
  );
  return (
    <div>
      <div className={`d-flex justify-content-between ${styles.testimonial}`}>
        {testimonialData.map((testimonial) => (
          <Image
            alt="bubbl"
            width="70%"
            height="100%"
            className={styles.testi_img}
            style={{ cursor: "pointer" }}
            src={testimonial.imgSrc}
            onClick={() => setUserTestimonial(testimonial)}
          />
        ))}
      </div>

      <div className={styles.maintest__block}>
        <Col xl={10} lg={10} md={12} className={styles.mainTest}>
          <Col xl={2} lg={2} md={3} className={styles.test__img}>
            <Image src={userTestimonial.imgSrc} alt="bubbl" />
          </Col>
          <Col
            xl={7}
            lg={8}
            md={8}
            className={styles.testcontent}
            style={{
              backgroundImage: `url(${testContent.src})`,
            }}
          >
            <Image src={quote} alt="bubbl" />
            <p className={styles.quotecont}>{userTestimonial.content}</p>
            <h4 className={styles.customer}>{userTestimonial.name}</h4>
          </Col>
        </Col>
      </div>

      {/* Responsive slider */}
      <div className={styles.slider}>
        <Carousel indicators={false}>
          <Carousel.Item interval={7000}>
            <Col sm={12} xs={12} className={styles.mainTest}>
              <Col sm={3} xs={3} className={styles.test__img}>
                <Image src={testimonialImg1} alt="bubbl" />
              </Col>
              <Col
                sm={9}
                xs={8}
                className={styles.testcontent}
                style={{
                  backgroundImage: `url(${testContent.src})`,
                }}
              >
                <div className={styles.testimonial_slider}>
                  <Image src={quote} alt="bubbl" />

                  <p className={styles.quotecont}>
                    Bubbl has completely changed the way I network. With their
                    innovative NFC enabled cards, I no longer must carry around
                    stacks of paper business cards. I love how customizable and
                    easy to use Bubbl is - it's the perfect solution for the
                    modern-day entrepreneur.
                  </p>
                  <h4 className={styles.customer}>Sandya</h4>
                </div>
              </Col>
            </Col>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Col sm={12} xs={12} className={styles.mainTest}>
              <Col sm={3} xs={3} className={styles.test__img}>
                <Image src={testimonialImg2} alt="bubbl" />
              </Col>
              <Col
                sm={9}
                xs={8}
                className={styles.testcontent}
                style={{
                  backgroundImage: `url(${testContent.src})`,
                }}
              >
                <div className={styles.testimonial_slider}>
                  <Image src={quote} alt="bubbl" />

                  <p className={styles.quotecont}>
                    I was hesitant to switch to digital business cards, but
                    Bubbl made the transition seamless. I love being able to
                    manage multiple profiles and include links to all my social
                    handles and portfolios in one place. Bubbl is truly a
                    game-changer for networking.
                  </p>
                  <h4 className={styles.customer}>Praveen</h4>
                </div>
              </Col>
            </Col>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Col sm={12} xs={12} className={styles.mainTest}>
              <Col sm={3} xs={3} className={styles.test__img}>
                <Image src={testimonialImg3} alt="bubbl" />
              </Col>
              <Col
                sm={9}
                xs={8}
                className={styles.testcontent}
                style={{
                  backgroundImage: `url(${testContent.src})`,
                }}
              >
                <div className={styles.testimonial_slider}>
                  <Image src={quote} alt="bubbl" />

                  <p className={styles.quotecont}>
                    As someone who's passionate about sustainability, I
                    appreciate how Bubbl is easy on the planet. The fact that I
                    can share my contact information without using paper cards
                    is a huge win in my book. Plus, the design options are
                    endless - I've had so much fun customizing my Bubbl
                    profiles!
                  </p>
                  <h4 className={styles.customer}>Arun Prabhu</h4>
                </div>
              </Col>
            </Col>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Col sm={12} xs={12} className={styles.mainTest}>
              <Col sm={3} xs={3} className={styles.test__img}>
                <Image src={testimonialImg4} alt="bubbl" />
              </Col>
              <Col
                sm={9}
                xs={8}
                className={styles.testcontent}
                style={{
                  backgroundImage: `url(${testContent.src})`,
                }}
              >
                <div className={styles.testimonial_slider}>
                  <Image src={quote} alt="bubbl" />

                  <p className={styles.quotecont}>
                    I was blown away by the ease of use and convenience of
                    Bubbl. Being able to simply tap my phone to someone else's
                    to share my contact information has saved me so much time
                    and hassle. Bubbl is definitely the future of networking.
                  </p>
                  <h4 className={styles.customer}>Benial Pearl</h4>
                </div>
              </Col>
            </Col>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Col sm={12} xs={12} className={styles.mainTest}>
              <Col sm={3} xs={3} className={styles.test__img}>
                <Image src={testimonialImg5} alt="bubbl" />
              </Col>
              <Col
                sm={9}
                xs={8}
                className={styles.testcontent}
                style={{
                  backgroundImage: `url(${testContent.src})`,
                }}
              >
                <div className={styles.testimonial_slider}>
                  <Image src={quote} alt="bubbl" />

                  <p className={styles.quotecont}>
                    I've always been someone who loves trying out new tech, and
                    Bubbl did not disappoint. Their NFC enabled cards and pop
                    sockets are not only cutting-edge, but also functional and
                    practical. I can't imagine going back to paper business
                    cards now that I've discovered Bubbl.
                  </p>
                  <h4 className={styles.customer}>Varsha Singhvi</h4>
                </div>
              </Col>
            </Col>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Col sm={12} xs={12} className={styles.mainTest}>
              <Col sm={3} xs={3} className={styles.test__img}>
                <Image src={testimonialImg6} alt="bubbl" />
              </Col>
              <Col
                sm={9}
                xs={8}
                className={styles.testcontent}
                style={{
                  backgroundImage: `url(${testContent.src})`,
                }}
              >
                <div className={styles.testimonial_slider}>
                  <Image src={quote} alt="bubbl" />

                  <p className={styles.quotecont}>
                    As a freelancer, I often struggle to stand out in a sea of
                    other professionals. Bubbl has given me an edge by providing
                    a sleek and innovative way to share my portfolio and contact
                    information. I've received so many compliments on my Bubbl
                    card, and it's definitely helped me make some valuable
                    connections.
                  </p>
                  <h4 className={styles.customer}>Ananth Karthik</h4>
                </div>
              </Col>
            </Col>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Col sm={12} xs={12} className={styles.mainTest}>
              <Col sm={3} xs={3} className={styles.test__img}>
                <Image src={testimonialImg7} alt="bubbl" />
              </Col>
              <Col
                sm={9}
                xs={8}
                className={styles.testcontent}
                style={{
                  backgroundImage: `url(${testContent.src})`,
                }}
              >
                <div className={styles.testimonial_slider}>
                  <Image src={quote} alt="bubbl" />

                  <p className={styles.quotecont}>
                    I was pleasantly surprised by the quality and beauty of
                    Bubbl's design options. The bamboo and metal cards are
                    especially stunning and give off a high-end, professional
                    vibe. And the fact that they're also so affordable is a huge
                    plus! I've received so many compliments on my Bubbl card,
                    and I always recommend it to anyone looking for a unique and
                    stylish way to network.
                  </p>
                  <h4 className={styles.customer}>Mithun D</h4>
                </div>
              </Col>
            </Col>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Col sm={12} xs={12} className={styles.mainTest}>
              <Col sm={3} xs={3} className={styles.test__img}>
                <Image src={testimonialImg8} alt="bubbl" />
              </Col>
              <Col
                sm={9}
                xs={8}
                className={styles.testcontent}
                style={{
                  backgroundImage: `url(${testContent.src})`,
                }}
              >
                <div className={styles.testimonial_slider}>
                  <Image src={quote} alt="bubbl" />

                  <p className={styles.quotecont}>
                    One of the things I love most about Bubbl is how
                    user-friendly it is. Even if you're not tech-savvy, you can
                    easily create and manage multiple profiles with all of your
                    important information. The design options are also really
                    fun and creative - I've gotten so many compliments on my
                    Bubbl card!
                  </p>
                  <h4 className={styles.customer}>Husaini</h4>
                </div>
              </Col>
            </Col>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Col sm={12} xs={12} className={styles.mainTest}>
              <Col sm={3} xs={3} className={styles.test__img}>
                <Image src={testimonialImg9} alt="bubbl" />
              </Col>
              <Col
                sm={9}
                xs={8}
                className={styles.testcontent}
                style={{
                  backgroundImage: `url(${testContent.src})`,
                }}
              >
                <div className={styles.testimonial_slider}>
                  <Image src={quote} alt="bubbl" />

                  <p className={styles.quotecont}>
                    Bubbl is not only a great tool for networking, but also a
                    great way to showcase your personal brand. With the ability
                    to include links to your social media and portfolio, you can
                    really make a statement and stand out from the crowd. I
                    highly recommend Bubbl to anyone looking to elevate their
                    professional image.
                  </p>
                  <h4 className={styles.customer}>Vasu</h4>
                </div>
              </Col>
            </Col>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
