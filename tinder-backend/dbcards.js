import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
    name: String,
    imgurl: String
})

export default mongoose.model("cards", cardSchema)