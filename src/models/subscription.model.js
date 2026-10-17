import mongoose, {Schema} from "mongoose"
import { asyncHandler } from "../utils/asyncHandler"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subsribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // one to whom "subscriber" is subsribing
        ref: "User"
    }
}, {timestamps: true})


export const Subscription = mongoose.model("Subscription", subscriptionSchema)