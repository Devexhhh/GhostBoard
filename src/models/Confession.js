import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
    ghostId: String,
    value: Number
});

const confessionSchema = new mongoose.Schema({
    title: String,
    body: String,
    mood: String,
    ghostId: String,
    vote: [voteSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Confession = mongoose.model("Confession", confessionSchema);