const { CONNREFUSED } = require('dns');
const { exist } = require('joi');
const { resolve } = require('path');
const path = require('path');


class ComponentController {
    Page = "action";
    NCMMiddlewares;
    Component;
    ComponentAPI;
    constructor(app){
        console.log('ComponentManagerController Initialized');
        console.log("Path middleware",path);
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, './views'));
        app.get('/componentManager', async(req, res) => {
            
            res.render('componentManagerView', {page: Page});
            
        });
        // Init of component
        // Initialization of middleswares files
        // const Middlewares = require('./middlewares/index');
        // let componentMiddlewares = require('./componentManagerMiddlewares');
        // this.NCMMiddlewares = new componentMiddlewares(app);
        // let ComponentAPIFile = require('./componentManagerApi');
        // new ComponentAPIFile(app, Component);
        // Defined views of NodeJS Component Manager, setting of routing path to component views path
    }

    addComponent = async(component) => {
        // if (!this.componentMiddlewares.fs().scandir('components\\')) {
    this.NCMMiddlewares.fs().mkdir(this.NCMMiddlewares.path().join('./components/'+component.name), (err) =>        
            {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // }
        // Writing folder of views
        this.NCMMiddlewares.fs().mkdir(this.NCMMiddlewares.path().join('./components/'+component.name+'/views'), (err) =>        
            {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // Writing principal view component : views/componentTestView.ejs
        this.NCMMiddlewares.fs().writeFile(
            'components/'
            + component.name +
            '/views/'+ component.name + 
            'View.ejs', 
            component.code.ejs,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // Writing middlewares initialization component file :: MyComponentMiddlewares.js
        this.NCMMiddlewares.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            'Controller.js', 
            component.code.controller,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // Writing controller component file ::
        this.NCMMiddlewares.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            'Controller.js', 
            component.code.controller,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // Writing model component file ::
        this.NCMMiddlewares.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            'Model.js', 
            component.code.model,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
         // Writing model component file ::
        this.NCMMiddlewares.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            'Mongo.js', 
            component.code.mongo,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // https://www.geeksforgeeks.org/node-js-fs-writefile-method/
        // Writing master component file ($COMPONENT_NAME.js) : component.js
        this.NCMMiddlewares.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            '.js', 
            component.code.js,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        
        // component.ejs
        // this.NCMMiddlewares.fs().mkdir(this.NCMMiddlewares.path().join('./components/'+component.name+'/views'), (err) =>        
        //     {
        //         if (err){
        //             console.log(err);
        //             return;
        //         }
        //     });
        this.NCMMiddlewares.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            '.js', 
            component.code.js,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
    }
    removeComponent = async(component) => {
        this.NCMMiddlewares.fs().rmdir(this.NCMMiddlewares.path().join('./components/'+component.name), (err) => {
            console.log('REMOVE A COMPONENT:: err',err);
        });
    }
}
module.exports = ComponentController;