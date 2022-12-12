const init_logs = [];

exports.add = async(app, notif_message) => {
    init_logs.push(notif_message);
    await app.set('init_logs', init_logs);
}
// setInterval(exports.add ,1000);