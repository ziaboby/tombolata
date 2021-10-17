import { h } from "preact";
import { SELECT_NUMBER } from "../constants/actions";

const NumberBox = ({
  dispatch,
  number,
  isSelected,
  setActiveDescendant,
  onKeyArrowDown,
}) => {
  const cbClick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: SELECT_NUMBER, number });
  };
  return (
    <a
      id={number}
      href={`#${number}`}
      className={`card__number${isSelected ? " card__number--selected" : ""}`}
      onFocus={() => {
        setActiveDescendant(`cell-${number}`);
      }}
      onClick={cbClick}
      onKeyDown={onKeyArrowDown}
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
}) =>
  numbers.map((num) => (
    <div
      role="gridcell"
      aria-selected={isSelected(num)}
      className="card__box"
      id={`cell-${num}`}
    >
      {num ? (
        <NumberBox
          dispatch={dispatch}
          number={num}
          isSelected={isSelected(num)}
          setActiveDescendant={setActiveDescendant}
          onKeyArrowDown={onKeyArrowDown}
        />
      ) : null}
    </div>
  ));

export default View;
