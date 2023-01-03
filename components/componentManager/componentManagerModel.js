const { randomUUID } = require("crypto");
const { string } = require("joi");

class componentManagerModel {
    component = {
        id: string,
        name: string,
        type: string,
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
        name,
        type = {
            default : "default",
        },
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
        // Generate a random Component Id
        var componentId = randomUUID();
        // Affectation variable component ...
        this.component.id = componentId;
        this.compoment.type = type;
        this.component.name = name;
        this.component.code = code;
        // Callback of component of component variable data...
        return this.component;
    }
}