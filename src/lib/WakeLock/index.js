export function lockScreen() {
  if ("wakeLock" in navigator) {
    (async function () {
      await requestLockScreen();
    })();
  }
}

export async function requestLockScreen() {
  try {
    await navigator.wakeLock.request("screen");
  } catch (err) {
    console.log(err);
  }
}
