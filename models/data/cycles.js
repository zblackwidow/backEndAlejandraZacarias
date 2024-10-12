import "dotenv/config.js"
import  "../../config/database.js";
import Cycle from "../Cycle.js";


let cycles = [
    {
        models: "Honda",
        age: 20,
        type: "Naked",
        stock: true
    },
    {
        models: "Honda",
        age: 10,
        type: "Naked",
        stock: true
    },
    {
        models: "Yamaha",
        age: 2,
        type: "Naked",
        stock: false
    },
    {
        models: "Rouser",
        age: 2,
        type: "Naked",
        stock: false
    },
    {
        models: "BMW",
        age: 5,
        type: "Sport",
        stock: true
    },
    {
        models: "Gilera",
        age: 7,
        type: "Sport",
        stock: true
    },
    {
        models: "RVM",
        age: 20,
        type: "Sport",
        stock: false
    },
    {
        models: "Italic",
        age: 30,
        type: "Chopper",
        stock: true
    },

]


Cycle.insertMany(cycles)
