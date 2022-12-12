module.exports = (req, res, next) => {
    if (!req.session.user) {
        res.locals.user = null
        return next()
    } else {
        res.locals.user = req.session.user
    }
    next()
}

// global object front