/** @format */

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swipe from "../../helper/swiper";
import { SwiperSlide } from "swiper/react";
import { getClientReviews } from "../../Repo/Api";
import { Skeleton } from "antd";

const ReviewSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidePerGroup, setSlidePergroup] = useState(3); //
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getClientReviews(setLoading, setReviews);
  }, []);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
        setSlidePergroup(1);
      } else if (window.innerWidth < 900 && window.innerWidth >= 600) {
        setSlidesToShow(2);
        setSlidePergroup(2);
      } else if (window.innerWidth < 1600 && window.innerWidth >= 900) {
        setSlidesToShow(3);
        setSlidePergroup(3);
      } else if (window.innerWidth < 1940 && window.innerWidth >= 1600) {
        setSlidesToShow(3);
        setSlidePergroup(3);
      } else {
        setSlidesToShow(6);
        setSlidePergroup(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h3 className="center-heading">Our Clients</h3>
      <h1 className="bold-heading">Client Reviews</h1>
      {loading === true ? (
        <div className="itemContainer">
          {[1, 2, 3].map((i) => (
            <>
              <div className="text-div" key={i}>
                <Skeleton active />
                <Skeleton active />
              </div>
              <div className="about-us-image">
                <Skeleton.Image active />
              </div>
            </>
          ))}
        </div>
      ) : (
        <Swipe
          spaceBetween={false}
          slidesPerGroup={slidePerGroup}
          slidesPerView={slidesToShow}
          navigation={false}
          delay={2100}
          loop={true}
          autoplay={true}
          pagination={false}
          allowTouchMove={true}
        >
          {reviews?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="client-slider-card">
                  <img
                    src="https://static-00.iconduck.com/assets.00/webflow-icon-2048x515-obs12sby.png"
                    alt=""
                    style={{ width: "100px", marginTop: "10px" }}
                  />
                  <p className="client-slider-para">{item.comment}</p>
                  <div className="client-slider-image-container">
                    <img
                      src={item.userId?.image}
                      className="client-slider-image"
                      alt=""
                    ></img>
                    <div className="user-info-div">
                      <h3>
                        {item.userId?.firstName + " " + item.userId?.lastName}
                      </h3>
                      <p>{item.type}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <div className="client-slider-card">
              <img
                src="https://static-00.iconduck.com/assets.00/webflow-icon-2048x515-obs12sby.png"
                alt=""
                style={{ width: "100px", marginTop: "10px" }}
              />
              <p className="client-slider-para">
                I've been working with this agency for years, and I can't stress
                enough how stress-free the staffing and requirement process has
                been. They consistently provide top-quality staff members, which
                has made a world of difference for our organization. I can't
                recommend them enough!
              </p>
              <div className="client-slider-image-container">
                <img
                  src={
                    "https://res.cloudinary.com/dbrvq9uxa/image/upload/v1689759728/images/image/veznhp2pmpqddpqtlaeu.jpg"
                  }
                  className="client-slider-image"
                  alt=""
                ></img>
                <div className="user-info-div">
                  <h3>John D</h3>
                  <p>Client</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-slider-card">
              <img
                src="https://static-00.iconduck.com/assets.00/webflow-icon-2048x515-obs12sby.png"
                alt=""
                style={{ width: "100px", marginTop: "10px" }}
              />
              <p className="client-slider-para">
                Dealing with staffing and requirement needs used to be such a
                hassle until we partnered with this agency. Their process is a
                breeze, and the quality of staff they send our way is always
                top-notch. It's like they read our minds when it comes to
                finding the right people for our team
              </p>
              <div className="client-slider-image-container">
                <img
                  src={
                    "https://res.cloudinary.com/dbrvq9uxa/image/upload/v1689759728/images/image/veznhp2pmpqddpqtlaeu.jpg"
                  }
                  className="client-slider-image"
                  alt=""
                ></img>
                <div className="user-info-div">
                  <h3>Sarah M</h3>
                  <p>Client</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-slider-card">
              <img
                src="https://static-00.iconduck.com/assets.00/webflow-icon-2048x515-obs12sby.png"
                alt=""
                style={{ width: "100px", marginTop: "10px" }}
              />
              <p className="client-slider-para">
                Quality and convenience are the two words that come to mind when
                I think of this staffing agency. Their commitment to maintaining
                the highest standards in staff selection is truly remarkable.
                Working with them has made our recruitment process tension-free,
                and our team has never been stronger.
              </p>
              <div className="client-slider-image-container">
                <img
                  src={
                    "https://res.cloudinary.com/dbrvq9uxa/image/upload/v1689759728/images/image/veznhp2pmpqddpqtlaeu.jpg"
                  }
                  className="client-slider-image"
                  alt=""
                ></img>
                <div className="user-info-div">
                  <h3>David P</h3>
                  <p>Client</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swipe>
      )}
    </div>
  );
};

export default ReviewSlider;
