// const app = require('express')();
// Appel des routes dans ce fichier /models/router/index.js
// Appel des routes publics
exports.init = async (app) => {
    try {
        // Appel des routes publics
        await app.use(require(process.env.IX_MODELS_PUBLIC_PAGES).init(app));
        // Appel des routes privées
        // app.use(require(process.env.IX_MODELS_PRIVATE_PAGES));
        // Appel des routes core (routes serveur)
        // app.use(require(process.env.IX_MODELS_CORE_MASTER));
    } catch (err) {
        throw new Error(
            'router > init(app) > catch(app) > this_erroor_has_bund : ',
            err);
    }
}
