import { h } from "preact";
import View from "./view";

export default ({ dispatch, numbers, isSelected }) => (
  <div
    className="card__container card__container--tombolone"
    role="grid"
    aria-label="Tombolone"
  >
    <div className="card card--tombolone">
      <div className="card__row" role="row">
        <View
          numbers={numbers.slice(0, 10)}
          dispatch={dispatch}
          isSelected={isSelected}
        />
      </div>
      <div className="card__row" role="row">
        <View
          numbers={numbers.slice(10, 20)}
          dispatch={dispatch}
          isSelected={isSelected}
        />
      </div>
      <div className="card__row" role="row">
        <View
          numbers={numbers.slice(20, 30)}
          dispatch={dispatch}
          isSelected={isSelected}
        />
      </div>
    </div>
  </div>
);
