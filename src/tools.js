/*
var logger = function (output) {
    console.log(output);
};
*/

//illustrating arrow function
/*
var logger = output => {
    console.log(console);
}

export var appName = "ES6 Review";
*/
const logger = output => {
    console.log(output);
}

export const appName = "ES6 Review";

/*
export var dummyFunction = function () {
    return "I am a dummy function";
}
*/

export var dummyFunction = () => {
    return "I am a dummy function";
}





export default logger;