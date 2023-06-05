import ColaboradorSchema from "../Schemas/ColaboradoresSchema.js"

const insertColab = (colaborador) => {
    const colabCreated = new ColaboradorSchema({ ...colaborador })
    return colabCreated.save().then(
        (o) => {
            return o
        }

    ).catch(
        (e) => {
            return e
        }
    )
}


const deleteColab = (id) => {
    return ColaboradorSchema.findByIdAndRemove(id).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Delete Colab')
        }

    )
}

const updateColab = (id, update) => {
    return ColaboradorSchema.findByIdAndUpdate(id, update).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Updated Colab')
        }

    )
}


export default {
    insertColab,
    deleteColab,
    updateColab
}