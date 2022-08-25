import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.scorebat.com/video-api/v3/feed/?token=[MjQ2MDJfMTY2MTQ1MDk2NF84OTM4NDA2YjIyNDgzMDgwYTVjZTY4NTdlMmI5MmJiMjgxMzc4MDJj]",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data.response);
      })
      .catch((e) => console.log(e));
  }, []);

  return <div className="content-container">
    {data.map((item) => (
      <div className="itemDiv" key={item.title}>
        <div className="itemHeading"><h4>{item.title}</h4></div>
        <div className="itemImage">
          <img src={item.thum} alt="#" />
        </div>
      </div>
    ))}
  </div>;
};

export default Content;
