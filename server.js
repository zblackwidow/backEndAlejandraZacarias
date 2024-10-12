import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./router/index.js";

const server = express();
const PORT = process.env.PORT || 8080;

const ready = () => console.log("Server ready in port :" + PORT);



// middlewares son funciones que se ejecutan antes de cada peticion..

server.use(express.json()) // le dice a express que queremos que los datos que recibamos sean en formato json

server.use(express.urlencoded({ extended: true })) // le dice a express que queremos  recibir los datos parametros y querys

server.use(cors())

server.use(morgan("dev")) // le dice a express que queremos que los logs de las peticiones se muestren en consola

server.use("/api", indexRouter); // le estamos asignando la ruta /api a la ruta de index
server.listen(PORT, ready);






// server.get("/", (request, response) => {
//   response.send("Hello Express");
// });

// server.get("/saludo", (request, response) => {
//     response.send("Hola como estas pinpon");
//     });