import "./App.css";
import SingleCard from "./components/SingleCard.jsx";

const cardImages = [
  { src: "/public/MaitreWu.png", matched: false },
  { src: "/public/cole.webp", matched: false },
  { src: "/public/jay.png", matched: false },
  { src: "/public/kai.webp", matched: false },
  { src: "/public/Lloyd.webp", matched: false },
  { src: "/public/Zane.webp", matched: false },
];

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
      <h1>NinjaGo Memory</h1>
      <SingleCard cardData={cardData} handleClick={handleClick} />
    </>
  );
}

export default App;
