/** @format */

import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";
import { get_contact_detail, getSocialLinks } from "../../Repo/Api";
import axios from "axios";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const [detail, setDetail] = useState([]);
  const [response, setResponse] = useState({});
  const [logo, setLogo] = useState();

  const fetchLogo = async () => {
    const data = await axios.get(
      "https://pritam-backend.vercel.app/api/v1/admin/viewContactDetails"
    );
    setLogo(data.data.data);
  };
  useEffect(() => {
    get_contact_detail(setDetail);
    getSocialLinks(setResponse);
    fetchLogo();
  }, []);

  return (
    <footer className="app-footer">
      <div className="app-footer-content">
        <div className="footer-container">
          <div className="footer-logo-container .logoContainer">
            <img src={logo?.image} alt="" style={{ width: "" }} />
          </div>

          <div className="footer-contact-info-div">
            <p>
              <BsTelephoneFill /> {response?.mobileNumber}
            </p>
            <p>
              <IoMdMail /> {response?.email}
            </p>
            <p>
              <MdLocationOn /> {response?.address}
            </p>
          </div>

          <div className="footer-links-div">
            <p>Home</p>
            <Link to="/">Home </Link>
            <Link to="/event-booking">Event Booking</Link>
            <Link to="/bartending">Courses</Link>
          </div>
          <div className="footer-links-div">
            <p>About</p>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <HashLink to="/freelance#communityId">FAQ&#39;s</HashLink>
            <HashLink to="/freelance#communityId2">FAQ&#39;s</HashLink>
            <Link to="/book-an-event/64b2a2b85ca7d30d3d269dc4">
              Event FAQ&#39;s
            </Link>
          </div>
          <div className="footer-links-div">
            <p>Follow Us</p>
            <div className="footer-social-links-div">
              <a href={response?.fb} target="_blank" style={{ color: "#fff" }}>
                <FaFacebookF />
              </a>
              <a
                href={response?.twitter}
                target="_blank"
                style={{ color: "#fff" }}
              >
                <BsTwitter />
              </a>
              <a
                href={response?.instagram}
                target="_blank"
                style={{ color: "#fff" }}
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-copyright">
          Copyright © 2023, Company name, All Right Reserved
        </p>
      </div>
    </footer>
  );
}
