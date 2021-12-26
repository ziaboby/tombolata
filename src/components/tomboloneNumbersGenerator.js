import { h } from "preact";
import { NEW_TOMBOLONE_NUMBER } from "../constants/actions";

export default ({ dispatch, number }) => (<section className="card__tombolone_number">
    <button onClick={() => { dispatch({ type: NEW_TOMBOLONE_NUMBER }) }}>New number</button>
    <div id="tombolone_number" className="card__box">{number || ''}</div>
</section>)

