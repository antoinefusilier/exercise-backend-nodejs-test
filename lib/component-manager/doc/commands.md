# Alls commands to use NodeJS Component Manager

- Add New Component : Require Component structure as :
```
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
```
Command "add(component)">>
``` Javascript
CM.add(component)
```