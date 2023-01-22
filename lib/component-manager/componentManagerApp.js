
class ComponentManagerApp {

    constructor () {
        const app = require('express')();
        const cors = require('cors');
        const bodyParser = require("body-parser");
        
        app.use(bodyParser.json()); 
        app.use(bodyParser.urlencoded({
                extended: true
            }));
        app.use(cors());

        app.get('',cors(), (req, res) => {
            res.status(200).json(
                {'Hello World!' : 'Hello test!'});
            });
        app.listen(process.env.APP_PORT);
        console.log('3008 is the magic port');

        return app;
    }
}
module.exports = ComponentManagerApp;
