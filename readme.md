# Hey welcome to this personal Web Server

## What is this project ?

### Overall presentation

This project is a web server prototype proposing the NodeJS MVC (Models Views Controllers) architecture according to the information, information, research and courses followed. Towards a modular vision (component group) of Apps and servers, this project will be composed of the main modules allowing its management.
- A Bash module: Installation, update, system check
- A main initialization module:
Definition of the main variables and data.
Loading, if present, of the component modules and of the libraries, middleware connected.
- A database creation module on the system or generation in one of the Clouds Available.
- A centralized authentication module. Only on this "parent" server. Allowing to centralize sensitive information on a single hosting and administered only by verified users.
- Project module: Allowing to store all the information of the external and internal installations of the different projects. As well as the different parameters
- A Documentation module for developers With auto conversion of web display formats (md, ejs, html).
- A console module. Allowing real-time executions and administered directly from this interface (sys-admin)
 
### Modular view

Regarding this module / component vision of the backEnd.
Following the digital giants, such as Google and others, I had a lot of difficulty finding the right component architecture. That of the last "commits" is itself still false. We would like to partition the components into component modules in order to differentiate the different parts of the server, more or less sensitive and more or less long to develop. Indeed, like an Angular or React type framework architecture, this way allows you to route the components in a "sandbox" way. In the event of a leak, error, or other, these modules allow the components to be compiled, only if they are fully functional and according to their last definition registered in the "parent" database.
This also allows cron or semi-cron type jobs or data processing functions to be outsourced from the sources folder.

## Summary


![Alt : Principal Picture]('https://www.klipfolio.com/gatsby-files/static/1d0d4b2e191a15d080c3857830cdedea/9e562/dashboard-examples-hero.png')

- [Documentation api : /doc/api/latest/]('https://sahirato.tech/doc/api/latest/')

- [Mardown Documentation : /doc/markdown/]('https://sahirato.tech/doc/markdown/')

# Resources 

- [Import / Export models (class) ]('https://www.digitalocean.com/community/tutorials/nodejs-export-and-import-modules');
- [NodeJS Documentation : Process Models]('https://www.google.com/search?q=server+nodejs+model&oq=server+nodejs+model&aqs=chrome..69i57j0i8i13i30.5000j0j7&sourceid=chrome&ie=UTF-8');

- [NodeJS Web Server architecture](https://medium.com/nerd-for-tech/nodejs-web-server-architecture-a21d02a33bad);




## Install types

## Windows Server 2019-2022

[Pricipal resource : Orcacore.com]('https://orcacore.com/install-node-js-windows-server-2022/')

### Authentification 

#### JWT La manière la manière la plus sécurisée

Dans la session on a juste un ID de la session que nous allions ramener dans la session de la DB. En fonction de la correalation le serveur node va revoyer ou non les donnée utilisateur si la session correspond à une session enrgistrée côté DB.
- [jwt.io](https://jwt.io/)

- [jwt Documentation Officielle](https://github.com/auth0/node-jsonwebtoken


