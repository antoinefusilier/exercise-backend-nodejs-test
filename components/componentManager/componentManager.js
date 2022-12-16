

class ComponentManager {
    app;
    ComponentManagerController;
    constructor(app, action, component){
        this.app = app;
        let ComponentManagerController = require('./componentManagerController');
        this.ComponentManagerController = new ComponentManagerController(app);
        if (action == 'add') this.ComponentManagerController.addComponent(component);
        if (action == 'remove') this.ComponentManagerController.removeComponent(component);
        // if (action == 'update') this.ComponentManagerController.updateComponent(component);
        // if (action == 'get') this.ComponentManagerController.getComponent(component);
        if (action == 'init') this.ComponentManagerController
    }
}
module.exports = ComponentManager;