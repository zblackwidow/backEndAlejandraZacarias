import "dotenv/config.js"
import  "../../config/database.js";
import User from "../User.js";


let users = [
    {
        name: "Alejandra Zacarias",
        email: "alejandra.zacarias@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role: 1
    },
    {
        name: "Juan",
        email: "juan.perez@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role:2
    },
    {
        name: "Maria",
        email: "maria.perez@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role: 3
    },
    {
        name: "Pedro",
        email: "pedro.perez@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role: 4
    },
    {
        name: "Luis",
        email: "luis.perez@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role: 5
    },  
    {
        name: "Carlos",
        email: "carlos.perez@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role: 6
    },
    {
        name: "Daniel",
        email: "daniel.perez@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role: 7
    },  
    {
        name: "Juan",
        email: "juan.perez@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role: 8
    },  
    {
        name: "Daniela",
        email: "daniela.perez@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role: 9
    },
    {
        name: "Martin",
        email: "martin.perez@gmail.com",
        password: "123456",
        photo: "https://i.ibb.co/4b3m5tQ/alejandra.png",
        role: 10
    },
]

User.insertMany(users)
