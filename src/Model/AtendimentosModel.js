import AtendimentosSchema from "../Schemas/AtendimentosSchema"

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
    updateAtendimento
}