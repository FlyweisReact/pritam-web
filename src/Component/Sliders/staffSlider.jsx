/** @format */

import { SwiperSlide } from "swiper/react";
import Swipe from "../../helper/swiper";
import { useEffect, useState } from "react";
import { getSatffReviews } from "../../Repo/Api";
import { Skeleton } from "antd";

export default function StaffSlider() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidePerGroup, setSlidePergroup] = useState(3); //
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSatffReviews(setLoading, setReviews);
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
    <div style={{ margin: "auto", width: "90%" }}>
      <h3 className="center-heading">Our Staff</h3>
      <h1 className="bold-heading">Staff Reviews</h1>
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
          delay={2500}
          loop={true}
          autoplay={true}
          pagination={false}
          allowTouchMove={true}
        >
          {/* {reviews?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="staff-slider-card">
                  <img
                    src={item?.userId?.image}
                    className="staff-slider-image"
                    alt=""
                  />
                  <div style={{ padding: "10px" }}>
                    <p className="staff-slider-para">{item.comment}</p>
                    <div className="staff-slider-div">
                      <img src={item?.userId?.image} alt=""></img>
                      <div className="staff-info">
                        <h3>
                          {item?.userId?.firstName +
                            " " +
                            item?.userId?.lastName}
                        </h3>
                        <p>{item?.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })} */}

          <SwiperSlide>
            <div className="staff-slider-card">
              <img
                src={
                  "https://res.cloudinary.com/dbrvq9uxa/image/upload/v1689759728/images/image/veznhp2pmpqddpqtlaeu.jpg"
                }
                className="staff-slider-image"
                alt=""
              />
              <div style={{ padding: "10px" }}>
                <p className="staff-slider-para">
                  I've been working at Academy Hospitality for some time now,
                  and one of the standout features for me is the flexibility in
                  shifts. It allows me to balance work with my personal life
                  seamlessly. Moreover, the clarity in our job roles is
                  exceptional. You always know what's expected of you, and that
                  really boosts our productivity. The systematic approach to
                  operations here is top-notch, making it a great place to work!
                </p>
                <div className="staff-slider-div">
                  <img
                    src={
                      "https://res.cloudinary.com/dbrvq9uxa/image/upload/v1689759728/images/image/veznhp2pmpqddpqtlaeu.jpg"
                    }
                    alt=""
                  ></img>
                  <div className="staff-info">
                    <h3>Harris</h3>
                    <p>STAFF </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="staff-slider-card">
              <img
                src={
                  "https://res.cloudinary.com/dbrvq9uxa/image/upload/v1689759728/images/image/veznhp2pmpqddpqtlaeu.jpg"
                }
                className="staff-slider-image"
                alt=""
              />
              <div style={{ padding: "10px" }}>
                <p className="staff-slider-para">
                  Working at Academy Hospitality has been a fantastic
                  experience, primarily due to the flexible shifts they provide.
                  It's so accommodating for individuals with varying schedules.
                  But what's equally impressive is the clarity in job roles.
                  You're never left wondering about your duties. They have a
                  systematic approach to hospitality, and it makes everything
                  run smoothly. I'm proud to be part of a team that values these
                  aspects of the workplace.
                </p>
                <div className="staff-slider-div">
                  <img
                    src={
                      "https://res.cloudinary.com/dbrvq9uxa/image/upload/v1689759728/images/image/veznhp2pmpqddpqtlaeu.jpg"
                    }
                    alt=""
                  ></img>
                  <div className="staff-info">
                    <h3>Joesph</h3>
                    <p>STAFF </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="staff-slider-card">
              <img
                src={
                  "https://res.cloudinary.com/dbrvq9uxa/image/upload/v1689759728/images/image/veznhp2pmpqddpqtlaeu.jpg"
                }
                className="staff-slider-image"
                alt=""
              />
              <div style={{ padding: "10px" }}>
                <p className="staff-slider-para">
                  Academy Hospitality truly understands the importance of
                  work-life balance. The flexible shifts they offer have been a
                  lifesaver for me. And what sets them apart is the
                  crystal-clear communication about job roles. There's no
                  ambiguity, and you always know your responsibilities. Their
                  systematic approach to training and operations ensures that
                  you're well-prepared for any task. I appreciate the way this
                  company values its staff.
                </p>
                <div className="staff-slider-div">
                  <img
                    src={
                      "https://res.cloudinary.com/dbrvq9uxa/image/upload/v1689759728/images/image/veznhp2pmpqddpqtlaeu.jpg"
                    }
                    alt=""
                  ></img>
                  <div className="staff-info">
                    <h3>Anivash</h3>
                    <p>STAFF </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swipe>
      )}
    </div>
  );
}
