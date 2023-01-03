# NPM Infos...

# Npm publish infos

```Bash
npm init
[...]
{
 "name": "nodejs-component-manager",
  "version": "1.0.1",
  "description": "This component offers the generation of a structured and standard NodeJS component.",
  "main": "s a first version and does not contain all the future improvements and the best structure, but it remains a very useful tool to simplify the creation of NodeJS projects.",
  "scripts": {
    "test": "so be available soon"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/antoinefusilier/nodejs-component-manager.git"
  },
  "keywords": [
    "nodejs",
    "package",
    "component",
    "manager",
    "autogenerate",
    "componentjson",
    "autobuild",
    "build",
    "fs",
    "fsgeneration",
    "typescript",
    "ts",
    "tscomponent"
  ],
  "author": "NPM Sahirato <antoinefusilier@gmail.com> (https://www.npmjs.com/~sahirato)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/antoinefusilier/nodejs-component-manager/issues"
  },
  "homepage": "https://github.com/antoinefusilier/nodejs-component-manager#readme"
  }
vim index.js
var lodash = require('lodash');
exports.printMsg = function(){
    console.log("This message is from Component Manager v1.0.1");
}

```