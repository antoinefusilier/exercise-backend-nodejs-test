const fs = require('fs');


// const fsExpres = require('fs-express');
const path = require('path');

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
    path = () => {
        return path;
    }
    // fsExpres = () => {
    //     return fsExpres(this.app);
    // }

}
module.exports = ComponentManager;