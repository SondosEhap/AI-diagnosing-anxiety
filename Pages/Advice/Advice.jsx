import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./Advice.css";
import "swiper/css";
import a1 from "./advice1.svg";
import a2 from "./advice2.svg";
import a3 from "./advice3.svg";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Pagination module
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Advice = () => {
  const navigate = useNavigate();

  const navigateToRead1 = () => {
    // 👇️ navigate to /contacts
    navigate("/read1");
  };
  const navigateToRead2 = () => {
    // 👇️ navigate to /contacts
    navigate("/read2");
  };
  const navigateToRead3 = () => {
    // 👇️ navigate to /contacts
    navigate("/read3");
  };
  return (
    <div>
      <Navbar />
      <div className="advicePage">
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="slide">
                <div className="title_content">
                  <p className="adviceTitle">
                    Learn how to choose between a <br /> psychologist and a
                    therapist.
                  </p>
                  <button onClick={navigateToRead1}>Read more</button>
                </div>

                <img src={a1} width={407} height={297} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="title_content">
                  <p className="adviceTitle">
                    What’s the difference between <br /> anxiety and being
                    stressed?
                  </p>
                  <button onClick={navigateToRead2}>Read more</button>
                </div>
                <div>
                  <img src={a2} width={438} height={313} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="title_content">
                  <p className="adviceTitle">
                    How to Help Someone With <br />
                    Anxiety.
                  </p>
                  <button onClick={navigateToRead3}>Read more</button>
                </div>
                <div>
                  <img src={a3} width={475} height={313} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Advice;
