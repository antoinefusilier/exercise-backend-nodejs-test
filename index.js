// // ##################################### PRICIPALE CONSTANTES #####################################
// const app = require('express')();
// const port = 3008;
// const bodyParser = require("body-parser");
// // const Product = require('./models/Product');
// // const { findById } = require('./models/Product');
// // ##################################### MIDDLEWARES #####################################
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({
//         extended: true
//     }));
// // #################################### CONNECTION DATABASE ####################################

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
//     console.log("connected to database");
// }).catch((err) => {console.log("Attention erreur lors de la connection à la base de donnée ! -->  ", err)}).finally(() => {
//     console.log("finally");
// })
// // #################################### MODELS ####################################

// const ProductSchema = require('./models/Product');
// ProductModel = new mongoose.model('Product', ProductShema);
// const UserSchema = require('./models/User');
// UserModel = new mongoose.model('User', UserShema);
// // ################################### METHODS ########################################

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% createUser();
// async function createUser() {
//     let user = new UserModel(
//         {
//             name: 'JohnDo',
//             age: 30,	
//             email: 'johndo23@gmail.com',
//             password: "123456"
//         }
//     )
//     const result = await user.save();
//     console.log(result);
// }
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% getProduct();
// async function getProduct() {
//     let p = await Product.findOne({ _id: "637ceb6050e567493d5e1804" })
//     console.log(p.price)
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% createProduct();
// async function createProduct() {
//     let product = new ProductModel(
//         {
//             name: 'Xbox 360 - S',	
//             category:['Console', 'Jeux vidéo'], 
//             price: 9,
//             description: "Console de jeux vidéo",
//             imageUrl: "https://sahirato.tech/wp-content/uploads/2019/12/xbox-360-s-1.jpg",
//             createdAt: new Date(),
//             stock:  true
//         }
//     )
//     const result = await user.save();
//     console.log(result);
// }

// // ##################################### ROUTES #####################################
// // ------------------------------------- app.post -------------------------------------
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% /new-product();
// app.post('/new-product', async(req, res) => {
//     try {
//         let product = new Product({
//             name: "a",
//             category: "games",
//             price: 12.3,
//             description: 'un jeu destiné au pigeons voleur',
//             imageUrl: 'ht',
//             createdAt: new Date(),
//             stock: false,
//             tags: 'games'
//         })
//         let result = await product.save();
//         console.log('produit creé')
//     } catch (error) {
//         console.log("XXX :: ", error);
//     }

// })
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% /product();
// app.post('/product', async(req, res) => {
//     try {
//         let product = new Product({
//             name: req.body.name,
//             category: req.body.category,
//             price: req.body.price,
//             description: req.body.description,
//             imageUrl: req.body.imageUrl,
//             stocl: req.body.stock
//         });

//         let result = await product.save();
//         console.log(result);
//         res.json({status: 200, msg: 'Le produit ' + result.name + ' a bien été enregistré'})
//     } catch(error) {
//         console.log(error);
//         res.json({status: 500, msg: 'Une erreur est survenue'});
//     }
// });
// // ------------------------------------- app.get -------------------------------------

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/products', async(req, res) => {
//     try {
//         let products = await Product.find();
//         console.log(products);
//         res.json({status: 200, msg: 'Voici la liste des produits', data: products});
//     } catch(error) {
//         console.log(error);
//         res.json({status: 500, msg: 'Une erreur est survenue'});
//     }
// });

// app.get('/product/:id', async(req, res) => {
//     try {
//         let product = await Product.findOne({_id: req.params.id});
//         console.log(product);
//         res.json({status: 200, msg: 'Voici le produit', data: product}); 
//     } catch (error) {
//         console.log(error);
//         res.json({status: 500, msg: 'Une erreur est survenue'});
//     }
// });
// // ------------------------------------- app.put -------------------------------------
// app.put('/edit-product/:id', async(req, res) => {
//     try {
//         let product = await Product.findOneAndUpdate({_id: req.params.id}, { name: req.body.name, category: req.body.category, price: req.body.price, description: req.body.description, imageUrl: req.body.imageUrl, stock: req.body.stock }, {new: true});
//         console.log(product);
//         res.json({status: 200, msg: 'Le produit a bien été modifié'});
//     } catch (error) {
//         console.log(error);
//         res.json({status: 500, msg: 'Une erreur est survenue'});
//     }
// });

// // ------------------------------------- app.delete -------------------------------------
// // app.patch >> seul les nouvelles données sont modifiées, les autres restent inchangées.
// app.delete('/delete-product/:id', async(req, res) => {
//     try {
//         let product = await Product.findOneAndDelete({_id: req.params.id});
//         console.log(product);
//         res.json({status: 200, msg: 'Le produit a bien été supprimé'});
//     } catch (error) {
//         console.log(error);
//         res.json({status: 500, msg: 'Une erreur est survenue'});        
//     }
// });


// app.listen(port, () => console.log(`Example app listening on port ${port}!`));




// // app.listen('3008', () => {
// //     console.log('listening on http://localhost:3008')
// // })

// // const morgan = require('morgan');
// // const cors = require('cors');
// // const router = express.Router();

// // app.use(morgan('combined')); 
// // app.use(cors()); 

// //midllewares

// // app.use(router); 

// // Requests processing will be defined in the file router

// // app.listen(port, () => console.log('Server app listening on port ' + port));


// // Pour tester les requetes API avec Postman



// // const userShema = new mongoose.Schema({
// //     name: String,
// //     age: Number,
// //     email: String,
// //     password: String
// // });

// // connexion database 
// // mongoose.connect('mongodb://localhost:27017/express-api')
// //     .then(() => { console.log('database connected ..') })
// //     .catch(err => console.log(err));

// // routes
// // app.post('/new-product', async(req, res) => {
// //     // console.log(req.body);
// //     try {
// //         let product = new Product({
// //             name: req.body.name,
// //             category: req.body.category,
// //             price: req.body.price,
// //             description: req.body.description,
// //             imageUrl: req.body.imageUrl,
// //             stock: req.body.stock
// //         });

// //         let result = await product.save();
// //         console.log(result)
// //         res.json({ status: 200, msg: 'Le produit ' + result.name + ' enregistré' })
// //     } catch (error) {
// //         console.log(error);
// //     }
// // });

// // app.get('/products', async(req, res) => {
// //     try {
// //         let products = await Product.find();
// //         console.log(products)
// //         res.json({ status: 200, msg: products })
// //     } catch (error) {
// //         console.log(error);
// //     }
// // });
// // app.get('/products/:id', async(req, res) => {
// //     try {
// //         let product = await Product.findOne({ _id: req.params.id });
// //         console.log(product)
// //         res.json({ status: 200, msg: product })
// //     } catch (error) {
// //         console.log(error);
// //     }
// // });
// // app.put('/edit-product/:id', async(req, res) => {
// //     console.log(req.body.name)
// //     try {
// //         let product = await Product.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name }, { new: true });
// //         console.log(product)
// //         res.json({ status: 200, msg: product })
// //     } catch (error) {
// //         console.log(error);
// //     }
// // });
// // app.delete('/delete-product/:id', async(req, res) => {
// //     try {
// //         let product = await Product.findOneAndDelete({ _id: req.params.id });
// //         console.log(product)
// //         res.json({ status: 200, msg: product })
// //     } catch (error) {
// //         console.log(error);
// //     }
// // });




// // async function createProduct() {
// //     try {
// //         let product = new Product({
// //             name: "a",
// //             category: "games",
// //             price: 12.3,
// //             description: 'un jeu destiné au pigeons voleur',
// //             imageUrl: 'ht',
// //             createdAt: new Date(),
// //             stock: false,
// //             tags: 'game'
// //         })
// //         let result = await product.save();
// //         console.log('produit creé')
// //     } catch (ex) {
// //         console.log("xxx::  ", ex);
// //         // for (field in ex.errors) {
// //         //     // console.log(field)
// //         //     console.log(ex.errors[field].message)
// //         // }
// //     }

// // }


// // createProduct();
// // getProduct()

