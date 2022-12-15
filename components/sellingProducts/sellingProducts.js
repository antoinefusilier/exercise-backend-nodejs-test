const DATA = require("./sellingProductsDATA.js");

class SellingProducts {
    app = null;
    constructor(appw) {
        // Initializing of the app variable
        this.app = appw;
        if (appw == null) throw new Error("app is null");
    }

    add = async() => {
       DATA();
    }

    get = async () => {
        console.log('get() called:: ', FirstSellingProducts.find())
        return await FirstSellingProducts.find();
    }
}
module.exports = SellingProducts;