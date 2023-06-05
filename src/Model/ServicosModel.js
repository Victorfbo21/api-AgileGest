import ServicosSchemas from "../Schemas/ServicosSchemas.js"

const insertServico = (servico) => {
    const servicoCreated = new ServicosSchemas({ ...servico })
    return servicoCreated.save().then(
        (o) => {
            return o
        }

    ).catch(
        (e) => {
            return e
        }
    )
}

const getServico = (filter, skip, limit) => {
    filter = filter || ''
    return ServicosSchemas.find({
        $or: [
            { nomeServico: new RegExp('.*' + filter + '.*', 'i') },
            { tempoMedio: new RegExp('.*' + filter + '.*', 'i') }
        ]
    }).skip(skip || 0).limit(limit || 0).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error Finding Serviços', e)
            return null
        }
    )
}

const deleteServico = (id) => {
    return ServicosSchemas.findByIdAndRemove(id).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Delete Serviço')
        }
    )
}

const updateServico = (id, update) => {
    return ServicosSchemas.findByIdAndUpdate(id, update).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Updated Serviço')
        }

    )
}


export default {
    insertServico,
    deleteServico,
    updateServico,
    getServico
}