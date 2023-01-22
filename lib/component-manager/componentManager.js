// const express = require('express')();
const ComponentManagerModel = require('./componentManagerModel');
// const ComponentSetting = require('./component').shift();
// const ComponentManagerApi = require('./componentManagerAPI');
const servApp = require('./componentManagerApp');
const ComponentManagerController = require('./componentManagerController');

class ComponentManager {
    app;
    
    ComponentManagerController;
    ComponentManagerModel;
    constructor(){
        const server = new servApp();
        new ComponentManagerController(server);
        // console.log("COMPONENT JSON INFOS", ComponentSetting.routes);
        // const testParse = JSON.stringify(Component);
        // console.log(testParse);
        // this.app = app;
        // new ComponentManagerApi(app, ComponentSetting);
        // let ComponentManagerController = require('./componentManagerController');

        // this.ComponentManagerController = new ComponentManagerController(app, ComponentSetting);
        // console.log("[NCM] - componentManager.js - Contructing ...");
        // this.ComponentManagerModel = new this.ComponentManagerModel()
        // if (action == 'add') this.ComponentManagerController.addComponent(component);
        // if (action == 'remove') this.ComponentManagerController.removeComponent(component);
        // if (action == 'update') this.ComponentManagerController.updateComponent(component);
        // if (action == 'get') this.ComponentManagerController.getComponent(component);
        // if (action == 'init') this.ComponentManagerController
    }
    // Add a new Component
    async add (component = new ComponentManagerModel(name, type, code)){
        await this.ComponentManagerController.addComponent(component);
        console.log('Generation of new component : Name : '+component.name+' Type :'+component.type);
    }

}
module.exports = ComponentManager;