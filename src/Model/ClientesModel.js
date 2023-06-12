import ClienteSchema from "../Schemas/ClientesSchema.js"

const insertCliente = (cliente) => {
    const clienteCreated = new ClienteSchema({ ...cliente })
    return clienteCreated.save().then(
        (o) => {
            return o
        }

    ).catch(
        (e) => {
            return e
        }
    )
}
const getCliente = (filter, skip, limit) => {
    filter = filter || ''
    return ClienteSchema.find({
        $or: [
            { nome: new RegExp('.*' + filter + '.*', 'i') },
            { telefone: new RegExp('.*' + filter + '.*', 'i') },
            { email: new RegExp('.*' + filter + '.*', 'i') }

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

const deleteCliente = (id) => {
    return ClienteSchema.findByIdAndRemove(id).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Delete Colab')
        }

    )
}

const updateCliente = (id, update) => {
    return ClienteSchema.findByIdAndUpdate(id, update).then(
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
    insertCliente,
    deleteCliente,
    updateCliente,
    getCliente
}