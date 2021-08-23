const express = require("express");
const app = express();
const connectDb = require("./src/settings/connect")
const { createUserController, getUserController } = require("./src/controllers/users/index")

connectDb();

const User = require("./src/models/user");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/user", createUserController);
app.get("/api/user/:id", getUserController);

app.listen(3000);
