const AR_ROUTING = require('autoRouting');

module.exports = (req, res, next) => {
    if (req.router.access === 'public') {
        res.router.new = true;
        AR_ROUTING('new', {
            name: req.router.name,
            access: req.router.access,
            path: req.router.path,
        },next());
        return next()
    } 
    next();
}

