exports.init = async (req, res, next) => {
    const mongoose = require('mongoose');
    try {
        await mongoose.connect(process.env.DB_URL)
        // res.redirect('/flash');
        console.log('database > init(app) > try_success > connected to database');
    }  catch (err) {
        throw new Error(
            'database > init(app) > catch(app) > this_erroor_has_been_fund : ',
            err);  
    }
}

