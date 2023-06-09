/* eslint-disable react/prop-types */

const Controls = ({ searchSimpsonsInput, sortSimpsons, resetFilters }) => {
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
