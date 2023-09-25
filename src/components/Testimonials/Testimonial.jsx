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
        "Faiz has been a valuable colleague, and I've had the privilege of collaborating with him on numerous React projects. His expertise and support have been instrumental in achieving successful outcomes."
    },
    {
      img: profilePic2,
      review:
      "My colleague has been an invaluable resource in our Salesforce development projects, offering guidance and expertise that have greatly contributed to our team's success. His support and knowledge have been crucial in achieving our project goals."
    },
    {
      img: profilePic3,
      review:
      "I'm grateful for my colleague's assistance in Salesforce security and flows projects. His guidance has been instrumental in ensuring data protection and optimizing workflow efficiency, leading to successful project outcomes."
    },
    {
      img: profilePic4,
      review:
      "Faiz has been a dedicated colleague, and I've had the pleasure of Working with him on various Salesforce admin projects. Together, we've delivered efficient solutions and enhanced our team's capabilities."
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>People Who Loved My </span>
        <span>Exceptional Work </span>
        <span>In Projects...</span>
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
