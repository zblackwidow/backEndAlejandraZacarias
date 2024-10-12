import mongoose from 'mongoose';
import "dotenv/config.js";

let url = process.env.URI_MONGO;

console.log(url);

// manera 1 de conectarse a la base de datos
// mongoose.connect(url)
// .then (()=> console.log('Conectado a la base de datos'))
// .catch((error) => console.log(error));

// manera 2 de conectarse a la base de datos
async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log('Conectado a la base de datos');
        } catch (error) {
        console.log(error);
    }
    }

connectDB();
