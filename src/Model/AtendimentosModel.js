import AtendimentosSchema from "../Schemas/AtendimentosSchema.js"

const insertAtendimento = (atendimento) => {
    const atendimentoCreated = new AtendimentosSchema({ ...atendimento })
    return atendimentoCreated.save().then(
        (o) => {
            return o
        }

    ).catch(
        (e) => {
            return e
        }
    )
}

const getAtendimento = (filter, skip, limit) => {
    filter = filter || ''
    return AtendimentosSchema.find({
        $or: [
            { emAndamento: new RegExp('.*' + filter + '.*', 'i') },
            { colaborador: new RegExp('.*' + filter + '.*', 'i') },
            { servico: new RegExp('.*' + filter + '.*', 'i') }

        ]
    }).skip(skip || 0).limit(limit || 0).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error Finding Messages', e)
            return null
        }
    )
}

const deleteAtendimento = (id) => {
    return AtendimentosSchema.findByIdAndRemove(id).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Error on Delete Colab')
        }

    )
}

const updateAtendimento = (id, update) => {
    return AtendimentosSchema.findByIdAndUpdate(id, update).then(
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
    insertAtendimento,
    deleteAtendimento,
    updateAtendimento,
    getAtendimento
}