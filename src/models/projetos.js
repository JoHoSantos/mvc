import mongoose, { Schema } from 'mongoose';

const projetoSchema = new mongoose.Schema;(
    {
        nome: { type: String, required: true},
        contato: { type: Array, required: true},
        cpf: { type: String, required: true},
        endereço: { type: Array, required: true},
    }
)


const projetos = mongoose.model('projetos', projetoSchema);

export default projetos;