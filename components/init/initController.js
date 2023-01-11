// METHODS OF THIS CONTROLLER
// 1. initLogs
// Stocks the logs of the initialization of the application
// Initializing init_logs array
const init_logs = [];
const initLogsFile = require('../initLogs/initLogs.js');

class InitController {
    app = null;
    initLogs = null;
    constructor(app) {
        app.set('views', this.NCMMiddlewares.path().join(__dirname, './views'));
        app.get('/', async(req, res)=> {
            res.render('initView');
        });
        // Initializing of the app variable
        if (app == null) throw new Error("app is null");
        this.app = app;
        // Initializing of the initLogs variable
        let initLogs = new initLogsFile(app)
        initLogs.add("initLogs initialized")
            .then((initLogs) => {
                console.log("initLogs initialized", initLogs);
            })
            .catch((err) => {
                this.initLogs = null;
                console.log(err)});
        
    }
    // Export method to add a message to the logs array
    initLogs = async() => {
        // METHODS 
        // 1. add : add a message to the logs array
        add = async(notif_message) => {

        }
    }
}
// Export method to add a message to the logs array
module.exports = InitController;
