const express = require("express");
const app = express();
const api = require("./api");

app.use("/api", api);

app.listen(process.env.PORT || 3000);

//if (process.env.NODE_ENV === "development") {
app.use(express.static("public"));
//}
