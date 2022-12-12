// Récupération de mongoose npm dans la variable "Mongoose"
const mongoose = require('mongoose');
// Délaclaration de la constante "ProductSchema" qui va appeler la fonction Schema de mongoose pour créer un schéma de données "ProductSchema"
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Ce champ est requis'],
        minLength: [3, 'ce champs doit contenir a minima 3 caracteres'],
        maxLength: [255, 'ce champs doit contenir a max 5 caracteres'],
        lowercase: true
    },
    category: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0
            },
            message: 'Ceci est un tableau '
        }

    },
    tags: {
        type: String,
        enum: ['games', 'livres', 'basket'],
    },
    price: {
        type: Number,
        required: true,
        set: v => Math.round(v),
        get: v => Math.round(v),
    },
    description: String,
    imageUrl: String,
    createdAt: { type: Date, default: new Date() },
    stock: {
        type: Boolean,
        required: function() {
            return this.price > 20
        }
    }
});
// Export et génération du modèle "Product" à partir du schéma "ProductSchema" . Le require("Product") utilisera ce modèle à partir du schema ci-dessus
module.exports = mongoose.model("Product", ProductSchema);




// CORS >> a ajouter à la doc des packages apportés par npm !!! 