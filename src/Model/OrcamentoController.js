const mongoose = require('mongoose');
   
const orcamentoSheme = new mongoose.Schema({

    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
  phoneNumber: {
        type: Number,
        required:true
    },
    email: {
        type: String,
        required:true,
        lowercase:true
    },
    city: {
        type: String,
        required:true
    },
    companyName: {
        type: String,
        required:true
    },
    companyArea: {
        type: String,
        required:true
    },
    serviceType: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    }
}, { timestamps:true })


const orcamento = mongoose.model('Orcamento', orcamentoSheme);

module.exports = orcamento;

