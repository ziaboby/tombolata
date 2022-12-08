import { h } from "preact";
import { NEW_TOMBOLONE_NUMBER } from "../constants/actions";

let refTimeout = null;

export default ({ dispatch, number }) => (
  <section className="card__tombolone_number">
    <button
      onClick={() => {
        if (!refTimeout) {
          dispatch({ type: NEW_TOMBOLONE_NUMBER });
          refTimeout = window.setTimeout(() => {
            window.clearTimeout(refTimeout);
            refTimeout = null;
          }, 1000);
        }
      }}
    >
      New number
    </button>
    <div
      id="tombolone_number"
      className="card__box"
      role="status"
      aria-live={number ? "assertive" : "off"}
    >
      {number || ""}
    </div>
  </section>
);
