// const router = app.Router();


class authAPI {
    constructor(app) {
        // app.use ('/', router);
        app.get('/api/auth/detect/:var', (req, res) => {
            let Res = req.query.var;
            console.log("req.var ::"+req.params.var);
            if (req.params.var == "connected") {
                res.send({
                    authenticated: true,
                    user: {
                        name: "John Doe",
                        email: "johndoe22@gmail.com",
                        role: "admin"
                    }
                });
            } else if (req.params.var == "asderq32421334"){
                res.send({
                    authenticated: false
                });
            }
        });
        app.post('/api/auth/detect', (req, res) => {
            let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log(ip);
        });
        app.post('/api/auth', (req, res) => {
            req.session 
            res.send({
                authenticated: true
            });

        });

        // this.auth = firebase.auth();     
    }

    // Sign Up
    // async signUp(email, password) {
    //     const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
    //     return newUser.user.updateProfile({
    //         displayName: name
    //     });
    // }

    // // Sign In
    // async signIn(email, password) {
    //     return await this.auth.signInWithEmailAndPassword(email, password);
    // }

    // // Sign Out
    // async signOut() {
    //     await this.auth.signOut();
    // }

    // // Password Reset
    // async passwordReset(email) {
    //     await this.auth.sendPasswordResetEmail(email);
    // }

    // // Password Update
    // async passwordUpdate(password) {
    //     await this.auth.currentUser.updatePassword(password);
    // }
}
module.exports = authAPI;