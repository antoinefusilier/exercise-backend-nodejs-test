const init_logs = [];


class InitLogs {
    app = null;

    constructor (app) {
        this.app = app;
        // const init_logs = [];
    }

    add = async(notif_message) => {
        // pushing message to the logs array
        init_logs.push(notif_message);
        // app set init_lgos variable
        this.app.set('init_logs', this.init_logs);
    }

}
module.exports = InitLogs; 
// module.exports = {
//     initLogs: init_logs
// };