import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/public/MaitreWu.png", matched: false },
  { src: "/public/cole.webp", matched: false },
  { src: "/public/jay.png", matched: false },
  { src: "/public/kai.webp", matched: false },
  { src: "/public/Lloyd.webp", matched: false },
  { src: "/public/Zane.webp", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle card

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleClick = (id) => {
    console.log(`Clicked card with ID : ${id}`);
  };

  const cardData = {
    id: 1,
    src: "../public/jay.png",
    matched: false,
  };

  return (
    <>
      <h1>NinjaGo Memory</h1>
      <SingleCard cardData={cardData} handleClick={handleClick} />
    </>
  );
}

export default App;
