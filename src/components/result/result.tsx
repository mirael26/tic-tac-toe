import * as React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { State } from "../../types";

const WinnerText = {
  DRAWN: 'Победила дружба!',
  0: 'Победил игрок Нолик!',
  1: 'Победил игрок Крестик!',
}

const Result = (): JSX.Element => {
  const winner = useSelector((state: State) => state.winner);

  let winnerText = WinnerText.DRAWN;
  if (typeof winner === 'number') {
    winnerText = winner === 1 ? WinnerText[1] : WinnerText[0];
  }

  return (
    <div className="result">
      <h2 className="result__title">Конец игры!</h2>
      <p className="result__text" style={{
        width: `${winnerText.length}ch`,
        animation: `printed-text 3s steps(${winnerText.length})`
      }}>
        {winnerText}
      </p>
    </div>
  );
}

export default Result;