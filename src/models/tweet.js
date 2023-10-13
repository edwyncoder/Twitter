import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    comments: [
        {
            type: String
        }
    ]
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;