/* eslint-disable react/no-array-index-key */
// /* eslint-disable import/no-unresolved */
// import "swiper/css";

// import Image from "next/image";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import One from "../images/Phase_2_All_Assets/home_page/homePageNetworking/business.png";
// import Two from "../images/Phase_2_All_Assets/home_page/homePageNetworking/events.png";
// import Three from "../images/Phase_2_All_Assets/home_page/homePageNetworking/individuals.png";
// import styles from "./swiper.module.css";

// export default function SwiperComponent() {
//   return (
//     <div>
//       <p>Hi</p>
//       <Swiper
//         spaceBetween={111}
//         slidesPerView={3}
//         // autoplay={{
//         //   delay: 2000,
//         //   disableOnInteraction: true,
//         // }}
//         centeredSlides
//         navigation
//         // loop
//         // onSlideChange={() => console.log("slide change")}
//         // onSwiper={(swiper) => console.log(swiper)}

//         modules={[Autoplay, Navigation, Pagination]}
//       >
//         <SwiperSlide>
//           <Image src={One} className={styles.imageContainer} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={Two} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={Three} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={One} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={Two} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={Three} />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// // Import Swiper React components
// import Image from "next/image";
// import React, { useRef, useState } from "react";
// // import required modules
// import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import testimonial from "../images/Bubble-website_assets/testimonials/anath.png";
// import testimonial2 from "../images/Bubble-website_assets/testimonials/benny.png";
// import One from "../images/Phase_2_All_Assets/home_page/homePageNetworking/business.png";
// import Two from "../images/Phase_2_All_Assets/home_page/homePageNetworking/events.png";
// import Three from "../images/Phase_2_All_Assets/home_page/homePageNetworking/individuals.png";
// import styles from "./swiper.module.css";
// // import styles from "./swiper.module.css";

// export default function AppSwiper() {
//   const imageData = [One, Two, Three];
//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
//     >
//       <div className={styles.imageDiv}>
//         <Swiper
//           loop
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 50,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           slidesPerView={2.5}
//           effect="coverflow"
//           grabCursor
//           navigation
//           centeredSlides
//           modules={[Navigation, EffectCoverflow, Pagination]}
//           className={styles.imageContainer}
//         >
//           <SwiperSlide>
//             <Image src={testimonial} className={styles.imageStyle} />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Image src={testimonial2} />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Image src={testimonial} />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Image src={testimonial} />
//           </SwiperSlide>
//           =
//         </Swiper>
//       </div>
//     </div>
//   );
// }

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import testimonial from "../images/Bubble-website_assets/testimonials/anath.png";
import testimonial2 from "../images/Bubble-website_assets/testimonials/benny.png";
import styles from "./swiper.module.css";

function AppSwiper() {
  const [swiper, setSwiper] = useState<any>(null);

  const handleSwiper = (swiperr: any) => {
    setSwiper(swiperr);
  };

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const slideData = [
    { image: testimonial, text: "Testimonial 1" },
    { image: testimonial2, text: "Testimonial 2" },
    { image: testimonial, text: "Testimonial 3" },
    { image: testimonial2, text: "Testimonial 4" },
    { image: testimonial, text: "Testimonial 5" },
  ];

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div className={styles.imageDiv}>
        <Swiper
          loop
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          slidesPerView={2.5}
          effect="coverflow"
          grabCursor
          centeredSlides
          modules={[EffectCoverflow, Pagination]}
          className={styles.imageContainer}
          onSwiper={handleSwiper}
        >
          {slideData.map((slide, index) => (
            <>
              <div>
                <SwiperSlide key={index}>
                  <Image src={slide.image} alt={`Testimonial ${index + 1}`} />
                </SwiperSlide>
              </div>
              <div className={styles.textOverlay}>{slide.text}</div>
            </>
          ))}
        </Swiper>

        <Button onClick={handleNextSlide}>Next</Button>
      </div>
    </div>
  );
}

// export default AppSwiper;

// function AppSwiper() {
//   const [swiper, setSwiper] = useState<any>(null);

//   const handleSwiper = (swiper: any) => {
//     setSwiper(swiper);
//   };

//   const handleNextSlide = () => {
//     if (swiper) {
//       swiper.slideNext();
//     }
//   };

//   const imageData = [
//     testimonial,
//     testimonial2,
//     testimonial,
//     testimonial2,
//     testimonial,
//   ];

//   return (
//     <div
//       style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
//     >
//       <div className={styles.imageDiv}>
//         <Swiper
//           loop
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 50,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           slidesPerView={2.5}
//           effect="coverflow"
//           grabCursor
//           centeredSlides
//           modules={[EffectCoverflow, Pagination]}
//           className={styles.imageContainer}
//           onSwiper={handleSwiper}
//         >
//           {imageData.map((img) => (
//             <SwiperSlide>
//               <Image src={img} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <Button onClick={handleNextSlide}>Next</Button>
//       </div>
//     </div>
//   );
// }

export default AppSwiper;
