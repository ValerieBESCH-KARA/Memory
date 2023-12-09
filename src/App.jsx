import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
import Bingo from "./components/Bingo"; // Importez votre composant Bravo

const cardImages = [
  { src: "/MaitreWu.png", matched: false },
  { src: "/cole.webp", matched: false },
  { src: "/jay.png", matched: false },
  { src: "/kai.webp", matched: false },
  { src: "/Lloyd.webp", matched: false },
  { src: "/Zane.webp", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isGameResolved, setIsGameResolved] = useState(false);

  // Ajoutez une fonction pour vérifier si toutes les cartes sont appariées
  const areAllCardsMatched = () => {
    return cards.every((card) => card.matched);
  };

  // Ajoutez une fonction pour gérer l'action une fois que toutes les cartes sont trouvées
  const handleAllCardsMatched = () => {
    console.log("Toutes les cartes sont trouvées !");
    // Vous pouvez ajouter d'autres actions spécifiques ici
    setIsGameResolved(true);
  };

  // shuffle card
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setIsGameResolved(false); // Réinitialise le statut du jeu résolu
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setTimeout(() => resetTurn(), 1000);
        // Vérifiez si toutes les cartes sont appariées après chaque paire trouvée
        if (areAllCardsMatched()) {
          handleAllCardsMatched();
        }
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo, areAllCardsMatched]);

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start the game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>NinjaGo Memory</h1>
      <div className="Button">
        <button onClick={shuffleCards}>New game</button>
        <p>Turns : {turns}</p>
      </div>
      {isGameResolved ? (
        <Bingo />
      ) : (
        <>
          <div className="card-grid">
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
