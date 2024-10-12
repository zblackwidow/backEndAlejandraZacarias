import { Schema, model } from "mongoose";

let collection = 'cycles';
let schema = new Schema({
    models: {type: String, required: true},
    age: {type: Number, required: true},
    type: {type: String, required: true},
    stock : {type: Boolean, required: true}
},{
    timestamps: true
})

let Cycle = model(collection, schema)
export default Cycle