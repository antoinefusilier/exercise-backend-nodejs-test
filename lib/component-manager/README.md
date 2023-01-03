# Welcome to this Public ComponentManager

This component offers the generation of a structured and standard NodeJS component.
Of course this is a first version and does not contain all the future improvements and the best structure, but it remains a very useful tool to simplify the creation of NodeJS projects.
A TypeScript version should also be available soon

# Summary

- [Doc.npm](./doc/npm.md)
- [Commands](./doc/commands.md)

# Call this component
Where we use "CM" for "ComponentManager" shurtcut.

In source server file : ***app.js***
``` Javascript
const CM = require('nodejs-component-manager');
const CM = CMLib.init(app);

```

# Add an Example component

```Javascript
CM.add(component = {
    name: 'FirstTest',
    type: 'default',
    code : {
        js: 'let test = \'test\'',
        ejs: 'let test = \'test\'',
        api: 'let test = \'test\'',
        controller: 'let test = \'test\'',
        middelwares: 'let test = \'test\'',
        model: 'let test = \'test\'',
        mongo: 'let test = \'test\'',
        firebase: 'let test = \'test\'',
        amazone: 'let test = \'test\''
    }
});

```


# Description of generated files

- ComponentName.js  
``` Javascript
CM

```


