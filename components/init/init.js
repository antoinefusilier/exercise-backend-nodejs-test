// init - Initialisation principale (ex: "MASTER_CONTROLLER")
const controllerFile = require('./initController.js');

exports.initApp = async (app) => {
    // Avertissement du début de la fonction d'initialisation
    const InitController = require('./initController.js');
    let initController = new InitController(app);
    
    let InitLogs = require('../initLogs/initLogs.js');
    let initLogs = new InitLogs(app);
    initLogs.add(app, 'INITIALISATION DE L\'APPLICATION...');
    console.log("INITIALISATION DE L'APPLICATION...");
  
    // const INIT_TEST = 'INITIALISATION DE L\'APPLICATION...';	
    // Utilisateur de la méthode "listen" de "Express" pour executer en boucle ce fichier "app.js"
    initLogs.add(app, 'LANCEMENT DU SERVEUR EXPRESS SUR LE PORT ' + process.env.API_PORT);
    app.listen(process.env.API_PORT, () => {
        // Affichage dans la console que le serveur Express tourne sur le port sélectionné.
        console.log('listening on http://localhost:'+process.env.API_PORT);
    })
    // Initialisation des middleswares
    // console.log('INITIALISATION DES MIDDLEWARES...');
    initLogs.add(app, 'INITIALISATION DES MIDDLEWARES...');

    const middlewares = await require('./initMiddleware.js');
    // Initialisation du router
    // const routing = await require('../models/router/index').init(app);
    // const notifs = await require('./core/middlewares/flash').notif(app);
    // console.log('INITIALISATION DES NOTIFICATIONS FLASH...', notifs);
    initLogs.add(app, 'INITIALISATION DES NOTIFICATIONS FLASH...');
    // console.log('INITIALISATION DE L\'APPLICATION TERMINÉE.');
    // Récupération de la fonction de connexion à la base de données
    // console.log('INITIALISATION DE LA BASE DE DONNÉES...');
    initLogs.add(app, 'INITIALISATION DE LA BASE DE DONNÉES...');
    const DB = await require('../db/db.js').init(app)
        .then(()=>{
            // console.log('INITIALISATION DE LA BASE DE DONNÉES... TERMINÉE.');
            initLogs.add(app, 'INITIALISATION DE LA BASE DE DONNÉES... TERMINÉE.');
        })
        .catch((err)=>{
            initLogs.add(app, 'INITIALISATION DE LA BASE DE DONNÉES... ERREUR.');
            // console.log('%ERROR% --> INITIALISATION DE LA BASE DE DONNÉES... ERREUR.');
            console.log(err);
            process.exit();
        })
        .finally(()=>{
            console.log('FIN DU PROGRAMME D\'INITIALISATION DE LA BASE DE DONNÉES.');
        })
    // app.use((err, req, res, next) => {
    //     res.status(400).send(err.message)
    // })
    
    // console.log('INITIALISATION DE LA BASE DE DONNÉES...TERMINÉE.');

}