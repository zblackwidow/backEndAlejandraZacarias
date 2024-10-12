import {Schema, model} from "mongoose";

let collection = 'states';
let schema = new Schema ({
    name: {type: String, required: true},
    capital: {type:String,required:true},
    country:{type:String,required:true},
    population:{type:Number,required:true},
    area:{type:Number,required:true},
    democracy:{type:Boolean,required:true}
})

let States = model(collection, schema)
export default States