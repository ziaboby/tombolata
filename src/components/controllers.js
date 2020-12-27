import { h } from "preact";
import { NEW_CARD, NEW_TOMBOLONE, RESET } from "../constants/actions";

export default ({ dispatch }) => (<section className="card__controller">
    <button onClick={() => { dispatch({ type: RESET }) }}>Reset</button>
    <button onClick={() => { dispatch({ type: NEW_CARD, quantity: 2 }) }}>New Cards</button>
    <button onClick={() => { dispatch({ type: NEW_TOMBOLONE }) }}>New [TOMBOLONE]</button>
</section>)