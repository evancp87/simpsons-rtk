/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Error404 from "./components/Error404";
import Nav from "./components/Nav";
import Screen from "./components/Screen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);

  // gets api data and renders splash screen
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );

      data.forEach((element, index) => {
        element.id = index + Math.random();
      });
      data.forEach((element) => {
        element.liked = false;
        console.log(element);
      });

      setData(data);
      setTimeout(() => {
        setShowSplash(false);
      }, 3000);
    } catch (error) {
      console.log("The error is:", error);
    }
  };
  // api call
  useEffect(() => {
    getData();
  }, []);

  // increments likes count if character is liked
  useEffect(() => {
    if (data) {
      let count = 0;
      data.forEach((char) => {
        if (char.liked) count++;
      });
      setTotal(count);
    }
  }, [data]);

  if (!data) return <Loading />;

  if (data.length === 0) return <p>Doh! You ran out of Springfieldians!</p>;

  return (
    <Router>
      {showSplash ? (
        <Screen />
      ) : (
        <>
          <p>Total no of liked chars: {total} </p>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Simpsons data={data} setData={setData} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
