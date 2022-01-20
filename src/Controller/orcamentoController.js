const Orcamento = require('../Model/OrcamentoController');


module.exports = {
    
    async Store(req, res){
        const { firstName, lastName, city, phoneNumber, companyName, companyArea, email, serviceType, description} = req.body
    
        try{
            const orcamento = new Orcamento({
                firstName, lastName, city, phoneNumber, companyName, companyArea, email, serviceType, description
            })
            const response = await orcamento.save()
            return res.json(response)
            
        } catch (erro)
        {
            return res.status(400).send({ "erro": "Orcamento unsaved", erro })
            
        }
    },

    async Index(req, res){
    
        try{
           
            const orcamento = await Orcamento.find(req.body)
            return res.json(orcamento)
            
        } catch (erro)
        {
            return res.status(400).send({ "erro": "orcamento unListed" })
           
        }
    },

    async IndexOne(req, res){
    
        try{
			const orcamento = await Orcamento.findOne({_id:req.params.id});
			res.send(orcamento)
		}catch(erro){
			return res.status(400).send({"error": "falha ao listar orcamento"})
		}
    },

    async DeleteOne(req, res){
		try{
			const orcamento = await Orcamento.deleteOne({_id:req.params.id});
			res.send({"message": "Orcamento apagado com sucesso"})

		}catch(erro){
			return res.status(400).send({"error": "falha ao Deletar orcamento"})
		}
	}
}