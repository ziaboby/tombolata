import { useRef } from "preact/hooks";
import { NEW_CARD, NEW_TOMBOLONE, RESET } from "../constants/actions";

export default function Controllers({ dispatch }) {
  const nCardsRef = useRef();
  return (
    <section className="card__controller">
      <button
        onClick={() => {
          dispatch({ type: RESET });
        }}
      >
        Reset
      </button>
      <fieldset>
        <label>
          Number of cards
          <input defaultValue={6} min={1} max={6} ref={nCardsRef} type="number" />
        </label>
        <button
          onClick={() => {
            dispatch({
              type: NEW_CARD,
              quantity: !isNaN(nCardsRef.current.value) ? +nCardsRef.current.value : 6,
            });
          }}
        >
          New Cards
        </button>
      </fieldset>
      <button
        onClick={() => {
          dispatch({ type: NEW_TOMBOLONE });
        }}
      >
        New [TOMBOLONE]
      </button>
    </section>
  );
}
