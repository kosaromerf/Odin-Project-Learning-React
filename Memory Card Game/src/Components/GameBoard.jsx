import React from "react";
import Card from "./Card";
import styles from "../Styles/gameBoard.module.css";

const GameBoard = ({ data, onChoice }) => {
  return (
    <div className={styles.board}>
      {data.map((e, i) => (
        <Card
          key={data[i].id}
          data={data[i].image}
          onChoice={() => onChoice(data[i], i)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
