import { h } from "preact";
import { SELECT_NUMBER } from "../constants/actions";

const NumberBox = ({ dispatch, number, isSelected }) => {
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
      onClick={cbClick}
      //onKeyDown={cbClick} // TODO handle axe
    >
      {number}
    </a>
  );
};

const View = ({ numbers, dispatch, isSelected }) =>
  numbers.map((num) => (
    <li
      role={num ? "gridcell" : "cell"}
      aria-selected={isSelected}
      className="card__box"
    >
      {num ? (
        <NumberBox
          dispatch={dispatch}
          number={num}
          isSelected={isSelected(num)}
        />
      ) : null}
    </li>
  ));

export default View;
