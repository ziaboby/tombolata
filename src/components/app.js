import { h } from "preact";
import { useReducer, useCallback, useEffect } from "preact/hooks";
import cards, { initialState, MODE } from "../reducers/cards";
import { RESTORE_STATE } from "../constants/actions";
import Controllers from "./controllers";
import TomboloneNumbersGenerator from "./tomboloneNumbersGenerator";
import Card from "./card";
import TomboloneCard from "./TomboloneCard";
import settings from "../../package.json";

const App = () => {
  const [state, dispatch] = useReducer(cards, initialState);
  const isSelected = useCallback(
    (num) => state.selectedNumbers.includes(num),
    [state.selectedNumbers]
  );
  const isTombolone = state.mode === MODE[1];

  useEffect(() => {
    window.onpopstate = function ({ state = {} }) {
      dispatch({ type: RESTORE_STATE, state });
    };
  }, []);

  return (
    <div id="app" className="container">
      <header>
        <h1>Tombolata</h1>
      </header>
      <main>
        <Controllers dispatch={dispatch} />
        {isTombolone ? (
          <TomboloneNumbersGenerator
            dispatch={dispatch}
            number={state.tomboloneNewNumber}
          />
        ) : null}
        <section className="card__list">
          {state.cards.map((card, index) =>
            isTombolone ? (
              <TomboloneCard
                key={index}
                dispatch={dispatch}
                isSelected={isSelected}
                numbers={card}
              />
            ) : (
              <Card
                key={index + card[0]}
                dispatch={dispatch}
                isSelected={isSelected}
                numbers={card}
                orderIndex={index}
              />
            )
          )}
        </section>
      </main>
      <footer
        style={{ textAlign: "right", paddingRight: "20px", marginTop: "50px" }}
      >
        {" "}
        {settings.version}{" "}
      </footer>
    </div>
  );
};

export default App;
