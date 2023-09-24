/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { likes } from "./characterSlice";
import Delete from "./Delete";

const Name = ({ id, character, item, handleDelete, deleteChar }) => {
  const dispatch = useDispatch();

  const liked = item.liked;

  return (
    <div>
      <h3
        className={`${character.length >= 15 && "long-names"} character-name`}
      >
        {character}
      </h3>
      <div className="btn-container">
        <button onClick={() => dispatch(likes(id))}>
          {liked ? "Liked" : "Not liked"}
        </button>
        <Delete
          character={item.character}
          handleDelete={handleDelete}
          id={item.id}
          deleteChar={deleteChar}
        />
      </div>
    </div>
  );
};

export default Name;
