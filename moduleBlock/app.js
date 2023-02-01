const team = require("./node/module1.js");
console.log("team--------", team);
// import { setName } from "./es6/export2.js"
// console.log("fristName-----------------", setName)
const items = require("./es6/export2.js")
    // setName();
console.log("items-----------------", items.fristName)