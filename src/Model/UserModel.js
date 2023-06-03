import UserSchema from "../Schemas/UserSchema.js";


const insertUser = (user) => {
    const userCreated = new UserSchema({ ...user })
    return userCreated.save().then(
        (o) => {
            return o
        }

    ).catch(
        (e) => {
            return e
        }
    )
}


const deleteUser = (id) => {
    return UserSchema.findByIdAndRemove(id).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Delete User')
        }

    )
}

const updateUser = (id, update) => {
    return UserSchema.findByIdAndUpdate(id, update).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Updated User')
        }

    )
}


export default {
    insertUser,
    deleteUser,
    updateUser
}