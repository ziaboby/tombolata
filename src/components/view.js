import { h } from "preact";
import { SELECT_NUMBER } from "../constants/actions";

const NumberBox = ({ dispatch, number, isSelected }) => (<div
    className={"card__number" + (isSelected ? " card__number--selected" : '')}
    onClick={() => { dispatch({ type: SELECT_NUMBER, number }) }}>
    {number}
</div>)

const View = ({ numbers, dispatch, isSelected }) => numbers.map(num => <li className="card__box">{num ? <NumberBox dispatch={dispatch} number={num} isSelected={isSelected(num)} /> : null}</li>)

export default View