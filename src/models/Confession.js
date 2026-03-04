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
    },
    reports: [
        {
            ghostId: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    isHidden: {
        type: Boolean,
        default: false
    }
});

confessionSchema.index({ createdAt: -1 });
confessionSchema.index({ ghostId: 1 });
confessionSchema.index({ isHidden: 1 });

export const Confession = mongoose.model("Confession", confessionSchema);