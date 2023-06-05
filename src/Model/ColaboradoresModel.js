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
const getColaboradores = (filter, skip, limit) => {
    filter = filter || ''
    return ColaboradorSchema.find({
        $or: [
            { nome: new RegExp('.*' + filter + '.*', 'i') },
            { telefone: new RegExp('.*' + filter + '.*', 'i') },
            { funcao: new RegExp('.*' + filter + '.*', 'i') }

        ]
    }).skip(skip || 0).limit(limit || 0).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error Finding Colabs', e)
            return null
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
    updateColab,
    getColaboradores
}