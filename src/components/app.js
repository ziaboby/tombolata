import { useCallback, useEffect, useReducer } from "preact/hooks";
import settings from "../../package.json";
import { RESTORE_STATE } from "../constants/actions";
import { lockScreen } from "../lib/WakeLock";
import cards, { initialState, MODE } from "../reducers/cards";
import Card from "./card";
import Controllers from "./controllers";
import { GoToNumberCTA } from "./GoToNumberCTA";
import TomboloneCard from "./TomboloneCard";
import TomboloneNumbersGenerator from "./tomboloneNumbersGenerator";

const App = () => {
  const [state, dispatch] = useReducer(cards, initialState);
  const isSelected = useCallback(
    (num) => state.selectedNumbers.includes(num),
    [state.selectedNumbers]
  );
  const isTombolone = state.mode === MODE[1];

  useEffect(() => {
    lockScreen();
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
          <TomboloneNumbersGenerator dispatch={dispatch} number={state.tomboloneNewNumber} />
        ) : state.cards && state.cards.length ? (
          <GoToNumberCTA />
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
      <footer>v.{settings.version} </footer>
    </div>
  );
};

export default App;
