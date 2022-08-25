import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "",
    }).then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div className="content-container">Content</div>;
};

export default Content;
