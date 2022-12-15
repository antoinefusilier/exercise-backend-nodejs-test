const fs = require('fs');
const fsExpres = require('fs-express');

class ComponentManager {
    app;
    middleswares;
    
    constructor(app) {
        this.app = app;
        this.components = [];
    }
    fs = () => {
        return fs;
    }
    fsExpres = () => {
        return fsExpres(this.app);
    }

}
module.exports = ComponentManager;