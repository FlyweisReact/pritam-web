/** @format */

import { useEffect, useState } from "react";
import { BsArrowRightShort, BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getBuisness, getDreamData } from "../../Repo/Api";

export default function GetJob() {
  const [data, setData] = useState({});
  const [ buisness , setBuisness ] = useState({})

  const fetchHandler = () => {
    getDreamData(setData);
  };

  const fetchData =() => {
    getBuisness(setBuisness)
  }

  useEffect(() => {
    fetchHandler();
    fetchData()
  }, []);

  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <h3 className="center-heading"> {data?.title} </h3>
      <h1 className="bold-heading"> {data?.heading} </h1>
      {data?.desc?.length > 0 && (
        <div className="get-job-list-container">
          {data?.desc?.map((i, index) => (
            <p key={index}>
              {" "}
              <BsCheckLg className="get-job-bulletStyle" />
              {i}
            </p>
          ))}
        </div>
      )}

      {data?.image && (
        <img className="get-job-image" src={data?.image} alt="" />
      )}

      <div className="business-container">
        <img
          className="business-container-image"
          src={buisness?.image}
          alt=""
        />
        <div className="business-info-div">
          <h3>  {buisness?.title} </h3>
          <p> {buisness?.desc} </p>
          <div className="business-list-container">
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/4.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/69.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/66.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/58.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/68.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/5.png" alt="" />
              <span>Robin Sharma</span>
            </div>
          </div>
          <Link to="/" className="business-link">
            View All <BsArrowRightShort style={{ fontSize: "24px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
