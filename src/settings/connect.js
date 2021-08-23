const mongoose = require("mongoose");

const fs = require("fs");
const password = fs.readFileSync("./.pass", "utf8");

const uri = `mongodb+srv://jeffyMesquita:${password.trim()}@cluster0.y3vce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connect = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .catch(console.error);
};

module.exports = connect;
