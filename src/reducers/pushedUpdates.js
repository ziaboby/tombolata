import {
  UPDATE_SESSION_CONTROLLER_STATUS,
  UPDATE_TOMBOLONE_BUTTON_STATUS,
  UPDATE_TOMBOLONE_NUMBER,
  SET_PUSHER_API_SETTINGS,
} from "../constants/actions";
import { getSessionControllerStatusId } from "../constants/pushedUpdates";

export const initialState = {
  sessionControllerStatus: getSessionControllerStatusId("unchecked"),
  isTomboloneButtonEnabled: true,
  tomboloneLatestNumber: undefined,
  pusherSettings: {},
};

export default function (state, action) {
  const logic = {
    [UPDATE_SESSION_CONTROLLER_STATUS]: () =>
      updateStateBase(state, action, "sessionControllerStatus"),
    [UPDATE_TOMBOLONE_BUTTON_STATUS]: () =>
      updateStateBase(state, action, "isTomboloneButtonEnabled"),
    [UPDATE_TOMBOLONE_NUMBER]: () =>
      updateStateBase(state, action, "tomboloneLatestNumber"),
    [SET_PUSHER_API_SETTINGS]: () =>
      updateStateBase(state, action, "pusherSettings"),
  };

  if (logic[action.type]) {
    return logic[action.type]();
  }

  return state;
}

function updateStateBase(state, action, propertyToUpdate) {
  return {
    ...state,
    [propertyToUpdate]: action.payload,
  };
}
