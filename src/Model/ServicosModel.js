import ServicosSchemas from "../Schemas/ServicosSchemas.js"

const insertServico = async (servico) => {
    const servicoCreated = new ServicosSchemas({ ...servico })
    return await servicoCreated.save()
        .then(
            (o) => {
                return o
            }

        ).catch(
            (e) => {
                return e
            }
        )
}

const getServico = async (filter, skip, limit) => {
    filter = filter || ''
    return await ServicosSchemas.find({
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

const deleteServico = async (id) => {
    return await ServicosSchemas.findByIdAndRemove(id)
        .then(
            (o) => {
                return o
            }
        ).catch(
            (e) => {
                console.log('Error on Delete Serviço')
                return e
            }
        )
}

const updateServico = async (id, update) => {
    return await ServicosSchemas.findByIdAndUpdate(id, update).then(
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