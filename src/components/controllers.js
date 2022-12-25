import { h } from "preact";
import { useReducer } from "preact/hooks";
import {
  NEW_CARD,
  NEW_TOMBOLONE,
  RESET,
  SET_PUSHER_API_SETTINGS,
} from "../constants/actions";
import pushedUpdates, { initialState } from "../reducers/pushedUpdates";

const Controllers = ({ dispatch, tomboloneSelected }) => {
  const [pushedUpdatesState, pushedUpdatesDispatch] = useReducer(
    pushedUpdates,
    initialState
  );

  const inSession = !!Object.keys(pushedUpdatesState.pusherSettings).length,
    isNewTomboloneButtonEnabled =
      !inSession || pushedUpdatesState.isTomboloneButtonEnabled;

  return (
    <>
      <CardController
        dispatch={dispatch}
        isNewTomboloneButtonEnabled={isNewTomboloneButtonEnabled}
      />
      <SessionController
        dispatch={pushedUpdatesDispatch}
        inSession={inSession}
        tomboloneNumber={pushedUpdatesState.tomboloneLatestNumber}
        tomboloneSelected={tomboloneSelected}
      />
    </>
  );
};

const CardController = ({ dispatch, isNewTomboloneButtonEnabled }) => (
  <section className="card__controller">
    <button
      onClick={() => {
        dispatch({ type: RESET });
      }}
    >
      Reset
    </button>
    <button
      onClick={() => {
        dispatch({ type: NEW_CARD, quantity: 2 });
      }}
    >
      New Cards
    </button>
    <button
      onClick={() => {
        dispatch({ type: NEW_TOMBOLONE });
      }}
      disabled={!isNewTomboloneButtonEnabled}
    >
      New [TOMBOLONE]
    </button>
  </section>
);

const FIELD_NAME = "session_id";

const SessionController = ({
  inSession,
  tomboloneNumber,
  tomboloneSelected,
  dispatch,
}) => {
  const onSubmitHandler = function (event) {
    event.preventDefault();

    const formData = new FormData(event.target),
      sessionId = formData.get(FIELD_NAME);

    checkIfUserIsAuthorized(sessionId)
      .then((res) => res.json())
      .then((data) => {
        if (data.output) {
          dispatch(SET_PUSHER_API_SETTINGS, { payload: { ...data.pusherJs } });
        } else {
          console.error("session auth - wrong code");
        }
      })
      .catch((error) => {
        console.error("session auth", error);
      });
  };

  const showLatestNumber = !tomboloneSelected && !!tomboloneNumber;

  return (
    <section
      className={
        "session-controller" +
        (showLatestNumber ? " session-controller--number" : "")
      }
    >
      {!inSession ? (
        <form onSubmit={onSubmitHandler}>
          <label>
            Type in the session ID
            <input id={FIELD_NAME} name={FIELD_NAME} type="text" />
          </label>
          <button type="submit">Enter</button>
        </form>
      ) : showLatestNumber ? (
        <div className="session-tnumber">
          <span>Latest Tombolone Number: </span>
          <a href={`#${tomboloneNumber}`}>{tomboloneNumber}</a>
        </div>
      ) : null}
    </section>
  );
};

function checkIfUserIsAuthorized(sessionId) {
  return window.fetch("/api/auth", {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: sessionId }),
  });
}

export default Controllers;
