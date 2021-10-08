const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qfga9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(() => console.log("Database connection succesfully established"))
    .catch((error) => console.log("Something went wrong", error));
}

module.exports = connect;
