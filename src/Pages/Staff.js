/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import HeadingCont from "../Component/Partial/heading-cont";
import Banner from "../Component/Partial/StaffComponent/Banner";
import TrainingCourse from "../Component/Partial/StaffComponent/TrainingCourse";
import { AllTalentedStaff, AllTalentedStaffType } from "../Repo/Api";

const Staff = () => {
 
  const [response, setResponse] = useState([]);
  const [typeResponse, setTypeResponse] = useState([]);
  const [openLearnMore, setOpenLearnMore] = useState(false);

  const fetchDataAgain = async()=>{
  try {
    const response = await axios.get("https://pritam-backend.vercel.app/api/v1/admin/getStaffTalented")
    const data = response.data;
    console.log("data", data);
    setResponse(data.data);
    const youtubeVideoLink = data.data.youtubeLink;
    console.log("youtubeLink", youtubeVideoLink);
    const videoId = getVideoIdFromUrl(youtubeVideoLink);
    if (videoId) {
      const videourl = `https://www.youtube.com/embed/${videoId}?si=InTXwsXs3JbTwAMf&amp;start=3`;
      setResponse((prev) => {
        return { ...prev, updateyoutubelink: videourl };
      });
    } else {
      console.log("Invalid YouTube URL");
    }
  } catch (error) {
    console.log(error)
  }
  }

    function getVideoIdFromUrl(url) {
      const regExp = /v=([a-zA-Z0-9_-]+)/;
      const match = url.match(regExp);

      if (match && match[1]) {
        return match[1];
      }

      return null;
    }
  const fetchTypeData = async () => {
    const fetchData = await axios.get(
      "https://pritam-backend.vercel.app/api/v1/admin/getstaffTalentedType"
    );
    setTypeResponse(fetchData.data.data);

  }

   useEffect(() => {
     window.scrollTo(0, 0);
     console.log("useffect")
     fetchDataAgain();
     fetchTypeData();
   }, []);
  const youtubeLink = response.youtubeLink

  const converPlayableImageForYouTube = (youtubeLink) => {
    const siLink = "InTXwsXs3JbTwAMf";
    const startTime = 3;
    // console.log("youtubeLink", youtubeLink);
    // const extractedLink = youtubeLink.split("=");
    // const VideoId = extractedLink[extractedLink.length - 1];
    // console.log("videoID", VideoId)
    // const findVideoCode = extractedLink.split("/");
    // const mainUrl = findVideoCode[0];

    const url = new URL(youtubeLink);
    const searchParams = new URLSearchParams(url.search);
    const videoId = searchParams.get("v");
    const convertedLink = ` https://www.youtube.com/embed/${videoId}?si=${siLink}&amp${startTime};`;
    return convertedLink;
  };

  return (
    <>
      <Banner stafftype={response?.staffTalentedTypeId} />
      <TrainingCourse
        academyHeading={response.academyHeading}
        academyDesc={response.academyDesc}
        academyTitle={response.academyTitle}
        image={response.image}
        setOpenLearnMore={setOpenLearnMore}
      />
      {openLearnMore && (
        <HeadingCont title={"We Add Academic Hospitality"} content={""} />
      )}
      {openLearnMore  && response?.consultancy?.map((item) => {
        return (
          <div className="Staff_Desc">
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        );
      })}
      <div style={{ width: "90%", margin: "80px auto" }}>
        <iframe
          width="100%"
          height="500"
          src={response.updateyoutubelink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <Newsletter formTitle={response.formTitle} formDesc={response.formDesc} />
      <div style={{ paddingTop: "5rem" }}></div>
    </>
  );
};

export default Staff;
