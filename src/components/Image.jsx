/* eslint-disable react/prop-types */

const Image = ({ liked, image, character, characterDirection }) => {
  const direction = characterDirection === "Left";

  return (
    <img
      className={`simpsons-char ${liked ? "liked" : "notLiked"} ${
        direction && "left-text-img"
      }`}
      src={image}
      alt={character}
    />
  );
};

export default Image;
