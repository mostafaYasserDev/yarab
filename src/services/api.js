// src/services/api.js
export const fetchDynamicData = async () => {
  const response = await fetch("https://api.example.com/data");
  return response.json();
};

// Example in HomePage
import React, { useEffect, useState } from "react";
import { fetchDynamicData } from "../services/api";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDynamicData().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} alt="Dynamic" />
    </div>
  );
};

export default HomePage;
