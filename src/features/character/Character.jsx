/* eslint-disable react/prop-types */

import { useState } from "react";
import Name from "./Name";
import Quote from "../../components/Quote";
import Image from "../../components/Image";
import Delete from "./Delete";

const Character = ({ item, handleDelete, deleteChar }) => {
  return (
    <div className="characterContainer">
      <Name character={item.character} id={item.id} item={item} />
      <Quote quote={item.quote} characterDirection={item.characterDirection} />
      <Image image={item.image} />

      <Delete
        character={item.character}
        handleDelete={handleDelete}
        id={item.id}
        deleteChar={deleteChar}
      />
    </div>
  );
};

export default Character;
