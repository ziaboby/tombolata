export const MAP_SESSION_CONTROLLER_STATUS = {
  0: "unchecked",
  1: "checked",
  2: "disabled",
};

export function getSessionControllerStatusId(statusLabel) {
  const index = Object.values(MAP_SESSION_CONTROLLER_STATUS).indexOf(
    statusLabel
  );
  return index != -1 ? Object.keys(MAP_SESSION_CONTROLLER_STATUS)[index] : null;
}
