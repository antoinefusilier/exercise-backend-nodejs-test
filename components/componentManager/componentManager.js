

class ComponentManager {
    app;
    ComponentManagerController;
    constructor(app, action, component){
        this.app = app;
        let ComponentManagerController = require('./componentManagerController');
        this.ComponentManagerController = new ComponentManagerController(app);
        if (action == 'add') this.ComponentManagerController.addComponent(component);
    }
}
module.exports = ComponentManager;