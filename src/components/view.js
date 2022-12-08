import { h } from "preact";
import { useMemo } from "preact/hooks";
import { SELECT_NUMBER } from "../constants/actions";

const NumberBox = ({
  dispatch,
  number,
  isSelected,
  setActiveDescendant,
  onKeyArrowDown,
  isFirstCardNumber = false,
}) => {
  const cbClick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: SELECT_NUMBER, number });
  };
  return (
    <a
      id={number}
      href={setActiveDescendant ? `#${number}` : undefined}
      role="link"
      className={`card__number${isSelected ? " card__number--selected" : ""}`}
      onFocus={() => {
        setActiveDescendant && setActiveDescendant(`cell-${number}`);
      }}
      onClick={cbClick}
      onKeyDown={onKeyArrowDown}
      aria-disabled={!setActiveDescendant}
      tabIndex={isFirstCardNumber ? 0 : -1}
    >
      {number}
    </a>
  );
};

const View = ({
  numbers,
  dispatch,
  isSelected,
  setActiveDescendant,
  onKeyArrowDown,
}) => {
  const firstNumber = useMemo(
    () => numbers.find((item) => item && !isNaN(item)),
    [numbers]
  );

  return numbers.map((num) => (
    <div
      role="gridcell"
      aria-selected={num ? isSelected(num) : undefined}
      className="card__box"
      id={num ? `cell-${num}` : undefined}
    >
      {num ? (
        <NumberBox
          dispatch={dispatch}
          number={num}
          isSelected={isSelected(num)}
          setActiveDescendant={setActiveDescendant}
          onKeyArrowDown={onKeyArrowDown}
          isFirstCardNumber={num === firstNumber}
        />
      ) : null}
    </div>
  ));
};

export default View;
