const express = require("express");
const app = express();

app.use(express.json());

app.post("/auth", (request, response) => {
  const { code } = request.body || {};

  if (process.env.AUTH_CODE && code && code == process.env.AUTH_CODE) {
    response.json({
      output: true,
      value: { code },
      pusherJs: {
        apiKey: process.env.PUSHERJS_API_KEY,
        cluster: process.env.PUSHERJS_CLUSTER,
        channelName: process.env.PUSHERJS_CHANNEL_NAME,
        events: {
          tomboloneStatus: process.env.PUSHERJS_EVENT_TOMBOLONE_STATUS,
          tomboloneNewNumber: process.env.PUSHERJS_EVENT_TOMBOLONE_NEW_NUMBER,
        },
      },
    });
    return;
  }
  response.json({ output: false, code });
});

app.get("/tombolone/active", (request, response) => {
  const { value } = request.query;

  if (value) {
    // TODO disable Tombolone button to others
  } else {
    // TODO enable Tombolone button to others
  }

  response.json({ output: false, value });
});

app.get("/tombolone/number", (request, response) => {
  const { value } = request.query;

  // TODO send number to all, then response with {output: true}
  response.json({ output: false, value });
});

module.exports = app;
