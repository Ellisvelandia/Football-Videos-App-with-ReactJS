import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.scorebat.com/video-api/v3/feed/?token=[YOUR_API_TOKEN]",
    }).then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div className="content-container">Content</div>;
};

export default Content;
