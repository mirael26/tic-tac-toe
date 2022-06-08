import * as React from "react";

import { CombinationsType } from "../../types";

const LineImage = {
  STRAIGHT: require("../../img/line-1.png"),
  DIAGONAL: require("../../img/line-2.png"),
}

interface WinLineProps {
  combination: CombinationsType,
}

const WinLine = ({combination}: WinLineProps): JSX.Element => {
  const lineImage = (combination === 'diagonal_1' || combination === 'diagonal_2') ? LineImage.DIAGONAL : LineImage.STRAIGHT;
  return (
    <div className="win-line">
      <img className={`win-line__image win-line__image--${combination}`} src={lineImage} alt='win-line'></img>
    </div>
  );
}

export default WinLine;