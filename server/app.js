const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");

const app = express();

mongoose.connect(
  "mongodb://peter:password1234@ds155097.mlab.com:55097/graphql-practice",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
