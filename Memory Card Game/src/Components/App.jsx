import Options from "./Options";
import { useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import { fetchAPI } from "../fetchApi";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(5);
  const [score, setScore] = useState({ score: 0, bestScore: 0 });

  const keyAPI = "42152601-52feed1ed258b10882cfd9096";

  useEffect(() => {
    cardCount(count);
  }, []);

  function cardCount(number) {
    setCount(number);
    fetchAPI(keyAPI, setData, setError, setIsLoading, number);
    endGame();
  }

  function chooseCard(card, i) {
    setScore({ score: score.score, bestScore: score.bestScore });

    if (card.clicked) {
      endGame();
    } else {
      setData(
        [
          ...data.slice(0, i),
          { id: card.id, image: card.image, clicked: true },
          ...data.slice(i + 1),
        ].sort(() => Math.random() - 0.5)
      );

      setScore({ score: score.score + 1, bestScore: score.bestScore });
    }
  }

  function endGame() {
    reset();
  }

  function reset() {
    setData([
      ...data.map((e) => ({ id: e.id, image: e.image, clicked: false })),
    ]);
    setScore({
      score: 0,
      bestScore: score.score > score.bestScore ? score.score : score.bestScore,
    });
  }
  function hardReset() {
    setData([
      ...data.map((e) => ({ id: e.id, image: e.image, clicked: false })),
    ]);
    setScore({
      score: 0,
      bestScore: 0,
    });
  }
  return (
    <div className="body">
      <h1 className="head">Memory Card Game</h1>

      <Options
        difClick={cardCount}
        count={count}
        score={score}
        reset={reset}
        hardReset={hardReset}
      />
      {!isLoading && score.score === data.length && (
        <p className="win">You Wooon!!!</p>
      )}
      {score.score != data.length && (
        <p className="wait">{data.length - score.score + " photos left!"}</p>
      )}
      <GameBoard data={data} onChoice={chooseCard} />
    </div>
  );
}

export default App;
