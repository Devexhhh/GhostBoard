import mongoose from 'mongoose';

const ghostActivitySchema = new mongoose.Schema({
    ghostId: { type: String, unique: true },
    confessionTime: [Date],
    voteTime: [Date]
})

export const GhostActivity = mongoose.model('GhostActivity', ghostActivitySchema);