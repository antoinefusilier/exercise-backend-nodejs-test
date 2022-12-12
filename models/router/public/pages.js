exports.init = async (app) => {
    app.get('/', (req, res) => {
        res.render('pages/home')
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
}
