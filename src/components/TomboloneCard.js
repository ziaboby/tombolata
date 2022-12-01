import { h } from "preact";
import View from "./view";

export default ({ dispatch, numbers, isSelected }) => (
  <div className="card__container card__container--tombolone" role="grid">
    <div
      className="card card--tombolone"
      role="row"
      aria-multiselectable="false"
    >
      <View numbers={numbers} dispatch={dispatch} isSelected={isSelected} />
    </div>
  </div>
);
