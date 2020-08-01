const express = require('express');
const ProviderRouter = express.Router();
const { index, create, update } = require('../controllers/providers.js')

//CREATE - creates a new provider
ProviderRouter.post('/', create);

//READ - shows all providers
ProviderRouter.get('/', index);

//UPDATE - update provider information
ProviderRouter.put('/:providerid', update);

module.exports = ProviderRouter;
