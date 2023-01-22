const jwt = require (jsonwebtoken);
const jwt_decode = require (jwt_decode);

let token = "";

console.log("token", token);

console.log("jwt_decoded", jwt_decode(token));

