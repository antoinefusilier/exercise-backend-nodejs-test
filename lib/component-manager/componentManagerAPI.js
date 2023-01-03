
class ComponentManagerApi {
    app;
    constructor(app, ComponentSetting){
        this.app = app;
        console.log(ComponentSetting.routes);
        // Principale path
        app.get('/componentManager', async(req, res) => {
            
            res.render('componentManagerView');
            
        });
        app.get('/assets/*', async(req, res) => {
                
            const assets = new Promise((resolve, reject)=>{
                req.sendFile(req.url, {root: './node_modules/nodejs-component-manager/views/'})
            });
            assets.catch((err)=> {
                res.sendFile(req.url, {root: './lib/component-manager/views/'});

            });

        })
    }
}

module.exports = ComponentManagerApi;