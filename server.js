import express from "express";
import "dotenv/config.js";

const server = express();
const PORT = process.env.PORT || 8080;

const ready = () => console.log("Server ready in port :" + PORT);

server.get("/", (request, response) => {
  response.send("Hello Express");
});

server.get("/saludo", (request, response) => {
    response.send("Hola como estas pinpon");
    });

server.listen(PORT, ready);
