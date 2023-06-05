import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    name: { type: String },
    password: { type: String },

}, {
    timestamps: true
})

UserSchema.pre('save', function (next) {
    const user = this
    const salt = process.env.SALT
    if (this.isModified('password') || this.isNew) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err)
            }
            user.password = hash
            next()
        })
    } else {
        return next()
    }
})
const User = mongoose.model('Users', UserSchema)

export default User
