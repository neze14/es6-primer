import logger, {appName, dummyFunction} from './tools.js';

logger("Welcome! We are having fun with modularity in JS");

//logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );
/*Introducing Template literals**/

logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);