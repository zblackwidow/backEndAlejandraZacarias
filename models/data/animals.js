import "dotenv/config.js"
import  "../../config/database.js";
import Animal from "../Animal.js";
import Cycle from "../Cycle.js";

let animals = [
    {
        name: "Oso",
        type: "Mamifero",
        gender: "Masculino",
        alive: true,
        age: 2,
    },
    {
        name: "Perro",
        type: "Mamifero",
        gender: "Masculino",
        alive: true,
        age: 2,
    },
    {
        name: "Paloma",
        type: "Ave",
        gender: "Femenino",
        alive: false,
        age: 2,
    }, 
    {
        name: "Ballena",
        type: "Mamifero",
        gender: "Masculino",
        alive: true,
        age: 2,
    },
    {
        name: "Perro",
        type: "Mamifero",
        gender: "Masculino",
        alive: true,
        age: 2,
    },
    {
        name: "Gorreon",
        type: "Ave",
        gender: "Masculino",
        alive: true,
        age: 3,
    },
    {
        name: "Perdiz",
        type: "Ave",
        gender: "Masculino",
        alive: true,
        age: 4,
    },
    {
        name: "Paloma",
        type: "Ave",
        gender: "Femenino",
        alive: false,
        age: 2, 
    },
    {
        name:"Gato",
        type: "Mamifero",
        gender: "Masculino",
        alive: true,
        age: 2,
    },
    {
        name: "Mono",
        type: "Mamifero",
        gender: "Masculino",
        alive: true,
        age: 18,
    },
    
    
]


Animal.insertMany(animals) 