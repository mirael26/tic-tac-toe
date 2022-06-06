import * as React from "react";

import { CellValue } from "../../types";

const CellImage = {
  CROSS: require("../../img/cross.png"),
  ZERO: require("../../img/zero.png")
}

interface CellProps {
  value: CellValue,
  cellId: number,
}

const Cell = ({value, cellId}: CellProps): JSX.Element => {
  let cellImage;
  if (value !== null) {
    cellImage = (value === 1) ? CellImage.CROSS : CellImage.ZERO;
  }

  return (
    <div className="cell" id={cellId.toString()}>
      {value !== null && cellImage
        ? <img className="cell__image" src={cellImage} alt="ячейка" />
        : null
      }
    </div>
  );
}

export default Cell;