/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFooterAds } from "../../Repo/Api";

const DownBanner = ({ setshow }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    getFooterAds(setData);
  }, []);


  const textOver = (data) => {
    if(data?.length > 100) {
      console.log(1010)
    }else{
      console.log(100)
    }

  }

  return data ? (
    <div className="AddScreeenBg">
      <div className="AddScreeen">
        <i className="fa-solid fa-close" onClick={() => setshow(false)} />
        <img src={data?.image} alt="" />
        <p>{data?.title}</p>

        <Link to={`/ads/${data?._id}`}>
          <button>VIEW DETAILS</button>
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
};

export default DownBanner;
