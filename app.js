// ################## PRICIPALE CONSTANTES ##################
// ##########################################################
// Récupération de l'execution principale de l'application express dans la constante "app"
// Express est une infrastructure Web de routage et d'intergiciel qui a ses propres fonctionnalités minimales : une application Express est essentiellement une série d'appels de fonction d'intergiciel.
const app = require('express')();
// Instanciation du packahe "mongoose" dans la constante "mongoose"
// const mongoose = require('mongoose')
// Instanciation du packahe "body-parser" dans la constante "bodyParser"
// const bodyParser = require('body-parser');
// ################## MODELS A RECUPERER ##################
// Instaciation du model "Product" exporté du fichier "Product.js" dans la constante "Product"
const Product = require('./models/Product');
// Instanciation du model "Product" dans un objet "findById"
const { findById } = require('./models/Product');

// Instanciation du package "connect-mongo" dans la constante "MongoStore"
const MongoStore = require('connect-mongo');

// const fs = require('fs');





// ##### CONNECT-MONGO - Middleware de gestion de session #####
// $ npm install connect-mongo --save
// Le middleware connect-mongo est un middleware Express qui stocke les sessions dans MongoDB. Il est généralement utilisé en combinaison avec connect-flash pour stocker les messages dans la base de données.
// app.use(MongoStore());
// app.use(session({
//   store: MongoStore.create({
//     mongoUrl: 'mongodb://127.0.0.1:27017/sahirato',
//     mongoOptions: advancedOptions
//   })
// }));

// connexion database 


// ############## INITIALISATION PRINCIPALE ################
// ##########################################################
// Importation du controller principale "index.js" dans la constante "MASTER_CONTROLLER"
const initComponent = require('./components/init/init.js');
// Utilisation de la méthode "initApp" du "MASTER_CONTROLLER" pour initialiser l'application
initComponent.initApp(app);
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/api/init', (req, res) => {
    // req.json({ message: 'INITIALISATION DE L\'APPLICATION...' });
    res.status(200).json({  
        'messege enroll': 'data received'  
    }) 
    // res.json({ message: 'INITIALISATION DE L\'APPLICATION...' }).send("init");
});


// Recupération du model IsAuth du fichier "auth.js" des "utils" (dossiers des outils = comme les "services" des frameworks front)
const { isAuth } = require('./utils/auth');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoDBStore = require('connect-mongodb-session')(session);


// store session

const store = new MongoDBStore({
    uri: process.env.DB_URL,
    collection: 'sessions'
});
if (store) {
    console.log("MongoDBStore is connected");
} else {
    console.log("new MongoDBStore not loaded! ");
}

app.use(session({
    secret: 'top secret 123',
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: { httpOnly: true }
}));



app.use(cookieParser())
app.set('view engine', 'ejs')
    // register 
const User = require('./models/User');
const bcrypt = require('bcrypt');
// middelwares
// app.use(checkUser())

app.use(require('./utils/checkUser'))

app.post('/register', async(req, res) => {
    try {
        let user = await new User(req.body);
        let result = await user.save()
        console.log('user saved ', result.password)
        res.status(301).redirect('/login')

    } catch (ex) {
        console.log("Ex_err :: ", ex.errors.email)
        for (field in ex.errors) {
            console.log(ex.errors[field].message)
        }
    }

});


// ################################################
// ################# ROUTING PAGES ################
// ################################################


// const jwt = require('jsonwebtoken');
// function generateAccessToken(userId){
//     return jwt.sign(userId, )
// }

// Package Node de cryptage d'une chaine de caractère
// const cryto = require('crypto');

// let secret = crypto.createHash('sha256').update("secret").digest('')
// console.log("SECRET_TOKEN",secret);

// TESTING :: Route pour passer dans la constant message de la route "flash"
app.use(session()); // session middleware
app.use(require('express-flash')());
app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));

// app.use(function(req, res, next){
//     res.locals.currentUser = req.session.userId;
//     res.locals.sessionFlash = req.session.sessionFlash;
//     delete req.session.sessionFlash;
//     next();
// });
// app.use(function (req, res, next) {
//   // flash a message
//   req.flash('info', 'hello!');
//   next();
// })

app.get('/flash', function(req, res){
    res.send('hello world');
})
app.get('/addflash/:msg', function (req, res) {
    let message = req.params.msg; 
    req.flash('infos',message);
    res.redirect('/flash');
});

app.get('/flash', async (req, res)=>{
    // console.log("message flash test ::",);
    const message = req.flash('infos');
    res.render('pages/flash', {msg : message});
})

app.get('/', async(req, res) => {
    // const message = await req.flash('Info');
    // console.log(req.flash('info'));
    // const message = req.flash('info');
    res.render('pages/home', {core_notifs : app.get('init_logs')});
    // res.render('pages/home')
    // console.log("message :: ", req.flash('Info'));
    })

app.get('/register', (req, res) => {
    res.render('pages/register')
})
app.get('/login', (req, res) => {
    res.render('pages/login')
})
app.post('/login', async(req, res) => {
    // email
    // verifier si email exist 
    let user = await User.findOne({ email: req.body.email });
    console.log("User  ", user)
    if (!user) {
        res.json({ status: 404, msg: 'Email not found' })
    } else {

    }
    // Comparer password hashed 
    user.comparePassword(req.body.password, (err, match) => {
        if (error) {
            console.log("@@ ERROR :", error);
        } else {

            console.log("ceci match bien : ", match);
            req.session.user = user
            res.status(200).redirect('/protected')
        }
    })

})
app.get('/', (req, res) => {
    res.render('pages/protected')
})

app.get('/protected', isAuth, (req, res) => {
    console.log(req.session.user)
    res.render('pages/protected');
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('pages/home')
})

let init_lofs = app.get('init_logs');

const cors = require('cors');
console.log("init_logs", this.init_logs);

app.use(cors());
// app.use(flash());
const test = app.get('init_logs');
console.log("test :: ", test);
app.get('/testing',cors(), (req, res) => {
    const message = {"connected": "http://localhost:3008"};
    console.log(message);
    res.send(
        message);
});	

const auth = require('./components/auth/authApi');
const authAPI = require('./components/auth/authApi');
new authAPI(app);


const SellingProductsFile = require('./components/sellingProducts/sellingProducts');
const SellingProducts = new SellingProductsFile(app);
SellingProducts.add();
console.log("SellingProducts APPP :: ", SellingProducts);


const ComponentManagerFile = require('./components/ComponentManager/componentManager')
new ComponentManagerFile(app, 'add', {
    name: "testing",
    path: "component/testCreateComponent",
    code: 'let test = 1;'
});







// e
// SellingProducts.add();
// new SellingProducts(app).get();



// async function createProduct() {
//     try {
//         let product = new Product({
//             name: "a",
//             category: "games",
//             price: 12.3,
//             description: 'un jeu destiné au pigeons voleur',
//             imageUrl: 'ht',
//             createdAt: new Date(),
//             stock: false,
//             tags: 'game'
//         })
//         let result = await product.save();
//         console.log('produit creé')
//     } catch (ex) {
//         console.log("xxx::  ", ex);
//         // for (field in ex.errors) {
//         //     // console.log(field)
//         //     console.log(ex.errors[field].message)
//         // }
//     }

// }

// routes
// app.post('/new-product', async(req, res) => {
//     // console.log(req.body);
//     try {
//         let product = new Product({
//             name: req.body.name,
//             category: req.body.category,
//             price: req.body.price,
//             description: req.body.description,
//             imageUrl: req.body.imageUrl,
//             stock: req.body.stock
//         });

//         let result = await product.save();
//         console.log(result)
//         res.json({ status: 200, msg: 'Le produit ' + result.name + ' enregistré' })
//     } catch (error) {
//         console.log(error);
//     }
// });

// app.get('/products', async(req, res) => {
//     try {
//         let products = await Product.find();
//         console.log(products)
//         res.json({ status: 200, msg: products })
//     } catch (error) {
//         console.log(error);
//     }
// });
// app.get('/products/:id', async(req, res) => {
//     try {
//         let product = await Product.findOne({ _id: req.params.id });
//         console.log(product)
//         res.json({ status: 200, msg: product })
//     } catch (error) {
//         console.log(error);
//     }
// });
// app.put('/edit-product/:id', async(req, res) => {
//     console.log(req.body.name)
//     try {
//         let product = await Product.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name }, { new: true });
//         console.log(product)
//         res.json({ status: 200, msg: product })
//     } catch (error) {
//         console.log(error);
//     }
// });
// app.delete('/delete-product/:id', async(req, res) => {
//     try {
//         let product = await Product.findOneAndDelete({ _id: req.params.id });
//         console.log(product)
//         res.json({ status: 200, msg: product })
//     } catch (error) {
//         console.log(error);
//     }
// });

// app.post('/new-product', async(req, res) => {
//         try {
//             let product = new Product({
//                 name: "a",
//                 category: "games",
//                 price: 12.3,
//                 description: 'un jeu destiné au pigeons voleur',
//                 imageUrl: 'ht',
//                 createdAt: new Date(),
//                 stock: false,
//                 tags: 'games'
//             })
//             let result = await product.save();
//             console.log('produit creé')
//         } catch (error) {
//             console.log("XXX :: ", error);
//         }

//     })