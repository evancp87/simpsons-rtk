/* eslint-disable react/prop-types */
import Character from "./Character";
import Controls from "../controls/Controls";
import { useSelector } from "react-redux";
import { selectData, selectDelete } from "./characterSlice";
import { selectSearch, selectSort } from "../controls/controlsSlice";

const Simpsons = () => {
  const simpsons = useSelector(selectData);
  const deleteChar = useSelector(selectDelete);
  const search = useSelector(selectSearch);
  const sort = useSelector(selectSort);

  const filteredSimpsons = () => {
    let filteredList = [...simpsons];
    // if a search query is entered, filter the  state and return the character that is in the query
    if (search) {
      filteredList = filteredList.filter((item) =>
        item.character.toLowerCase().includes(search.toLowerCase())
      );
    }
    // sorting alphabetically ascending or descending
    if (sort === "Asc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.character > numTwo.character ? 1 : -1
      );
    } else if (sort === "Desc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.character > numTwo.character ? -1 : 1
      );
    }

    return filteredList;
  };

  const filteredSimpsonsData = filteredSimpsons();

  return (
    <>
      <Controls />
      {filteredSimpsonsData.length === 0 && <p>No results found, dude</p>}
      {
        <main className="simpsons-wrapper">
          {filteredSimpsonsData.map((item, index) => {
            return (
              <Character
                item={item}
                key={item.id}
                simpsons={simpsons}
                deleteChar={deleteChar}
              />
            );
          })}
        </main>
      }
    </>
  );
};

export default Simpsons;
