import React from "react";
import DifficultyButton from "./DifficultyButton";
import OptionsButton from "./OptionsButton";
import styles from "../Styles/options.module.css";

const Options = ({ difClick, count, score, reset, hardReset }) => {
  return (
    <div className={styles.options}>
      <h4>
        Score : {score.score} / Best Score : {score.bestScore}
      </h4>
      <div className={styles.difButtons}>
        <DifficultyButton
          text="Easy"
          btncolor="lightblue"
          difClick={() => difClick(5)}
        />
        <DifficultyButton
          text="Medium"
          btncolor="orange"
          difClick={() => difClick(7)}
        />
        <DifficultyButton
          text="Hard"
          btncolor="red"
          difClick={() => difClick(9)}
        />
        <div className={styles.increment}>
          <DifficultyButton
            text="+"
            difClick={() => difClick(count < 20 ? count + 1 : count)}
          />
          <DifficultyButton
            text="-"
            difClick={() => difClick(count > 1 ? count - 1 : count)}
          />
        </div>
      </div>
      <div className={styles.optButtons}>
        <OptionsButton text="Reset" onClick={reset} />
        <OptionsButton text="Hard reset" onClick={hardReset} />
      </div>
    </div>
  );
};

export default Options;
