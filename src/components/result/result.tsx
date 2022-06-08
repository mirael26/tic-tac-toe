import * as React from "react";
import { useSelector } from "react-redux";

import { State } from "../../types";

const Result = (): JSX.Element => {
  const winner = useSelector((state: State) => state.winner);
  let winnerSign = null;
  if (typeof winner === 'number') {
    winnerSign = winner === 1 ? 'Крестик' : 'Нолик';
  }

  return (
    <div className="result">
      <h2 className="result__title">Конец игры!</h2>
      <p className="result__text">
        {winner !== 'drawn'
          ? `Победил игрок ${winnerSign}!`
          : 'Победила ничья!'}
      </p>
    </div>
  );
}

export default Result;