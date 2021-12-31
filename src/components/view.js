import { h } from "preact";
import { SELECT_NUMBER } from "../constants/actions";

const NumberBox = ({ dispatch, number }) => (
  <div
    className="card__number"
    onClick={() => {
      dispatch({ type: SELECT_NUMBER, number });
    }}
  >
    {number}
  </div>
);

const View = ({ numbers, dispatch, isSelected }) =>
  numbers.map((num) => (
    <li
      className={"card__box" + (isSelected(num) ? " card__box--selected" : "")}
    >
      {num ? <NumberBox dispatch={dispatch} number={num} /> : null}
    </li>
  ));

export default View;
