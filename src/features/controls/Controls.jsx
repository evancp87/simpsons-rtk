/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { sort, search, reset } from "./controlsSlice";
import { setSimpsons, selectData } from "../character/characterSlice";

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

  const refreshCharacters = () => {
    dispatch(setSimpsons());
  };

  return (
    <>
      <div className="simpsons-input-wrapper">
        <input
          className="simpsons-search"
          type="text"
          onInput={searchSimpsonsInput}
        />
        <select className="simpsons-select" onInput={sortSimpsons}>
          <option value=""></option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
        <button className="simpsons-reset" onClick={resetFilters}>
          Reset
        </button>
      </div>
      <button className="simpsons-refresh" onClick={refreshCharacters}>
        Refresh list
      </button>
    </>
  );
};

export default Controls;
