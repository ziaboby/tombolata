import {
  NEW_CARD,
  NEW_TOMBOLONE,
  NEW_TOMBOLONE_NUMBER,
  RESET,
  RESTORE_STATE,
  SELECT_NUMBER,
} from "../constants/actions";
import { getRandom } from "../lib/utils";
import Cards from "../lib/Cards";

const LOCAL_STORAGE_KEY = "tombolata";

const storedInitialState = window.sessionStorage.getItem(LOCAL_STORAGE_KEY);

const defaultInitialState = {
  cards: [],
  selectedNumbers: [],
  tomboloneFreeNumbers: [],
  tomboloneNewNumber: null,
  mode: "",
};

export const initialState = storedInitialState
  ? JSON.parse(storedInitialState)
  : defaultInitialState;

window.history.pushState(initialState, "", "#" + (initialState.mode || ""));

export const MODE = ["cards", "tombolone"];

const Reducer = (state, action) => {
  switch (action.type) {
    case RESTORE_STATE: {
      if (action.state) {
        return {
          ...action.state,
        };
      }
      return state;
    }
    case RESET: {
      return {
        ...state,
        selectedNumbers: [],
        tomboloneFreeNumbers: state.tomboloneFreeNumbers.length
          ? [...state.cards[0], ...state.cards[1], ...state.cards[2]]
          : defaultInitialState.tomboloneFreeNumbers,
      };
    }
    case NEW_CARD: {
      const initialCards = Cards.getCards();
      const cards = initialCards.slice(0, action?.quantity ?? 6);
      return {
        ...defaultInitialState,
        mode: MODE[0],
        cards,
      };
    }
    case NEW_TOMBOLONE: {
      const cards = Cards.convertOutputGetTomboloneCardsV2ToV1(Cards.getTomboloneCardsV2());

      return {
        ...defaultInitialState,
        mode: MODE[1],
        cards,
        tomboloneFreeNumbers: [...cards[0], ...cards[1], ...cards[2]],
      };
    }
    case NEW_TOMBOLONE_NUMBER: {
      if (!state.tomboloneFreeNumbers.length) {
        return state;
      }
      const index = getRandom(0, state.tomboloneFreeNumbers.length - 1),
        tomboloneFreeNumbers = state.tomboloneFreeNumbers.slice(0),
        tomboloneNewNumber = tomboloneFreeNumbers.splice(index, 1)[0];
      return {
        ...state,
        tomboloneNewNumber,
        tomboloneFreeNumbers,
        selectedNumbers: [...state.selectedNumbers, tomboloneNewNumber],
      };
    }
    case SELECT_NUMBER: {
      if (state.mode === MODE[1]) {
        return state;
      }
      return {
        ...state,
        selectedNumbers: state.selectedNumbers.includes(action.number)
          ? state.selectedNumbers.filter((item) => item != action.number)
          : [...state.selectedNumbers, action.number],
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};

export default (state, action) => {
  const newState = Reducer(state, action);

  if (action.type === RESET) {
    window.sessionStorage.removeItem(LOCAL_STORAGE_KEY);
  } else {
    window.sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
  }

  window.history.pushState(newState, "", "#" + (newState.mode || ""));

  return newState;
};
