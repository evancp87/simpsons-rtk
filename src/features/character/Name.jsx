/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { likes } from "./characterSlice";

const Name = ({ id, character, item }) => {
  const dispatch = useDispatch();

  const liked = item.liked;

  return (
    <div>
      <h1>{character}</h1>
      <button onClick={() => dispatch(likes(id))}>
        {liked ? "Liked" : "Not liked"}
      </button>
    </div>
  );
};

export default Name;
