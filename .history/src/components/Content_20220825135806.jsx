import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  axios ({
    method:"GET"
  })
  }, [input])

  return <div className="content-container">Content</div>;
};

export default Content;
