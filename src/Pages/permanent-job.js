/** @format */

import React, { useEffect, useState } from "react";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import { reg_user_form } from "../Repo/Api";
import axios from "axios";

const PermanentJob = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  
  const [data, setData] = useState({});

  const payload = { fullName, email, phone, address, dob };

  const submitHandler = (e) => {
    e.preventDefault();
    reg_user_form(payload);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getForm = async () => {
    try {
      const res = await axios.get(
        `https://pritam-backend.vercel.app/api/v1/admin/Bartending/getFormData/event`
      );
      setData(res.data.data);
    } catch {}
  };

  useEffect(() => {
    getForm();
  }, []);

  return (
    <>
      {" "}
      <div className="permanent-job">
        <div className="Banner AboutUs">
          <div className="content" style={{ width: "80%", margin: "auto" }}>
            <h2 className="permanent-job-heading">Casual & Permanent Job</h2>
            <p>
              At Academy Hospitality, we offer both casual and permanent
              staffing solutions to meet the diverse needs of our clients in the
              ever-evolving hospitality industry. Our casual staffing services
              provide flexible and on-demand solutions, perfect for managing
              fluctuating workloads, seasonal demands, and last-minute staff
              requirements. On the other hand, our permanent staffing services
              focus on finding and placing dedicated professionals who can
              contribute to the long-term success of your business. Whether you
              need temporary support for a special event or a committed team
              member to join your organization, Academy Hospitality ensures that
              your staffing needs are met with exceptional service, experienced
              professionals, and a commitment to your success.
            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "150px" }}>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>Register Online</h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            "Secure your spot for academy hospitality job shifts – register online today!"
            </p>
            <a href="#RegisterForm">
              <button>Register Here </button>
            </a>
          </div>

          <div className="right_container">
            <img src="./Image/78.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120px" }}>
          <div className="right_container second_container">
            <img src="./Image/79.png" alt="" />
          </div>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>
              Attend to Meet Us
            </h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            "Join us to discuss job shifts at the academy, meet the team, and explore opportunities."

            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120px" }}>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>Learn & Earn</h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            "Enroll in the Academy of Hospitality to learn, grow, and earn money swiftly."

            </p>
          </div>

          <div className="right_container third_container">
            <img src="./Image/80.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120px" }}>
          <div className="right_container fourth_container">
            <img src="./Image/81.png" alt="" />
          </div>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>Flexibility</h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            "Academy Hospitality offers employees flexibility in shifts, promoting work-life balance and personalized scheduling."


            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120px" }}>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>Great Money</h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            Academy of Hospitality ensures that great money can be obtained in the industry.

            </p>
          </div>

          <div className="right_container five_container">
            <img src="./Image/82.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120x" }}>
          <div className="right_container sixth_container">
            <img src="./Image/83.png" alt="" />
          </div>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>
              Have a Great Amazing <br /> Experience with us
            </h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            "Join our academy, where you'll have a great, amazing experience with exceptional hospitality."

            </p>
          </div>
        </div>

        <div className="contact-us-form" id="RegisterForm">
          <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>
            Enter your Details in the Form
          </h5>

          <div className="Form-Container">
            <div className="left-container">
              <img src="./Image/84.png" alt="" />
            </div>

            <div className="right-container">
              <form
                onSubmit={submitHandler}
                style={{ width: "356px", height: "400px" }}
              >
                <div className="input-Div">
                  <i className="fa-regular fa-user"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="input-Div">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-Div">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="input-Div">
                  <i className="fa-solid  fa-location-dot"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="input-Div">
                  <i className="fa-solid fa-calendar"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="date"
                    placeholder="Date of Birth"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>

                <button type="submit">Submit</button>
              </form>

              <p className="assit">Need Assistance?</p>

              <button className="whatsapp-button">
                <i className="fa-brands fa-whatsapp"></i>
                {data?.contactUsformWhatApp}
              </button>

              <div className="contact">
                <p>Or Call us at</p>
                <p>
                  {" "}
                  <i className="fa-solid fa-phone"></i>
                </p>
                <p>
                  {" "}
                  <strong> {data?.contactUsformCall}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Community_Page">
          <FAQ />
        </div>
        <div className="pt-5"></div>
      </div>
    </>
  );
};

export default PermanentJob;
