const mongoose = require("mongoose")
const { Schema, Types } = mongoose


const ObjectID = Types.ObjectId



const interest_calculate_Schema = new Schema({
   buyer_id: { type: ObjectID, required: true }, //  company id in  mongodb

   amount: { type: Number, required: true },
   days: { type: Number, required: true },
})

module.exports =  interest_calculate_Schema
