// Instanciation du package "connect-flash" dans la constante "flash"
exports.init = async(app) => {
    try {
        
        // ######### Flash - Middleware de gestion de "notifs" #######
        // $ npm install connect-flash --save
        // Le middleware connect-flash est un middleware Express qui stocke les messages dans la session et les transmet à la vue via la variable flash. Il est généralement utilisé en combinaison avec connect-mongo pour stocker les messages dans la base de données.
        app.use(require('flash')());
    } catch (err) {
        throw new Error('%ERROR% --> middlewares > init(app) ? catch(err) > Erreur dans le middleware "flash" : ', err);
    }

};
// exports.notif = async (app) => {
//     // app.use(session());
//     app.use(require('flash')());
//     app.use((req, res, next) => {
//         req.flash('test_flash','Test de la notification flash');
//         res.redirect('/flash');
//         console.log(res.local.flash);
//         next();
//     });	
// }