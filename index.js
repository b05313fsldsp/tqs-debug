//import express from 'express';
import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/",(req, res) => {
    console.log("[TEST]");
    res.send("hello, wlecome to the homepage"); });

app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));


app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
