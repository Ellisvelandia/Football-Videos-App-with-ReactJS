import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.scorebat.com/video-api/v3/feed/?token=[MjQ2MDJfMTY2MTQ1MDk2NF84OTM4NDA2YjIyNDgzMDgwYTVjZTY4NTdlMmI5MmJiMjgxMzc4MDJj]",
    }).then((res) => {
      console.log(res.data);
    }).catch(())
  }, []);

  return <div className="content-container">Content</div>;
};

export default Content;
