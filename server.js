// // load the things we need
// // Recupération des packages express et execution du package express principale
// const app = require('express')();
// // Définition du port
// const port = 3000;
// // Autre formulation possible :
// // var express = require('express');	
// // var app = express();
// // Appel du package body-parser sans appel à une fonction principales
// const bodyParser = require("body-parser");

// // set the view engine to ejs
// app.set('view engine', 'ejs');
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({
//         extended: true
//     }));

// var session_validator = require('./utils/session');
// session_validator
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('utils session called & finished');
//     });
// // #################### ROUTES ####################
// // index. page
// app.get('/', function(req, res) {
//     res.render('pages/index');
// });
// // about page
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

// app.listen(3008);
// console.log('3008 is the magic port');

// // #################### ROUTES : POST ####################
// app.post('/login', async(req, res) => {
//     // assignation à la variable user de la valeur de req.body.user, par la fonction findOne de mongoDB qui va chercher dans la collection users, l'objet qui a pour valeur user la valeur de req.body.user
//     let user = await User.findOne({ email: req.body.email });
//     console.log("User ", user);
//     // Si pas de valeur pour user, alors on renvoie un message d'erreur "Utilisateur non trouvé"
//     if (!user){
//         res.json({ status: 404, msg: 'User not found' })
//     }
//     // Else => dans le cas contraire (si user a une valeur) on compare la valeur de req.body.password avec la valeur de user.password
//     user.comparePassword(req.body.password, (err, isMatch) => {
//         if (err) throw err;
//         console.log("ceci match bien :", match);
//         req.session.user = user;
//         res.status(200).redirect('/protected')
//     })
// });