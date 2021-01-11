import logger, {
    appName, dummyFunction, genericFunction, 
    multiplier, multiplier2, genericFunction2, Person,
    CustomMath, User
} from './tools.js';
import fetch from 'node-fetch';

logger("Welcome! We are having fun with modularity in JS");

//logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );
/*Introducing Template literals**/

logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);

logger(genericFunction());

logger(multiplier(10));

try {
    const product = multiplier2(3);
    logger(product);
}catch(error) {
    logger(error.message)
}

//logger(multiplier2(3, 4));

logger(genericFunction2(2,3,4,6,8,9,10,5,12));

let person1 = new Person("Chineze", "Okadigbo", "Female", undefinded);
let person2 = new Person("Harry", "Potter", "Male", 1.7);

logger(person1.firstName);
logger(person2.firstName);

logger('The initial height of ${person1.firstName} is ${person1.height}');
person1.height = 1.7;
logger('The new height of ${person1.firstName} is ${person1.height}');

logger((CustomMath.sqrt(1000)));

let user1 = new User("myusername", "mypassword", "Chineze", "Okadigbo", "female", undefined);
logger('The username of ${user1.firstname} is ${user1.username}');