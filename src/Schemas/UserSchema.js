import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: { type: String },
    password: { type: String },

}, {
    timestamps: true
})

const User = mongoose.model('Users', UserSchema)

export default User
