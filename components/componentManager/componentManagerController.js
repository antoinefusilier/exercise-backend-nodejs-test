const { exist } = require('joi');


class ComponentController {
    componentMiddlewares;
    // component = {
    //     name: 'componentTest',
    //     path: 'component/testCreateComponent',
    //     code: 'let test = 1;'
    // }

    constructor(app){
        let componentMiddlewares = require('./componentManagerMiddlewares');
        this.componentMiddlewares = new componentMiddlewares(app);
    }
    addComponent = async(component) => {
        if (!this.componentMiddlewares.fsExpres().scandirSync('components\\testCreateComponent\\')) {
            this.componentMiddlewares.fsExpres().mkdirSync('components\\testCreateComponent\\');
        }
        this.componentMiddlewares.fs().writeFile(
            'components\\testCreateComponent\\'
            + component.name + 
            '.js', 
            component.code,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
    }

}
module.exports = ComponentController;