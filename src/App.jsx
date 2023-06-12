/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Simpsons from "./features/character/Simpsons";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Error404 from "./components/Error404";
import Nav from "./components/Nav";
import Screen from "./components/Screen";
import { setSimpsons, selectData } from "./features/character/characterSlice";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  // gets api data and renders splash screen
  const getData = useCallback(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  // dispatch call for simpsons data
  useEffect(() => {
    dispatch(setSimpsons());
    getData();
  }, [dispatch, getData]);

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

  return (
    <>
      {showSplash ? (
        <Screen />
      ) : (
        <>
          <p>Total no of liked chars: {total} </p>
          <Nav />
          <Routes>
            <Route path="/" element={<Simpsons />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
