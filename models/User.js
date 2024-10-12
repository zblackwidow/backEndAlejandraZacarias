import { Schema, model } from "mongoose";

// creado con 
// const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// export const User = model("User", UserSchema);

// profe 
// primero se crea la coleccion de como van a estar los usuarios
let collection = 'users';
// vamos a definir el esquema
let schema = new Schema({
    // el required es si es obligatorio o no
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, required: true},
    role : {type: Number, required: true}
},{
    // propiedad de mongo, que se usa para saber cuando se creo el documento guarda la fecha de creacion del usuario y cuando se le hizo un update
    timestamps: true
})

let User = model(collection, schema)
export default User