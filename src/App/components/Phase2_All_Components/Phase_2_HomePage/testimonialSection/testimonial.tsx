/* eslint-disable react/no-array-index-key */
import "swiper/css";
import "swiper/css/navigation";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import arrow from "../../../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import ananth from "../../../../../../images/Phase_2_All_Assets/testimonial/people/ananth.png";
import arun from "../../../../../../images/Phase_2_All_Assets/testimonial/people/arun.png";
import benny from "../../../../../../images/Phase_2_All_Assets/testimonial/people/benny.png";
import husaini from "../../../../../../images/Phase_2_All_Assets/testimonial/people/husaini.png";
import mithun from "../../../../../../images/Phase_2_All_Assets/testimonial/people/mithun.png";
import praveen from "../../../../../../images/Phase_2_All_Assets/testimonial/people/praveen.png";
import sandya from "../../../../../../images/Phase_2_All_Assets/testimonial/people/sandya.png";
import varsha from "../../../../../../images/Phase_2_All_Assets/testimonial/people/varsha.png";
import vasu from "../../../../../../images/Phase_2_All_Assets/testimonial/people/vasu.png";
import quote from "../../../../../../images/Phase_2_All_Assets/testimonial/quote.svg";
import styles from "./testimonial.module.css";

const testimonialData = [
  {
    id: 1,
    imgSrc: ananth,
    content:
      "Bubbl has completely changed the way I network. With their innovative NFC enabled cards, I no longer have to carry around stacks of paper business cards. I love how customizable and easy to use Bubbl is - it's the perfect solution for the modern-day entrepreneur.",
    name: "Ananth Karthik",
  },
  {
    id: 2,
    imgSrc: sandya,
    content:
      "I was hesitant to switch to digital business cards, but Bubbl made the transition seamless. I love being able to manage multiple profiles and include links to all my social handles and portfolios in one place. Bubbl is truly a game-changer for networking.",
    name: " Sandya",
  },
  {
    id: 3,
    imgSrc: arun,
    content:
      "As someone who's passionate about sustainability, I appreciate how Bubbl is easy on the planet. The fact that I can share my contact information without using paper cards is a huge win in my book. Plus, the design options are endless - I've had so much fun customizing my Bubbl profiles!",
    name: "Arun Prabhu",
  },
  {
    id: 4,
    imgSrc: mithun,
    content:
      "I was blown away by the ease of use and convenience of Bubbl. Being able to simply tap my phone to someone else's to share my contact information has saved me so much time and hassle. Bubbl is definitely the future of networking.",
    name: " Mithun D",
  },
  {
    id: 5,
    imgSrc: varsha,
    content:
      "I've always been someone who loves trying out new tech, and Bubbl did not disappoint. Their NFC enabled cards and pop sockets are not only cutting-edge, but also functional and practical. I can't imagine going back to paper business cards now that I've discovered Bubbl.",
    name: " Varsha Singhvi",
  },
  {
    id: 6,
    imgSrc: praveen,
    content:
      "As a freelancer, I often struggle to stand out in a sea of other professionals. Bubbl has given me an edge by providing a sleek and innovative way to share my portfolio and contact information. I've received so many compliments on my Bubbl card, and it's definitely helped me make some valuable connections.",
    name: " Praveen",
  },
  {
    id: 7,
    imgSrc: husaini,
    content:
      "I was pleasantly surprised by the quality and beauty of Bubbl's design options. The bamboo and metal cards are especially stunning and give off a high-end, professional vibe. And the fact that they're also so affordable is a huge plus! I've received so many compliments on my Bubbl card, and I always recommend it to anyone looking for a unique and stylish way to network.",
    name: " Husaini",
  },
  {
    id: 8,
    imgSrc: benny,
    content:
      "One of the things I love most about Bubbl is how user-friendly it is. Even if you're not tech-savvy, you can easily create and manage multiple profiles with all of your important information. The design options are also really fun and creative - I've gotten so many compliments on my Bubbl card!",
    name: "Benial Pearl",
  },
  {
    id: 9,
    imgSrc: vasu,
    content:
      "Bubbl is not only a great tool for networking, but also a great way to showcase your personal brand. With the ability to include links to your social media and portfolio, you can really make a statement and stand out from the crowd. I highly recommend Bubbl to anyone looking to elevate their professional image.",
    name: "Vasu",
  },
] as const;

export default function Testimonial() {
  //   const [userTestimonial, setUserTestimonial] = useState<TestimonialT>(
  //     testimonialData[0]
  //   );
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(2);
  const [swiper, setSwiper] = useState<any>(null);
  const [swiperResp, setSwiperResp] = useState<any>(null);
  const [userTestimonial, setUserTestimonial] = useState<{
    id: number;
    imgSrc: StaticImageData;
    content: string;
    name: string;
  }>(testimonialData[2]);

  const handleSwiper = (swipers: any) => {
    if (!swiper) {
      setSwiper(swipers);
    }
  };

  const handleSwiperResp = (swipers: any) => {
    if (!swiper) {
      setSwiperResp(swipers);
    }
  };

  const nextTestimonial = () => {
    let newIndex = currentTestimonialIndex + 1;
    if (newIndex === testimonialData.length) {
      newIndex = 0;
    }

    if (swiper) {
      setCurrentTestimonialIndex(newIndex);
      setUserTestimonial(testimonialData[newIndex]);
      swiper.slideTo(newIndex);
      swiperResp.slideTo(newIndex);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [userTestimonial]);
  const topPositions = [100, 205, 200];
  const sizes = [65, 32, 45];
  const rightPositions = [0, -50, 0];
  const leftPosition = [-15, 0, -10];
  const showGradients = [false, true, false];

  // const userTestimonial = testimonialData[currentTestimonialIndex];

  return (
    <div className={styles.testimonial_container}>
      {/* <div className={`d-flex justify-content-between ${styles.testimonial}`} /> */}
      <div className={styles.testimonial_heading}>
        <p className={styles.testimonital_title_line1}>Bubbl Testimonials</p>
        <p className={styles.testimonital_title_line2}>
          Feedback from our community
        </p>
      </div>
      <div className={styles.backgroundContainer}>
        <ParallaxBackground
          scrollPosition={scrollPosition / 10}
          topPositions={topPositions}
          sizes={sizes}
          rightPositions={rightPositions}
          leftPositions={leftPosition}
          showImage1={false}
          showImage2
          showImage3
          showGradients={showGradients}
        />
      </div>
      <div className={styles.maintest__block}>
        <div className={styles.swiper_contrainer}>
          <Swiper
            loop
            coverflowEffect={{
              rotate: 0,
              stretch: 30,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            slidesPerView={2.1}
            effect="coverflow"
            centeredSlides
            modules={[EffectCoverflow, Pagination]}
            className={styles.imageContainer}
            onSwiper={handleSwiper}
            onSwipe={nextTestimonial}
            allowTouchMove={false}
            initialSlide={2}
          >
            {testimonialData.map((slide, index) => (
              <div>
                <SwiperSlide key={index}>
                  <Image src={slide.imgSrc} alt={`Testimonial ${index}`} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        <div className={styles.testcontent}>
          <h4 className={styles.quotes}>&quot;</h4>
          <p className={styles.quotecont}>{userTestimonial?.content}</p>
          <div className={styles.name_container}>
            <h4 className={styles.customer}>{userTestimonial?.name}</h4>
          </div>
        </div>
        <div className={styles.backgroundImage}>
          <Image src={quote} alt="bubbl" />
        </div>
        <div className={styles.arrow_container}>
          <Image
            height="50px"
            width="50px"
            src={arrow}
            alt="arrow"
            className={styles.testNextIcon}
            onClick={nextTestimonial}
          />
        </div>
      </div>
      {/** Responsive */}
      <div className={styles.maintest__block_resp}>
        <div className={styles.swiper_contrainer_resp}>
          <Swiper
            loop
            coverflowEffect={{
              rotate: 0,
              stretch: 30,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            slidesPerView={2.1}
            effect="coverflow"
            centeredSlides
            modules={[EffectCoverflow, Pagination]}
            className={styles.imageContainer}
            onSwiper={handleSwiperResp}
            allowTouchMove={false}
            initialSlide={2}
          >
            {testimonialData.map((slide, index) => (
              <div>
                <SwiperSlide key={index}>
                  <Image src={slide.imgSrc} alt={`Testimonial ${index}`} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        <div className={styles.testcontent}>
          <h4 className={styles.quotes}>&quot;</h4>
          <p className={styles.quotecont}>{userTestimonial?.content}</p>

          <div className={styles.backgroundImage}>
            <Image src={quote} alt="bubbl" />
          </div>
          <div className={styles.arrow_container}>
            <Image
              height="80px"
              width="80px"
              src={arrow}
              alt="arrow"
              className={styles.testNextIcon}
              onClick={nextTestimonial}
            />
          </div>
        </div>
        <div className={styles.name_container}>
          <h4 className={styles.customer}>{userTestimonial?.name}</h4>
        </div>
      </div>
    </div>
  );
}
