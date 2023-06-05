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
const getUsers = (filter, skip, limit) => {
    filter = filter || ''
    return UserSchema.find({
        $or: [
            { email: new RegExp('.*' + filter + '.*', 'i') },


        ]
    }).skip(skip || 0).limit(limit || 0).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error Finding Users', e)
            return null
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
    updateUser,
    getUsers
}