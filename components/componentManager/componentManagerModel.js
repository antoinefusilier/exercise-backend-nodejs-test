const { string } = require("joi");

class componentManagerModel {
    component = {
        id: string,
        name: string,
        code: {
            js: string,
            ejs: string,
            api: string,
            controller: string,
            middelwares: string,
            model: string,
            mongo: string,
            firebase: string,
            amazone: string
        }
    }
    contructor(
        componentId,
        name, 
        code = {
            js,
            ejs,
            api,
            controller,
            middlewares,
            model,
            mongo,
            firebase,
            amazone
        }
    ){
        this.component.id = componentId;
        this.component.name = name;
        this.component.code = code;
        return this.component;
    }
}