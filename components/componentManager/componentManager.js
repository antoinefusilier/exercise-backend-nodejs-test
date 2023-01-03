const ComponentManagerView = require('./componentManagerView');
const ComponentManagerModel = require('./componentManagerModel');
class ComponentManager {
    app;
    ComponentManagerController;
    ComponentManagerModel;
    constructor(app){
        this.app = app;
        let ComponentManagerController = require('./componentManagerController');
        this.ComponentManagerController = new ComponentManagerController(app);
        // this.ComponentManagerModel = new this.ComponentManagerModel()
        // if (action == 'add') this.ComponentManagerController.addComponent(component);
        // if (action == 'remove') this.ComponentManagerController.removeComponent(component);
        // if (action == 'update') this.ComponentManagerController.updateComponent(component);
        // if (action == 'get') this.ComponentManagerController.getComponent(component);
        // if (action == 'init') this.ComponentManagerController
    }
    // Add a new Component
    async add (component = new ComponentManagerModel(name, type, code)){
        await this.ComponentManagerController.addComponent(componentName);
        console.log('Generation of new component : Name : '+component.name+' Type :'+component.type);
    }

}
module.exports = ComponentManager;