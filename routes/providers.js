const express = require('express');
const ProviderRouter = express.Router();
const { index, create, update, destroy } = require('../controllers/providers.js')

//CREATE - creates a new provider
ProviderRouter.post('/', create);

//READ - shows all providers
ProviderRouter.get('/', index);

//UPDATE - update provider information
ProviderRouter.put('/:providerinfo', update);

module.exports = ProviderRouter









//Export routes
modules.exports = ProviderRouter;
