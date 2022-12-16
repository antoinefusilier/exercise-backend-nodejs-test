// Récupération de mongoose npm dans la variable "Mongoose"
const mongoose = require('mongoose');
// Délaclaration de la constante "ProductSchema" qui va appeler la fonction Schema de mongoose pour créer un schéma de données "ProductSchema"
const SellingProductsSchema = new mongoose.Schema({
    keywords : { type: Array, required: true },
    // draws : Array [{
    //     file : {   
    //         // _id: String,
    //         // length : String,   
    //         // chunkSize : String,
    //         // uploadDate : String,
    //         // md5 : String,
    //         // filename : String,   
    //         // contentType : String,
    //         // aliases : String,
    //         // metadata : String,
    //     },
    //     chunks : {   
    //         // _id : String,
    //         // files_id : String,
    //         // n : String,
    //         // data :  String,
    //     }
    // }
    // ],
    name: { type: String, required: true },
    rawMaterials: { type: Array, required: false },
    status: { type: Boolean, required: true },
    createDate : { type: String, required: false },
    lastUpteDate : { type: String, required: true }
});
// Export et génération du modèle "Product" à partir du schéma "ProductSchema" . Le require("Product") utilisera ce modèle à partir du schema ci-dessus
// model.exports = mongoose.model("SellingProducts", SellingProductsSchema);
// const SellingProducts = mongoose.model('SellingProducts', SellingProductsSchema);

module.exports = mongoose.model('SellingProducts', SellingProductsSchema);




// CORS >> a ajouter à la doc des packages apportés par npm !!! 