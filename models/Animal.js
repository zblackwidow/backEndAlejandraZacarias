import { Schema, model } from "mongoose";

let collection = 'animals';
let schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    gender: {type: String, required: true},
    alive: {type: Boolean, required: true},
    age: {type: Number, required: true}
    },{
    timestamps: true
})

let Animal = model(collection, schema)
export default Animal
