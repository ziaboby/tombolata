import { h } from "preact";
import { SELECT_NUMBER } from "../constants/actions";

const NumberBox = ({ dispatch, number, isSelected, setActiveDescendant }) => {
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
      //onKeyDown={cbClick} // TODO handle axe
    >
      {number}
    </a>
  );
};

const View = ({ numbers, dispatch, isSelected, setActiveDescendant }) =>
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
        />
      ) : null}
    </div>
  ));

export default View;
