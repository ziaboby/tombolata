import { h } from "preact";
import { SELECT_NUMBER } from "../constants/actions";

const NumberBox = ({ dispatch, number, isSelected, setActiveDescendant }) => {
  const cbClick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: SELECT_NUMBER, number });
  };
  return (
    <button
      id={number}
      className={`card__number${isSelected ? " card__number--selected" : ""}`}
      onFocus={() => {
        setActiveDescendant && setActiveDescendant(`cell-${number}`);
      }}
      onClick={cbClick}
      disabled={!setActiveDescendant}
      tabIndex="-1"
    >
      {number}
    </button>
  );
};

const View = ({ numbers, dispatch, isSelected, setActiveDescendant }) => {
  return numbers.map((num, index) => (
    <div
      key={num || Date.now() + index}
      role="gridcell"
      aria-selected={num ? isSelected(num) : undefined}
      aria-disabled={!num}
      className={`card__box${isSelected(num) ? " card__box--selected" : ""}`}
      id={num ? `cell-${num}` : undefined}
    >
      {num ? (
        <NumberBox
          dispatch={dispatch}
          number={num}
          isSelected={isSelected(num)}
          setActiveDescendant={setActiveDescendant}
        />
      ) : null}
    </div>
  ));
};

export default View;
