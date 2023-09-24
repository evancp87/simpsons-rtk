/* eslint-disable react/prop-types */

import { useState } from "react";
import Name from "./Name";
import Quote from "../../components/Quote";
import Image from "../../components/Image";

const Character = ({ item, handleDelete, deleteChar }) => {
  return (
    <div className="characterContainer">
      <Name
        character={item.character}
        id={item.id}
        item={item}
        handleDelete={handleDelete}
        deleteChar={deleteChar}
      />
      <div className="character-details">
        <Quote
          quote={item.quote}
          characterDirection={item.characterDirection}
        />
        <Image
          image={item.image}
          characterDirection={item.characterDirection}
        />
      </div>
    </div>
  );
};

export default Character;
