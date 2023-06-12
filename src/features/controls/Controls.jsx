/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { sort, search, reset } from "./controlsSlice";

const Controls = () => {
  const dispatch = useDispatch();

  // sorting and searching dispatch calls
  const searchSimpsonsInput = (e) => {
    console.log(e.target.value);

    dispatch(search(e.target.value));
  };

  const sortSimpsons = (e) => {
    console.log(e.target.value);
    dispatch(sort(e.target.value));
  };

  const resetFilters = () => {
    dispatch(reset());
  };

  return (
    <>
      <input type="text" onInput={searchSimpsonsInput} />
      <select onInput={sortSimpsons}>
        <option value=""></option>
        <option value="Asc">Asc</option>
        <option value="Desc">Desc</option>
      </select>
      <button onClick={resetFilters}>Reset</button>
    </>
  );
};

export default Controls;
