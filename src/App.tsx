import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const options = {
    method: "GET",
    url: "https://fakestoreapi.com/products",
  };
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
}

export default App;
