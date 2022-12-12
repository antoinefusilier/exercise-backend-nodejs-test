const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    let token = req.cookies.jwt;

    if (token){
        jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken)=>{
            // Si il y a une erreur lors du retour de la promesse "jwt.verify", alors affichage dans la console de l'erreur et redirection vers la route '/login' pour redemander l'authentification au client
            if (err){
                console.log(err)
                return res.redirect('/login')
            } else {
                // Si la promesse de jwt.verify ne retourne pas d'erreur, alors affichage dans la console le "decodedToken", puis appel du next()
                console.log('DECODED TOKEN // : ', decodedToken);
                next();
            }
        })
    }
}