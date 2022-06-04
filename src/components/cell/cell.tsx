import * as React from "react";

import { CellValue } from "../../types";

const CellImage = {
  CROSS: require("../../img/cross.png"),
  ZERO: require("../../img/zero.png")
}

interface CellProps {
  value: CellValue
}



const Cell = ({value}: CellProps): JSX.Element => {
  let cellImage;
  if (value !== null) {
    cellImage = (value === 1) ? CellImage.CROSS : CellImage.ZERO;
  }

  return (
    <div className="cell">
      {value !== null && cellImage
        ? <img className="cell__image" src={cellImage} alt="ячейка" />
        : null
      }
    </div>
  );
}

export default Cell;