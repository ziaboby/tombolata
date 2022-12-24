const express = require("express");
const app = express();

const Pusher = require("pusher");

const {
  PUSHERJS_APP_ID: appId,
  PUSHERJS_API_KEY: apiKey,
  PUSHERJS_API_SECRET: secret,
  PUSHERJS_CLUSTER: cluster,
  PUSHERJS_CHANNEL_NAME: channelName,
  PUSHERJS_EVENT_TOMBOLONE_STATUS: tomboloneStatus,
  PUSHERJS_EVENT_TOMBOLONE_NEW_NUMBER: tomboloneNewNumber,
} = process.env;

const pusher =
  appId && apiKey && secret && cluster
    ? new Pusher({
        appId,
        key: apiKey,
        secret,
        cluster,
        useTLS: true,
      })
    : null;

app.use(express.json());

app.post("/auth", (request, response) => {
  const { code } = request.body || {};

  if (process.env.AUTH_CODE && code && code == process.env.AUTH_CODE) {
    response.json({
      output: true,
      value: { code },
      pusherJs: {
        apiKey,
        cluster,
        channelName,
        events: {
          tomboloneStatus,
          tomboloneNewNumber,
        },
      },
    });
    return;
  }
  response.json({ output: false, code });
});

app.get("/tombolone/active", (request, response) => {
  const { value } = request.query;

  if (pusher && value !== undefined) {
    const convertedToBooleanFigure = value == 0 ? 0 : 1;
    sendEventMessage(response, {
      eventName: tomboloneStatus,
      value: convertedToBooleanFigure,
    });
  } else {
    response.json({ output: false, value });
  }
});

app.get("/tombolone/number", (request, response) => {
  const { value } = request.query;

  if (pusher && !isNaN(value)) {
    const newNumber = +value;
    sendEventMessage(response, {
      eventName: tomboloneNewNumber,
      value: newNumber,
    });
  } else {
    response.json({ output: false, value });
  }
});

module.exports = app;

function sendEventMessage(response, pusherParams) {
  const { eventName, value } = pusherParams;

  pusher
    .trigger(channelName, eventName, {
      message: value,
    })
    .then(() => {
      response.status(200).json({ output: true, value });
    })
    .catch((error) => {
      console.error(eventName, error);
    });
}
