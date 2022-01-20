const express = require('express');
const orcamentoController = require('../Controller/orcamentoController')

const router = express.Router();



router.post('/orcamento/save' ,orcamentoController.Store);
router.get('/orcamento/list', orcamentoController.Index);
router.get('/orcamento/list/:id', orcamentoController.IndexOne);
router.get('/orcamento/delete/:id', orcamentoController.DeleteOne);


module.exports = router;