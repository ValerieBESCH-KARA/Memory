import "./App.css";
import SingleCard from "./components/SingleCard.jsx";

function App() {
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
      <h1>Memory Game</h1>
      <SingleCard cardData={cardData} handleClick={handleClick} />
    </>
  );
}

export default App;
