// ################ MIDDLEWARES - INTERGICIEL ###############
// ##########################################################
exports.init = async(app) => {
    try {
        const bodyParser = require('./body_parser').init(app)
            .then(() => {
                console.log('middlewares > init(app) > try_success > BodyParser is loaded');
            })
            .catch((err) => {
                console.log('middlewares > init(app) > catch(app) > this_erroor_has_been_fund : ', err);
            })
        // const flash = require('./flash').init(app)
        //     .then(() => {
        //         console.log('middlewares > init(app) > try_success > Flash is loaded');
        //     })
        //     .catch((err) => {
        //         console.log('middlewares > init(app) > catch(app) > this_erroor_has_been_fund : ', err);
        //     })
    } catch (err) {
        throw new Error(
            'middlewares > init(app) > catch(app) > this_error_has_been_fund : ',
            err);  
    }
}
// Les fonctions middleware sont des fonctions qui ont accès à l' objet de requête ( req), à l' objet de réponse ( res) et à la fonction middleware suivante dans le cycle requête-réponse de l'application. La fonction middleware suivante est généralement désignée par une variable nommée next.

// Les fonctions du middleware peuvent effectuer les tâches suivantes :

// Exécutez n'importe quel code.
// Apportez des modifications à la requête et aux objets de réponse.
// Terminer le cycle requête-réponse.
// Appelez la fonction middleware suivante dans la pile.
// Si la fonction middleware actuelle ne termine pas le cycle demande-réponse, elle doit appeler next()pour passer le contrôle à la fonction middleware suivante. Sinon, la demande sera laissée en suspens.

// Une application Express peut utiliser les types de middleware suivants :

// Middleware au niveau de l'application
// Intergiciel au niveau du routeur
// Intergiciel de gestion des erreurs
// Intergiciel intégré
// Middleware tiers