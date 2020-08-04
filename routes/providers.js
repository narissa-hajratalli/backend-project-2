const express = require('express');
const ProviderRouter = express.Router();
const { index, getById, create, update } = require('../controllers/providers.js')

//CREATE - creates a new provider
ProviderRouter.post('/', create);

//READ - shows all providers
ProviderRouter.get('/', index);

//READ - shows one provider
ProviderRouter.get('/:providerid', getById);

//UPDATE - update provider information
ProviderRouter.put('/:providerid', update);

module.exports = ProviderRouter;
