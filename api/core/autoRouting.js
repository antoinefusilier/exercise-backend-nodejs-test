const app = require('express')();
const utils_core_auto_routing = require('utils/core/auto_routing');

app.use((req, res, next) => {
    utils_core_auto_routing(req, res, next);
});