import getRandomFromArray from "../utils/getRandomFromArray";
import phrases from "../utils/phrases.json";
import arrImages from "../utils/arrImage.json";
import "./styles/BtnPhrase.css";
import { useState } from "react";

const BtnPhrase = ({ setPhraseRandom, setImageSelected }) => {
  const [changeColor, setChangeColor] = useState("#000000");

  const handleClick = () => {
    const phrase = getRandomFromArray(phrases);
    setPhraseRandom(phrase);

    const background = getRandomFromArray(arrImages);
    setImageSelected(background);

    const randomColor = "#" + Math.random().toString(16).slice(2, 8);
    setChangeColor(randomColor);
  };

  return (
    <button
      className="card__btn"
      style={{ backgroundColor: changeColor }}
      onClick={handleClick}
    >
      🍀Probar mi fortuna🍀
    </button>
  );
};

export default BtnPhrase;
