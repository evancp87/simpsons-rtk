/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteCharacter } from "./characterSlice";
const Delete = ({ character }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(deleteCharacter(character))}>
        Delete
      </button>
    </div>
  );
};

export default Delete;
