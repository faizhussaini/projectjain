import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg.jpeg";
import profilePic2 from "../../img/profile2.jpeg";
import profilePic3 from "../../img/profile3.jpeg";
import profilePic4 from "../../img/profile4.jpeg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Sunrise over the Taj Mahal with Faiz Tours - a memory etched forever. From the first golden glint to the marble masterpiece emerging from the mist, it was pure magic!"
    },
    {
      img: profilePic2,
      review:
      "Kerala's lush beauty unveiled by Faiz Tours. From serene backwaters to Ayurvedic bliss, it was a soul-stirring journey. My mind and body feel renewed!"
    },
    {
      img: profilePic3,
      review:
      "Delhi's culinary secrets unlocked by Faiz Tours. From mouthwatering street food to hidden gems, my taste buds tantalised! A foodie's dream come true!"
    },
    {
      img: profilePic4,
      review:
      "From planning to farewell, Faiz Tours exceeded expectations. Personalized attention and expert advice turned my dream trip into reality."
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>People Who Loved </span>
        <span>To Travel </span>
        <span>With Us...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
